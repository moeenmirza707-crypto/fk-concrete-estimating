import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  name: string
  href: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-xs sm:text-sm text-concrete-500 flex-wrap">
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-brand-orange transition-colors text-concrete-600"
          >
            <Home className="w-4 h-4 mr-1" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.href} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-concrete-400 flex-shrink-0" />
              {isLast ? (
                <span className="font-semibold text-concrete-900 truncate" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-brand-orange transition-colors text-concrete-600 truncate"
                >
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

