"use client";

type StickySidebarProps = {
  number: string;
  title: string;
  id: string;
};

export default function StickySidebar({ number, title, id }: StickySidebarProps) {
  return (
    <div id={id} className="lg:sticky lg:top-32 lg:self-start scroll-mt-32">
      <span className="block text-xs font-mono text-[#3B82F6]/70 mb-3 tracking-widest">
        {number}
      </span>
      <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight tracking-tight">
        {title}
      </h2>
    </div>
  );
}
