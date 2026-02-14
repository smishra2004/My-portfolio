"use client";

export default function BorderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">

      {/* LEFT STRIP */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-full w-[40px]
        border-r border-neutral-300/40 dark:border-neutral-800/60
        bg-size-[5px_5px] opacity-60 z-0
        bg-[linear-gradient(45deg,var(--color-neutral-300)_12.5%,transparent_12.5%,transparent_50%,var(--color-neutral-300)_50%,var(--color-neutral-300)_62.5%,transparent_62.5%,transparent_100%)]
        dark:bg-[linear-gradient(45deg,var(--color-neutral-800)_12.5%,transparent_12.5%,transparent_50%,var(--color-neutral-800)_50%,var(--color-neutral-800)_62.5%,transparent_62.5%,transparent_100%)]
        "
      />

      {/* RIGHT STRIP */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-full w-[40px]
        border-l border-neutral-300/40 dark:border-neutral-800/60
        bg-size-[5px_5px] opacity-60 z-0
        bg-[linear-gradient(45deg,var(--color-neutral-300)_12.5%,transparent_12.5%,transparent_50%,var(--color-neutral-300)_50%,var(--color-neutral-300)_62.5%,transparent_62.5%,transparent_100%)]
        dark:bg-[linear-gradient(45deg,var(--color-neutral-800)_12.5%,transparent_12.5%,transparent_50%,var(--color-neutral-800)_50%,var(--color-neutral-800)_62.5%,transparent_62.5%,transparent_100%)]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}
