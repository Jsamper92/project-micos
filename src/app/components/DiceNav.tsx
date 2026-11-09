import { Fragment, type CSSProperties, type MouseEvent } from 'react'

export interface Die {
  href: string
  l: string
  label: string
  short: string
  c: string
  top: string
  side: string
  ink: string
  anim: string
  current: 'page' | undefined
  liftT: string
  idleDelay: string
  lblOp: number
  lblDeco: string
  go: (e: MouseEvent) => void
}

export default function DiceNav({ dice, bg }: { dice: Die[]; bg: string }) {
  return (
<nav aria-label="Secciones de Micos" className="navRow stick" style={{ "--sd": '60px', "--navbg": bg, display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "14px", padding: '14px 16px 8px' } as React.CSSProperties}>
{dice.map((d) => (<Fragment key={d.href}>
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
<span className="dieLbl" style={{ opacity: d.lblOp, textDecoration: d.lblDeco, textDecorationThickness: "3px", textUnderlineOffset: "5px" }}><span className="lblFull">{d.label}</span><span className="lblShort" aria-hidden="true">{d.short}</span></span>
</a>
</Fragment>))}
</nav>
  )
}
