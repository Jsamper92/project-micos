import Instalaciones from '../components/scenes/Instalaciones'
import { JsonLd, breadcrumb, meta } from '../data/seo'

export const metadata = meta('/instalaciones', 'Instalaciones: aulas y jardín privado | Micos Guadalajara', 'Conoce las aulas verde, naranja y amarilla, la sala de cunas, los baños adaptados y el jardín privado de Micos, escuela infantil en Guadalajara.')

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb('/instalaciones')} />
      <Instalaciones />
    </>
  )
}
