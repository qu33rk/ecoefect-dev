export default function ServiceContent({
  title,
  content,
  features,
  image,
}: {
  title: string
  content: string[]
  features: string[]
  image: string
}) {
  // Background image placeholders based on service type
  const backgroundStyles: Record<string, string> = {
    "window-cleaning-detail": "bg-gradient-to-br from-blue-600 to-blue-800",
    "carpet-cleaning-detail": "bg-gradient-to-br from-amber-600 to-amber-800",
    "garden-maintenance-detail": "bg-gradient-to-br from-green-600 to-green-800",
    "snow-removal-detail": "bg-gradient-to-br from-slate-600 to-slate-800",
    "floor-cleaning-detail": "bg-gradient-to-br from-purple-600 to-purple-800",
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">{title}</h2>

            {content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Zakres usług:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:w-1/2 h-80 bg-gray-200 rounded-lg">
            {/* Placeholder for image */}
            <div
              className={`w-full h-full flex items-center justify-center ${backgroundStyles[image] || "bg-gradient-to-br from-green-600 to-green-800"} rounded-lg text-white opacity-80`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
