import Link from "next/link";
import { ChevronRight } from "lucide-react";

type ProjectHeaderProps = {
  title: string;
  description: string;
};

export default function ProjectHeader({ title, description }: ProjectHeaderProps) {
  return (
    <header className="pt-32 pb-16">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
        <Link href="/" className="hover:text-zinc-300 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/#projects" className="hover:text-zinc-300 transition-colors">
          Projects
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-zinc-400">{title}</span>
      </nav>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.05] mb-6">
        {title}
      </h1>

      <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl">
        {description}
      </p>
    </header>
  );
}
