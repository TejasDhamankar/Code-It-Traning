"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Code, Rocket, BookOpen, Target, Award, CheckCircle, 
  ChevronDown, ArrowRight, Zap, Users, Shield, Database,
  Globe, Cpu, Terminal, Laptop, GraduationCap, Briefcase,
  PlayCircle, Star, MousePointer2, Layers, Monitor, Server,
  BarChart, HardDrive, Smartphone, Activity, PenTool, 
  MapPin, Phone, Mail, Instagram, Twitter, Linkedin, Github, 
  Youtube, ArrowUpRight, MessageCircle, Mic, FileText, ChevronRight
} from 'lucide-react';

export default function CodeItFinal() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('fullstack');
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Hydration fix for Next.js
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Comprehensive Content Data
  const courseSyllabus = useMemo(() => ({
    fullstack: [
      { module: "Phase 01", title: "Frontend Architecture", items: ["HTML5 Semantic SEO", "CSS3 Advanced Flexbox/Grid", "Tailwind CSS Design Systems", "React 19 & Next.js 15"] },
      { module: "Phase 02", title: "Scalable Backend", items: ["Node.js Event Loop", "Express.js Middleware", "REST & GraphQL Design", "JWT Authentication"] },
      { module: "Phase 03", title: "DevOps & Cloud", items: ["Docker Containerization", "CI/CD Pipelines", "AWS Deployment (S3/EC2)", "Database Sharding"] }
    ],
    datascience: [
      { module: "Phase 01", title: "Data Engineering", items: ["Python for Data Science", "Pandas & NumPy Deep Dive", "Data Wrangling", "SQL for Analytics"] },
      { module: "Phase 02", title: "Machine Learning", items: ["Supervised vs Unsupervised", "Regression & Classification", "Random Forests", "Hyperparameter Tuning"] },
      { module: "Phase 03", title: "AI & Neural Networks", items: ["Deep Learning (PyTorch)", "Natural Language Processing", "Large Language Models", "Computer Vision"] }
    ],
    testing: [
      { module: "Phase 01", title: "Manual Foundations", items: ["SDLC & STLC Models", "Bug Lifecycle Management", "Test Case Design", "Regression Testing"] },
      { module: "Phase 02", title: "Automation Engine", items: ["Selenium Web Driver", "TestNG Frameworks", "Java for Testers", "XPath Strategies"] },
      { module: "Phase 03", title: "Advanced Testing", items: ["API Testing (Postman)", "Mobile App Testing", "JMeter Performance", "Cucumber BDD"] }
    ]
  }), []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600 font-medium selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. ENTERPRISE NAVIGATION BAR */}
     

      {/* 2. PREMIUM HERO SECTION */}
      <header id="home" className="relative pt-44 pb-32 overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-200/30 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-3/5 text-left">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-emerald-100 shadow-sm text-emerald-700 text-xs font-black uppercase tracking-[0.2em] mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                Enrollment Open for Feb 2026
              </div>
              <h1 className="text-7xl lg:text-[110px] font-black text-slate-900 tracking-tighter leading-[0.85] mb-10">
                WRITE THE <br />
                <span className="text-emerald-600 italic">FUTURE</span> <br />
                IN CODE.
              </h1>
              <p className="text-2xl text-slate-500 mb-12 leading-relaxed max-w-2xl font-medium">
                We aren't just a training institute. We are a high-performance engine for technical excellence. Pune's #1 destination for elite software engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-slate-900 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-4 group">
                  Start Training <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                   <Star className="text-yellow-400 fill-current" />
                   <span className="text-slate-900 font-black">4.9/5 Student Rating</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/5 relative">
              <div className="relative z-10 p-4 bg-white rounded-[3.5rem] shadow-2xl border border-slate-100 overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Code Terminal" 
                  className="rounded-[3rem] w-full h-[600px] object-cover"
                />
                <div className="absolute top-12 left-12 bg-white/90 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-xl">
                  <Terminal className="text-emerald-600 w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. PERFORMANCE BENTO GRID */}
      
      <section id="metrics" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4 uppercase">The Numbers Speak.</h2>
            <p className="text-slate-400 font-black tracking-widest text-xs uppercase italic">Verified Industry Performance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[650px]">
            {/* LARGE BENTO CARD */}
            <div className="md:col-span-2 md:row-span-2 bg-slate-950 rounded-[3rem] p-16 flex flex-col justify-between text-white group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-[100px]" />
              <BarChart className="text-emerald-600 w-16 h-16 mb-20 group-hover:rotate-12 transition-transform duration-700" />
              <div>
                <h3 className="text-8xl lg:text-[140px] font-black tracking-tighter leading-none mb-4">99.9%</h3>
                <p className="text-2xl font-black text-emerald-400 tracking-tighter italic uppercase">Placement Uptime</p>
                <p className="text-slate-500 mt-6 leading-relaxed max-w-sm">We maintain near-perfect hiring ratios through our exclusive pipeline of 500+ corporate hiring partners.</p>
              </div>
            </div>

            {/* PARTNER CARD */}
            <div className="md:col-span-2 bg-emerald-50 rounded-[3rem] p-12 border border-emerald-100 flex items-center justify-between group">
              <div>
                <h4 className="text-6xl font-black text-slate-900 tracking-tighter mb-2 group-hover:text-emerald-600 transition-colors">500+</h4>
                <p className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-xs">Active Corporate Partners</p>
              </div>
              <Briefcase className="text-emerald-600 w-16 h-16 opacity-20" />
            </div>

            {/* ALUMNI CARD */}
            <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 flex flex-col justify-center text-center">
              <h4 className="text-4xl font-black text-slate-900 tracking-tighter mb-1">15K+</h4>
              <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Global Alumni</p>
            </div>

            {/* RATING CARD */}
            <div className="bg-emerald-600 rounded-[3rem] p-12 flex flex-col justify-center text-center text-white">
              <h4 className="text-3xl font-black tracking-tighter mb-1">4.9/5</h4>
              <p className="text-emerald-100 font-black uppercase tracking-widest text-[10px]">Google Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION SPLIT SECTION */}
      <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                className="rounded-[3rem] shadow-2xl border-4 border-white" 
                alt="Students" 
              />
              <div className="absolute -bottom-10 -right-10 p-10 bg-white rounded-[2rem] shadow-xl border border-slate-50 hidden md:block">
                <p className="text-slate-900 font-black italic text-lg leading-tight">"From Zero to Full Stack in 6 Months."</p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-none mb-10">
                OUR VISIONARY <br />
                <span className="text-emerald-600">EVOLUTION.</span>
              </h2>
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Rocket />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight mb-3">Vision</h4>
                    <p className="text-slate-500 leading-relaxed font-medium">To build a presence as a technical powerhouse fully focused on practical high-stakes skills.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Target />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight mb-3">Mission</h4>
                    <p className="text-slate-500 leading-relaxed font-medium">Delivering project-based learning that aligns with current market needs and heavy project execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ALTERNATING SPLIT: PLACEMENT */}
      <section id="placement" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
                className="relative rounded-[3rem] shadow-2xl border-4 border-white" 
                alt="Placement" 
              />
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 bg-slate-900 text-white p-12 rounded-[2rem] shadow-2xl hidden lg:block">
                <h4 className="text-4xl font-black tracking-tighter mb-2">12 LPA</h4>
                <p className="text-emerald-400 font-black text-[10px] uppercase tracking-widest leading-none">Average CTC</p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-none mb-10 text-right lg:text-left">
                CAREER & <br />
                <span className="text-emerald-600">PLACEMENT.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { t: "Mock Drills", d: "Simulated high-pressure interviews with CTOs.", i: <Mic /> },
                  { t: "Resume Architect", d: "ATS-optimized profiles built by experts.", i: <PenTool /> },
                  { t: "Direct Referral", i: <Linkedin />, d: "Exclusive access to private job boards." },
                  { t: "Salary Negotiation", i: <BarChart />, d: "We ensure you get your true market value." }
                ].map((item, idx) => (
                  <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 hover:bg-white border border-transparent hover:border-emerald-100 transition-all shadow-sm group">
                    <div className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform">{item.i}</div>
                    <h5 className="font-black text-slate-900 tracking-tight text-lg mb-2">{item.t}</h5>
                    <p className="text-xs text-slate-500 font-medium">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MODULAR CURRICULUM */}
      <section id="courses" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="text-left">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 underline decoration-emerald-500 decoration-8 underline-offset-[-2px]">CURRICULUM.</h2>
              <p className="text-slate-400 max-w-xl text-lg">Every module is audited quarterly to ensure relevance with the latest 2026 tech trends.</p>
            </div>
            <div className="flex bg-slate-800 p-2 rounded-2xl border border-slate-700">
              {['fullstack', 'datascience', 'testing'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(courseSyllabus[activeTab as keyof typeof courseSyllabus]).map((module, i) => (
              <div key={i} className="group p-10 bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-[3rem] hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2">
                <span className="px-4 py-1.5 bg-slate-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 border border-slate-600 block w-fit mb-8">
                  {module.module}
                </span>
                <h4 className="text-2xl font-black tracking-tight mb-8 group-hover:text-emerald-400 transition-colors">{module.title}</h4>
                <ul className="space-y-4 mb-10">
                  {module.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-slate-400 text-sm font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ArrowRight className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-4 uppercase">Support Hub</h2>
            <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs italic">Frequently Asked</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "What is the background required?", a: "While we start from scratch, a logical mindset is preferred. We cater to freshers and career-swappers alike." },
              { q: "Is practical training included?", a: "Yes, 80% of our curriculum is hands-on. Every student builds at least 4 live industry-standard projects." },
              { q: "How long is the placement window?", a: "Most students secure offers within 45-60 days post-course completion." },
              { q: "Do you offer offline classes?", a: "Yes, we have 3 state-of-the-art technical hubs across Pune." },
              { q: "Is there an installment facility?", a: "We offer flexible zero-cost EMI options to remove financial barriers." }
            ].map((item, i) => (
              <div key={i} className="rounded-[2.5rem] border border-slate-100 overflow-hidden bg-white shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-10 text-left font-black text-slate-900 tracking-tight text-xl hover:bg-slate-50 transition"
                >
                  {item.q}
                  <ChevronDown className={`w-6 h-6 transition-transform ${activeFaq === i ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-10 pt-0 text-slate-500 font-medium leading-loose border-t border-slate-50">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HIGH-END CTA SECTION */}
      <section className="py-24 px-6 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="relative group overflow-hidden bg-slate-950 rounded-[4rem] p-12 md:p-24 shadow-[0_50px_100px_-20px_rgba(16,185,129,0.25)]">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-emerald-600/20 via-transparent to-blue-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-6xl md:text-[100px] font-black tracking-tighter text-white leading-[0.85] mb-12">
                START YOUR <br />
                <span className="text-emerald-500 italic underline decoration-white/10 underline-offset-[-8px]">TRAJECTORY.</span>
              </h2>

              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                The next cohort begins in <span className="text-white font-bold">14 days</span>. 
                Join 12k+ engineers who have already transformed their career.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <button className="group relative bg-emerald-600 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-emerald-500 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(16,185,129,0.5)]">
                  <span className="relative z-10 flex items-center gap-3 uppercase tracking-tighter">
                    Join The Cohort <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>

                <button className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-6 rounded-2xl font-black text-lg hover:bg-white/10 transition-all flex items-center gap-3 uppercase tracking-tighter">
                  <FileText className="text-emerald-500" />
                  Fee Structure
                </button>
              </div>

              <div className="mt-16 flex flex-col items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?u=alumni${i}`} alt="user" />
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">Verified Placement Record • ISO 9001:2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ADVANCED MULTI-COLUMN FOOTER */}
     
    </div>
  );
}