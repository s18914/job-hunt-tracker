'use client'

import { useTransition } from 'react'
import { setLocale } from '@/app/actions/locale'
import { locales } from '@/lib/i18n/config'
import { cn } from '@/lib/utils'
import { useI18n } from './I18nProvider'

export default function LanguageSwitcher() {
  const { locale, t } = useI18n()
  const [isPending, startTransition] = useTransition()

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className="inline-flex rounded-md border border-gray-200 p-0.5 text-xs font-medium dark:border-dark-border-default"
    >
      {locales.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={option === locale}
          disabled={isPending}
          onClick={() => {
            if (option === locale) return
            startTransition(async () => {
              await setLocale(option)
            })
          }}
          className={cn(
            'rounded px-2 py-1 uppercase transition-colors disabled:opacity-60',
            option === locale
              ? 'bg-sky-600 text-white'
              : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
          )}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
