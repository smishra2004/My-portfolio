"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import type { Project } from "@/types/project";
import ProjectNav from "./ProjectNav";
import ProjectHeader from "./ProjectHeader";
import MetadataGrid from "./MetadataGrid";
import HeroBanner from "./HeroBanner";
import SectionLayout from "./SectionLayout";
import ArchitectureCard from "./ArchitectureCard";
import ChallengeCard from "./ChallengeCard";
import DecisionCard from "./DecisionCard";
import LearningCard from "./LearningCard";
import CodeBlock from "./CodeBlock";
import FolderTree from "./FolderTree";

type ProjectDetailProps = {
  project: Project;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="relative min-h-screen bg-[#050508] text-white">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#050508] via-transparent to-[#050508]" />

      <ProjectNav projectTitle={project.title} />

      <article className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-12 pb-32">
        <ProjectHeader title={project.title} description={project.description} />

        <MetadataGrid metadata={project.metadata} techStack={project.techStack} />

        <div className="mt-12">
          <HeroBanner
            headline={project.bannerHeadline}
            highlightWords={project.bannerHighlightWords}
            gradientStyle={project.gradientStyle}
            image={project.image}
            title={project.title}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        </div>

        <SectionLayout id="overview" number="01" title="Why I Built This">
          <p className="text-zinc-400 text-base leading-relaxed mb-6">
            {project.motivation}
          </p>
          <ul className="space-y-3">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                <Sparkles className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </SectionLayout>

        <SectionLayout id="concept" number="02" title="Core Concept">
          <p className="text-zinc-400 text-base leading-relaxed">
            {project.concept}
          </p>
        </SectionLayout>

        <SectionLayout id="architecture" number="03" title="Architecture">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.architecture.map((item, i) => (
              <ArchitectureCard
                key={item.title}
                title={item.title}
                description={item.description}
                index={i}
              />
            ))}
          </div>
        </SectionLayout>

        <SectionLayout id="structure" number="04" title="Folder Structure">
          <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
            Project organization follows a modular layout with clear separation of concerns between layers.
          </p>
          <FolderTree nodes={project.folderStructure} />
        </SectionLayout>

        <SectionLayout id="how-it-works" number="05" title="How It Works">
          <p className="text-zinc-400 text-base leading-relaxed mb-8">
            {project.howItWorks}
          </p>
          <div className="space-y-4">
            {project.codeSnippets.map((snippet) => (
              <CodeBlock
                key={snippet.filename}
                filename={snippet.filename}
                language={snippet.language}
                code={snippet.code}
              />
            ))}
          </div>
        </SectionLayout>

        <SectionLayout id="decisions" number="06" title="Key Decisions">
          <div className="space-y-4">
            {project.decisions.map((decision) => (
              <DecisionCard key={decision.title} {...decision} />
            ))}
          </div>
        </SectionLayout>

        <SectionLayout id="challenges" number="07" title="Challenges">
          <div className="space-y-4">
            {project.challenges.map((challenge) => (
              <ChallengeCard key={challenge.title} {...challenge} />
            ))}
          </div>
        </SectionLayout>

        <SectionLayout id="learnings" number="08" title="Key Learnings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.learnings.map((learning) => (
              <LearningCard key={learning.title} {...learning} />
            ))}
          </div>
        </SectionLayout>

        <div className="pt-16 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider mb-2">
              End of case study
            </p>
            <p className="text-zinc-400 text-sm">
              Explore more projects in the portfolio.
            </p>
          </div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-sm text-zinc-300 hover:bg-white/[0.08] hover:scale-[1.02] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </article>
    </div>
  );
}
