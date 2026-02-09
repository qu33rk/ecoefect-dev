import type React from "react"
interface ServiceIconSectionProps {
  icon: string
  title: string
  children: React.ReactNode
}

export default function ServiceIconSection({ icon, title, children }: ServiceIconSectionProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <div className="bg-green-100 p-2 rounded-full mr-3 flex-shrink-0">
          <div className="w-6 h-6 flex items-center justify-center text-green-700">
            {icon === "window" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            )}
            {icon === "building" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                <line x1="12" y1="6" x2="12" y2="6.01" />
                <line x1="12" y1="10" x2="12" y2="10.01" />
                <line x1="12" y1="14" x2="12" y2="14.01" />
                <line x1="12" y1="18" x2="12" y2="18.01" />
              </svg>
            )}
            {icon === "store" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M3 3h18v7H3z" />
                <path d="M3 14h18v7H3z" />
                <path d="M4 10h16" />
                <path d="M4 14h16" />
              </svg>
            )}
          </div>
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="pl-11">{children}</div>
    </div>
  )
}
