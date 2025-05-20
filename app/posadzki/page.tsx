import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import ServiceContent from "@/components/service-content"
import CallToAction from "@/components/call-to-action"

export default function PosadzkiPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <ServiceHero
        title="Zabezpieczanie i czyszczenie posadzek i podłóg"
        subtitle="Profesjonalna pielęgnacja różnych typów powierzchni"
        image="floor-cleaning"
      />

      <ServiceContent
        title="Czyszczenie i polimeryzacja posadzek"
        content={[
          "Oferujemy profesjonalne usługi czyszczenia, konserwacji i zabezpieczania różnych typów posadzek. Nasze usługi są skierowane do firm, instytucji i obiektów handlowych, gdzie podłogi są narażone na intensywne użytkowanie.",
          "Stosujemy nowoczesne technologie i wysokiej jakości środki, które skutecznie czyszczą i zabezpieczają posadzki, przedłużając ich żywotność i poprawiając wygląd.",
          "Nasz zespół posiada doświadczenie w pracy z różnymi rodzajami podłóg, w tym PCV, linoleum, kamiennymi, betonowymi i żywicznymi, co pozwala nam dobrać odpowiednie metody i środki do każdego typu powierzchni.",
        ]}
        features={[
          "Czyszczenie maszynowe posadzek",
          "Polimeryzacja i zabezpieczanie powierzchni",
          "Krystalizacja marmuru i granitu",
          "Czyszczenie i impregnacja posadzek kamiennych",
          "Renowacja posadzek betonowych",
          "Usuwanie starych powłok zabezpieczających",
          "Doczyszczanie silnych zabrudzeń",
        ]}
        image="floor-cleaning-detail"
      />

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Rodzaje posadzek, które obsługujemy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-green-700">PCV i linoleum</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <svg
                    className="w-4 h-4 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Czyszczenie maszynowe</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-4 h-4 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Polimeryzacja</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-4 h-4 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Zabezpieczanie powłokami</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-green-700">Kamień naturalny</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <svg
                    className="w-4 h-4 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Krystalizacja marmuru</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-4 h-4 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Impregnacja granitu</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-4 h-4 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Czyszczenie i konserwacja</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-green-700">Posadzki betonowe</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <svg
                    className="w-4 h-4 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Szlifowanie</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-4 h-4 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Impregnacja</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-4 h-4 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Zabezpieczanie przed pyłem</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-green-700">Posadzki żywiczne</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <svg
                    className="w-4 h-4 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Czyszczenie specjalistyczne</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-4 h-4 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Renowacja</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-4 h-4 text-green-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Konserwacja</span>
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
