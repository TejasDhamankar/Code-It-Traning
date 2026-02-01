"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChevronLeft, BookOpen, CheckCircle2, Clock, Shield, Star, Award } from 'lucide-react';

// --- THE MASTER DATABASE ---
const COURSE_CONTENT: Record<string, any> = {
  // CORE PROGRAMMING
  "c-cpp": {
    fullTitle: "C / C++ Development Mastery",
    detailedDescription: "Master foundations of programming and memory management. Learn low-level hardware interaction and high-performance system architecture.",
    curriculum: ["Pointers & Memory Management", "Data Structures & Algorithms", "Object Oriented C++", "File Handling & Streams", "STL Mastery"],
    perks: ["Interview-Ready DSA", "Industrial Project", "Code Reviews"]
  },
  "java": {
    fullTitle: "Java Professional Engineering",
    detailedDescription: "Deep dive into OOPs, Multithreading, and Collection Frameworks for building scalable enterprise applications.",
    curriculum: ["JVM Architecture", "Multithreading & Concurrency", "Java Stream API", "Hibernate/JPA", "Design Patterns"],
    perks: ["Enterprise Standards", "Project Deployment", "Certification Support"]
  },
  "python": {
    fullTitle: "Python Mastery for Data & AI",
    detailedDescription: "Learn the most versatile language for automation, data science, and artificial intelligence with hands-on labs.",
    curriculum: ["Pythonic Code Standards", "NumPy & Pandas", "Web Scraping", "Automation Scripts", "Database Integration"],
    perks: ["Automation Portfolio", "AI-Ready Skills", "Scripting Pro"]
  },
  "javascript": {
    fullTitle: "Modern JavaScript (ES6+)",
    detailedDescription: "Master the language of the web. Move from basics to advanced asynchronous programming and modern DOM manipulation.",
    curriculum: ["ES6+ Syntax", "Async/Await & Promises", "Functional Programming", "Web APIs", "Performance Tuning"],
    perks: ["Frontend Logic", "Clean Code", "Modern Tooling"]
  },

  // ADVANCED IT
  "fs-java": {
    fullTitle: "Full Stack Java Developer",
    detailedDescription: "Become an end-to-end engineer using Spring Boot for the backend and React for modern frontends.",
    curriculum: ["Spring Boot Microservices", "React UI/UX", "RESTful APIs", "SQL & NoSQL Integration", "Cloud Deployment"],
    perks: ["Full Stack Project", "Architecture Design", "Portfolio Review"]
  },
  "fs-web": {
    fullTitle: "MERN Stack Specialist",
    detailedDescription: "Modern full-stack JavaScript development using MongoDB, Express, React, and Node.js.",
    curriculum: ["Advanced React Hooks", "Node.js Architecture", "MongoDB Aggregation", "Auth (JWT/OAuth)", "State Management"],
    perks: ["Startup Ready", "Real-time Apps", "MERN Certification"]
  },
  "data-science": {
    fullTitle: "Applied Data Science & ML",
    detailedDescription: "Extract insights from complex data. Learn statistical modeling and predictive analytics using Python.",
    curriculum: ["Statistical Analysis", "Scikit-Learn ML", "Data Visualization", "Big Data Basics", "Feature Engineering"],
    perks: ["Analytic Mindset", "Real Dataset Work", "Math Foundations"]
  },

  // TRENDING & FUTURE-READY
  "ai-ml": {
    fullTitle: "AI & Machine Learning Engineer",
    detailedDescription: "Build intelligent systems and neural networks using TensorFlow and PyTorch.",
    curriculum: ["Deep Learning Fundamentals", "Neural Networks (CNN/RNN)", "Natural Language Processing", "Computer Vision", "Model Deployment"],
    perks: ["Future-Proof Skill", "Algorithm Mastery", "Cutting-edge Labs"]
  },
  "cyber-security": {
    fullTitle: "Cyber Security & Hacking",
    detailedDescription: "Protect digital assets and master ethical hacking to defend against global cyber threats.",
    curriculum: ["Penetration Testing", "Network Security", "Ethical Hacking Tools", "Cryptography", "Security Auditing"],
    perks: ["Defense Expert", "White Hat Certification", "Security Lab Access"]
  },

  // SPECIALIZED TRAINING
  "medical-coding": {
    fullTitle: "Professional Medical Coding",
    detailedDescription: "The essential bridge between healthcare and insurance using ICD-10 and CPT standards.",
    curriculum: ["Anatomy & Physiology", "ICD-10-CM Coding", "CPT Guidelines", "HCPCS Level II", "Compliance & Ethics"],
    perks: ["Healthcare Career", "CPC Exam Prep", "High Market Demand"]
  },
  "pv": {
    fullTitle: "Pharmacovigilance (Drug Safety)",
    detailedDescription: "Crucial science of monitoring drug effects and ensuring patient safety post-market.",
    curriculum: ["Clinical Trial Phases", "ICSR Processing", "MedDRA Coding", "Signal Detection", "Global Regulations"],
    perks: ["Pharma Industry Skill", "Global Safety Standards", "Compliance Expert"]
  },
  "clinical-res": {
    fullTitle: "Clinical Research Management",
    detailedDescription: "Managing the lifecycle of human clinical trials and ensuring strict ethical compliance.",
    curriculum: ["GCP Guidelines", "Trial Monitoring", "Ethics Committees", "Project Management", "Informed Consent"],
    perks: ["Research Career", "Pharma Operations", "Regulatory Specialist"]
  }
};

// --- UNIVERSAL FALLBACK TEMPLATE ---
// This ensures that if you haven't typed details for a specific course yet, it still looks good.
const getUniversalCourse = (slug: string) => ({
  fullTitle: slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') + " Specialist",
  detailedDescription: "Advance your trajectory with our professional-grade training track. This course is designed to take you from a beginner to an industry-ready expert.",
  curriculum: ["Introduction & Theory", "Foundational Concepts", "Intermediate Implementation", "Advanced Use Cases", "Capstone Project"],
  perks: ["Official Certification", "Live Mentor Support", "Career Guidance"]
});

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Try to get specific data, otherwise use the universal template
  const course = COURSE_CONTENT[slug] || getUniversalCourse(slug);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 font-sans">
      <nav className="p-6 bg-white border-b sticky top-0 z-50">
        <Link href="/courses" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-600 transition-colors font-black uppercase text-xs tracking-widest">
          <ChevronLeft size={18} /> Back to Catalog
        </Link>
      </nav>

      <main className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-8 space-y-12">
            <div className="relative">
              <span className="text-emerald-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Official Track</span>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase leading-[0.9] tracking-tighter mb-8">
                {course.fullTitle}
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
                {course.detailedDescription}
              </p>
            </div>

            <div className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4 uppercase tracking-tight">
                <BookOpen className="text-emerald-500" /> Syllabus Breakdown
              </h2>
              <div className="space-y-4">
                {course.curriculum.map((item: string, idx: number) => (
                  <div key={idx} className="p-6 bg-slate-50 rounded-2xl flex items-center gap-6 border border-slate-100 group hover:border-emerald-500/20 transition-all">
                    <span className="text-2xl font-black text-slate-200 group-hover:text-emerald-500 transition-colors">{(idx + 1).toString().padStart(2, '0')}</span>
                    <span className="font-bold text-slate-700 uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 sticky top-32">
            <div className="bg-slate-950 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px]" />
              <div className="relative z-10">
                <h3 className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-8">Course Highlights</h3>
                <ul className="space-y-6 mb-12">
                  {course.perks.map((perk: string) => (
                    <li key={perk} className="flex items-center gap-4 font-bold uppercase text-[11px] tracking-wider">
                      <div className="p-1 bg-emerald-500/10 rounded-lg text-emerald-500">
                        <CheckCircle2 size={18} />
                      </div>
                      {perk}
                    </li>
                  ))}
                </ul>
                <div className="pt-8 border-t border-white/10">
                  <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/40">
                    Join Cohort
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white border border-slate-100 rounded-3xl p-8 text-center">
              <Award className="mx-auto text-emerald-500 mb-4" size={32} />
              <p className="font-black uppercase text-xs tracking-widest text-slate-900 mb-2">Verified Track</p>
              <p className="text-xs text-slate-400">Receive a professional certificate upon completion.</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}