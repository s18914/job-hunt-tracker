import { Suspense } from 'react'
import { getDictionary, getLocale } from '@/lib/i18n/server'
import { I18nProvider } from '../components/I18nProvider'
import LanguageSwitcher from '../components/LanguageSwitcher'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // The language is read from a cookie, which is dynamic data,
  // so with dynamicIO it has to be rendered inside <Suspense>
  return (
    <Suspense>
      <LocalizedAuthLayout>{children}</LocalizedAuthLayout>
    </Suspense>
  )
}

async function LocalizedAuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const t = await getDictionary()

  return (
    <I18nProvider locale={locale} dictionary={t}>
      <div className="relative">
        <div className="absolute right-4 top-4">
          <LanguageSwitcher />
        </div>
        {children}
      </div>
    </I18nProvider>
  )
}
