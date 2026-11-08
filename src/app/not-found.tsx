import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="contenido" tabIndex={-1} className="pad" style={{ maxWidth: 1360, margin: '0 auto', padding: '40px 32px 120px', display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
      <h1 style={{ margin: 0, fontFamily: 'var(--font-display), sans-serif', fontWeight: 800, fontSize: 96, lineHeight: 0.9, letterSpacing: '-0.05em' }}>Esta página no existe</h1>
      <p style={{ margin: 0, fontSize: 20 }}>Puede que el enlace esté roto o que la página haya cambiado de sitio.</p>
      <Link href="/" className="btnP" style={{ background: '#203048', color: '#FFF9EC' }}>Volver al inicio</Link>
    </main>
  )
}
