import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import { Lato } from 'next/font/google'
import AOSinit from "./components/AOSinit";

const lato = Lato({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});


export const metadata: Metadata = {
  title: "Centro de educación infantil en Guadalajara | Micos",
  description: "Centro de educación infantil en Guadalajara, España. Jardin infantil, Cocina propia, seguridad integral. Guarderia Infantil en Guadalajara",
  publisher: "Micos, Centro de educación infantil",
  alternates: {
    canonical: "https://www.micosguarderia.es",
    languages: {
      "es-ES": "https://www.micosguarderia.es",
    },
  },
  twitter: {
    card: "summary",
    site: "https://www.micosguarderia.es",
    description: "Micos, Centro de educación infantil en Guadalajara, España. Jardin infantil, Cocina propia, seguridad integral. Guarderia Infantil en Guadalajara",
    siteId: "https://www.micosguarderia.es",
    title: "Micos, Guarderia Infantil en Guadalajara",
    images: [
      {
        url: "https://www.micosguarderia.es/favicon.ico",
        width: 1400,
        height: 1400,
        alt: "Micos, Guarderia Infantil en Guadalajara",
      },
    ]
  },
  keywords: ["Guarderia Infantil en Guadalajara", "Centro de educación infantil en Guadalajara", "Jardin infantil", "Cocina propia", "seguridad integral", "Guarderia Guadalajara"],
  openGraph: {
    title: "Micos, Guarderia Infantil en Guadalajara",
    description: "Micos, Centro de educación infantil en Guadalajara, España. Jardin infantil, Cocina propia, seguridad integral. Guarderia Infantil en Guadalajara",
    url: "https://www.micosguarderia.es",
    type: "website",
    siteName: "Micos, Guarderia Infantil en Guadalajara",
    locale: "es_ES",
    countryName: "España",
    emails: "info@micosguarderia.es",
    phoneNumbers: "+34 655 651 561",
    images: [
      {
        url: "https://www.micosguarderia.es/favicon.ico",
        width: 1200,
        height: 1400,
        alt: "Micos, Guarderia Infantil en Guadalajara",
      },
    ],
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="FjtMJ1UblhTZnVDTLr-zeaJJ94c2OKh0baAbERkoJnU" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "Micos, Centro de educación infantil",
            "alternateName": "Escuela infantil micos",
            "url": "https://www.micosguarderia.es",
            "logo": "https://www.micosguarderia.es/favicon.ico",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+34675733140",
              "contactType": "customer service",
              "areaServed": "ES"
            },
            "sameAs": [
              "https://www.instagram.com/micos.guarderia",
              "https://es-es.facebook.com/people/MICOS-Guarder%C3%ADa/100049724235252",
              "https://api.whatsapp.com/send/?phone=34675733140&text&type=phone_number&app_absent=0"
            ]
          },
            null,
            2)
        }}>
        </script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.micosguarderia.es",
                "url": "https://www.micosguarderia.es",
                "name": "Micos, Centro de educación infantil",
                "isPartOf": {
                  "@id": "https://www.micosguarderia.es/#website"
                },
                "primaryImageOfPage": {
                  "@id": "https://www.micosguarderia.es#inicio"
                },
                "image": {
                  "@id": "https://www.micosguarderia.es#inicio"
                },
                "thumbnailUrl": "https://www.micosguarderia.es/images/services/bgMarketingDigital.png",
                "datePublished": "2024-06-29T08:00:00+08:00",
                "dateModified": "2024-06-29T08:00:00+08:00",
                "description": "Micos, Centro de educación infantil en Guadalajara, España. Jardin infantil, Cocina propia, seguridad integral. Guarderia Infantil en Guadalajara",
                "inLanguage": "es",
                "potentialAction": [
                  {
                    "@type": "ReadAction",
                    "target": [
                      "https://www.micosguarderia.es"
                    ]
                  }
                ]
              },
              {
                "@type": "ImageObject",
                "inLanguage": "es",
                "@id": "https://www.micosguarderia.es#inicio",
                "url": "https://www.micosguarderia.es/images/services/bgMarketingDigital.png",
                "contentUrl": "https://www.micosguarderia.es/images/services/bgMarketingDigital.png",
                "width": 444,
                "height": 728,
                "caption": "Micos, Centro de educación infantil en Guadalajara."
              },
              {
                "@type": "WebSite",
                "@id": "https://www.micosguarderia.es/#website",
                "url": "https://www.micosguarderia.es/",
                "name": "Micos, Centro de educación infantil en Guadalajara.",
                "description": "Micos, Centro de educación infantil en Guadalajara.",
                "publisher": {
                  "@id": "https://www.micosguarderia.es/#organization"
                },
                "potentialAction": [
                  {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://www.micosguarderia.es/?s={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                ],
                "inLanguage": "es"
              },
              {
                "@type": "Organization",
                "@id": "https://www.micosguarderia.es/#organization",
                "name": "Micos, Centro de educación infantil",
                "url": "https://micosguarderia.es/",
                "logo": {
                  "@type": "ImageObject",
                  "inLanguage": "es",
                  "@id": "https://micosguarderia.es/#/schema/logo/image/",
                  "url": "https://micosguarderia.es/favicon.ico",
                  "contentUrl": "https://micosguarderia.es/images/services/bgMarketingDigital.png",
                  "width": 244,
                  "height": 59,
                  "caption": "Micos, Centro de educación infantil"
                },
                "image": {
                  "@id": "https://micosguarderia.es/#/schema/logo/image/"
                }
              }
            ]
          },
            null,
            2)
        }}>
        </script>
      </head>
      <body
        className={`${lato.variable} ${lato.variable} antialiased`}
      >
        <AOSinit />
        <AppRouterCacheProvider options={{ key: 'css' }}>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
