"use client";

import { useState } from "react";
import { useI18n } from "~/lib/i18n-context";

const CONSENT_KEY = "consent";

export default function ConsentBanner() {
  const { t } = useI18n();
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem(CONSENT_KEY) === "1";
    } catch {
      return true;
    }
  });

  const dismiss = () => {
    try { localStorage.setItem(CONSENT_KEY, "1"); } catch { /* noop */ }
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div className="consent-banner fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-3 shadow-lg shadow-black/10">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {t("consent.banner")}
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-[10px] border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-5 py-2 text-sm text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-hover)]"
        >
          {t("consent.got_it")}
        </button>
      </div>
    </div>
  );
}
