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
  Building2,
  CheckCircle2,
  ShieldCheck,
  HardHat,
  Cpu,
  FileSpreadsheet,
} from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'Structural Concrete Estimating Services | Columns, Beams & Elevated Decks',
  description:
    'Expert structural concrete estimating services for commercial and civil projects. Precision takeoffs for cast-in-place columns, shear walls, elevated slabs, and podium decks.',
  path: '/structural-concrete-estimating/',
})

const structuralFaqs = [
  {
    question: 'How do you separate structural concrete elements across multi-story buildings?',
    answer:
      'We organize multi-story structural concrete takeoffs floor-by-floor (e.g. Foundation Level, Level 1, Level 2, Level 3, Roof). Each floor features separate line items for vertical elements (columns and shear walls) and horizontal elements (beams, drop panels, and suspended elevated slabs).',
  },
  {
    question: 'How are shoring and reshoring systems estimated for elevated concrete slabs?',
    answer:
      'We calculate the contact surface area of the suspended slab soffit and beam bottoms, measuring the story height to determine required shoring heights. Based on typical structural concrete curing curves and ACI 347 recommendations, we factor multiple levels of reshoring required beneath active elevated pours.',
  },
  {
    question: 'What mix designs and compressive strengths are typical for structural concrete?',
    answer:
      'Structural elements frequently specify higher compressive strengths than standard flatwork, ranging from 5,000 PSI to 8,000+ PSI for heavily loaded lower-level columns and transfer girders. We delineate every cubic yard by specified compressive strength ($f\'c$) and lightweight vs. normal weight aggregates.',
  },
  {
    question: 'How do you model complex rebar in structural shear walls and columns?',
    answer:
      'We extract boundary element schedules, modeling vertical ASTM Grade 60 or Grade 80 bars with mechanical couplers or staggered Class B tension lap splices per ACI 318, closed seismic ties with 135° hooks, and cross-ties.',
  },
]

export default function StructuralConcreteEstimatingPage() {
  const serviceSchema = buildServiceSchema({
    name: 'Structural Concrete Estimating Services',
    description:
      'Comprehensive structural concrete estimating for columns, shear walls, elevated suspended slabs, transfer beams, and shoring systems.',
    serviceType: 'Structural Construction Estimating',
    urlPath: '/structural-concrete-estimating/',
  })

  const faqSchema = buildFAQSchema(structuralFaqs)
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Services', path: '/concrete-estimating-services/' },
    { name: 'Structural Concrete Estimating', path: '/structural-concrete-estimating/' },
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
              { name: 'Structural Concrete Estimating', href: '/structural-concrete-estimating/' },
            ]}
          />
        </div>
      </div>

      <Hero
        badge="Structural Division 03 Estimating"
        h1="Structural Concrete Estimating Services & Heavy Scope Takeoffs"
        subtitle="Specialized takeoffs for reinforced columns, shear walls, transfer girders, and elevated slabs. Grounded in ACI 318 and ACI 347 engineering standards."
        primaryCtaText="Submit Structural Plans"
        primaryCtaHref="#struct-form"
        secondaryCtaText="Review Deliverables"
        secondaryCtaHref="#deliverables"
        points={[
          'Detailed quantification of CIP columns, shear walls, and core elevator shafts',
          'Elevated suspended slabs, drop panels, post-tensioned tendons, and transfer girders',
          'Shoring and reshoring contact area and height allocations per ACI 347',
          'High-strength concrete mix designs (5,000–8,000+ PSI) categorized by pour phase',
        ]}
      />

      {/* Structural Scope Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Structural Components
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight mt-3">
              Precision Takeoffs for Complex Structural Concrete Packages
            </h2>
            <p className="mt-2 text-base text-concrete-600 leading-relaxed">
              Structural concrete carries high financial exposure. Our takeoff methodology isolates each structural element to give your buyout team an indisputable audit trail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-concrete-50 rounded-2xl border border-concrete-200 p-7 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">Columns & Shear Walls</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Vertical cast-in-place columns, core elevator shafts, stairwell enclosures, boundary elements, seismic cross-ties, and multi-tier formwork cycling.
              </p>
            </div>

            <div className="bg-concrete-50 rounded-2xl border border-concrete-200 p-7 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">Elevated Slabs & Beams</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Two-way flat plates, one-way joist systems, perimeter spandrel beams, post-tensioned cable poundage, pour strips, and edge form bulkheads.
              </p>
            </div>

            <div className="bg-concrete-50 rounded-2xl border border-concrete-200 p-7 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">Podium Decks & Shoring</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                Heavy concrete podium transfer decks supporting multi-story wood or steel framing above, drop panels, and multi-level reshore staging.
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

      {/* FAQs */}
      <section className="py-16 bg-white border-b border-concrete-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ items={structuralFaqs} title="Structural Concrete Estimating FAQ" />
        </div>
      </section>

      {/* Submission Form */}
      <section id="struct-form" className="py-20 bg-concrete-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Structural Intake
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight leading-tight">
                Submit Structural Plans For Takeoff
              </h2>
              <p className="text-sm text-concrete-600 leading-relaxed">
                Upload your structural drawing set and general notes. We will review the floor count, structural schedules, and beam layouts to deliver a firm proposal.
              </p>
            </div>
            <div className="lg:col-span-7">
              <EstimateRequestForm defaultScope="Structural Concrete (Columns, Beams, Elevated Decks)" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

