export type TechItem = {
  name: string;
  src: string;
};

export type ProjectMetadata = {
  type: string;
  role: string;
  year: string;
};

export type ArchitectureItem = {
  title: string;
  description: string;
};

export type ChallengeItem = {
  title: string;
  description: string;
  state: "error" | "warning" | "success";
};

export type DecisionItem = {
  title: string;
  description: string;
  rationale: string;
};

export type LearningItem = {
  title: string;
  description: string;
};

export type CodeSnippet = {
  filename: string;
  language: string;
  code: string;
};

export type FolderNode = {
  name: string;
  type: "file" | "folder";
  description?: string;
  children?: FolderNode[];
};

export type Project = {
  id: number;
  slug: string;
  tagline: string;
  title: string;
  description: string;
  gradientStyle: string;
  accentColor: string;
  textAccent: string;
  bullets: string[];
  techStack: TechItem[];
  image: string;
  metadata: ProjectMetadata;
  githubUrl?: string;
  liveUrl?: string;
  motivation: string;
  concept: string;
  howItWorks: string;
  architecture: ArchitectureItem[];
  folderStructure: FolderNode[];
  codeSnippets: CodeSnippet[];
  decisions: DecisionItem[];
  challenges: ChallengeItem[];
  learnings: LearningItem[];
  bannerHeadline: string;
  bannerHighlightWords: string[];
};
