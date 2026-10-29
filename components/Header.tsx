'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Calculator, FileSpreadsheet, Phone, ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-concrete-200">
      {/* Top Notification / Trust Bar */}
      <div className="bg-concrete-900 text-concrete-200 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>CSI Division 03 Estimating Specialists • PlanSwift & Bluebeam Revu Takeoffs</span>
          </div>
          <div className="flex items-center gap-4 text-concrete-300 text-xs">
            <span className="hidden md:inline">Turnaround: 24–48 Hours for Standard Scopes</span>
            <Link
              href="/contact/"
              className="text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1"
            >
              Submit Plans for Quote <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-concrete-900 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm border border-concrete-700 group-hover:bg-brand-orange transition-colors">
              <span className="text-amber-400 group-hover:text-white transition-colors">FK</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-concrete-950 font-sans leading-tight">
                FK Concrete
              </span>
              <span className="text-[11px] font-semibold text-concrete-600 tracking-wider uppercase font-mono">
                Estimating Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/concrete-estimating-services/"
              className="px-3 py-2 text-sm font-semibold text-concrete-800 hover:text-brand-orange transition-colors rounded-md hover:bg-concrete-50"
            >
              Services
            </Link>
            <Link
              href="/concrete-takeoff-services/"
              className="px-3 py-2 text-sm font-semibold text-concrete-800 hover:text-brand-orange transition-colors rounded-md hover:bg-concrete-50"
            >
              Takeoffs
            </Link>
            <Link
              href="/concrete-cost-estimating/"
              className="px-3 py-2 text-sm font-semibold text-concrete-800 hover:text-brand-orange transition-colors rounded-md hover:bg-concrete-50"
            >
              Cost Estimating
            </Link>

            {/* Specialized Scopes Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="px-3 py-2 text-sm font-semibold text-concrete-800 hover:text-brand-orange transition-colors rounded-md hover:bg-concrete-50 flex items-center gap-1"
                aria-expanded={dropdownOpen}
              >
                Specialized Scopes
                <ChevronDown className="w-4 h-4 text-concrete-500" />
              </button>

              {dropdownOpen && (
                <div
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-concrete-200 py-2 z-50 transition-all"
                >
                  <Link
                    href="/commercial-concrete-estimating/"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-concrete-800 hover:bg-concrete-50 hover:text-brand-orange"
                  >
                    <div className="font-semibold text-concrete-900">Commercial Concrete</div>
                    <div className="text-xs text-concrete-500">Warehouses, slabs, retail, tilt-up</div>
                  </Link>
                  <Link
                    href="/residential-concrete-estimating/"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-concrete-800 hover:bg-concrete-50 hover:text-brand-orange"
                  >
                    <div className="font-semibold text-concrete-900">Residential Concrete</div>
                    <div className="text-xs text-concrete-500">Basements, foundations, driveways</div>
                  </Link>
                  <Link
                    href="/structural-concrete-estimating/"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-concrete-800 hover:bg-concrete-50 hover:text-brand-orange"
                  >
                    <div className="font-semibold text-concrete-900">Structural Concrete</div>
                    <div className="text-xs text-concrete-500">Columns, shear walls, elevated slabs</div>
                  </Link>
                  <Link
                    href="/foundation-estimating-services/"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-concrete-800 hover:bg-concrete-50 hover:text-brand-orange"
                  >
                    <div className="font-semibold text-concrete-900">Foundations & Footings</div>
                    <div className="text-xs text-concrete-500">Spread footings, grade beams, mats</div>
                  </Link>
                  <Link
                    href="/rebar-estimating-services/"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-concrete-800 hover:bg-concrete-50 hover:text-brand-orange"
                  >
                    <div className="font-semibold text-concrete-900">Rebar & Reinforcement</div>
                    <div className="text-xs text-concrete-500">ASTM bar sizes, lap splices, WWR</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/concrete-estimating-process/"
              className="px-3 py-2 text-sm font-semibold text-concrete-800 hover:text-brand-orange transition-colors rounded-md hover:bg-concrete-50"
            >
              Our Process
            </Link>
            <Link
              href="/about/"
              className="px-3 py-2 text-sm font-semibold text-concrete-800 hover:text-brand-orange transition-colors rounded-md hover:bg-concrete-50"
            >
              About
            </Link>
            <Link
              href="/blog/"
              className="px-3 py-2 text-sm font-semibold text-concrete-800 hover:text-brand-orange transition-colors rounded-md hover:bg-concrete-50"
            >
              Blog
            </Link>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Request an Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-concrete-700 hover:text-concrete-900 focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-concrete-200 bg-white px-4 pt-3 pb-6 space-y-2">
          <Link
            href="/concrete-estimating-services/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-concrete-800 hover:bg-concrete-50 rounded-lg"
          >
            Concrete Estimating Services
          </Link>
          <Link
            href="/concrete-takeoff-services/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-concrete-800 hover:bg-concrete-50 rounded-lg"
          >
            Concrete Takeoff Services
          </Link>
          <Link
            href="/concrete-cost-estimating/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-concrete-800 hover:bg-concrete-50 rounded-lg"
          >
            Concrete Cost Estimating
          </Link>

          <div className="py-2 border-y border-concrete-100">
            <div className="px-3 text-xs font-bold text-concrete-400 uppercase tracking-wider mb-1">
              Specialized Scopes
            </div>
            <Link
              href="/commercial-concrete-estimating/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-sm font-medium text-concrete-700 hover:text-brand-orange"
            >
              Commercial Concrete Estimating
            </Link>
            <Link
              href="/residential-concrete-estimating/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-sm font-medium text-concrete-700 hover:text-brand-orange"
            >
              Residential Concrete Estimating
            </Link>
            <Link
              href="/structural-concrete-estimating/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-sm font-medium text-concrete-700 hover:text-brand-orange"
            >
              Structural Concrete Estimating
            </Link>
            <Link
              href="/foundation-estimating-services/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-sm font-medium text-concrete-700 hover:text-brand-orange"
            >
              Foundation & Footing Estimating
            </Link>
            <Link
              href="/rebar-estimating-services/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-sm font-medium text-concrete-700 hover:text-brand-orange"
            >
              Rebar & Reinforcement Estimating
            </Link>
          </div>

          <Link
            href="/concrete-estimating-process/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-concrete-800 hover:bg-concrete-50 rounded-lg"
          >
            Our Estimating Process
          </Link>
          <Link
            href="/about/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-concrete-800 hover:bg-concrete-50 rounded-lg"
          >
            About Company
          </Link>
          <Link
            href="/blog/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-concrete-800 hover:bg-concrete-50 rounded-lg"
          >
            Educational Articles
          </Link>
          <Link
            href="/contact/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-concrete-800 hover:bg-concrete-50 rounded-lg"
          >
            Contact & Support
          </Link>

          <div className="pt-3">
            <Link
              href="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-5 py-3 text-base font-bold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-lg shadow-sm"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Request an Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

