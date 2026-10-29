import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Breadcrumbs from '@/components/Breadcrumbs'
import TechnicalTakeoffTable from '@/components/TechnicalTakeoffTable'
import DeliverablesDisplay from '@/components/DeliverablesDisplay'
import ProcessSteps from '@/components/ProcessSteps'
import ComparisonTable from '@/components/ComparisonTable'
import FAQ from '@/components/FAQ'
import QuoteCTA from '@/components/QuoteCTA'
import EstimateRequestForm from '@/components/EstimateRequestForm'
import JsonLd from '@/components/JsonLd'
import { constructMetadata } from '@/lib/seo'
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from '@/lib/schema'
import {
  CheckCircle2,
  Building2,
  Ruler,
  Layers,
  FileSpreadsheet,
  HardHat,
  AlertTriangle,
  Clock,
  Truck,
  Scale,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  Info,
} from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'Concrete Estimating Services | CSI Division 03 Quantity Takeoffs',
  description:
    'Comprehensive concrete estimating services for contractors and builders nationwide. Precise material takeoffs, formwork SFCA, rebar tonnage, and localized pricing in Excel and Bluebeam.',
  path: '/concrete-estimating-services/',
})

const serviceFaqs = [
  {
    question: 'How does an outsourced concrete estimate differ from doing it in-house?',
    answer:
      'An outsourced estimate from FK Concrete Estimating provides dedicated CSI Division 03 focus without the daily distractions of active jobsites. You receive color-coded Bluebeam vector markups, unlocked Excel calculation models, and a discrepancy log that allows your internal team to review and submit bids 3 to 4 times faster than doing takeoffs manually from scratch.',
  },
  {
    question: 'What plan formats do you accept for concrete takeoffs?',
    answer:
      'We accept digital vector PDF drawings, scanned raster PDFs, DWG / CAD files, and BIM / Revit exports. For the highest measurement accuracy, high-resolution vector PDFs exported directly from AutoCAD or Revit are preferred.',
  },
  {
    question: 'How do you price concrete material and labor in our local market?',
    answer:
      'When priced estimates are requested, we calibrate ready-mix concrete cubic yard rates, pumper day rates, and trade labor wages based on your project ZIP code using current quarterly RSMeans location cost indices or your historical unit pricing schedules.',
  },
  {
    question: 'What are the explicit limitations of an outsourced concrete estimate?',
    answer:
      'An outsourced estimating firm quantifies the dimensions and specifications provided in the contract documents. We do not perform structural engineering redesigns, conduct on-site geotechnical soil borings, or guarantee bid awards. Contractors remain responsible for final markup margins, site-specific access hurdles, and submitting the bid to the project owner.',
  },
  {
    question: 'Can you handle pre-bid addenda or plan revisions?',
    answer:
      'Yes. If an addendum alters footing depths, slab thickness, or rebar schedules prior to your bid deadline, notify us immediately. We overlay the revision cloud in Bluebeam and update the quantity schedule in your Excel deliverable.',
  },
]

export default function ConcreteEstimatingServicesPage() {
  const serviceSchema = buildServiceSchema({
    name: 'Concrete Estimating Services',
    description:
      'Flagship CSI Division 03 concrete estimating and quantity takeoff service covering cast-in-place concrete, formwork SFCA, and rebar schedules for commercial and residential contractors.',
    serviceType: 'Concrete Estimating & Takeoff Services',
    urlPath: '/concrete-estimating-services/',
  })

  const faqSchema = buildFAQSchema(serviceFaqs)
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Services', path: '/concrete-estimating-services/' },
  ])

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb Navigation */}
      <div className="bg-concrete-100/60 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Concrete Estimating Services', href: '/concrete-estimating-services/' }]} />
        </div>
      </div>

      {/* Section 1: Hero Section and Quote CTA */}
      <Hero
        badge="Flagship Division 03 Estimating"
        h1="Concrete Estimating Services & Material Quantity Takeoffs"
        subtitle="FK Concrete Estimating delivers rigorous, auditable CSI Division 03 takeoffs and priced estimates for commercial general contractors, concrete trade subcontractors, and residential developers across the United States."
        primaryCtaText="Request an Estimate"
        primaryCtaHref="#estimate-form"
        secondaryCtaText="Review Takeoff Deliverables"
        secondaryCtaHref="#deliverables"
        points={[
          'Itemized CSI MasterFormat: Formwork (03 10 00), Reinforcing (03 20 00), CIP Concrete (03 30 00)',
          'Complete audit trail: Color-coded Bluebeam Revu markups cross-referenced to Excel formulas',
          'Turnaround: 24 to 48 hours for standard residential, commercial, and foundation packages',
          'Calibrated waste allowances based on placement equipment and soil trench conditions',
        ]}
      />

      {/* Section 2: Overview of Concrete Estimating Services */}
      <section className="py-16 sm:py-20 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Section 02 • Service Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight leading-tight">
                Rigorous Division 03 Takeoffs Grounded in Structural Engineering Principles
              </h2>
              <p className="text-base text-concrete-600 leading-relaxed">
                Concrete estimating is fundamentally distinct from general architectural takeoffs. A single foot of uncounted footing depth or an overlooked Class B tension lap splice can swing project costs by thousands of dollars.
              </p>
              <p className="text-base text-concrete-600 leading-relaxed">
                At FK Concrete Estimating, our service is purpose-built around <strong>CSI MasterFormat Division 03</strong>. We evaluate structural drawings, foundation schedules, geotechnical soil recommendations, and architectural section cuts to produce a transparent bill of quantities that contractors can rely on during bid day and subcontractor buyout.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-concrete-200 bg-concrete-50/70">
                  <h4 className="font-bold text-concrete-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Dedicated Division 3 Focus
                  </h4>
                  <p className="text-xs text-concrete-600 mt-1">
                    Specialized estimators who understand concrete slump, pump lines, form pressures, and ACI code standards.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-concrete-200 bg-concrete-50/70">
                  <h4 className="font-bold text-concrete-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Fast Turnaround
                  </h4>
                  <p className="text-xs text-concrete-600 mt-1">
                    Standard plan sets delivered in 24 to 48 hours to meet tight general contractor bid submission deadlines.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-concrete-900 text-white rounded-2xl p-7 border border-concrete-800 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-amber-400 font-mono flex items-center gap-2">
                <Info className="w-5 h-5 text-amber-400" /> Scope Integrity Checklist
              </h3>
              <p className="text-xs text-concrete-300 leading-relaxed">
                Every takeoff undergoes a multi-point verification before client delivery:
              </p>
              <ul className="space-y-3 text-xs text-concrete-200 font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Vector scale calibration verified across X and Y axes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Foundation schedules cross-referenced to plan callouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Element-specific waste factors applied (4% to 12%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Formwork contact area (SFCA) calculated for all faces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Rebar lap splices modeled per ACI 318 standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Discrepancy & assumption log compiled for client review</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What Concrete Estimating Includes */}
      <section className="py-16 bg-concrete-50 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Section 03 • Scope Inclusions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight mt-3">
              What Our Concrete Estimating Service Includes
            </h2>
            <p className="mt-2 text-base text-concrete-600 leading-relaxed">
              We cover the full scope of CSI Division 03 so you never experience scope gaps between trade packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border border-concrete-200 p-6 shadow-sm">
              <span className="font-mono text-xs font-bold text-brand-orange">03 10 00</span>
              <h4 className="text-base font-bold text-concrete-950 mt-1">Formwork & Accessories</h4>
              <p className="text-xs text-concrete-600 mt-2 leading-relaxed">
                Contact area (SFCA) for continuous footings, stem walls, columns, beams, elevated slab bulkheads, form ties, and shoring heights.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-concrete-200 p-6 shadow-sm">
              <span className="font-mono text-xs font-bold text-brand-orange">03 20 00</span>
              <h4 className="text-base font-bold text-concrete-950 mt-1">Concrete Reinforcement</h4>
              <p className="text-xs text-concrete-600 mt-2 leading-relaxed">
                ASTM A615/A706 bars (#3-#18), Class B tension lap splices, hooks, stirrups, column ties, welded wire reinforcement (WWR), and chairs.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-concrete-200 p-6 shadow-sm">
              <span className="font-mono text-xs font-bold text-brand-orange">03 30 00</span>
              <h4 className="text-base font-bold text-concrete-950 mt-1">Cast-in-Place Concrete</h4>
              <p className="text-xs text-concrete-600 mt-2 leading-relaxed">
                Exact cubic yards (CY) broken down by mix strength (3,000–8,000 PSI), placement method, slab thickness, and structural category.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-concrete-200 p-6 shadow-sm">
              <span className="font-mono text-xs font-bold text-brand-orange">03 35 00</span>
              <h4 className="text-base font-bold text-concrete-950 mt-1">Finishing & Accessories</h4>
              <p className="text-xs text-concrete-600 mt-2 leading-relaxed">
                Vapor retarders (10 & 15-mil), contraction joint sawcutting, expansion joints, curing compounds, hardeners, and floor sealers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 & 5: Methodology, Materials & Quantities */}
      <section className="py-16 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Sections 04 & 05 • Methodology
              </span>
              <h2 className="text-3xl font-extrabold text-concrete-950 tracking-tight">
                Concrete Quantity Takeoff Methodology
              </h2>
              <p className="text-sm text-concrete-600 leading-relaxed">
                We utilize Bluebeam Revu vector tools to trace structural boundaries directly on the engineering sheets. Every measurement polygon is mapped to a designated tool chest layer, categorizing the concrete scope by pour phase, design strength, and placement method.
              </p>
              <div className="p-4 bg-concrete-50 rounded-xl border border-concrete-200 text-xs font-mono space-y-2 text-concrete-700">
                <div className="font-bold text-concrete-950">Standard Geometric Conversion:</div>
                <p>Volume (CY) = [Area (SF) × Thickness (ft)] ÷ 27</p>
                <p>Trench Overdig Volume = Nominal Footing CY × (1 + Earth Waste %)</p>
                <p>Formwork Contact Area (SFCA) = Perimeter Run (LF) × Height (ft) × Formed Faces</p>
              </div>
              <p className="text-sm text-concrete-600 leading-relaxed">
                Quantities are exported from the Bluebeam Markups List into structured Excel schedules with live formulas, ensuring immediate transparency and auditability.
              </p>
            </div>

            {/* Section 6 & 7: Reinforcing Steel & Formwork */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Sections 06 & 07 • Reinforcement & Formwork
              </span>
              <h2 className="text-3xl font-extrabold text-concrete-950 tracking-tight">
                Reinforcing Steel (Rebar) & Formwork Quantification
              </h2>
              <p className="text-sm text-concrete-600 leading-relaxed">
                Rebar cannot be estimated with broad heuristics. We analyze structural bar schedules, detailing lap splices per ACI 318 tension class B standards, standard 90° and 135° seismic hooks, corner continuity dowels, and bar supports.
              </p>
              <ul className="space-y-2.5 text-xs text-concrete-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>ASTM Bar Sizing (#3 through #18):</strong> Quantified in US Short Tons and Hundredweight (cwt) with bar size schedules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Formwork Contact Area (SFCA):</strong> Wall forms, footing bulkheads, column clamps, and edge forms separated by reuse cycles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Shoring & Reshoring:</strong> Height allocations for elevated suspended slabs and beams.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8, 9, 10: Structural Elements, Slabs, and Flatwork */}
      <section className="py-16 bg-concrete-50 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Sections 08, 09, 10 • Concrete Scope Breakdown
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight mt-3">
              From Substructure Foundations to Architectural Flatwork
            </h2>
            <p className="mt-2 text-base text-concrete-600 leading-relaxed">
              We quantify every concrete element delineated on the drawings, matching specifications for subgrade preparation, vapor retarders, and finish requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-concrete-200 p-7 shadow-sm">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit mb-4">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">Footings, Foundations & Columns</h3>
              <p className="mt-2 text-xs text-concrete-600 leading-relaxed">
                Continuous strip footings, isolated column pads, mat foundations, grade beams, stem walls, pile caps, and vertical reinforced columns with ties.
              </p>
              <div className="mt-4 pt-4 border-t border-concrete-100 text-xs font-mono text-concrete-500">
                Key metric: CY + SFCA + Earth Trench Waste
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-concrete-200 p-7 shadow-sm">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">Slabs on Grade & Elevated Decks</h3>
              <p className="mt-2 text-xs text-concrete-600 leading-relaxed">
                Industrial slabs-on-grade, thickened perimeter haunches, vapor retarders (15 mil Stego), post-tensioned slabs, elevated suspended decks, and metal deck toppings.
              </p>
              <div className="mt-4 pt-4 border-t border-concrete-100 text-xs font-mono text-concrete-500">
                Key metric: SF + CY + Joint Sawcuts (LF)
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-concrete-200 p-7 shadow-sm">
              <div className="p-3 bg-amber-50 rounded-xl text-brand-orange w-fit mb-4">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-concrete-950">Paving, Curbs & Site Flatwork</h3>
              <p className="mt-2 text-xs text-concrete-600 leading-relaxed">
                Heavy-duty concrete parking lots, loading dock aprons, standard curb and gutter (Type A/C), concrete sidewalks, ADA curb ramps, and decorative patios.
              </p>
              <div className="mt-4 pt-4 border-t border-concrete-100 text-xs font-mono text-concrete-500">
                Key metric: LF Curbs + SF Flatwork + Base Course
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11 & 12: Applications, Labor, Equipment, Pricing & Waste */}
      <section className="py-16 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Sections 11 & 12 • Cost Modeling & Logistics
              </span>
              <h2 className="text-3xl font-extrabold text-concrete-950 tracking-tight">
                How Labor, Equipment, Waste & Material Pricing Are Handled
              </h2>
              <p className="text-sm text-concrete-600 leading-relaxed">
                Estimating is more than summing dimensions. Total concrete cost depends heavily on placement logistics, pump accessibility, and ready-mix batch plant dynamics.
              </p>
              <div className="space-y-3 text-xs text-concrete-700">
                <div className="p-3 bg-concrete-50 rounded-lg border border-concrete-200">
                  <strong className="text-concrete-950 block mb-1">Equipment Logistics (Pumps vs Chutes):</strong>
                  Direct tailgate chutes require minimal equipment; long runs require line pumps ($120–$180/hr) or boom pumps (38m–52m at $1,200–$2,200/pour minimum). We itemize pump day requirements.
                </div>
                <div className="p-3 bg-concrete-50 rounded-lg border border-concrete-200">
                  <strong className="text-concrete-950 block mb-1">Crew Productivity & Labor Man-Hours:</strong>
                  Labor hours are calculated based on element difficulty: placing continuous footings vs hand-troweling elevated suspended slabs.
                </div>
                <div className="p-3 bg-concrete-50 rounded-lg border border-concrete-200">
                  <strong className="text-concrete-950 block mb-1">Regional Material Pricing:</strong>
                  Ready-mix prices vary by market and mix design. We apply localized RSMeans cost indices adjusted to your project ZIP code or integrate your supplier quotations.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <TechnicalTakeoffTable />
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: Project Types & Supported Plan Sets */}
      <section className="py-16 bg-concrete-50 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Section 13 • Project Scope Coverage
            </span>
            <h2 className="text-3xl font-extrabold text-concrete-950 tracking-tight mt-2">
              Supported Project Types & Plan Documentation
            </h2>
            <p className="text-sm text-concrete-600 mt-2">
              From schematic pre-construction budgets to 100% issued-for-construction (IFC) blueprints.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              'Industrial Warehouses',
              'Commercial Retail Centers',
              'Multi-Family Housing',
              'Custom Residences',
              'Civil & Infrastructure',
              'Educational & Institutional',
            ].map((type, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl border border-concrete-200 shadow-sm">
                <span className="font-bold text-xs text-concrete-900">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 14: Estimating Deliverables & Output Formats */}
      <section id="deliverables" className="py-20 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DeliverablesDisplay />
        </div>
      </section>

      {/* Section 15 & 16: Submission Process, Pricing & Turnaround */}
      <section className="py-16 bg-concrete-50 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Sections 15 & 16 • Process & Turnaround
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight mt-3">
              Step-by-Step Submission & Turnaround Determinants
            </h2>
            <p className="mt-2 text-base text-concrete-600 leading-relaxed">
              Estimate pricing and turnaround time depend on drawing clarity, total sheet count, structural complexity, and whether rebar detailing is included.
            </p>
          </div>

          <ProcessSteps />
        </div>
      </section>

      {/* Section 17: Benefits and Limitations of Outsourced Estimating */}
      <section className="py-16 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Section 17 • Objective Transparency
            </span>
            <h2 className="text-3xl font-extrabold text-concrete-950 tracking-tight mt-2">
              Benefits & Honest Limitations of Outsourced Estimating
            </h2>
            <p className="text-sm text-concrete-600 mt-2">
              We operate with strict ethical honesty. Here is what outsourcing achieves—and where your internal expertise is indispensable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-200 space-y-4">
              <h3 className="text-lg font-bold text-emerald-950 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Key Benefits for Contractors
              </h3>
              <ul className="space-y-2.5 text-xs text-emerald-900 leading-relaxed">
                <li>• <strong>Eliminates Bid Bottlenecks:</strong> Submit on 3x more projects without adding $90k–$130k/yr full-time in-house estimating payroll.</li>
                <li>• <strong>Independent Audit Trail:</strong> Verify your project manager's internal takeoff against an unbiased second opinion before signing subcontracts.</li>
                <li>• <strong>Color-Coded Bluebeam Visuals:</strong> Spot drawing ambiguities, step footings, and structural notes easily during pre-con meetings.</li>
              </ul>
            </div>

            <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-200 space-y-4">
              <h3 className="text-lg font-bold text-amber-950 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" /> Operational Boundaries & Limitations
              </h3>
              <ul className="space-y-2.5 text-xs text-amber-900 leading-relaxed">
                <li>• <strong>Contractor Bidding Ownership:</strong> We provide quantities and cost foundations; you decide your final markup margin and overhead.</li>
                <li>• <strong>Site Access & Logistics:</strong> We estimate from plans; site-specific factors (e.g. overhead power lines blocking a boom pump) require contractor review.</li>
                <li>• <strong>No Guaranteed Bid Awards:</strong> Low bids depend on subcontractor pricing; we guarantee mathematical precision based on supplied plans.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 18: Comparison Table */}
      <section className="py-16 bg-concrete-50 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonTable />
        </div>
      </section>

      {/* Section 19: Frequently Asked Questions */}
      <section className="py-16 bg-white border-b border-concrete-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ items={serviceFaqs} title="Concrete Estimating Services FAQ" />
        </div>
      </section>

      {/* Section 20: Final Request an Estimate CTA & Form */}
      <section id="estimate-form" className="py-20 bg-concrete-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Ready to Submit Plans?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight leading-tight">
                Get a Fast, Itemized Concrete Takeoff Quote
              </h2>
              <p className="text-sm text-concrete-600 leading-relaxed">
                Send us your plan set today. Our Division 03 estimating team will examine sheet counts, scales, and concrete callouts to provide a firm cost and delivery schedule within 2 to 4 hours.
              </p>
              <div className="pt-2 space-y-3 text-xs text-concrete-700 font-mono">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-orange" />
                  <span>Turnaround: 24 to 48 Hours for Standard Sets</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strict Confidentiality & Non-Disclosure</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-blue-600" />
                  <span>Delivered in Excel (.xlsx) + Bluebeam PDF</span>
                </div>
              </div>
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

