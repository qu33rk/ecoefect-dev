import Link from "next/link"
import { Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-sm">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-xl font-bold mb-2">MASZ PYTANIE, CHCIAŁBYŚ POZNAĆ NASZĄ OFERTĘ?</p>
            <p className="text-gray-600">Skontaktuj się, przygotujemy i przedstawimy Ci najkorzystniejsze warunki</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakt"
              className="bg-green-700 text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition-colors text-center"
            >
              Kontakt <span className="ml-1">→</span>
            </Link>

            <a
              href="tel:+48502630031"
              className="flex items-center justify-center gap-2 text-gray-800 font-medium hover:text-green-700 transition-colors"
            >
              <Phone className="h-5 w-5" />
              502 630 031
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
