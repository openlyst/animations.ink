import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { I18nProvider } from "~/lib/i18n-context";
import { ThemeProvider } from "~/lib/theme-context";
import Script from "next/script";

const siteUrl = "https://animations.ink";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "animations.ink",
  description: "A curated collection of projects by HttpAnimations.",
  url: siteUrl,
  author: {
    "@type": "Organization",
    name: "HttpAnimations",
    url: "https://gitlab.com/HttpAnimations",
  },
  mainEntity: [
    {
      "@type": "SoftwareApplication",
      name: "vidlatte.ink",
      applicationCategory: "Multimedia",
      description:
        "Plex-like platform for AI. Self-hosted image generation with ComfyUI and LLM chat.",
      url: "https://vidlatte.ink",
    },
    {
      "@type": "SoftwareApplication",
      name: "animations.ink",
      applicationCategory: "WebApplication",
      description:
        "Project showcase and landing page. Built with Next.js and Tailwind.",
      url: "https://animations.ink",
    },
    // {
    //   "@type": "SoftwareApplication",
    //   name: "beatsabermapping.site",
    //   applicationCategory: "Multimedia",
    //   description:
    //     "Auto mapping tool for Beat Saber PC mods. Generate beatmaps automatically from audio.",
    //   url: "https://beatsabermappingsite-5ca70d.gitlab.io/",
    // },
    {
      "@type": "SoftwareApplication",
      name: "klit.animations.ink",
      applicationCategory: "WebApplication",
      description:
        "Modern frontend for image boards. Clean design, smooth animations, and safe browsing by default.",
      url: "https://klit.animations.ink/",
    },
    {
      "@type": "SoftwareApplication",
      name: "openlyst.ink",
      applicationCategory: "WebApplication",
      description:
        "Free & open-source apps for privacy, freedom, and community. Creators of DouDou music player.",
      url: "https://openlyst.ink",
    },
    {
      "@type": "SoftwareApplication",
      name: "Pico Neo 2 WiVRn",
      applicationCategory: "GameApplication",
      description:
        "Native VR client for Pico Neo 2. Stream PCVR gameplay over WiFi or USB to Linux.",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "animations.ink — HttpAnimations Project Showcase",
    template: "%s | animations.ink",
  },
  description:
    "A curated collection of projects by HttpAnimations. Explore vidlatte.ink, BeatSaberMappingSite, and more innovative open-source tools for AI, creativity, and self-hosting.",
  keywords: [
    "HttpAnimations",
    "open source",
    "projects",
    "vidlatte",
    "AI tools",
    "self-hosted",
    "Beat Saber",
    "image boards",
    "portfolio",
  ],
  authors: [{ name: "HttpAnimations", url: "https://gitlab.com/HttpAnimations" }],
  creator: "HttpAnimations",
  publisher: "HttpAnimations",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "animations.ink — HttpAnimations Project Showcase",
    description:
      "A curated collection of projects by HttpAnimations. Explore vidlatte.ink, BeatSaberMappingSite, and more innovative open-source tools.",
    url: siteUrl,
    siteName: "animations.ink",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "animations.ink — HttpAnimations Project Showcase",
    description:
      "A curated collection of projects by HttpAnimations. Explore vidlatte.ink and more innovative open-source tools.",
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  alternates: {
    canonical: siteUrl,
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem("theme");if(!t){t=matchMedia("(prefers-color-scheme:light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){}`}
        </Script>
        <ThemeProvider>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          /* eslint-disable-next-line @eslint-react/dom-no-dangerously-set-innerhtml -- standard JSON-LD pattern, see https://nextjs.org/docs/app/guides/json-ld */
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
