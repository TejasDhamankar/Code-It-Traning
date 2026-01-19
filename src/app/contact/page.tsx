'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Loader2, 
  Sparkles,
  Building2,
  GraduationCap,
  User,
  AtSign,
  MessageSquare,
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

/**
 * ============================================================================
 * CONTACT PAGE: PREMIUM COMMUNICATION HUB V2.0
 * ----------------------------------------------------------------------------
 * Engineered for high-fidelity lead generation. Features a split architectural
 * layout, spring-loaded input fields, and backend synchronization.
 * ============================================================================
 */

export default function ContactPage() {
  // --- FORM STATE MANAGEMENT ---
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    education: '',
    contact: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // --- EVENT HANDLERS ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', city: '', education: '', contact: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <main className="relative min-h-screen bg-white selection:bg-purple-600 selection:text-white pt-24">
      
      {/* -----------------------------------------------------------------------
        1. HERO SECTION: VISUAL IMPACT
        -----------------------------------------------------------------------
      */}
      <div className="relative h-[45vh] lg:h-[55vh] w-full overflow-hidden rounded-b-[4rem] lg:rounded-b-[6rem] shadow-[0_40px_80px_-20px_rgba(168,85,247,0.15)]">
        <Image 
          src="/images/contact-us.jpg" 
          alt="Contact Code IT Headquarters" 
          fill 
          className="object-cover scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-6 px-6"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
              <Sparkles size={16} className="text-purple-300 animate-pulse" />
              <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">24/7 Global Assistance</span>
            </div>
            <h1 className="text-6xl lg:text-[100px] font-black text-white uppercase tracking-tighter leading-none drop-shadow-2xl">
              Connect <br /> <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent italic">Protocol.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* -----------------------------------------------------------------------
        2. CONTENT SECTION: INFO & FORM SPLIT
        -----------------------------------------------------------------------
      */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start"
        >
          
          {/* LEFT COLUMN: CONTACT DETAILS & MAP (Col Span 5) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-16">
            <div className="space-y-6">
              <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter">Our <br /> Command Center.</h2>
              <div className="h-1.5 w-24 bg-purple-600 rounded-full" />
              <p className="text-xl text-gray-400 font-medium italic leading-relaxed">
                Reach out to our specialized mentors or visit our flagship IT training hub in Pune.
              </p>
            </div>

            <div className="space-y-10">
              <ContactDetail icon={MapPin} title="Office Address" content="Office No. 33, 3rd Floor, Mata Vaishnavir Complex, Shewalewadi, Pune" />
              <ContactDetail icon={Phone} title="Direct Line" content="+91 73219 25506" />
              <ContactDetail icon={Mail} title="Institutional Email" content="codeit@example.com" />
            </div>

            {/* Premium Map Embed */}
            <div className="relative h-80 w-full rounded-[3.5rem] overflow-hidden border-[12px] border-white shadow-[0_40px_80px_rgba(0,0,0,0.08)] group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.568463870311!2d73.9634725!3d18.5033333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c2226875865d%3A0xe54d241d7d079374!2sShewalewadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716123456789!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(0.95)' }} 
                allowFullScreen={false} 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-purple-900/5 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: THE PREMIUM FORM (Col Span 7) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 bg-white rounded-[4rem] p-12 lg:p-20 border border-purple-50 shadow-[0_50px_100px_-30px_rgba(168,85,247,0.1)] relative overflow-hidden"
          >
            {/* Form Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-[100px] -z-10 opacity-50" />
            
            <h3 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-16">Initialize Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <InputField icon={User} type="text" name="name" label="Your Full Name" value={formData.name} onChange={handleChange} required />
                <InputField icon={Building2} type="text" name="city" label="Current City" value={formData.city} onChange={handleChange} required />
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <InputField icon={GraduationCap} type="text" name="education" label="Education Qualification" value={formData.education} onChange={handleChange} required />
                <InputField icon={Phone} type="tel" name="contact" label="Contact Number" value={formData.contact} onChange={handleChange} required />
              </div>
              <InputField icon={AtSign} type="email" name="email" label="Institutional Email" value={formData.email} onChange={handleChange} required />
              <InputField icon={MessageSquare} type="textarea" name="message" label="Inquiry Message" value={formData.message} onChange={handleChange} required />

              <div className="relative pt-6">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="group relative w-full py-8 rounded-[2rem] bg-gray-900 text-white font-black text-xs uppercase tracking-[0.6em] overflow-hidden shadow-2xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="relative z-10 flex items-center justify-center gap-6">
                    {isSubmitting ? <Loader2 size={22} className="animate-spin" /> : <Send size={22} />}
                    Connect With Us
                  </span>
                </button>

                {/* Form Status Messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="absolute top-full left-0 w-full mt-6 p-6 rounded-[2rem] bg-green-50 border border-green-100 text-green-600 text-[10px] font-black text-center uppercase tracking-widest flex items-center justify-center gap-4 shadow-sm"
                    >
                      <CheckCircle2 size={20} /> Career Protocol Successfully Initialized!
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="absolute top-full left-0 w-full mt-6 p-6 rounded-[2rem] bg-red-50 border border-red-100 text-red-600 text-[10px] font-black text-center uppercase tracking-widest flex items-center justify-center gap-4 shadow-sm"
                    >
                      <AlertCircle size={20} /> System Error. Please Check Connection.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

        </motion.div>
      </div>
      
      {/* GLOBAL ANIMATION STYLES */}
      <style jsx global>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 25s ease-in-out infinite alternate;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>

    </main>
  );
}

/**
 * ============================================================================
 * HELPER COMPONENTS
 * ============================================================================
 */

const ContactDetail = ({ icon: Icon, title, content }: any) => (
  <div className="flex items-start gap-8 group">
    <div className="w-16 h-16 rounded-[1.5rem] bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-gray-900 group-hover:text-white transition-all duration-700 shadow-sm">
      <Icon size={28} />
    </div>
    <div className="pt-2">
      <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-2">{title}</h4>
      <p className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">{content}</p>
    </div>
  </div>
);

const InputField = ({ icon: Icon, type, name, label, value, onChange, required }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const Component = type === 'textarea' ? 'textarea' : 'input';
  const hasValue = value.length > 0;

  return (
    <div className="relative group">
      <div className={`absolute left-0 top-5 text-gray-400 transition-colors duration-500 ${isFocused || hasValue ? 'text-purple-600' : ''}`}>
        <Icon size={22} />
      </div>
      <Component
        type={type !== 'textarea' ? type : undefined}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={type === 'textarea' ? 4 : undefined}
        className={`w-full pl-10 pr-4 py-5 bg-transparent border-b border-gray-100 text-gray-900 font-bold placeholder-transparent focus:outline-none focus:border-purple-600 transition-all resize-none ${isFocused || hasValue ? 'border-purple-600' : ''}`}
        placeholder={label}
      />
      <label 
        className={`absolute left-10 transition-all duration-500 pointer-events-none font-black uppercase tracking-widest ${
          isFocused || hasValue 
            ? '-top-4 text-[9px] text-purple-600' 
            : 'top-5 text-[11px] text-gray-400'
        }`}
      >
        {label}
      </label>
      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-700 ${isFocused ? 'w-full' : 'w-0'}`} />
    </div>
  );
};