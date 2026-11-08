# Micos · Escuela infantil en Guadalajara

Web de [micosguarderia.es](https://www.micosguarderia.es) — Next.js 14 (App Router) + TypeScript.

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Micos (inicio) |
| `/instalaciones` | Aulas y jardín en cubos 3D |
| `/cada-detalle` | Seis detalles del edificio |
| `/os-respondemos` | Preguntas frecuentes (con `FAQPage` JSON-LD) |
| `/solicitar-visita` | WhatsApp con tu nombre, teléfono, email y mapa |

## Estructura

- `src/app/components/Shell.tsx`: cabecera, navegación por cubos, transición entre páginas y paso de página con el scroll.
- `src/app/components/scenes/*`: contenido de cada página.
- `src/app/data/site.ts`: datos del negocio (dirección, teléfono, redes). Se usan en el JSON-LD, sitemap y robots.
- `src/app/data/faq.ts`: preguntas y respuestas (se usan en la página y en el JSON-LD).
- `src/app/data/seo.tsx`: helpers de metadatos por página.
- `public/images/micos/`: fotos reales de la escuela. `public/og/`: imagen para compartir en redes.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # las fuentes (Google Fonts) se descargan en el build
```

Despliegue: Vercel, rama `master` = producción.
