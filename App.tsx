
import React, { useState, useEffect } from 'react';
import { PlayIcon, CompassIcon, UsersIcon, RocketIcon } from './components/Icons';
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

  // Definisi logo platform dengan SVG asli
  const platforms = [
    { 
      name: 'Reddit', 
      color: '#FF4500', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.05l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.056 1.597.04.21.06.423.06.637 0 2.506-3.497 4.545-7.81 4.545s-7.81-2.039-7.81-4.545c0-.214.021-.427.06-.637a1.75 1.75 0 0 1-1.056-1.597c0-.968.786-1.754 1.754-1.754.463 0 .89.182 1.207.491 1.207-.856 2.853-1.415 4.674-1.488l.846-3.953a.253.253 0 0 1 .18-.2l2.813.593c.044-.216.233-.377.458-.377zm-9.381 7.391a1.25 1.25 0 1 0 0 2.498 1.25 1.25 0 0 0 0-2.498zm6.742 0a1.25 1.25 0 1 0 0 2.498 1.25 1.25 0 0 0 0-2.498zm-3.37 4.62c-.01 0-.01 0-.012 0l-.056.001c-.01 0-.017 0-.026 0-.012 0-.024.002-.036.002h-.068l-.044-.002h-.167l-.1-.004c-.041-.002-.085-.006-.133-.01l-.274-.034c-.208-.028-.462-.073-.757-.145a15.3 15.3 0 0 1-1.794-.614.253.253 0 0 1 .15-.483c.415.13.85.241 1.308.333.301.06.598.11.895.144a15.015 15.015 0 0 0 2.115-.006c.297-.032.594-.08.895-.138.458-.092.893-.203 1.308-.333a.253.253 0 0 1 .15.483 15.3 15.3 0 0 1-1.794.614c-.295.072-.549.117-.757.145l-.274.034c-.048.004-.092.008-.133.01l-.1.004h-.167l-.044.002h-.068c-.012 0-.024-.002-.036-.002z" />
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      color: '#0A66C2', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454c.98 0 1.775-.773 1.775-1.729V1.729C24 .774 23.205 0 22.225 0z" />
        </svg>
      )
    },
    { 
      name: 'Indie Hackers', 
      color: '#000000', 
      icon: (
        <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded font-black text-xl italic">IH</div>
      )
    },
    { 
      name: 'Discord', 
      color: '#5865F2', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.862-1.297 1.197-1.99a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.125-.094.249-.192.37-.293a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.101.246.199.37.293a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.076.076 0 0 0-.041.107c.336.694.735 1.36 1.197 1.99a.078.078 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.085.085 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      )
    },
    { 
      name: 'X.com', 
      color: '#000000', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298L17.61 20.643z" />
        </svg>
      )
    },
    { 
      name: 'GitHub', 
      color: '#181717', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      )
    },
    { 
      name: 'Stack Overflow', 
      color: '#F48024', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.95zm2.958-4.384l7.815 7.427 1.459-1.523-7.815-7.427-1.459 1.523zM16.518 0l-1.74 1.296 5.76 7.724 1.74-1.296L16.518 0z" />
        </svg>
      )
    },
  ];

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
      <section className="py-24 border-y border-[#E5ECF5] bg-white overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-center mb-16">
            <h3 className="text-[14px] font-extrabold text-[#0B1220] tracking-[0.2em] uppercase mb-4">We Find Customers Where They Gather</h3>
            <p className="text-[#5E6B85] text-sm font-medium">Ziera analyzes real conversations across platforms where founders and buyers actually talk.</p>
          </div>
          <div className="relative flex whitespace-nowrap overflow-hidden">
            <div className="flex items-center space-x-20 animate-marquee py-4">
              {[...platforms, ...platforms].map((platform, i) => (
                <div key={i} className="flex flex-col items-center gap-3 group cursor-default min-w-[140px]">
                  <div 
                    className="transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center" 
                    style={{ color: platform.color }}
                  >
                    {platform.icon}
                  </div>
                  <span className="text-[12px] font-extrabold tracking-tight text-[#0B1220] opacity-80 group-hover:text-[#1F6BFF] transition-colors">
                    {platform.name}
                  </span>
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
