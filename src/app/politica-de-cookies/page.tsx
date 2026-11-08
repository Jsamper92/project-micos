import Link from 'next/link'
import Legal from '../components/Legal'
import { LEGAL as L } from '../data/legal'
import { meta } from '../data/seo'

export const metadata = { ...meta('/politica-de-cookies', 'Política de cookies | Micos Guardería', 'Este sitio web de Micos, Centro de Educación Infantil en Guadalajara, no utiliza cookies propias ni de terceros. Te explicamos qué datos técnicos se tratan.'), robots: { index: false, follow: true } }

export default function Page() {
  return (
    <Legal title="Política de cookies" updated={L.updated}>
      <h2>1. ¿Usa cookies este sitio web?</h2>
      <p>No. Este sitio web no instala cookies propias ni de terceros: no utilizamos cookies de analítica, de publicidad ni de seguimiento. Por eso no mostramos un aviso de cookies.</p>
      <h2>2. Datos técnicos de la conexión</h2>
      <p>Como ocurre en cualquier sitio web, el servidor que lo aloja registra de forma automática datos técnicos de la conexión (dirección IP, fecha y hora, páginas consultadas y tipo de navegador). Se usan únicamente para servir la página, garantizar su seguridad y mantener su funcionamiento. El alojamiento lo presta Vercel Inc.</p>
      <h2>3. Tipografías y recursos</h2>
      <p>Las tipografías y las imágenes se sirven desde nuestro propio dominio, sin cargar recursos de terceros que puedan instalar cookies.</p>
      <h2>4. Enlaces a otros servicios</h2>
      <p>Al pulsar los enlaces a WhatsApp, Google Maps, Instagram o Facebook sales de este sitio y pasas a servicios de terceros, que pueden usar sus propias cookies según sus políticas. Esos servicios solo se cargan cuando tú decides abrir el enlace.</p>
      <h2>5. Cómo controlar las cookies en tu navegador</h2>
      <p>Puedes permitir, bloquear o eliminar cookies desde la configuración de tu navegador (Chrome, Firefox, Safari, Edge). Consulta la ayuda de tu navegador para ver cómo hacerlo.</p>
      <h2>6. Cambios</h2>
      <p>Si en el futuro incorporamos cookies o herramientas de medición, actualizaremos esta política y pediremos tu consentimiento antes de usarlas cuando la ley lo exija. Más información en la <Link href="/politica-de-privacidad">política de privacidad</Link> y el <Link href="/aviso-legal">aviso legal</Link>.</p>
    </Legal>
  )
}
