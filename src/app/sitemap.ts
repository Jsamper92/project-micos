import type { MetadataRoute } from 'next'
import { PAGES, SITE } from './data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return PAGES.map((p) => ({ url: SITE + (p.path === '/' ? '' : p.path), lastModified: now, changeFrequency: 'monthly', priority: p.path === '/' ? 1 : p.path === '/solicitar-visita' ? 0.9 : 0.7 }))
}
