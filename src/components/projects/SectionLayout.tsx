"use client";

import { motion } from "framer-motion";
import StickySidebar from "./StickySidebar";

type SectionLayoutProps = {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionLayout({
  id,
  number,
  title,
  children,
  className = "",
}: SectionLayoutProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16 py-16 border-t border-white/[0.06] scroll-mt-28 ${className}`}
    >
      <StickySidebar number={number} title={title} id={id} />
      <div className="min-w-0">{children}</div>
    </motion.section>
  );
}
