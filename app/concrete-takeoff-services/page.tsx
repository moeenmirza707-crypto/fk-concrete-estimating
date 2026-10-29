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
  Ruler,
  CheckCircle2,
  FileSpreadsheet,
  Layers,
  ArrowRight,
  ShieldCheck,
  Building,
  HardHat,
  Cpu,
} from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'Concrete Takeoff Services | Material Quantity Takeoffs & MTO',
  description:
    'Accurate concrete quantity takeoff services (MTO) for general contractors and trade subcontractors. Measured in Bluebeam Revu with itemized cubic yards, formwork SFCA, and rebar tonnage.',
  path: '/concrete-takeoff-services/',
})

const takeoffFaqs = [
  {
    question: 'What is the primary difference between a concrete takeoff and a full estimate?',
    answer:
      'A concrete takeoff (Material Takeoff or MTO) measures the physical dimensions and counts from the drawing sheets—providing exact cubic yards of concrete, square feet of formwork contact area (SFCA), linear feet of joints, and tons of rebar. A full cost estimate takes those measured quantities and multiplies them by localized labor rates, material batch prices, pump equipment allowances, and contractor markups.',
  },
  {
    question: 'Why do contractors order quantity takeoffs without pricing?',
    answer:
      'Many seasoned concrete contractors have established negotiated supply agreements with local ready-mix plants and proprietary crew productivity rates. Ordering a takeoff gives them verified geometric quantities in an editable Excel spreadsheet, allowing them to drop in their own confidential pricing.',
  },
  {
    question: 'How are formwork contact areas (SFCA) calculated in your takeoffs?',
    answer:
      'We measure SFCA (Square Feet of Contact Area) along each exposed face of concrete that touches formwork. For example, a 100-foot-long, 8-foot-high foundation wall produces 1,600 SFCA of wall forms (100 ft × 8 ft × 2 faces) plus end bulkheads and keyway forms. Footing edge forms and slab bulkheads are separated for pricing.',
  },
  {
    question: 'How do you prevent measurement errors on digital blueprints?',
    answer:
      'We verify scale along both horizontal and vertical axes using stated dimension strings (never short door callouts). Furthermore, every measurement polygon in Bluebeam Revu is assigned a color code and layer tag, allowing instant visual cross-checking against the structural foundation schedules.',
  },
]

export default function ConcreteTakeoffServicesPage() {
  const serviceSchema = buildServiceSchema({
    name: 'Concrete Takeoff Services',
    description:
      'Professional concrete quantity takeoff services providing line-item cubic yards, formwork SFCA, and reinforcing steel measurements from construction drawings.',
    serviceType: 'Quantity Surveying & Material Takeoffs',
    urlPath: '/concrete-takeoff-services/',
  })

  const faqSchema = buildFAQSchema(takeoffFaqs)
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Services', path: '/concrete-estimating-services/' },
    { name: 'Concrete Takeoff Services', path: '/concrete-takeoff-services/' },
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
              { name: 'Concrete Takeoff Services', href: '/concrete-takeoff-services/' },
            ]}
          />
        </div>
      </div>

      <Hero
        badge="CSI 03 30 00 Quantity Surveying"
        h1="Concrete Takeoff Services & Measured Material Quantities"
        subtitle="Extract precise geometric quantities directly from your structural and architectural drawings. Measured in Bluebeam Revu and delivered in fully unlocked Excel spreadsheets within 24 to 48 hours."
        primaryCtaText="Request a Takeoff Quote"
        primaryCtaHref="#takeoff-form"
        secondaryCtaText="See Takeoff Deliverables"
        secondaryCtaHref="#deliverables"
        points={[
          'Line-item volume in Cubic Yards (CY) broken down by mix strength and pour phase',
          'Square Feet of Contact Area (SFCA) calculated for all formed faces and bulkheads',
          'Tonnage of ASTM Grade 60 rebar with ACI 318 tension class B lap splice modeling',
          'Visual polygon audit trail on PDF drawings using Bluebeam Revu tool sets',
        ]}
      />

      {/* Takeoff Methodology & Core Quantities */}
      <section className="py-16 sm:py-20 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Precision Measurement
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight leading-tight">
                Accurate Quantity Surveying for Contractors Who Bid With Their Own Unit Rates
              </h2>
              <p className="text-base text-concrete-600 leading-relaxed">
                If your company already has competitive ready-mix supplier pricing, in-house labor productivity metrics, and custom equipment rates, you don't need a third party telling you how to price your work. You need <strong>rock-solid, verified quantities</strong>.
              </p>
              <p className="text-base text-concrete-600 leading-relaxed">
                FK Concrete Estimating delivers comprehensive Material Takeoffs (MTO). We strip away the ambiguity from your blueprints and hand you a clean, organized breakdown of every single cubic yard of concrete, square foot of formwork, and linear foot of expansion joint on the project.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-concrete-50 rounded-xl border border-concrete-200">
                  <h4 className="font-bold text-concrete-950 text-sm mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Unlocked Excel Spreadsheets
                  </h4>
                  <p className="text-concrete-600">
                    No locked cells or protected tabs. Insert your own unit rates and watch your bid total update automatically.
                  </p>
                </div>
                <div className="p-4 bg-concrete-50 rounded-xl border border-concrete-200">
                  <h4 className="font-bold text-concrete-950 text-sm mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Color-Coded Visual Proof
                  </h4>
                  <p className="text-concrete-600">
                    Inspect every polygon on your PDF plans. Blue for footings, orange for slabs, green for walls.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-concrete-900 text-white rounded-2xl p-7 border border-concrete-800 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-amber-400 font-mono">
                Standard Takeoff Measurement Metrics
              </h3>
              <div className="space-y-3 text-xs font-mono">
                <div className="p-3 bg-concrete-800/80 rounded-lg border border-concrete-700 flex justify-between">
                  <span className="text-concrete-300">Concrete Volume</span>
                  <span className="text-amber-400 font-bold">Cubic Yards (CY)</span>
                </div>
                <div className="p-3 bg-concrete-800/80 rounded-lg border border-concrete-700 flex justify-between">
                  <span className="text-concrete-300">Formwork Contact Area</span>
                  <span className="text-amber-400 font-bold">SFCA</span>
                </div>
                <div className="p-3 bg-concrete-800/80 rounded-lg border border-concrete-700 flex justify-between">
                  <span className="text-concrete-300">Reinforcing Steel</span>
                  <span className="text-amber-400 font-bold">LBS / US Short Tons</span>
                </div>
                <div className="p-3 bg-concrete-800/80 rounded-lg border border-concrete-700 flex justify-between">
                  <span className="text-concrete-300">Slab Surface Area</span>
                  <span className="text-amber-400 font-bold">Square Feet (SF)</span>
                </div>
                <div className="p-3 bg-concrete-800/80 rounded-lg border border-concrete-700 flex justify-between">
                  <span className="text-concrete-300">Joints & Waterstops</span>
                  <span className="text-amber-400 font-bold">Linear Feet (LF)</span>
                </div>
              </div>
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
              Takeoff Workflow
            </span>
            <h2 className="text-3xl font-extrabold text-concrete-950 tracking-tight mt-3">
              How Your Concrete Takeoff Is Built
            </h2>
            <p className="mt-2 text-sm text-concrete-600">
              A 5-step precision audit trail designed for zero bid omissions.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-concrete-50 border-b border-concrete-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ items={takeoffFaqs} title="Concrete Takeoff Services FAQ" />
        </div>
      </section>

      {/* Form Submission */}
      <section id="takeoff-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Submit Your Drawings
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight leading-tight">
                Request an Itemized Concrete Quantity Takeoff
              </h2>
              <p className="text-sm text-concrete-600 leading-relaxed">
                Upload your blueprint sheets or share a cloud link. Our estimators will review your drawings and provide a firm turnaround quote within 2 to 4 business hours.
              </p>
            </div>
            <div className="lg:col-span-7">
              <EstimateRequestForm defaultScope="Concrete Takeoff Only (No Pricing)" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

