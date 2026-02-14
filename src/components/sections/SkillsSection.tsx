"use client";

import React from "react";
// Import Variants to satisfy TypeScript
import { motion, Variants } from "framer-motion";

// --- EXPANDED SKILLS DATA (32 Icons for a denser grid) ---
const skillsData = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Prisma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Ubuntu", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
  { name: "Nginx", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Redux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "GraphQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Vercel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "Bash", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { name: "Jest", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
  { name: "Webpack", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
  { name: "Babel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" },
  { name: "Markdown", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" },
  { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

// --- PARENT CONTAINER VARIANT ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Rapid-fire delay for each icon
    },
  },
};

// --- CHILD ITEM VARIANT (The Fix) ---
// By ensuring BOTH hidden and show are structured as functions that accept (index), 
// TypeScript and Framer Motion will perfectly sync the custom prop.
const itemVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    // Alternates left (-75px) and right (75px) entry points
    x: index % 2 === 0 ? -75 : 75,
    y: 20,
    scale: 0.8,
  }),
  show: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  }),
};

const SkillsSection = () => {
  return (
    <section id= "skills" className="relative z-10 w-full py-32 px-4 flex flex-col items-center justify-center overflow-hidden">
      
      {/* HEADER */}
      <div className="text-center mb-16 flex flex-col items-center">
        <span className="text-gray-400 tracking-[0.3em] text-xs font-semibold uppercase mb-4 block">
          MY SKILLS
        </span>
        <h2 className="text-5xl md:text-6xl font-serif text-white tracking-tight">
          The Hidden{" "}
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text italic pr-2">
            Gears
          </span>
        </h2>
      </div>

      {/* ICON GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto"
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            custom={index} 
            variants={itemVariants}
            className="w-14 h-14 md:w-16 md:h-16 bg-[#161618] border border-white/5 rounded-2xl flex items-center justify-center shadow-lg hover:bg-[#1f1f22] hover:border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer group relative"
          >
            {/* Hover Tooltip (Optional but looks great) */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 bg-[#2C2C2E] text-white text-xs px-2 py-1 rounded shadow-xl pointer-events-none z-20 whitespace-nowrap">
              {skill.name}
            </span>

            {/* Icon */}
            <img
              src={skill.src}
              alt={skill.name}
              className="w-8 h-8 md:w-10 md:h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default SkillsSection;