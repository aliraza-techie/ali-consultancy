import { FileSpreadsheet, BarChart3, Package, Palette, FileText, ClipboardList, Headphones } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const deliverables = [
  {
    icon: FileSpreadsheet,
    title: 'Detailed Estimate Spreadsheet',
    desc: 'Organized cost spreadsheet covering all line items, quantities, unit costs, and totals by trade and CSI division.',
    color: '#1976D2',
    preview: 'Spreadsheet',
  },
  {
    icon: BarChart3,
    title: 'Quantity Takeoff Report',
    desc: 'Comprehensive takeoff report listing all measured quantities, dimensions, and material counts from your drawings.',
    color: '#E8912D',
    preview: 'Takeoff',
  },
  {
    icon: Package,
    title: 'Material Quantity Breakdown',
    desc: 'Trade-by-trade material quantities organized for procurement, purchasing, and subcontractor pricing.',
    color: '#2E8B57',
    preview: 'Materials',
  },
  {
    icon: FileText,
    title: 'Material & Labor Cost Breakdown',
    desc: 'Separate material and labor cost line items with current market rates applied for transparent cost analysis.',
    color: '#18A8C7',
    preview: 'Costs',
  },
  {
    icon: Palette,
    title: 'Color-Coded Markup Drawings',
    desc: 'Annotated PDF drawings with color-coded highlights identifying all measured areas, counts, and takeoff zones.',
    color: '#E85D5D',
    preview: 'Markups',
  },
  {
    icon: ClipboardList,
    title: 'BOQ / Cost Summary',
    desc: 'Bill of quantities and project cost summary formatted for bid submission, client presentation, or project budgeting.',
    color: '#7357D8',
    preview: 'BOQ',
  },
  {
    icon: Headphones,
    title: 'Bid Preparation Support',
    desc: 'Additional clarification, scope questions, and estimate adjustments to support your final bid submission.',
    color: '#E8912D',
    preview: 'Support',
  },
];

function MockupCard({ label, color, children }: { label: string; color: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-4 py-2 flex items-center gap-1.5" style={{ background: color }}>
        <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
        <span className="ml-2 text-white text-xs font-semibold opacity-80">{label}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default function Deliverables() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="section-padding bg-white">
      <div ref={ref} className="container-width">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="eyebrow mb-3">DELIVERABLES</p>
          <h2 className="section-heading mb-4">What You Receive</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Every estimate includes a complete set of professional documents your team can use immediately.
          </p>
        </div>

        {/* Mockup previews */}
        <div className={`grid md:grid-cols-3 gap-5 mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <MockupCard label="Estimate Spreadsheet" color="#1976D2">
            <div className="space-y-1.5">
              <div className="h-3 bg-blue-100 rounded w-full" />
              <div className="grid grid-cols-4 gap-1">
                {['Trade', 'Qty', 'Unit', 'Total'].map(h => (
                  <div key={h} className="h-2.5 bg-navy/20 rounded text-center" style={{ fontSize: 7, lineHeight: '10px', color: '#0F2B46', fontWeight: 700 }}>{h}</div>
                ))}
              </div>
              {[['Concrete', '1,240 CY', '$145/CY', '$179,800'], ['Steel', '85 ton', '$2,200/T', '$187,000'], ['Drywall', '12,500 SF', '$3.20/SF', '$40,000'], ['Roofing', '8,200 SF', '$12.50/SF', '$102,500']].map(([t, q, u, tot]) => (
                <div key={t} className="grid grid-cols-4 gap-1 py-1 border-b border-gray-50">
                  {[t, q, u, tot].map((v, i) => <div key={i} className="text-[8px] text-gray-600 font-medium">{v}</div>)}
                </div>
              ))}
              <div className="grid grid-cols-4 gap-1 pt-1">
                <div className="col-span-3 text-[8px] font-bold text-navy">TOTAL PROJECT COST</div>
                <div className="text-[8px] font-bold" style={{ color: '#E8912D' }}>$509,300</div>
              </div>
            </div>
          </MockupCard>

          <MockupCard label="Color-Coded Markups" color="#E85D5D">
            <div className="relative bg-gray-50 rounded-lg h-32 overflow-hidden">
              <div className="absolute inset-2">
                <div className="w-full h-full" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(0,0,0,0.03) 6px, rgba(0,0,0,0.03) 7px)' }} />
                <div className="absolute top-2 left-2 right-2 bottom-2 border border-gray-300 rounded" />
                <div className="absolute top-4 left-4 w-20 h-12 rounded" style={{ background: '#1976D230', border: '1.5px solid #1976D2' }} />
                <div className="absolute top-4 right-4 w-16 h-12 rounded" style={{ background: '#E8912D30', border: '1.5px solid #E8912D' }} />
                <div className="absolute bottom-4 left-4 right-4 h-8 rounded" style={{ background: '#2E8B5730', border: '1.5px solid #2E8B57' }} />
                <div className="absolute bottom-1 left-1 flex gap-1">
                  {['#1976D2', '#E8912D', '#2E8B57'].map(c => <div key={c} className="w-2.5 h-2.5 rounded-sm" style={{ background: c }} />)}
                </div>
              </div>
            </div>
          </MockupCard>

          <MockupCard label="BOQ / Cost Summary" color="#7357D8">
            <div className="space-y-2">
              <div className="text-[9px] font-bold text-navy uppercase tracking-wider mb-2">BILL OF QUANTITIES</div>
              {[
                { label: 'Division 03 – Concrete', val: '$179,800', pct: 35 },
                { label: 'Division 05 – Metals', val: '$187,000', pct: 37 },
                { label: 'Division 09 – Finishes', val: '$82,500', pct: 16 },
                { label: 'Division 23 – HVAC', val: '$60,000', pct: 12 },
              ].map(row => (
                <div key={row.label}>
                  <div className="flex justify-between mb-0.5">
                    <span className="text-[8px] text-gray-600">{row.label}</span>
                    <span className="text-[8px] font-bold text-navy">{row.val}</span>
                  </div>
                  <div className="h-1 bg-gray-100 rounded-full">
                    <div className="h-full rounded-full" style={{ width: `${row.pct}%`, background: '#7357D8' }} />
                  </div>
                </div>
              ))}
            </div>
          </MockupCard>
        </div>

        {/* Deliverables list */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {deliverables.map((d) => (
            <div key={d.title} className="flex gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-200 card-hover">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${d.color}15` }}>
                <d.icon size={18} style={{ color: d.color }} />
              </div>
              <div>
                <div className="font-semibold text-navy text-sm mb-1 leading-tight">{d.title}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
