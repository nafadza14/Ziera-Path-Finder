
import React from 'react';
import { CompassIcon, UsersIcon, RocketIcon } from './Icons';

const SolutionFlow: React.FC = () => {
  const items = [
    { 
      title: "The Watering Hole Report", 
      desc: "We map the 10+ online 'lubuk-lubuk' where your ideal customers are vocal.",
      icon: <UsersIcon className="text-blue-600" />
    },
    { 
      title: "The Live Signal Report", 
      desc: "Direct links to real-time conversations where potential customers need you now.",
      icon: <CompassIcon className="text-blue-600" />
    },
    { 
      title: "The Content Compass", 
      desc: "3 validated content pillars designed to attract your target audience organically.",
      icon: <RocketIcon className="text-blue-600" />
    }
  ];

  return (
    <div className="relative py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Central Engine */}
        <div className="flex-shrink-0 relative group">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-400/30 transform transition-transform group-hover:scale-105">
            <span className="text-white font-bold text-xl md:text-2xl">Engine</span>
          </div>
          <div className="absolute -inset-4 border-2 border-dashed border-blue-200 rounded-full animate-[spin_20s_linear_infinite] -z-10"></div>
        </div>

        {/* Right Side: Cards */}
        <div className="flex flex-col gap-6 flex-grow max-w-xl">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="group flex gap-5 p-6 bg-white rounded-2xl border border-[#E5ECF5] shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                <p className="text-[#475569] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionFlow;
