import Micos from './components/scenes/Micos'
import { JsonLd, meta } from './data/seo'

export const metadata = meta('/', 'Guardería y escuela infantil en Guadalajara | Micos', 'Escuela infantil en Guadalajara: 6 aulas, jardín privado, comida por catering y abierta salvo en agosto. Pide tu visita sin compromiso.')

export default function Page() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebPage', '@id': 'https://www.micosguarderia.es/#webpage', url: 'https://www.micosguarderia.es', name: 'Guardería y escuela infantil en Guadalajara | Micos', inLanguage: 'es-ES', isPartOf: { '@id': 'https://www.micosguarderia.es/#website' }, about: { '@id': 'https://www.micosguarderia.es/#organization' } }} />
      <Micos />
    </>
  )
}
