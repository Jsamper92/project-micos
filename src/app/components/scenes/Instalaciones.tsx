import { Fragment } from 'react'
import Link from 'next/link'

export default function Instalaciones() {
const I = '/images/micos/'
const face = (cls: string, o: any) => ({ cls, img: !!o.src, info: !o.src, bg: o.bg || '#FFF9EC', ink: o.ink || '#203048', src: o.src || '', alt: o.alt || '', title: o.title || '', w: o.w || 0, h: o.h || 0 })
const PC = [
  { tag: 'Aula', name: 'Aula verde', text: 'Un aula amplia y luminosa con pizarra, espejo, rincón de cunas y mesas bajas de colores.', chips: ['Luz natural', 'Pizarra', 'Rincón de cunas'], c: '#83AF15', ph: [[I + 'verde_mesas.jpg', 'Aula verde, mesas de colores', 640, 426], [I + 'verde_pizarra.jpg', 'Aula verde, pizarra y hamaca', 1535, 1024], [I + 'verde_cunas.jpg', 'Aula verde, cunas y colchoneta', 1448, 1086]] },
  { tag: '1–2 años', name: 'Aula naranja', text: 'Mesas hexagonales para trabajar en grupo, estanterías a su alcance y percheros con su nombre.', chips: ['Mesas en grupo', 'Material a su altura'], c: '#E47C0A', ph: [[I + 'naranja_mesas.jpg', 'Aula naranja con mesas hexagonales', 1535, 1024], [I + 'naranja_perchas.jpg', 'Aula naranja, percheros y ventana', 640, 426], [I + 'naranja_ventana.jpg', 'Mesas preparadas junto a la ventana', 640, 426]] },
  { tag: 'Aula', name: 'Aula amarilla', text: 'Mesas hexagonales, percheros con sus dibujos y mucha luz. Un aula alegre para los más mayores.', chips: ['Luminosa', 'Mesas en grupo', 'Aire acondicionado'], c: '#EBC645', ph: [[I + 'amarilla_a.jpg', 'Aula amarilla con banderines y mesa hexagonal', 768, 1024], [I + 'amarilla_b.jpg', 'Aula amarilla, mesas y sillas de colores', 640, 426], [I + 'verde_extra.jpg', 'Aula verde con cunas, mesa y banderines', 768, 1024]] },
  { tag: 'Cuidado', name: 'Descanso e higiene', text: 'Sala de cunas tranquila y baños adaptados a su tamaño, con cambiador.', chips: ['Cunas', 'Baños a su medida', 'Suelo radiante'], c: '#008FC5', ph: [[I + 'cunas.jpg', 'Sala de cunas', 1536, 1024], [I + 'banos.jpg', 'Baños infantiles con azulejos de colores', 426, 640]] },
  { tag: 'Exterior', name: 'Jardín y edificio', text: 'Un edificio propio con jardín privado de césped, tobogán y mural, solo para los niños de Micos.', chips: ['Jardín privado', 'Edificio propio'], c: '#E23200', ph: [[I + 'jardin.jpg', 'Jardín privado', 1448, 1086], [I + 'fachada.jpg', 'Fachada de Micos', 1447, 1087], [I + 'banderola.jpg', 'Banderola con los cubos de Micos', 1086, 1448]] }
]
const pcubes = PC.map((p, i) => {
  const sides: any[] = p.ph.map((x: any) => ({ src: x[0], alt: x[1], w: x[2], h: x[3] }))
  const ink = p.c === '#008FC5' || p.c === '#E23200' ? '#FFFFFF' : '#203048'
  return { ...p, o1: i % 2 ? 2 : 1, o2: i % 2 ? 1 : 2, rot: i % 2 ? '8deg' : '-8deg', chips: p.chips.map((t) => ({ t })),
    faces: [face('pf0', sides[0]), face('pf1', sides[1]), face('pf2', sides[2] || { bg: p.c, ink, title: p.name }), face('pf3', { bg: p.c, ink, title: p.name }), face('pf4', { bg: '#EBC645', title: '' }), face('pf5', { bg: p.c, title: '' })] }
})
const v: any = { pcubes }

  return (<><main id="contenido" tabIndex={-1}>
<section className="pad g2" style={{ maxWidth: "1360px", margin: "0 auto", padding: "24px 32px 60px", display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: "32px", alignItems: "end" }}>
<h1 className="fall hT" style={{ margin: "0", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "min(120px, 8.2vw)", lineHeight: ".84", letterSpacing: "-0.055em", overflowWrap: "anywhere" }}><span style={{ display: 'block', margin: '0 0 16px', fontFamily: 'var(--font-body), system-ui, sans-serif', fontWeight: 700, fontSize: 15, lineHeight: 1.3, letterSpacing: '.12em', textTransform: 'uppercase' }}>Guardería con jardín en Guadalajara</span><span className="sronly">: </span><span style={{ color: "#203048" }}>I</span>nstalaciones</h1>
<p className="fall" style={{ animationDelay: ".1s", margin: "0", fontSize: "20px" }}>Seis aulas, un jardín privado y todo lo que no se ve pero se nota. Cada sala es un cubo: baja y gira para enseñarte sus caras.</p>
</section>
<section className="facade" style={{ position: "relative", height: "min(90vh, 820px)", overflow: "hidden", borderBlock: "3px solid #203048" }} aria-label="Fachada de Micos">
<img loading="lazy" decoding="async" className="zoomIn" src="/images/micos/fachada.jpg" alt="Fachada de Micos en el Bulevar del Alto Tajo" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} width="1447" height="1087" />
<p className="facadeCap">Bulevar del Alto Tajo, 40 · Guadalajara</p>
</section>
{v.pcubes.map((pc: any, _i: number) => (<Fragment key={_i}>
<article className="pad pcRow g2" style={{ maxWidth: "1360px", margin: "0 auto", padding: "110px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
<div className="pcWrap" style={{ order: pc.o1 }}><div className="pcube" role="img" aria-label={`${pc.name}: cubo 3D con fotos`}>
{pc.faces.map((f: any, _i: number) => (<Fragment key={_i}><div className={`pf ${f.cls}`} style={{ background: f.bg, color: f.ink }}>{f.img && (<><img loading="lazy" decoding="async" src={f.src} alt={f.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={f.w} height={f.h} /></>)}{f.info && (<><span style={{ padding: "24px", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "34px", lineHeight: "1" }}>{f.title}</span></>)}</div></Fragment>))}
</div></div>
<div className="sr" style={{ order: pc.o2, "--rot": pc.rot, display: "flex", flexDirection: "column", gap: "18px", minWidth: "0" } as React.CSSProperties}>
<p style={{ margin: "0", fontWeight: "700", fontSize: "14px", letterSpacing: ".1em", textTransform: "uppercase" }}>{pc.tag}</p>
<h2 className="hT2" style={{ margin: "0", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "76px", lineHeight: ".9", letterSpacing: "-0.05em" }}>{pc.name}</h2>
<p style={{ margin: "0", fontSize: "19px", maxWidth: "520px" }}>{pc.text}</p>
<ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "8px" }}>{pc.chips.map((ch: any, _i: number) => (<Fragment key={_i}><li className="chip">{ch.t}</li></Fragment>))}</ul>
</div>
</article>
</Fragment>))}
<section className="pad" style={{ maxWidth: "1360px", margin: "0 auto", padding: "60px 32px 140px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px" }}><h2 className="sr hT2" style={{ margin: "0", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "88px", lineHeight: ".9", letterSpacing: "-0.05em" }}>¿Lo probáis en persona?</h2><Link href="/solicitar-visita" className="btnP pop sr" style={{ textDecoration: "none", "--rot": "6deg", background: "#203048", color: "#FFF9EC" } as React.CSSProperties}>Reservar visita</Link></section>
</main></>)
}
