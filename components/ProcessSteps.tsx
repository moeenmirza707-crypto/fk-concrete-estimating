import { FileUp, SearchCheck, Cpu, ClipboardCheck, Send } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Plan Intake & Specification Review',
    icon: FileUp,
    description:
      'We evaluate your architectural, structural, civil, and geotechnical sheets. Our team verifies drawing scales, notes addenda, checks concrete compressive strength specs (e.g. 3,000 to 5,000+ PSI), and identifies potential plan ambiguities.',
  },
  {
    step: '02',
    title: 'Digital On-Screen Takeoff (Bluebeam / PlanSwift)',
    icon: Cpu,
    description:
      'Using calibrated vector tools, we measure exact geometric perimeters, thicknesses, depths, and counts. Every footing, slab on grade, column, and foundation wall receives a designated color-coded markup layer.',
  },
  {
    step: '03',
    title: 'Rebar Detailing & Waste Calibration',
    icon: SearchCheck,
    description:
      'We calculate continuous steel, footing dowels, stirrups, column ties, and temperature steel based on ACI 318 tension class B lap splice charts. Concrete volume waste is factored realistically (+5% to +10%) based on placement conditions.',
  },
  {
    step: '04',
    title: 'Cost Modeling & Discrepancy Auditing',
    icon: ClipboardCheck,
    description:
      'Quantities are compiled into line-item Excel workbooks with localized ready-mix rates, labor hours, and equipment pump costs. Any discrepancies or missing details are compiled into a clear RFI Log for your bid submission.',
  },
  {
    step: '05',
    title: 'Deliverables Delivery & Post-Bid Support',
    icon: Send,
    description:
      'You receive the audited Excel workbook (`.xlsx`) alongside the color-coded PDF drawings (`.pdf`). If your project receives an addendum prior to bid day, we provide rapid revision turnaround so your bid remains accurate.',
  },
]

export default function ProcessSteps() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={item.step}
              className="bg-white rounded-2xl border border-concrete-200 p-7 shadow-sm hover:shadow-lg transition-all relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-concrete-100 rounded-xl text-brand-orange">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-3xl font-extrabold text-concrete-300">
                    {item.step}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-concrete-950 font-sans tracking-tight">
                  {item.title}
                </h4>
                <p className="mt-2.5 text-xs text-concrete-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-concrete-100 flex items-center gap-2 text-[11px] font-mono text-concrete-500">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                <span>Stage {idx + 1} Quality Checkpoint</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

