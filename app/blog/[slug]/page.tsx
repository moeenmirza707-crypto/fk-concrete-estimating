import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import QuoteCTA from '@/components/QuoteCTA'
import JsonLd from '@/components/JsonLd'
import { BLOG_POSTS, getBlogPostBySlug } from '@/lib/content/posts'
import { constructMetadata } from '@/lib/seo'
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/schema'
import { formatDate } from '@/lib/utils'
import { Clock, Calendar, User, ArrowLeft, CheckCircle2, Share2, Layers } from 'lucide-react'

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}

  return constructMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}/`,
  })
}

export default function SingleBlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const articleSchema = buildArticleSchema({
    title: post.title,
    description: post.summary,
    urlPath: `/blog/${post.slug}/`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    authorName: post.author,
  })

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Blog', path: '/blog/' },
    { name: post.title, path: `/blog/${post.slug}/` },
  ])

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="bg-concrete-100/60 border-b border-concrete-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Blog', href: '/blog/' },
              { name: post.title, href: `/blog/${post.slug}/` },
            ]}
          />
        </div>
      </div>

      <article className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Meta */}
          <div className="space-y-4 border-b border-concrete-200 pb-8 mb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="text-brand-orange bg-amber-50 px-3 py-1 rounded-full border border-amber-200 font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-concrete-500">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5 text-concrete-500">
                <Calendar className="w-4 h-4" />
                Published: {formatDate(post.datePublished)}
              </span>
              {post.dateModified !== post.datePublished && (
                <span className="text-concrete-400">
                  (Updated: {formatDate(post.dateModified)})
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-concrete-950 font-sans leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-concrete-600 leading-relaxed">
              {post.summary}
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-concrete-500">
              <User className="w-4 h-4 text-brand-orange" />
              <span>Technical Review: {post.author}</span>
            </div>
          </div>

          {/* Key Takeaways Callout Box */}
          <div className="bg-concrete-50 rounded-2xl border border-concrete-200 p-6 sm:p-8 mb-10 shadow-sm">
            <div className="flex items-center gap-2 text-concrete-950 font-bold font-mono text-sm uppercase tracking-wider mb-3">
              <Layers className="w-4 h-4 text-brand-orange" />
              <span>Executive Estimating Takeaways</span>
            </div>
            <ul className="space-y-2.5 text-sm text-concrete-700">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Body Content */}
          <div className="prose prose-slate max-w-none text-concrete-800 leading-relaxed space-y-6">
            <div
              className="space-y-6 text-sm sm:text-base"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/### (.*?)\n/g, '<h3 class="text-2xl font-bold text-concrete-950 mt-8 mb-3 font-sans">$1</h3>')
                  .replace(/#### (.*?)\n/g, '<h4 class="text-xl font-bold text-concrete-900 mt-6 mb-2 font-sans">$1</h4>')
                  .replace(/\\\[(.*?)\\\]/g, '<div class="p-4 bg-concrete-100 rounded-lg font-mono text-xs my-4 overflow-x-auto">$1</div>')
                  .replace(/\$\$(.*?)\$\$/g, '<div class="p-3 bg-concrete-100/80 rounded-lg font-mono text-xs my-3 text-concrete-900 font-semibold overflow-x-auto">$1</div>')
                  .replace(/\n\n/g, '<br/>'),
              }}
            />
          </div>

          {/* Contextual Internal Links Section */}
          <div className="mt-12 p-6 bg-amber-50/60 rounded-2xl border border-amber-200/80">
            <h4 className="text-base font-bold text-concrete-950 font-sans">
              Need Professional Support On An Upcoming Concrete Bid?
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-concrete-700 leading-relaxed">
              FK Concrete Estimating delivers comprehensive Division 03 takeoffs in 24 to 48 hours. Explore our{' '}
              <Link href="/concrete-estimating-services/" className="font-bold text-brand-orange underline">
                Concrete Estimating Services
              </Link>
              , view our{' '}
              <Link href="/concrete-takeoff-services/" className="font-bold text-brand-orange underline">
                Concrete Quantity Takeoffs
              </Link>
              , or review our{' '}
              <Link href="/rebar-estimating-services/" className="font-bold text-brand-orange underline">
                Rebar Detailing & Takeoff Services
              </Link>
              .
            </p>
          </div>

          {/* Back link & Quote CTA */}
          <div className="mt-12 pt-6 border-t border-concrete-200 flex items-center justify-between">
            <Link
              href="/blog/"
              className="inline-flex items-center text-sm font-semibold text-concrete-600 hover:text-brand-orange transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              <span>Back to All Estimating Guides</span>
            </Link>

            <Link
              href="/contact/"
              className="inline-flex items-center text-sm font-bold text-brand-orange hover:text-brand-orange-hover transition-colors"
            >
              <span>Submit Plans for Quote</span>
            </Link>
          </div>

          <div className="mt-12">
            <QuoteCTA />
          </div>
        </div>
      </article>
    </>
  )
}

