"use client";

import { useI18n } from "~/lib/i18n-context";

function SectionIcon({ icon }: { icon: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-[var(--color-text-muted)]"
    >
      {icon === "shield" && (
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      )}
      {icon === "database" && (
        <>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </>
      )}
      {icon === "trash" && (
        <>
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </>
      )}
      {icon === "link" && (
        <>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </>
      )}
      {icon === "check" && (
        <polyline points="20 6 9 17 4 12" />
      )}
      {icon === "mail" && (
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      )}
      {icon === "mail" && (
        <polyline points="22,6 12,13 2,6" />
      )}
    </svg>
  );
}

function BodyText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p className="leading-relaxed text-[var(--color-text-secondary)]">
      {parts.map((part) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={part} className="font-medium text-[var(--color-text-primary)]">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </p>
  );
}

interface PrivacySectionProps {
  sectionKey: string;
  icon: string;
  interpolation?: Record<string, string>;
  children?: React.ReactNode;
}

export default function PrivacySection({
  sectionKey,
  icon,
  interpolation,
  children,
}: PrivacySectionProps) {
  const { t } = useI18n();

  return (
    <div className="privacy-card">
      <div className="rounded-[16.180340px] border border-[var(--color-border)] bg-[var(--color-bg-card)] p-[26.180340px] transition-all duration-300 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-hover)]">
        <div className="mb-3 flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-[var(--color-border)] bg-[var(--color-bg-raised)] transition-colors">
            <SectionIcon icon={icon} />
          </div>
          <h2 className="text-lg font-medium text-[var(--color-text-primary)]">
            {t(`privacy.${sectionKey}.title`)}
          </h2>
        </div>
        <BodyText text={t(`privacy.${sectionKey}.body`, interpolation)} />
        {children}
      </div>
    </div>
  );
}
