import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Atkinson_Hyperlegible } from 'next/font/google'
import './globals.css'
import Shell from './components/Shell'
import { JsonLd } from './data/seo'
import { ADDRESS, EMAIL, NAME, OG, PHONE, SAME_AS, SITE } from './data/site'

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['600', '800'], display: 'swap', variable: '--font-display' })
const body = Atkinson_Hyperlegible({ subsets: ['latin'], weight: ['400', '700'], display: 'swap', variable: '--font-body' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: 'Guardería y escuela infantil en Guadalajara | Micos', template: '%s' },
  description: 'Micos, centro de educación infantil en Guadalajara: 6 aulas, jardín privado, suelo radiante y abiertos todo el año. Pide tu visita sin compromiso.',
  applicationName: 'Micos',
  publisher: 'Micos, Centro de Educación Infantil',
  keywords: ['guardería en Guadalajara', 'escuela infantil en Guadalajara', 'centro de educación infantil Guadalajara', 'guardería con jardín privado', 'guardería abierta en verano Guadalajara'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  verification: { google: 'FjtMJ1UblhTZnVDTLr-zeaJJ94c2OKh0baAbERkoJnU' },
  formatDetection: { telephone: true, email: true, address: true },
  icons: { icon: '/favicon.ico' },
  openGraph: { type: 'website', locale: 'es_ES', siteName: 'Micos · Escuela infantil en Guadalajara', images: [OG] },
  twitter: { card: 'summary_large_image', images: [OG.url] }
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#FFF9EC' }

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ChildCare', 'Preschool'],
      '@id': SITE + '/#organization',
      name: NAME,
      alternateName: ['Micos', 'Micos Guardería', 'Escuela infantil Micos'],
      description: 'Escuela infantil y guardería en Guadalajara con 6 aulas, jardín privado, suelo radiante y calefacción. Abierta todo el año y con horario ampliable.',
      url: SITE,
      logo: SITE + '/images/logo.svg',
      image: SITE + OG.url,
      telephone: PHONE,
      email: EMAIL,
      address: { '@type': 'PostalAddress', ...ADDRESS },
      areaServed: { '@type': 'City', name: 'Guadalajara' },
      sameAs: SAME_AS,
      contactPoint: [{ '@type': 'ContactPoint', telephone: PHONE, email: EMAIL, contactType: 'customer service', areaServed: 'ES', availableLanguage: 'es' }]
    },
    { '@type': 'WebSite', '@id': SITE + '/#website', url: SITE, name: 'Micos · Escuela infantil en Guadalajara', inLanguage: 'es-ES', publisher: { '@id': SITE + '/#organization' } }
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>
        <JsonLd data={graph} />
        <Shell>{children}</Shell>
      </body>
    </html>
  )
}
