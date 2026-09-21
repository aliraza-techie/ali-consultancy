import { Check, Star } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const plans = [
  {
    label: 'SINGLE PROJECT',
    title: 'Project Estimate',
    price: '$299',
    priceSub: 'Starting from / per estimate',
    accent: '#E8912D',
    accentBg: '#E8912D',
    featured: false,
    cta: 'GET STARTED',
    features: [
      'Quantity Takeoff',
      'Material & Labor Cost Estimate',
      'Color-Coded Markups',
      'Detailed Estimate Spreadsheet',
      'Project-Based Support',
    ],
  },
  {
    label: 'MOST POPULAR',
    title: 'Professional',
    price: '$3,500',
    pricePeriod: '/month',
    priceSub: '10 Estimates Per Month',
    accent: '#1976D2',
    accentBg: '#1976D2',
    featured: true,
    cta: 'CHOOSE PROFESSIONAL',
    features: [
      'Up to 10 Estimates Per Month',
      'Multi-Trade Estimating',
      'Quantity Takeoffs',
      'Material & Labor Pricing',
      'Color-Coded Markups',
      'Priority Project Scheduling',
      'Professional Estimate Files',
    ],
  },
  {
    label: 'HIGH-VOLUME SUPPORT',
    title: 'Custom',
    price: 'Custom',
    priceSub: 'Tailored to your volume',
    accent: '#2E8B57',
    accentBg: '#2E8B57',
    featured: false,
    cta: 'CONTACT US',
    description: 'For contractors with specialized or higher-volume estimating requirements.',
    features: [
      'Custom Estimating Volume',
      'Flexible Project Capacity',
      'Multi-Trade Support',
      'Custom Turnaround Planning',
      'Dedicated Workflow',
      'Tailored Deliverables',
    ],
  },
];

export default function Pricing() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="section-padding" style={{ background: '#F5F7FA' }}>
      <div ref={ref} className="container-width">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="eyebrow mb-3">PRICING</p>
          <h2 className="section-heading mb-4">Estimating Options Built Around Your Bidding Needs</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Flexible pricing for single projects, regular bidders, and high-volume estimating teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.title}
              className={`relative rounded-2xl overflow-hidden transition-all duration-700 ${
                plan.featured
                  ? 'shadow-2xl scale-105 z-10'
                  : 'shadow-lg'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Top accent bar */}
              <div className="h-1.5" style={{ background: plan.accentBg }} />

              <div className={`p-8 ${plan.featured ? 'bg-navy' : 'bg-white'}`}>
                {/* Label */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      background: `${plan.accent}20`,
                      color: plan.featured ? plan.accent : plan.accent,
                    }}
                  >
                    {plan.label}
                  </span>
                  {plan.featured && <Star size={16} fill="#E8912D" stroke="none" />}
                </div>

                <h3 className={`font-heading font-bold text-2xl mb-4 ${plan.featured ? 'text-white' : 'text-navy'}`}>
                  {plan.title}
                </h3>

                {/* Price */}
                <div className="mb-2">
                  <span className="font-heading font-bold text-5xl" style={{ color: plan.accent }}>
                    {plan.price}
                  </span>
                  {plan.pricePeriod && (
                    <span className={`text-xl font-semibold ml-1 ${plan.featured ? 'text-white/60' : 'text-gray-400'}`}>
                      {plan.pricePeriod}
                    </span>
                  )}
                </div>
                <div className={`text-sm mb-6 ${plan.featured ? 'text-white/50' : 'text-gray-400'}`}>
                  {plan.priceSub}
                </div>

                {plan.description && (
                  <p className={`text-sm leading-relaxed mb-6 ${plan.featured ? 'text-white/60' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>
                )}

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${plan.accent}20` }}
                      >
                        <Check size={11} style={{ color: plan.accent }} strokeWidth={3} />
                      </div>
                      <span className={`text-sm ${plan.featured ? 'text-white/75' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector('#estimate')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: plan.featured ? plan.accent : 'transparent',
                    color: plan.featured ? 'white' : plan.accent,
                    border: `2px solid ${plan.accent}`,
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.featured) {
                      (e.currentTarget as HTMLElement).style.background = plan.accent;
                      (e.currentTarget as HTMLElement).style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.featured) {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = plan.accent;
                    }
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          All plans include complete deliverable packages. Contact us to discuss your specific project requirements.
        </p>
      </div>
    </section>
  );
}
