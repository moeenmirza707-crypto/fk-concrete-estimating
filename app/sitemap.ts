import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()

  const routes = [
    { url: `${SITE_CONFIG.domain}/`, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${SITE_CONFIG.domain}/concrete-estimating-services/`, changeFrequency: 'weekly' as const, priority: 0.95 },
    { url: `${SITE_CONFIG.domain}/concrete-takeoff-services/`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${SITE_CONFIG.domain}/concrete-cost-estimating/`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${SITE_CONFIG.domain}/commercial-concrete-estimating/`, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${SITE_CONFIG.domain}/residential-concrete-estimating/`, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${SITE_CONFIG.domain}/structural-concrete-estimating/`, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${SITE_CONFIG.domain}/foundation-estimating-services/`, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${SITE_CONFIG.domain}/rebar-estimating-services/`, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${SITE_CONFIG.domain}/concrete-estimating-process/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_CONFIG.domain}/contact/`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${SITE_CONFIG.domain}/about/`, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${SITE_CONFIG.domain}/blog/`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${SITE_CONFIG.domain}/blog/how-to-read-concrete-plans-quantity-takeoffs/`, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${SITE_CONFIG.domain}/blog/concrete-quantity-takeoff-step-by-step-guide/`, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${SITE_CONFIG.domain}/blog/common-concrete-estimating-errors-avoid/`, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${SITE_CONFIG.domain}/blog/rebar-estimating-reinforcing-steel-takeoff/`, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${SITE_CONFIG.domain}/privacy-policy/`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${SITE_CONFIG.domain}/terms/`, changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  return routes.map((route) => ({
    url: route.url,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}

