import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CanvasBackground from "@/components/CanvasBackground";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Devangi — Senior UI/UX Designer & Interactive Architect",
  description: "Explore Devangi's animated portfolio featuring Fintech Mobile Apps, Enterprise SaaS Dashboards, Figma Design Systems, and interactive micro-interactions.",
  keywords: ["UI/UX Designer", "Devangi Portfolio", "Framer Motion", "Figma Design System", "Mobile UX", "Next.js Portfolio"],
  authors: [{ name: "Devangi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#090a0f] text-slate-100 antialiased selection:bg-indigo-600 selection:text-white relative min-h-screen">
        <CanvasBackground />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
