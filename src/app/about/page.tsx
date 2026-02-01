'use client';

import React from "react";
import { motion } from "framer-motion";
import { 
  Target, Zap, HelpCircle, Star, BookOpen, Layers, 
  Users2, Check, Award, Rocket, Search, Flag, Globe, Sparkles,
  MessageSquare
} from "lucide-react";

// Content for the Standout Features Grid
const standoutFeatures = [
  {
    title: "100% Internship Opportunities",
    desc: "guaranteed internships for students",
    image: "/about/internship.png",
  },
  {
    title: "Practical, Hands-on Training",
    desc: "real-world practical learning approach",
    image: "/about/practical.png",
  },
  {
    title: "Proven Results & Success Stories",
    desc: "strong student outcomes and achievements",
    image: "/about/results.png",
  },
  {
    title: "Large Number of Students",
    desc: "trusted by many satisfied students",
    image: "/about/students.png",
  },
  {
    title: "Job Assistance & Career Guidance",
    desc: "support for jobs and career growth",
    image: "/about/job-support.png",
  },
  {
    title: "Focused, Result-Oriented Sessions",
    desc: "goal-driven career training programs",
    image: "/about/sessions.png",
  },
];

const journeyData = [
  {
    year: "2021",
    title: "The Starting of a Dream",
    desc: "Founded in Rajasthan with the objective of bringing transformation to IT education. Focused on delivering practical, career-oriented training to meet the growing demand for skilled professionals.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    year: "2022",
    title: "Building a Strong Foundation",
    desc: "Established as a trusted name in quality education. Expanded footprint to include Full Stack Development, Data Science, Cloud Computing, Software Testing, and Business Analytics.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    year: "2023",
    title: "Building a Powerful Industry Network",
    desc: "Strengthened industry collaborations and professional networks. Built partnerships with IT companies to open doors for internship opportunities and real-world exposure.",
    icon: <Flag className="w-6 h-6" />,
  },
  {
    year: "2024",
    title: "Expanding Horizons - The Pune Chapter",
    desc: "Successfully expanded to Pune, one of India's leading technology hubs. The new campus addresses the growing demand for skilled IT professionals with hands-on training.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    year: "2025",
    title: "A Legacy of Innovation and Growth",
    desc: "Aiming to expand across multiple cities in India. Introducing curriculum upgrades to match the changing demands of the tech industry and shape the future of IT education.",
    icon: <Sparkles className="w-6 h-6" />,
  },
];

export default function AboutSection() {
  return (
    <main className="overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[url('/about/background.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            CODE IT Software Training Institute<br />
            <span className="text-[#10b981]">IT Courses in Pune with Placement</span>
          </h1>
        </div>
      </section>

      <section className="relative py-20 pb-32">
        {/* Background Ambiance */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl blur-[120px] opacity-[0.05] pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#10b981] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Top Flex Container: Founder & Mission */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] flex flex-col items-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#f0fdf4] rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative w-[340px] h-[450px] md:w-[420px] md:h-[540px] rounded-[2rem] overflow-hidden border-[12px] border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] bg-white">
                <img
                  src="/owner-image.jpg"
                  alt="Preeti Kalra - Founder & Director"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <h4 className="text-[18px] md:text-[20px] font-bold text-[#0f172a]">Preeti Kalra</h4>
              <p className="text-[14px] md:text-[15px] text-[#64748b] font-medium">Founder & Director</p>
            </div>
          </motion.div>

          <div className="w-full lg:w-[50%] space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#f8fafc] border border-slate-100 p-10 rounded-[2.5rem] shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#10b981] flex items-center justify-center shadow-lg shadow-emerald-100">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[11px] font-black text-[#0f172a] uppercase tracking-[0.2em]">Our Mission</h3>
              </div>
              <p className="text-[#64748b] font-medium text-[16px] md:text-[18px] leading-relaxed">
                Our mission is to deliver result-oriented, IT training with practical experience that aligns with current industry needs. 
                Through project-based learning, live projects, internships, and strong industry collaboration. We focus guiding learners 
                to become professionals ready for the IT field and supporting them to build successful and long-term careers in technology.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#10b981] p-10 rounded-[2.5rem] shadow-[0_20px_40px_-12px_rgba(16,185,129,0.25)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Zap className="w-6 h-6 text-white fill-current" />
                </div>
                <h3 className="text-[11px] font-black text-white uppercase tracking-[0.2em]">Our Mission</h3>
              </div>
              <p className="text-emerald-50 font-medium text-[16px] md:text-[18px] leading-relaxed">
                Our mission is to deliver result-oriented, IT training with practical experience that aligns with current industry needs. 
                Through project-based learning, live projects, internships, and strong industry collaboration. We focus guiding learners 
                to become professionals ready for the IT field and supporting them to build successful and long-term careers in technology.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Middle Grid: Who We Are & Why Stand Out */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#f8fafc] border border-slate-100 p-10 rounded-[2.5rem]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#0f172a] flex items-center justify-center shadow-lg">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[11px] font-black text-[#0f172a] uppercase tracking-[0.2em]">Who We Are?</h3>
            </div>
            <p className="text-[#64748b] font-medium text-[16px] md:text-[18px] leading-relaxed">
              Code it is a trusted software training institute in Pune that offers quality IT and programming education. 
              We focus on true learning that comes from practice, not just theory. Our goal is to make learning simple, practical 
              and effective so that a beginner can confidently step into the world of technology.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#10b981] flex items-center justify-center shadow-lg shadow-emerald-100">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[11px] font-black text-[#0f172a] uppercase tracking-[0.2em]">Why Stand Out?</h3>
            </div>
            <ul className="space-y-4">
              {[
                { title: "100% Internship", desc: "Every student is guaranteed an internship as part of training." },
                { title: "Practical Learning", desc: "Learn by doing with life practice and real scenarios." },
                { title: "Career Support", desc: "Helping students move from learning to employment." },
                { title: "Proven Results", desc: "Track record of consistent success and student outcomes." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0" />
                  <p className="text-[#64748b] font-medium text-[15px] md:text-[16px]">
                    <span className="font-bold text-[#0f172a]">{item.title}:</span> {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* --- GRID: STANDOUT FEATURES INFOGRAPHIC --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-[28px] md:text-[42px] font-bold tracking-tight text-[#0f172a] leading-tight">
            What Makes Code It Stand Out <br />
            <span className="text-[#10b981]">in the Field of Software Education</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standoutFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)] transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-32 md:w-36 aspect-square mb-6 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#f0fdf4] rounded-3xl scale-0 group-hover:scale-110 transition-transform duration-500" />
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-2xl relative z-10"
                />
              </div>
              <h4 className="text-[18px] font-bold text-[#0f172a] mb-2 leading-snug">{feature.title}</h4>
              <p className="text-[#64748b] font-medium text-[14px] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- LEARNING METHOD & COURSES WE OFFER --- */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#f8fafc] border border-slate-100 p-10 rounded-[2.5rem] shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#10b981] flex items-center justify-center shadow-lg shadow-emerald-100">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#0f172a]">Our Learning Method</h3>
            </div>
            <p className="text-[#64748b] font-medium text-[16px] md:text-[18px] leading-relaxed">
              At CODE IT, we believe in practical and planned learning, where students gain step by step well explained concepts. 
              Our method includes hand on exercise and real time projects helping students to turn learning into action. 
              We focus on coding, critical thinking and software development principals to build a strong foundation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#0f172a] flex items-center justify-center shadow-lg">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#0f172a]">Courses We Offer</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Core Programming languages (C, C++, Java, Python)",
                "Advanced IT Technologies",
                "Trending and Future Ready Technologies",
                "Specialised Training"
              ].map((course, idx) => (
                <li key={idx} className="flex items-start gap-3 p-4 bg-[#f8fafc] rounded-2xl border border-slate-100 group hover:border-[#10b981] transition-colors duration-300">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#10b981]" />
                  </div>
                  <span className="text-[#0f172a] font-bold text-[15px] leading-snug">{course}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* --- WHO CAN JOIN CODE IT? --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-[#0f172a] p-12 rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full -mr-20 -mt-20" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 lg:gap-16">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
              <Users2 className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-6">
              <h3 className="text-[28px] md:text-[36px] font-bold text-white tracking-tight leading-none">
                Who Can Join <span className="text-emerald-500">CODE IT?</span>
              </h3>
              <div className="space-y-4">
                <p className="text-slate-300 font-medium text-[16px] md:text-[18px] leading-relaxed">
                  Code IT warmly greetings school and college students, beginners in programming, job aspirants and working professionals who want to develop their technical skills. Our courses are designed for learners at every phase, whether you are starting your journey or enhancing your expertise.
                </p>
                <p className="text-emerald-400 font-bold text-[16px] md:text-[18px] flex items-center gap-2">
                  <Zap className="w-5 h-5 fill-current" />
                  No basic technical background is required, as we provide step by step guidance from the basic to advanced.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- STUDENT SUCCESS AT CODE IT --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-[#f8fafc] border border-slate-100 p-12 rounded-[3rem] relative overflow-hidden"
        >
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-[#10b981] flex items-center justify-center shadow-lg shadow-emerald-100">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-6">
              <h3 className="text-[28px] md:text-[42px] font-bold text-[#0f172a] tracking-tight">
                Student Success at <span className="text-[#10b981]">CODE IT</span>
              </h3>
              <p className="text-[#64748b] font-medium text-[16px] md:text-[18px] leading-relaxed">
                In CODE IT, the success of our students has been the main focus of our efforts. We place special emphasis on providing quality education through continuous guidance, practical training, and industry relevant curricula.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left pt-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#10b981] shrink-0" />
                  <p className="text-[#0f172a] font-bold text-[15px]">Structured teaching method involves life projects and technical skills.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#10b981] shrink-0" />
                  <p className="text-[#0f172a] font-bold text-[15px]">Building self-confidence and providing full career support.</p>
                </div>
              </div>
              <p className="text-[#64748b] font-medium text-[16px] md:text-[18px] leading-relaxed pt-4 border-t border-slate-100">
                From a beginner student to a working professional, we train students to achieve real results and long-term career development in this field, providing them with full support.
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- THE JOURNEY OF CODE IT – OUR SUCCESS STORY --- */}
        <div className="mt-32 space-y-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-[28px] md:text-[42px] font-bold tracking-tight text-[#0f172a] leading-tight">
              The Journey of CODE IT – <br />
              <span className="text-[#10b981]">Our Success Story</span>
            </h3>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2 hidden md:block" />

            <div className="space-y-8 md:space-y-12">
              {journeyData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="w-full md:w-[45%]">
                    <div className={`p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}>
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-50 text-[#10b981] mb-6 ${
                        index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                      }`}>
                        {item.icon}
                      </div>
                      <div className="text-[#10b981] font-black text-[14px] uppercase tracking-widest mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-[20px] font-bold text-[#0f172a] mb-4">{item.title}</h4>
                      <p className="text-[#64748b] text-[15px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white bg-[#10b981] items-center justify-center z-10 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>

                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* --- FINAL CTA SECTION --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 bg-[#10b981] p-12 rounded-[3rem] relative overflow-hidden text-center shadow-xl shadow-emerald-500/20"
        >
          {/* Decorative background circle */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto border border-white/30">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-[28px] md:text-[40px] font-black text-white tracking-tight leading-tight">
                Our experts are ready to guide you.
              </h3>
              <p className="text-emerald-50 font-medium text-[16px] md:text-[20px] leading-relaxed">
                Get quick counseling and choose the right course to start your IT career without delay.
              </p>
            </div>

            <button className="bg-[#0f172a] text-white hover:bg-slate-900 transition-all px-10 py-5 rounded-2xl font-black text-[14px] uppercase tracking-widest shadow-lg active:scale-95">
              Talk to an Expert Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
    </main>
  );
}