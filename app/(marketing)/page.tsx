import Link from 'next/link'
import { getDictionary } from '@/lib/i18n/server'
import Button from '../components/ui/Button'

export default async function LandingPage() {
  const t = await getDictionary()

  return (
    <div className="max-w-7xl mx-auto py-16 sm:py-24 relative">
      <div className="bg-gradient"></div>
      <div className="bg-gradient-white"></div>
      <div className="text-center max-h-[500px] px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          {t.home.titleStart} <br className="hidden sm:block" />
          <span className="text-primary-600 dark:text-primary-400">
            {t.home.titleHighlight}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          {t.home.description}
        </p>
        <div className="mt-10">
          <Link href="/signup">
            <Button variant="gradient" size="lg">
              {t.home.cta}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
