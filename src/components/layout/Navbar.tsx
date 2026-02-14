"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- NAVIGATION DATA ---
const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Resume", id: "resume" },
  { name: "Contact", id: "contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  // --- SCROLL SPY LOGIC ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // --- SMOOTH SCROLL CLICK HANDLER ---
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100]">
      {/* CHANGED: 
        1. bg-[#121214]/80 -> bg-white/5 (Much lighter and more transparent)
        2. backdrop-blur-lg -> backdrop-blur-xl (Stronger frosted glass effect)
      */}
      <ul className="flex items-center justify-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
        
        {navItems.map((item) => (
          <li key={item.id} className="relative flex">
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              
              {/* --- THE SLIDING WINDOW --- */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="active-pill"
                  /* CHANGED: Brightened the active pill slightly to bg-white/15 so it stands out against the lighter navbar */
                  className="absolute inset-0 rounded-full bg-white/15 border border-white/10 shadow-sm"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
              
              <span className="relative z-10">{item.name}</span>
            </a>
          </li>
        ))}
        
      </ul>
    </nav>
  );
}