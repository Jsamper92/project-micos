export default function Header() {
  return (
<header className="pad" style={{ maxWidth: "1360px", margin: "0 auto", padding: "18px 32px 0", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", fontSize: "14px", fontWeight: "700" }}>
<span className="hideM">Centro de Educación Infantil · Guadalajara</span>
<span style={{ display: "flex", flexWrap: "wrap", gap: "18px", alignItems: "center" }}><a href="tel:+34675733140" aria-label="Llamar a Micos al 675 733 140" style={{ textDecoration: "none", display: "inline-flex", gap: "6px", alignItems: "center", minHeight: "44px" }}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path></svg>675 733 140</a><a href="https://wa.me/34675733140?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20Micos." target="_blank" rel="noopener" aria-label="Escribir a Micos por WhatsApp (se abre en una ventana nueva)" style={{ textDecoration: "none", display: "inline-flex", gap: "6px", alignItems: "center", minHeight: "44px" }}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"></path></svg>WhatsApp</a></span>
</header>
  )
}
