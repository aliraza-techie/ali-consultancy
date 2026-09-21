interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy';
  const accentColor = '#E8912D';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="38" height="38" rx="8" fill="#0F2B46" />
        <path d="M19 7C12.373 7 7 12.373 7 19C7 25.627 12.373 31 19 31C21.8 31 24.38 30.04 26.42 28.44L24.2 26.22C22.72 27.34 20.94 28 19 28C14.03 28 10 23.97 10 19C10 14.03 14.03 10 19 10C23.97 10 28 14.03 28 19C28 20.1 27.8 21.16 27.44 22.14L30.02 24.72C30.64 22.96 31 21.02 31 19C31 12.373 25.627 7 19 7Z" fill={accentColor} />
        <path d="M26 19H19V26H22V22H26V19Z" fill="white" />
        <circle cx="19" cy="19" r="3" fill={accentColor} />
      </svg>
      <div className="leading-none">
        <div className={`font-heading font-800 text-lg tracking-tight ${textColor}`} style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
          QUANTIFY
        </div>
        <div className="text-[0.6rem] font-semibold uppercase tracking-widest" style={{ color: accentColor, letterSpacing: '0.15em' }}>
          CONSTRUCTION LLC
        </div>
      </div>
    </div>
  );
}
