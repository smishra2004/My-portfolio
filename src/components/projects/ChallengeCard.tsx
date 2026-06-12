"use client";

import { AlertCircle, AlertTriangle, CheckCircle2 } from "lucide-react";
import type { ChallengeItem } from "@/types/project";

type ChallengeCardProps = ChallengeItem;

const stateConfig = {
  error: {
    icon: AlertCircle,
    border: "border-red-500/30",
    bg: "bg-red-500/[0.04]",
    iconColor: "text-red-400",
    accent: "bg-red-500",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-amber-500/30",
    bg: "bg-amber-500/[0.04]",
    iconColor: "text-amber-400",
    accent: "bg-amber-500",
  },
  success: {
    icon: CheckCircle2,
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/[0.04]",
    iconColor: "text-emerald-400",
    accent: "bg-emerald-500",
  },
};

export default function ChallengeCard({ title, description, state }: ChallengeCardProps) {
  const config = stateConfig[state];
  const Icon = config.icon;

  return (
    <div
      className={`relative p-5 rounded-xl border ${config.border} ${config.bg} hover:scale-[1.01] transition-transform duration-300 overflow-hidden`}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${config.accent}`} />
      <div className="flex items-start gap-3 pl-2">
        <Icon className={`w-5 h-5 ${config.iconColor} shrink-0 mt-0.5`} />
        <div>
          <h3 className="text-sm font-medium text-zinc-200 mb-1.5">{title}</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
