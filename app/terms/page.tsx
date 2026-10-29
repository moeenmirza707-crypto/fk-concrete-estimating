import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { constructMetadata } from '@/lib/seo'
import { buildBreadcrumbSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'
import { FileText, AlertTriangle, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'Terms of Service & Estimating Engagement | FK Concrete Estimating',
  description:
    'Terms of service and scope parameters for concrete takeoff and estimating engagements with FK Concrete Estimating.',
  path: '/terms/',
})

export default function TermsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Terms of Service', path: '/terms/' },
  ])

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <div className="bg-concrete-100/60 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Terms of Service', href: '/terms/' }]} />
        </div>
      </div>

      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Engagement Terms
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight mt-3">
              Terms of Service & Estimating Engagement
            </h1>
            <p className="mt-2 text-sm text-concrete-500 font-mono">
              Last substantive review: October 2026
            </p>
          </div>

          <div className="p-6 bg-amber-50/60 rounded-2xl border border-amber-200 space-y-2">
            <h3 className="text-base font-bold text-concrete-950 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-brand-orange" /> Contractor Bidding Responsibility Notice
            </h3>
            <p className="text-xs text-concrete-700 leading-relaxed">
              FK Concrete Estimating provides quantity takeoffs and material/labor estimates based strictly on the drawings, schedules, and addenda provided by the client. We do not provide licensed structural engineering stamps or guarantee project bid awards. Contractors remain solely responsible for their final bid submissions, labor burdens, and field execution.
            </p>
          </div>

          <div className="space-y-6 text-sm text-concrete-700 leading-relaxed">
            <h2 className="text-xl font-bold text-concrete-950 font-sans">1. Nature of Services</h2>
            <p>
              FK Concrete Estimating ({SITE_CONFIG.domain}) performs mathematical quantity takeoffs, CSI MasterFormat Division 03 breakdowns, and localized cost modeling. Our deliverables (Excel spreadsheets, color-coded Bluebeam PDF markups, and assumption logs) serve as an independent bidding and buyout aid.
            </p>

            <h2 className="text-xl font-bold text-concrete-950 font-sans">2. Plan Accuracy & Drawing Conflicts</h2>
            <p>
              Quantities are calculated from the scaled dimensions and notes provided in the client's submitted plan sets. Where drawing discrepancies, missing details, or unstated specifications occur, FK Concrete Estimating documents these items in an Assumption & Discrepancy Log. The client is encouraged to verify assumptions and issue formal Requests for Information (RFIs) to the project architect or structural engineer of record.
            </p>

            <h2 className="text-xl font-bold text-concrete-950 font-sans">3. Turnaround Times & Delivery</h2>
            <p>
              Turnaround timelines (e.g., standard 24–48 hours) commence upon receipt of confirmed, readable drawing sets and scope agreement. While we make every reasonable effort to accommodate urgent contractor bid closing deadlines, delivery schedules are subject to drawing legibility and addenda volume.
            </p>

            <h2 className="text-xl font-bold text-concrete-950 font-sans">4. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, FK Concrete Estimating and its estimators shall not be liable for indirect, incidental, punitive, or consequential damages resulting from lost bids, jobsite variances, material supplier price fluctuations, or field execution errors.
            </p>

            <h2 className="text-xl font-bold text-concrete-950 font-sans">5. Governing Law</h2>
            <p>
              These terms are governed by the laws of the United States. For inquiries regarding specific service contracts or non-disclosure agreements (NDAs), contact our legal and contract team at{' '}
              <a href={`mailto:${SITE_CONFIG.contact.supportEmail}`} className="text-brand-orange underline">
                {SITE_CONFIG.contact.supportEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

