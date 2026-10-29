export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  summary: string
  datePublished: string
  dateModified: string
  readTime: string
  category: string
  author: string
  keyTakeaways: string[]
  content: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-read-concrete-plans-quantity-takeoffs',
    title: 'How to Read Concrete Plans for Accurate Quantity Takeoffs',
    metaTitle: 'How to Read Concrete Plans for Quantity Takeoffs | Blueprint Guide',
    metaDescription: 'Step-by-step contractor guide to reading structural blueprints, foundation schedules, section cuts, and CSI Division 03 concrete callouts for takeoffs.',
    summary: 'A technical guide for estimators on dissecting structural drawings, correlating foundation schedules with plan sheets, and extracting accurate concrete and formwork dimensions.',
    datePublished: '2026-10-15',
    dateModified: '2026-10-28',
    readTime: '7 min read',
    category: 'Blueprint Reading & Estimation',
    author: 'FK Concrete Estimating Technical Staff',
    keyTakeaways: [
      'Always verify whether dimensions reflect out-to-out of concrete or out-to-out of stud framing.',
      'Check structural general notes (S-001) for minimum compressive strength (f\'c) by structural element.',
      'Cross-reference column and footing schedules with architectural gridlines before calculating volumes.',
      'Identify step footings, dropped slab edges, and thickened slab sections that do not show in plan view.',
    ],
    content: `
### The Crucial Role of Drawing Correlation
When performing a concrete quantity takeoff, relying solely on the plan view (e.g., sheet S-101) is the fastest route to a severe underbid. A professional takeoff requires continuous cross-referencing between architectural floor plans, structural foundation plans, general notes, and structural section cuts.

#### 1. Start with the Structural General Notes (Sheet S-001)
Before measuring a single linear foot of footing or square foot of slab, thoroughly inspect the structural general notes. This sheet governs:
- **Specified Compressive Strength ($f'c$):** Often varied across elements (e.g., 3,000 PSI for unformed footings, 4,000 PSI for slabs on grade, 5,000+ PSI for columns and suspended podium decks).
- **Cementitious Admixtures & Fly Ash Limits:** Crucial for pricing ready-mix in regional freeze-thaw zones or sulfate-bearing soils.
- **Concrete Exposure Classes:** Governing air entrainment and water-cementitious materials ratios ($w/cm$) per ACI 318.
- **Minimum Concrete Clear Cover Requirements:** Footings cast against earth require 3 inches; formed surfaces exposed to weather require 2 inches; interior slabs require 3/4 inch.

#### 2. Correlating Foundation Plans with Footing Schedules
Foundation plan sheets illustrate the spatial layout, but the depth and reinforcing details reside in the schedules. 
- Look for **Spread Footing Schedules (SF-1, SF-2, etc.)**: Check length, width, thickness, and bottom rebar in both directions.
- Look for **Continuous Strip Footing Schedules (CF-1, CF-2)**: Note width and minimum thickness, typically 12" or 16".
- **Step Footings:** When a building site has grade elevations sloping, look for step footing details (e.g., typical 2:1 slope ratio with minimum 12-inch overlap). Missing step footings causes a 10% to 15% error in continuous footing concrete and formwork.

#### 3. Analyzing Architectural vs. Structural Slab Callouts
Architectural drawings frequently specify the finished floor elevation (FFE) and interior depression areas (such as tile recesses, showers, or walk-in freezers). Structural drawings specify the structural slab thickness (e.g., 5" normal weight concrete over 15-mil vapor retarder).
- Verify if the dimension callout is from the edge of concrete (EOC) or exterior finish (brick ledge or siding).
- Quantify thickened slabs under interior bearing walls and point-load posts.

#### 4. Checking Formwork Contact Area (SFCA)
Contractors bid formwork by square feet of contact area (SFCA), not linear feet. When reading section cuts:
- Calculate height from bottom of footing excavation to top of footing pour.
- For foundation walls, calculate two full vertical faces plus keyway bulkheads.
    `,
  },
  {
    slug: 'concrete-quantity-takeoff-step-by-step-guide',
    title: 'Concrete Quantity Takeoff: A Step-by-Step Practical Guide',
    metaTitle: 'Concrete Quantity Takeoff Guide: Step-by-Step CY Calculations',
    metaDescription: 'Learn how to calculate concrete cubic yardage, formwork SFCA, and waste factors for footings, slabs, and walls with real mathematical formulas.',
    summary: 'A field-tested methodology for converting two-dimensional plan sets into itemized cubic yards (CY), square feet of contact area (SFCA), and waste allowances.',
    datePublished: '2026-10-18',
    dateModified: '2026-10-28',
    readTime: '9 min read',
    category: 'Takeoff Methodology',
    author: 'FK Concrete Estimating Technical Staff',
    keyTakeaways: [
      'The foundational formula: Length (ft) × Width (ft) × Thickness (ft) ÷ 27 = Cubic Yards (CY).',
      'Never apply a flat waste factor across all concrete elements—differentiate between pump lines, trench footings, and slabs.',
      'Calculate formwork in square feet of contact area (SFCA) for each distinct face.',
      'Maintain separate line items for each mix design (3000 PSI, 4000 PSI, lightweight vs. normal weight).',
    ],
    content: `
### Step 1: Digital Drawing Calibration
Before performing on-screen takeoffs in software like Bluebeam Revu or PlanSwift, you must establish and verify scale calibration.
1. Calibrate using the longest stated architectural dimension string rather than a short door opening or column grid.
2. Verify scale along both the X and Y axes independently to ensure the scanned PDF was not distorted during sheet conversion.
3. Lock the page scale to prevent accidental modifications during measurement.

### Step 2: Continuous & Spread Footing Quantification
Footings represent the foundation of the structural load path.
- **Formula for Rectangular Footings:**
  $$\\text{Volume (CY)} = \\frac{\\text{Length (ft)} \\times \\text{Width (ft)} \\times \\text{Thickness (ft)}}{27}$$
- **Excavation Tolerance Waste:** Footings cast directly against earth (unformed trenches) naturally expand beyond nominal dimensions due to backhoe tooth over-digging. Standard practice applies an **8% to 12% earth-cast waste factor** compared to **4% to 5%** for formed footings.

### Step 3: Slab on Grade (SOG) Takeoff
Measuring slabs-on-grade requires accounting for perimeters, joints, and vapor barriers:
1. **Area Polygon:** Measure the gross slab boundary to obtain square footage (SF).
2. **Nominal Volume:** Multiply SF by slab thickness in decimal feet (e.g., 4 inches = 0.333 ft; 5 inches = 0.417 ft; 6 inches = 0.500 ft) and divide by 27.
3. **Thickened Edges / Haunches:** Calculate perimeter linear feet multiplied by the haunch cross-sectional triangle/trapezoid area.
4. **Vapor Barrier:** Measure SF plus a 10% allowance for 6-inch lap splices and edge turn-ups.

### Step 4: Foundation Walls & Columns
- **Walls:** Measure centerline length $\\times$ wall thickness $\\times$ wall height $\\div$ 27.
- **Formwork (SFCA):** Both faces must be accounted for:
  $$\\text{SFCA} = 2 \\times \\text{Length (ft)} \\times \\text{Height (ft)} + \\text{End Bulkheads}$$
- **Window & Door Deductions:** In accordance with standard construction estimating conventions, small openings under 10 square feet are generally not deducted to compensate for the additional formwork cutting and waste.

### Step 5: Allocating Realistic Waste Factors
A common pitfall is applying a uniform 5% waste factor. On real job sites, waste varies significantly:
- Tailgate chute pours directly into formed slab: **4% to 6%**
- Long concrete boom pump placements (including hopper residual and washout): **6% to 8%**
- Trench footings in irregular clay or rocky soils: **8% to 12%**
- Precast or tilt-up panel pours on casting beds: **3% to 4%**
    `,
  },
  {
    slug: 'common-concrete-estimating-errors-avoid',
    title: 'Top 7 Concrete Estimating Errors That Cost Contractors Money',
    metaTitle: '7 Common Concrete Estimating Errors & How to Avoid Them | FK Guide',
    metaDescription: 'Avoid fatal bid mistakes in concrete estimating: missed pump prime waste, overlooked rebar lap splices, inaccurate formwork SFCA, and soil overdig.',
    summary: 'A critical review of the most prevalent bidding mistakes concrete subcontractors make and the verification protocols required to protect profit margins.',
    datePublished: '2026-10-20',
    dateModified: '2026-10-28',
    readTime: '8 min read',
    category: 'Risk Management',
    author: 'FK Concrete Estimating Technical Staff',
    keyTakeaways: [
      'Overlooked concrete pump line residue and priming grout cost contractors 0.5 to 1.5 CY per setup.',
      'Estimating rebar by rule-of-thumb ratios instead of modeling ACI 318 tension lap splices leads to a 10-20% steel shortfall.',
      'Forgetting formwork bulkheads, chamfer strips, and tie holes skews labor man-hour projections.',
      'Failing to itemize cold-weather or hot-weather concrete admixtures creates unbudgeted ready-mix surcharges.',
    ],
    content: `
### Error #1: Overlooking Concrete Pumping Setup & Priming Waste
When concrete is placed via pump truck (especially 38m to 52m boom pumps or long slickline runs), ready-mix is required to prime the lines with slurry. At the end of the pour, 0.5 to 1.5 cubic yards remain trapped inside the pump hopper and pipeline. If an estimator bids exact geometric volume without pump loss, the contractor either comes up short on the last truck or absorbs unbudgeted material costs.

### Error #2: Rule-of-Thumb Rebar Guesswork
Many contractors estimate reinforcing steel using broad heuristics like "100 lbs of rebar per cubic yard of concrete." While this may provide a rough conceptual order of magnitude, it is dangerous on competitive bids:
- Heavily reinforced grade beams and shear wall boundary elements can exceed **220 lbs/CY**.
- Light residential slabs with welded wire reinforcement might require only **45 lbs/CY**.
- **Lap Splice Omission:** Continuous bars cannot be purchased in infinite lengths; standard stock lengths are 20, 30, or 60 feet. Under ACI 318, tension lap splices (typically 40 to 60 bar diameters) add **8% to 15%** to the total calculated linear footage.

### Error #3: Neglecting Vertical Formwork Contact Area (SFCA)
Bidding formwork purely on a linear foot basis ignores variations in foundation wall height, pilasters, and brick ledges. A 9-foot wall requires dramatically different form bracing, ties, and shoring than a 4-foot frost wall. Furthermore, stripping, cleaning, and cycling forms represents over 50% of concrete labor costs.

### Error #4: Missing Cold and Hot Weather Admixtures
Concrete placed below 40°F requires heated water, accelerating admixtures (calcium chloride or non-chloride accelerators), and insulated curing blankets (ACI 306R). Concrete placed in extreme heat requires retarders, chilled mix water, or ice substitution (ACI 305R). These ready-mix plant surcharges can add $10 to $25 per cubic yard to material expenses.

### Error #5: Misinterpreting Soil Excavation Tolerances
In unformed spread and continuous footings, earth trenches never follow razor-sharp geometrical lines. Heavy equipment bucket teeth, soil sloughing, and loose bottom cleanup invariably expand the excavation trench volume by 10% or more. Failing to calibrate earth-formed waste leads to emergency ready-mix short-load fees.

### Error #6: Disregarding Concrete Sawcutting & Joint Accessories
On large industrial slabs-on-grade, contraction joints must be sawcut within a tight 4-to-12-hour window using early-entry ("green cut") or conventional saws to a depth of $d/4$. Estimators frequently price the concrete placement but forget the saw blades, labor hours for overnight cutting, joint backer rod, and polyurea joint filler.

### Error #7: Failing to Audit Structural vs. Architectural Addenda
During the bidding window, design teams issue addenda modifying wall locations, slab depressions, or rebar bar sizes. Bidding off outdated drawing revisions without a systematic addenda audit trail is the leading cause of contractor bid day disputes.
    `,
  },
  {
    slug: 'rebar-estimating-reinforcing-steel-takeoff',
    title: 'Rebar Estimating: How Reinforcing Steel Is Measured from Blueprints',
    metaTitle: 'Rebar Estimating Guide: Reinforcing Steel Takeoffs & ACI 318 Rules',
    metaDescription: 'Comprehensive guide to reinforcing steel takeoffs: ASTM bar sizes (#3-#18), weight per foot formulas, ACI 318 tension lap splices, and stirrups.',
    summary: 'A detailed manual on measuring reinforcing steel, calculating bar weights, accounting for hooks and lap splices, and structuring Division 03 20 00 bids.',
    datePublished: '2026-10-22',
    dateModified: '2026-10-28',
    readTime: '8 min read',
    category: 'Rebar & Steel Takeoffs',
    author: 'FK Concrete Estimating Technical Staff',
    keyTakeaways: [
      'Rebar is quantified in US short tons (2,000 lbs) or hundredweight (cwt) derived from ASTM unit weight tables.',
      'ASTM bar numbers represent nominal diameter in eighths of an inch (#4 = 4/8" or 1/2"; #8 = 8/8" or 1").',
      'ACI 318 Class B tension lap splices typically require 40 to 60 bar diameters of overlap.',
      'Always include bar supports: slab bolsters, high chairs, tie wire, and corner dowels.',
    ],
    content: `
### ASTM Bar Sizing & Weight Standards
Reinforcing steel in the United States follows ASTM A615 (billet steel) or ASTM A706 (low-alloy weldable steel), predominantly in Grade 60 (60,000 PSI yield strength) or Grade 80.
The bar number directly corresponds to the nominal diameter in eighths of an inch:

| Bar Size | Nominal Diameter (in) | Unit Weight (lbs / linear ft) | Area ($in^2$) |
|---|---|---|---|
| #3 | 0.375" (3/8") | 0.376 | 0.11 |
| #4 | 0.500" (1/2") | 0.668 | 0.20 |
| #5 | 0.625" (5/8") | 1.043 | 0.31 |
| #6 | 0.750" (3/4") | 1.502 | 0.44 |
| #7 | 0.875" (7/8") | 2.044 | 0.60 |
| #8 | 1.000" (1") | 2.670 | 0.79 |
| #9 | 1.128" | 3.400 | 1.00 |
| #10 | 1.270" | 4.303 | 1.27 |
| #11 | 1.410" | 5.313 | 1.56 |

### Calculating Continuous Footing Rebar with Lap Splices
When calculating continuous longitudinal rebar in a strip footing or grade beam:
1. Measure the total centerline length of the footing system.
2. Account for corner and intersection overlaps (standard 2-foot to 3-foot corner bars).
3. **Calculate Lap Splice Quantity:** Standard delivery lengths for stock rebar are typically 20 feet or 30 feet. For every stock length run, a lap splice is required.
   $$\\text{Number of Laps} = \\text{Floor}\\left(\\frac{\\text{Total Length}}{\\text{Stock Bar Length}}\\right)$$
   For a #5 bar with an ACI 318 Class B lap requirement of 48 bar diameters:
   $$\\text{Lap Length} = 48 \\times 0.625\\text{ in} = 30\\text{ inches} = 2.5\\text{ feet}$$
   Multiplying 2.5 ft by the number of laps reveals the additional linear footage required.

### Column Ties and Beam Stirrups
Stirrups and ties provide shear strength and confinement to longitudinal bars.
1. Determine the stirrup pitch from the structural schedule (e.g., "#3 ties @ 4\\" oc for first 3 ft, then 8\\" oc remainder").
2. Calculate the perimeter length of the closed tie, factoring in standard **135° seismic hooks** (typically 6 bar diameters or 3 inches minimum).
3. Multiply the individual tie perimeter by the total count of ties across the column or beam span.

### Welded Wire Reinforcement (WWR / WWM)
For slabs on grade and topping slabs, drawings frequently call for welded wire fabric (e.g., $6\\times6 - W1.4/W1.4$ or $6\\times6 - W2.9/W2.9$).
- Quantify gross slab square footage.
- Add a **10% to 15% overlap allowance** for side and end lap splices (minimum one full cross-wire spacing + 2 inches per ACI 318).
- Include continuous high chairs or slab bolsters spaced every 3 to 4 feet on center to ensure wire is maintained in the upper third of the slab.
    `,
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

