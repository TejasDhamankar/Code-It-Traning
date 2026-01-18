'use client';
import React from 'react';

const Hero = () => {
  return (
    // Reduced padding-top (pt-8) and padding-bottom (pb-12) to fit more on screen
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-50 via-white to-white pt-8 pb-12 min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          <div className="text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Industry-Oriented <br />
              <span className="bg-gradient-to-r from-[#4f46e5] to-[#db2777] bg-clip-text text-transparent">
                IT Training for Real Careers
              </span>
            </h1>
            <p className="mt-4 text-base text-gray-600 max-w-lg leading-relaxed">
              Master the most in-demand technologies with our industry-led courses and kickstart your professional journey with confidence.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-[#4f46e5] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#4338ca] transition-all shadow-md text-sm">
                Enquire Now
              </button>
              <button className="border-2 border-purple-200 text-[#4f46e5] px-6 py-3 rounded-xl font-bold hover:bg-purple-50 transition-all text-sm">
                Book Free Demo
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-10"></div>
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-100 aspect-video flex items-center justify-center">
               <p className="text-purple-300 font-medium italic text-sm">Image Placeholder</p>
            </div>
          </div>
        </div>

        {/* Features Row - Reduced top margin (mt-12) and smaller padding */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { title: 'Expert Trainers', icon: '🎓' },
            { title: 'Job-Oriented Courses', icon: '💼' },
            { title: 'Practical Learning', icon: '💻' },
            { title: 'Placement Support', icon: '🚀' },
            { title: 'Trusted by Colleges', icon: '🏛️' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-purple-50 hover:border-purple-200 transition-all text-center group">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="font-bold text-gray-800 text-xs uppercase tracking-wider">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;