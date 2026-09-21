import { useState, useMemo } from 'react';
import { Calculator as CalcIcon, ArrowRight, Info } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const projectTypes = ['Commercial', 'Residential', 'Industrial', 'Healthcare', 'Education'];
const finishLevels = ['Standard', 'Premium', 'High-End'];
const regions = ['Northeast', 'Southeast', 'Midwest', 'West Coast', 'Canada', 'Australia'];

const baseRates: Record<string, number> = {
  Commercial: 185, Residential: 145, Industrial: 165, Healthcare: 270, Education: 220,
};
const finishMultipliers: Record<string, number> = {
  Standard: 1.0, Premium: 1.35, 'High-End': 1.75,
};
const regionMultipliers: Record<string, number> = {
  Northeast: 1.18, Southeast: 0.94, Midwest: 0.98, 'West Coast': 1.22, Canada: 1.08, Australia: 1.15,
};

function formatCurrency(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  return `$${n.toLocaleString()}`;
}

export default function Calculator() {
  const { ref, isVisible } = useIntersectionObserver();
  const [projectType, setProjectType] = useState('Commercial');
  const [sqft, setSqft] = useState(5000);
  const [finish, setFinish] = useState('Standard');
  const [region, setRegion] = useState('Northeast');

  const { total, perSqft, breakdown } = useMemo(() => {
    const base = baseRates[projectType] * finishMultipliers[finish] * regionMultipliers[region];
    const total = Math.round(base * sqft);
    const materials = Math.round(total * 0.45);
    const labor = Math.round(total * 0.38);
    const equipment = Math.round(total * 0.10);
    const other = total - materials - labor - equipment;
    return { total, perSqft: Math.round(base), breakdown: { materials, labor, equipment, other } };
  }, [projectType, sqft, finish, region]);

  const lowRange = Math.round(total * 0.88);
  const highRange = Math.round(total * 1.12);

  return (
    <section className="section-padding" style={{ background: '#F5F7FA' }}>
      <div ref={ref} className="container-width">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="eyebrow mb-3">CALCULATOR</p>
          <h2 className="section-heading mb-4">Instant Project Cost Calculator</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Get a preliminary project cost range by entering basic project information. Final pricing may vary based on drawings, specifications, location, and scope.
          </p>
        </div>

        <div className={`bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2">
            {/* Input side */}
            <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-amber-brand/10 flex items-center justify-center">
                  <CalcIcon size={20} className="text-amber-brand" />
                </div>
                <h3 className="font-heading font-bold text-navy text-xl">Project Details</h3>
              </div>

              {/* Project Type */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Project Type</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {projectTypes.map((t) => (
                    <button
                      key={t}
                      onClick={() => setProjectType(t)}
                      className={`py-2 px-2 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                        projectType === t
                          ? 'bg-navy border-navy text-white'
                          : 'bg-white border-gray-200 text-gray-600 hover:border-navy/40'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Square Footage */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">Project Size</label>
                  <span className="text-navy font-bold text-sm">{sqft.toLocaleString()} SF</span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={100000}
                  step={500}
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #E8912D ${((sqft - 500) / 99500) * 100}%, #e5e7eb ${((sqft - 500) / 99500) * 100}%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>500 SF</span>
                  <span>100,000 SF</span>
                </div>
                <input
                  type="number"
                  value={sqft}
                  onChange={(e) => setSqft(Math.min(100000, Math.max(500, Number(e.target.value))))}
                  className="mt-3 w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy font-semibold focus:outline-none focus:border-amber-brand transition-colors"
                  placeholder="Enter square footage"
                />
              </div>

              {/* Finish Level */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Finish Level</label>
                <div className="grid grid-cols-3 gap-2">
                  {finishLevels.map((f) => (
                    <button
                      key={f}
                      onClick={() => setFinish(f)}
                      className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                        finish === f
                          ? 'bg-navy border-navy text-white'
                          : 'bg-white border-gray-200 text-gray-600 hover:border-navy/40'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Region */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Region</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {regions.map((r) => (
                    <button
                      key={r}
                      onClick={() => setRegion(r)}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                        region === r
                          ? 'bg-navy border-navy text-white'
                          : 'bg-white border-gray-200 text-gray-600 hover:border-navy/40'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result side */}
            <div className="p-8 lg:p-10 bg-navy flex flex-col">
              <h3 className="font-heading font-bold text-white/80 text-xs tracking-widest uppercase mb-6">Preliminary Project Cost</h3>

              <div className="mb-2">
                <div className="text-4xl sm:text-5xl font-heading font-bold text-amber-brand mb-1">
                  {formatCurrency(lowRange)} – {formatCurrency(highRange)}
                </div>
                <div className="text-white/50 text-sm">Estimated range</div>
              </div>

              <div className="flex items-center gap-2 mb-8 mt-2">
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <div className="text-white font-bold text-xl">${perSqft}</div>
                  <div className="text-white/50 text-xs">Estimated cost / SF</div>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <div className="text-white font-bold text-xl">{sqft.toLocaleString()}</div>
                  <div className="text-white/50 text-xs">Square Footage</div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 mb-8">
                <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Cost Breakdown</div>
                {[
                  { label: 'Materials', value: breakdown.materials, color: '#E8912D', pct: 45 },
                  { label: 'Labor', value: breakdown.labor, color: '#1976D2', pct: 38 },
                  { label: 'Equipment', value: breakdown.equipment, color: '#2E8B57', pct: 10 },
                  { label: 'Other', value: breakdown.other, color: '#7357D8', pct: 7 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/70">{item.label}</span>
                      <span className="text-white font-semibold">{formatCurrency(item.value)}</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${item.pct}%`, background: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-2 bg-white/5 rounded-lg p-3 mb-6 text-white/50 text-xs leading-relaxed">
                <Info size={14} className="flex-shrink-0 mt-0.5" />
                <span>Preliminary planning figure only. A detailed estimate requires review of plans, specifications, and scope.</span>
              </div>

              <button
                onClick={() => document.querySelector('#estimate')?.scrollIntoView({ behavior: 'smooth' })}
                className="group mt-auto flex items-center justify-center gap-2 bg-amber-brand hover:bg-amber-light text-white font-bold text-sm tracking-wider uppercase px-6 py-4 rounded transition-all duration-200 hover:shadow-xl"
              >
                GET A DETAILED ESTIMATE
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
