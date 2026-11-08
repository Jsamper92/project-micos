import Link from 'next/link'

export default function Footer() {
  return (
<footer className="pad" style={{ maxWidth: "1360px", margin: "0 auto", padding: "48px 32px 32px", display: "flex", flexDirection: "column", gap: "24px", fontSize: "15px" }}>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", alignItems: "flex-end" }}>
<address style={{ fontStyle: "normal", display: "flex", flexDirection: "column", gap: "4px" }}><strong style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: "800", fontSize: "26px" }}>Micos · Centro de Educación Infantil</strong><a href="https://www.google.com/maps/search/?api=1&query=Micos+Guarder%C3%ADa+Calle+Bulevar+del+Alto+Tajo+40+19005+Guadalajara" target="_blank" rel="noopener" style={{ fontWeight: "700" }}>Calle Bulevar del Alto Tajo, 40 · 19005 Guadalajara</a></address>
<ul aria-label="Contactar con Micos" style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "10px" }}>
<li><a href="tel:+34675733140" aria-label="Llamar a Micos al 675 733 140" style={{ display: "inline-flex", gap: "8px", alignItems: "center", minHeight: "48px", padding: "0 18px", border: "3px solid currentColor", borderRadius: "14px", textDecoration: "none", fontWeight: "700" }}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path></svg>Llamar · 675 733 140</a></li>
<li><a href="https://wa.me/34675733140?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20Micos." target="_blank" rel="noopener" aria-label="Escribir a Micos por WhatsApp (se abre en una ventana nueva)" style={{ display: "inline-flex", gap: "8px", alignItems: "center", minHeight: "48px", padding: "0 18px", border: "3px solid currentColor", borderRadius: "14px", textDecoration: "none", fontWeight: "700" }}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"></path></svg>WhatsApp</a></li>
<li><a href="mailto:info@micosguarderia.es?subject=Quiero%20conocer%20Micos" aria-label="Enviar un email a info@micosguarderia.es" style={{ display: "inline-flex", gap: "8px", alignItems: "center", minHeight: "48px", padding: "0 18px", border: "3px solid currentColor", borderRadius: "14px", textDecoration: "none", fontWeight: "700" }}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>info@micosguarderia.es</a></li>
</ul>
</div>
<p style={{ margin: "0", fontSize: "13px", fontWeight: "700", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between" }}><span>© Micos Guardería</span><span><Link href="/aviso-legal">Aviso legal</Link> · <Link href="/politica-de-privacidad">Privacidad</Link> · <Link href="/politica-de-cookies">Cookies</Link></span></p>
</footer>
  )
}
