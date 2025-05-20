import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import ServiceContent from "@/components/service-content"
import CallToAction from "@/components/call-to-action"

export default function MycieOkienPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <ServiceHero
        title="Mycie okien i elewacji na wysokościach"
        subtitle="Profesjonalne usługi na terenie Bydgoszczy i okolic"
        image="window-cleaning"
      />

      <ServiceContent
        title="Mycie okien na wysokości"
        content={[
          "Oferujemy profesjonalne mycie okien, przeszkleń i elewacji na wysokościach z wykorzystaniem specjalistycznego sprzętu i technik alpinistycznych. Nasze usługi są skierowane zarówno do klientów indywidualnych, jak i firm oraz instytucji.",
          "Nasi pracownicy posiadają odpowiednie uprawnienia i doświadczenie w pracy na wysokościach, co gwarantuje bezpieczeństwo i wysoką jakość wykonywanych usług.",
          "Wykorzystujemy profesjonalny sprzęt i środki czystości, które skutecznie usuwają zabrudzenia, nie pozostawiając smug i zacieków.",
        ]}
        features={[
          "Mycie okien w budynkach wysokościowych",
          "Czyszczenie elewacji szklanych i aluminiowych",
          "Mycie przeszkleń trudno dostępnych",
          "Usuwanie zabrudzeń pobudowlanych",
          "Mycie świetlików dachowych",
          "Czyszczenie konstrukcji szklanych",
        ]}
        image="window-cleaning-detail"
      />

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Proces mycia okien na wysokości</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Ocena techniczna</h3>
              <p className="text-gray-700">
                Przeprowadzamy ocenę techniczną obiektu, aby dobrać odpowiednią metodę mycia i sprzęt.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Przygotowanie</h3>
              <p className="text-gray-700">
                Zabezpieczamy teren wokół budynku i przygotowujemy sprzęt alpinistyczny lub podnośniki.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Mycie</h3>
              <p className="text-gray-700">
                Wykonujemy dokładne mycie okien i elewacji przy użyciu profesjonalnych środków czystości.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
      <Footer />
    </main>
  )
}
