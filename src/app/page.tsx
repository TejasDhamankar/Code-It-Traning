'use client';

import React from 'react';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import PopularCourses from '@/src/components/PopularCourses';
import Footer from '@/src/components/Footer';
import PlacementAssistance from '../components/PlacementAssistance';

/**
 * Main Assembler for the CODE IT Extravagant Home Page.
 * This file brings together the high-end industrial minimalist components.
 */
export default function Home() {
  return (
    <main className="relative min-h-screen bg-white selection:bg-purple-600 selection:text-white">
      
      {/* 1. ARCHITECTURAL NAVIGATION */}
      <Navbar />

      {/* 2. HERO PROTOCOL - Viewport Cover */}
      <Hero />

      {/* 3. POPULAR COURSES ECOSYSTEM - 3D Tilt Interaction */}
      <div id="courses" className="relative z-20">
        <PopularCourses />
      </div>

      <div id='placements' className="relative z-20">
        <PlacementAssistance/>
      </div>


      {/* CSS Utility for Global Selection & Smooth Scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>

    </main>
  );
}