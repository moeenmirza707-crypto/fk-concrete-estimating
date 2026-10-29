import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Breadcrumbs from '@/components/Breadcrumbs'
import DeliverablesDisplay from '@/components/DeliverablesDisplay'
import ProcessSteps from '@/components/ProcessSteps'
import FAQ from '@/components/FAQ'
import QuoteCTA from '@/components/QuoteCTA'
import EstimateRequestForm from '@/components/EstimateRequestForm'
import JsonLd from '@/components/JsonLd'
import { constructMetadata } from '@/lib/seo'
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from '@/lib/schema'
import {
  FileSpreadsheet,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
} from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'Concrete Cost Estimating Services | Labor, Material & Equipment Pricing',
  description:
    'Comprehensive concrete cost estimating services for commercial and residential contractors. Unit pricing, labor man-hours, pumping logistics, and localized RSMeans data.',
  path: '/concrete-cost-estimating/',
})

const costFaqs = [
  {
    question: 'How do you determine concrete unit prices for our specific geographic location?',
    answer:
      'We utilize the latest quarterly cost indices from RSMeans data adjusted directly to your project five-digit ZIP code. This incorporates local ready-mix batch plant prices, regional steel mill freight, and prevailing local union or open-shop labor wage rates.',
  },
  {
    question: 'How are equipment costs (like concrete boom pumps and laser screeds) budgeted?',
    answer:
      'Equipment costs are estimated based on pour sequencing and placement access. For example, large slab pours that require a 38-meter boom pump are budgeted by estimated pour hours plus pump travel and cleanup fees. Smaller foundation walls or interior slabs are priced with line pumps or crane-and-bucket placement.',
  },
  {
    question: 'Can you customize the estimate using our internal crew wage rates and material discounts?',
    answer:
      'Yes. If you provide your company labor burden rates, crew compositions (e.g., 1 foreman, 4 finishers, 3 laborers), or preferred ready-mix quote sheets, we build your estimate directly around your company cost structures.',
  },
  {
    question: 'What weather-related concrete costs do you consider?',
    answer:
      'Depending on project schedule and location, our cost models include allowances for cold-weather concreting (heated water, non-chloride accelerators, insulated curing blankets per ACI 306R) or hot-weather measures (retarders, ice batching per ACI 305R).',
  },
]

export default function ConcreteCostEstimatingPage() {
  const serviceSchema = buildServiceSchema({
    name: 'Concrete Cost Estimating Services',
    description:
      'Full concrete cost estimating combining detailed material quantities with localized labor man-hours, ready-mix pricing, and pumping logistics.',
    serviceType: 'Construction Cost Estimating',
    urlPath: '/concrete-cost-estimating/',
  })

  const faqSchema = buildFAQSchema(costFaqs)
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Services', path: '/concrete-estimating-services/' },
    { name: 'Concrete Cost Estimating', path: '/concrete-cost-estimating/' },
  ])

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="bg-concrete-100/60 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Concrete Estimating Services', href: '/concrete-estimating-services/' },
              { name: 'Concrete Cost Estimating', href: '/concrete-cost-estimating/' },
            ]}
          />
        </div>
      </div>

      <Hero
        badge="CSI 03 05 00 Financial Modeling"
        h1="Concrete Cost Estimating Services & Complete Project Budgets"
        subtitle="Translate blueprint takeoffs into profitable bids. We integrate localized ready-mix pricing, labor man-hours, pump equipment rentals, and material waste into an editable financial model."
        primaryCtaText="Request a Cost Estimate"
        primaryCtaHref="#cost-form"
        secondaryCtaText="Review Deliverable Tabs"
        secondaryCtaHref="#deliverables"
        points={[
          'RSMeans localized pricing calibrated to your project five-digit ZIP code',
          'Detailed labor man-hour allocations broken down by crew trade and task difficulty',
          'Itemized equipment costs: Boom pumps, line pumps, buggies, vibrators, and power trowels',
          'Fully unlocked Excel models allowing you to tune markups, overhead, and profit',
        ]}
      />

      {/* Core Cost Components */}
      <section className="py-16 sm:py-20 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              The 4 Pillars of a Concrete Estimate
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight mt-3">
              Comprehensive Financial Modeling for Division 03 Bids
            </h2>
            <p className="mt-2 text-base text-concrete-600 leading-relaxed">
              Winning bids balance competitive pricing with bulletproof job profitability. Our cost estimating model breaks your project down into four transparent categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-concrete-50 rounded-2xl border border-concrete-200 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">1. Material Costs</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Ready-mix concrete per cubic yard (by specified PSI strength), ASTM Grade 60 rebar by weight, formwork lumber/plywood, vapor retarders, curing compounds, and joint sealers.
              </p>
            </div>

            <div className="p-6 bg-concrete-50 rounded-2xl border border-concrete-200 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">2. Labor Man-Hours</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Crew sizing, labor productivity rates (man-hours per CY or SFCA), carpenter formwork erection/stripping, rodman rebar tying, and concrete finisher flatwork hours.
              </p>
            </div>

            <div className="p-6 bg-concrete-50 rounded-2xl border border-concrete-200 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">3. Equipment Rentals</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Line and boom pump hourly minimums, pump setup/washout fees, laser screed rentals, power trowels, generators, concrete vibrators, and crane lifting costs.
              </p>
            </div>

            <div className="p-6 bg-concrete-50 rounded-2xl border border-concrete-200 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">4. Waste & Markups</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Equipment placement waste, pump line residual, excavation trench sloughing (+8–12%), general conditions, contractor overhead, and net profit margin tuning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section id="deliverables" className="py-20 bg-concrete-50 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DeliverablesDisplay />
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Pricing Methodology
            </span>
            <h2 className="text-3xl font-extrabold text-concrete-950 tracking-tight mt-3">
              How We Assemble Your Cost Estimate
            </h2>
            <p className="mt-2 text-sm text-concrete-600">
              A transparent, auditable process that protects your bid numbers from unexpected surprises.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-concrete-50 border-b border-concrete-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ items={costFaqs} title="Concrete Cost Estimating FAQ" />
        </div>
      </section>

      {/* Form Submission */}
      <section id="cost-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Ready to Price Your Project?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight leading-tight">
                Request a Localized Concrete Cost Estimate
              </h2>
              <p className="text-sm text-concrete-600 leading-relaxed">
                Upload your plans and let us know your project location. We will assemble an itemized material, labor, and equipment cost budget tailored to your bidding window.
              </p>
            </div>
            <div className="lg:col-span-7">
              <EstimateRequestForm defaultScope="Complete CSI Division 03 Package" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

