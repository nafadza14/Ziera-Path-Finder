
import React, { useState, useEffect } from 'react';
import { ZapIcon, ShieldIcon, GlobeIcon, PlayIcon, CompassIcon, UsersIcon, RocketIcon } from './components/Icons';
import NetworkGraph from './components/NetworkGraph';
import UseCaseDiagram from './components/UseCaseDiagram';
import DataTypesGrid from './components/DataTypesGrid';
import AnalyticsChart from './components/AnalyticsChart';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-nav ${scrolled ? 'h-[72px] border-b border-[#E5ECF5]' : 'h-[96px] border-b border-transparent'}`}>
        <div className="max-w-[1240px] mx-auto px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-16">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-[#1F6BFF] rounded-xl flex items-center justify-center text-white font-black italic shadow-lg shadow-blue-500/20">Z</div>
              <span className="text-2xl font-extrabold tracking-tight text-[#0B1220]">ziera</span>
            </div>
            <div className="hidden lg:flex items-center gap-10">
              {['How It Works', 'Case Studies', 'Pricing', 'About Us'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="text-[14px] font-semibold text-[#5E6B85] hover:text-[#1F6BFF] transition-all">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[14px] font-bold text-[#1F6BFF] hidden md:block hover:opacity-80 transition-opacity">Login</a>
            <button className="bg-[#0B1220] text-white px-7 py-3 rounded-[14px] text-[14px] font-bold hover:bg-[#1F6BFF] transition-all hover:shadow-xl hover:shadow-blue-500/20 active:scale-95">
              Get Your Package
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-44 pb-24 md:pt-56 md:pb-36 gradient-bg relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div className="max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full mb-6 border border-blue-100">
               <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
               <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">For Strategic Founders</span>
            </div>
            <h1 className="text-5xl md:text-[68px] font-extrabold leading-[1.05] tracking-tight mb-8 text-[#0B1220]">
              Connect to Your <br/>
              <span className="text-[#1F6BFF]">First 100 Customers</span>
            </h1>
            <p className="text-xl text-[#5E6B85] mb-12 leading-relaxed font-medium">
              Ziera is a Pathfinder service that helps you find real customers organically. We map where they gather, what they say, and how to reach them — without wasting months on guesswork or ads.
            </p>
            
            <div className="space-y-4 mb-12">
               {["No ads", "No vague personas", "No generic frameworks"].map((point) => (
                 <div key={point} className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                     <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   <span className="text-[14px] font-semibold text-[#0B1220] opacity-80">{point}</span>
                 </div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button className="w-full sm:w-auto bg-[#1F6BFF] text-white px-9 py-5 rounded-[16px] text-[15px] font-bold hover:bg-[#0B1220] transition-all shadow-2xl shadow-blue-500/20 active:scale-95">
                Get Your Pathfinder Package
              </button>
              <button className="flex items-center gap-4 text-[14px] font-bold text-[#0B1220] group transition-all">
                <div className="w-12 h-12 rounded-full border-2 border-[#E5ECF5] flex items-center justify-center group-hover:border-[#1F6BFF] group-hover:bg-blue-50 transition-all">
                   <PlayIcon className="w-4 h-4 text-[#1F6BFF]" />
                </div>
                <span>See How It Works</span>
              </button>
            </div>
            <p className="mt-6 text-[12px] font-semibold text-[#5E6B85] opacity-60 italic">Delivered in 7 days</p>
          </div>
          <div className="relative flex justify-center lg:justify-end scale-110 lg:scale-125">
            <NetworkGraph />
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -z-0"></div>
      </section>

      {/* Social Proof / Platforms */}
      <section className="py-24 border-y border-[#E5ECF5] bg-white">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-center mb-16">
            <h3 className="text-[14px] font-extrabold text-[#0B1220] tracking-[0.2em] uppercase mb-4">We Find Customers Where They Gather</h3>
            <p className="text-[#5E6B85] text-sm font-medium">Ziera analyzes real conversations across platforms where founders and buyers actually talk.</p>
          </div>
          <div className="relative flex overflow-hidden">
            <div className="flex items-center space-x-24 animate-marquee whitespace-nowrap opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              {['REDDIT', 'LINKEDIN', 'INDIE HACKERS', 'DISCORD', 'X.COM', 'DEV FORUMS', 'GITHUB', 'STACK OVERFLOW'].map((logo, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-2xl font-black tracking-tighter text-[#0B1220]">{logo}</span>
                  <span className="text-[10px] font-bold mt-1 tracking-wider opacity-50">PLATFORM</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-36 bg-[#F8F9FA] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0B1220]">The Founder's Dilemma</h2>
            <p className="text-lg text-[#5E6B85] leading-relaxed">
              Most founders don't fail because of bad products. They fail because they never find consistent demand. Scaling shouldn't feel like guessing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <CompassIcon className="w-8 h-8"/>, 
                title: "Analysis Paralysis", 
                desc: "Drowning in marketing advice but stuck with no clear starting point. Afraid to make the wrong move." 
              },
              { 
                icon: <ClockIcon className="w-8 h-8"/>, 
                title: "Fear of Wasting Time", 
                desc: "Terrified of spending months on the wrong strategy with nothing but wasted time to show for it." 
              },
              { 
                icon: <UsersIcon className="w-8 h-8"/>, 
                title: "The 'Empty Room'", 
                desc: "You've built a world-class product, but it feels like you're shouting into a void. No one is listening." 
              }
            ].map((card, i) => (
              <div key={i} className="fintech-card p-10 bg-white shadow-sm border border-[#E5ECF5] group">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#1F6BFF] flex items-center justify-center mb-8 group-hover:bg-[#1F6BFF] group-hover:text-white transition-all">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0B1220]">{card.title}</h3>
                <p className="text-[#5E6B85] leading-relaxed text-[15px]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Diagram (Who We Serve) */}
      <section id="how-it-works" className="py-36 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full -z-10"></div>
             <UseCaseDiagram />
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.15] text-[#0B1220]">
              The Easiest Way to Get Your <br/><span className="text-[#1F6BFF]">Go-To-Market Data</span>
            </h2>
            <p className="text-xl text-[#5E6B85] leading-relaxed">
              We don't sell theories. We deliver a verified, actionable intelligence package in 7 days. Our engine maps your niche with military precision.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              {[
                { label: 'Market Signals', val: '10+' },
                { label: 'Turnaround', val: '7 Days' },
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-[#F6F9FF] rounded-3xl border border-blue-100/50">
                  <span className="block text-4xl font-extrabold text-[#1F6BFF] mb-2">{stat.val}</span>
                  <span className="text-[12px] font-bold text-[#5E6B85] uppercase tracking-[0.15em]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Components Grid */}
      <section className="py-36 bg-white">
        <div className="max-w-[1240px] mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0B1220]">The Pathfinder Package</h2>
          <p className="text-lg text-[#5E6B85] mb-20 max-w-2xl mx-auto">Three distinct reports designed to move you from zero to consistent traction.</p>
          <DataTypesGrid />
          <button className="mt-16 bg-white border-2 border-[#E5ECF5] px-12 py-5 rounded-[18px] text-[15px] font-extrabold text-[#1F6BFF] hover:border-[#1F6BFF] hover:bg-blue-50 transition-all active:scale-95 shadow-lg shadow-gray-100/50">
            See a Sample Report
          </button>
        </div>
      </section>

      {/* Data Visual Section */}
      <section className="py-36 bg-[#F9FBFF]">
        <div className="max-w-[1240px] mx-auto px-8">
           <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-extrabold mb-4 text-[#0B1220]">From Zero to Signal</h2>
              <p className="text-[#5E6B85] font-medium italic">Visualization of our signal discovery process for a typical B2B SaaS launch.</p>
           </div>
           <AnalyticsChart />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-8">
        <div className="max-w-[1240px] mx-auto bg-[#0B1220] rounded-[48px] p-16 md:p-28 text-center relative overflow-hidden shadow-3xl shadow-blue-900/40">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">Stop Guessing. <br/>Start Your Hunt.</h2>
            <p className="text-blue-100/60 text-xl mb-14 leading-relaxed font-medium">
              Your first 100 customers are out there. We'll give you the map to find them organically. Ready to connect?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-[#1F6BFF] text-white px-12 py-5 rounded-[18px] text-[16px] font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                Get Your Pathfinder Package
              </button>
              <button className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-12 py-5 rounded-[18px] text-[16px] font-bold hover:bg-white/10 transition-all active:scale-95">
                Schedule a Call
              </button>
            </div>
          </div>
          {/* Abstract glows */}
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-500/10 blur-[150px]"></div>
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-blue-600/10 blur-[130px]"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1220] pt-32 pb-16 text-white/50 border-t border-white/5">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-16 mb-24">
            <div className="col-span-2 space-y-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1F6BFF] rounded-xl flex items-center justify-center text-white font-black italic shadow-lg shadow-blue-500/30">Z</div>
                <span className="text-2xl font-extrabold tracking-tight text-white">ziera</span>
              </div>
              <p className="max-w-xs text-[15px] font-medium leading-relaxed">
                Empowering the next generation of founders to build with data, not guesses. Organic growth is a science, we provide the formula.
              </p>
              <div className="flex gap-4">
                 {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1F6BFF] transition-all cursor-pointer"><div className="w-4 h-4 bg-white/20 rounded-sm"></div></div>)}
              </div>
            </div>
            {['Product', 'Technology', 'Company', 'Legal'].map((col) => (
              <div key={col} className="space-y-8">
                <h4 className="font-extrabold text-white text-[15px] tracking-wider uppercase">{col}</h4>
                <ul className="space-y-5 text-[14px] font-semibold">
                  <li><a href="#" className="hover:text-white transition-all">Report Demo</a></li>
                  <li><a href="#" className="hover:text-white transition-all">Pricing Model</a></li>
                  <li><a href="#" className="hover:text-white transition-all">Case Studies</a></li>
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
            <p>© 2024 ZIERA PATHFINDER SYSTEMS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-all">Terms of Use</a>
              <a href="#" className="hover:text-white transition-all">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Internal clock icon helper since it was missing
const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export default App;
