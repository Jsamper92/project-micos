import CadaDetalle from '../components/scenes/CadaDetalle'
import { JsonLd, breadcrumb, meta } from '../data/seo'

export const metadata = meta('/cada-detalle', 'Suelo radiante, jardín y puertas antipillamientos | Micos', 'Seis detalles que marcan la diferencia en Micos: 6 aulas, jardín privado, calefacción, suelo radiante, aire acondicionado y puertas antipillamientos.')

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb('/cada-detalle')} />
      <CadaDetalle />
    </>
  )
}
