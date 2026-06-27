"use client";

import { createContext, use, useState, useEffect, useCallback, useMemo, type ReactNode } from "react";

export type Translations = Record<string, string>;

const STORAGE_KEY = "lang";

import en from "../locales/en.json";
import ru from "../locales/ru.json";
import zh from "../locales/zh.json";

const all: Record<string, Translations> = { en, ru, zh };

function detectLocale(): string {
  return (navigator.languages?.[0] ?? navigator.language ?? "en").split("-")[0]!.toLowerCase();
}

function fmt(translations: Translations, key: string, params?: Record<string, string | number>): string {
  let value = translations[key];
  if (value === undefined) return key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      value = value.replace(`{${k}}`, String(v));
    }
  }
  return value;
}

interface I18nContextValue {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const detected = detectLocale();
  const saved = (() => {
    try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
  })();
  const initial = (saved ?? detected) in all ? (saved ?? detected) : "en";

  const [locale, setLocale] = useState<string>(initial);
  const [translations, setTranslations] = useState<Translations>(() => all[initial] ?? en);

  const updateLocale = useCallback((code: string) => {
    setLocale(code);
    setTranslations(all[code] ?? en);
    try { localStorage.setItem(STORAGE_KEY, code); } catch { /* noop */ }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const translate = useCallback(
    (key: string, params?: Record<string, string | number>) =>
      fmt(translations, key, params),
    [translations],
  );

  const value = useMemo(
    () => ({ locale, setLocale: updateLocale, t: translate }),
    [locale, updateLocale, translate],
  );

  return (
    <I18nContext value={value}>
      {children}
    </I18nContext>
  );
}

export function useI18n() {
  const ctx = use(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
