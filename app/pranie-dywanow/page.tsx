import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import ServiceContent from "@/components/service-content"
import CallToAction from "@/components/call-to-action"

export default function PranieDywanowPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <ServiceHero
        title="Czyszczenie wykładzin i pranie dywanów"
        subtitle="Profesjonalne usługi na terenie Bydgoszczy i okolic"
        image="carpet-cleaning"
      />

      <ServiceContent
        title="Czyszczenie wykładzin i pranie dywanów"
        content={[
          "Oferujemy profesjonalne czyszczenie wykładzin i pranie dywanów z wykorzystaniem nowoczesnych urządzeń i skutecznych środków czyszczących. Nasze usługi są skierowane zarówno do klientów indywidualnych, jak i firm oraz instytucji.",
          "Stosujemy metodę ekstrakcyjną, która skutecznie usuwa zabrudzenia, roztocza, alergeny i nieprzyjemne zapachy, jednocześnie nie niszcząc struktury materiału.",
          "Dzięki zastosowaniu profesjonalnych środków czyszczących i odpowiedniej technologii, dywany i wykładziny schną znacznie szybciej niż przy tradycyjnych metodach prania.",
        ]}
        features={[
          "Pranie dywanów wełnianych i syntetycznych",
          "Czyszczenie wykładzin biurowych i domowych",
          "Usuwanie plam i zabrudzeń",
          "Odświeżanie i dezynfekcja",
          "Impregnacja przeciw zabrudzeniom",
          "Usuwanie roztoczy i alergenów",
        ]}
        image="carpet-cleaning-detail"
      />

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Korzyści z profesjonalnego czyszczenia</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-green-700">Dla domu</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Usunięcie roztoczy i alergenów - zdrowsze środowisko dla domowników</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Odświeżenie kolorów i wzorów dywanów</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Eliminacja nieprzyjemnych zapachów</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-green-700">Dla biznesu</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Profesjonalny wizerunek firmy - czyste wykładziny w biurach i salach konferencyjnych</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Wydłużenie żywotności wykładzin - oszczędność na wymianie</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Zdrowsze środowisko pracy dla pracowników</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
      <Footer />
    </main>
  )
}
