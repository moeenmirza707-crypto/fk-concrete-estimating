'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FAQItem {
  question: string
  answer: string
}

export default function FAQ({
  items,
  title = 'Frequently Asked Questions',
  subtitle = 'Clear answers to common questions about concrete estimating, takeoff deliverables, and bidding workflow.',
}: {
  items: FAQItem[]
  title?: string
  subtitle?: string
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-white rounded-2xl border border-concrete-200 p-6 sm:p-10 shadow-sm">
      <div className="max-w-3xl mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-concrete-950 tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-sm text-concrete-600 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="divide-y divide-concrete-200">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="py-5">
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-lg"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-bold text-concrete-900 group-hover:text-brand-orange transition-colors">
                  {item.question}
                </span>
                <span
                  className={`p-1.5 rounded-full bg-concrete-100 text-concrete-600 group-hover:bg-amber-100 group-hover:text-brand-orange transition-all flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-amber-100 text-brand-orange' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="mt-3 text-sm text-concrete-600 leading-relaxed pr-6 animate-fadeIn">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

