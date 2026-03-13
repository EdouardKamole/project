import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scholarvia - Connecting Students to Scholarships Worldwide",
  description: "Find and apply for scholarships from top universities around the world.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
