'use client';
import React from 'react';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Banner - Gupshup Theme */}
      <section className="relative bg-[#1e1b4b] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Us</span>
          </h1>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 space-y-20">
          
          {/* Who We Are Section */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-[#1e1b4b] relative inline-block">
              Who We Are
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5] to-[#db2777] rounded-full"></div>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed pt-4">
              CODE IT Software Training Institute delivers industry-focused IT training, emphasizing practical skills and career readiness. We empower students to become skilled professionals in the ever-evolving IT landscape.
            </p>
          </div>

          {/* Our Vision Section */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-[#1e1b4b] uppercase tracking-widest">Our Vision</h3>
            <p className="text-xl font-medium text-gray-700 italic border-y border-purple-100 py-8">
              "To empower students and professionals with practical IT knowledge and real-world skills.
We aim to create a learning environment that supports growth, clarity, and confidence.
Our vision is to build strong IT careers through quality training and continuous guidance."
            </p>
          </div>

          {/* Our Mission Section */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-[#1e1b4b] text-center uppercase tracking-widest">Our Mission</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Quality Training', icon: '✨' },
                { title: 'Hands-On Learning', icon: '💻' },
                { title: 'Industry Mentors', icon: '👥' },
                { title: 'Practical Learning', icon: '🚀' },
                { title: 'Career Support', icon: '🎯' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-purple-50 hover:shadow-md transition-shadow">
                  <div className="text-2xl bg-purple-50 w-12 h-12 flex items-center justify-center rounded-xl text-[#4f46e5]">
                    {item.icon}
                  </div>
                  <span className="font-bold text-gray-800 text-lg">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default AboutPage;