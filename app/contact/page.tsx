import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import EstimateRequestForm from '@/components/EstimateRequestForm'
import JsonLd from '@/components/JsonLd'
import { constructMetadata } from '@/lib/seo'
import { buildBreadcrumbSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'
import {
  Mail,
  Clock,
  MapPin,
  ShieldCheck,
  FileSpreadsheet,
  AlertCircle,
  HardHat,
  Layers,
} from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us & Request an Estimate | FK Concrete Estimating',
  description:
    'Submit your construction plans to FK Concrete Estimating. Fast, confidential CSI Division 03 concrete takeoff quotes delivered within 2 to 4 business hours.',
  path: '/contact/',
})

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Contact', path: '/contact/' },
  ])

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <div className="bg-concrete-100/60 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Contact & Quote Request', href: '/contact/' }]} />
        </div>
      </div>

      <div className="bg-concrete-900 text-white py-14 sm:py-20 border-b border-concrete-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-concrete-800 px-3.5 py-1.5 rounded-full border border-concrete-700">
            Bid Intake Portal
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4">
            Request an Estimate & Submit Plans
          </h1>
          <p className="mt-3 text-base sm:text-lg text-concrete-300 leading-relaxed">
            Upload your blueprints or share a cloud link. Our Division 03 estimating team will review your sheet set and return a firm quote and turnaround schedule within 2 to 4 hours.
          </p>
        </div>
      </div>

      <div className="py-16 sm:py-20 bg-concrete-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Inquiries & Verification Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-concrete-200 p-7 shadow-sm space-y-5">
                <h3 className="text-xl font-bold text-concrete-950 font-sans tracking-tight">
                  Direct Estimating Department
                </h3>
                <p className="text-xs text-concrete-600 leading-relaxed">
                  Have a question about an upcoming bid or a tight 24-hour deadline? Contact our senior concrete estimators directly.
                </p>

                <div className="space-y-4 pt-2 text-sm text-concrete-800">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-amber-50 rounded-lg text-brand-orange mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-concrete-500 uppercase font-mono block">Direct Plan Submission Email</span>
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="font-bold text-concrete-900 hover:text-brand-orange transition-colors"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>
                      <span className="text-xs text-concrete-500 block mt-0.5">Direct attachments up to 25MB</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-amber-50 rounded-lg text-brand-orange mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-concrete-500 uppercase font-mono block">Operating Hours & Review</span>
                      <span className="font-semibold text-concrete-900 block">{SITE_CONFIG.contact.operatingHours}</span>
                      <span className="text-xs text-concrete-500 block mt-0.5">Proposals returned within 2 to 4 business hours</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-amber-50 rounded-lg text-brand-orange mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-concrete-500 uppercase font-mono block">Service Region</span>
                      <span className="font-semibold text-concrete-900 block">Nationwide Across All 50 US States</span>
                      <span className="text-xs text-concrete-500 block mt-0.5">Digital vector plan intake via cloud</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-concrete-100">
                  <div className="p-3.5 bg-concrete-50 rounded-xl border border-concrete-200 text-xs text-concrete-600 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-concrete-900">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Non-Disclosure & File Security</span>
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      All submitted plans, bid documents, and contractor cost structures are treated under strict professional non-disclosure. We never share proprietary subcontractor data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Fact Verification Notice */}
              <div className="bg-concrete-900 text-white rounded-2xl p-6 border border-concrete-800 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span>Business Verification Disclosure</span>
                </div>
                <p className="text-xs text-concrete-300 leading-relaxed">
                  {SITE_CONFIG.contact.addressNotice} For immediate bidding inquiries, please use the secure project submission form or email our estimating desk directly.
                </p>
              </div>
            </div>

            {/* Right Column: Estimate Request Form */}
            <div className="lg:col-span-7">
              <EstimateRequestForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

