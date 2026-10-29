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
  Layers,
  CheckCircle2,
  Ruler,
  HardHat,
  ShieldCheck,
  FileSpreadsheet,
} from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'Rebar Estimating Services | Reinforcing Steel & Wire Mesh Takeoffs',
  description:
    'Dedicated reinforcing steel and rebar estimating services for fabricators and concrete placers. Measured ASTM bar weights in US tons, ACI 318 tension lap splices, and WWR.',
  path: '/rebar-estimating-services/',
})

const rebarFaqs = [
  {
    question: 'How are rebar quantities quantified and reported in your takeoffs?',
    answer:
      'We report reinforcing steel in US Short Tons (2,000 lbs) and hundredweight (cwt), broken down by ASTM bar size (#3 through #18) and steel grade (typically ASTM A615 Grade 60 or ASTM A706 weldable). Line items delineate continuous bars, corner continuity dowels, footing dowels, stirrups, column ties, and bar supports.',
  },
  {
    question: 'How do you calculate lap splices for continuous runs of rebar?',
    answer:
      'Rebar is manufactured and shipped in standard stock lengths (e.g. 20-foot, 30-foot, or 60-foot sticks). For every stock run, we model lap splices in compliance with ACI 318 Class B tension lap standards (typically 40 to 60 bar diameters based on concrete compressive strength and epoxy coating). This adds the necessary 8% to 15% linear steel that generic rule-of-thumb estimators miss.',
  },
  {
    question: 'Do you estimate welded wire reinforcement (WWR / WWM)?',
    answer:
      'Yes. Welded wire fabric is quantified in square feet (SF) or rolls/sheets (e.g. 6x6-W1.4/W1.4 or 6x6-W2.9/W2.9), with a 10% to 15% allowance for side and end lap overlaps plus continuous slab bolsters.',
  },
  {
    question: 'Are bar accessories like chairs, bolsters, and tie wire included?',
    answer:
      'Yes. An accurate rebar bid must account for accessories. We include quantities for slab bolsters, individual high chairs with plastic feet, beam bolsters, tie wire rolls, and mechanical bar couplers.',
  },
]

export default function RebarEstimatingServicesPage() {
  const serviceSchema = buildServiceSchema({
    name: 'Rebar Estimating Services',
    description:
      'Comprehensive reinforcing steel and rebar takeoff services detailing ASTM bar sizes, tonnage, ACI 318 tension lap splices, stirrups, and welded wire reinforcement.',
    serviceType: 'Reinforcing Steel Takeoffs',
    urlPath: '/rebar-estimating-services/',
  })

  const faqSchema = buildFAQSchema(rebarFaqs)
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Services', path: '/concrete-estimating-services/' },
    { name: 'Rebar Estimating Services', path: '/rebar-estimating-services/' },
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
              { name: 'Rebar Estimating Services', href: '/rebar-estimating-services/' },
            ]}
          />
        </div>
      </div>

      <Hero
        badge="CSI 03 20 00 Steel Reinforcement"
        h1="Rebar Estimating Services & Reinforcing Steel Takeoffs"
        subtitle="Eliminate rebar tonnage guesswork. Precise material takeoffs for fabricators, placers, and general contractors detailing ASTM bar sizes, ACI 318 lap splices, stirrups, and wire mesh."
        primaryCtaText="Submit Drawings for Rebar Takeoff"
        primaryCtaHref="#rebar-form"
        secondaryCtaText="Review Rebar Metrics"
        secondaryCtaHref="#metrics"
        points={[
          'Itemized ASTM bar weights (#3 through #18) in US Short Tons and hundredweight',
          'ACI 318 tension Class B lap splice modeling (40 to 60 bar diameters)',
          'Complete schedule of column ties, beam stirrups with 135° seismic hooks, and dowels',
          'Welded wire reinforcement (WWR/WWM), slab bolsters, and continuous bar chairs',
        ]}
      />

      {/* Rebar Details & Schedule Breakdown */}
      <section id="metrics" className="py-16 sm:py-20 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              CSI 03 20 00 Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight mt-3">
              Mathematical Steel Quantification Based on Structural Details
            </h2>
            <p className="mt-2 text-base text-concrete-600 leading-relaxed">
              Steel is bought and sold by the pound and ton. Even a minor miscalculation in lap splice allowance or stirrup counts creates massive financial shortfalls during steel procurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-concrete-50 rounded-2xl border border-concrete-200 p-7 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">ASTM Bar Tonnage by Size</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Separated by bar size (#3, #4, #5, #6, #7, #8, #9, #10, #11, #14, #18). Converted to total linear feet and US Short Tons using ASTM standard unit weight tables.
              </p>
            </div>

            <div className="bg-concrete-50 rounded-2xl border border-concrete-200 p-7 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">ACI 318 Tension Lap Splices</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Calculated along continuous footing runs, grade beams, and slab boundary bars based on stock lengths (20', 30', 60') and required Class B tension lap criteria.
              </p>
            </div>

            <div className="bg-concrete-50 rounded-2xl border border-concrete-200 p-7 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">Ties, Stirrups & Mesh</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Closed ties with standard 135° seismic hooks, beam shear stirrups, welded wire fabric (rolls or flat sheets), slab bolsters, high chairs, and tie wire.
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
          <FAQ items={rebarFaqs} title="Rebar Estimating Services FAQ" />
        </div>
      </section>

      {/* Submission Form */}
      <section id="rebar-form" className="py-20 bg-concrete-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Rebar Intake
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight leading-tight">
                Submit Your Drawings for a Rebar Takeoff
              </h2>
              <p className="text-sm text-concrete-600 leading-relaxed">
                Upload your structural drawing set and rebar schedules. We will evaluate the sheet sets and provide a proposal within 2 to 4 hours.
              </p>
            </div>
            <div className="lg:col-span-7">
              <EstimateRequestForm defaultScope="Rebar & Reinforcement Only" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

