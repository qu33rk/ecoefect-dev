import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import ServiceContent from "@/components/service-content"
import CallToAction from "@/components/call-to-action"

export default function TerenyZielonePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <ServiceHero
        title="Pielęgnacja ogrodów i terenów zielonych"
        subtitle="Profesjonalne usługi na terenie Bydgoszczy i okolic"
        image="garden-maintenance"
      />

      <ServiceContent
        title="Pielęgnacja terenów zielonych"
        content={[
          "Oferujemy kompleksowe usługi pielęgnacji terenów zielonych dla firm, instytucji i wspólnot mieszkaniowych. Dbamy o estetyczny wygląd trawników, krzewów i drzew przez cały rok.",
          "Nasz zespół składa się z doświadczonych ogrodników, którzy posiadają wiedzę i umiejętności niezbędne do profesjonalnej pielęgnacji różnych rodzajów roślin i terenów zielonych.",
          "Wykorzystujemy profesjonalny sprzęt i narzędzia, które pozwalają na efektywne i dokładne wykonanie wszystkich prac ogrodniczych.",
        ]}
        features={[
          "Koszenie trawników",
          "Przycinanie żywopłotów i krzewów",
          "Pielęgnacja rabat kwiatowych",
          "Nawożenie i aeracja trawników",
          "Usuwanie chwastów",
          "Grabienie liści",
          "Zakładanie trawników",
        ]}
        image="garden-maintenance-detail"
      />

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Nasze usługi sezonowe</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-green-700">Wiosna</h3>
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
                  <span>Wiosenne porządki</span>
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
                  <span>Aeracja trawników</span>
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
                  <span>Sadzenie roślin</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-green-700">Lato</h3>
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
                  <span>Regularne koszenie</span>
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
                  <span>Nawadnianie</span>
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
                  <span>Pielęgnacja rabat</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-green-700">Jesień</h3>
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
                  <span>Grabienie liści</span>
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
                  <span>Przycinanie krzewów</span>
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
                  <span>Zabezpieczenie roślin</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-green-700">Zima</h3>
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
                  <span>Odśnieżanie</span>
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
                  <span>Posypywanie chodników</span>
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
                  <span>Planowanie nasadzeń</span>
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
