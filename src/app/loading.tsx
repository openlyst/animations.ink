"use client";

import { useI18n } from "~/lib/i18n-context";

export default function LoadingPage() {
  const { t } = useI18n();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg-primary)]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-violet-500 border-t-transparent" />
        <p className="text-sm text-[var(--color-text-muted)]">{t("loading.text")}</p>
      </div>
    </main>
  );
}
