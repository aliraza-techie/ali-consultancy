import { CheckCircle, FileText, ClipboardList, Award, Layers, Globe } from 'lucide-react';

const items = [
  { icon: CheckCircle, label: 'Accurate Takeoffs', color: '#2E8B57' },
  { icon: FileText, label: 'Detailed Estimates', color: '#1976D2' },
  { icon: ClipboardList, label: 'Bid Preparation', color: '#E8912D' },
  { icon: Award, label: 'Professional Deliverables', color: '#7357D8' },
  { icon: Layers, label: 'Multi-Trade Expertise', color: '#18A8C7' },
  { icon: Globe, label: 'USA · Canada · Australia', color: '#E85D5D' },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left group">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                style={{ background: `${color}15` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <span className="text-xs font-semibold text-gray-700 leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
