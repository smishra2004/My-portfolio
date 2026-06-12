"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

type ProjectNavProps = {
  projectTitle: string;
};

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Concept", href: "#concept" },
  { label: "Architecture", href: "#architecture" },
  { label: "Structure", href: "#structure" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Decisions", href: "#decisions" },
  { label: "Challenges", href: "#challenges" },
  { label: "Learnings", href: "#learnings" },
];

export default function ProjectNav({ projectTitle }: ProjectNavProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-4xl"
    >
      <div className="flex items-center justify-between gap-4 px-4 py-2.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors shrink-0"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Projects</span>
        </Link>

        <div className="hidden md:flex items-center gap-1 overflow-x-auto scrollbar-none">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs text-zinc-500 hover:text-zinc-200 transition-colors whitespace-nowrap rounded-lg hover:bg-white/[0.05]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <span className="text-xs text-zinc-600 font-mono truncate max-w-[120px] sm:max-w-[200px]">
          {projectTitle}
        </span>
      </div>
    </motion.nav>
  );
}
