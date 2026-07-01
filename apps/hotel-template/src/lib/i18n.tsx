"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Locale, LocalizedString } from "@/config/types";
import { config } from "@/config/hotel.config";
import { dictionaries, type DictKey } from "@/content/dictionary";
import { localize } from "./localize";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  locales: Locale[];
  t: (key: DictKey) => string;
  l: (value: LocalizedString) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);
const STORAGE_KEY = "daric-hotel-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(config.i18n.defaultLocale);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved && config.i18n.locales.includes(saved)) setLocaleState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<LocaleContextValue>(() => {
    const dict = dictionaries[locale] ?? dictionaries[config.i18n.defaultLocale];
    return {
      locale,
      setLocale,
      locales: config.i18n.locales,
      t: (key) => dict[key] ?? key,
      l: (val) => localize(val, locale),
    };
  }, [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useI18n must be used within a LocaleProvider");
  return ctx;
}
