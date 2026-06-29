"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "~/lib/i18n-context";
import BackgroundOrbs from "~/components/BackgroundOrbs";
import Footer from "~/components/Footer";
import ConsentBanner from "~/components/ConsentBanner";

const projects = [
  {
    id: "vidlatte",
    name: "vidlatte.ink",
    url: "https://vidlatte.ink",
    repo: "https://gitlab.com/HttpAnimations/vidlatte",
    descKey: "projects.vidlatte.description",
    favicon: "https://vidlatte.ink/apple-touch-icon.png",
  },
  {
    id: "animations",
    name: "animations.ink",
    url: "https://animations.ink",
    repo: "https://gitlab.com/HttpAnimations/animations.ink",
    descKey: "projects.animations.description",
    favicon: "https://animations.ink/favicon.ico",
  },
  {
    id: "klit",
    name: "klit.animations.ink",
    url: "https://klit.animations.ink/",
    repo: "https://gitlab.com/HttpAnimations/open621",
    descKey: "projects.klit.description",
    favicon: "https://klit.animations.ink/icon.svg",
  },
  {
    id: "openlyst",
    name: "openlyst.ink",
    url: "https://openlyst.ink",
    repo: "https://gitlab.com/Openlyst/",
    descKey: "projects.openlyst.description",
    favicon: "https://openlyst.ink/favicon.svg",
  },
  {
    id: "piconeo2-wivrn",
    name: "Pico Neo 2 WiVRn",
    url: "https://gitlab.com/HttpAnimations/piconeo2-wivrn",
    repo: "https://gitlab.com/HttpAnimations/piconeo2-wivrn",
    descKey: "projects.piconeo2_wivrn.description",
    favicon: "/piconeo2-wivrn.svg",
  },
];

export default function HomePage() {
  const { t } = useI18n();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--color-bg-primary)]">
      <BackgroundOrbs />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center px-4 pt-20">
        <div className="hero-wrapper text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-7xl">
            <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, var(--color-hero-from), var(--color-hero-via), var(--color-hero-to))" }}>
              animations
            </span>
            <span className="text-violet-500">.ink</span>
          </h1>

          <p className="hero-tagline mx-auto max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] sm:text-xl">
            {t("hero.tagline", { author: "HttpAnimations" })}
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative px-4 pb-20 pt-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-[16.180340px] md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="group rounded-[16.180340px] border border-[var(--color-border)] bg-[var(--color-bg-card)] p-[26.180340px] transition-all duration-300 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-hover)]">

                  <div className="relative">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-[10px] border border-[var(--color-border)] bg-[var(--color-bg-raised)] transition-colors duration-300 group-hover:border-[var(--color-border-hover)]">
                        <Image
                          src={project.favicon}
                          alt=""
                          width={20}
                          height={20}
                          className="h-5 w-5"
                        />
                      </div>
                      <h3 className="text-lg font-medium text-[var(--color-text-primary)]">
                        {project.name}
                      </h3>
                    </div>

                    <p className="mb-6 leading-relaxed text-[var(--color-text-secondary)]">
                      {t(project.descKey)}
                    </p>

                    <div className="flex items-center gap-2">
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-text-link)] transition-colors hover:text-[var(--color-text-link-hover)]"
                      >
                        {t("projects.live_site")}
                      </Link>
                      <span className="text-[var(--color-text-muted)]">·</span>
                      <Link
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-link)]"
                      >
                        {t("projects.source")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <ConsentBanner />
    </main>
  );
}
