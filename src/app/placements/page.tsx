'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, Sparkles } from 'lucide-react';
import CollegeCard from '../../components/CollegeCard';
import CompanyCard from '../../components/CompanyCard';
import StudentCard from '../../components/StudentCard';

// --- DATA REGISTRY (Same as your provided list) ---
const COLLEGES = [
  { name: "Angel College of Pharmacy, Hadapsar", logo: "/colleges/angel-college-of-pharmacy-hadapsar.png", type: "Affiliated Partner" },
  { name: "Jayawantrao Sawant Group (Handewadi & Hadapsar)", logo: "/colleges/jayawantrao-sawant-group.png", type: "Academic Partner" },
  { name: "PDEA Colleges (Manjari & Pune)", logo: "/colleges/pdea-colleges.png", type: "Institutional Tie-up" },
  { name: "Dr. Jadhavar College, Narhe", logo: "/colleges/dr-jadhavar-college-narhe.png", type: "Skill Partner" },
  { name: "Padmashree Desai College, Urli Kanchan", logo: "/colleges/padmashree-desai-college-urli-kanchan.png", type: "Affiliated Partner" },
  { name: "Krishna College of Pharmacy, Karad", logo: "/colleges/krishna-college-of-pharmacy-karad.png", type: "Academic Partner" },
  { name: "Annasaheb Magar College of Engineering, Hadapsar", logo: "/colleges/pdea-colleges.png", type: "Institutional Tie-up" },
  { name: "Prithviraj Kapoor Memorial High School, Loni Kalbhor", logo: "/colleges/prithviraj.jpg", type: "Skill Partner" }
];

const COMPANIES = [
  { name: "TCS", logo: "/logos/tcs.png", sector: "IT Services" },
  { name: "Accenture", logo: "/logos/accenture.png", sector: "Consulting" },
  { name: "Zensar", logo: "/logos/zensar.png", sector: "Software" },
  { name: "Sumasoft", logo: "/logos/sumasoft.png", sector: "Cybersecurity" },
  { name: "Sutherland", logo: "/logos/sutherland.png", sector: "Development" },
  { name: "Syntelligence", logo: "/logos/syntelligence.png", sector: "Development" },
  { name: "Tech mahindra", logo: "/logos/tech-mahindra.png", sector: "Development" }
];

const PLACED_STUDENTS = [
  { name: "Atul Patil", company: "Syntelligence", lpa: "3.5 LPA", role: "Android Developer", img: "/students/student1.jpg" },
  { name: "Shivani Jenna", company: "MD India", lpa: "4.8 LPA", role: "Data Analyst", img: "/students/student2.jpg" },
  { name: "Prachi Patil", company: "JKL", lpa: "5.5 LPA", role: "Data Analyst", img: "/students/student3.jpg" },
  { name: "Sunil Patil", company: "Suma Soft", lpa: "4.0 LPA", role: "Business Analyst", img: "/students/student4.jpg" },
  { name: "Pratiksha Jadhav", company: "Syntelligence Tech", lpa: "3.0 LPA", role: "Flutter Developer", img: "/students/student5.jpg" },
  { name: "Mangesh Chalode", company: "BitSoft", lpa: "4.5 LPA", role: "Asst. service Engineer", img: "/students/student6.jpg" },
  { name: "Tukaram Biradr", company: "WSN", lpa: "4.8 LPA", role: "Data Analyst", img: "/students/student7.jpg" },
  { name: "Sachin Honrao", company: "Empyreal Solution", lpa: "3.5 LPA", role: "Power BI", img: "/students/student8.jpg" },
  { name: "Sagar Chennoji", company: "Angel Broking, Pune", lpa: "4.5 LPA", role: "Finance Manager", img: "/students/student9.jpg" },
  { name: "Akanksha More", company: "Piogio Pune", lpa: "4.5 LPA", role: "Business Analyst", img: "/students/student10.jpg" },
  { name: "Prajwal Surewad", company: "MD India", lpa: "3.8 LPA", role: "Data Analyst", img: "/students/student11.jpg" },
  { name: "Tejas Dhamankar", company: "Zensar, Pune", lpa: "4.4 LPA", role: "Full Stack Developer", img: "/students/student12.jpg" }
];

export default function PlacementPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-24 overflow-hidden selection:bg-purple-600 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-purple-50 border border-purple-100">
            <Sparkles size={16} className="text-purple-600" />
            <span className="text-[10px] font-black text-purple-900 uppercase tracking-[0.4em]">Placement Protocol 2026</span>
          </div>
          <h1 className="text-7xl lg:text-[110px] font-black text-gray-900 leading-[0.85] tracking-tighter uppercase">
            From Learning <br /> To <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent italic">Deployment.</span>
          </h1>
        </motion.div>
      </section>

      {/* 2. COLLEGE LOGO SECTION */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto mb-40">
        <div className="flex items-center gap-6 mb-16">
          <GraduationCap className="text-purple-600" size={32} />
          <h2 className="text-xs font-black text-gray-900 uppercase tracking-[0.6em]">Academic Tie-ups</h2>
          <div className="h-px flex-1 bg-gray-100" />
        </div>
        {/* Responsive Grid for Colleges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLEGES.map((college, i) => <CollegeCard key={i} {...college} index={i} />)}
        </div>
      </section>

      {/* 3. STUDENT SUCCESS REGISTRY (Elite Alumni) */}
      <section className="bg-[#0a0a0c] py-32 mb-40 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-white rounded-b-[5rem] z-10" />
        
        <div className="px-6 lg:px-12 max-w-[1440px] mx-auto relative z-20">
          <div className="mb-24 text-center space-y-4">
             <h2 className="text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter">Elite Alumni</h2>
             <p className="text-purple-400 font-bold tracking-[0.5em] uppercase text-xs italic">"Architecting Career Milestones"</p>
          </div>
          
          {/* UPDATED: Increased to 4 columns for smaller card sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PLACED_STUDENTS.map((student, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                key={i}
              >
                <StudentCard {...student} index={i} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-white rounded-t-[5rem] z-10" />
      </section>

      {/* 4. COMPANY NETWORK SECTION */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <Building2 className="text-pink-500" size={32} />
          <h2 className="text-xs font-black text-gray-900 uppercase tracking-[0.6em]">Corporate Deployment</h2>
          <div className="h-px flex-1 bg-gray-100" />
        </div>
        {/* Increased Grid density for Corporate Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {COMPANIES.map((company, i) => <CompanyCard key={i} {...company} index={i} />)}
        </div>
      </section>

    </main>
  );
}