import Link from "next/link"

interface BreadcrumbsProps {
  pageName: string
}

export default function Breadcrumbs({ pageName }: BreadcrumbsProps) {
  return (
    <ol className="flex text-sm text-gray-600 mb-4 items-center">
      <li>
        <Link href="/" className="hover:text-green-700">
          Strona główna
        </Link>
      </li>
      <li className="mx-2">→</li>
      <li className="font-medium">{pageName}</li>
    </ol>
  )
}
