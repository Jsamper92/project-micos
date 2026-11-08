'use client'
import { Fragment, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FQ } from '../../data/faq'

export default function OsRespondemos() {
  const [faq, setFaq] = useState(0)
  const manualUntil = useRef(0)
  const faqRef = useRef(0)
  faqRef.current = faq
  useEffect(() => {
    const onScroll = () => {
      if (Date.now() < manualUntil.current) return
      try { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return } catch (e) {}
      const el = document.getElementById('faqTrack'); if (!el || el.offsetWidth <= 760) return
      if (document.activeElement && el.contains(document.activeElement)) return
      const total = el.offsetHeight - window.innerHeight; if (total <= 0) return
      const p = Math.min(0.999, Math.max(0, -el.getBoundingClientRect().top / total))
      const i = Math.floor(p * 7)
      if (i !== faqRef.current) setFaq(i)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const faqs = FQ.map((f, i) => ({ id: 'faq-p' + i, q: f[0], a: f[1], open: faq === i, exp: faq === i ? 'true' : 'false', rotT: faq === i ? 'rotate(45deg)' : 'none', chip: ['#008FC5', '#E47C0A', '#83AF15', '#EBC645', '#E23200'][i % 5], rot: (i % 2 ? 6 : -6) + 'deg', toggle: () => { manualUntil.current = Date.now() + 6000; setFaq((cur) => (cur === i ? -1 : i)) } }))
  const v: any = { faqs }

  return (<><main id="contenido" tabIndex={-1} className="pad" style={{ maxWidth: "1360px", margin: "0 auto", padding: "24px 32px 120px", display: "flex", flexDirection: "column", gap: "56px" }}>
<div className="g2" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "32px", alignItems: "end" }}>
<h1 className="fall hT" style={{ margin: "0", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "112px", lineHeight: ".84", letterSpacing: "-0.055em" }}><span style={{ color: "#EBC645" }}>O</span>s respondemos</h1>
<p className="fall" style={{ animationDelay: ".1s", margin: "0", fontSize: "20px" }}>Las preguntas que más nos hacen las familias antes de empezar. ¿Falta la tuya? Escríbenos por <a href="https://wa.me/34675733140?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20Micos." target="_blank" rel="noopener" style={{ fontWeight: "700" }}>WhatsApp</a> o llama al <a href="tel:+34675733140" aria-label="Llamar a Micos al 675 733 140" style={{ fontWeight: "700" }}>675 733 140</a>.</p>
</div>


<div id="faqTrack" style={{ height: "520vh", position: "relative" }}><section aria-labelledby="faq-t" className="g2 faqPin" style={{ position: "sticky", top: "150px", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "40px" }}>
<h2 id="faq-t" className="sr hT2" style={{ margin: "0", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "72px", lineHeight: ".9", letterSpacing: "-0.05em" }}>Preguntas frecuentes</h2>
<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
{v.faqs.map((f: any, _i: number) => (<Fragment key={_i}><div className="sr" style={{ "--rot": f.rot, background: "#FFF9EC", color: "#203048", border: "3px solid #203048", borderRadius: "20px", overflow: "hidden" } as React.CSSProperties}><button type="button" onClick={f.toggle} aria-expanded={f.exp} aria-controls={f.id} style={{ width: "100%", minHeight: "64px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: "14px 22px", background: "none", border: "0", font: "inherit", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "22px", color: "#203048", textAlign: "left", cursor: "pointer" }}>{f.q}<span aria-hidden="true" style={{ flex: "none", width: "34px", height: "34px", display: "grid", placeItems: "center", background: f.chip, border: "2px solid #203048", borderRadius: "8px", transition: "transform .4s cubic-bezier(.3,1.6,.5,1)", transform: f.rotT }}>+</span></button><p hidden={!f.open} id={f.id} className="fall" style={{ margin: "0", padding: "0 22px 20px" }}>{f.a}</p></div></Fragment>))}
<Link href="/solicitar-visita" className="btnP pop" style={{ textDecoration: "none", alignSelf: "flex-start", marginTop: "12px", background: "#203048", color: "#FFF9EC" }}>Quiero pedir visita</Link>
</div>
</section></div>
</main></>)
}
