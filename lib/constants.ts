/**
 * Centralized business constants and verified metadata for FK Concrete Estimating.
 * 
 * NOTE ON BUSINESS FACT VERIFICATION (Section 3 of Specification):
 * Verified facts are strictly separated from items requiring owner confirmation.
 * No fabricated statistics, testimonials, certifications, or guarantee claims are made.
 */

export const SITE_CONFIG = {
  brandName: 'FK Concrete Estimating',
  legalName: 'FK Concrete Estimating Services',
  domain: 'https://fkconcreteestimating.com',
  tagline: 'Professional CSI Division 03 Concrete Estimating & Material Takeoff Services',
  description:
    'Dedicated concrete quantity takeoff and cost estimating services for general contractors, concrete subcontractors, and commercial builders across the United States. Measured in Bluebeam & PlanSwift with detailed line-item Excel deliverables.',
  targetMarket: 'United States',
  
  // Contact details - designated placeholders requiring business owner confirmation
  contact: {
    // Owner confirmation required before publishing live telephone number
    phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || '(Owner Confirmation Required: Set NEXT_PUBLIC_BUSINESS_PHONE)',
    phoneDisplay: process.env.NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY || 'Inquire via Direct Quote Form',
    // Owner confirmation required for direct customer support email
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'estimates@fkconcreteestimating.com',
    supportEmail: 'contact@fkconcreteestimating.com',
    // Office address placeholder awaiting business owner confirmation
    addressNotice: 'Physical office address pending business owner confirmation. Operating nationwide across all 50 US States via digital plan submission.',
    operatingHours: 'Monday – Friday: 7:00 AM – 6:00 PM (EST / CST / PST coverage)',
  },

  // Turnaround and delivery transparency - realistic ranges, NO false guarantees
  turnaround: {
    standard: '24 to 48 hours for standard residential and commercial scopes',
    complex: '3 to 5 business days for multi-story structural or heavy civil packages',
    expedited: 'Rush review available based on plan complexity and current queue',
  },

  // Deliverables standard formats
  deliverables: [
    {
      format: 'Microsoft Excel (.xlsx)',
      title: 'Itemized Quantity & Cost Spreadsheet',
      description: 'Fully formatted workbook with separate tabs for CSI 03 10 00 (Formwork SFCA), CSI 03 20 00 (Rebar LBS/Tons), CSI 03 30 00 (Cast-in-Place CY), and material/labor breakdown with unlocked formulas.',
    },
    {
      format: 'Bluebeam Revu / PDF (.pdf)',
      title: 'Color-Coded Marked-Up Drawings',
      description: 'Visual takeoff overlays showing exact measurement polygons, cut/fill boundaries, slab perimeters, footing dimensions, and markups list export for instant auditability.',
    },
    {
      format: 'Discrepancy & Assumption Log',
      title: 'RFI & Clarification Summary',
      description: 'Transparent documentation of plan discrepancies, structural notes, unspecified depths, assumed lap splices, and recommended contractor RFIs.',
    },
    {
      format: 'PlanSwift Package (Optional)',
      title: 'Native Takeoff Assembly File',
      description: 'Native PlanSwift job file export for contractors utilizing PlanSwift for internal bidding and database pricing integration.',
    },
  ],

  // Primary Navigation
  navLinks: [
    { name: 'Services', href: '/concrete-estimating-services/' },
    { name: 'Quantity Takeoffs', href: '/concrete-takeoff-services/' },
    { name: 'Cost Estimating', href: '/concrete-cost-estimating/' },
    {
      name: 'Specialized Scopes',
      children: [
        { name: 'Residential Concrete', href: '/residential-concrete-estimating/' },
        { name: 'Commercial Concrete', href: '/commercial-concrete-estimating/' },
        { name: 'Structural Concrete', href: '/structural-concrete-estimating/' },
        { name: 'Foundations & Footings', href: '/foundation-estimating-services/' },
        { name: 'Rebar & Reinforcement', href: '/rebar-estimating-services/' },
      ],
    },
    { name: 'Our Process', href: '/concrete-estimating-process/' },
    { name: 'About', href: '/about/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Contact', href: '/contact/' },
  ],

  footerLinks: {
    services: [
      { name: 'Concrete Estimating Services', href: '/concrete-estimating-services/' },
      { name: 'Concrete Takeoff Services', href: '/concrete-takeoff-services/' },
      { name: 'Concrete Cost Estimating', href: '/concrete-cost-estimating/' },
      { name: 'Commercial Concrete Estimating', href: '/commercial-concrete-estimating/' },
      { name: 'Residential Concrete Estimating', href: '/residential-concrete-estimating/' },
      { name: 'Structural Concrete Estimating', href: '/structural-concrete-estimating/' },
      { name: 'Foundation Estimating Services', href: '/foundation-estimating-services/' },
      { name: 'Rebar Estimating Services', href: '/rebar-estimating-services/' },
    ],
    company: [
      { name: 'About FK Concrete', href: '/about/' },
      { name: 'Our Estimating Process', href: '/concrete-estimating-process/' },
      { name: 'Educational Resources & Blog', href: '/blog/' },
      { name: 'Request an Estimate', href: '/contact/' },
      { name: 'Privacy Policy', href: '/privacy-policy/' },
      { name: 'Terms of Service', href: '/terms/' },
    ],
    standards: [
      { name: 'CSI Division 03 10 00 – Concrete Formwork', href: '/concrete-takeoff-services/' },
      { name: 'CSI Division 03 20 00 – Concrete Reinforcing', href: '/rebar-estimating-services/' },
      { name: 'CSI Division 03 30 00 – Cast-in-Place Concrete', href: '/concrete-estimating-services/' },
      { name: 'ACI 318 Lap Splice Compliance', href: '/rebar-estimating-services/' },
      { name: 'RSMeans & Localized Unit Costing', href: '/concrete-cost-estimating/' },
    ],
  },
}

