'use client'
import { Fragment, useState } from 'react'
import Link from 'next/link'

export default function CadaDetalle() {
  const [feat, setFeat] = useState<number[]>([])
  const ICONS = ['aulas', 'jardin', 'calef', 'suelo', 'aire', 'puerta']
  const FT = [
    ['aulas', '6 aulas', 'Cada grupo de edad tiene su propio espacio, con luz natural y material a su altura.', '#008FC5', '#FFFFFF'],
    ['jardin', 'Jardín privado', 'Juego al aire libre cada día, en un espacio que solo usan los niños de Micos.', '#83AF15', '#203048'],
    ['calef', 'Calefacción', 'Aulas a una temperatura constante y agradable en los inviernos de Guadalajara.', '#E47C0A', '#203048'],
    ['suelo', 'Suelo radiante', 'Gatean, juegan y se sientan en el suelo: por eso el calor sale de ahí.', '#EBC645', '#203048'],
    ['aire', 'Aire acondicionado', 'Abrimos todo el año, también en verano, con las aulas frescas.', '#FFF9EC', '#203048'],
    ['puerta', 'Puertas pivotantes', 'Puertas pivotantes: los dedos pequeños no se quedan atrapados.', '#E23200', '#FFFFFF']
  ]
  const feats = FT.map((f, i) => {
    const on = feat.indexOf(i) >= 0
    const o: any = { n: '0' + (i + 1), t: f[1], why: f[2], c: f[3], ink: f[4], rot: ['-10deg', '7deg', '-6deg', '9deg', '-8deg', '6deg'][i], pressed: on ? 'true' : 'false', aria: f[1] + '. ' + f[2], cubeT: 'translateZ(-150px) rotateX(' + (on ? -90 : 0) + 'deg)', toggle: () => setFeat((cur) => (cur.indexOf(i) >= 0 ? cur.filter((x) => x !== i) : [...cur, i])) }
    ICONS.forEach((key) => { o['i_' + key] = key === f[0] })
    return o
  })
  const v: any = { feats }

  return (<><main id="contenido" tabIndex={-1} className="pad" style={{ maxWidth: "1360px", margin: "0 auto", padding: "24px 32px 120px", display: "flex", flexDirection: "column", gap: "56px" }}>
<div className="g2" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "32px", alignItems: "end" }}>
<h1 className="fall hT" style={{ margin: "0", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "112px", lineHeight: ".84", letterSpacing: "-0.055em" }}><span style={{ display: 'block', margin: '0 0 16px', fontFamily: 'var(--font-body), system-ui, sans-serif', fontWeight: 700, fontSize: 15, lineHeight: 1.3, letterSpacing: '.12em', textTransform: 'uppercase' }}>Escuela infantil en Guadalajara</span><span className="sronly">: </span><span style={{ color: "#203048" }}>C</span>ada detalle cuenta</h1>
<p className="fall" style={{ animationDelay: ".1s", margin: "0", fontSize: "20px" }}>Un edificio pensado para niños de verdad. Seis detalles que marcan la diferencia en el día a día de los peques.</p>
</div>
<ul className="featGrid" style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "22px" }}>
{v.feats.map((f: any, _i: number) => (<Fragment key={_i}>
<li className="sr" style={{ "--rot": f.rot } as React.CSSProperties}>
<div className="featCard" style={{ background: f.c, color: f.ink }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}><span className="featIco"><span className="featRoll">{f.i_aulas && (<><svg aria-hidden="true" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V9l9-6 9 6v12"></path><path d="M9 21v-6h6v6"></path></svg></>)}{f.i_jardin && (<><svg aria-hidden="true" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21v-7"></path><circle cx="12" cy="9" r="5"></circle><path d="M4 21h16"></path></svg></>)}{f.i_calef && (<><svg aria-hidden="true" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 4v16M12 4v16M17 4v16"></path><path d="M4 20h16"></path></svg></>)}{f.i_suelo && (<><svg aria-hidden="true" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17h18"></path><path d="M6 13c1-2 3-2 4 0s3 2 4 0 3-2 4 0"></path><path d="M6 9c1-2 3-2 4 0s3 2 4 0 3-2 4 0"></path></svg></>)}{f.i_aire && (<><svg aria-hidden="true" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h12a3 3 0 1 0-3-3"></path><path d="M3 12h16a3 3 0 1 1-3 3"></path><path d="M3 16h8"></path></svg></>)}{f.i_puerta && (<><svg aria-hidden="true" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 21V3h12v18"></path><path d="M6 21h12"></path><circle cx="15" cy="12" r="1"></circle></svg></>)}</span></span><span aria-hidden="true" style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "44px", lineHeight: "1", opacity: ".45" }}>{f.n}</span></div><h2 style={{ margin: "0", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "32px", lineHeight: "1" }}>{f.t}</h2><p style={{ margin: "0", fontSize: "18px" }}>{f.why}</p></div>
</li>
</Fragment>))}
</ul>
<div className="sr g2" style={{ "--rot": "-4deg", display: "grid", gridTemplateColumns: "1fr auto", gap: "24px", alignItems: "center", background: "#FFF9EC", color: "#203048", border: "3px solid #203048", borderRadius: "30px", padding: "32px", boxShadow: "10px 10px 0 #203048" } as React.CSSProperties}>
<p style={{ margin: "0", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "34px", lineHeight: "1.05" }}>Lo mejor es comprobarlo en persona: ven a ver el edificio por dentro.</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}><Link href="/instalaciones" className="btnP pop" style={{ textDecoration: "none", background: "#FFFFFF", color: "#203048", border: "3px solid #203048" }}>Ver instalaciones</Link><Link href="/solicitar-visita" className="btnP pop" style={{ textDecoration: "none", background: "#203048", color: "#FFF9EC" }}>Solicitar visita</Link></div>
</div>
</main></>)
}
