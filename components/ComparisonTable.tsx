import { Check, X, Minus } from 'lucide-react'

export default function ComparisonTable() {
  const comparisonItems = [
    {
      feature: 'Marked-Up Vector PDFs (Bluebeam Revu)',
      fk: 'Included on 100% of projects with color-coded polygon layers',
      blackBox: 'Rarely provided (lump-sum quantities only)',
      inHouse: 'Dependent on estimator time constraints',
    },
    {
      feature: 'Excel Spreadsheets With Live Formulas',
      fk: 'Included – fully unlocked with live formulas for instant price tuning',
      blackBox: 'Locked static PDF or flat numbers without formulas',
      inHouse: 'Internal company templates (varies by staff skill)',
    },
    {
      feature: 'Detailed CSI Division 03 Breakdown',
      fk: 'Granular separation: 03 10 00, 03 20 00, 03 30 00, 03 35 00',
      blackBox: 'Vague lump sums mixing steel, forms, and mud together',
      inHouse: 'Often lumped into rough unit allowances due to time',
    },
    {
      feature: 'Waste Calibration By Placement Method',
      fk: 'Itemized pump prime, line pump, buggy, and excavation tolerances',
      blackBox: 'Flat rule-of-thumb percentage without pump consideration',
      inHouse: 'Estimated from memory or historical project averages',
    },
    {
      feature: 'Rebar Schedules & Lap Splice Detailing',
      fk: 'ACI 318 tension class B splices, hook allowances, and bar chairs',
      blackBox: 'Lump-sum lbs/CY multiplier without schedule verification',
      inHouse: 'Calculated manually or estimated by poundage ratios',
    },
    {
      feature: 'Standard Turnaround Time',
      fk: '24 to 48 Hours for standard residential and commercial sets',
      blackBox: 'Unpredictable; frequent delays or unannounced pauses',
      inHouse: 'Constrained by current active jobsite emergencies',
    },
    {
      feature: 'Post-Bid Addendum & RFI Revisions',
      fk: 'Rapid revisions for addenda prior to bid closing',
      blackBox: 'Additional fees or unresponsive after initial delivery',
      inHouse: 'Late-night overtime for the in-house team',
    },
  ]

  return (
    <div className="bg-white rounded-2xl border border-concrete-200 shadow-md overflow-hidden">
      <div className="px-6 py-6 bg-concrete-50 border-b border-concrete-200">
        <h3 className="text-xl sm:text-2xl font-bold text-concrete-950 font-sans tracking-tight">
          How FK Concrete Estimating Compares
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-concrete-600">
          Why leading general contractors and concrete trade subs rely on our dedicated Division 03 takeoff service.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-concrete-800">
          <thead className="bg-concrete-100/80 text-xs font-mono uppercase tracking-wider text-concrete-700 border-b border-concrete-200">
            <tr>
              <th scope="col" className="px-6 py-4 w-1/4">Evaluation Criteria</th>
              <th scope="col" className="px-6 py-4 w-1/3 bg-amber-50/70 text-brand-orange border-x border-amber-200/60">
                FK Concrete Estimating
              </th>
              <th scope="col" className="px-6 py-4 w-1/5 text-concrete-600">
                Lump-Sum "Black Box" Services
              </th>
              <th scope="col" className="px-6 py-4 w-1/5 text-concrete-600">
                Overloaded In-House Estimators
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-concrete-100 font-sans text-xs sm:text-sm">
            {comparisonItems.map((item, idx) => (
              <tr key={idx} className="hover:bg-concrete-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-concrete-950">
                  {item.feature}
                </td>
                <td className="px-6 py-4 bg-amber-50/30 border-x border-amber-200/40 font-semibold text-concrete-900">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item.fk}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-concrete-500">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span>{item.blackBox}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-concrete-500">
                  <div className="flex items-start gap-2">
                    <Minus className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{item.inHouse}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

