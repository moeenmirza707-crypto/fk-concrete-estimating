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
  Home,
  CheckCircle2,
  Ruler,
  Layers,
  HardHat,
  ShieldCheck,
  FileSpreadsheet,
} from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'Residential Concrete Estimating Services | Foundations & Flatwork Bids',
  description:
    'Accurate residential concrete estimating services for home builders and concrete contractors. Takeoffs for custom home foundations, basement walls, driveways, and flatwork.',
  path: '/residential-concrete-estimating/',
})

const residentialFaqs = [
  {
    question: 'What residential concrete scopes do you quantify?',
    answer:
      'We quantify all residential scopes, including continuous footings, step footings, poured concrete basement walls, stem walls, crawl space foundations, post-tensioned residential slabs-on-grade, garage slabs, porch caps, driveways, sidewalks, and stamped/decorative patio flatwork.',
  },
  {
    question: 'How do you handle step footings on sloping residential lots?',
    answer:
      'Sloping lots require step transitions in continuous strip footings. We analyze architectural site grading plans alongside structural foundation sections, modeling vertical steps (typically 2:1 slope ratio with minimum 12-inch overlap), extra formwork bulkheads, and corner continuity rebar.',
  },
  {
    question: 'Can you provide residential concrete takeoffs for tract home subdivisions?',
    answer:
      'Yes. For production home builders and tract concrete contractors, we estimate master plan sets with optional elevation packages (e.g. Elevation A, B, C) and add-alternate options (such as extended rear patios or three-car garage expansions).',
  },
  {
    question: 'What is the turnaround time for a custom home concrete estimate?',
    answer:
      'Standard custom home blueprint sets are typically delivered within 24 to 48 hours, providing you with a full Excel takeoff schedule and color-coded Bluebeam PDF markups.',
  },
]

export default function ResidentialConcreteEstimatingPage() {
  const serviceSchema = buildServiceSchema({
    name: 'Residential Concrete Estimating Services',
    description:
      'Residential concrete estimating and takeoff services for home builders and concrete contractors, covering foundations, basements, garage slabs, and exterior flatwork.',
    serviceType: 'Residential Construction Estimating',
    urlPath: '/residential-concrete-estimating/',
  })

  const faqSchema = buildFAQSchema(residentialFaqs)
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Services', path: '/concrete-estimating-services/' },
    { name: 'Residential Concrete Estimating', path: '/residential-concrete-estimating/' },
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
              { name: 'Residential Concrete Estimating', href: '/residential-concrete-estimating/' },
            ]}
          />
        </div>
      </div>

      <Hero
        badge="Residential Division 03 Estimating"
        h1="Residential Concrete Estimating Services & Foundation Takeoffs"
        subtitle="Fast, accurate takeoffs for custom homebuilders, tract residential developers, and residential concrete subcontractors. Turn plans into competitive, profitable bids."
        primaryCtaText="Submit Residential Plans"
        primaryCtaHref="#res-form"
        secondaryCtaText="Explore Residential Scopes"
        secondaryCtaHref="#scopes"
        points={[
          'Poured basement walls, continuous strip footings, and step footing transitions',
          'Post-tensioned and reinforced residential slabs-on-grade with thickened haunches',
          'Exterior flatwork: Driveways, broom-finish sidewalks, patio slabs, and garage floors',
          'Turnaround: 24 to 48 hours with color-coded Bluebeam markups and Excel schedules',
        ]}
      />

      {/* Scope Breakdown */}
      <section id="scopes" className="py-16 sm:py-20 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Residential Scopes Covered
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight mt-3">
              Comprehensive Residential Takeoffs from Footings to Flatwork
            </h2>
            <p className="mt-2 text-base text-concrete-600 leading-relaxed">
              Whether building a high-end luxury custom residence or managing pours across a 50-lot tract community, our residential takeoffs ensure you order the right yardage and formwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-concrete-50 rounded-2xl border border-concrete-200 p-7 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">Basements & Foundations</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                8-ft, 9-ft, and 10-ft basement walls, continuous perimeter footings, step footings, interior point-load pads, brick ledges, and anchor bolt layouts.
              </p>
            </div>

            <div className="bg-concrete-50 rounded-2xl border border-concrete-200 p-7 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">Slabs-on-Grade & Garages</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                4" to 5" residential house slabs, garage floor slopes, thickened turn-down footings, poly vapor retarders, and welded wire fabric or synthetic fiber mesh.
              </p>
            </div>

            <div className="bg-concrete-50 rounded-2xl border border-concrete-200 p-7 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">Exterior Flatwork</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Residential concrete driveways, entry walks, rear patios, pool decks, broom or salt finishes, sawcut control joints, and expansion isolation boards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-concrete-50 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DeliverablesDisplay />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white border-b border-concrete-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ items={residentialFaqs} title="Residential Concrete Estimating FAQ" />
        </div>
      </section>

      {/* Submission Form */}
      <section id="res-form" className="py-20 bg-concrete-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Residential Quote Request
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight leading-tight">
                Get a Residential Concrete Takeoff in 24–48 Hours
              </h2>
              <p className="text-sm text-concrete-600 leading-relaxed">
                Send us your architectural and foundation drawings. We will review your plans and provide an itemized quote within 2 to 4 business hours.
              </p>
            </div>
            <div className="lg:col-span-7">
              <EstimateRequestForm defaultScope="Residential Concrete & Basements" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

