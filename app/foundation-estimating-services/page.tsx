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
  HardHat,
  CheckCircle2,
  Ruler,
  Layers,
  ShieldCheck,
  Building2,
  FileSpreadsheet,
} from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'Foundation Estimating Services | Concrete Footings & Grade Beams Takeoffs',
  description:
    'Accurate foundation estimating services for general contractors and concrete subcontractors. Measured takeoffs for spread footings, continuous strip footings, grade beams, and mat slabs.',
  path: '/foundation-estimating-services/',
})

const foundationFaqs = [
  {
    question: 'How do you account for earth-cast (unformed) footing waste?',
    answer:
      'When continuous or spread footings are poured directly into excavated earth trenches without edge forms, soil sloughing, loose subgrade cleanup, and backhoe bucket teeth naturally increase the void space. We apply an 8% to 12% earth-cast waste factor to ensure you do not run short of ready-mix on pour day.',
  },
  {
    question: 'How are isolated spread footings quantified from structural schedules?',
    answer:
      'We cross-reference every column mark on the foundation plan with the footing schedule (SF-1, SF-2, etc.). For each footing mark, we record length, width, thickness, bottom rebar in both directions, and column dowel configurations.',
  },
  {
    question: 'Do you estimate grade beams and pile caps?',
    answer:
      'Yes. Grade beams are quantified with centerline length, beam width, depth, top/bottom continuous reinforcement, closed stirrups, void forms (e.g. carton forms) when expansive soils require them, and pile cap tie-ins.',
  },
  {
    question: 'Are accessories like keyways and waterstops included in the takeoff?',
    answer:
      'Yes. Construction cold joints between footings and foundation stem walls require beveled keyways (2x4 or 2x6) and waterstops (PVC or hydrophilic bentonite strips) when waterproofing or water head pressure is indicated.',
  },
]

export default function FoundationEstimatingServicesPage() {
  const serviceSchema = buildServiceSchema({
    name: 'Foundation Estimating Services',
    description:
      'Specialized concrete foundation estimating and takeoff services covering spread footings, continuous strip footings, grade beams, mat slabs, and stem walls.',
    serviceType: 'Foundation Construction Estimating',
    urlPath: '/foundation-estimating-services/',
  })

  const faqSchema = buildFAQSchema(foundationFaqs)
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Services', path: '/concrete-estimating-services/' },
    { name: 'Foundation Estimating Services', path: '/foundation-estimating-services/' },
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
              { name: 'Foundation Estimating Services', href: '/foundation-estimating-services/' },
            ]}
          />
        </div>
      </div>

      <Hero
        badge="Substructure Division 03 Estimating"
        h1="Foundation Estimating Services & Footing Takeoffs"
        subtitle="Protect your foundation bids against overdig and drawing discrepancies. Detailed takeoffs for continuous strip footings, isolated pads, grade beams, mat foundations, and stem walls."
        primaryCtaText="Submit Foundation Plans"
        primaryCtaHref="#found-form"
        secondaryCtaText="Review Foundation Scopes"
        secondaryCtaHref="#scopes"
        points={[
          'Spread footings and continuous strip footings cross-referenced to schedules',
          'Earth-cast trench waste calibration (+8% to 12%) for accurate ready-mix orders',
          'Grade beams, carton void forms, structural pile caps, and vertical stem walls',
          'Keyways, continuous waterstops, dowels, and anchor bolt placements',
        ]}
      />

      {/* Scope Breakdown */}
      <section id="scopes" className="py-16 sm:py-20 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Foundation Scopes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight mt-3">
              Comprehensive Substructure Takeoffs
            </h2>
            <p className="mt-2 text-base text-concrete-600 leading-relaxed">
              Foundations carry the entire building load. Our takeoff methodology isolates every foundation component to ensure your bid accounts for formwork, rebar dowels, and placement realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-concrete-50 rounded-2xl border border-concrete-200 p-7 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">Continuous & Spread Footings</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Perimeter wall strip footings, isolated column pads, step footing transitions, excavation tolerance waste, and bottom rebar mats.
              </p>
            </div>

            <div className="bg-concrete-50 rounded-2xl border border-concrete-200 p-7 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">Grade Beams & Mat Slabs</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Deep grade beams, cardboard void forms, mat foundation mass concrete pours, top and bottom two-way rebar steel, and stirrup cages.
              </p>
            </div>

            <div className="bg-concrete-50 rounded-2xl border border-concrete-200 p-7 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">Stem Walls & Pile Caps</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Formed concrete stem walls, formwork SFCA (both faces), pile caps, embedded anchor bolts, continuous PVC waterstops, and keyways.
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
          <FAQ items={foundationFaqs} title="Foundation Estimating FAQ" />
        </div>
      </section>

      {/* Submission Form */}
      <section id="found-form" className="py-20 bg-concrete-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Foundation Intake
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight leading-tight">
                Submit Your Foundation Plans
              </h2>
              <p className="text-sm text-concrete-600 leading-relaxed">
                Upload your foundation plans and structural schedules. We will evaluate drawing complexity and provide a quote within 2 to 4 hours.
              </p>
            </div>
            <div className="lg:col-span-7">
              <EstimateRequestForm defaultScope="Foundations, Footings & Grade Beams" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

