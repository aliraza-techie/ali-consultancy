import { Target, Clock, Layers, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const features = [
  {
    icon: Target,
    stat: '97%',
    statLabel: 'Estimating Accuracy',
    title: 'ESTIMATING ACCURACY',
    desc: 'Our structured takeoff process and experienced estimators deliver 97% accuracy across all project types and trade scopes.',
    color: '#E8912D',
    bg: '#E8912D20',
  },
  {
    icon: Clock,
    stat: '24h',
    statLabel: 'Turnaround',
    title: '24-HOUR TURNAROUND',
    desc: 'Standard project estimates delivered within 24 hours. Rush delivery available for time-sensitive bids and deadline-driven projects.',
    color: '#1976D2',
    bg: '#1976D220',
  },
  {
    icon: Layers,
    stat: '20+',
    statLabel: 'Trades Covered',
    title: 'MULTI-TRADE COVERAGE',
    desc: 'Full-scope estimating across structural, architectural, MEP, civil, and specialty trades for commercial and residential projects.',
    color: '#2E8B57',
    bg: '#2E8B5720',
  },
];

const differentiators = [
  'Dedicated estimating team with construction industry experience',
  'Structured, verifiable takeoff methodology for every project',
  'Color-coded markup drawings included with every estimate',
  'Fast, reliable delivery that fits your bidding schedule',
  'Clear, organized deliverables your team can act on immediately',
  'Serving contractors across USA, Canada, and Australia',
];

export default function WhyQuantify() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="section-padding" style={{ background: '#0F2B46' }}>
      <div ref={ref} className="container-width">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="eyebrow mb-3">WHY QUANTIFY</p>
            <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Estimating Built Around <span style={{ color: '#E8912D' }}>Precision</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              We combine experienced estimating professionals with a structured process to deliver fast, accurate estimates that contractors trust and build their bids around.
            </p>

            <ul className="space-y-3 mb-10">
              {differentiators.map((d) => (
                <li key={d} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-brand/20 border border-amber-brand/40 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-amber-brand" />
                  </div>
                  <span className="text-white/75 text-sm leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector('#estimate')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 bg-amber-brand hover:bg-amber-light text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              START YOUR ESTIMATE
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: feature cards */}
          <div className={`space-y-5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-5 p-6 rounded-xl border border-white/10 hover:border-amber-brand/30 transition-all duration-300 hover:bg-white/5"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: f.bg }}
                >
                  <f.icon size={26} style={{ color: f.color }} />
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold mb-1" style={{ color: f.color }}>
                    {f.stat}
                  </div>
                  <div className="text-white font-semibold text-sm tracking-wider uppercase mb-2">{f.title}</div>
                  <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
