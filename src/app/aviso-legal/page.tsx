import Link from 'next/link'
import Legal from '../components/Legal'
import { LEGAL as L } from '../data/legal'
import { meta } from '../data/seo'

export const metadata = { ...meta('/aviso-legal', 'Aviso legal | Micos Guardería', 'Aviso legal del sitio web de Micos, Centro de Educación Infantil en Guadalajara: datos identificativos, condiciones de uso y propiedad intelectual.'), robots: { index: false, follow: true } }

export default function Page() {
  return (
    <Legal title="Aviso legal" updated={L.updated}>
      <h2>1. Datos identificativos</h2>
      <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se indican los datos del titular de este sitio web:</p>
      <ul>
        <li><strong>Denominación social:</strong> {L.razon}</li>
        <li><strong>NIF:</strong> {L.nif}</li>
        <li><strong>Domicilio social:</strong> {L.domicilio}</li>
        <li><strong>Teléfono:</strong> <a href="tel:+34675733140">{L.telefono}</a></li>
        <li><strong>Correo electrónico:</strong> <a href={'mailto:' + L.email}>{L.email}</a></li>
        <li><strong>Sitio web:</strong> {L.web}</li>
      </ul>
      <h2>2. Condiciones de uso</h2>
      <p>El acceso y la navegación por este sitio web son gratuitos y atribuyen la condición de usuario. El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas ni contrarias a la buena fe.</p>
      <h2>3. Propiedad intelectual e industrial</h2>
      <p>El diseño, los textos, las fotografías, las imágenes, el código y demás contenidos de este sitio web son titularidad de {L.razon} o se utilizan con la debida autorización, y están protegidos por la legislación española sobre propiedad intelectual e industrial. No se permite su reproducción, distribución, comunicación pública ni transformación, total o parcial, sin permiso previo y por escrito del titular.</p>
      <p>El usuario puede utilizar el material de este sitio web únicamente para su uso personal y privado, nunca con fines comerciales ni ilícitos.</p>
      <h2>4. Responsabilidad y enlaces a terceros</h2>
      <p>{L.razon} procura que la información del sitio sea veraz y esté actualizada, pero puede modificar sus contenidos, configuración y presentación sin previo aviso. Los errores formales o numéricos derivados de una actualización incompleta se corregirán tan pronto se tenga conocimiento de ellos.</p>
      <p>Este sitio contiene enlaces a servicios de terceros (por ejemplo WhatsApp, Google Maps, Instagram o Facebook). Esos servicios no están bajo el control del titular, que no se hace responsable de su contenido ni de su política de privacidad.</p>
      <h2>5. Publicidad y comunicaciones comerciales</h2>
      <p>El titular se compromete a no realizar publicidad engañosa y a no enviar comunicaciones comerciales sin identificarlas como tales, conforme a la LSSI-CE. No se considera comunicación comercial la información dirigida a las familias clientes para el mantenimiento de la relación contractual.</p>
      <h2>6. Protección de datos y cookies</h2>
      <p>Consulta cómo tratamos tus datos en la <Link href="/politica-de-privacidad">política de privacidad</Link> y qué tecnologías usamos en la <Link href="/politica-de-cookies">política de cookies</Link>.</p>
      <h2>7. Legislación aplicable</h2>
      <p>Este aviso legal se rige por la legislación española. Para cualquier controversia serán competentes los juzgados y tribunales que correspondan conforme a la normativa vigente, incluido el fuero que la ley reconozca a los consumidores.</p>
      <p>Esta página sustituye al documento <a href="/documents/Aviso-Legal.pdf" target="_blank" rel="noopener">Aviso Legal (PDF)</a> anterior, que sigue disponible.</p>
    </Legal>
  )
}
