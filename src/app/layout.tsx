import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tayyab | Full Stack Developer",
  description: "Passionate developer crafting exceptional web experiences with modern technologies. Specializing in React, Node.js, and scalable cloud solutions.",
  keywords: ["Tayyab", "Full Stack Developer", "React", "Node.js", "Next.js", "TypeScript", "Web Developer", "Software Engineer"],
  authors: [{ name: "Muhammad Tayyab" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Tayyab | Full Stack Developer",
    description: "Passionate developer crafting exceptional web experiences with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0a0a0f] text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
