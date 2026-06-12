import type { FolderNode } from "@/types/project";
import { File, Folder } from "lucide-react";

type FolderTreeProps = {
  nodes: FolderNode[];
  depth?: number;
};

function TreeNode({ node, depth = 0 }: { node: FolderNode; depth?: number }) {
  const isFolder = node.type === "folder";
  const Icon = isFolder ? Folder : File;

  return (
    <div style={{ paddingLeft: depth * 20 }}>
      <div className="flex items-start gap-2 py-1.5 group">
        <Icon
          className={`w-4 h-4 shrink-0 mt-0.5 ${
            isFolder ? "text-[#3B82F6]/70" : "text-zinc-600"
          }`}
        />
        <div className="min-w-0">
          <span
            className={`text-sm font-mono ${
              isFolder ? "text-zinc-300" : "text-zinc-400"
            }`}
          >
            {node.name}
          </span>
          {node.description && (
            <span className="text-xs text-zinc-600 ml-2 hidden sm:inline">
              — {node.description}
            </span>
          )}
        </div>
      </div>
      {node.children?.map((child, i) => (
        <TreeNode key={`${child.name}-${i}`} node={child} depth={depth + 1} />
      ))}
    </div>
  );
}

export default function FolderTree({ nodes, depth = 0 }: FolderTreeProps) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0c0c0e] p-5 md:p-6 font-mono text-sm overflow-x-auto">
      {nodes.map((node, i) => (
        <TreeNode key={`${node.name}-${i}`} node={node} depth={depth} />
      ))}
    </div>
  );
}
