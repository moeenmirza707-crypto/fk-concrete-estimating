import { SITE_CONFIG } from './constants'

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.domain}/#organization`,
    name: SITE_CONFIG.brandName,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.domain,
    logo: `${SITE_CONFIG.domain}/images/fk-concrete-estimating-logo.svg`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.contact.email,
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    knowsAbout: [
      'Concrete Estimating Services',
      'Concrete Takeoff Services',
      'Reinforcing Steel Takeoffs',
      'CSI MasterFormat Division 03',
      'Cast-in-Place Concrete Quantity Surveying',
      'Concrete Cost Modeling and Labor Analysis',
    ],
  }
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.domain}/#website`,
    url: SITE_CONFIG.domain,
    name: SITE_CONFIG.brandName,
    description: SITE_CONFIG.description,
    publisher: {
      '@id': `${SITE_CONFIG.domain}/#organization`,
    },
    inLanguage: 'en-US',
  }
}

export function buildServiceSchema({
  name,
  description,
  serviceType,
  urlPath,
}: {
  name: string
  description: string
  serviceType: string
  urlPath: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.domain}${urlPath}#service`,
    name,
    serviceType,
    description,
    provider: {
      '@id': `${SITE_CONFIG.domain}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    url: `${SITE_CONFIG.domain}${urlPath}`,
  }
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.domain}${item.path}`,
    })),
  }
}

export function buildArticleSchema({
  title,
  description,
  urlPath,
  datePublished,
  dateModified,
  authorName = 'FK Concrete Estimating Technical Team',
}: {
  title: string
  description: string
  urlPath: string
  datePublished: string
  dateModified: string
  authorName?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.domain}${urlPath}`,
    },
    headline: title,
    description,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: SITE_CONFIG.domain,
    },
    publisher: {
      '@id': `${SITE_CONFIG.domain}/#organization`,
    },
    inLanguage: 'en-US',
  }
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
