export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="overflow-x-hidden scroll-smooth">
      {children}
    </main>
  );
}
