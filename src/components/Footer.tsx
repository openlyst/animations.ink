"use client";

import Link from "next/link";
import { useI18n } from "~/lib/i18n-context";
import LanguagePicker from "~/components/LanguagePicker";
import ThemeSwitcher from "~/components/ThemeSwitcher";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { t } = useI18n();

  return (
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
  );
}
