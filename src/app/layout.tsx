import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CommandPalette from "@/components/layout/CommandPalette";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sneha Pal — Full Stack Developer & CS Student",
  description:
    "Portfolio of Sneha Pal — Software engineer student specializing in full-stack architecture, machine learning, and developer environments. Explore selected work, case studies, and career blogs.",
  openGraph: {
    title: "Sneha Pal — Full Stack Developer & CS Student",
    description:
      "Software engineer portfolio specializing in NestJS, Next.js, FastAPI, and ML systems.",
    type: "website",
    locale: "en_US",
    siteName: "Sneha Pal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sneha Pal — Full Stack Developer & CS Student",
    description:
      "Software engineer portfolio specializing in NestJS, Next.js, FastAPI, and ML systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
      style={{ colorScheme: "light dark" }}
      suppressHydrationWarning
    >
      <head />
      <body className="font-sans bg-bg-primary text-text-primary min-h-screen">
        {children}
        <CommandPalette />
      </body>
    </html>
  );
}
