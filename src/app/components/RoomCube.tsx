'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

type Face = { cls: string; img: boolean; info: boolean; bg: string; ink: string; src: string; alt: string; title: string; w: number; h: number }
type Photo = { src: string; alt: string; w: number; h: number }
type Origin = { x: number; y: number; cs: number; m: string }

const CLOSE_MS = 620

/**
 * Cubo de una sala. Al pulsarlo se desmonta: vuela al centro, sus caras se
 * separan y dejan paso a las fotos de la sala, ampliadas y en carrusel.
 */
export default function RoomCube({ name, faces }: { name: string; faces: Face[] }) {
  const photos: Photo[] = faces.filter((f) => f.img).map((f) => ({ src: f.src, alt: f.alt, w: f.w, h: f.h }))
  const [origin, setOrigin] = useState<Origin | null>(null)
  const [closing, setClosing] = useState(false)
  const [idx, setIdx] = useState(0)
  const wrapRef = useRef<HTMLDivElement>(null)
  const cubeRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const closingRef = useRef(false)
  const touch = useRef<{ x: number; y: number } | null>(null)
  const open = origin !== null

  const openIt = () => {
    const el = cubeRef.current
    if (!el || open) return
    const b = el.getBoundingClientRect()
    const m = getComputedStyle(el).transform
    setIdx(0)
    setClosing(false)
    setOrigin({
      x: b.left + b.width / 2 - window.innerWidth / 2,
      y: b.top + b.height / 2 - window.innerHeight / 2,
      cs: el.offsetWidth,
      m: m && m !== 'none' ? m : 'rotateX(-12deg) rotateY(-18deg)',
    })
  }

  const closeIt = useCallback(() => {
    if (closingRef.current) return
    closingRef.current = true
    setClosing(true)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setTimeout(() => {
      closingRef.current = false
      setOrigin(null)
      setClosing(false)
      wrapRef.current?.focus({ preventScroll: true })
    }, reduced ? 0 : CLOSE_MS)
  }, [])

  const go = useCallback((i: number) => {
    const t = trackRef.current
    if (!t) return
    const n = Math.max(0, Math.min(photos.length - 1, i))
    t.scrollTo({ left: n * t.clientWidth, behavior: 'smooth' })
  }, [photos.length])

  // con la galería abierta: sin scroll de fondo, teclado y gestos solo para ella
  useEffect(() => {
    if (!open) return
    const html = document.documentElement
    const prev = html.style.overflow
    html.style.overflow = 'hidden'
    closeRef.current?.focus({ preventScroll: true })
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeIt()
      else if (e.key === 'ArrowRight') go(idx + 1)
      else if (e.key === 'ArrowLeft') go(idx - 1)
      else if (e.key === 'Tab') {
        const f = boxRef.current?.querySelectorAll<HTMLElement>('button')
        if (!f || !f.length) return
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    window.addEventListener('keydown', onKey)
    const box = boxRef.current
    const stop = (e: Event) => e.stopPropagation()
    const evs = ['wheel', 'touchstart', 'touchmove', 'touchend', 'touchcancel'] as const
    evs.forEach((n) => box?.addEventListener(n, stop, { passive: true }))
    return () => {
      html.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      evs.forEach((n) => box?.removeEventListener(n, stop))
    }
  }, [open, idx, go, closeIt])

  const onScroll = () => {
    const t = trackRef.current
    if (t && t.clientWidth) setIdx(Math.round(t.scrollLeft / t.clientWidth))
  }

  const many = photos.length > 1

  return (
    <>
      <div
        ref={wrapRef}
        className="pcWrap pcBtn"
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-label={`Ampliar las fotos de ${name}`}
        onClick={openIt}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openIt() } }}
      >
        <div ref={cubeRef} className="pcube" style={{ opacity: open ? 0 : 1 }}>
          {faces.map((f) => (
            <div key={f.cls} className={`pf ${f.cls}`} style={{ background: f.bg, color: f.ink }}>
              {f.img && <img loading="lazy" decoding="async" src={f.src} alt={f.alt} width={f.w} height={f.h} />}
              {f.info && <span style={{ padding: '24px', fontFamily: 'var(--font-display), sans-serif', fontWeight: 800, fontSize: '34px', lineHeight: 1 }}>{f.title}</span>}
            </div>
          ))}
        </div>
      </div>
      {origin && createPortal(
        <div
          ref={boxRef}
          className={`lb${closing ? ' lbClosing' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label={`Fotos de ${name}`}
          style={{ '--x': `${origin.x}px`, '--y': `${origin.y}px`, '--cs': `${origin.cs}px`, '--m': origin.m } as React.CSSProperties}
          onClick={(e) => { if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains('lbSlide')) closeIt() }}
          onTouchStart={(e) => { touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY } }}
          onTouchEnd={(e) => {
            const s = touch.current
            touch.current = null
            if (!s) return
            const dx = e.changedTouches[0].clientX - s.x, dy = e.changedTouches[0].clientY - s.y
            if (dy > 90 && Math.abs(dx) < 60) closeIt()
          }}
        >
          <div className="lbFly" aria-hidden="true">
            <div className="lbCube">
              {faces.map((f, i) => (
                <div key={f.cls} className={`pf ${f.cls} lbF${i}`} style={{ background: f.bg, color: f.ink }}>
                  {f.img && <img src={f.src} alt="" width={f.w} height={f.h} />}
                </div>
              ))}
            </div>
          </div>
          <div className="lbStage">
            <div ref={trackRef} className="lbTrack" onScroll={onScroll}>
              {photos.map((p) => (
                <div key={p.src} className="lbSlide">
                  <img src={p.src} alt={p.alt} width={p.w} height={p.h} />
                </div>
              ))}
            </div>
            <div className="lbBar">
              <p className="lbCap" aria-live="polite">{name}{many ? ` · ${idx + 1} de ${photos.length}` : ''}</p>
              {many && (
                <div className="lbNav">
                  <button type="button" className="lbBtn" onClick={() => go(idx - 1)} disabled={idx === 0} aria-label="Foto anterior">←</button>
                  <button type="button" className="lbBtn" onClick={() => go(idx + 1)} disabled={idx === photos.length - 1} aria-label="Foto siguiente">→</button>
                </div>
              )}
            </div>
          </div>
          <button ref={closeRef} type="button" className="lbBtn lbClose" onClick={closeIt} aria-label="Cerrar las fotos">✕</button>
        </div>,
        document.body,
      )}
    </>
  )
}
