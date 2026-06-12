"use client";

import { Layers } from "lucide-react";

type ArchitectureCardProps = {
  title: string;
  description: string;
  index: number;
};

export default function ArchitectureCard({ title, description, index }: ArchitectureCardProps) {
  return (
    <div className="group p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 shrink-0 group-hover:scale-105 transition-transform">
          <Layers className="w-4 h-4 text-[#60A5FA]" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-mono text-zinc-600">0{index + 1}</span>
            <h3 className="text-base font-medium text-zinc-100">{title}</h3>
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
