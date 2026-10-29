import { Check, Info } from 'lucide-react'

interface ScopeRow {
  csiCode: string
  scopeName: string
  unitOfMeasure: string
  wasteAllowance: string
  includedDeliverables: string
}

const division3Scopes: ScopeRow[] = [
  {
    csiCode: '03 10 00',
    scopeName: 'Concrete Forming & Shoring',
    unitOfMeasure: 'SFCA (Square Feet Contact Area)',
    wasteAllowance: '3% – 5% lumber/plywood loss',
    includedDeliverables: 'Footing edge forms, wall forms, slab-edge bulkheads, column forms, drop panels, shoring & reshoring heights, chamfer strips, and form ties.',
  },
  {
    csiCode: '03 20 00',
    scopeName: 'Concrete Reinforcement (Rebar & Mesh)',
    unitOfMeasure: 'LBS / US Short Tons / Linear Feet',
    wasteAllowance: '5% – 8% lap splices & offcuts',
    includedDeliverables: 'ASTM A615 / A706 bars (#3 through #18), tension lap splices per ACI 318, standard 90° & 135° hooks, continuous footing dowels, stirrups, welded wire reinforcement (WWR), and continuous bar chairs.',
  },
  {
    csiCode: '03 30 00',
    scopeName: 'Cast-in-Place Concrete (CIP)',
    unitOfMeasure: 'CY (Cubic Yards)',
    wasteAllowance: '5% – 10% (by element & pump)',
    includedDeliverables: 'Continuous footings, isolated pads, grade beams, foundation stem walls, slabs-on-grade (SOG), elevated decks, ramps, columns, and equipment pads by exact PSI mix design.',
  },
  {
    csiCode: '03 35 00',
    scopeName: 'Concrete Finishing & Curing',
    unitOfMeasure: 'SF (Square Feet)',
    wasteAllowance: '2% – 4% spray/membrane allowance',
    includedDeliverables: 'Float, hard trowel, non-slip broom finish, stamped architectural textures, liquid chemical hardeners, curing compounds (ASTM C309), and dissipation sealers.',
  },
  {
    csiCode: '03 15 00',
    scopeName: 'Concrete Accessories & Joints',
    unitOfMeasure: 'LF (Linear Feet) & Square Feet',
    wasteAllowance: '5% continuous lap loss',
    includedDeliverables: 'Under-slab vapor barriers (10 mil, 15 mil Stego wrap with taped laps), expansion joints, sawcut contraction control joints (1/4 slab depth), waterstops, keyways, and smooth dowel baskets.',
  },
]

export default function TechnicalTakeoffTable() {
  return (
    <div className="bg-white rounded-2xl border border-concrete-200 shadow-md overflow-hidden">
      <div className="px-6 py-5 bg-concrete-50 border-b border-concrete-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-concrete-950 font-sans">
            CSI MasterFormat Division 03 Quantification Standards
          </h3>
          <p className="text-xs text-concrete-600 mt-0.5">
            Industry standard takeoff parameters utilized across all FK Concrete Estimating reports.
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-concrete-600 font-mono bg-white px-3 py-1.5 rounded-lg border border-concrete-200">
          <Info className="w-3.5 h-3.5 text-brand-orange" />
          <span>ACI 318 & RSMeans Aligned</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-concrete-800">
          <thead className="bg-concrete-100/70 text-xs font-mono uppercase tracking-wider text-concrete-700 border-b border-concrete-200">
            <tr>
              <th scope="col" className="px-5 py-3.5">CSI Code</th>
              <th scope="col" className="px-5 py-3.5">Scope Description</th>
              <th scope="col" className="px-5 py-3.5">Unit of Measurement</th>
              <th scope="col" className="px-5 py-3.5">Calibrated Waste</th>
              <th scope="col" className="px-5 py-3.5">Included Items & Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-concrete-100 font-sans">
            {division3Scopes.map((row) => (
              <tr key={row.csiCode} className="hover:bg-concrete-50/80 transition-colors">
                <td className="px-5 py-4 font-mono font-bold text-concrete-900 text-xs whitespace-nowrap">
                  {row.csiCode}
                </td>
                <td className="px-5 py-4 font-semibold text-concrete-950 whitespace-nowrap">
                  {row.scopeName}
                </td>
                <td className="px-5 py-4 font-mono text-xs text-concrete-700 whitespace-nowrap">
                  {row.unitOfMeasure}
                </td>
                <td className="px-5 py-4 text-xs font-medium text-amber-800 whitespace-nowrap">
                  {row.wasteAllowance}
                </td>
                <td className="px-5 py-4 text-xs text-concrete-600 leading-relaxed min-w-[280px]">
                  {row.includedDeliverables}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 bg-concrete-50/60 border-t border-concrete-200 text-xs text-concrete-500 font-mono flex items-center gap-2">
        <span>* Waste percentages are calibrated based on placement equipment (line pump vs boom vs buggy) and soil trench tolerance.</span>
      </div>
    </div>
  )
}

