'use client'
import { Fragment, useState } from 'react'
import Link from 'next/link'

export default function SolicitarVisita() {
  const [name, setName] = useState('')
  const [sent, setSent] = useState(false)
  const nm = name.trim()
  const waMsg = 'Hola, soy ' + nm + '. Me gustaría visitar Micos para conocer la escuela. ¿Qué días tenéis disponibles?'
  const v: any = {
    name, hasName: nm.length > 0, noName: nm.length === 0, waMsg, waUrl: 'https://wa.me/34675733140?text=' + encodeURIComponent(waMsg),
    sent: sent && nm.length > 0, bubbleCls: sent ? 'bubbleSent' : 'bubbleType', waStatus: sent ? 'escribiendo…' : 'en línea',
    setName: (e: any) => { setName(e.target.value); setSent(false) }, markSent: () => setSent(true), noSubmit: (e: any) => { e.preventDefault() }
  }

  return (<><main id="contenido" tabIndex={-1} className="pad" style={{ maxWidth: "1360px", margin: "0 auto", padding: "24px 32px 120px", display: "flex", flexDirection: "column", gap: "56px" }}>
<div className="g2" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "32px", alignItems: "end" }}>
<h1 className="fall hT" style={{ margin: "0", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "112px", lineHeight: ".84", letterSpacing: "-0.055em" }}><span style={{ display: 'block', margin: '0 0 16px', fontFamily: 'var(--font-body), system-ui, sans-serif', fontWeight: 700, fontSize: 15, lineHeight: 1.3, letterSpacing: '.12em', textTransform: 'uppercase' }}>Visitar escuela infantil en Guadalajara</span><span className="sronly">: </span><span style={{ color: "#FFF9EC", WebkitTextStroke: "3px #203048" }}>S</span>olicitar visita</h1>
<p className="fall" style={{ animationDelay: ".1s", margin: "0", fontSize: "20px" }}>Escribe tu nombre y te abrimos una conversación de WhatsApp con nosotros. Nada de formularios largos: hablamos y quedamos.</p>
</div>

<div className="g2" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.15fr)", gap: "48px", alignItems: "start" }}>

<section aria-labelledby="wa-t" className="fall" style={{ animationDelay: ".15s", display: "flex", flexDirection: "column", alignItems: "center", gap: "18px" }}>
<h2 id="wa-t" style={{ margin: "0", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "30px", alignSelf: "flex-start" }}>Por WhatsApp, en 1 paso</h2>
<div className="phone" style={{ width: "min(100%, 380px)", background: "#203048", borderRadius: "46px", padding: "12px", boxShadow: "14px 14px 0 #E23200", boxSizing: "border-box" }}>
<div style={{ background: "#EFE7DC", borderRadius: "36px", overflow: "hidden", display: "flex", flexDirection: "column", height: "600px" }}>
<div style={{ background: "#075E54", color: "#FFFFFF", padding: "18px 18px 14px", display: "flex", alignItems: "center", gap: "12px" }}>
<span aria-hidden="true" style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#FFF9EC", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", padding: "9px", boxSizing: "border-box" }}><span style={{ background: "#008FC5" }}></span><span style={{ background: "#E47C0A" }}></span><span style={{ background: "#83AF15" }}></span><span style={{ background: "#E23200" }}></span></span>
<span style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}><strong style={{ fontSize: "16px" }}>Micos Guardería</strong><span style={{ fontSize: "13px", opacity: ".85" }}>{v.waStatus}</span></span>
</div>
<div aria-live="polite" style={{ flex: "1", padding: "18px 14px", display: "flex", flexDirection: "column", gap: "10px", overflow: "hidden" }}>
<p style={{ margin: "0 auto 6px", background: "#FFF6D6", color: "#5A4A1A", fontSize: "12px", padding: "5px 10px", borderRadius: "8px", textAlign: "center", maxWidth: "90%" }}>Vista previa · el mensaje se abrirá en tu WhatsApp</p>
<div className="bubbleIn" style={{ alignSelf: "flex-start", maxWidth: "82%", background: "#FFFFFF", color: "#111", borderRadius: "4px 16px 16px 16px", padding: "10px 12px", fontSize: "15px", boxShadow: "0 1px 1px rgba(0,0,0,.12)" }}>¡Hola! Somos Micos. ¿Cómo te llamas? Así sabemos con quién hablamos.<span style={{ display: "block", textAlign: "right", fontSize: "11px", color: "#667" }}>09:00</span></div>
{v.hasName && (<>
<div className={v.bubbleCls} style={{ alignSelf: "flex-end", maxWidth: "86%", background: "#D9FDD3", color: "#111", borderRadius: "16px 4px 16px 16px", padding: "10px 12px", fontSize: "15px", boxShadow: "0 1px 1px rgba(0,0,0,.12)" }}>{v.waMsg}<span style={{ display: "flex", justifyContent: "flex-end", gap: "4px", fontSize: "11px", color: "#667" }}>ahora</span></div>
</>)}
{v.sent && (<>
<div className="typing" aria-hidden="true" style={{ alignSelf: "flex-start", background: "#FFFFFF", borderRadius: "16px", padding: "12px 14px", display: "flex", gap: "5px" }}><span className="dot"></span><span className="dot" style={{ animationDelay: ".15s" }}></span><span className="dot" style={{ animationDelay: ".3s" }}></span></div>
<div className="replyIn" style={{ alignSelf: "flex-start", maxWidth: "82%", background: "#FFFFFF", color: "#111", borderRadius: "4px 16px 16px 16px", padding: "10px 12px", fontSize: "15px", boxShadow: "0 1px 1px rgba(0,0,0,.12)" }}>Se ha abierto WhatsApp con tu mensaje. Pulsa Enviar allí para mandarlo y elegir el día.<span style={{ display: "block", textAlign: "right", fontSize: "11px", color: "#667" }}>ahora</span></div>
</>)}
</div>
<form style={{ display: "flex", gap: "8px", alignItems: "center", padding: "10px" }} onSubmit={v.noSubmit}>
<label htmlFor="waName" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>Tu nombre</label>
<input id="waName" type="text" autoComplete="given-name" placeholder="Escribe tu nombre…" value={v.name} onChange={v.setName} style={{ flex: "1", minWidth: "0", minHeight: "48px", border: "0", borderRadius: "999px", padding: "0 18px", font: "inherit", fontSize: "16px", background: "#FFFFFF", color: "#111" }} />
{v.hasName && (<><a className="sendBtn" href={v.waUrl} target="_blank" rel="noopener" onClick={v.markSent} aria-label="Abrir WhatsApp con mi mensaje (se abre en una ventana nueva)" style={{ flex: "none", width: "52px", height: "52px", borderRadius: "50%", background: "#25D366", display: "grid", placeItems: "center" }}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M3 20.5 21 12 3 3.5l2.5 7L15 12l-9.5 1.5z"></path></svg></a></>)}
{v.noName && (<><span aria-hidden="true" style={{ flex: "none", width: "52px", height: "52px", borderRadius: "50%", background: "#9FB8A8", display: "grid", placeItems: "center" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M3 20.5 21 12 3 3.5l2.5 7L15 12l-9.5 1.5z"></path></svg></span></>)}
</form>
</div>
</div>
<p style={{ margin: "0", fontSize: "14px", textAlign: "center", maxWidth: "380px" }}>¿Prefieres llamar? <a href="tel:+34675733140" aria-label="Llamar a Micos al 675 733 140" style={{ fontWeight: "700" }}>675 733 140</a> · <a href="mailto:info@micosguarderia.es?subject=Quiero%20conocer%20Micos" style={{ fontWeight: "700" }}>info@micosguarderia.es</a></p>
</section>

<section aria-labelledby="map-t" className="fall" style={{ animationDelay: ".3s", display: "flex", flexDirection: "column", gap: "18px" }}>
<h2 id="map-t" style={{ margin: "0", fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "30px" }}>Dónde estamos</h2>
<div className="boardWrap">
<div className="board" role="img" aria-label="Mapa: Micos está en la Avenida Bulevar del Alto Tajo, 40, junto a la Avenida de Aragón, en Guadalajara">
<svg aria-hidden="true" viewBox="0 0 600 440" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}>
<rect width="600" height="440" fill="#FFF9EC"></rect>
<path d="M-20 300 C 120 280, 200 340, 320 320 S 520 250, 640 270" fill="none" stroke="#203048" strokeWidth="40" strokeLinecap="round"></path>
<path d="M-20 300 C 120 280, 200 340, 320 320 S 520 250, 640 270" fill="none" stroke="#FFFFFF" strokeWidth="32" strokeLinecap="round"></path>
<path d="M470 -20 L 430 460" fill="none" stroke="#203048" strokeWidth="44"></path><path d="M470 -20 L 430 460" fill="none" stroke="#FFFFFF" strokeWidth="36"></path>
<path d="M-20 120 L 640 160" fill="none" stroke="#203048" strokeWidth="26"></path><path d="M-20 120 L 640 160" fill="none" stroke="#FFFFFF" strokeWidth="18"></path>
<path d="M160 -20 L 210 460" fill="none" stroke="#203048" strokeWidth="22"></path><path d="M160 -20 L 210 460" fill="none" stroke="#FFFFFF" strokeWidth="14"></path>
<path d="M40 30 C 80 10, 120 40, 110 80 S 30 100, 40 30Z" fill="#B5D05C" stroke="#203048" strokeWidth="3"></path>
<path d="M520 340 C 580 320, 620 380, 590 420 L 500 430 C 480 400, 490 360, 520 340Z" fill="#B5D05C" stroke="#203048" strokeWidth="3"></path>
<rect x="250" y="190" width="70" height="56" rx="8" fill="#F4DC86" stroke="#203048" strokeWidth="3"></rect>
<rect x="40" y="180" width="90" height="70" rx="8" fill="#F2AE63" stroke="#203048" strokeWidth="3"></rect>
<rect x="500" y="60" width="80" height="60" rx="8" fill="#7CC3E0" stroke="#203048" strokeWidth="3"></rect>
<path className="route" d="M600 200 C 520 210, 470 220, 450 250 S 380 300, 320 300" fill="none" stroke="#E23200" strokeWidth="6" strokeLinecap="round" strokeDasharray="4 14"></path>
<text x="30" y="292" style={{ fontFamily: "var(--font-body), sans-serif" }} fontWeight="700" fontSize="15" fill="#203048" transform="rotate(-4 30 292)">Bulevar del Alto Tajo</text>
<text x="470" y="430" style={{ fontFamily: "var(--font-body), sans-serif" }} fontWeight="700" fontSize="15" fill="#203048" transform="rotate(-85 470 430)">Av. de Aragón</text>
</svg>
<span className="pinRing" aria-hidden="true" style={{ left: "52%", top: "66%" }}></span>
<span className="pinDie" aria-hidden="true" style={{ left: "52%", top: "66%" }}><span className="die dieDrop" style={{ "--s": "54px", display: "block" } as React.CSSProperties}><span className="face fr" style={{ background: "#008FC5", color: "#fff" }}>m</span><span className="face bk" style={{ background: "#008FC5" }}></span><span className="face rt" style={{ background: "#006E99" }}></span><span className="face lt" style={{ background: "#006E99" }}></span><span className="face tp" style={{ background: "#83AF15" }}></span><span className="face bt" style={{ background: "#006E99" }}></span></span></span>
<span className="pinTag" style={{ left: "52%", top: "66%" }}>Micos</span>
</div>
</div>
<address style={{ fontStyle: "normal", fontSize: "19px", fontWeight: "700" }}>Avenida Bulevar del Alto Tajo, 40<br />19005 Guadalajara</address>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
<a className="btnP pop" href="https://www.google.com/maps/dir/?api=1&destination=Micos+Guarder%C3%ADa+Calle+Bulevar+del+Alto+Tajo+40+19005+Guadalajara" target="_blank" rel="noopener" style={{ background: "#203048", color: "#FFF9EC" }}>Cómo llegar</a>
<a className="btnP pop" href="https://www.google.com/maps/search/?api=1&query=Micos+Guarder%C3%ADa+Calle+Bulevar+del+Alto+Tajo+40+19005+Guadalajara" target="_blank" rel="noopener" style={{ background: "#FFFFFF", color: "#203048", border: "3px solid #203048" }}>Abrir en Google Maps</a>
</div>
</section>
</div>
</main></>)
}
