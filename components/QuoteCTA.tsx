import Link from 'next/link'
import { ArrowRight, Calculator, Clock, ShieldCheck, Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function QuoteCTA({
  title = 'Ready to Submit Your Concrete Plans for a Takeoff?',
  description = 'Send us your architectural, structural, or foundation drawings today. Receive an itemized CSI Division 03 quantity takeoff in Excel alongside marked-up Bluebeam PDFs within 24 to 48 hours.',
  buttonText = 'Request an Estimate Now',
  buttonHref = '/contact/',
}: {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}) {
  return (
    <section className="bg-gradient-to-r from-concrete-900 via-concrete-950 to-concrete-900 text-white rounded-3xl border border-concrete-800 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
      {/* Blueprint grid accent */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px, 48px 48px, 48px 48px',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-concrete-800/80 border border-concrete-700 text-amber-400 text-xs font-mono uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5 text-brand-orange" />
          <span>Fast Turnaround • 24 to 48 Hours for Standard Scopes</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-concrete-300 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={buttonHref}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
          >
            <Calculator className="w-5 h-5 mr-2" />
            {buttonText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-concrete-200 bg-concrete-800/80 hover:bg-concrete-700 hover:text-white rounded-xl border border-concrete-700 transition-all"
          >
            <Mail className="w-5 h-5 mr-2 text-concrete-400" />
            Email Blueprints Directly
          </a>
        </div>

        <div className="pt-6 border-t border-concrete-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-concrete-400 font-mono">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Non-Disclosure Protected
          </span>
          <span>•</span>
          <span>Excel (.xlsx) + Bluebeam PDF Deliverables</span>
          <span>•</span>
          <span>Nationwide US Coverage</span>
        </div>
      </div>
    </section>
  )
}

