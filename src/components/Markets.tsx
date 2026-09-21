import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const markets = [
  {
    country: 'United States',
    desc: 'Serving general contractors, subcontractors, and developers across all 50 states with professional construction estimating services.',
    flag: (
      <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" className="w-16 h-11 rounded shadow-sm">
        <rect width="60" height="40" fill="#B22234"/>
        <rect y="3.08" width="60" height="3.08" fill="white"/>
        <rect y="9.23" width="60" height="3.08" fill="white"/>
        <rect y="15.38" width="60" height="3.08" fill="white"/>
        <rect y="21.54" width="60" height="3.08" fill="white"/>
        <rect y="27.69" width="60" height="3.08" fill="white"/>
        <rect y="33.85" width="60" height="3.08" fill="white"/>
        <rect width="24" height="21.54" fill="#3C3B6E"/>
        <g fill="white" fontSize="3">
          {[...Array(5)].map((_, row) =>
            [...Array(6)].map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={2 + col * 4}
                cy={2.2 + row * 4.3}
                r={0.8}
              />
            ))
          )}
          {[...Array(4)].map((_, row) =>
            [...Array(5)].map((_, col) => (
              <circle
                key={`b${row}-${col}`}
                cx={4 + col * 4}
                cy={4.35 + row * 4.3}
                r={0.8}
              />
            ))
          )}
        </g>
      </svg>
    ),
    color: '#1976D2',
  },
  {
    country: 'Canada',
    desc: 'Supporting Canadian contractors and developers with quantity takeoffs and cost estimates for projects across all provinces.',
    flag: (
      <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" className="w-16 h-11 rounded shadow-sm">
        <rect width="60" height="40" fill="white"/>
        <rect width="15" height="40" fill="#FF0000"/>
        <rect x="45" width="15" height="40" fill="#FF0000"/>
        <polygon points="30,8 27,17 18,17 25,22 22,32 30,27 38,32 35,22 42,17 33,17" fill="#FF0000"/>
      </svg>
    ),
    color: '#E85D5D',
  },
  {
    country: 'Australia',
    desc: 'Delivering professional estimating services to Australian builders, contractors, and developers for commercial and residential projects.',
    flag: (
      <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" className="w-16 h-11 rounded shadow-sm">
        <rect width="60" height="40" fill="#00008B"/>
        <rect width="30" height="20" fill="#00008B"/>
        <line x1="0" y1="0" x2="30" y2="20" stroke="white" strokeWidth="4"/>
        <line x1="30" y1="0" x2="0" y2="20" stroke="white" strokeWidth="4"/>
        <line x1="0" y1="0" x2="30" y2="20" stroke="#CC0000" strokeWidth="2"/>
        <line x1="30" y1="0" x2="0" y2="20" stroke="#CC0000" strokeWidth="2"/>
        <line x1="15" y1="0" x2="15" y2="20" stroke="white" strokeWidth="4"/>
        <line x1="0" y1="10" x2="30" y2="10" stroke="white" strokeWidth="4"/>
        <line x1="15" y1="0" x2="15" y2="20" stroke="#CC0000" strokeWidth="2"/>
        <line x1="0" y1="10" x2="30" y2="10" stroke="#CC0000" strokeWidth="2"/>
        <circle cx="43" cy="28" r="3" fill="white"/>
        <circle cx="50" cy="22" r="2" fill="white"/>
        <circle cx="55" cy="30" r="2" fill="white"/>
        <circle cx="48" cy="34" r="1.5" fill="white"/>
        <circle cx="40" cy="22" r="1.5" fill="white"/>
      </svg>
    ),
    color: '#2E8B57',
  },
];

export default function Markets() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="section-padding bg-white">
      <div ref={ref} className="container-width">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="eyebrow mb-3">MARKETS</p>
          <h2 className="section-heading mb-4">Estimating Services in Three Countries</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Quantify Construction LLC serves contractors across the United States, Canada, and Australia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {markets.map((m, i) => (
            <div
              key={m.country}
              className={`group relative rounded-2xl border-2 border-gray-100 hover:border-opacity-60 p-8 text-center card-hover transition-all duration-700 bg-white ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = m.color; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = ''; }}
            >
              <div className="flex justify-center mb-5">
                <div className="p-2 rounded-xl shadow-md border border-gray-100">
                  {m.flag}
                </div>
              </div>
              <h3 className="font-heading font-bold text-navy text-xl mb-3">{m.country}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
              <div
                className="mt-5 h-0.5 w-16 rounded-full mx-auto transition-all duration-300 group-hover:w-28"
                style={{ background: m.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
