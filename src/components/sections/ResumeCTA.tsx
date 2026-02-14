"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const ResumeCTA = () => {
  return (
    // relative z-10 ensures it sits above your space background
    <section id= "resume" className="relative z-10 w-full py-24 px-4 md:px-8 lg:px-16 flex justify-center font-sans">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        // Card Styling: Dark gray background, rounded borders, subtle outline
        className="w-full max-w-4xl bg-[#121214] border border-white/5 rounded-[2rem] p-10 md:p-16 lg:p-20 flex flex-col items-center text-center shadow-2xl relative overflow-hidden group"
      >
        
        {/* Optional subtle glow effect on the card border on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F02E8A]/0 to-[#F02E8A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight relative z-10">
          Want to know more<span className="text-[#F02E8A]">?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl leading-relaxed relative z-10">
          Download my resume for a detailed look at my experience, skills, and education.
        </p>

        {/* Resume Button 
          IMPORTANT: Replace '/resume.pdf' with the actual name of your file in the public folder 
        */}
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          // If you want it to immediately download instead of opening in a new tab, add this attribute:
          // download="Aayush_Bharti_Resume.pdf"
          className="relative z-10 flex items-center gap-2 px-6 py-3.5 bg-[#F02E8A]/10 border border-[#F02E8A]/20 text-[#F02E8A] hover:bg-[#F02E8A]/20 hover:border-[#F02E8A]/40 rounded-xl font-medium transition-all duration-300"
        >
          <FileText size={18} />
          View Resume
        </a>

      </motion.div>
    </section>
  );
};

export default ResumeCTA;