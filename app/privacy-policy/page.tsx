import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { constructMetadata } from '@/lib/seo'
import { buildBreadcrumbSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy & Plan Confidentiality | FK Concrete Estimating',
  description:
    'Our privacy policy and blueprint confidentiality commitments for contractors submitting drawings to FK Concrete Estimating.',
  path: '/privacy-policy/',
})

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Privacy Policy', path: '/privacy-policy/' },
  ])

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <div className="bg-concrete-100/60 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy-policy/' }]} />
        </div>
      </div>

      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Legal Information
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-concrete-950 tracking-tight mt-3">
              Privacy Policy & Plan Confidentiality
            </h1>
            <p className="mt-2 text-sm text-concrete-500 font-mono">
              Last substantive review: October 2026
            </p>
          </div>

          <div className="p-6 bg-concrete-50 rounded-2xl border border-concrete-200 space-y-2">
            <h3 className="text-base font-bold text-concrete-950 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" /> Contractor Blueprint Confidentiality
            </h3>
            <p className="text-xs text-concrete-600 leading-relaxed">
              At FK Concrete Estimating ({SITE_CONFIG.domain}), we understand that your submitted architectural drawings, engineering schedules, addenda, and bid pricing are highly sensitive, competitive trade assets. We adhere to strict commercial non-disclosure practices.
            </p>
          </div>

          <div className="space-y-6 text-sm text-concrete-700 leading-relaxed">
            <h2 className="text-xl font-bold text-concrete-950 font-sans">1. Information We Collect</h2>
            <p>
              When you submit a quote request through our website or send drawings via email, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-concrete-600">
              <li>Contact details (name, contracting company name, business email, and phone number).</li>
              <li>Project details (geographic location, estimated scope, desired turnaround, and special bidding instructions).</li>
              <li>Uploaded drawing sets, blueprint files, specification sheets, and cloud folder links.</li>
            </ul>

            <h2 className="text-xl font-bold text-concrete-950 font-sans">2. How We Use Submitted Drawings</h2>
            <p>
              Drawings and project specifications submitted to FK Concrete Estimating are used exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-concrete-600">
              <li>Evaluating scope complexity and issuing formal takeoff turnaround proposals.</li>
              <li>Executing digital vector on-screen takeoffs in Bluebeam Revu and PlanSwift.</li>
              <li>Generating itemized Excel quantity schedules and discrepancy logs for your bid review.</li>
            </ul>
            <p>
              We do <strong>not</strong> sell, license, rent, publicly display, or share contractor blueprint files or project identities with rival contractors or third-party marketing companies.
            </p>

            <h2 className="text-xl font-bold text-concrete-950 font-sans">3. Data Security & Storage</h2>
            <p>
              All digital submissions are transmitted through encrypted HTTPS channels. Project files and takeoffs are stored in access-controlled environments and retained solely for the duration required to support your bidding, addenda reviews, and buyout verification.
            </p>

            <h2 className="text-xl font-bold text-concrete-950 font-sans">4. Contact Regarding Privacy</h2>
            <p>
              For questions regarding plan confidentiality or to request the deletion of your historical drawing submissions, contact our privacy desk at{' '}
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

