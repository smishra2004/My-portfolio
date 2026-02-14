"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Swapped Mail out for Copy and Check icons
import { ArrowRight, BrainCircuit, Copy, Check } from 'lucide-react';

export default function Hero() {
  // State to manage the copy icon feedback
  const [copied, setCopied] = useState(false);

  // Function to copy email to clipboard and show the checkmark for 2 seconds
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shubham.smishra2004@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Function to smoothly scroll to the Contact section (Footer)
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 md:px-6">

      {/* 1. GREETING */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg md:text-xl text-gray-400 mb-4 font-medium tracking-wide"
      >
        Hey, I'm
      </motion.p>

      {/* 2. MAIN HEADING (With Atmospheric Glow) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative mb-6"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-white/10 blur-[40px] rounded-[100%] pointer-events-none" />
        <h1 className="relative z-10 text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-md">
          Shubham Mishra
        </h1>
      </motion.div>

      {/* 3. ROLE BADGE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121214]/80 border border-white/10 backdrop-blur-md mb-8 shadow-2xl relative z-10"
      >
        <BrainCircuit className="w-4 h-4 text-[#8B5CF6]" />
        <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">
          AI / ML Engineer
        </span>
      </motion.div>

      {/* 4. TAGLINE (With Colorful Highlights) */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed relative z-10"
      >
        I build{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
          intelligent systems
        </span>{" "}
        and{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
          scalable AI solutions
        </span>{" "}
        that create real-world impact and drive innovation.
      </motion.p>

      {/* 5. CTA ROW */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center gap-8 relative z-10"
      >
        
        {/* Primary Button - Now smooth scrolls to #contact */}
        <button 
          onClick={scrollToContact}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold transition-all hover:scale-105 hover:bg-gray-100 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
        >
          <span className="relative z-10 text-base">Let's Connect</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Clean Email Text with Copy Icon */}
        <div className="flex items-center gap-3 text-gray-400">
          <span className="font-medium tracking-wide">
            shubham.smishra2004@gmail.com
          </span>
          <button
            onClick={handleCopyEmail}
            className="p-2 rounded-md hover:bg-white/10 hover:text-white transition-colors"
            title="Copy email to clipboard"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

      </motion.div>

    </section>
  );
}