"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "~/lib/i18n-context";
import LanguagePicker from "~/components/LanguagePicker";
import ThemeSwitcher from "~/components/ThemeSwitcher";
import ConsentBanner from "~/components/ConsentBanner";

const CURRENT_YEAR = new Date().getFullYear();

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
];

export default function HomePage() {
  const { t } = useI18n();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--color-bg-primary)]">
      {/* Background gradient orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden max-md:hidden">
        <div className="absolute -left-[20%] -top-[10%] h-[600px] w-[600px] rounded-full blur-[120px]" style={{ backgroundColor: "var(--color-orb-1)" }} />
        <div className="absolute -bottom-[10%] -right-[20%] h-[500px] w-[500px] rounded-full blur-[100px]" style={{ backgroundColor: "var(--color-orb-2)" }} />
      </div>

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

      {/* Footer */}
      <footer className="relative border-t border-[var(--color-border)] px-4 py-10">
        <div className="footer mx-auto flex max-w-5xl flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
            <p className="text-sm text-[var(--color-text-muted)]">
              {t("footer.copyright", { year: CURRENT_YEAR })}
            </p>
            <span className="hidden text-[var(--color-text-muted)] md:inline">·</span>
            <Link
              href="/privacy/"
              className="py-1.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-link-hover)] md:py-0"
            >
              {t("footer.privacy")}
            </Link>
            <span className="hidden text-[var(--color-text-muted)] md:inline">·</span>
            <a
              href={`mailto:${t("contact.email")}`}
              className="py-1.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-link-hover)] md:py-0"
            >
              {t("footer.contact")}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <LanguagePicker />
            <ThemeSwitcher />
            <span className="hidden text-[var(--color-text-muted)] md:inline">·</span>
            <Link
              href="https://gitlab.com/HttpAnimations"
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-link-hover)] md:py-0"
            >
              {t("footer.gitlab")}
            </Link>
          </div>
        </div>
      </footer>

      <ConsentBanner />
    </main>
  );
}
