import { FileSpreadsheet, FileText, CheckCircle2, ShieldCheck, Download, Layers } from 'lucide-react'

export default function DeliverablesDisplay() {
  return (
    <div className="bg-concrete-900 text-white rounded-3xl border border-concrete-800 p-8 sm:p-12 shadow-2xl">
      <div className="max-w-3xl">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-concrete-800 px-3 py-1 rounded-full border border-concrete-700">
          Transparent Output Formats
        </span>
        <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-3">
          What You Receive With Every Concrete Takeoff
        </h3>
        <p className="mt-3 text-sm text-concrete-300 leading-relaxed">
          No "black box" estimates or unverified lump sums. Every FK Concrete Estimating project delivers transparent, verifiable files designed for immediate bid compilation, buyout, and field crew execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {/* Deliverable 1: Excel Workbook */}
        <div className="bg-concrete-800/80 rounded-2xl border border-concrete-700 p-6 flex flex-col justify-between">
          <div>
            <div className="p-3 bg-concrete-700/60 rounded-xl text-emerald-400 w-fit mb-4">
              <FileSpreadsheet className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-white">Itemized Excel Workbook (.xlsx)</h4>
            <p className="mt-2 text-xs text-concrete-300 leading-relaxed">
              Complete line-item breakdown categorized by CSI Division 03 codes. Includes live formulas, adjustable labor rates, ready-mix pricing columns, and material waste multipliers.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-concrete-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Executive Bid Summary Tab</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Cubic Yardage (CY) by Pour & Mix</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Formwork Contact Area (SFCA)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Rebar Weight (Tons & LBS) by Size</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-concrete-700/60 text-[11px] font-mono text-concrete-400">
            Fully editable & unlocked
          </div>
        </div>

        {/* Deliverable 2: Bluebeam Markups PDF */}
        <div className="bg-concrete-800/80 rounded-2xl border border-concrete-700 p-6 flex flex-col justify-between">
          <div>
            <div className="p-3 bg-concrete-700/60 rounded-xl text-amber-400 w-fit mb-4">
              <Layers className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-white">Marked-Up Drawings (.pdf)</h4>
            <p className="mt-2 text-xs text-concrete-300 leading-relaxed">
              High-resolution vector PDF drawing sheets overlaid with color-coded measurement polygons. Every line item in your spreadsheet references a visual polygon on the plans.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-concrete-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Bluebeam Revu vector polygons</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Color-coded legend on each sheet</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Markups List export matching Excel</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Audit trail for owner & GC reviews</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-concrete-700/60 text-[11px] font-mono text-concrete-400">
            Instant visual verification
          </div>
        </div>

        {/* Deliverable 3: RFI & Assumption Log */}
        <div className="bg-concrete-800/80 rounded-2xl border border-concrete-700 p-6 flex flex-col justify-between">
          <div>
            <div className="p-3 bg-concrete-700/60 rounded-xl text-blue-400 w-fit mb-4">
              <FileText className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-white">Discrepancy & Assumption Log</h4>
            <p className="mt-2 text-xs text-concrete-300 leading-relaxed">
              Engineering documentation detailing all plan contradictions, missing dimensions on architectural vs structural sheets, and recommended RFIs to submit prior to bid closing.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-concrete-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Explicit Inclusions & Exclusions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Structural schedule vs note discrepancies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Vapor barrier & joint assumptions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Pre-bid RFI questions ready to send</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-concrete-700/60 text-[11px] font-mono text-concrete-400">
            Protects your bid margins
          </div>
        </div>
      </div>
    </div>
  )
}

