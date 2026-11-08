import type { Metadata } from 'next'
import { OG, SITE, PAGES } from './site'

export function meta(path: string, title: string, description: string): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path, languages: { 'es-ES': path } },
    openGraph: { type: 'website', locale: 'es_ES', siteName: 'Micos · Escuela infantil en Guadalajara', url: path, title, description, images: [OG] },
    twitter: { card: 'summary_large_image', title, description, images: [OG.url] }
  }
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

export function breadcrumb(path: string) {
  const items = [{ path: '/', name: 'Micos' }]
  const cur = PAGES.find((p) => p.path === path)
  if (cur && path !== '/') items.push(cur)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name, item: SITE + (p.path === '/' ? '' : p.path) }))
  }
}
