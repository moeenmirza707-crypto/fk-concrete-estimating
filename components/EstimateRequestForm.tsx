'use client'

import { useState } from 'react'
import {
  Send,
  CheckCircle2,
  AlertCircle,
  UploadCloud,
  FileCheck,
  Shield,
  Clock,
  Loader2,
} from 'lucide-react'

export default function EstimateRequestForm({
  defaultScope = '',
}: {
  defaultScope?: string
}) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    projectType: defaultScope || 'Complete CSI Division 03 Package',
    projectLocation: '',
    scopeSize: '',
    turnaround: 'Standard (24-48 Hours)',
    planLink: '',
    projectNotes: '',
    consent: false,
    website_trap: '', // Honeypot field
  })

  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error'
    text: string
    refId?: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatusMessage(null)

    // Basic Client-side validation
    if (!formData.name.trim()) {
      setStatusMessage({ type: 'error', text: 'Please enter your full name.' })
      setLoading(false)
      return
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid work email address.' })
      setLoading(false)
      return
    }

    if (!formData.projectLocation.trim()) {
      setStatusMessage({ type: 'error', text: 'Please specify the project location (City, State).' })
      setLoading(false)
      return
    }

    if (!formData.consent) {
      setStatusMessage({ type: 'error', text: 'Please confirm that you agree to our privacy terms.' })
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/estimate-request/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatusMessage({
          type: 'success',
          text: data.message,
          refId: data.refId,
        })
        // Reset form
        setFormData({
          name: '',
          businessName: '',
          email: '',
          phone: '',
          projectType: 'Complete CSI Division 03 Package',
          projectLocation: '',
          scopeSize: '',
          turnaround: 'Standard (24-48 Hours)',
          planLink: '',
          projectNotes: '',
          consent: false,
          website_trap: '',
        })
      } else {
        setStatusMessage({
          type: 'error',
          text: data.error || 'Failed to submit estimate request. Please try again.',
        })
      }
    } catch (err) {
      setStatusMessage({
        type: 'error',
        text: 'Network communication error. Please check your connection or email your plans directly to estimates@fkconcreteestimating.com.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-concrete-200 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="border-b border-concrete-100 pb-6 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold mb-3">
          <Clock className="w-3.5 h-3.5 text-brand-orange" />
          <span>Quick Plan Submission • Response in 2–4 Business Hours</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-concrete-950 tracking-tight">
          Request a Concrete Estimate & Takeoff
        </h3>
        <p className="mt-2 text-sm text-concrete-600 leading-relaxed">
          Upload or link your architectural, structural, and civil drawings. Our estimators will review the scale, sheet set, and concrete specifications to provide a firm turnaround quote.
        </p>
      </div>

      {statusMessage && (
        <div
          className={`mb-8 p-5 rounded-xl border ${
            statusMessage.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}
          role="alert"
        >
          <div className="flex items-start gap-3">
            {statusMessage.type === 'success' ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-semibold text-sm leading-snug">{statusMessage.text}</p>
              {statusMessage.refId && (
                <p className="mt-2 text-xs font-mono font-bold bg-white/80 inline-block px-2.5 py-1 rounded border border-emerald-300">
                  Tracking Reference: {statusMessage.refId}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Anti-spam honeypot field (hidden from visual users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website_trap">Do not fill this field</label>
          <input
            type="text"
            id="website_trap"
            name="website_trap"
            tabIndex={-1}
            value={formData.website_trap}
            onChange={(e) => setFormData({ ...formData, website_trap: e.target.value })}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-concrete-700 mb-1.5 font-mono">
              Contact Name <span className="text-brand-orange">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="e.g. John Doe, Estimator"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-concrete-300 bg-white text-concrete-900 text-sm focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-concrete-400"
            />
          </div>

          {/* Company / Business Name */}
          <div>
            <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-concrete-700 mb-1.5 font-mono">
              Company / Contracting Firm
            </label>
            <input
              type="text"
              id="businessName"
              placeholder="e.g. Apex Concrete Contractors LLC"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-concrete-300 bg-white text-concrete-900 text-sm focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-concrete-400"
            />
          </div>

          {/* Work Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-concrete-700 mb-1.5 font-mono">
              Work Email Address <span className="text-brand-orange">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-concrete-300 bg-white text-concrete-900 text-sm focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-concrete-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-concrete-700 mb-1.5 font-mono">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="(555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-concrete-300 bg-white text-concrete-900 text-sm focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-concrete-400"
            />
          </div>

          {/* Scope Type */}
          <div>
            <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-concrete-700 mb-1.5 font-mono">
              Concrete Scope of Work <span className="text-brand-orange">*</span>
            </label>
            <select
              id="projectType"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-concrete-300 bg-white text-concrete-900 text-sm focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all"
            >
              <option value="Complete CSI Division 03 Package">Complete CSI Division 03 Package</option>
              <option value="Commercial Slab & Warehouse Floors">Commercial Slab & Warehouse Floors</option>
              <option value="Foundations, Footings & Grade Beams">Foundations, Footings & Grade Beams</option>
              <option value="Structural Concrete (Columns, Beams, Elevated Decks)">Structural Concrete (Columns, Beams, Elevated Decks)</option>
              <option value="Residential Concrete & Basements">Residential Concrete & Basements</option>
              <option value="Rebar & Reinforcement Only">Rebar & Reinforcement Only</option>
              <option value="Site Concrete, Curbs & Paving">Site Concrete, Curbs & Paving</option>
              <option value="Concrete Takeoff Only (No Pricing)">Concrete Takeoff Only (Quantities Only)</option>
            </select>
          </div>

          {/* Project Location */}
          <div>
            <label htmlFor="projectLocation" className="block text-xs font-bold uppercase tracking-wider text-concrete-700 mb-1.5 font-mono">
              Project Location (City, State) <span className="text-brand-orange">*</span>
            </label>
            <input
              type="text"
              id="projectLocation"
              required
              placeholder="e.g. Austin, TX or Denver, CO"
              value={formData.projectLocation}
              onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-concrete-300 bg-white text-concrete-900 text-sm focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-concrete-400"
            />
          </div>

          {/* Estimated Scope Size */}
          <div>
            <label htmlFor="scopeSize" className="block text-xs font-bold uppercase tracking-wider text-concrete-700 mb-1.5 font-mono">
              Estimated Size / CY / SF (If Known)
            </label>
            <input
              type="text"
              id="scopeSize"
              placeholder="e.g. ~1,200 CY or 45,000 SF SOG"
              value={formData.scopeSize}
              onChange={(e) => setFormData({ ...formData, scopeSize: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-concrete-300 bg-white text-concrete-900 text-sm focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-concrete-400"
            />
          </div>

          {/* Desired Turnaround */}
          <div>
            <label htmlFor="turnaround" className="block text-xs font-bold uppercase tracking-wider text-concrete-700 mb-1.5 font-mono">
              Desired Turnaround
            </label>
            <select
              id="turnaround"
              value={formData.turnaround}
              onChange={(e) => setFormData({ ...formData, turnaround: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-concrete-300 bg-white text-concrete-900 text-sm focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all"
            >
              <option value="Standard (24-48 Hours)">Standard (24–48 Hours)</option>
              <option value="Rush (<24 Hours - Deadline Urgent)">Rush (&lt; 24 Hours - Deadline Urgent)</option>
              <option value="Flexible (3-5 Days)">Flexible (3–5 Days)</option>
              <option value="Conceptual / Pre-Construction Budget">Conceptual / Pre-Construction Budget</option>
            </select>
          </div>
        </div>

        {/* Plan Link or Cloud Folder Input */}
        <div>
          <label htmlFor="planLink" className="block text-xs font-bold uppercase tracking-wider text-concrete-700 mb-1.5 font-mono">
            Plan Set Link (Google Drive, Dropbox, OneDrive, Procore, Box)
          </label>
          <div className="relative">
            <input
              type="url"
              id="planLink"
              placeholder="https://drive.google.com/... or Dropbox link to blueprints"
              value={formData.planLink}
              onChange={(e) => setFormData({ ...formData, planLink: e.target.value })}
              className="w-full pl-11 pr-4 py-3 rounded-lg border border-concrete-300 bg-white text-concrete-900 text-sm focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-concrete-400"
            />
            <UploadCloud className="w-5 h-5 text-concrete-400 absolute left-3.5 top-3.5" />
          </div>
          <p className="mt-1.5 text-xs text-concrete-500">
            For direct PDF plan attachments larger than 25MB, you may also email files directly to{' '}
            <a href="mailto:estimates@fkconcreteestimating.com" className="text-brand-orange underline">
              estimates@fkconcreteestimating.com
            </a>
            .
          </p>
        </div>

        {/* Project Notes & Special Instructions */}
        <div>
          <label htmlFor="projectNotes" className="block text-xs font-bold uppercase tracking-wider text-concrete-700 mb-1.5 font-mono">
            Specific Estimating Notes, Exclusions or Add-Alternates
          </label>
          <textarea
            id="projectNotes"
            rows={3}
            placeholder="Specify any relevant details: e.g., 'Include vapor retarder 15 mil under slab', 'Price pump days separately', 'Specify #4 @ 12 EW vs WWR', 'Need foundation footings only'."
            value={formData.projectNotes}
            onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-concrete-300 bg-white text-concrete-900 text-sm focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-concrete-400"
          ></textarea>
        </div>

        {/* Consent and Privacy Agreement */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="w-4 h-4 mt-1 rounded border-concrete-300 text-brand-orange focus:ring-brand-orange"
          />
          <label htmlFor="consent" className="text-xs text-concrete-600 leading-normal">
            I agree that FK Concrete Estimating may review my submitted drawings and contact me regarding my takeoff and estimating inquiry. We maintain strict non-disclosure integrity for all contractor plan sets.
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-brand-orange hover:bg-brand-orange-hover transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Validating & Submitting Plans...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Plans for Quick Takeoff Quote</span>
              </>
            )}
          </button>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-concrete-500 font-mono">
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-emerald-600" /> Secure Plan Intake
          </span>
          <span className="flex items-center gap-1.5">
            <FileCheck className="w-4 h-4 text-emerald-600" /> Strict Non-Disclosure
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-emerald-600" /> Fast Turnaround
          </span>
        </div>
      </form>
    </div>
  )
}
