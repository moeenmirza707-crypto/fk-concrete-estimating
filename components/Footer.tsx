import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { ShieldCheck, FileSpreadsheet, HardHat, Mail, Clock, MapPin, AlertCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-concrete-950 text-concrete-300 border-t border-concrete-800">
      {/* Top Banner / Technical Competency Bar */}
      <div className="border-b border-concrete-800/80 bg-concrete-900/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-concrete-800 text-amber-400 mt-1">
                <HardHat className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">CSI MasterFormat Division 03</h4>
                <p className="text-xs text-concrete-400 mt-1 leading-relaxed">
                  Dedicated scope separation: 03 10 00 Formwork, 03 20 00 Reinforcement, 03 30 00 Cast-in-Place, and 03 35 00 Concrete Finishing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-concrete-800 text-amber-400 mt-1">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Transparent Deliverables</h4>
                <p className="text-xs text-concrete-400 mt-1 leading-relaxed">
                  Line-item Excel spreadsheets with live formulas alongside color-coded Bluebeam Revu marked-up drawing sheets.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-concrete-800 text-amber-400 mt-1">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Ethical Estimating Standards</h4>
                <p className="text-xs text-concrete-400 mt-1 leading-relaxed">
                  No synthetic bid-winning statistics or unsupported guarantees. Real mathematical quantities and transparent assumptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                FK
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white font-sans block">
                  FK Concrete Estimating
                </span>
                <span className="text-xs text-concrete-400 font-mono uppercase tracking-wider block">
                  Professional Division 03 Takeoffs
                </span>
              </div>
            </Link>

            <p className="text-sm text-concrete-400 leading-relaxed max-w-md">
              FK Concrete Estimating provides precise, line-item concrete takeoff and cost estimating services for general contractors, concrete subcontractors, commercial builders, and engineering firms across the United States.
            </p>

            <div className="pt-2 space-y-2 text-xs text-concrete-400 font-mono">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-concrete-500" />
                <span>Standard Turnaround: 24 to 48 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-concrete-500" />
                <span>{SITE_CONFIG.contact.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-concrete-500 mt-0.5" />
                <span>Serving contractors nationwide across all 50 US States</span>
              </div>
            </div>

            {/* Business Verification Disclosure Box */}
            <div className="mt-4 p-3 bg-concrete-900/90 border border-concrete-800 rounded-lg text-[11px] text-concrete-400 leading-normal flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Verification Transparency:</strong> FK Concrete Estimating reports verified takeoff scopes and mathematical standards. Physical office address and direct phone line are pending business owner confirmation.
              </span>
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-concrete-400 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Company & Process
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-concrete-400 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications & Standards */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Technical Standards
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.footerLinks.standards.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-concrete-400 hover:text-amber-400 transition-colors text-xs leading-snug block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-concrete-900">
              <span className="text-[11px] text-concrete-500 uppercase font-mono block">Software Ecosystem</span>
              <p className="text-xs text-concrete-400 mt-1">Bluebeam Revu, PlanSwift, Microsoft Excel, RSMeans Data</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Line */}
      <div className="border-t border-concrete-900 bg-black/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-concrete-500">
          <p>© {currentYear} {SITE_CONFIG.legalName}. All rights reserved. Domain: fkconcreteestimating.com</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy/" className="hover:text-concrete-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="hover:text-concrete-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact/" className="hover:text-concrete-300 transition-colors">
              Submit Plans
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

