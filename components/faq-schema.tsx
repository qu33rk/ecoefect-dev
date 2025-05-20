import Script from "next/script"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqItems: FAQItem[]
  pageUrl: string
}

export default function FAQSchema({ faqItems, pageUrl }: FAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <Script id="faq-schema" type="application/ld+json">
      {JSON.stringify(faqSchema)}
    </Script>
  )
}
