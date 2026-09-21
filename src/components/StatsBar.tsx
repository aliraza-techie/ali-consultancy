import { FileText, Target, Users, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCounter } from '@/hooks/useCounter';

const stats = [
  { icon: FileText, value: 10000, suffix: '+', label: 'Project Estimates', color: '#E8912D' },
  { icon: Target, value: 97, suffix: '%', label: 'Accuracy Rate', color: '#1976D2' },
  { icon: Users, value: 500, suffix: '+', label: 'Active Clients', color: '#2E8B57' },
  { icon: TrendingUp, value: 256, suffix: '', label: 'Projects Estimated', sublabel: '$2.56B', color: '#7357D8' },
];

function Stat({ icon: Icon, value, suffix, label, sublabel, color, isVisible }: {
  icon: typeof FileText; value: number; suffix: string; label: string; sublabel?: string; color: string; isVisible: boolean;
}) {
  const count = useCounter(value, isVisible, 2000);
  return (
    <div className="flex flex-col items-center text-center group">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${color}20` }}
      >
        <Icon size={26} style={{ color }} />
      </div>
      <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-1">
        {sublabel ? sublabel : `${count.toLocaleString()}${suffix}`}
      </div>
      <div className="text-white/50 text-xs font-semibold uppercase tracking-widest">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="section-padding" style={{ background: '#0F2B46' }}>
      <div ref={ref} className="container-width">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Stat {...s} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
