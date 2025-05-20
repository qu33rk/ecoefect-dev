"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BrandsSection() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const scrollAmount = 200

  const brandLogos = [
    { name: "Buzil", color: "#005ca9" },
    { name: "VOIGT", color: "#e30613" },
    { name: "Tenzi", color: "#009fe3" },
    { name: "Merida", color: "#004a99" },
    { name: "Dr Schutz", color: "#1d1d1b" },
    { name: "Kiehl", color: "#e30613" },
    { name: "Medisept", color: "#009640" },
    { name: "Hako", color: "#e30613" },
    { name: "Numatic", color: "#e30613" },
    { name: "Karcher", color: "#ffed00" },
    { name: "Taski", color: "#004a99" },
    { name: "COMAC", color: "#e30613" },
  ]

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Używamy sprzętu i produktów renomowanych marek</h2>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Przewiń w lewo"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-8 py-4 px-10 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {brandLogos.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-32 flex items-center justify-center bg-white rounded-lg shadow-sm p-4"
              >
                <div className="font-bold text-lg" style={{ color: brand.color }}>
                  {brand.name}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Przewiń w prawo"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
