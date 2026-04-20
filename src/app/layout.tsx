import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sakshee Durshettiwar – Product Designer",
  description: "Product Designer with 5+ years leading 0→1 design across B2B SaaS, healthtech, and developer tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-black">
        <Navbar />
        <main className="flex-1 pt-[52px]">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
