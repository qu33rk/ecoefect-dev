"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Ecoefect to firma, którą mogę polecić z czystym sumieniem!",
      author: "Viola, właścicielka firmy handlowej",
    },
    {
      text: "Jestem zadowolona ze współpracy z Ecoefect. Konkurencyjne stawki i dokładne sprzątanie, nie po łebkach. Duzy plus za dojazd na obrzeża miasta bez dodatkowych opłat.",
      author: "Michalina, Bydgoszcz – Osowa Góra",
    },
    {
      text: "Dobra opcja dla dużych firm. Sprzątanie na zasadzie abonamentu, z dokładnie ustalonym zakresem prac, można się dogadac. Stali klienci mają dostęp do dodatkowych usług.",
      author: "Przemek, Brzoza",
    },
    {
      text: "Godne zaufania firma, z sympatycznym właścicielem i pracowitą ekipa. Do tej pory bez większych zastrzeżeń 😊 😊",
      author: "Aleksandra, Osielsko",
    },
    {
      text: "To trzecia firma, z którą współpracuje. Jak na razie wypada korzystnie na tle konkurencji. Fajnie, że można zamówić sprzątanie biur w godzinach, w których pracownicy są już w domach i nikt nikomu nie przeszkadza.",
      author: "Marcin, Bydgoszcz",
    },
    {
      text: "Dojazd na sprzątanie do Fordonu w cenie i zapewnione detergenty – 5/5",
      author: "Karolina, Toruń",
    },
    {
      text: "Dobrze i terminowo wykonana praca, zawze jest czysto. Brakuje tylko cennika na stronie, poza tym polecam.",
      author: "Michał, Koronowo",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <p className="text-sm font-light">
            <span className="font-light">Firma sprzątająca</span> <span className="text-[#8cc63f]">ECO</span>
            <span className="text-[#007a33]"> EFECT</span>
          </p>
        </div>
        <h2 className="text-3xl font-bold mb-12 text-center">CO MÓWIĄ O NAS KLIENCI</h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white p-8 rounded-lg shadow-md relative">
            <div className="absolute top-4 right-4 text-green-700 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.94 3.72C5.2 4.18 4.24 9.51 4.04 11.83c.19-.09.4-.09.63-.09 1.62.09 2.92 1.55 2.92 3.33 0 1.99-1.52 3.63-3.48 3.63-2.3 0-3.91-2.18-3.91-4.94 0-8.74 5.95-10.38 11.74-10.76v.72zm9.01 0C14.22 4.18 13.26 9.51 13.06 11.83c.19-.09.4-.09.63-.09 1.62.09 2.92 1.55 2.92 3.33 0 1.99-1.52 3.63-3.48 3.63-2.3 0-3.91-2.18-3.91-4.94 0-8.74 5.95-10.38 11.74-10.76v.72z" />
              </svg>
            </div>
            <div className="mb-6">
              <p className="text-gray-700 text-lg">{testimonials[currentIndex].text}</p>
            </div>
            <div className="font-medium text-gray-900">{testimonials[currentIndex].author}</div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-green-700" : "bg-gray-300"}`}
                aria-label={`Przejdź do opinii ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Poprzednia opinia"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Następna opinia"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
