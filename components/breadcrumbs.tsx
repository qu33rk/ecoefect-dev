"use client"

import Link from "next/link"
import Script from "next/script"
import { usePathname } from "next/navigation"

interface BreadcrumbsProps {
  pageName: string
}

export default function Breadcrumbs({ pageName }: BreadcrumbsProps) {
  const pathname = usePathname()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ecoefect.pl"
  const pageUrl = `${siteUrl}${pathname === "/" ? "" : pathname}`

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: pageUrl,
      },
    ],
  }

  return (
    <>
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="flex items-center text-sm text-gray-600 whitespace-nowrap overflow-hidden">
          {/* Strona główna */}
          <li className="shrink-0">
            <Link href="/" className="hover:text-green-700">
              Strona główna
            </Link>
          </li>

          {/* Aktualna strona */}
          <li
            className="min-w-0 overflow-hidden truncate font-medium before:content-['→'] before:mx-2 before:text-gray-500"
            aria-current="page"
            title={pageName}
          >
            {pageName}
          </li>
        </ol>
      </nav>

      {/* JSON-LD breadcrumbs */}
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
    </>
  )
}