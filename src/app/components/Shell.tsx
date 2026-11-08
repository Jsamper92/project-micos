'use client'
import { Fragment, useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const S = [
  { href: '/', l: 'm', label: 'Micos', c: '#008FC5', top: '#83AF15', side: '#006E99', ink: '#FFFFFF', bg: '#FFF9EC', fg: '#203048' },
  { href: '/instalaciones', l: 'i', label: 'Instalaciones', c: '#E47C0A', top: '#EBC645', side: '#B35F00', ink: '#203048', bg: '#E47C0A', fg: '#203048' },
  { href: '/cada-detalle', l: 'c', label: 'Cada detalle', c: '#83AF15', top: '#EBC645', side: '#5F8410', ink: '#203048', bg: '#83AF15', fg: '#203048' },
  { href: '/os-respondemos', l: 'o', label: 'Os respondemos', c: '#E23200', top: '#E47C0A', side: '#A82400', ink: '#FFFFFF', bg: '#C42B00', fg: '#FFFFFF' },
  { href: '/solicitar-visita', l: 's', label: 'Solicitar visita', c: '#EBC645', top: '#83AF15', side: '#C79A12', ink: '#203048', bg: '#EBC645', fg: '#203048' }
]
const oxs = ['30%', '40%', '50%', '60%', '70%']
const reduced = () => { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches } catch (e) { return false } }

export default function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const found = S.findIndex((s) => s.href === pathname)
  const sc = found < 0 ? 0 : found
  const [prev, setPrev] = useState(sc)
  const [anims, setAnims] = useState<number[]>([0, 0, 0, 0, 0])
  const [flip, setFlip] = useState(0)
  const [leave, setLeave] = useState('')
  const [adv, setAdv] = useState(false)
  const [advUp, setAdvUp] = useState(false)
  const [advP, setAdvP] = useState(0)
  const R = useRef<any>({ sc, prevSc: sc, first: true, navLock: 0, lockUntil: 0, switching: false, dir: 1, adv: false, advUp: false, advP: 0, nav: { acc: 0, dir: 0, tl: 0, ty: null, hide: 0, raf: 0, armed: false, touchFresh: false } })
  R.current.sc = sc
  R.current.adv = adv; R.current.advUp = advUp; R.current.advP = advP

  // Al cambiar de ruta: animación de entrada, scroll y foco
  useEffect(() => {
    const r = R.current
    if (r.first) { r.first = false; r.prevSc = sc; return }
    const dir = r.pendingDir || (sc >= r.prevSc ? 1 : -1)
    r.pendingDir = 0
    setPrev(r.prevSc); r.prevSc = sc
    setAnims((a) => { const b = a.slice(); b[sc] = b[sc] === 1 ? 2 : 1; return b })
    setFlip((f) => f + 1)
    setAdv(false); setAdvUp(false); setAdvP(0)
    setLeave('entering')
    document.documentElement.style.setProperty('--pdir', dir > 0 ? '1' : '-1')
    requestAnimationFrame(() => requestAnimationFrame(() => {
      try { window.scrollTo({ top: dir > 0 ? 0 : document.documentElement.scrollHeight, behavior: 'auto' }) } catch (e) {}
      r.navLock = Date.now() + 900
    }))
    const t1 = setTimeout(() => { try { const m = document.getElementById('contenido'); if (m) m.focus({ preventScroll: true }) } catch (e) {} }, 80)
    const t2 = setTimeout(() => { r.switching = false; setLeave('') }, 560)
    return () => { clearTimeout(t1); clearTimeout(t2) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    const r = R.current
    S.forEach((s) => { try { router.prefetch(s.href) } catch (e) {} })
    const NAV = r.nav
    const yNow = () => window.pageYOffset || document.documentElement.scrollTop || 0
    const distB = () => { const de = document.documentElement; return de.scrollHeight - window.innerHeight - yNow() }
    const AT = 8
    const longPage = () => document.documentElement.scrollHeight > window.innerHeight + 200
    const atBottom = () => r.sc < 4 && longPage() && distB() <= AT
    const atTop = () => r.sc > 0 && yNow() <= AT
    const typing = () => !!document.activeElement && /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)
    NAV.reset = () => { NAV.acc = 0; NAV.dir = 0; NAV.armed = false; clearTimeout(NAV.hide); if (r.adv || r.advUp || r.advP) { setAdv(false); setAdvUp(false); setAdvP(0) } }
    r.go = (i: number, dirOverride?: number) => {
      if (r.switching || i < 0 || i > 4) return
      if (i === r.sc) { setAnims((a) => { const b = a.slice(); b[i] = b[i] === 1 ? 2 : 1; return b }); return }
      r.switching = true
      r.navLock = Date.now() + 1400; r.lockUntil = Date.now() + 900
      const dir = dirOverride || (i > r.sc ? 1 : -1)
      r.pendingDir = dir
      NAV.acc = 0; NAV.dir = 0; NAV.armed = false; clearTimeout(NAV.hide)
      try { document.documentElement.style.setProperty('--pdir', dir > 0 ? '1' : '-1') } catch (e) {}
      setAdv(false); setAdvUp(false); setAdvP(1); setLeave('leaving')
      setTimeout(() => { setAdvP(0); router.push(S[i].href, { scroll: false }) }, reduced() ? 0 : 240)
      // red de seguridad: si la ruta no cambia, se libera la navegación
      setTimeout(() => { if (r.switching && r.sc !== i) { r.switching = false; setLeave('') } }, 4000)
    }
    const armHide = () => { clearTimeout(NAV.hide); NAV.hide = setTimeout(() => { NAV.acc = 0; NAV.dir = 0; if (atBottom()) { setAdv(true); setAdvUp(false); setAdvP(0) } else NAV.reset() }, 2600) }
    const intent = (dy: number, need: number, touch: boolean) => {
      const now = Date.now()
      if (!dy || now < r.navLock || reduced() || typing()) return
      const dir = dy > 0 ? 1 : -1
      const edge = dir > 0 ? atBottom() : atTop()
      if (!edge) { if (NAV.dir === dir) NAV.reset(); NAV.armed = false; NAV.tl = now; return }
      if (dir !== NAV.dir) { NAV.acc = 0; NAV.dir = dir; NAV.armed = false }
      if (!NAV.armed) { if (touch ? NAV.touchFresh : now - NAV.tl > 140) NAV.armed = true }
      if (now - NAV.tl > 1500) NAV.acc = 0
      NAV.tl = now
      if (NAV.armed) NAV.acc += Math.abs(dy)
      if (!NAV.raf) NAV.raf = requestAnimationFrame(() => { NAV.raf = 0; if (NAV.dir) { const p = Math.min(1, NAV.acc / need); if (NAV.dir > 0) { setAdv(true); setAdvUp(false) } else { setAdvUp(true); setAdv(false) } setAdvP(p) } })
      armHide()
      if (NAV.acc >= need) r.go(r.sc + dir, dir)
    }
    const onWheel = (e: WheelEvent) => { let dy = e.deltaY; if (e.deltaMode === 1) dy *= 16; else if (e.deltaMode === 2) dy *= window.innerHeight; if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; intent(dy, 220, false) }
    const onTS = (e: TouchEvent) => { NAV.ty = e.touches.length === 1 ? e.touches[0].clientY : null; NAV.touchFresh = atBottom() || atTop() }
    const onTM = (e: TouchEvent) => { if (NAV.ty == null || e.touches.length !== 1) return; const y = e.touches[0].clientY; const dy = NAV.ty - y; NAV.ty = y; intent(dy, 160, true) }
    const onTE = () => { NAV.ty = null }
    const onAnyScroll = () => {
      if (Date.now() < r.navLock || reduced() || typing()) return
      if (atBottom()) { if (!r.adv) { setAdv(true); setAdvUp(false); setAdvP(0) } armHide(); return }
      if (!atTop() && (r.adv || r.advUp)) NAV.reset()
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTS, { passive: true })
    window.addEventListener('touchmove', onTM, { passive: true })
    window.addEventListener('touchend', onTE, { passive: true })
    window.addEventListener('touchcancel', onTE, { passive: true })
    window.addEventListener('scroll', onAnyScroll, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel); window.removeEventListener('touchstart', onTS); window.removeEventListener('touchmove', onTM)
      window.removeEventListener('touchend', onTE); window.removeEventListener('touchcancel', onTE); window.removeEventListener('scroll', onAnyScroll)
      clearTimeout(NAV.hide)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const animFor = (i: number) => {
    const k = anims[i]
    if (k === 1) return 'spinA .9s cubic-bezier(.2,.8,.2,1) both'
    if (k === 2) return 'spinB .9s cubic-bezier(.2,.8,.2,1) both'
    return 'dropA 1.15s cubic-bezier(.3,.7,.3,1) ' + (0.1 + i * 0.13) + 's both'
  }
  const dice = S.map((d, i) => ({
    ...d,
    anim: animFor(i),
    go: (e: MouseEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
      e.preventDefault()
      const r = R.current
      if (Date.now() < r.lockUntil) return
      r.lockUntil = Date.now() + 450; r.navLock = Date.now() + 900
      if (r.nav.reset) r.nav.reset()
      r.go && r.go(i)
    },
    current: sc === i ? 'page' : undefined,
    aria: d.label,
    idleDelay: (2 + i * 1.3) + 's',
    liftT: sc === i ? 'translateY(-6px)' : 'none',
    lblOp: 1, lblDeco: sc === i ? 'underline' : 'none'
  }))
  const smoothB = () => (reduced() ? 'auto' : 'smooth')
  const v: any = {
    toTop: () => { R.current.navLock = Date.now() + 900; try { window.scrollTo({ top: 0, behavior: smoothB() as ScrollBehavior }) } catch (e) {} },
    leaveCls: leave, prevBg: S[prev].bg, bg: S[sc].bg, fg: S[sc].fg, rip: flip % 2 ? 'rB' : 'rA', ox: oxs[sc], ripTop: '120px',
    sceneMsg: 'Escena: ' + S[sc].label,
    advOn: adv && sc < 4, advLabel: sc < 4 ? S[sc + 1].label : '', advUpOn: advUp && sc > 0, advUpLabel: sc > 0 ? S[sc - 1].label : '', advPv: String(advP || 0),
    navSize: '60px', stickCls: 'stick', navPad: '14px 16px 8px', dice
  }
  return (
<div style={{ position: "relative" }}>
<button type="button" className="progDie" onClick={v.toTop} aria-label="Volver arriba"><span className="progSpin" style={{ display: "block", "--s": "46px", width: "46px", height: "46px", transformStyle: "preserve-3d", position: "relative", margin: "9px" } as React.CSSProperties}><span className="face fr" style={{ background: "#008FC5", color: "#fff", fontSize: "26px" }}>m</span><span className="face bk" style={{ background: "#E23200" }}></span><span className="face rt" style={{ background: "#E47C0A" }}></span><span className="face lt" style={{ background: "#83AF15" }}></span><span className="face tp" style={{ background: "#EBC645" }}></span><span className="face bt" style={{ background: "#203048" }}></span></span></button>
<div className={`mx ${v.leaveCls}`} style={{ minHeight: "100vh", background: v.prevBg, color: v.fg, fontFamily: "var(--font-body), system-ui, sans-serif", fontSize: "17px", lineHeight: "1.55", transition: "color .5s" }}>
<div className={`ripple ${v.rip}`} aria-hidden="true" style={{ top: v.ripTop, left: v.ox, background: v.bg }}></div>

<div style={{ position: "relative", zIndex: "1" }}>
<a className="skip" href="#contenido">Saltar al contenido</a>
<div role="status" aria-live="polite" className="sronly">{v.sceneMsg}</div>
{v.advOn && (<><div aria-hidden="true" className="advToast"><span>↓ {v.advLabel}</span><em>Sigue bajando para pasar de página</em><i style={{ transform: `scaleX(${v.advPv})` }}></i></div></>)}{v.advUpOn && (<><div aria-hidden="true" className="advToast"><span>↑ {v.advUpLabel}</span><em>Sigue subiendo para volver</em><i style={{ transform: `scaleX(${v.advPv})` }}></i></div></>)}
<header className="pad" style={{ maxWidth: "1360px", margin: "0 auto", padding: "18px 32px 0", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", fontSize: "14px", fontWeight: "700" }}>
<span className="hideM">Centro de Educación Infantil · Guadalajara</span>
<span style={{ display: "flex", flexWrap: "wrap", gap: "18px", alignItems: "center" }}><a href="tel:+34675733140" aria-label="Llamar a Micos al 675 733 140" style={{ textDecoration: "none", display: "inline-flex", gap: "6px", alignItems: "center", minHeight: "44px" }}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path></svg>675 733 140</a><a href="https://wa.me/34675733140?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20Micos." target="_blank" rel="noopener" aria-label="Escribir a Micos por WhatsApp (se abre en una ventana nueva)" style={{ textDecoration: "none", display: "inline-flex", gap: "6px", alignItems: "center", minHeight: "44px" }}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"></path></svg>WhatsApp</a></span>
</header>

<nav aria-label="Secciones de Micos" className={`navRow ${v.stickCls}`} style={{ "--sd": v.navSize, "--navbg": v.bg, display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "14px", padding: v.navPad } as React.CSSProperties}>
{v.dice.map((d: any, _i: number) => (<Fragment key={_i}>
<a className="dieBtn" onClick={d.go} aria-current={d.current} href={d.href}>
<span className="lift" style={{ display: "block", transform: d.liftT }}>
<span className="idle" style={{ animationDelay: d.idleDelay }}><span className="die" aria-hidden="true" style={{ display: "block", animation: d.anim }}>
<span className="face fr" style={{ background: d.c, color: d.ink }}>{d.l}</span>
<span className="face bk" style={{ background: d.c }}></span>
<span className="face rt" style={{ background: d.side }}></span>
<span className="face lt" style={{ background: d.side }}></span>
<span className="face tp" style={{ background: d.top }}></span>
<span className="face bt" style={{ background: d.side }}></span>
</span>
</span>
</span>
<span className="shadow" aria-hidden="true" style={{ display: "block" }}></span>
<span className="dieLbl" style={{ opacity: d.lblOp, textDecoration: d.lblDeco, textDecorationThickness: "3px", textUnderlineOffset: "5px" }}>{d.label}</span>
</a>
</Fragment>))}
</nav>

{children}









<footer className="pad" style={{ maxWidth: "1360px", margin: "0 auto", padding: "48px 32px 32px", display: "flex", flexDirection: "column", gap: "24px", fontSize: "15px" }}>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", alignItems: "flex-end" }}>
<address style={{ fontStyle: "normal", display: "flex", flexDirection: "column", gap: "4px" }}><strong style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "26px" }}>Micos · Centro de Educación Infantil</strong><a href="https://www.google.com/maps/search/?api=1&query=Micos+Guarder%C3%ADa+Calle+Bulevar+del+Alto+Tajo+40+19005+Guadalajara" target="_blank" rel="noopener" style={{ fontWeight: "700" }}>Calle Bulevar del Alto Tajo, 40 · 19005 Guadalajara</a></address>
<ul aria-label="Contactar con Micos" style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "10px" }}>
<li><a href="tel:+34675733140" aria-label="Llamar a Micos al 675 733 140" style={{ display: "inline-flex", gap: "8px", alignItems: "center", minHeight: "48px", padding: "0 18px", border: "3px solid currentColor", borderRadius: "14px", textDecoration: "none", fontWeight: "700" }}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path></svg>Llamar · 675 733 140</a></li>
<li><a href="https://wa.me/34675733140?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20Micos." target="_blank" rel="noopener" aria-label="Escribir a Micos por WhatsApp (se abre en una ventana nueva)" style={{ display: "inline-flex", gap: "8px", alignItems: "center", minHeight: "48px", padding: "0 18px", border: "3px solid currentColor", borderRadius: "14px", textDecoration: "none", fontWeight: "700" }}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"></path></svg>WhatsApp</a></li>
<li><a href="mailto:info@micosguarderia.es?subject=Quiero%20conocer%20Micos" aria-label="Enviar un email a info@micosguarderia.es" style={{ display: "inline-flex", gap: "8px", alignItems: "center", minHeight: "48px", padding: "0 18px", border: "3px solid currentColor", borderRadius: "14px", textDecoration: "none", fontWeight: "700" }}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>info@micosguarderia.es</a></li>
</ul>
</div>
<p style={{ margin: "0", fontSize: "13px", fontWeight: "700", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between" }}><span>© Micos Guardería</span><span><a href="/documents/Aviso-Legal.pdf" target="_blank" rel="noopener">Aviso legal</a></span></p>
</footer>
</div>
</div>
</div>
  )
}
