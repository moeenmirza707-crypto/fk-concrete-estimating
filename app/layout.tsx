import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { buildOrganizationSchema, buildWebSiteSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: `${SITE_CONFIG.brandName} | Concrete Estimating Services & Material Takeoffs`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description: SITE_CONFIG.description,
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
  openGraph: {
    title: `${SITE_CONFIG.brandName} | Concrete Estimating Services & Takeoffs`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.brandName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_CONFIG.domain}/images/og-concrete-estimating.svg`,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.brandName} - Professional CSI Division 03 Takeoffs`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.brandName} | Concrete Estimating Services`,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.domain}/images/og-concrete-estimating.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = buildOrganizationSchema()
  const webSiteSchema = buildWebSiteSchema()

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={webSiteSchema} />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-concrete-950 font-sans antialiased selection:bg-brand-orange selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
