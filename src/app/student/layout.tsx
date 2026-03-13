export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* TODO: Add student sidebar/nav */}
      <main className="max-w-7xl mx-auto">{children}</main>
    </div>
  );
}
