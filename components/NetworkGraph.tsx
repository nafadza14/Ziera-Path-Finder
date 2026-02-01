
import React, { useEffect, useState } from 'react';

const NetworkGraph: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  // Simplified flag representations
  const flags = [
    { label: "🇺🇸", x: 420, y: 150 },
    { label: "🇬🇧", x: 450, y: 250 },
    { label: "🇪🇺", x: 420, y: 350 },
    { label: "🇹🇷", x: 350, y: 420 },
    { label: "🇦🇪", x: 250, y: 450 },
    { label: "🇸🇬", x: 150, y: 420 },
    { label: "🇨🇳", x: 400, y: 100 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
      <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
        {/* Background orbits */}
        <circle cx="250" cy="250" r="160" fill="none" stroke="#1F6BFF" strokeWidth="1" strokeDasharray="4 8" className="opacity-10 animate-[spin_60s_linear_infinite]" />
        <circle cx="250" cy="250" r="210" fill="none" stroke="#1F6BFF" strokeWidth="1" strokeDasharray="8 12" className="opacity-5 animate-[spin_90s_linear_infinite_reverse]" />

        {/* Connections to flags */}
        {flags.map((flag, i) => (
          <path
            key={i}
            d={`M 250 250 Q ${250 + (flag.x - 250) * 0.5} ${250 + (flag.y - 250) * 0.5 - 20} ${flag.x} ${flag.y}`}
            fill="none"
            stroke="#1F6BFF"
            strokeWidth="1.5"
            strokeDasharray="1000"
            strokeDashoffset={active ? 0 : 1000}
            className="opacity-20 transition-all duration-[2000ms] ease-out"
          />
        ))}

        {/* Central Hub */}
        <g className="filter drop-shadow-lg">
          <circle cx="250" cy="250" r="45" fill="#1F6BFF" />
          <text x="250" y="250" fill="white" fontSize="24" fontWeight="800" textAnchor="middle" dominantBaseline="middle" className="pointer-events-none">C</text>
        </g>

        {/* Flags */}
        {flags.map((flag, i) => (
          <g key={i} className="transition-all duration-700" style={{ transform: `scale(${active ? 1 : 0})`, transformOrigin: '250px 250px' }}>
            <circle cx={flag.x} cy={flag.y} r="18" fill="white" stroke="#E5ECF5" strokeWidth="2" />
            <text x={flag.x} y={flag.y} fontSize="16" textAnchor="middle" dominantBaseline="middle">{flag.label}</text>
          </g>
        ))}

        {/* Small floating assets */}
        <circle cx="100" cy="120" r="12" fill="#F4B740" className="pulse-soft" />
        <circle cx="150" cy="80" r="8" fill="#1BC47D" className="pulse-soft" style={{ animationDelay: '1s' }} />
      </svg>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    </div>
  );
};

export default NetworkGraph;
