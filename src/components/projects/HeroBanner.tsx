"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

type HeroBannerProps = {
  headline: string;
  highlightWords: string[];
  gradientStyle: string;
  image: string;
  title: string;
  githubUrl?: string;
  liveUrl?: string;
};

function highlightHeadline(headline: string, words: string[]) {
  let result = headline;
  const parts: { text: string; highlight: boolean }[] = [];
  let remaining = headline;

  const sortedWords = [...words].sort((a, b) => b.length - a.length);

  for (const word of sortedWords) {
    const idx = remaining.toLowerCase().indexOf(word.toLowerCase());
    if (idx !== -1) {
      if (idx > 0) parts.push({ text: remaining.slice(0, idx), highlight: false });
      parts.push({ text: remaining.slice(idx, idx + word.length), highlight: true });
      remaining = remaining.slice(idx + word.length);
    }
  }
  if (remaining) parts.push({ text: remaining, highlight: false });

  if (parts.length === 0) return [{ text: headline, highlight: false }];
  return parts;
}

export default function HeroBanner({
  headline,
  highlightWords,
  gradientStyle,
  image,
  title,
  githubUrl,
  liveUrl,
}: HeroBannerProps) {
  const parts = highlightHeadline(headline, highlightWords);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative rounded-2xl overflow-hidden border border-white/[0.08] mb-24"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: gradientStyle }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6">
            {parts.map((part, i) =>
              part.highlight ? (
                <span key={i} className="text-[#3B82F6]">
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </h2>

          <div className="flex flex-wrap gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.06] border border-white/[0.1] text-sm text-zinc-300 hover:bg-white/[0.1] hover:scale-[1.02] transition-all"
              >
                <Github className="w-4 h-4" />
                View Source
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-sm text-[#60A5FA] hover:bg-[#3B82F6]/20 hover:scale-[1.02] transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {!githubUrl && !liveUrl && (
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-sm text-zinc-500">
                Case Study
              </span>
            )}
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden border border-white/[0.1] bg-[#0F0F11] shadow-2xl">
          <Image
            src={image}
            alt={`${title} showcase`}
            width={800}
            height={500}
            className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </motion.div>
  );
}
