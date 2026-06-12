"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type CodeBlockProps = {
  filename: string;
  language: string;
  code: string;
};

const KEYWORDS: Record<string, string[]> = {
  python: ["def", "return", "import", "from", "class", "if", "else", "elif", "for", "in", "with", "as", "try", "except", "True", "False", "None", "and", "or", "not", "async", "await"],
  json: ["true", "false", "null"],
  yaml: ["true", "false", "null"],
};

function highlightCode(code: string, language: string): React.ReactNode[] {
  const keywords = KEYWORDS[language] ?? [];
  const lines = code.split("\n");

  return lines.map((line, lineIdx) => {
    const tokens: React.ReactNode[] = [];
    let remaining = line;
    let key = 0;

    while (remaining.length > 0) {
      let matched = false;

      for (const kw of keywords) {
        if (remaining.startsWith(kw) && /[\s(,.\[\]:=]/.test(remaining[kw.length] ?? " ")) {
          tokens.push(
            <span key={`${lineIdx}-${key++}`} className="text-[#C792EA]">
              {kw}
            </span>
          );
          remaining = remaining.slice(kw.length);
          matched = true;
          break;
        }
      }

      if (matched) continue;

      const strMatch = remaining.match(/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/);
      if (strMatch) {
        tokens.push(
          <span key={`${lineIdx}-${key++}`} className="text-[#C3E88D]">
            {strMatch[0]}
          </span>
        );
        remaining = remaining.slice(strMatch[0].length);
        continue;
      }

      const commentMatch = remaining.match(/^(\#.*|\/\/.*)/);
      if (commentMatch) {
        tokens.push(
          <span key={`${lineIdx}-${key++}`} className="text-zinc-600">
            {commentMatch[0]}
          </span>
        );
        remaining = remaining.slice(commentMatch[0].length);
        continue;
      }

      const numMatch = remaining.match(/^(\d+\.?\d*)/);
      if (numMatch) {
        tokens.push(
          <span key={`${lineIdx}-${key++}`} className="text-[#F78C6C]">
            {numMatch[0]}
          </span>
        );
        remaining = remaining.slice(numMatch[0].length);
        continue;
      }

      const decMatch = remaining.match(/^(@\w+)/);
      if (decMatch) {
        tokens.push(
          <span key={`${lineIdx}-${key++}`} className="text-[#FFCB6B]">
            {decMatch[0]}
          </span>
        );
        remaining = remaining.slice(decMatch[0].length);
        continue;
      }

      tokens.push(
        <span key={`${lineIdx}-${key++}`} className="text-zinc-300">
          {remaining[0]}
        </span>
      );
      remaining = remaining.slice(1);
    }

    return (
      <span key={lineIdx}>
        {tokens}
        {lineIdx < lines.length - 1 && "\n"}
      </span>
    );
  });
}

export default function CodeBlock({ filename, language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0c0c0e] group hover:border-white/[0.12] transition-colors">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          </div>
          <span className="text-xs font-mono text-zinc-500">{filename}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.05] transition-all"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="p-4 md:p-5 overflow-x-auto text-sm leading-relaxed font-mono">
        <code>{highlightCode(code, language)}</code>
      </pre>
    </div>
  );
}
