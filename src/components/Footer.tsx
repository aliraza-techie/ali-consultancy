import { Mail, MapPin, Phone } from 'lucide-react';
import Logo from '@/components/Logo';

const quickLinks = ['Home', 'Services', 'About', 'Process', 'FAQ'];
const services = [
  'Quantity Takeoffs',
  'Cost Estimating',
  'Bid Preparation',
  'Material Takeoffs',
  'Preconstruction Support',
];

const scrollTo = (id: string) => {
  const el = document.querySelector(`#${id}`);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer style={{ background: '#0F2B46' }} className="text-white">
      <div className="container-width py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2">
            <Logo variant="light" className="mb-5" />
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              Professional construction estimating services — quantity takeoffs, cost estimates, and bid preparation for contractors across the USA, Canada, and Australia.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@quantifyconstruction.com"
                className="flex items-center gap-2.5 text-white/60 hover:text-amber-brand text-sm transition-colors duration-200"
              >
                <Mail size={15} style={{ color: '#E8912D' }} />
                info@quantifyconstruction.com
              </a>
              <div className="flex items-start gap-2.5 text-white/60 text-sm">
                <MapPin size={15} style={{ color: '#E8912D' }} className="mt-0.5 flex-shrink-0" />
                <span>90 Wall Street<br />Metuchen, NJ 08840</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link.toLowerCase())}
                    className="text-white/55 hover:text-amber-brand text-sm transition-colors duration-200 text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="text-white/55 hover:text-amber-brand text-sm transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-5">Markets</h4>
            <ul className="space-y-3">
              {['United States', 'Canada', 'Australia'].map((m) => (
                <li key={m} className="text-white/55 text-sm">{m}</li>
              ))}
            </ul>

            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mt-8 mb-4">Contact</h4>
            <a
              href="mailto:info@quantifyconstruction.com"
              className="text-amber-brand hover:text-amber-light text-sm transition-colors break-all"
            >
              info@quantifyconstruction.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-width py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/35 text-xs">
            <span>© {new Date().getFullYear()} Quantify Construction LLC. All Rights Reserved.</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/60 transition-colors">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
