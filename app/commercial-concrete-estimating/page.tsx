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
  Building2,
  CheckCircle2,
  Layers,
  Ruler,
  HardHat,
  Truck,
  ShieldCheck,
  FileSpreadsheet,
} from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'Commercial Concrete Estimating Services | Warehouse & Structural Bids',
  description:
    'Dedicated commercial concrete estimating services for general contractors and subcontractors. Accurate takeoffs for warehouse slabs, tilt-up panels, multi-story podiums, and heavy foundations.',
  path: '/commercial-concrete-estimating/',
})

const commercialFaqs = [
  {
    question: 'What types of commercial concrete projects do you estimate?',
    answer:
      'We estimate all commercial concrete facilities, including industrial distribution centers and logistics warehouses, tilt-up concrete buildings, multi-story commercial offices with elevated post-tensioned or composite metal deck slabs, retail shopping plazas, medical facilities, parking garages, and hospitality developments.',
  },
  {
    question: 'How do you estimate large industrial warehouse slabs on grade (SOG)?',
    answer:
      'For industrial slabs, we calculate gross square footage, specified slab thickness, perimeter thickened edge haunches, interior column isolation diamonds, and laser screed pour strip configurations. We separately quantify Class A vapor retarders (e.g. 15-mil Stego Wrap with taped seams), smooth dowel baskets at contraction joints, expansion joint filler, and sawcut joints.',
  },
  {
    question: 'Do you estimate tilt-up concrete wall panels and casting beds?',
    answer:
      'Yes. Our tilt-up takeoffs quantify casting slab requirements, temporary edge forms, panel perimeter forms, lifting inserts, structural braces, embed plates, bond breaker spray square footage, and panel crane erection schedules.',
  },
  {
    question: 'How do you handle commercial structural concrete like columns and shear walls?',
    answer:
      'We separate vertical structural elements by floor level, calculating exact concrete volume by specified compressive strength (often 5,000 to 8,000+ PSI), formwork contact area (SFCA) with multi-floor reuse cycling, column ties, vertical rebar lap splices, and seismic hooks.',
  },
]

export default function CommercialConcreteEstimatingPage() {
  const serviceSchema = buildServiceSchema({
    name: 'Commercial Concrete Estimating Services',
    description:
      'Specialized commercial concrete estimating and material takeoff services covering warehouse floors, tilt-up panels, foundations, and multi-story structural elements.',
    serviceType: 'Commercial Construction Estimating',
    urlPath: '/commercial-concrete-estimating/',
  })

  const faqSchema = buildFAQSchema(commercialFaqs)
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Services', path: '/concrete-estimating-services/' },
    { name: 'Commercial Concrete Estimating', path: '/commercial-concrete-estimating/' },
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
              { name: 'Commercial Concrete Estimating', href: '/commercial-concrete-estimating/' },
            ]}
          />
        </div>
      </div>

      <Hero
        badge="Commercial Division 03 Estimating"
        h1="Commercial Concrete Estimating Services & Large-Scale Takeoffs"
        subtitle="Scale your commercial bidding capacity. Precise quantity takeoffs and localized estimates for industrial warehouses, tilt-up concrete, post-tensioned decks, and commercial foundations."
        primaryCtaText="Submit Commercial Plans"
        primaryCtaHref="#commercial-form"
        secondaryCtaText="Review Commercial Scopes"
        secondaryCtaHref="#scopes"
        points={[
          'Industrial slabs-on-grade with laser screed pour sequencing and sawcut joints',
          'Tilt-up concrete wall panel takeoffs including casting slabs, embeds, and braces',
          'Multi-story suspended decks, post-tensioning, and composite metal deck toppings',
          'Heavy commercial foundations, mat slabs, continuous grade beams, and pilasters',
        ]}
      />

      {/* Commercial Scopes Section */}
      <section id="scopes" className="py-16 sm:py-20 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Commercial Scope Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight mt-3">
              Engineered For High-Stakes Commercial Concrete Bids
            </h2>
            <p className="mt-2 text-base text-concrete-600 leading-relaxed">
              Commercial projects demand rigorous adherence to project specifications, tight pour schedules, and precise coordination between structural concrete, embeds, and finishing standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-concrete-50 rounded-2xl border border-concrete-200 p-7 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">Industrial Slabs on Grade</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Distribution center floors (6" to 10" SOG), 15-mil poly vapor barriers, dowel basket assemblies, FF/FL floor flatness compliance, shrinkage-compensating concrete, and early-entry green sawcutting.
              </p>
            </div>

            <div className="bg-concrete-50 rounded-2xl border border-concrete-200 p-7 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">Tilt-Up Concrete Panels</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Temporary casting slab placement, panel edge form SFCA, structural steel weld plates, lifting inserts, corner reveals, rustications, and bond breaker application.
              </p>
            </div>

            <div className="bg-concrete-50 rounded-2xl border border-concrete-200 p-7 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">Elevated Decks & Shoring</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Post-tensioned elevated slabs, drop capitals, shoring and reshoring systems, composite metal deck concrete fills, and perimeter pour stop formwork.
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
          <FAQ items={commercialFaqs} title="Commercial Concrete Estimating FAQ" />
        </div>
      </section>

      {/* Submission Form */}
      <section id="commercial-form" className="py-20 bg-concrete-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Commercial Project Intake
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight leading-tight">
                Submit Your Commercial Drawings For Review
              </h2>
              <p className="text-sm text-concrete-600 leading-relaxed">
                Upload your commercial plan set. Our senior commercial estimators will evaluate sheet counts, structural details, and specifications to provide a firm turnaround and pricing quote.
              </p>
            </div>
            <div className="lg:col-span-7">
              <EstimateRequestForm defaultScope="Commercial Slab & Warehouse Floors" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

