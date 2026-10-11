import React from 'react'
import { getDictionary } from '@/lib/i18n/server'

export default async function FAQPage() {
  const t = await getDictionary()

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h2 className="text-2xl font-bold mb-8 text-center text-white">
        {t.faq.title}
      </h2>
      <div className="space-y-6">
        {t.faq.items.map((item) => (
          <FAQItem
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  )
}

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2 text-white">{question}</h4>
      <p className="text-gray-400 dark:text-gray-300">{answer}</p>
    </div>
  )
}
