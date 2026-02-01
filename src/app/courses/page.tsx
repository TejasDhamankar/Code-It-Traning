"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Added Link for navigation
import { 
  Code2, Search, LayoutGrid, Zap, Database, 
  Stethoscope, ChevronRight, Rocket,
  FileText, ArrowUpRight, Microscope
} from 'lucide-react';

// --- Types ---
type MainCategory = "All" | "Core Programming" | "Advanced IT" | "Future-Ready" | "Specialized";

interface Course {
  title: string;
  cat: MainCategory;
  slug: string;
  duration: string;
  tags: string[];
  description: string;
}

// --- Constants ---
const categories = [
  { name: "All Tracks", type: "All" as MainCategory, icon: <LayoutGrid size={18} /> },
  { name: "CORE Programming", type: "Core Programming" as MainCategory, icon: <Code2 size={18} /> },
  { name: "Advanced IT Technologies", type: "Advanced IT" as MainCategory, icon: <Database size={18} /> },
  { name: "Trending & Future-Ready", type: "Future-Ready" as MainCategory, icon: <Zap size={18} /> },
  { name: "Specialized Training", type: "Specialized" as MainCategory, icon: <Stethoscope size={18} /> },
];

export default function CodeItPlatform() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<MainCategory>("All");

  useEffect(() => {
    setMounted(true);
  }, []);

  const allCourses: Course[] = useMemo(() => [
    // --- CORE Programming ---
    { title: "C / C++ Development", cat: "Core Programming", slug: "c-cpp", duration: "3 Months", tags: ["Logic", "Systems"], description: "Master foundations of programming and memory management." },
    { title: "Java Professional", cat: "Core Programming", slug: "java", duration: "4 Months", tags: ["Backend", "Enterprise"], description: "Deep dive into OOPs, Multithreading, and Collection Frameworks." },
    { title: "Python for Data", cat: "Core Programming", slug: "python", duration: "3 Months", tags: ["Scripting", "Data"], description: "Learn the most versatile language for automation and AI." },
    { title: "PHP Development", cat: "Core Programming", slug: "php", duration: "3 Months", tags: ["Web", "Backend"], description: "Build dynamic web applications using PHP and MySQL." },
    { title: "JavaScript Mastery", cat: "Core Programming", slug: "javascript", duration: "3 Months", tags: ["Frontend", "ES6+"], description: "Master the language of the web for modern development." },
    { title: "Ruby Programming", cat: "Core Programming", slug: "ruby", duration: "3 Months", tags: ["Rails", "Agile"], description: "Focus on simplicity and productivity with Ruby on Rails." },
    { title: "Swift for iOS", cat: "Core Programming", slug: "swift", duration: "4 Months", tags: ["Apple", "Mobile"], description: "Develop high-performance native iOS applications." },
    { title: "Go (Golang)", cat: "Core Programming", slug: "golang", duration: "3 Months", tags: ["Cloud", "Microservices"], description: "Build fast, reliable, and efficient software at scale." },

    // --- Advanced IT Technologies ---
    { title: "Full Stack Java", cat: "Advanced IT", slug: "fs-java", duration: "6 Months", tags: ["Spring Boot", "React"], description: "Complete enterprise web development from DB to UI." },
    { title: "Full Stack ASP.NET", cat: "Advanced IT", slug: "fs-dotnet", duration: "6 Months", tags: [".NET Core", "C#"], description: "Build scalable enterprise apps with Microsoft Tech Stack." },
    { title: "Full Stack Python", cat: "Advanced IT", slug: "fs-python", duration: "6 Months", tags: ["Django", "React"], description: "Advanced web development using Python and modern frameworks." },
    { title: "Full Stack Web", cat: "Advanced IT", slug: "fs-web", duration: "6 Months", tags: ["MERN", "Next.js"], description: "Modern full-stack JavaScript development." },
    { title: "Android App Development", cat: "Advanced IT", slug: "android", duration: "5 Months", tags: ["Kotlin", "Mobile"], description: "Build robust Android apps with modern architecture." },
    { title: "Data Science", cat: "Advanced IT", slug: "data-science", duration: "7 Months", tags: ["Python", "Pandas"], description: "Analyze big data and build predictive models." },
    { title: "Cloud Computing", cat: "Advanced IT", slug: "cloud", duration: "4 Months", tags: ["AWS", "Azure"], description: "Master cloud infrastructure and deployment strategies." },
    { title: "Software Testing", cat: "Advanced IT", slug: "testing", duration: "3 Months", tags: ["Selenium", "QA"], description: "Quality assurance through manual and automated testing." },
    { title: "Business Analytics", cat: "Advanced IT", slug: "biz-analytics", duration: "4 Months", tags: ["Tableau", "SQL"], description: "Drive business decisions with data-driven insights." },
    { title: "Advanced Excel", cat: "Advanced IT", slug: "excel", duration: "1 Month", tags: ["VBA", "Macros"], description: "Master complex data manipulation and automation." },
    { title: "Data Analytics", cat: "Advanced IT", slug: "data-analytics", duration: "5 Months", tags: ["PowerBI", "Stats"], description: "Transform raw data into meaningful visualizations." },

    // --- Trending & Future-Ready ---
    { title: "AI & Machine Learning", cat: "Future-Ready", slug: "ai-ml", duration: "8 Months", tags: ["TensorFlow", "PyTorch"], description: "Build intelligent systems and neural networks." },
    { title: "Blockchain Development", cat: "Future-Ready", slug: "blockchain", duration: "5 Months", tags: ["Solidity", "Web3"], description: "Create decentralized applications and smart contracts." },
    { title: "Cyber Security & Hacking", cat: "Future-Ready", slug: "cyber-security", duration: "6 Months", tags: ["Security", "Network"], description: "Protect digital assets and master ethical hacking." },
    { title: "Internet of Things (IoT)", cat: "Future-Ready", slug: "iot", duration: "4 Months", tags: ["Sensors", "Arduino"], description: "Connect the physical world to the digital network." },
    { title: "DevOps Architectures", cat: "Future-Ready", slug: "devops", duration: "5 Months", tags: ["Docker", "K8s"], description: "Bridge the gap between development and operations." },
    { title: "Big Data & Analytics", cat: "Future-Ready", slug: "big-data", duration: "6 Months", tags: ["Hadoop", "Spark"], description: "Process and analyze massive datasets in real-time." },
    { title: "AR/VR Development", cat: "Future-Ready", slug: "ar-vr", duration: "5 Months", tags: ["Unity", "Meta"], description: "Build immersive virtual and augmented experiences." },
    { title: "Quantum Computing", cat: "Future-Ready", slug: "quantum", duration: "4 Months", tags: ["Qiskit", "Physics"], description: "Explore the next frontier of computational power." },
    { title: "SAP", cat: "Future-Ready", slug: "sap", duration: "4 Months", tags: ["FICO", "ABAP"], description: "Manage business operations with SAP modules." },

    // --- Specialized Training ---
    { title: "Medical Coding", cat: "Specialized", slug: "medical-coding", duration: "4 Months", tags: ["ICD-10", "CPT"], description: "Universal medical classification for healthcare billing." },
    { title: "Pharmacovigilance", cat: "Specialized", slug: "pv", duration: "4 Months", tags: ["Drug Safety", "FDA"], description: "Monitoring and assessing drug safety and effects." },
    { title: "SAS Programming", cat: "Specialized", slug: "sas", duration: "3 Months", tags: ["Clinical", "Stats"], description: "Advanced analytics for clinical and business data." },
    { title: "Clinical Research", cat: "Specialized", slug: "clinical-res", duration: "5 Months", tags: ["Trials", "Ethics"], description: "Managing and conducting human clinical trials." },
    { title: "Health Informatics", cat: "Specialized", slug: "health-inf", duration: "4 Months", tags: ["EHR", "Data"], description: "Integrating IT with healthcare delivery systems." },
    { title: "Data Entry Operator", cat: "Specialized", slug: "data-entry", duration: "2 Months", tags: ["Speed", "Accuracy"], description: "Professional certification for data management." },
    { title: "Clinical Data Management", cat: "Specialized", slug: "cdm", duration: "4 Months", tags: ["Quality", "Trials"], description: "Ensuring high-quality data in clinical research." },
    { title: "Pharmaceutical Data Analytics", cat: "Specialized", slug: "pharma-analytics", duration: "5 Months", tags: ["R", "Python"], description: "Applying analytics to pharmaceutical research." },
    { title: "Healthcare SW Development", cat: "Specialized", slug: "health-sw", duration: "6 Months", tags: ["HL7", "HIPAA"], description: "Developing compliant software for medical use cases." },
    { title: "Bioinformatics", cat: "Specialized", slug: "bioinformatics", duration: "6 Months", tags: ["Genetics", "IT"], description: "Analyzing biological data with computational tools." },
  ], []);

  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      const matchesCategory = activeCategory === "All" || course.cat === activeCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, allCourses]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-white" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Engineering & Healthcare Excellence
          </div>

          <h1 className="text-5xl md:text-[100px] font-black text-white tracking-tighter leading-[0.8] mb-10">
            ADVANCE YOUR <br />
            <span className="text-emerald-500 italic">CAREER.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform flex items-center justify-center gap-4">
              Explore All {allCourses.length} Tracks <Rocket size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* Sidebar */}
            <aside className="lg:col-span-3 space-y-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search 35+ courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 transition-all outline-none font-bold text-sm"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              </div>

              <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-2">Browse Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategory(cat.type)}
                      className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-xs font-black transition-all ${
                        activeCategory === cat.type
                          ? "bg-emerald-600 text-white shadow-lg"
                          : "text-slate-600 hover:bg-white hover:shadow-sm"
                      }`}
                    >
                      {cat.icon}
                      <span className="uppercase tracking-tighter text-left">{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Course Grid */}
            <main className="lg:col-span-9">
              <div className="grid md:grid-cols-2 gap-6">
                {filteredCourses.map((course, idx) => (
                  <div key={idx} className="group bg-white rounded-[2.5rem] border border-slate-100 p-8 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-slate-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          {course.cat === "Specialized" ? <Microscope size={20} /> : 
                           course.cat === "Future-Ready" ? <Zap size={20} /> : <Code2 size={20} />}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full">{course.duration}</span>
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-3 uppercase">{course.title}</h3>
                      <p className="text-sm text-slate-500 mb-6 line-clamp-2">{course.description}</p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {course.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-400 text-[9px] font-bold uppercase rounded-md">{tag}</span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Updated Link with Dynamic Slug */}
                    <Link href={`/courses/${course.slug}`}>
                      <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest group-hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
                        Syllabus Details <ChevronRight size={14} />
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
              
              {filteredCourses.length === 0 && (
                <div className="text-center py-20 bg-slate-50 rounded-[3rem]">
                  <Search className="mx-auto text-slate-300 mb-4" size={48} />
                  <p className="font-black uppercase tracking-widest text-slate-400">No courses found matching your search.</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl bg-slate-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px]" />
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-10 relative z-10">
            READY TO START YOUR <br /> <span className="text-emerald-500 italic">TRAJECTORY?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <button className="bg-emerald-600 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-emerald-500 transition-colors flex items-center gap-3">
              Join Cohort <ArrowUpRight size={18} />
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-white/20 transition-colors flex items-center gap-3">
              <FileText size={18} /> Fee Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}