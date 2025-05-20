import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"

export default function OfertaPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Nasza Oferta</h1>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Sprzątanie biur</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Codzienne sprzątanie powierzchni biurowych</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Mycie okien i przeszkleń</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Czyszczenie i dezynfekcja sanitariatów</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Pranie wykładzin i tapicerek</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Sprzątanie obiektów handlowych</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Kompleksowe sprzątanie sklepów i galerii</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Mycie posadzek maszynami czyszczącymi</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Czyszczenie witryn i ekspozycji</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Sprzątanie zaplecza i magazynów</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Sprzątanie mieszkań i domów</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Regularne sprzątanie mieszkań i domów</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Sprzątanie po remontach i budowach</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Mycie okien i przeszkleń</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Pranie dywanów i tapicerek</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Usługi specjalistyczne</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Czyszczenie i konserwacja posadzek</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Doczyszczanie i krystalizacja marmuru</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Ozonowanie pomieszczeń</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Sprzątanie po zalaniach i pożarach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
