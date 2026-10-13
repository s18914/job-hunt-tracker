import { Suspense } from 'react'
import Link from 'next/link'
import { getDictionary, getLocale } from '@/lib/i18n/server'
import { I18nProvider } from '../components/I18nProvider'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { Timestamp } from '../components/Timestamp'
import Button from '../components/ui/Button'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // The language is read from a cookie, which is dynamic data,
  // so with dynamicIO it has to be rendered inside <Suspense>
  return (
    <Suspense>
      <LocalizedMarketingLayout>{children}</LocalizedMarketingLayout>
    </Suspense>
  )
}

async function LocalizedMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const t = await getDictionary()

  return (
    <I18nProvider locale={locale} dictionary={t}>
      <div className="flex min-h-screen flex-col">
        <header className="border-b border-gray-200 dark:border-dark-border-subtle bg-white dark:bg-dark-base">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-8">
              <Link
                href="/"
                aria-label="Job Hunt Tracker"
                className="text-xl font-bold"
              >
                <span className="hidden sm:inline">Job Hunt Tracker</span>
                <span className="sm:hidden">JH</span>
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link
                  href="/features"
                  className="text-sm font-medium hover:text-primary-600"
                >
                  {t.nav.features}
                </Link>
                <Link
                  href="/faq"
                  className="text-sm font-medium hover:text-primary-600"
                >
                  {t.nav.faq}
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium hover:text-primary-600"
                >
                  {t.nav.about}
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <Link href="/signin" className="hidden sm:block">
                <Button variant="outline">{t.nav.signIn}</Button>
              </Link>
              <Link href="/signup">
                <Button>{t.nav.signUp}</Button>
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-gray-200 dark:border-dark-border-subtle bg-white dark:bg-dark-base">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold mb-4">Job Hunt Tracker</h3>
                <p className="text-sm text-gray-600">{t.footer.tagline}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-4">
                  {t.footer.product}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/features"
                      className="text-sm text-gray-600 hover:text-primary-600"
                    >
                      {t.nav.features}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-sm text-gray-600 hover:text-primary-600"
                    >
                      {t.nav.faq}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-4">
                  {t.footer.author}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-sm text-gray-600 hover:text-primary-600"
                    >
                      {t.nav.about}
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://github.com/s18914/job-hunt-tracker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-primary-600"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t pt-8 text-center">
              <p className="text-sm text-gray-600">
                &copy; <Timestamp /> Job Hunt Tracker · Emilia Cholewicka
              </p>
            </div>
          </div>
        </footer>
      </div>
    </I18nProvider>
  )
}
