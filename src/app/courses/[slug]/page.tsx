'use client';

/**
 * ============================================================================
 * CODE IT ARCHITECTURAL PROTOCOL: COURSE ENHANCEMENT ENGINE V6.0
 * ----------------------------------------------------------------------------
 * This component acts as a high-fidelity spatial interface for deep course
 * exploration. It features a state-driven "Career Track Selector" for 
 * specialized Full-Stack segments and utilizes the V5.0 Data Registry.
 * ============================================================================
 */

import React, { use, useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue, 
  useMotionTemplate 
} from 'framer-motion';
import { 
  ArrowLeft, 
  Sparkles, 
  Terminal, 
  Zap, 
  Layers, 
  ChevronRight, 
  CheckCircle2, 
  Cpu,
  Globe,
  Database,
  ShieldCheck,
  Activity,
  Code2,
  Server,
  Layout,
  MoveRight,
  Monitor,
  Trophy,
  Users,
  Cloud,
  FileCode,
  Box,
  Binary,
  GitBranch
} from 'lucide-react';
import { getCourseBySlug } from '../data';

/**
 * ============================================================================
 * ANIMATION PHYSICS & CONSTANTS
 * ============================================================================
 */

const SPRING_PHYSICS = { stiffness: 100, damping: 20, mass: 0.5 };
const HOVER_Y_LIFT = -15;

/**
 * ============================================================================
 * INTERNAL SUB-COMPONENTS (ATOMIC DESIGN)
 * ============================================================================
 */

/**
 * Kinetic Ray-Tracing Engine
 * Tracks user cursor to provide a luminous glow across the white background.
 */
const KineticSpotlight = ({ mouseX, mouseY }: { mouseX: any; mouseY: any }) => {
  const background = useMotionTemplate`radial-gradient(
    800px circle at ${mouseX}px ${mouseY}px,
    rgba(168, 85, 247, 0.04),
    transparent 80%
  )`;
  return <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ background }} />;
};

/**
 * Metric Module
 * Displays high-contrast industrial stats for the career track.
 */
const MetricModule = ({ icon: Icon, label, value, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="p-10 rounded-[3.5rem] bg-white border border-gray-200 shadow-xl hover:shadow-purple-100 transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all">
      <Icon size={28} />
    </div>
    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-2">{label}</p>
    <p className="text-3xl font-black text-gray-900 tracking-tighter uppercase leading-none">{value}</p>
  </motion.div>
);

/**
 * ============================================================================
 * MAIN ARCHITECTURAL PAGE COMPONENT
 * ============================================================================
 */

export default function CourseDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const course = getCourseBySlug(slug);
  
  // Track Manager for Full Stack specialization [Java, MERN, .NET]
  const [activeTrack, setActiveTrack] = useState<string>('java');
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Localized Cursor Lighting
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  if (!course) return <div className="min-h-screen bg-white" />;

  const currentTrackData = course.technicalStacks?.find(t => t.id === activeTrack);

  return (
    <main 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-white overflow-hidden selection:bg-purple-600 selection:text-white pb-60"
    >
      <KineticSpotlight mouseX={mouseX} mouseY={mouseY} />

      {/* -----------------------------------------------------------------------
        1. SPATIAL BUFFER (pt-48 fixes Navbar overlap)
        -----------------------------------------------------------------------
      */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 pt-48">
        
        {/* BREADCRUMB NAVIGATION */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-20">
          <Link href="/courses" className="group inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 hover:text-purple-600 transition-colors">
            <div className="w-12 h-12 rounded-full border border-purple-100 flex items-center justify-center group-hover:bg-purple-50 transition-all shadow-sm">
              <ArrowLeft size={16} />
            </div>
            Catalog Protocol / {course.category}
          </Link>
        </motion.div>

        {/* -----------------------------------------------------------------------
          2. THE CORE HERO (Industrial Split View)
          -----------------------------------------------------------------------
        */}
        <div className="grid lg:grid-cols-12 gap-24 items-center mb-56">
          <div className="lg:col-span-7 space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white border border-purple-100 shadow-[0_10px_30px_rgba(168,85,247,0.05)]">
              <Sparkles size={18} className="text-purple-600 animate-pulse" />
              <span className="text-[11px] font-black text-gray-900 uppercase tracking-[0.5em]">Specialized Training Module</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} 
              className="text-7xl lg:text-[130px] font-black text-gray-900 tracking-tighter uppercase leading-[0.75] drop-shadow-sm"
            >
              {course.title.split(' ')[0]} <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x italic">
                {course.title.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-2xl lg:text-3xl text-gray-400 font-medium italic leading-relaxed max-w-3xl">
              "{course.tagline}"
            </motion.p>

            <div className="flex flex-wrap gap-10 pt-10 border-t border-purple-50">
               <button className="group relative px-16 py-8 rounded-full bg-gray-900 text-white font-black text-sm uppercase tracking-[0.6em] overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="relative z-10 flex items-center gap-6">Initialize Demo <Zap size={20} /></span>
               </button>
               <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full border-2 border-purple-100 flex items-center justify-center group-hover:border-purple-600 transition-colors">
                     <Binary size={24} className="text-purple-600" />
                  </div>
                  <p className="text-[11px] font-black text-gray-900 uppercase tracking-[0.4em]">Explore Roadmap</p>
               </div>
            </div>
          </div>

          {/* HOLOGRAPHIC IMAGE CONTAINER */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }} 
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative aspect-[3.5/5] rounded-[6rem] overflow-hidden border-[20px] border-white shadow-[0_100px_180px_-40px_rgba(168,85,247,0.15)] group"
          >
            <Image src={course.image} alt={course.title} fill className="object-cover transition-transform duration-[5000ms] group-hover:scale-110" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-16 left-12 right-12 p-12 rounded-[4rem] bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                  <p className="text-white text-[10px] font-black uppercase tracking-[0.6em]">Architecture Verified</p>
               </div>
               <p className="text-white text-4xl font-black italic tracking-tighter leading-tight uppercase">ISO Certified <br /> Training Engine</p>
            </div>
          </motion.div>
        </div>

        {/* -----------------------------------------------------------------------
          3. CAREER HUB: THE SPECIALIZED TRACKS (Data V5.0 Integration)
          -----------------------------------------------------------------------
        */}
        {course.technicalStacks && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-60"
          >
            <div className="flex flex-col items-center mb-24 text-center space-y-8">
               <div className="h-px w-24 bg-purple-200" />
               <h2 className="text-[12px] font-black text-purple-600 uppercase tracking-[1em]">Industrial Specialization</h2>
               <p className="text-5xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter">Choose Your Architecture.</p>
            </div>

            {/* TRACK SELECTOR TABS */}
            <div className="flex flex-wrap justify-center gap-8 mb-24">
              {course.technicalStacks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => setActiveTrack(track.id)}
                  className={`relative px-14 py-8 rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.5em] transition-all duration-700 overflow-hidden ${
                    activeTrack === track.id 
                      ? 'text-white shadow-[0_30px_60px_rgba(168,85,247,0.2)] scale-110' 
                      : 'text-gray-400 bg-gray-50 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {activeTrack === track.id && (
                    <motion.div layoutId="track-pill" className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600" />
                  )}
                  <span className="relative z-10">{track.name}</span>
                </button>
              ))}
            </div>

            {/* TRACK CONTENT TRANSITION */}
            <AnimatePresence mode="wait">
              {currentTrackData && (
                <motion.div
                  key={activeTrack}
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                  className="grid lg:grid-cols-5 gap-12"
                >
                  <div className="lg:col-span-3 p-20 rounded-[5rem] bg-white border border-gray-200 shadow-xl flex flex-col justify-between group">
                     <div className="space-y-16">
                        <div className="w-24 h-24 rounded-[2.5rem] bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-700 shadow-xl">
                           <Terminal size={48} />
                        </div>
                        <div className="space-y-6">
                           <h3 className="text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">
                              {currentTrackData.name} <br />
                              <span className="text-3xl text-gray-200 italic font-medium">Primary Tech-Hub</span>
                           </h3>
                           <p className="text-2xl text-gray-400 font-medium italic leading-relaxed max-w-2xl">
                              "{currentTrackData.description}"
                           </p>
                        </div>
                     </div>
                     <div className="mt-24 flex flex-wrap gap-4">
                        {currentTrackData.tools.map(tool => (
                          <div key={tool} className="px-8 py-4 rounded-2xl bg-gray-50 text-[11px] font-black text-gray-900 uppercase tracking-widest border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-all duration-500">
                             {tool}
                          </div>
                        ))}
                     </div>
                  </div>

                  <div className="lg:col-span-2 grid grid-cols-1 gap-10">
                     <MetricModule icon={Activity} label="Job Readiness" value="98%" index={0} />
                     <MetricModule icon={Globe} label="Market Demand" value="Premium" index={1} />
                     <MetricModule icon={ShieldCheck} label="Enterprise Grade" value="Verified" index={2} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* -----------------------------------------------------------------------
          4. SYLLABUS EVOLUTION: THE BENTO SYSTEM
          -----------------------------------------------------------------------
        */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-7 bg-[#0a051e] rounded-[5rem] p-20 lg:p-32 overflow-hidden relative shadow-2xl border border-white/10">
             {/* Syllabus Background Decor */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),_transparent_50%)]" />
             <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5" />
             
             <div className="relative z-10 space-y-24">
                <div className="space-y-4">
                   <h2 className="text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none">Syllabus <br /><span className="text-purple-400 italic">Evolution.</span></h2>
                   <p className="text-purple-400 text-[12px] font-black uppercase tracking-[0.8em]">Modular Mastery Engine</p>
                </div>

                <div className="space-y-20">
                  {course.syllabus.map((item, i) => (
                    <motion.div key={i} whileHover={{ x: 20 }} className="border-b border-white/5 pb-16 last:border-0 group cursor-pointer transition-all">
                       <div className="flex items-center justify-between mb-10">
                          <p className="text-purple-500 text-[12px] font-black uppercase tracking-[0.6em]">Modular Segment 0{i+1}</p>
                          <ChevronRight className="text-white/10 group-hover:text-purple-400 transition-all group-hover:translate-x-4" size={40} />
                       </div>
                       <h4 className="text-4xl font-black text-white mb-10 group-hover:text-purple-200 transition-colors uppercase tracking-tight">{item.title}</h4>
                       <div className="flex flex-wrap gap-6">
                          {item.modules.map((m, mIdx) => (
                            <div key={mIdx} className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all">
                               <CheckCircle2 size={14} className="text-purple-400" />
                               <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{m}</span>
                            </div>
                          ))}
                       </div>
                    </motion.div>
                  ))}
                </div>
             </div>
          </div>

          {/* INSTITUTIONAL ADVANTAGES SIDEBAR */}
          <div className="lg:col-span-5 space-y-12">
             <div className="bg-white rounded-[5rem] border border-gray-200 p-20 lg:p-24 shadow-xl flex flex-col h-full relative overflow-hidden group">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[120px] group-hover:scale-125 transition-transform duration-[3000ms]" />
                
                <div className="relative z-10 space-y-20 h-full flex flex-col">
                   <div className="space-y-8">
                      <h2 className="text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">The <br /> Advantage.</h2>
                      <div className="h-2 w-24 bg-purple-600 rounded-full" />
                   </div>

                   <div className="grid gap-14 flex-1">
                      {course.whyChoose.map((point, i) => (
                        <div key={i} className="flex items-start gap-10 group/point">
                           <div className="w-20 h-20 rounded-[2rem] bg-purple-50 flex items-center justify-center text-purple-600 group-hover/point:bg-gray-900 group-hover/point:text-white transition-all duration-700 shadow-sm">
                              <CheckCircle2 size={36} />
                           </div>
                           <p className="text-2xl font-medium text-gray-400 italic group-hover/point:text-gray-900 transition-colors leading-relaxed">
                              "{point}"
                           </p>
                        </div>
                      ))}
                   </div>

                   <button className="w-full py-12 rounded-[3rem] border-2 border-purple-100 text-purple-600 font-black text-xs uppercase tracking-[0.6em] hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all shadow-2xl shadow-purple-50 active:scale-95">
                      Initialize Final Enrollment
                   </button>
                </div>
             </div>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
          5. FOOTER CONVERSION PATHWAY
          -----------------------------------------------------------------------
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="mt-72 flex flex-col items-center text-center space-y-24"
        >
           <div className="relative">
              <div className="absolute -inset-24 bg-purple-100/40 rounded-full blur-[120px]" />
              <h4 className="relative text-6xl md:text-[140px] font-black text-gray-900 uppercase tracking-tighter leading-none">
                 Secure Your <br /> Success Path.
              </h4>
           </div>

           <Link href="/" className="group relative flex items-center gap-12 px-28 py-14 rounded-full bg-gray-900 text-white shadow-[0_50px_120px_-30px_rgba(0,0,0,0.5)] transition-all hover:scale-110 active:scale-95 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="relative z-10 text-2xl font-black uppercase tracking-[0.8em]">Start Today</span>
              <MoveRight className="relative z-10 group-hover:translate-x-6 transition-transform duration-700" size={48} />
           </Link>
           
           <div className="flex flex-col items-center gap-10 pt-20">
              <div className="flex -space-x-8">
                 {[1,2,3,4,5,6].map(i => <div key={i} className="w-20 h-20 rounded-full border-4 border-white bg-purple-50 shadow-xl" />)}
              </div>
              <p className="text-[12px] font-black text-gray-400 uppercase tracking-[1em]">Validated by 11,000+ Certified Professionals</p>
           </div>
        </motion.div>

      </div>

      <style jsx global>{`
        @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
      `}</style>

    </main>
  );
}