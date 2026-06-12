"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale }}
      className="max-w-[1400px] mx-auto w-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start cursor-pointer"
      >
        <div className="lg:col-span-7 relative w-full">
          <div className="w-full min-h-[450px] h-auto rounded-2xl overflow-hidden relative shadow-2xl flex flex-col p-6 md:p-10 pr-0 pb-0">
            <div
              aria-hidden="true"
              className="absolute inset-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-105"
              style={{ background: project.gradientStyle }}
            />

            <div className="flex justify-between items-start text-white relative z-10 pr-6 md:pr-10 shrink-0">
              <h3 className="text-xl md:text-2xl font-medium max-w-[90%] leading-snug">
                {project.tagline}
              </h3>
              <ArrowRight className="w-6 h-6 shrink-0 opacity-80 mt-1 ml-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>

            <div className="relative w-full h-auto mt-6 md:mt-10 rounded-2xl overflow-hidden shadow-2xl bg-[#0F0F11] border border-white/10 z-10">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-start space-y-6 pt-2">
          <div className="flex items-center gap-4">
            <div className={`w-6 h-[2px] ${project.accentColor}`} />
            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight group-hover:text-zinc-200 transition-colors">
              {project.title}
            </h2>
          </div>

          <p className="text-gray-400 text-base leading-relaxed">
            {project.description}
          </p>

          <ul className="space-y-3">
            {project.bullets.slice(0, 3).map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                <Sparkles className={`w-5 h-5 ${project.textAccent} shrink-0 mt-0.5`} />
                <span className="leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#121214] border border-white/10 group-hover:border-white/20 transition-colors rounded-lg text-xs text-gray-300 font-mono"
              >
                <img src={tech.src} alt={tech.name} className="w-4 h-4" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

          <span className={`inline-flex items-center gap-2 text-sm ${project.textAccent} font-medium pt-2 group-hover:gap-3 transition-all`}>
            View case study
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative z-10 w-full py-32 px-4 md:px-8 lg:px-16 flex flex-col gap-32 font-sans overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text italic pr-2">
            Projects
          </span>
        </h2>
        <div className="w-24 h-1 bg-white/20 rounded-full" />
      </div>

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectsSection;
