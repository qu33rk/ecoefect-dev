import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, CheckCircle, Briefcase } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Praca w Bydgoszczy – Firma sprzątająca Eco Efect",
  description:
    "Szukasz pracy w Bydgoszczy? Eco Efect zatrudni sprzątacza/sprzątaczkę. Stabilne zatrudnienie, terminowe wynagrodzenie, przyjazna atmosfera. Zadzwoń: 502 630 031.",
  alternates: {
    canonical: "https://ecoefect.pl/praca",
  },
}

export default function PracaPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Praca w Eco Efect</h1>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Dołącz do naszego zespołu! Poszukujemy rzetelnych i sumiennych pracowników do pracy na terenie Bydgoszczy i okolic.
          </p>

          <div className="max-w-3xl mx-auto">
            {/* Job offer card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="bg-[#007a33] px-6 py-5">
                <div className="flex items-center gap-3">
                  <Briefcase className="text-white h-6 w-6" />
                  <div>
                    <h2 className="text-xl font-bold text-white">Sprzątacz / Sprzątaczka</h2>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="text-[#8cc63f] h-4 w-4" />
                      <span className="text-gray-200 text-sm">Bydgoszcz i okolice</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 grid md:grid-cols-2 gap-6">
                {/* Requirements */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gray-800">Wymagania</h3>
                  <ul className="space-y-2">
                    {[
                      "Sumienność i dokładność w wykonywaniu obowiązków",
                      "Dyspozycyjność i punktualność",
                      "Odpowiedzialność za powierzone mienie",
                      "Doświadczenie w sprzątaniu mile widziane",
                      "Umiejętność pracy w zespole",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="text-[#8cc63f] h-4 w-4 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What we offer */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gray-800">Co oferujemy</h3>
                  <ul className="space-y-2">
                    {[
                      "Stabilne zatrudnienie na podstawie umowy",
                      "Terminowe i uczciwe wynagrodzenie",
                      "Stałe godziny pracy",
                      "Przyjazną atmosferę w zespole",
                      "Zapewniony sprzęt i środki czystości",
                      "Możliwość rozwoju zawodowego",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="text-[#007a33] h-4 w-4 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
                <p className="text-sm text-gray-500">
                  Rodzaj pracy: <span className="font-medium text-gray-700">Pełny etat / Część etatu</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Lokalizacja: <span className="font-medium text-gray-700">Bydgoszcz i okolice</span>
                </p>
              </div>
            </div>

            {/* How to apply */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-[#007a33]">Jak aplikować?</h2>
              <p className="text-gray-700 mb-6">
                Zainteresowany/a? Skontaktuj się z nami telefonicznie lub mailowo. Chętnie odpowiemy na wszystkie pytania i umówimy spotkanie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+48502630031"
                  className="flex items-center gap-3 bg-[#007a33] hover:bg-[#005f27] text-white font-medium px-5 py-3 rounded-lg transition-colors"
                  aria-label="Zadzwoń pod numer 502 630 031"
                >
                  <Phone className="h-5 w-5" />
                  <span>502 630 031</span>
                </a>
                <a
                  href="mailto:ecoefect@ecoefect.pl"
                  className="flex items-center gap-3 border-2 border-[#007a33] text-[#007a33] hover:bg-green-50 font-medium px-5 py-3 rounded-lg transition-colors"
                  aria-label="Wyślij e-mail na adres ecoefect@ecoefect.pl"
                >
                  <Mail className="h-5 w-5" />
                  <span>ecoefect@ecoefect.pl</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
