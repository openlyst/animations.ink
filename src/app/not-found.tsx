"use client";

import Link from "next/link";
import { useI18n } from "~/lib/i18n-context";

export default function NotFoundPage() {
  const { t } = useI18n();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg-primary)] px-4">
      <div className="text-center">
        <h1 className="mb-2 text-6xl font-bold tracking-tight text-violet-500">
          {t("not_found.title")}
        </h1>
        <p className="mb-2 text-lg text-[var(--color-text-primary)]">
          {t("not_found.subtitle")}
        </p>
        <p className="mb-8 text-sm text-[var(--color-text-secondary)]">
          {t("not_found.description")}
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-6 py-2 text-sm text-[var(--color-text-link)] transition-colors hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-hover)]"
        >
          {t("not_found.go_home")}
        </Link>
      </div>
    </main>
  );
}
