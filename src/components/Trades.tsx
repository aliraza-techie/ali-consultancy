import { useState } from 'react';
import { Layers, Cpu, TreePine, Box } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const categories = [
  {
    id: 'structural',
    label: 'Structural',
    icon: Box,
    color: '#E8912D',
    bg: '#E8912D15',
    trades: [
      { name: 'Concrete', icon: '🏗️' },
      { name: 'Masonry', icon: '🧱' },
      { name: 'Metals', icon: '⚙️' },
      { name: 'Structural Steel', icon: '🔩' },
      { name: 'Wood & Framing', icon: '🪵' },
    ],
  },
  {
    id: 'architectural',
    label: 'Architectural',
    icon: Layers,
    color: '#1976D2',
    bg: '#1976D215',
    trades: [
      { name: 'Roofing', icon: '🏠' },
      { name: 'Doors & Windows', icon: '🚪' },
      { name: 'Drywall', icon: '📋' },
      { name: 'Insulation', icon: '🌡️' },
      { name: 'Flooring', icon: '▦' },
      { name: 'Painting', icon: '🎨' },
      { name: 'Finishes', icon: '✨' },
      { name: 'Specialties', icon: '🔧' },
    ],
  },
  {
    id: 'mep',
    label: 'MEP',
    icon: Cpu,
    color: '#2E8B57',
    bg: '#2E8B5715',
    trades: [
      { name: 'Fire Protection', icon: '🔥' },
      { name: 'Plumbing', icon: '💧' },
      { name: 'HVAC / Mechanical', icon: '❄️' },
      { name: 'Electrical', icon: '⚡' },
      { name: 'Communications', icon: '📡' },
      { name: 'Electronic Safety & Security', icon: '🔒' },
    ],
  },
  {
    id: 'civil',
    label: 'Site & Civil',
    icon: TreePine,
    color: '#7357D8',
    bg: '#7357D815',
    trades: [
      { name: 'Earthwork', icon: '⛏️' },
      { name: 'Site Utilities', icon: '🔌' },
      { name: 'Landscaping', icon: '🌿' },
      { name: 'Civil Works', icon: '🛣️' },
    ],
  },
];

export default function Trades() {
  const [active, setActive] = useState('structural');
  const { ref, isVisible } = useIntersectionObserver();
  const cat = categories.find((c) => c.id === active)!;

  return (
    <section className="section-padding bg-white">
      <div ref={ref} className="container-width">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="eyebrow mb-3">TRADES</p>
          <h2 className="section-heading mb-4">Trade Capabilities</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Full-scope estimating across all major construction trades for commercial, residential, and civil projects.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border-2 transition-all duration-200 ${
                active === c.id
                  ? 'text-white border-transparent shadow-lg'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
              }`}
              style={active === c.id ? { background: c.color, borderColor: c.color } : {}}
            >
              <c.icon size={16} />
              {c.label}
            </button>
          ))}
        </div>

        {/* Trade grid */}
        <div
          className={`p-8 rounded-2xl border-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ borderColor: `${cat.color}30`, background: cat.bg }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: cat.color }}>
              <cat.icon size={20} color="white" />
            </div>
            <div>
              <div className="font-heading font-bold text-navy text-lg">{cat.label}</div>
              <div className="text-gray-500 text-sm">{cat.trades.length} Trade{cat.trades.length !== 1 ? 's' : ''}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cat.trades.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-white/80 hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-2xl mb-2">{t.icon}</div>
                <div className="text-xs font-semibold text-navy leading-tight">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
