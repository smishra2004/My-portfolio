"use client";

import { GitBranch } from "lucide-react";
import type { DecisionItem } from "@/types/project";

export default function DecisionCard({ title, description, rationale }: DecisionItem) {
  return (
    <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] transition-colors">
      <div className="flex items-start gap-3 mb-3">
        <GitBranch className="w-4 h-4 text-[#3B82F6] shrink-0 mt-1" />
        <h3 className="text-sm font-medium text-zinc-200">{title}</h3>
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed mb-3 pl-7">{description}</p>
      <div className="pl-7 pt-3 border-t border-white/[0.04]">
        <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider mb-1">Rationale</p>
        <p className="text-sm text-zinc-400 leading-relaxed">{rationale}</p>
      </div>
    </div>
  );
}
