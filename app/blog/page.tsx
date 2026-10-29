import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import QuoteCTA from '@/components/QuoteCTA'
import JsonLd from '@/components/JsonLd'
import { constructMetadata } from '@/lib/seo'
import { buildBreadcrumbSchema } from '@/lib/schema'
import { BLOG_POSTS } from '@/lib/content/posts'
import { formatDate } from '@/lib/utils'
import { BookOpen, Clock, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'Concrete Estimating Blog & Technical Takeoff Guides',
  description:
    'In-depth construction estimating articles, blueprint reading tutorials, ACI 318 rebar standards, and concrete takeoff methodologies for contractors and estimators.',
  path: '/blog/',
})

export default function BlogIndexPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Blog', path: '/blog/' },
  ])

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <div className="bg-concrete-100/60 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Educational Resources & Blog', href: '/blog/' }]} />
        </div>
      </div>

      <div className="bg-concrete-900 text-white py-14 sm:py-20 border-b border-concrete-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-concrete-800 px-3.5 py-1.5 rounded-full border border-concrete-700">
            Educational Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4">
            Concrete Estimating & Takeoff Resources
          </h1>
          <p className="mt-3 text-base sm:text-lg text-concrete-300 leading-relaxed">
            Technical guides, mathematical formulas, blueprint interpretation principles, and bidding insights written for contractors and construction estimators.
          </p>
        </div>
      </div>

      <div className="py-16 sm:py-20 bg-concrete-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-concrete-200 p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-concrete-500 mb-4">
                    <span className="text-brand-orange bg-amber-50 px-2.5 py-1 rounded border border-amber-200 font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-concrete-950 font-sans tracking-tight group-hover:text-brand-orange transition-colors">
                    <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                  </h2>

                  <p className="mt-3 text-sm text-concrete-600 leading-relaxed">
                    {post.summary}
                  </p>

                  <div className="mt-6 pt-4 border-t border-concrete-100">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-concrete-400 block mb-2">
                      Key Takeaways
                    </span>
                    <ul className="space-y-1.5 text-xs text-concrete-700">
                      {post.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-concrete-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-concrete-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formatDate(post.datePublished)}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}/`}
                    className="inline-flex items-center text-sm font-bold text-brand-orange hover:text-brand-orange-hover transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <QuoteCTA />
          </div>
        </div>
      </div>
    </>
  )
}

