import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CennikPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Cennik</h1>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 bg-green-700 text-white">
              <h2 className="text-xl font-bold">Indywidualna wycena</h2>
              <p className="mt-2">Każdą usługę wyceniamy indywidualnie, biorąc pod uwagę:</p>
            </div>

            <div className="p-6">
              <ul className="space-y-4">
                <li className="pb-4 border-b border-gray-100">
                  <span className="font-medium text-green-700">Powierzchnia</span>
                  <p className="text-gray-600 mt-1">Wielkość powierzchni do sprzątania w m²</p>
                </li>
                <li className="pb-4 border-b border-gray-100">
                  <span className="font-medium text-green-700">Częstotliwość</span>
                  <p className="text-gray-600 mt-1">Jak często wykonywana będzie usługa</p>
                </li>
                <li className="pb-4 border-b border-gray-100">
                  <span className="font-medium text-green-700">Zakres prac</span>
                  <p className="text-gray-600 mt-1">Szczegółowy zakres czynności do wykonania</p>
                </li>
                <li className="pb-4 border-b border-gray-100">
                  <span className="font-medium text-green-700">Specyfika obiektu</span>
                  <p className="text-gray-600 mt-1">Rodzaj obiektu i jego specyficzne wymagania</p>
                </li>
                <li>
                  <span className="font-medium text-green-700">Dodatkowe usługi</span>
                  <p className="text-gray-600 mt-1">Usługi specjalistyczne wymagające specjalnego sprzętu</p>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-center font-medium">Aby otrzymać bezpłatną wycenę, skontaktuj się z nami:</p>
                <p className="text-center text-green-700 font-bold mt-2">502 630 031</p>
                <p className="text-center text-sm text-gray-500 mt-1">lub wypełnij formularz kontaktowy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
