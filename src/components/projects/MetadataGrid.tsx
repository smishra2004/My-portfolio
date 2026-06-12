import type { ProjectMetadata } from "@/types/project";
import TechBadge from "./TechBadge";
import type { TechItem } from "@/types/project";

type MetadataGridProps = {
  metadata: ProjectMetadata;
  techStack: TechItem[];
};

export default function MetadataGrid({ metadata, techStack }: MetadataGridProps) {
  const items = [
    { label: "Type", value: metadata.type },
    { label: "Role", value: metadata.role },
    { label: "Year", value: metadata.year },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden border border-white/[0.06]">
      {items.map((item) => (
        <div key={item.label} className="bg-[#0a0a0c] p-5">
          <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider mb-2">
            {item.label}
          </p>
          <p className="text-sm text-zinc-200">{item.value}</p>
        </div>
      ))}

      <div className="bg-[#0a0a0c] p-5 sm:col-span-2 lg:col-span-1">
        <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider mb-3">
          Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <TechBadge key={tech.name} tech={tech} size="sm" />
          ))}
        </div>
      </div>
    </div>
  );
}
