'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  AnimatePresence,
} from 'framer-motion';
import {
  Trophy,
  Users,
  Building2,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Quote,
  TrendingUp,
  Globe,
  Award,
  ChevronRight
} from 'lucide-react';

/**
 * ============================================================================
 * DATA PROTOCOL: THE RECRUITER NETWORK
 * ============================================================================
 */

const RECRUITER_NETWORK = [
  { name: 'ACCENTURE', sector: 'Consulting' },
  { name: 'TCS', sector: 'IT Services' },
  { name: 'TECH MAHINDRA', sector: 'Digital Transformation' },
  { name: 'ZENSAR', sector: 'Software' },
  { name: 'SUTHERLAND', sector: 'BPM' },
  { name: 'SUMASOFT', sector: 'Cybersecurity' },
  { name: 'TRAYA', sector: 'E-Commerce' },
  { name: 'NEXTGEN', sector: 'Innovation' },
  { name: 'BPOINTERS', sector: 'Outsourcing' },
  { name: 'PI SYST', sector: 'Development' },
];

const METRICS = [
  { label: 'Graduates Trained', value: '500+', detail: 'Global Community' },
  { label: 'Assistance Rate', value: '100%', detail: 'Success Mandate' },
  { label: 'Enterprise Partners', value: '100+', detail: 'Placement Hub' },
  { label: 'Industry Tenure', value: '20+', detail: 'Years of operations' },
];

/**
 * ============================================================================
 * SUB-COMPONENTS
 * ============================================================================
 */

const WorldMapPattern = () => (
  <svg className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M150,100 Q200,50 300,120 T500,100 T700,150 T900,100" stroke="white" strokeWidth="0.5" fill="none" />
    <circle cx="200" cy="150" r="2" fill="white" className="animate-pulse" />
    <circle cx="500" cy="100" r="2" fill="white" className="animate-pulse" />
    <circle cx="800" cy="200" r="2" fill="white" className="animate-pulse" />
  </svg>
);

const RecruiterTile = ({ company, index }: { company: typeof RECRUITER_NETWORK[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ y: -5, scale: 1.05 }}
    className="group relative flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white border border-purple-50 shadow-sm cursor-default overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    <span className="relative z-10 text-2xl lg:text-3xl font-black text-black group-hover:text-purple-600 transition-colors tracking-tighter italic uppercase">
      {company.name}
    </span>
  </motion.div>
);

/**
 * ============================================================================
 * MAIN PLACEMENT COMPONENT: INSPIRED BY GUPSHUP ARCHITECTURE
 * ============================================================================
 */

export default function PlacementAssistance() {
  return (
    <section id="placements" className="relative bg-white overflow-hidden selection:bg-purple-600 selection:text-white">
      
      {/* -----------------------------------------------------------------------
        1. THE PURPLE COMMAND SECTION
        -----------------------------------------------------------------------
      */}
      <div className="relative w-full bg-[#5d31f0] pt-40 pb-60 px-6 lg:px-12">
        {/* Decorative Map & Glows */}
        <WorldMapPattern />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            <div className="space-y-10">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                 className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
               >
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                  <span className="text-[9px] font-black text-white uppercase tracking-[0.4em]">Leading Careers Globally</span>
               </motion.div>
               
               <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight max-w-2xl">
                 The world’s specialized IT <br /> training engine, powering <br /> careers in India.
               </h2>
            </div>

            {/* Metric Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-16 lg:pt-10">
               {METRICS.map((item, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 20 }} 
                   whileInView={{ opacity: 1, y: 0 }} 
                   transition={{ delay: i * 0.1 }}
                   className="space-y-1"
                 >
                    <p className="text-4xl lg:text-6xl font-bold text-white tracking-tighter">{item.value}</p>
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{item.label}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
          2. THE SPOTLIGHT CARDS
          -----------------------------------------------------------------------
        */}
        <div className="absolute -bottom-32 left-0 w-full px-6 lg:px-12 z-20">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-10">
            
            {/* Testimonial Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] p-12 shadow-[0_40px_80px_rgba(0,0,0,0.08)] flex flex-col justify-between min-h-[350px]"
            >
               <div className="space-y-6">
                  <Quote size={40} className="text-purple-100" />
                  <p className="text-xl font-medium text-gray-900 leading-relaxed italic">
                    "Code IT helped me to grow my skills and land my dream job. The placement assistance was top-notch, and the instructors were always there to support me."
                  </p>
               </div>
               <div className="flex items-center gap-6 pt-10 border-t border-gray-50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                  <div>
                    <p className="text-sm font-black text-gray-900 uppercase tracking-widest">Tejas Dhamankar</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Placed @ Zenser</p>
                  </div>
               </div>
            </motion.div>

            {/* Awards/Logos Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="bg-white rounded-[2.5rem] p-12 shadow-[0_40px_80px_rgba(0,0,0,0.08)] grid grid-cols-2 gap-8 items-center"
            >
               <div className="text-center space-y-2 group">
                  <Award size={32} className="mx-auto text-purple-600 group-hover:scale-110 transition-transform" />
                  <p className="text-[9px] font-black text-gray-900 uppercase tracking-widest leading-tight">ISO 9001:2015 <br /> Certified Training</p>
               </div>
               <div className="text-center space-y-2 group">
                  <Globe size={32} className="mx-auto text-blue-600 group-hover:scale-110 transition-transform" />
                  <p className="text-[9px] font-black text-gray-900 uppercase tracking-widest leading-tight">Global Education <br /> Partner 2025</p>
               </div>
               <div className="text-center space-y-2 group">
                  <Users size={32} className="mx-auto text-pink-600 group-hover:scale-110 transition-transform" />
                  <p className="text-[9px] font-black text-gray-900 uppercase tracking-widest leading-tight">Elite Alumni <br /> Network Status</p>
               </div>
               <div className="text-center space-y-2 group">
                  <TrendingUp size={32} className="mx-auto text-green-600 group-hover:scale-110 transition-transform" />
                  <p className="text-[9px] font-black text-gray-900 uppercase tracking-widest leading-tight">Career Catalyst <br /> Award 2024</p>
               </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* -----------------------------------------------------------------------
        3. THE RECRUITER NETWORK GRID (Preserved Bottom Section)
        -----------------------------------------------------------------------
      */}
      <div className="pt-64 pb-48 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <h3 className="text-xs font-black text-gray-900 uppercase tracking-[0.6em]">Partner Enterprise Network</h3>
          <div className="h-px flex-1 bg-purple-50" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {RECRUITER_NETWORK.map((company, idx) => (
            <RecruiterTile key={idx} company={company} index={idx} />
          ))}
        </div>

        {/* Final Conversion Path */}
        <div className="mt-40 text-center space-y-12">
           <h4 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter uppercase leading-none">
              Start your career with <br /> <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent italic">Confidence.</span>
           </h4>
           <div className="flex flex-wrap justify-center gap-10 pt-10">
              <Link href="#" className="group relative px-16 py-8 rounded-full bg-[#5d31f0] text-white font-black text-[11px] uppercase tracking-[0.5em] overflow-hidden shadow-2xl transition-all hover:scale-110">
                 <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <span className="relative z-10 flex items-center gap-4">Initialize Career Protocol <ArrowUpRight size={18} /></span>
              </Link>
           </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
      `}</style>

    </section>
  );
}