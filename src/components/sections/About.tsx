"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Github, Twitter } from "lucide-react";

export default function About() {
  return (
    <section id= "about" className="relative min-h-screen flex items-center justify-center px-6 py-32">

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-24 items-center">

        {/* LEFT SIDE - TEXT */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="md:pl-16"
        >
          {/* HEADING (FORCED 2 LINES) */}
          <h2 className="text-5xl md:text-4xl font-semibold leading-tight mb-10 max-w-2xl">
            AI/ML Engineer <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Crafting AI That Thinks, One Model at a Time
            </span>
          </h2>

          {/* PARAGRAPHS */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-xl">
            <p>
              I’m Shubham Mishra, an AI/ML engineer building intelligent, agentic systems. From AI agents and RAG pipelines to end-to-end deployments, I design systems that think, act, and scale.
            </p>

            <p>
              I thrive on turning complex data into actionable intelligence and creating autonomous solutions that solve real-world problems.
            </p>

            <p>
              When I’m not experimenting with AI agents or exploring new architectures, I’m learning, innovating, and pushing the boundaries of what AI can do.
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 mt-8 text-gray-400">
  
  {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/in/shubhammishra12/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    <Linkedin className="w-5 h-5" />
  </a>

  {/* GitHub */}
  <a 
    href="https://github.com/smishra2004" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    <Github className="w-5 h-5" />
  </a>

  {/* Twitter / X */}
  <a 
    href="https://x.com/shubham23690181" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    <Twitter className="w-5 h-5" />
  </a>

</div>


        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true, amount: 0.4 }}
      className="flex justify-center"
    >
      <div className="relative">

        {/* DARK SIDE FRAME */}
        <div className="absolute -inset-4 rounded-[32px] bg-black/50"></div>

        {/* SUBTLE INNER BORDER */}
        <div className="absolute inset-0 rounded-[28px] border border-white/10"></div>

        {/* IMAGE CONTAINER */}
        <div className="relative w-[380px] h-[480px] rounded-[28px] overflow-hidden rotate-2 shadow-2xl">
          <Image
            src="/photo.jpeg" // Verify this is in the 'public' folder and perfectly matches the extension
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </motion.div>

      </div>
    </section>
  );
}
