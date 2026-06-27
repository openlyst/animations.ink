"use client";

import Script from "next/script";

export default function GlobalError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
        <Script id="ge-theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem("theme");if(!t){t=matchMedia("(prefers-color-scheme:light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){}`}
        </Script>
        <main className="flex min-h-screen flex-col items-center justify-center px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Critical error
            </h1>
            <p className="mb-8 text-[var(--color-text-secondary)]">
              The application encountered a critical error. Please reload the
              page.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-6 py-2 text-sm text-[var(--color-text-link)] transition-colors hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-hover)]"
            >
              Reload
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
