export default function UniversityLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* TODO: Add university sidebar/nav */}
      <main className="max-w-7xl mx-auto">{children}</main>
    </div>
  );
}
