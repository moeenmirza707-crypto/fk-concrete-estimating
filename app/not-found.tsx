import Link from 'next/link'
import { FileQuestion, ArrowLeft, Home, Calculator } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-concrete-50">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-concrete-200 shadow-xl">
        <div className="w-16 h-16 bg-amber-50 rounded-2xl border border-amber-200 text-brand-orange flex items-center justify-center mx-auto">
          <FileQuestion className="w-8 h-8" />
        </div>

        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-concrete-400">
            Error 404 • Page Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-concrete-950 mt-1">
            Looking for a Concrete Estimate?
          </h1>
          <p className="mt-2.5 text-sm text-concrete-600 leading-relaxed">
            The page you requested may have moved or no longer exists. Explore our core Division 03 takeoff services or submit plans for a quote.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Link
            href="/concrete-estimating-services/"
            className="inline-flex items-center justify-center px-5 py-3 text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-xl shadow-sm transition-all"
          >
            <Calculator className="w-4 h-4 mr-2" />
            Explore Concrete Estimating Services
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-concrete-700 bg-concrete-100 hover:bg-concrete-200 rounded-xl transition-all"
          >
            <Home className="w-4 h-4 mr-2" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

