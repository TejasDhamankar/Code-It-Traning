'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Eye, ShieldCheck, Zap, Users, Rocket } from 'lucide-react';

/**
 * ============================================================================
 * ANIMATION VARIANTS (Consistent with your Hero/Placement logic)
 * ============================================================================
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const MISSION_ITEMS = [
  { title: 'Quality Training', icon: ShieldCheck, detail: 'ISO 9001:2015 Standards' },
  { title: 'Hands-On Learning', icon: Zap, detail: 'Real-time Project Architecture' },
  { title: 'Industry Mentors', icon: Users, detail: 'Expert Technical Protocols' },
  { title: 'Practical Learning', icon: Rocket, detail: 'Deployment-ready Curriculum' },
  { title: 'Career Support', icon: Target, detail: 'Elite Placement Assistance' },
];

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-24 overflow-hidden selection:bg-purple-600 selection:text-white">
      
      {/* 1. ARCHITECTURAL HERO SECTION */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto mb-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-purple-100 shadow-sm">
            <Sparkles size={16} className="text-purple-600" />
            <span className="text-[10px] font-black text-gray-900 uppercase tracking-[0.4em]">Section 00 / Institutional Profile</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-7xl lg:text-[110px] font-black text-gray-900 leading-[0.8] tracking-tighter uppercase">
            Defining The <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent italic">Future Code.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-3xl text-xl md:text-2xl text-gray-400 font-medium italic leading-relaxed">
            "CODE IT Software Training Institute delivers industry-focused IT protocols, emphasizing practical architecture and career deployment readiness."
          </motion.p>
        </motion.div>
      </section>

      {/* 2. VISION & MISSION (Industrial Grid) */}
      <section className="relative py-32 bg-gray-50/50">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            
            {/* Vision Block */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-purple-600 border border-purple-50">
                  <Eye size={24} />
                </div>
                <h2 className="text-xs font-black text-gray-900 uppercase tracking-[0.6em]">Our Vision Protocol</h2>
              </div>
              <p className="text-3xl font-bold text-gray-900 tracking-tight leading-snug italic">
                "To empower professionals with real-world skills and build strong IT careers through quality training and continuous guidance."
              </p>
            </motion.div>

            {/* Mission Grid */}
            <div className="space-y-12">
               <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-pink-500 border border-pink-50">
                  <Target size={24} />
                </div>
                <h2 className="text-xs font-black text-gray-900 uppercase tracking-[0.6em]">Mission Parameters</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {MISSION_ITEMS.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm flex flex-col gap-4 group transition-all hover:border-purple-200"
                  >
                    <item.icon size={28} className="text-purple-300 group-hover:text-purple-600 transition-colors" />
                    <div>
                      <p className="font-black text-gray-900 uppercase text-xs tracking-widest">{item.title}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE IDENTITY SECTION */}
      <section className="py-48 px-6 lg:px-12 max-w-[1440px] mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h3 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter uppercase leading-none">
            Bridging the gap between <br />
            <span className="text-purple-600">Academia</span> & <span className="text-pink-500">Industry.</span>
          </h3>
          <div className="flex justify-center gap-10">
            <div className="h-20 w-px bg-gray-100" />
          </div>
          <p className="max-w-2xl mx-auto text-gray-500 font-medium leading-relaxed">
            Established in 2021, CODE IT has evolved into the region's premier hub for technical excellence, training over 500+ professionals for the global digital economy.
          </p>
        </motion.div>
      </section>

      <style jsx global>{`
        @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
      `}</style>

    </main>
  );
}