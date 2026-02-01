
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Launch', signals: 0 },
  { day: 'Day 2', signals: 2 },
  { day: 'Day 4', signals: 7 },
  { day: 'Day 5', signals: 14 },
  { day: 'Day 7', signals: 28 },
];

const AnalyticsChart: React.FC = () => {
  return (
    <div className="w-full bg-white p-10 rounded-[40px] border border-[#E5ECF5] shadow-2xl shadow-blue-500/5">
      <div className="flex flex-col md:flex-row justify-between mb-12 gap-6">
        <div>
          <h4 className="text-2xl font-extrabold text-[#0B1220] tracking-tight">Signal Discovery Timeline</h4>
          <p className="text-[#5E6B85] text-[15px] font-medium mt-1">Real-time organic market analysis</p>
        </div>
        <div className="flex items-center gap-4 bg-[#F8F9FA] p-2.5 rounded-[20px] self-start">
          {['Active Signals', 'Archived', 'Global Search'].map((tab, i) => (
            <button key={i} className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${tab === 'Active Signals' ? 'bg-[#0B1220] text-white shadow-lg' : 'text-[#5E6B85] hover:text-[#0B1220]'}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-12 mb-12 border-b border-[#F1F5F9] pb-12">
        <div className="space-y-1">
           <span className="text-4xl font-black text-[#0B1220] tracking-tighter">28 Actionable Signals</span>
           <p className="text-[#1BC47D] text-sm font-extrabold flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             Direct Buying Intent Identified
           </p>
        </div>
        <div className="text-right flex flex-col justify-end">
           <span className="text-sm font-bold text-[#1F6BFF] uppercase tracking-widest">Target Met</span>
           <p className="text-[13px] font-medium text-[#5E6B85] mt-1">Projected Delivery: 7 Days</p>
        </div>
      </div>

      <div className="h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorSignal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1F6BFF" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#1F6BFF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#5E6B85', fontSize: 12, fontWeight: 600}} dy={15} />
            <YAxis hide />
            <Tooltip 
               cursor={{stroke: '#1F6BFF', strokeWidth: 2, strokeDasharray: '5 5'}}
               contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.15)', padding: '16px 20px'}} 
               itemStyle={{color: '#1F6BFF', fontWeight: 800, fontSize: '16px'}}
               labelStyle={{fontWeight: 'extrabold', marginBottom: '4px', color: '#0B1220'}}
            />
            <Area 
              type="monotone" 
              dataKey="signals" 
              stroke="#1F6BFF" 
              strokeWidth={5} 
              fillOpacity={1} 
              fill="url(#colorSignal)" 
              dot={{ r: 8, fill: '#1F6BFF', strokeWidth: 4, stroke: '#fff' }}
              activeDot={{ r: 12, strokeWidth: 0, fill: '#0B1220' }}
              animationDuration={3000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsChart;
