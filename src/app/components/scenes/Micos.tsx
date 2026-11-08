import { Fragment } from 'react'
import Link from 'next/link'

export default function Micos() {
const FC = ['#008FC5', '#E47C0A', '#83AF15', '#E23200', '#EBC645']
const floats: any[] = []
for (let i = 0; i < 12; i++) floats.push({ x: ((i * 29 + 7) % 92) + '%', y: ((i * 13 + 4) % 95) + '%', s: (36 + (i * 17) % 60) + 'px', c: FC[i % 5], f: i % 3 === 0 ? FC[(i + 2) % 5] : 'transparent', r: ((i % 2 ? 1 : -1) * (180 + i * 40)) + 'deg', dy: (-200 - (i * 53) % 400) + 'px' })
const marqT = ['Abiertos todo el año', 'Horario ampliable', 'Jardín privado', '6 aulas', 'Suelo radiante', 'Trato personalizado']
const marq = marqT.concat(marqT).map((t, i) => ({ t, c: FC[i % 5] }))
const why = [
  { n: '01', t: 'Trato personalizado', d: 'Cada niño es único. Lo conocemos por su nombre y adaptamos el día a su ritmo.', c: '#0079A8', ink: '#FFFFFF', rot: '-14deg' },
  { n: '02', t: 'Casa y escuela, un entorno', d: 'Los mismos valores y educación en casa y en la escuela.', c: '#E47C0A', ink: '#203048', rot: '10deg' },
  { n: '03', t: 'Nos adaptamos a ti', d: 'Abiertos todo el año, con un horario amplio que ampliamos si lo necesitas.', c: '#83AF15', ink: '#203048', rot: '-8deg' },
  { n: '04', t: 'Seguro y cálido', d: 'Suelo radiante, calefacción, A/A y puertas antipillamientos.', c: '#EBC645', ink: '#203048', rot: '14deg' }
]
const I = '/images/micos/'
const tour = [
  { src: I + 'fachada.jpg', w: 1024, h: 768, alt: 'Fachada de Micos', name: 'La entrada', cap: 'Bulevar del Alto Tajo, 40.', c: '#008FC5', ink: '#fff', tilt: '-1.5deg' },
  { src: I + 'verde_mesas.jpg', w: 640, h: 426, alt: 'Aula verde con mesas y sillas de colores', name: 'Aula verde', cap: 'Pizarra, espejo y mucha luz.', c: '#83AF15', ink: '#203048', tilt: '1.5deg' },
  { src: I + 'naranja_mesas.jpg', w: 640, h: 426, alt: 'Aula naranja con mesas hexagonales', name: 'Aula 1–2 años', cap: 'Mesas y sillas a su altura.', c: '#E47C0A', ink: '#203048', tilt: '-1deg' },
  { src: I + 'cunas.jpg', w: 640, h: 426, alt: 'Sala de cunas', name: 'La siesta', cap: 'Cunas y penumbra.', c: '#E23200', ink: '#fff', tilt: '1deg' },
  { src: I + 'verde_cunas.jpg', w: 1024, h: 768, alt: 'Aula de bebés con cunas y alfombra', name: 'Bebés', cap: 'Gateo libre sobre suelo radiante.', c: '#EBC645', ink: '#203048', tilt: '-1.5deg' },
  { src: I + 'jardin.jpg', w: 1024, h: 768, alt: 'Jardín privado con tobogán y mural', name: 'El jardín', cap: 'Privado, con tobogán y mural.', c: '#83AF15', ink: '#203048', tilt: '1.5deg' }
].map((t, i) => ({ ...t, n: String(i + 1) }))
const v: any = { floats, marq, why, tour }

  return (<><main id="contenido" tabIndex={-1} style={{ position: "relative" }}>
<div aria-hidden="true" style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>{v.floats.map((fl: any, _i: number) => (<Fragment key={_i}><span className="floatCube" style={{ left: fl.x, top: fl.y, width: fl.s, height: fl.s, borderColor: fl.c, background: fl.f, "--r": fl.r, "--y": fl.dy } as React.CSSProperties}></span></Fragment>))}</div>

<section className="pad" style={{ position: "relative", maxWidth: "1360px", margin: "0 auto", padding: "8px 32px 70px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
<h1 className="fall" style={{ margin: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 30, animationDelay: "0.32s" }}><span style={{ animationDelay: "0.32s", margin: "0", fontWeight: "700", fontSize: "15px", letterSpacing: ".12em", textTransform: "uppercase" }}>Escuela infantil y guardería en Guadalajara</span><span className="sronly">: </span><span className="hT" style={{ animationDelay: "0.34s", margin: "0", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "124px", lineHeight: ".86", letterSpacing: "-0.055em" }}>Una segunda familia<br />para <span style={{ display: "inline-block", background: "#EBC645", border: "3px solid #203048", padding: "0 22px 8px", borderRadius: "26px", transform: "rotate(-3deg)" }}>crecer</span></span></h1>
<p className="fall" style={{ animationDelay: "0.39s", margin: "0", fontSize: "21px", maxWidth: "640px" }}>Cada letra de nuestro nombre es una puerta. Toca un cubo o baja: la escuela se va construyendo mientras haces scroll.</p>
<div className="fall" style={{ animationDelay: "0.43s", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
<Link href="/solicitar-visita" className="btnP pop" style={{ textDecoration: "none", background: "#203048", color: "#FFF9EC" }}>Ven a conocernos</Link>
<Link href="/instalaciones" className="btnP pop" style={{ textDecoration: "none", background: "#FFFFFF", color: "#203048", border: "3px solid #203048" }}>Ver instalaciones</Link>
</div>
<ul className="fall" style={{ animationDelay: "0.48s", listStyle: "none", margin: "10px 0 0", padding: "0", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
<li className="chip">Abiertos todo el año</li><li className="chip">Horario ampliable</li><li className="chip">Jardín privado</li>
</ul>
<p className="fall" style={{ animationDelay: "0.57s", margin: "20px 0 0", fontWeight: "700" }}><span className="bob" aria-hidden="true">↓</span> Baja despacio</p>
</section>

<div aria-hidden="true" style={{ position: "relative", background: "#203048", color: "#FFF9EC", overflow: "hidden", borderBlock: "3px solid #203048", transform: "rotate(-2deg)", margin: "0 -40px" }}>
<div className="marq" style={{ display: "flex", width: "max-content", padding: "16px 0", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "32px", whiteSpace: "nowrap" }}>
{v.marq.map((mq: any, _i: number) => (<Fragment key={_i}><span style={{ display: "inline-flex", alignItems: "center", gap: "16px", paddingRight: "40px" }}><span style={{ width: "22px", height: "22px", background: mq.c, borderRadius: "4px" }}></span>{mq.t}</span></Fragment>))}
</div></div>

<section aria-labelledby="why-t" className="pad" style={{ position: "relative", maxWidth: "1360px", margin: "0 auto", padding: "150px 32px 120px" }}>
<h2 id="why-t" className="sr hT2" style={{ "--rot": "-3deg", margin: "0 0 52px", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "88px", lineHeight: ".9", letterSpacing: "-0.05em", maxWidth: "900px" } as React.CSSProperties}>Por qué las familias se quedan</h2>
<div className="g4">
{v.why.map((w: any, _i: number) => (<Fragment key={_i}><article className="sr" style={{ "--rot": w.rot, background: w.c, color: w.ink, border: "3px solid #203048", borderRadius: "28px", padding: "28px", minHeight: "320px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px", boxShadow: "8px 8px 0 #203048" } as React.CSSProperties}><span style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "76px", lineHeight: ".9" }}>{w.n}</span><div><h3 style={{ margin: "0 0 8px", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "30px", lineHeight: "1" }}>{w.t}</h3><p style={{ margin: "0" }}>{w.d}</p></div></article></Fragment>))}
</div>
</section>

<section aria-labelledby="tour-t" className="tour" style={{ background: "#FFF9EC", borderBlock: "3px solid #203048" }}>
<div className="tourPin">
<div className="pad" style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 32px", width: "100%", boxSizing: "border-box", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
<h2 id="tour-t" className="hT2" style={{ margin: "0", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "88px", lineHeight: ".88", letterSpacing: "-0.05em" }}>Recorre Micos</h2>
<p style={{ margin: "0", maxWidth: "360px", fontWeight: "700" }}>Sigue bajando: la escuela pasa de lado, sala a sala. Todas las fotos son de Micos.</p>
</div>
<div className="trackWrap"><div className="track">
{v.tour.map((t: any, _i: number) => (<Fragment key={_i}><figure className="slide" style={{ "--tilt": t.tilt } as React.CSSProperties}><div className="slidePh" style={{ boxShadow: `14px 14px 0 ${t.c}` }}><img decoding="async" src={t.src} alt={t.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={t.w} height={t.h} /><span className="slideNum" style={{ background: t.c, color: t.ink }}>{t.n}</span></div><figcaption style={{ display: "flex", flexDirection: "column", gap: "4px" }}><strong style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "34px", lineHeight: "1" }}>{t.name}</strong><span>{t.cap}</span></figcaption></figure></Fragment>))}
</div></div>
<div className="tourBar" aria-hidden="true"><span className="tourFill"></span></div>
</div>
</section>

<section aria-labelledby="jar-t" style={{ position: "relative", height: "min(110vh, 980px)", overflow: "hidden", borderBottom: "3px solid #203048" }}>
<img loading="lazy" decoding="async" className="zoomIn" src="/images/micos/jardin.jpg" alt="El jardín privado de Micos, con césped, tobogán y un mural de arcoíris" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} width="1024" height="768" />
<div className="pad" style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "48px 32px", maxWidth: "1360px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
<h2 id="jar-t" className="sr hT" style={{ "--rot": "4deg", margin: "0", background: "#FFF9EC", color: "#203048", padding: "6px 28px 16px", border: "3px solid #203048", borderRadius: "26px", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "104px", lineHeight: ".95", letterSpacing: "-0.05em" } as React.CSSProperties}>Nuestro jardín</h2>
<p className="sr" style={{ "--rot": "-3deg", margin: "0", background: "#203048", color: "#FFF9EC", padding: "10px 18px", borderRadius: "14px", fontWeight: "700", fontSize: "19px" } as React.CSSProperties}>Privado. Solo para los niños de Micos, cada día que el tiempo lo permite.</p>
</div>
</section>

<section className="pad teasers" style={{ position: "relative", maxWidth: "1360px", margin: "0 auto", padding: "140px 32px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "20px" }} aria-label="Sigue explorando">
<Link href="/cada-detalle" className="sr pop teaser" style={{ textDecoration: "none", "--rot": "-6deg", textAlign: "left", minHeight: "340px", background: "#83AF15", color: "#203048", border: "3px solid #203048", borderRadius: "32px", padding: "36px", font: "inherit", cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "10px 10px 0 #203048" } as React.CSSProperties}><span style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "60px", lineHeight: ".9", letterSpacing: "-0.04em" }}>Suelo radiante, jardín, puertas antipillamientos…</span><span style={{ fontWeight: "700", fontSize: "19px" }}>Cada detalle cuenta →</span></Link>
<Link href="/os-respondemos" className="sr pop teaser" style={{ textDecoration: "none", "--rot": "6deg", textAlign: "left", minHeight: "340px", background: "#C42B00", color: "#FFFFFF", border: "3px solid #203048", borderRadius: "32px", padding: "36px", font: "inherit", cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "10px 10px 0 #203048" } as React.CSSProperties}><span style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "60px", lineHeight: ".9", letterSpacing: "-0.04em" }}>¿Tienes dudas?</span><span style={{ fontWeight: "700", fontSize: "19px" }}>Os respondemos →</span></Link>
</section>

<section aria-labelledby="cta-t" style={{ background: "#EBC645", color: "#203048", borderTop: "3px solid #203048", position: "relative" }}>
<div className="pad g2" style={{ maxWidth: "1360px", margin: "0 auto", padding: "140px 32px", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "48px", alignItems: "center" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "26px", alignItems: "flex-start" }}>
<h2 id="cta-t" className="sr hT" style={{ margin: "0", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "128px", lineHeight: ".84", letterSpacing: "-0.055em" }}>¿Venís a explorar?</h2>
<p className="sr" style={{ "--rot": "3deg", margin: "0", fontSize: "20px", maxWidth: "520px" } as React.CSSProperties}>30 minutos, con o sin tu peque. Te enseñamos cada rincón y conoces al equipo. Sin compromiso.</p>
<div className="sr" style={{ "--rot": "-5deg", display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" } as React.CSSProperties}><Link href="/solicitar-visita" className="btnP pop" style={{ textDecoration: "none", background: "#203048", color: "#FFF9EC" }}>Reservar visita</Link><a href="https://wa.me/34675733140?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20Micos." target="_blank" rel="noopener" style={{ fontWeight: "700" }}>WhatsApp</a><a href="tel:+34675733140" aria-label="Llamar a Micos al 675 733 140" style={{ fontWeight: "700" }}>675 733 140</a></div>
</div>
<div className="sr" style={{ "--rot": "8deg" } as React.CSSProperties}><img loading="lazy" decoding="async" src="/images/micos/banderola.jpg" alt="La banderola de Micos, con los cubos de colores, en la fachada de la escuela" style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", border: "3px solid #203048", borderRadius: "220px 220px 30px 30px", display: "block", boxShadow: "14px 14px 0 #203048" }} width="768" height="1024" /></div>
</div>
</section>
</main></>)
}
