
import React from 'react';

const UseCaseDiagram: React.FC = () => {
  const useCases = [
    { title: "B2B SaaS Founders", desc: "Identify high-intent leads in technical forums and niche communities.", pos: "top-left" },
    { title: "Indie Hackers", desc: "Validate demand before building complex feature sets.", pos: "left" },
    { title: "Early-Stage Startups", desc: "Build the initial foundation for scalable organic growth.", pos: "bottom-left" },
    { title: "Solopreneurs", desc: "Focus your limited time on high-signal conversations only.", pos: "top-right" },
    { title: "Product Builders", desc: "Map out the exact 'watering holes' where your buyers live.", pos: "right", active: true },
    { title: "Bootstrapped Teams", desc: "GTM data that scales with your growth without the ad spend.", pos: "bottom-right" },
  ];

  return (
    <div className="relative py-16 px-6 max-w-5xl mx-auto overflow-visible">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative">
        {/* Left Column */}
        <div className="flex flex-col gap-10">
          {useCases.slice(0, 3).map((uc, i) => (
            <CaseCard key={i} {...uc} />
          ))}
        </div>

        {/* Center Node */}
        <div className="flex justify-center z-10">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-[40px] bg-white border border-[#E5ECF5] shadow-2xl flex flex-col items-center justify-center gap-3 group hover:border-[#1F6BFF] transition-all duration-500 cursor-default">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-sm animate-pulse"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-sm animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#1F6BFF] shadow-sm animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="font-extrabold text-[#1F6BFF] text-xl tracking-tight">pathfinder</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10">
          {useCases.slice(3, 6).map((uc, i) => (
            <CaseCard key={i} {...uc} />
          ))}
        </div>

        {/* Connecting Lines SVG (Desktop only) */}
        <svg className="absolute inset-0 w-full h-full -z-0 hidden md:block pointer-events-none opacity-20" viewBox="0 0 800 600">
          <path d="M 280 150 Q 350 150 400 300" stroke="#1F6BFF" fill="none" strokeWidth="2" strokeDasharray="8 8" />
          <path d="M 280 300 L 400 300" stroke="#1F6BFF" fill="none" strokeWidth="2" strokeDasharray="8 8" />
          <path d="M 280 450 Q 350 450 400 300" stroke="#1F6BFF" fill="none" strokeWidth="2" strokeDasharray="8 8" />
          <path d="M 520 150 Q 450 150 400 300" stroke="#1F6BFF" fill="none" strokeWidth="2" strokeDasharray="8 8" />
          <path d="M 520 300 L 400 300" stroke="#1F6BFF" fill="none" strokeWidth="3" />
          <path d="M 520 450 Q 450 450 400 300" stroke="#1F6BFF" fill="none" strokeWidth="2" strokeDasharray="8 8" />
        </svg>
      </div>
    </div>
  );
};

const CaseCard = ({ title, desc, active }: any) => (
  <div className={`p-7 rounded-[24px] border transition-all duration-500 cursor-default ${active ? 'border-[#1F6BFF] bg-white shadow-[0_20px_60px_-15px_rgba(31,107,255,0.15)] ring-[6px] ring-blue-50' : 'border-[#E5ECF5] bg-white shadow-sm hover:shadow-xl hover:translate-y-[-4px]'}`}>
    <h4 className="font-bold text-[#0B1220] mb-2.5 text-[15px]">{title}</h4>
    <p className="text-[#5E6B85] text-xs leading-relaxed font-medium">{desc}</p>
  </div>
);

export default UseCaseDiagram;
