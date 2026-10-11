export const locales = ['pl', 'en'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'pl'

// Cookie that stores the language picked with the switcher
export const LOCALE_COOKIE = 'locale'

export function isLocale(value: unknown): value is Locale {
  return locales.includes(value as Locale)
}
