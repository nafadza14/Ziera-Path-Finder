
import React from 'react';
import { UsersIcon, CompassIcon, RocketIcon, GlobeIcon } from './Icons';

const DataTypesGrid: React.FC = () => {
  const reports = [
    { 
      title: "Watering Holes", 
      color: "bg-[#E6F9F0]", 
      icon: <UsersIcon className="w-6 h-6" />, 
      iconColor: "text-[#1BC47D]",
      desc: "Top 10 communities where your target audience hangs out."
    },
    { 
      title: "Live Signals", 
      color: "bg-[#FFF4E5]", 
      icon: <CompassIcon className="w-6 h-6" />, 
      iconColor: "text-[#F4B740]",
      desc: "Direct links to real people asking for your solution right now."
    },
    { 
      title: "Content Compass", 
      color: "bg-[#FFF0F6]", 
      icon: <RocketIcon className="w-6 h-6" />, 
      iconColor: "text-[#F73378]",
      desc: "3 validated pillars that turn you into a magnet for traction."
    },
    { 
      title: "Global Reach", 
      color: "bg-[#EAF1FF]", 
      icon: <GlobeIcon className="w-6 h-6" />, 
      iconColor: "text-[#1F6BFF]",
      desc: "Comprehensive roadmap for crossing your first 100 customer milestone."
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {reports.map((t, i) => (
        <div key={i} className="fintech-card p-10 flex flex-col items-center text-center group cursor-pointer">
          <div className={`${t.color} w-20 h-20 rounded-[24px] flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500`}>
             <div className={t.iconColor}>{t.icon}</div>
          </div>
          <h4 className="font-extrabold text-[#0B1220] mb-4 text-lg">{t.title}</h4>
          <p className="text-[#5E6B85] text-sm leading-relaxed font-medium">{t.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default DataTypesGrid;
