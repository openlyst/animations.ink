"use client";

import Link from "next/link";
import { useI18n } from "~/lib/i18n-context";
import BackgroundOrbs from "~/components/BackgroundOrbs";
import Footer from "~/components/Footer";
import PrivacySection from "~/components/PrivacySection";

const sections = [
  { key: "data_collected", icon: "shield" },
  { key: "local_storage", icon: "database" },
  { key: "how_to_clear", icon: "trash" },
  { key: "third_party", icon: "link" },
  { key: "rights", icon: "check" },
] as const;

export default function PrivacyContent() {
  const { t } = useI18n();

  return (
    <main className="relative min-h-screen bg-[var(--color-bg-primary)]">
      <BackgroundOrbs />

      <div className="relative mx-auto max-w-3xl px-4 pb-20 pt-24 sm:pt-32">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-link)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          {t("not_found.go_home")}
        </Link>

        <div className="mb-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, var(--color-hero-from), var(--color-hero-via), var(--color-hero-to))" }}>
              {t("privacy.title")}
            </span>
          </h1>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            {t("privacy.last_updated")}
          </p>
        </div>

        <p className="mb-12 leading-relaxed text-[var(--color-text-secondary)]">
          {t("privacy.intro")}
        </p>

        <div className="space-y-[16.180340px]">
          {sections.map(({ key, icon }) => (
            <PrivacySection
              key={key}
              sectionKey={key}
              icon={icon}
              interpolation={{
                lang: t("language.code"),
                theme: "theme",
                email: t("contact.email"),
              }}
            />
          ))}

          <PrivacySection sectionKey="contact" icon="mail" interpolation={{ email: t("contact.email") }}>
            <a
              href={`mailto:${t("contact.email")}`}
              className="mt-3 inline-block text-sm text-[var(--color-text-link)] transition-colors hover:text-[var(--color-text-link-hover)]"
            >
              {t("contact.email")}
            </a>
          </PrivacySection>
        </div>
      </div>

      <Footer />
    </main>
  );
}
