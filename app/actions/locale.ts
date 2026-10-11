'use server'

import { cookies } from 'next/headers'
import { isLocale, LOCALE_COOKIE } from '@/lib/i18n/config'

// Save the chosen language. Setting a cookie in a Server Action makes
// Next.js re-render the current page, so the new language shows up at once.
export async function setLocale(locale: string) {
  if (!isLocale(locale)) return

  const cookieStore = await cookies()
  cookieStore.set(LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })
}
