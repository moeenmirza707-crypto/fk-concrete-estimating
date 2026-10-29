import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TechnicalTakeoffTable from '@/components/TechnicalTakeoffTable'
import DeliverablesDisplay from '@/components/DeliverablesDisplay'
import ProcessSteps from '@/components/ProcessSteps'
import ComparisonTable from '@/components/ComparisonTable'
import FAQ from '@/components/FAQ'
import QuoteCTA from '@/components/QuoteCTA'
import EstimateRequestForm from '@/components/EstimateRequestForm'
import JsonLd from '@/components/JsonLd'
import { constructMetadata } from '@/lib/seo'
import { buildServiceSchema, buildFAQSchema } from '@/lib/schema'
import {
  Building2,
  Home,
  Layers,
  ShieldAlert,
  Ruler,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  HardHat,
  Cpu,
} from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'Concrete Estimating Services & CSI Division 03 Takeoffs',
  description:
    'Dedicated concrete quantity takeoff and cost estimating services for general contractors, concrete subcontractors, and commercial builders across the United States. Measured in Bluebeam & PlanSwift with detailed line-item Excel deliverables.',
  path: '/',
})

const homeFaqs = [
  {
    question: 'What is included in a professional concrete estimating service?',
    answer:
      'A professional concrete estimating service includes an itemized measurement of all CSI Division 03 scopes from your blueprint set. This covers cubic yards (CY) of concrete broken down by mix strength (PSI) and pour location, square feet of contact area (SFCA) for formwork, rebar weights (in tons and pounds) broken down by bar size, vapor retarders, sawcut joints, and placement accessories. Deliverables include an editable Excel workbook with live formulas and a color-coded Bluebeam Revu marked-up drawing set.',
  },
  {
    question: 'How fast can FK Concrete Estimating deliver a concrete takeoff?',
    answer:
      'Standard turnaround time for typical residential, light commercial, or foundation packages is 24 to 48 hours from receipt of approved drawings. Multi-story structural commercial buildings, heavy civil packages, or large industrial warehouses generally require 3 to 5 business days. Rush turnaround is available for urgent bid deadlines upon plan review.',
  },
  {
    question: 'Do you provide material quantity takeoffs only, or priced estimates as well?',
    answer:
      'We provide both options. Contractors who prefer to apply their own labor rates, crew productivity, and local ready-mix supplier pricing can request a Quantity Takeoff (MTO) only. Alternatively, we provide full cost estimates utilizing localized pricing data adjusted to your specific project ZIP code via RSMeans or your custom historical unit cost codes.',
  },
  {
    question: 'How are concrete waste allowances calculated in your takeoffs?',
    answer:
      'Unlike budget services that apply a generic flat percentage, we calibrate waste factors based on element type and placement conditions. For example, slabs on grade placed via tailgate chute typically carry 4% to 6% waste, long concrete boom pump runs factor 6% to 8% (including hopper residual and washout), and unformed earth-trench continuous footings carry 8% to 12% to account for soil sloughing and excavation overdig.',
  },
  {
    question: 'What software platforms do you use for concrete takeoffs?',
    answer:
      'Our senior estimators primarily utilize Bluebeam Revu for calibrated vector on-screen takeoffs and PlanSwift for automated assembly modeling. Final deliverables are packaged into cleanly formatted Microsoft Excel (.xlsx) workbooks alongside the annotated PDF drawing sheets.',
  },
  {
    question: 'How do you handle plan discrepancies or missing details on blueprints?',
    answer:
      'Every project deliverable includes an explicit Discrepancy & Assumption Log. When architectural and structural drawings conflict (such as varying footing depths or missing rebar schedules), we document the variance, state the engineering assumption used for the estimate, and provide pre-written RFI questions ready for your team to submit to the design team.',
  },
]

export default function HomePage() {
  const serviceSchema = buildServiceSchema({
    name: 'Concrete Estimating Services',
    description:
      'Comprehensive concrete quantity takeoffs and cost estimation for CSI Division 03 scopes across the United States.',
    serviceType: 'Construction Estimating Services',
    urlPath: '/',
  })

  const faqSchema = buildFAQSchema(homeFaqs)

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* 1. Above-The-Fold Hero Section */}
      <Hero
        badge="Dedicated CSI Division 03 Estimators"
        h1="Concrete Estimating Services & Measured Quantity Takeoffs"
        subtitle="FK Concrete Estimating delivers precise, line-item material takeoffs and localized cost estimates for general contractors, concrete subcontractors, and commercial builders. Measured in Bluebeam Revu with auditable Excel deliverables."
        primaryCtaText="Request an Estimate"
        primaryCtaHref="/contact/"
        secondaryCtaText="Explore Core Services"
        secondaryCtaHref="/concrete-estimating-services/"
        points={[
          'Itemized quantities: Cubic Yards, SFCA Formwork, Tons of Grade 60 Rebar',
          'Color-coded Bluebeam Revu PDF markups cross-referenced to Excel workbooks',
          'Standard turnaround: 24 to 48 hours for residential and commercial sets',
          'Transparent discrepancy and assumption logs protecting your bid margins',
        ]}
      />

      {/* 2. Core Value Proposition & Audience Overview */}
      <section className="py-16 sm:py-20 bg-concrete-50 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Built For Construction Contractors
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight leading-tight">
                Accurate Concrete Bids Without The Overhead of Full-Time Estimators
              </h2>
              <p className="text-sm sm:text-base text-concrete-600 leading-relaxed">
                Concrete bidding leaves no room for guesswork. Underestimating cubic yardage or missing complex rebar lap splices can erase your profit margin before the first truck arrives on site. Overestimating risks losing competitive bid opportunities to rival contractors.
              </p>
              <p className="text-sm sm:text-base text-concrete-600 leading-relaxed">
                FK Concrete Estimating bridges the gap. We serve concrete subcontractors looking to scale their monthly bid capacity, general contractors verifying subcontractor buyout numbers, and developers building pre-construction budgets.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-concrete-800">
                <div className="p-4 bg-white rounded-xl border border-concrete-200 shadow-sm flex items-start gap-3">
                  <div className="p-2 bg-amber-50 text-brand-orange rounded-lg">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-concrete-950 text-sm">Commercial Contractors</h4>
                    <p className="text-concrete-500 font-normal mt-0.5">Slabs on grade, tilt-up, elevated decks, and grade beams.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-concrete-200 shadow-sm flex items-start gap-3">
                  <div className="p-2 bg-amber-50 text-brand-orange rounded-lg">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-concrete-950 text-sm">Residential Builders</h4>
                    <p className="text-concrete-500 font-normal mt-0.5">Custom home foundations, basement walls, and flatwork.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Estimate Submission Form Component */}
            <div className="lg:col-span-6">
              <EstimateRequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Specialized Services Grid */}
      <section className="py-20 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Specialized Service Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight mt-3">
              Comprehensive CSI Division 03 Estimating Capabilities
            </h2>
            <p className="mt-3 text-base text-concrete-600 leading-relaxed">
              Every concrete scope has distinct engineering behaviors, placement equipment requirements, and code considerations. Explore our specialized takeoff divisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Concrete Estimating Services"
              href="/concrete-estimating-services/"
              csiCode="CSI 03 00 00"
              badge="Flagship Service"
              icon={Building2}
              description="Complete Division 03 packages combining material quantity takeoffs, labor hours, ready-mix pricing, and pumping logistics."
              features={[
                'All concrete elements itemized by pour and PSI',
                'Comprehensive formwork and rebar integration',
                'Turnaround: 24 to 48 hours for standard scopes',
                'Delivered in Excel with unlocked live formulas',
              ]}
            />

            <ServiceCard
              title="Concrete Takeoff Services"
              href="/concrete-takeoff-services/"
              csiCode="CSI 03 30 00"
              badge="Material Quantities"
              icon={Ruler}
              description="Accurate quantity takeoff surveying (MTO) for contractors who apply their own labor productivity and internal cost structures."
              features={[
                'Cubic Yards (CY) measured with calibrated waste',
                'Square feet of contact area (SFCA) for formwork',
                'Linear feet of sawcuts, waterstops & keyways',
                'Color-coded Bluebeam marked-up drawing PDF',
              ]}
            />

            <ServiceCard
              title="Concrete Cost Estimating"
              href="/concrete-cost-estimating/"
              csiCode="CSI 03 05 00"
              badge="Full Bid Pricing"
              icon={FileSpreadsheet}
              description="Complete financial estimates including material costs, crew productivity, pump trucks, crane hours, and profit margins."
              features={[
                'RSMeans unit costing localized by project ZIP code',
                'Labor man-hour calculations and crew day rates',
                'Line pump and boom pump day allowances',
                'Cold/hot weather concrete admixture surcharges',
              ]}
            />

            <ServiceCard
              title="Commercial Concrete Estimating"
              href="/commercial-concrete-estimating/"
              csiCode="CSI 03 30 00"
              icon={Building2}
              description="Large-scale commercial slabs-on-grade, laser-screed floors, tilt-up panels, loading docks, and multi-story concrete structures."
              features={[
                'Under-slab vapor barriers (10 & 15-mil Stego)',
                'Contraction joint sawcutting & polyurea filler',
                'Heavy industrial perimeter footings & pilasters',
                'High-early strength mix designs & floor flatness',
              ]}
            />

            <ServiceCard
              title="Foundation & Footing Estimating"
              href="/foundation-estimating-services/"
              csiCode="CSI 03 30 10"
              icon={HardHat}
              description="Continuous strip footings, isolated column pads, mat foundations, grade beams, stem walls, and structural pile caps."
              features={[
                'Step footing transitions and excavation slope analysis',
                'Earth-formed trench waste factors (+8% to 12%)',
                'Footing dowels, keyways, and waterstops',
                'Formwork contact area (SFCA) per linear run',
              ]}
            />

            <ServiceCard
              title="Rebar & Reinforcement Estimating"
              href="/rebar-estimating-services/"
              csiCode="CSI 03 20 00"
              icon={Layers}
              description="Detailed reinforcing steel bar schedules, tonnage calculations, ACI 318 tension lap splices, stirrups, and wire mesh."
              features={[
                'ASTM bar weights (#3 through #18) in US tons',
                'ACI 318 tension class B lap splice modeling',
                'Corner bars, column ties, and stirrup hooks',
                'Bar supports, slab bolsters, and tie wire',
              ]}
            />
          </div>
        </div>
      </section>

      {/* 4. Technical Takeoff Quantification Standards */}
      <section className="py-20 bg-concrete-50 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Engineering Rigor
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight mt-3">
              Standardized Quantification Methodology
            </h2>
            <p className="mt-2 text-sm sm:text-base text-concrete-600 leading-relaxed">
              We structure every concrete takeoff strictly around CSI MasterFormat Division 03 guidelines, providing an immediate common language between your estimating office, field superintendents, and material suppliers.
            </p>
          </div>

          <TechnicalTakeoffTable />
        </div>
      </section>

      {/* 5. Deliverables Section */}
      <section className="py-20 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DeliverablesDisplay />
        </div>
      </section>

      {/* 6. Step-by-Step Concrete Estimating Workflow */}
      <section className="py-20 bg-concrete-50 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Clear 5-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight mt-3">
              How Our Concrete Estimating Workflow Works
            </h2>
            <p className="mt-3 text-base text-concrete-600 leading-relaxed">
              From the moment you submit your architectural and structural PDF plans, our disciplined review protocol ensures no drawing conflict, schedule change, or placement nuance is overlooked.
            </p>
          </div>

          <ProcessSteps />
        </div>
      </section>

      {/* 7. Comparison Table: Why Contractors Choose FK */}
      <section className="py-20 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonTable />
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="py-20 bg-concrete-50 border-b border-concrete-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ items={homeFaqs} />
        </div>
      </section>

      {/* 9. Final Call to Action */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCTA />
        </div>
      </section>
    </>
  )
}

