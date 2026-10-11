import Link from 'next/link'
import { getDictionary } from '@/lib/i18n/server'
import Button from '../components/ui/Button'

export default async function LandingPage() {
  const t = await getDictionary()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          {t.home.titleStart} <br className="hidden sm:block" />
          <span className="text-purple-600 dark:text-purple-400">
            {t.home.titleHighlight}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          {t.home.description}
        </p>
        <div className="mt-10">
          <Link href="/signup">
            <Button size="lg">{t.home.cta}</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
