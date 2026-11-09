import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { SCENES } from '../data/scenes'
import type { Die } from '../components/DiceNav'

const LAST = SCENES.length - 1
const EDGE = 8
const NEED_WHEEL = 220
const NEED_TOUCH = 160

const reduced = () => {
  try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches } catch { return false }
}
const yNow = () => window.pageYOffset || document.documentElement.scrollTop || 0
const distToBottom = () => document.documentElement.scrollHeight - window.innerHeight - yNow()
const longPage = () => document.documentElement.scrollHeight > window.innerHeight + 200
const typing = () => !!document.activeElement && /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)

interface Nav { acc: number; dir: number; tl: number; ty: number | null; hide: ReturnType<typeof setTimeout> | undefined; raf: number; armed: boolean; touchFresh: boolean }
interface Runtime {
  sc: number
  legal: boolean
  prevSc: number
  first: boolean
  navLock: number
  lockUntil: number
  switching: boolean
  pendingDir: number
  adv: boolean
  advUp: boolean
  advP: number
  nav: Nav
  go: (i: number, dir?: number) => void
  resetNav: () => void
}

/**
 * Estado y comportamiento de la navegación entre páginas: cubos, transición de salida/entrada
 * y paso de página al llegar al borde con la rueda o el dedo.
 */
export function usePageNavigation() {
  const pathname = usePathname()
  const router = useRouter()
  const found = SCENES.findIndex((s) => s.href === pathname)
  const legal = found < 0
  const sc = legal ? 0 : found
  const [prev, setPrev] = useState(sc)
  const [anims, setAnims] = useState<number[]>(() => SCENES.map(() => 0))
  const [flip, setFlip] = useState(0)
  const [leave, setLeave] = useState<'' | 'leaving' | 'entering'>('')
  const [adv, setAdv] = useState(false)
  const [advUp, setAdvUp] = useState(false)
  const [advP, setAdvP] = useState(0)

  const rt = useRef<Runtime>({
    sc, legal, prevSc: sc, first: true, navLock: 0, lockUntil: 0, switching: false, pendingDir: 0, adv: false, advUp: false, advP: 0,
    nav: { acc: 0, dir: 0, tl: 0, ty: null, hide: undefined, raf: 0, armed: false, touchFresh: false },
    go: () => {}, resetNav: () => {}
  })
  rt.current.sc = sc
  rt.current.legal = legal
  rt.current.adv = adv
  rt.current.advUp = advUp
  rt.current.advP = advP

  // Al cambiar de ruta: animación de entrada, scroll y foco
  useEffect(() => {
    const r = rt.current
    if (r.first) { r.first = false; r.prevSc = sc; return }
    const dir = r.pendingDir || (sc >= r.prevSc ? 1 : -1)
    r.pendingDir = 0
    setPrev(r.prevSc)
    r.prevSc = sc
    setAnims((a) => a.map((v, i) => (i === sc ? (v === 1 ? 2 : 1) : v)))
    setFlip((f) => f + 1)
    setAdv(false); setAdvUp(false); setAdvP(0)
    setLeave('entering')
    document.documentElement.style.setProperty('--pdir', dir > 0 ? '1' : '-1')
    requestAnimationFrame(() => requestAnimationFrame(() => {
      window.scrollTo({ top: dir > 0 ? 0 : document.documentElement.scrollHeight, behavior: 'auto' })
      r.navLock = Date.now() + 900
    }))
    const focusT = setTimeout(() => { document.getElementById('contenido')?.focus({ preventScroll: true }) }, 80)
    const doneT = setTimeout(() => { r.switching = false; setLeave('') }, 560)
    return () => { clearTimeout(focusT); clearTimeout(doneT) }
  }, [pathname, sc])

  // Paso de página en los bordes (rueda y táctil)
  useEffect(() => {
    const r = rt.current
    const nav = r.nav
    SCENES.forEach((s) => router.prefetch(s.href))

    const atBottom = () => !r.legal && r.sc < LAST && longPage() && distToBottom() <= EDGE
    const atTop = () => !r.legal && r.sc > 0 && yNow() <= EDGE

    r.resetNav = () => {
      nav.acc = 0; nav.dir = 0; nav.armed = false
      clearTimeout(nav.hide)
      if (r.adv || r.advUp || r.advP) { setAdv(false); setAdvUp(false); setAdvP(0) }
    }

    r.go = (i, dirOverride) => {
      if (r.switching || i < 0 || i > LAST) return
      if (i === r.sc) { setAnims((a) => a.map((v, k) => (k === i ? (v === 1 ? 2 : 1) : v))); return }
      r.switching = true
      r.navLock = Date.now() + 1400
      r.lockUntil = Date.now() + 900
      const dir = dirOverride || (i > r.sc ? 1 : -1)
      r.pendingDir = dir
      nav.acc = 0; nav.dir = 0; nav.armed = false
      clearTimeout(nav.hide)
      document.documentElement.style.setProperty('--pdir', dir > 0 ? '1' : '-1')
      setAdv(false); setAdvUp(false); setAdvP(1); setLeave('leaving')
      setTimeout(() => { setAdvP(0); router.push(SCENES[i].href, { scroll: false }) }, reduced() ? 0 : 240)
      // red de seguridad: si la ruta no cambia, se libera la navegación
      setTimeout(() => { if (r.switching && r.sc !== i) { r.switching = false; setLeave('') } }, 4000)
    }

    // el aviso se queda mientras sigas en el borde; el progreso se pierde poco a poco si paras
    const armHide = () => {
      clearTimeout(nav.hide)
      nav.hide = setTimeout(() => {
        nav.acc = 0; nav.dir = 0
        if (atBottom()) { setAdv(true); setAdvUp(false); setAdvP(0) } else r.resetNav()
      }, 2600)
    }

    const intent = (dy: number, need: number, touch: boolean) => {
      const now = Date.now()
      if (!dy || now < r.navLock || reduced() || typing()) return
      const dir = dy > 0 ? 1 : -1
      const edge = dir > 0 ? atBottom() : atTop()
      if (!edge) { if (nav.dir === dir) r.resetNav(); nav.armed = false; nav.tl = now; return }
      if (dir !== nav.dir) { nav.acc = 0; nav.dir = dir; nav.armed = false }
      // solo cuenta un gesto nuevo: rueda tras una pausa, o un dedo que se apoya ya estando en el borde
      if (!nav.armed && (touch ? nav.touchFresh : now - nav.tl > 140)) nav.armed = true
      if (now - nav.tl > 1500) nav.acc = 0
      nav.tl = now
      if (nav.armed) nav.acc += Math.abs(dy)
      if (!nav.raf) {
        nav.raf = requestAnimationFrame(() => {
          nav.raf = 0
          if (!nav.dir) return
          setAdv(nav.dir > 0); setAdvUp(nav.dir < 0)
          setAdvP(Math.min(1, nav.acc / need))
        })
      }
      armHide()
      if (nav.acc >= need) r.go(r.sc + dir, dir)
    }

    const onWheel = (e: WheelEvent) => {
      let dy = e.deltaY
      if (e.deltaMode === 1) dy *= 16
      else if (e.deltaMode === 2) dy *= window.innerHeight
      if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return
      intent(dy, NEED_WHEEL, false)
    }
    const onTouchStart = (e: TouchEvent) => { nav.ty = e.touches.length === 1 ? e.touches[0].clientY : null; nav.touchFresh = atBottom() || atTop() }
    const onTouchMove = (e: TouchEvent) => {
      if (nav.ty == null || e.touches.length !== 1) return
      const y = e.touches[0].clientY
      const dy = nav.ty - y
      nav.ty = y
      intent(dy, NEED_TOUCH, true)
    }
    const onTouchEnd = () => { nav.ty = null }
    const onScroll = () => {
      if (Date.now() < r.navLock || reduced() || typing()) return
      if (atBottom()) { if (!r.adv) { setAdv(true); setAdvUp(false); setAdvP(0) } armHide(); return }
      if (!atTop() && (r.adv || r.advUp)) r.resetNav()
    }

    const opts = { passive: true } as const
    window.addEventListener('wheel', onWheel, opts)
    window.addEventListener('touchstart', onTouchStart, opts)
    window.addEventListener('touchmove', onTouchMove, opts)
    window.addEventListener('touchend', onTouchEnd, opts)
    window.addEventListener('touchcancel', onTouchEnd, opts)
    window.addEventListener('scroll', onScroll, opts)
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('touchcancel', onTouchEnd)
      window.removeEventListener('scroll', onScroll)
      clearTimeout(nav.hide)
    }
  }, [router])

  const dice: Die[] = SCENES.map((s, i) => {
    const k = anims[i]
    const anim = k === 1 ? 'spinA .9s cubic-bezier(.2,.8,.2,1) both'
      : k === 2 ? 'spinB .9s cubic-bezier(.2,.8,.2,1) both'
        : 'dropA 1.15s cubic-bezier(.3,.7,.3,1) ' + (0.1 + i * 0.13) + 's both'
    const current = !legal && sc === i
    return {
      href: s.href, l: s.l, label: s.label, short: s.short, c: s.c, top: s.top, side: s.side, ink: s.ink,
      anim,
      current: current ? 'page' : undefined,
      liftT: current ? 'translateY(-6px)' : 'none',
      idleDelay: (2 + i * 1.3) + 's',
      lblOp: 1,
      lblDeco: current ? 'underline' : 'none',
      go: (e: MouseEvent) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
        e.preventDefault()
        const r = rt.current
        if (Date.now() < r.lockUntil) return
        r.lockUntil = Date.now() + 450
        r.navLock = Date.now() + 900
        r.resetNav()
        r.go(i)
      }
    }
  })

  const toTop = () => {
    rt.current.navLock = Date.now() + 900
    window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' })
  }

  return { sc, prev, flip, leave, adv: adv && sc < LAST, advUp: advUp && sc > 0, advP, dice, toTop }
}
