'use client'

import { createContext, useContext, useEffect } from 'react'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/dictionaries/pl'

interface I18nContextValue {
  locale: Locale
  t: Dictionary
}

const I18nContext = createContext<I18nContextValue | null>(null)

// Makes the current language and texts available to Client Components
export function I18nProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale
  dictionary: Dictionary
  children: React.ReactNode
}) {
  // Keep <html lang> in sync for screen readers and the browser
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <I18nContext.Provider value={{ locale, t: dictionary }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
