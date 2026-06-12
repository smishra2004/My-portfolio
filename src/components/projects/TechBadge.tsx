import type { TechItem } from "@/types/project";

type TechBadgeProps = {
  tech: TechItem;
  size?: "sm" | "md";
};

export default function TechBadge({ tech, size = "md" }: TechBadgeProps) {
  const sizeClasses = size === "sm"
    ? "px-2 py-1 text-[10px] gap-1.5"
    : "px-3 py-1.5 text-xs gap-2";

  return (
    <span
      className={`inline-flex items-center bg-white/[0.03] border border-white/[0.08] rounded-md text-zinc-400 font-mono hover:border-white/[0.15] hover:text-zinc-300 transition-colors ${sizeClasses}`}
    >
      <img src={tech.src} alt={tech.name} className={size === "sm" ? "w-3 h-3" : "w-4 h-4"} />
      {tech.name}
    </span>
  );
}
