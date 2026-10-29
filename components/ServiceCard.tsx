import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  href: string
  description: string
  csiCode: string
  icon: LucideIcon
  features: string[]
  badge?: string
}

export default function ServiceCard({
  title,
  href,
  description,
  csiCode,
  icon: Icon,
  features,
  badge,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-concrete-200 shadow-sm hover:shadow-xl hover:border-concrete-300 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="p-3 rounded-xl bg-concrete-100 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-2">
            {badge && (
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-50 text-brand-orange border border-amber-200 px-2 py-0.5 rounded">
                {badge}
              </span>
            )}
            <span className="font-mono text-xs text-concrete-500 font-semibold">
              {csiCode}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-concrete-950 font-sans tracking-tight group-hover:text-brand-orange transition-colors">
          <Link href={href}>{title}</Link>
        </h3>

        <p className="mt-2.5 text-sm text-concrete-600 leading-relaxed">
          {description}
        </p>

        <ul className="mt-5 space-y-2 border-t border-concrete-100 pt-4">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-concrete-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-4 border-t border-concrete-100">
        <Link
          href={href}
          className="inline-flex items-center text-sm font-bold text-brand-orange hover:text-brand-orange-hover transition-colors group-hover:translate-x-1 duration-200"
        >
          <span>View Scope & Deliverables</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </Link>
      </div>
    </div>
  )
}

