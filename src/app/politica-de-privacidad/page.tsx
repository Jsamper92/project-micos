import Link from 'next/link'
import Legal from '../components/Legal'
import { LEGAL as L } from '../data/legal'
import { meta } from '../data/seo'

export const metadata = { ...meta('/politica-de-privacidad', 'Política de privacidad | Micos Guardería', 'Cómo trata Micos, Centro de Educación Infantil en Guadalajara, los datos personales de las familias que nos contactan: responsable, finalidad, derechos y plazos.'), robots: { index: false, follow: true } }

export default function Page() {
  return (
    <Legal title="Política de privacidad" updated={L.updated}>
      <p>En esta página explicamos, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD), cómo tratamos los datos personales de quienes contactan con nosotros a través de este sitio web.</p>
      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Responsable:</strong> {L.razon} (NIF {L.nif})</li>
        <li><strong>Domicilio:</strong> {L.domicilio}</li>
        <li><strong>Teléfono:</strong> <a href="tel:+34675733140">{L.telefono}</a></li>
        <li><strong>Correo electrónico:</strong> <a href={'mailto:' + L.email}>{L.email}</a></li>
      </ul>
      <h2>2. Qué datos tratamos y cuándo</h2>
      <p>Este sitio web no tiene formularios de registro ni áreas de usuario, y no recoge datos de los niños. Solo tratamos datos personales cuando una persona decide ponerse en contacto con nosotros por teléfono, correo electrónico o WhatsApp: su nombre, su teléfono o correo y el contenido de su mensaje.</p>
      <p>En la página <Link href="/solicitar-visita">Solicitar visita</Link>, el nombre que escribes se queda en tu navegador para preparar el texto del mensaje. No se envía a nuestros servidores: solo llega a nosotros si pulsas el botón de enviar y mandas el mensaje desde tu propia aplicación de WhatsApp.</p>
      <h2>3. Finalidad</h2>
      <p>Atender tu consulta, informarte sobre la escuela y gestionar, si lo deseas, una visita a las instalaciones.</p>
      <h2>4. Base jurídica</h2>
      <p>La base es tu consentimiento y la aplicación de medidas precontractuales a petición tuya (artículo 6.1.a y 6.1.b del RGPD), que se manifiesta al contactar con nosotros voluntariamente.</p>
      <h2>5. Destinatarios</h2>
      <p>No cedemos tus datos a terceros salvo obligación legal. Para prestar el servicio intervienen proveedores que actúan por cuenta nuestra o por cuenta propia: el proveedor de alojamiento web (Vercel Inc.), que trata datos técnicos de la conexión, y, si nos escribes por WhatsApp, WhatsApp/Meta, conforme a sus propias condiciones y política de privacidad. Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo con las garantías que prevé el RGPD.</p>
      <h2>6. Plazo de conservación</h2>
      <p>Conservaremos tus datos mientras gestionemos tu consulta o visita y, después, durante los plazos legales aplicables. Si la consulta no deriva en una relación con la escuela, los eliminaremos cuando deje de ser necesaria su conservación.</p>
      <h2>7. Tus derechos</h2>
      <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar tu consentimiento en cualquier momento, escribiendo a <a href={'mailto:' + L.email}>{L.email}</a> e indicando el derecho que quieres ejercer. Si consideras que tus datos no se tratan correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).</p>
      <h2>8. Cambios en esta política</h2>
      <p>Podemos actualizar esta política para reflejar cambios legales o del sitio web. La fecha de la última actualización aparece al inicio de la página. Para más información, consulta el <Link href="/aviso-legal">aviso legal</Link> y la <Link href="/politica-de-cookies">política de cookies</Link>.</p>
    </Legal>
  )
}
