import { cache } from 'react'
import { cookies } from 'next/headers'
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from './config'
import { en } from './dictionaries/en'
import { pl, type Dictionary } from './dictionaries/pl'

const dictionaries: Record<Locale, Dictionary> = { pl, en }

// Get the current language from the cookie (Polish by default)
export const getLocale = cache(async (): Promise<Locale> => {
  const cookieStore = await cookies()
  const value = cookieStore.get(LOCALE_COOKIE)?.value
  return isLocale(value) ? value : defaultLocale
})

// Get all UI texts in the current language
export async function getDictionary() {
  return dictionaries[await getLocale()]
}
