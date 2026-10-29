import { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

interface MetadataProps {
  title: string
  description: string
  path: string
  image?: string
  noIndex?: boolean
}

export function constructMetadata({
  title,
  description,
  path,
  image = '/images/og-concrete-estimating.svg',
  noIndex = false,
}: MetadataProps): Metadata {
  const url = `${SITE_CONFIG.domain}${path.startsWith('/') ? path : `/${path}`}`

  return {
    title: `${title} | ${SITE_CONFIG.brandName}`,
    description,
    metadataBase: new URL(SITE_CONFIG.domain),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.brandName}`,
      description,
      url,
      siteName: SITE_CONFIG.brandName,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: image.startsWith('http') ? image : `${SITE_CONFIG.domain}${image}`,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_CONFIG.brandName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_CONFIG.brandName}`,
      description,
      images: [image.startsWith('http') ? image : `${SITE_CONFIG.domain}${image}`],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
