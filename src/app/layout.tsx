import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shadow Learning - Learn English with Movies & TV Shows",
    template: "%s | Shadow Learning",
  },
  description:
    "Master English pronunciation by shadowing real TV shows and movies. Watch clips, read subtitles, speak along, and get instant pronunciation feedback.",
  keywords: [
    "learn English",
    "English pronunciation",
    "shadow learning",
    "learn English with movies",
    "learn English with TV shows",
    "pronunciation practice",
    "English speaking practice",
    "language learning app",
    "ESL learning tool",
    "English fluency",
  ],
  authors: [{ name: "Shadow Learning" }],
  openGraph: {
    title: "Shadow Learning - Learn English with Movies & TV Shows",
    description:
      "Master English pronunciation by shadowing real TV shows and movies.",
    url: "https://shadow-learning.vercel.app",
    siteName: "Shadow Learning",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
