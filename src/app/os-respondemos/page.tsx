import OsRespondemos from '../components/scenes/OsRespondemos'
import { FQ } from '../data/faq'
import { JsonLd, breadcrumb, meta } from '../data/seo'

export const metadata = meta('/os-respondemos', 'Preguntas frecuentes de las familias | Micos Guardería', 'Edades, horario ampliable, apertura en verano, adaptación y visitas: respondemos a las dudas más habituales sobre la escuela infantil Micos en Guadalajara.')

export default function Page() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'es-ES', mainEntity: FQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  return (
    <>
      <JsonLd data={faq} />
      <JsonLd data={breadcrumb('/os-respondemos')} />
      <OsRespondemos />
    </>
  )
}
