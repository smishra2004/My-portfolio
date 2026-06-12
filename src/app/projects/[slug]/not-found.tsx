import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-[#050508] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-serif text-white mb-4">Project Not Found</h1>
        <p className="text-zinc-500 mb-8">The case study you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-sm text-zinc-300 hover:bg-white/[0.08] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
