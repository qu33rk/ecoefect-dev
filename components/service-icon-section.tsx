import type React from "react"
interface ServiceIconSectionProps {
  icon?: string
  title: string
  children: React.ReactNode
}

export default function ServiceIconSection({ icon = "check", title, children }: ServiceIconSectionProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <div className="bg-green-100 p-2 rounded-full mr-3 flex-shrink-0">
          <div className="w-6 h-6 flex items-center justify-center text-green-700">
            {/* Checkmark - uniwersalna ikona */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="pl-11">{children}</div>
    </div>
  )
}
