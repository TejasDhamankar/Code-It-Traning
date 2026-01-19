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
  Code2,
  Database,
  Cloud,
  FlaskConical,
  Sparkles,
  ChevronRight,
  MoveRight,
  ArrowRight
} from 'lucide-react';

/**
 * ============================================================================
 * DATA PROTOCOL: TECHNICAL STACKS
 * ============================================================================
 */

const COURSE_REGISTRY = [
  {
    id: 'stack-01',
    title: 'Full Stack Mastery',
    category: 'Architecture',
    image: '/images/full-stack.jpg',
    icon: Code2,
    accent: '#A855F7',
    tagline: 'Engineering complete digital ecosystems.',
    blueprint: [
      { label: 'Java Ecosystem', detail: 'Spring Boot, Microservices, Hibernate' },
      { label: 'MERN Stack', detail: 'MongoDB, Express, React, Node.js' },
      { label: 'Enterprise .NET', detail: 'C#, ASP.NET Core, Entity Framework' }
    ],
    stats: { success: '98%', speed: 'Professional' }
  },
  {
    id: 'stack-02',
    title: 'Data Intelligence',
    category: 'Analytics',
    image: '/images/Data-Analyst.jpg',
    icon: Database,
    accent: '#EC4899',
    tagline: 'Predictive modeling & big data insights.',
    blueprint: [
      { label: 'Python AI', detail: 'TensorFlow, Keras, Scikit-learn' },
      { label: 'Big Data', detail: 'Spark, Hadoop, SQL Architectures' },
      { label: 'Visualization', detail: 'Tableau, PowerBI, D3.js' }
    ],
    stats: { success: '95%', speed: 'Intermediate' }
  },
  {
    id: 'stack-03',
    title: 'Cloud DevOps',
    category: 'Infrastructure',
    image: '/images/Devops.jpg',
    icon: Cloud,
    accent: '#3B82F6',
    tagline: 'Global scale & automated deployment.',
    blueprint: [
      { label: 'Cloud Native', detail: 'AWS Solutions, Azure Architect' },
      { label: 'Containerization', detail: 'Docker, Kubernetes, Helm' },
      { label: 'CI/CD Pipeline', detail: 'Jenkins, GitLab, GitHub Actions' }
    ],
    stats: { success: '97%', speed: 'Advanced' }
  },
  {
    id: 'stack-04',
    title: 'Quality Matrix',
    category: 'Engineering',
    image: '/images/Testing.jpg',
    icon: FlaskConical,
    accent: '#F59E0B',
    tagline: 'Automated reliability & QA protocols.',
    blueprint: [
      { label: 'Automation', detail: 'Selenium WebDriver, Cypress, Playwright' },
      { label: 'Performance', detail: 'JMeter, LoadRunner, Postman' },
      { label: 'Mobile QA', detail: 'Appium, Espresso, XCUITest' }
    ],
    stats: { success: '92%', speed: 'Essential' }
  }
];

const FocusCard = ({ course, index }: { course: typeof COURSE_REGISTRY[0]; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 30);
    mouseY.set(y * 30);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 1 }}
      onMouseMove={handleMouseMove}
      className="relative w-full group"
    >
      {/* <div className="relative flex flex-col lg:flex-row w-full min-h-[520px] rounded-[3.5rem] bg-white border border-purple-50 shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_100px_rgba(168,85,247,0.12)]"> */}
      <div className="relative flex flex-col lg:flex-row w-full min-h-[520px] rounded-[3.5rem] bg-white border border-gray-200 shadow-xl overflow-hidden transition-all duration-700 hover:shadow-[0_40px_100px_rgba(168,85,247,0.12)] hover:border-purple-300">
        
        {/* LEFT: VISUAL IMAGE SECTION */}
        <div className="relative w-full lg:w-1/2 h-[320px] lg:h-auto overflow-hidden ">
          <motion.div style={{ x: springX, y: springY, scale: 1.1 }} className="absolute inset-0 ">
            <Image src={course.image} alt={course.title} fill className="object-cover transition-all duration-[2000ms] group-hover:scale-110" />
          </motion.div>
          <div className="absolute inset-0  z-10 hidden lg:block" />
          <div className="absolute inset-0 z-10 lg:hidden" />
          
          <div className="absolute top-10 left-10 z-20">
             <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Industry Ready</span>
             </div>
          </div>
        </div>

        {/* RIGHT: CONTENT SECTION */}
        <div className="relative w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-between z-20 bg-white">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                     <course.icon size={24} />
                  </div>
                  <span className="text-[11px] font-black text-purple-400 uppercase tracking-[0.4em]">{course.category}</span>
               </div>
               <span className="text-4xl font-black text-gray-50 group-hover:text-purple-50 transition-colors">0{index + 1}</span>
            </div>

            <h3 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-[0.85] uppercase">
              {course.title.split(' ')[0]} <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x italic">
                {course.title.split(' ').slice(1).join(' ')}
              </span>
            </h3>

            <p className="text-xl text-gray-400 font-medium italic leading-relaxed">"{course.tagline}"</p>

            {/* CURRICULUM BLUEPRINT (JAVA, MERN, ETC) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
               {course.blueprint.map((item, i) => (
                 <div key={i} className="space-y-1">
                    <p className="text-[10px] font-black text-gray-900 uppercase tracking-widest">{item.label}</p>
                    <p className="text-[9px] text-gray-400 font-medium leading-tight">{item.detail}</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="flex items-end justify-between mt-12 pt-8 border-t border-gray-50">
             <div className="flex gap-10">
                <div><p className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">Impact Score</p><p className="text-xl font-black text-gray-900">{course.stats.success}</p></div>
                <div><p className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">Level</p><p className="text-xl font-black text-gray-900">{course.stats.speed}</p></div>
             </div>

             <Link href="#" className="group/btn relative">
                <div className="relative flex items-center gap-4 text-gray-900 font-black text-xs uppercase tracking-[0.3em]">
                   Protocol Details <MoveRight className="group-hover/btn:translate-x-2 transition-transform" />
                </div>
             </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function PopularCourses() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const globalMouseX = useMotionValue(0);
  const globalMouseY = useMotionValue(0);

  const spotlight = useMotionTemplate`radial-gradient(800px circle at ${globalMouseX}px ${globalMouseY}px, rgba(168,85,247,0.04), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { left, top } = sectionRef.current.getBoundingClientRect();
    globalMouseX.set(e.clientX - left);
    globalMouseY.set(e.clientY - top);
  };

  return (
    <section ref={sectionRef} onMouseMove={handleMouseMove} id="courses" className="relative py-48 bg-white overflow-hidden selection:bg-purple-600 selection:text-white">
      
      {/* LUXURY BACKGROUND DECOR */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-100/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-pink-100/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-full overflow-hidden opacity-[0.02] flex gap-20 whitespace-nowrap">
           {[...Array(5)].map((_, i) => <span key={i} className="text-[150px] font-black text-gray-900 uppercase tracking-tighter">Industrial Academy Protocol 2026</span>)}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-10">
           <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-purple-100 shadow-sm">
                 <Sparkles size={16} className="text-purple-600" />
                 <span className="text-[10px] font-black text-gray-900 uppercase tracking-[0.4em]">Section 02 / Advanced Curriculum</span>
              </div>
              <h2 className="text-7xl lg:text-[110px] font-black text-gray-900 leading-[0.8] tracking-tighter uppercase">Focus <br /><span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">Catalog.</span></h2>
           </div>
           <div className="flex flex-col lg:items-end text-left lg:text-right space-y-6 lg:max-w-md">
              <p className="text-xl text-gray-400 font-medium italic leading-relaxed">"Bridging the structural gap between academia and industry through architectural excellence."</p>
           </div>
        </div>

        {/* CARDS LIST */}
        <div className="flex flex-col gap-12 lg:gap-24">
          {COURSE_REGISTRY.map((course, idx) => <FocusCard key={course.id} course={course} index={idx} />)}
        </div>

        {/* FOOTER CTA */}
        <div className="mt-48 flex flex-col items-center text-center space-y-12">
           <h4 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none">Ready to architect your future?</h4>
           <Link href="#" className="group relative px-16 py-8 rounded-full bg-gray-900 text-white overflow-hidden shadow-2xl transition-all hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-center gap-6 text-sm font-black uppercase tracking-[0.5em]">Discover Catalog <ArrowRight className="group-hover:translate-x-2 transition-transform" /></div>
           </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
      `}</style>
    </section>
  );
}     