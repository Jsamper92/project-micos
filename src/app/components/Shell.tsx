'use client'
import type { ReactNode } from 'react'
import { usePageNavigation } from '../hooks/usePageNavigation'
import { RIPPLE_X, SCENES } from '../data/scenes'
import AdvanceToast from './AdvanceToast'
import DiceNav from './DiceNav'
import ProgressDie from './ProgressDie'

/**
 * Marco común de todas las páginas. La cabecera y el pie llegan como `children`-slots desde el
 * servidor (layout), así no se envían al cliente más que la navegación y los efectos.
 */
export default function Shell({ header, footer, children }: { header: ReactNode; footer: ReactNode; children: ReactNode }) {
  const { sc, prev, flip, leave, adv, advUp, advP, dice, toTop } = usePageNavigation()
  const scene = SCENES[sc]
  return (
    <div style={{ position: 'relative' }}>
      <ProgressDie onClick={toTop} />
      <div className={`mx ${leave}`} style={{ minHeight: '100vh', background: SCENES[prev].bg, color: scene.fg, fontFamily: 'var(--font-body), system-ui, sans-serif', fontSize: 17, lineHeight: 1.55, transition: 'color .5s' }}>
        <div className={`ripple ${flip % 2 ? 'rB' : 'rA'}`} aria-hidden="true" style={{ top: 120, left: RIPPLE_X[sc], background: scene.bg }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <a className="skip" href="#contenido">Saltar al contenido</a>
          <div role="status" aria-live="polite" className="sronly">Escena: {scene.label}</div>
          {adv && <AdvanceToast direction="down" label={SCENES[sc + 1].label} progress={advP} />}
          {advUp && <AdvanceToast direction="up" label={SCENES[sc - 1].label} progress={advP} />}
          {header}
          <DiceNav dice={dice} bg={scene.bg} />
          {children}
          {footer}
        </div>
      </div>
    </div>
  )
}
