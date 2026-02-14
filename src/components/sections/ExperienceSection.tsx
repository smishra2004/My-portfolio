"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// --- EXPERIENCE DATA ---
const experienceData = [
  {
    id: 1,
    role: "Embedded Systems Developer",
    company: "Emertxe Technologies",
    location: "Remote",
    date: "May 2025 - Jul 2025",
    description: [
      "Developed and simulated a microcontroller-based embedded system using Embedded C in MPLAB IDE with a PIC microcontroller, leveraging PICSimulator IDE to validate system logic across multiple operational states.",
      "Programmed timers, CLCD, and LEDs from scratch, simulating various inputs to observe outputs, delays, and error handling using PICSIMLAB.",
      "Implemented state machine logic to handle timing, sensor input, and actuator for automated washing cycles. Gained hands-on experience with embedded C programming, real-time system design and debugging.",
    ],
    tech: ["C", "C++"]
  },
];

const ExperienceSection = () => {
  return (
    <section id= "experience" className="relative z-10 w-full py-32 px-4 md:px-8 lg:px-16 font-sans">
      
      {/* --- HEADER --- */}
      <div className="max-w-4xl mx-auto text-center mb-20 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 flex items-baseline justify-center">
          Experience
          <span className="text-[#F02E8A] ml-1">.</span>
        </h2>
        <p className="text-gray-400 text-lg">My professional journey</p>
      </div>

      {/* --- TIMELINE CONTAINER --- */}
      <div className="max-w-4xl mx-auto relative">
        
        {/* The Vertical Line */}
        {/* Hidden on very small mobile screens, visible from 'sm' upwards */}
        <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-white/10 hidden sm:block"></div>

        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col sm:flex-row items-start group"
            >
              
              {/* The Timeline Dot */}
              <div className="hidden sm:flex absolute left-0 top-6 w-10 justify-center">
                <div className="w-4 h-4 rounded-full border-[3px] border-[#F02E8A] bg-[#05050A] group-hover:bg-[#F02E8A] transition-colors duration-300 shadow-[0_0_15px_rgba(240,46,138,0.5)]"></div>
              </div>

              {/* The Experience Card */}
              <div className="w-full sm:ml-14 p-6 md:p-8 rounded-2xl bg-[#121214] border border-white/5 hover:border-white/10 transition-all duration-300 shadow-xl relative overflow-hidden">
                
                {/* Optional subtle gradient glow inside the card on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F02E8A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Card Header (Title & Date) */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2 relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-mono text-gray-500 shrink-0">
                    {exp.date}
                  </span>
                </div>

                {/* Company & Location */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 relative z-10">
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#F02E8A] hover:underline flex items-center gap-1 font-medium transition-all"
                  >
                    {exp.company}
                    
                  </a>
                  <span></span>
                  <span>{exp.location}</span>
                </div>

                {/* Responsibilities List */}
                <ul className="space-y-3 mb-6 relative z-10">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                      {/* Tiny accent-colored dot for bullets */}
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F02E8A]/70 mt-2 shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {exp.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;