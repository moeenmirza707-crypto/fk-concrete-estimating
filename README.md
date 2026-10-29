# FK Concrete Estimating — Production Next.js Website

A high-performance, conversion-engineered, and technical SEO-optimized website for **FK Concrete Estimating** (`https://fkconcreteestimating.com/`), built using **Next.js 14 (App Router)**, **TypeScript**, **React 18**, and **Tailwind CSS**.

---

## 1. Project Overview & SEO Architecture

- **Domain:** `https://fkconcreteestimating.com/`
- **Primary Target Market:** United States (General Contractors, Concrete Subcontractors, Commercial Builders, Homebuilders)
- **Primary Keyword:** Concrete Estimating Services
- **Secondary Target Focus:** Concrete Takeoff Services, Concrete Cost Estimating, Commercial Concrete Estimating, Structural Concrete Takeoffs, Foundation Estimating, Rebar Detailing & Takeoffs
- **Technical Standards:** CSI MasterFormat Division 03, ACI 318 Tension Lap Splice Compliance, RSMeans Localized Cost Indices

---

## 2. Page & Routing Architecture

Every page has been designed with distinct search intent, structured data (JSON-LD), canonical tags, and zero doorway duplication:

| Route | Primary Keyword | Search Intent | Deliverables Highlighted |
|---|---|---|---|
| `/` | Concrete Estimating Services | Brand / Commercial | Complete Division 03 overview, instant estimate request, verification transparency |
| `/concrete-estimating-services/` | Concrete Estimating Services | Flagship Commercial | 20 comprehensive technical sections, waste factors, deliverables, limitations |
| `/concrete-takeoff-services/` | Concrete Takeoff Services | Material Quantities (MTO) | Geometric quantities: Cubic Yards (CY), Formwork SFCA, Rebar tonnage |
| `/concrete-cost-estimating/` | Concrete Cost Estimating | Financial / Budgeting | Localized unit costs, labor man-hours, pump equipment, RSMeans data |
| `/commercial-concrete-estimating/` | Commercial Concrete Estimating | Commercial B2B | Warehouse floors, tilt-up panels, post-tensioned slabs, laser screed pours |
| `/residential-concrete-estimating/` | Residential Concrete Estimating | Residential B2B | Poured basements, continuous footings, step footings, garage slabs, flatwork |
| `/structural-concrete-estimating/` | Structural Concrete Estimating | Heavy Commercial / Civil | Columns, shear walls, transfer girders, elevated decks, shoring (ACI 347) |
| `/foundation-estimating-services/` | Foundation Estimating Services | Substructure | Continuous strip footings, isolated pads, grade beams, earth-formed waste (+8–12%) |
| `/rebar-estimating-services/` | Rebar Estimating Services | Steel Reinforcement | ASTM bar sizes (#3–#18), ACI 318 Class B lap splices, stirrups, WWR/WWM |
| `/concrete-estimating-process/` | Concrete Estimating Process | Quality Assurance | 5-stage workflow: Intake, Bluebeam takeoff, waste calibration, audit, delivery |
| `/about/` | About Company | Trust & Methodology | Estimating philosophy, verified facts, ethical standards, software ecosystem |
| `/contact/` | Request an Estimate | Transactional | Interactive plan submission portal, rate limiting, honeypot bot trap |
| `/blog/` | Educational Knowledge Base | Educational / Informational | Technical guides for contractors on blueprint reading and takeoffs |
| `/blog/[slug]/` | Specific Technical Guides | Deep Informational | High-value technical guides with KaTeX equations and ACI/ASTM citations |
| `/privacy-policy/` | Privacy Policy | Legal / Trust | Non-disclosure commitments for contractor drawings and bid privacy |
| `/terms/` | Terms of Service | Legal / Scope | Clear estimating boundaries and bidding responsibilities |
| `/robots.txt` | Robots Directives | Technical SEO | Allows all crawlers, protects `/api/`, links to XML sitemap |
| `/sitemap.xml` | XML Sitemap | Technical SEO | Canonical URL list with priority ratings and change frequencies |

---

## 3. Technology Stack & Key Features

- **Next.js 14 App Router:** Server Components by default for optimal Core Web Vitals and SEO crawlability; Client Components strictly for interactive forms and disclosure components.
- **Strict TypeScript:** Type safety across all data structures, blog posts, metadata builders, and API payloads.
- **Tailwind CSS:** Modern architectural palette (Slate, Concrete neutral tones, Charcoal, Safety Amber CTA accents).
- **Lucide React:** High-clarity, accessible SVG iconography.
- **Interactive Estimate Request Engine:**
  - Client-side and server-side validation.
  - IP-based sliding window rate limiting.
  - Honeypot anti-spam bot trap.
  - Secure drawing/plan URL intake (Google Drive, Dropbox, OneDrive, Procore, Box) or direct email dispatch.
  - Configurable webhook integration (`ESTIMATE_WEBHOOK_URL`) for automatic forwarding to CRM, Slack, Zapier, or email.

---

## 4. Local Development & Installation

### Prerequisites
- Node.js v18.17.0 or later (v20+ recommended)
- npm v9+

### Quick Start
```bash
# 1. Clone repository or navigate to root
cd "c:\Users\Home\Desktop\new site"

# 2. Install dependencies
npm install

# 3. Copy environment configuration
copy .env.example .env.local

# 4. Start local development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 5. Production Build & Quality Verification

```bash
# Run TypeScript compilation check
npx tsc --noEmit

# Run Next.js production build
npm run build

# Start production server
npm run start
```

### Verified Test Results
- **TypeScript (`tsc --noEmit`):** 0 Errors.
- **Static Page Generation:** 25 of 25 routes compiled and prerendered successfully.
- **Total Shared JavaScript:** 87.3 kB (Minimal runtime footprint, high Core Web Vitals score).
- **HTTP Route Validation:** All 18 indexable routes + `robots.txt` + `sitemap.xml` return `200 OK`.
- **JSON-LD Structured Data:** Validated across Organization, WebSite, Service, BreadcrumbList, and FAQPage.
- **Spam & Validation Tests:** Tested with invalid inputs (returned `400 Bad Request`), honeypot bot trap (silently trapped), and valid estimate submissions (returned `200 OK` with tracking reference).

---

## 6. Deployment Guide

### Option A: Vercel (Recommended for Next.js)
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com/) and click **New Project**.
3. Import the repository. Vercel automatically detects Next.js.
4. Under **Environment Variables**, add any desired keys from `.env.example`:
   - `ESTIMATE_WEBHOOK_URL` (optional: webhook endpoint for estimate requests)
   - `NEXT_PUBLIC_BUSINESS_PHONE` (once verified by owner)
5. Click **Deploy**. Vercel will build and assign the custom domain `https://fkconcreteestimating.com/`.

### Option B: Node.js / Docker / VPS
```bash
npm run build
NODE_ENV=production npm run start -p 8080
```

---

## 7. Business Verification & Launch Checklist

In accordance with Section 3 ("Business Fact Verification"), the following items are clearly designated in `lib/constants.ts` and require confirmation by the business owner prior to public launch:

- [ ] **Direct Telephone Number:** Update `NEXT_PUBLIC_BUSINESS_PHONE` and `NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY`.
- [ ] **Physical Office Address:** If a physical office location is to be published on the contact page and LocalBusiness schema, update `SITE_CONFIG.contact.addressNotice`.
- [ ] **Estimate Intake Webhook:** Set `ESTIMATE_WEBHOOK_URL` to route submissions directly to your sales CRM (e.g. HubSpot, Zapier, or company inbox).
- [ ] **Google Search Console Verification:** Place verification meta tag or DNS TXT record for `fkconcreteestimating.com`.
- [ ] **Google Analytics 4:** Add your Measurement ID in `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

