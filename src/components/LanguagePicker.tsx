"use client";

import { useI18n } from "~/lib/i18n-context";
import Dropdown from "~/components/Dropdown";
import locales from "~/locales/manifest.json";

export default function LanguagePicker() {
  const { locale, setLocale, t } = useI18n();
  const current = locales.find((l) => l.code === locale) ?? locales[0]!;

  return (
    <Dropdown
      options={locales.map((l) => ({ value: l.code, label: l.name }))}
      value={locale}
      onChange={setLocale}
      label={t("language.name")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span>{current.name}</span>
    </Dropdown>
  );
}
