"use client";

import { Lightbulb } from "lucide-react";
import type { LearningItem } from "@/types/project";

export default function LearningCard({ title, description }: LearningItem) {
  return (
    <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#3B82F6]/20 hover:bg-[#3B82F6]/[0.03] transition-all duration-300">
      <div className="flex items-start gap-3">
        <Lightbulb className="w-4 h-4 text-[#3B82F6] shrink-0 mt-1" />
        <div>
          <h3 className="text-sm font-medium text-zinc-200 mb-1.5">{title}</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
