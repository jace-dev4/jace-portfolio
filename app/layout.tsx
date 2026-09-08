import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jace — Full-Stack Software Developer",
  description:
    "Jace is a Full-Stack Software Developer specializing in modern web applications, ERP systems, business platforms, dashboards, and database-driven software.",
  keywords: [
    "Jace",
    "Full-Stack Developer",
    "Software Developer",
    "ERP Developer",
    "Next.js Developer",
    "React Developer",
    "Supabase",
    "Business Systems",
    "Nigeria Developer",
  ],
  authors: [{ name: "Jace" }],
  creator: "Jace",
  applicationName: "Jace Portfolio",

  openGraph: {
    title: "Jace — Full-Stack Software Developer",
    description:
      "Full-Stack Software Developer building modern web applications, ERP systems, business platforms, and digital products.",
    type: "website",
    siteName: "Jace",
  },

  twitter: {
    card: "summary",
    title: "Jace — Full-Stack Software Developer",
    description:
      "Full-Stack Software Developer building modern web applications, ERP systems, business platforms, and digital products.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}