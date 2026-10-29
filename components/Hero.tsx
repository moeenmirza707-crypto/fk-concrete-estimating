import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, FileSpreadsheet, ShieldAlert, Layers } from 'lucide-react'

interface HeroProps {
  badge?: string
  h1: string
  subtitle: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  showKeyPoints?: boolean
  points?: string[]
}

export default function Hero({
  badge = 'CSI MasterFormat Division 03 Estimating',
  h1,
  subtitle,
  primaryCtaText = 'Request an Estimate',
  primaryCtaHref = '/contact/',
  secondaryCtaText = 'Explore Our Services',
  secondaryCtaHref = '/concrete-estimating-services/',
  showKeyPoints = true,
  points = [
    'Line-Item Quantities: Cubic Yards, SFCA Formwork, Tons of Rebar',
    'Color-Coded Bluebeam PDF Markups & Auditable Excel Sheets',
    'Turnaround: 24 to 48 Hours for Standard Plan Sets',
  ],
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-concrete-900 via-concrete-950 to-concrete-900 text-white overflow-hidden py-16 sm:py-24 border-b border-concrete-800">
      {/* Blueprint grid subtle pattern background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px, 48px 48px, 48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-concrete-800/90 border border-concrete-700 text-amber-400 text-xs font-mono uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
              {badge}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              {h1}
            </h1>

            <p className="text-base sm:text-lg text-concrete-300 leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            {/* Supporting Information: Audience and Deliverables */}
            {showKeyPoints && (
              <div className="pt-2 pb-2 space-y-2.5">
                {points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-concrete-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href={primaryCtaHref}
                className="inline-flex items-center justify-center px-7 py-4 text-base font-bold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
              >
                {primaryCtaText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-concrete-200 bg-concrete-800/80 hover:bg-concrete-700/80 hover:text-white rounded-xl border border-concrete-700 transition-all"
              >
                {secondaryCtaText}
              </Link>
            </div>

            {/* Subtle verification notice */}
            <div className="pt-2 text-xs text-concrete-400 font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-concrete-500" />
              <span>Dedicated Division 3 Estimators • PlanSwift & Bluebeam Revu native files</span>
            </div>
          </div>

          {/* Right Column: Visual Technical Graphic / Blueprint Schematic Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-concrete-700/80 bg-concrete-900/90 shadow-2xl overflow-hidden p-6 sm:p-7">
              {/* Technical Blueprint Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-concrete-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="ml-2 font-mono text-xs text-concrete-400">
                    CSI_03_Takeoff_Audited.xlsx
                  </span>
                </div>
                <span className="font-mono text-[10px] text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded">
                  VERIFIED AUDIT TRAIL
                </span>
              </div>

              {/* Schematic Division 3 Takeoff Preview */}
              <div className="mt-5 space-y-4 font-mono text-xs">
                {/* Takeoff item 1 */}
                <div className="p-3 bg-concrete-800/60 rounded-lg border border-concrete-700/60 flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">03 30 00 Cast-in-Place SOG</div>
                    <div className="text-concrete-400 text-[11px]">4,000 PSI • 6" Depth • Laser Screed</div>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-400 font-bold text-sm">1,245.0 CY</div>
                    <div className="text-[10px] text-concrete-400">Incl. 6% pump waste</div>
                  </div>
                </div>

                {/* Takeoff item 2 */}
                <div className="p-3 bg-concrete-800/60 rounded-lg border border-concrete-700/60 flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">03 10 00 Continuous Footing Forms</div>
                    <div className="text-concrete-400 text-[11px]">Edge Forms • Keyways & Chamfers</div>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-400 font-bold text-sm">4,820 SFCA</div>
                    <div className="text-[10px] text-concrete-400">Contact surface area</div>
                  </div>
                </div>

                {/* Takeoff item 3 */}
                <div className="p-3 bg-concrete-800/60 rounded-lg border border-concrete-700/60 flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">03 20 00 Grade 60 Reinforcing</div>
                    <div className="text-concrete-400 text-[11px]">#4, #5 & #6 • ACI 318 Lap Splice</div>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-400 font-bold text-sm">38.45 TONS</div>
                    <div className="text-[10px] text-concrete-400">Ties, chairs & dowels</div>
                  </div>
                </div>

                {/* Takeoff item 4 */}
                <div className="p-3 bg-concrete-800/60 rounded-lg border border-concrete-700/60 flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">03 35 00 Finishing & Curing</div>
                    <div className="text-concrete-400 text-[11px]">Power Trowel • Curing Compound</div>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-400 font-bold text-sm">56,000 SF</div>
                    <div className="text-[10px] text-concrete-400">Membrane & hardener</div>
                  </div>
                </div>
              </div>

              {/* Bottom Deliverable Verification Bar */}
              <div className="mt-5 pt-4 border-t border-concrete-800 flex items-center justify-between text-[11px] text-concrete-400 font-mono">
                <span className="flex items-center gap-1.5 text-concrete-300">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400" /> Excel + Bluebeam PDF
                </span>
                <span className="text-concrete-400">Delivered within 24–48h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

