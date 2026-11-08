import type { ReactNode } from 'react'

export default function Legal({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <main id="contenido" tabIndex={-1} className="pad legal" style={{ maxWidth: 860, margin: '0 auto', padding: '40px 32px 120px' }}>
      <p style={{ margin: '0 0 14px', fontWeight: 700, fontSize: 15, letterSpacing: '.12em', textTransform: 'uppercase' }}>Micos · Centro de Educación Infantil</p>
      <h1 className="hT" style={{ margin: '0 0 12px', fontFamily: 'var(--font-display), sans-serif', fontWeight: 800, fontSize: 72, lineHeight: 0.95, letterSpacing: '-0.045em' }}>{title}</h1>
      <p style={{ margin: '0 0 40px', fontSize: 15 }}>Última actualización: {updated}</p>
      <div className="legalBody">{children}</div>
    </main>
  )
}
