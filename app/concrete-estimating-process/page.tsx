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
  Cpu,
  FileCheck,
  CheckCircle2,
  Clock,
  Layers,
  FileSpreadsheet,
  ShieldCheck,
} from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'Our Concrete Estimating Process | 5-Step Quality Assurance Workflow',
  description:
    'Explore the 5-step concrete estimating process at FK Concrete Estimating. From plan intake and digital takeoff to senior audit, RFI logs, and deliverable handoff.',
  path: '/concrete-estimating-process/',
})

const processFaqs = [
  {
    question: 'How do you ensure blueprint scale accuracy before measuring?',
    answer:
      'We verify digital scale along both the X and Y axes using stated architectural dimension strings (such as overall building lengths) rather than short door openings or grid spacing. Once verified, the page scale is locked in Bluebeam Revu to eliminate accidental scaling drift.',
  },
  {
    question: 'What happens if our project receives a pre-bid addendum?',
    answer:
      'If the design team issues an addendum with revised foundation depths or slab dimensions prior to bid closing, alert our team immediately. We overlay the revision clouds onto our Bluebeam project file, recalculate affected line items, and issue an updated Excel deliverable.',
  },
  {
    question: 'How are RFIs and missing details handled during the process?',
    answer:
      'We never make silent assumptions. When drawings conflict (such as structural footing depths contradicting architectural elevations), we document the item in our Discrepancy & Assumption Log with clear engineering notes and draft RFI questions ready for your team to submit.',
  },
]

export default function ConcreteEstimatingProcessPage() {
  const serviceSchema = buildServiceSchema({
    name: 'Concrete Estimating Process',
    description:
      'The standardized 5-step concrete takeoff and estimating quality assurance process used by FK Concrete Estimating.',
    serviceType: 'Quality Assurance Process',
    urlPath: '/concrete-estimating-process/',
  })

  const faqSchema = buildFAQSchema(processFaqs)
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Our Process', path: '/concrete-estimating-process/' },
  ])

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="bg-concrete-100/60 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Our Process', href: '/concrete-estimating-process/' }]} />
        </div>
      </div>

      <Hero
        badge="Quality Assurance Protocol"
        h1="Our Concrete Estimating Process & Quality Protocol"
        subtitle="A disciplined, transparent 5-step workflow designed to deliver verified CSI Division 03 takeoffs and priced estimates with zero omissions."
        primaryCtaText="Submit Plans For Takeoff"
        primaryCtaHref="#process-form"
        secondaryCtaText="View 5-Step Process"
        secondaryCtaHref="#steps"
        points={[
          'Stage 1: Comprehensive drawing intake, sheet set validation, and scale calibration',
          'Stage 2: On-screen vector measurement using Bluebeam Revu tool sets',
          'Stage 3: Waste factor calibration and ACI 318 tension lap splice detailing',
          'Stage 4 & 5: Senior estimator auditing, discrepancy log compilation, and delivery',
        ]}
      />

      {/* Process Steps Section */}
      <section id="steps" className="py-20 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Discipline & Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight mt-3">
              The 5-Stage Concrete Estimating Workflow
            </h2>
            <p className="mt-2 text-base text-concrete-600 leading-relaxed">
              Every project follows an established sequence of checks and balances before deliverables leave our office.
            </p>
          </div>

          <ProcessSteps />
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
          <FAQ items={processFaqs} title="Estimating Process FAQ" />
        </div>
      </section>

      {/* Submission Form */}
      <section id="process-form" className="py-20 bg-concrete-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Start Your Takeoff
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight leading-tight">
                Submit Your Project Plans Today
              </h2>
              <p className="text-sm text-concrete-600 leading-relaxed">
                Experience our professional estimating workflow firsthand. Upload your drawing set for a rapid, firm proposal.
              </p>
            </div>
            <div className="lg:col-span-7">
              <EstimateRequestForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

