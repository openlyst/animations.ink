import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "animations.ink",
  description: "A curated collection of projects by HttpAnimations. Explore vidlatte.ink and more innovative open-source tools.",
  keywords: ["HttpAnimations", "open source", "projects", "vidlatte", "AI tools", "self-hosted"],
  authors: [{ name: "HttpAnimations" }],
  openGraph: {
    title: "animations.ink - HttpAnimations Project Showcase",
    description: "A curated collection of projects by HttpAnimations. Explore vidlatte.ink and more innovative open-source tools.",
    type: "website",
    url: "https://animations.ink",
  },
  twitter: {
    card: "summary_large_image",
    title: "animations.ink - HttpAnimations Project Showcase",
    description: "A curated collection of projects by HttpAnimations. Explore vidlatte.ink and more innovative open-source tools.",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
