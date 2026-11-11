import SolicitarVisita from '../components/scenes/SolicitarVisita'
import { JsonLd, breadcrumb, meta } from '../data/seo'

export const metadata = meta('/solicitar-visita', 'Solicitar visita a Micos | Guardería en Guadalajara', 'Pide una visita sin compromiso por WhatsApp, teléfono (675 733 140) o email. Micos está en Bulevar Alto Tajo, 40, Guadalajara.')

export default function Page() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ContactPage', url: 'https://www.micosguarderia.es/solicitar-visita', name: 'Solicitar visita a Micos', inLanguage: 'es-ES', about: { '@id': 'https://www.micosguarderia.es/#organization' } }} />
      <JsonLd data={breadcrumb('/solicitar-visita')} />
      <SolicitarVisita />
    </>
  )
}
