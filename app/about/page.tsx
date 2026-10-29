import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Breadcrumbs from '@/components/Breadcrumbs'
import DeliverablesDisplay from '@/components/DeliverablesDisplay'
import ProcessSteps from '@/components/ProcessSteps'
import QuoteCTA from '@/components/QuoteCTA'
import JsonLd from '@/components/JsonLd'
import { constructMetadata } from '@/lib/seo'
import { buildBreadcrumbSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'
import {
  ShieldCheck,
  HardHat,
  Cpu,
  FileSpreadsheet,
  AlertCircle,
  CheckCircle2,
  Building,
  Target,
} from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'About FK Concrete Estimating | Professional Division 03 Estimators',
  description:
    'Learn about FK Concrete Estimating. Our philosophy, technical standards, digital takeoff tools, and strict non-disclosure integrity for construction contractors nationwide.',
  path: '/about/',
})

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'About', path: '/about/' },
  ])

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <div className="bg-concrete-100/60 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'About', href: '/about/' }]} />
        </div>
      </div>

      <Hero
        badge="Company Overview & Ethics"
        h1="About FK Concrete Estimating & Our Estimating Standards"
        subtitle="Dedicated to providing contractors and builders with verified, auditable CSI Division 03 concrete quantity takeoffs. No generic shortcuts, no synthetic marketing claims—just rigorous construction mathematics."
        primaryCtaText="Request an Estimate"
        primaryCtaHref="/contact/"
        secondaryCtaText="Explore Core Services"
        secondaryCtaHref="/concrete-estimating-services/"
        points={[
          'Specialized strictly in CSI Division 03: Concrete, Formwork & Reinforcing Steel',
          'Delivering transparent Bluebeam Revu vector markups and live-formula Excel models',
          'Strict contractor confidentiality and non-disclosure protection for all plan sets',
          'Serving general contractors and trade subcontractors nationwide across the United States',
        ]}
      />

      {/* Philosophy and Technical Standards */}
      <section className="py-16 sm:py-20 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Our Core Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight leading-tight">
                Concrete Estimating Founded On Engineering Discipline & Transparency
              </h2>
              <p className="text-base text-concrete-600 leading-relaxed">
                In commercial and residential construction, accurate bidding is the difference between thriving growth and devastating losses. Yet contractors are frequently forced to choose between overloaded in-house staff working late nights and generic "black box" estimating services that return unverified lump sums.
              </p>
              <p className="text-base text-concrete-600 leading-relaxed">
                FK Concrete Estimating was established to provide a dedicated, mathematically rigorous alternative. We focus exclusively on <strong>CSI MasterFormat Division 03</strong>. By specializing in one critical trade division, our estimators understand the practical nuances that generalist estimators miss: unformed footing excavation sloughing, concrete boom pump line residuals, and ACI 318 tension Class B lap splices.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-concrete-800">
                <div className="p-4 bg-concrete-50 rounded-xl border border-concrete-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-concrete-950 block">Auditable Proof</span>
                    <span className="text-concrete-500 font-normal">Every square foot and cubic yard is visually cross-referenced on your plans.</span>
                  </div>
                </div>
                <div className="p-4 bg-concrete-50 rounded-xl border border-concrete-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-concrete-950 block">No False Guarantees</span>
                    <span className="text-concrete-500 font-normal">We never claim synthetic "95% bid-winning rates"—we deliver honest, accurate numbers.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Verification Disclosure Box */}
            <div className="lg:col-span-5 bg-concrete-900 text-white rounded-2xl p-7 border border-concrete-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-sm font-bold">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                <span>Verification Transparency</span>
              </div>
              <p className="text-xs text-concrete-300 leading-relaxed">
                In strict compliance with our ethical advertising and factual verification policy, FK Concrete Estimating separates verified estimating methods from business records pending owner confirmation:
              </p>
              <div className="p-3 bg-concrete-800/80 rounded-lg border border-concrete-700 text-xs text-concrete-300 space-y-2 font-mono">
                <div>• <strong>Primary Domain:</strong> fkconcreteestimating.com</div>
                <div>• <strong>Service Coverage:</strong> Nationwide US via digital submission</div>
                <div>• <strong>Primary Specialization:</strong> CSI MasterFormat Division 03</div>
                <div>• <strong>Deliverables:</strong> Microsoft Excel (.xlsx) & Bluebeam PDF</div>
                <div>• <strong>Physical Address:</strong> Pending business-owner confirmation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Tools */}
      <section className="py-20 bg-concrete-50 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Technical Standards
            </span>
            <h2 className="text-3xl font-extrabold text-concrete-950 tracking-tight mt-3">
              Industry Standards & Estimating Software Ecosystem
            </h2>
            <p className="mt-2 text-sm text-concrete-600">
              Our takeoff and pricing methodology is aligned with authoritative engineering organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl border border-concrete-200 shadow-sm">
              <span className="font-mono text-xs font-bold text-brand-orange">ACI Compliance</span>
              <h4 className="text-base font-bold text-concrete-950 mt-1">American Concrete Institute</h4>
              <p className="text-xs text-concrete-600 mt-2 leading-relaxed">
                ACI 318 for tension lap splices; ACI 301 for specifications; ACI 305/306 for weather precautions; ACI 347 for formwork shoring.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-concrete-200 shadow-sm">
              <span className="font-mono text-xs font-bold text-brand-orange">CSI MasterFormat</span>
              <h4 className="text-base font-bold text-concrete-950 mt-1">Division 03 Organization</h4>
              <p className="text-xs text-concrete-600 mt-2 leading-relaxed">
                Standardized categorization: 03 10 00 Formwork, 03 20 00 Reinforcement, 03 30 00 CIP Concrete, and 03 35 00 Concrete Finishing.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-concrete-200 shadow-sm">
              <span className="font-mono text-xs font-bold text-brand-orange">Bluebeam Revu</span>
              <h4 className="text-base font-bold text-concrete-950 mt-1">Vector On-Screen Takeoff</h4>
              <p className="text-xs text-concrete-600 mt-2 leading-relaxed">
                High-precision vector polygon measurements with custom tool chests, layered statuses, and color-coded drawing sheet markups.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-concrete-200 shadow-sm">
              <span className="font-mono text-xs font-bold text-brand-orange">RSMeans Data</span>
              <h4 className="text-base font-bold text-concrete-950 mt-1">Localized Cost Indices</h4>
              <p className="text-xs text-concrete-600 mt-2 leading-relaxed">
                Regional ready-mix material costs, equipment pumper rates, and labor man-hour productivity adjusted to your specific project ZIP code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DeliverablesDisplay />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-concrete-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCTA />
        </div>
      </section>
    </>
  )
}

