"use client";

import { useI18n } from "~/lib/i18n-context";

export default function ErrorPage({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useI18n();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg-primary)] px-4">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
          {t("error.title")}
        </h1>
        <p className="mb-8 text-[var(--color-text-secondary)]">
          An unexpected error occurred. Please try again.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-6 py-2 text-sm text-[var(--color-text-link)] transition-colors hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-hover)]"
        >
          {t("error.try_again")}
        </button>
      </div>
    </main>
  );
}
