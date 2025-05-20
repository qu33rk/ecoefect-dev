export default function ServiceHero({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  // Background image placeholders based on service type
  const backgroundStyles: Record<string, string> = {
    "window-cleaning": "bg-gradient-to-r from-blue-700 to-blue-500",
    "carpet-cleaning": "bg-gradient-to-r from-amber-700 to-amber-500",
    "garden-maintenance": "bg-gradient-to-r from-green-700 to-green-500",
    "snow-removal": "bg-gradient-to-r from-slate-700 to-slate-500",
    "floor-cleaning": "bg-gradient-to-r from-purple-700 to-purple-500",
  }

  return (
    <section className="relative h-[400px] w-full">
      <div className="absolute inset-0">
        <div className={`w-full h-full ${backgroundStyles[image] || "bg-gradient-to-r from-green-700 to-green-500"}`}>
          {/* Placeholder for hero image */}
          <div className="w-full h-full flex items-center justify-center opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M3 3v18h18" />
              <path d="M18.7 8.7V18H9.4" />
              <path d="M3 8.7h5.4" />
              <path d="M3 13.5h5.4" />
              <path d="M3 18h5.4" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="bg-black/60 p-6 md:p-8 max-w-2xl">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-white text-lg md:text-xl">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
