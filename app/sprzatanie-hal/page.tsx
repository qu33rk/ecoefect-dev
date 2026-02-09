import ServiceLayout from "@/app/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"
import ServiceSchema from "@/components/service-schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sprzątanie hal produkcyjnych i magazynowych | Eco Efect Bydgoszcz",
  description:
    "Profesjonalne sprzątanie hal produkcyjnych, magazynowych i przemysłowych w Bydgoszczy. Kompleksowe utrzymanie czystości obiektów przemysłowych. Sprawdź naszą ofertę!",
  alternates: {
    canonical: "https://ecoefect.pl/sprzatanie-hal",
  },
}

export default function SprzatanieHalPage() {
  const faqItems = [
    {
      question: "Jak często powinno być sprzątane hala produkcyjna?",
      answer:
        "Częstotliwość sprzątania zależy od rodzaju produkcji i intensywności pracy. W większości przypadków zalecamy codzienne sprzątanie podstawowe oraz okresowe czyszczenie gruntowne (tygodniowe lub miesięczne).",
    },
    {
      question: "Czy sprzątacie w godzinach nocnych lub w weekendy?",
      answer:
        "Tak, dostosowujemy godziny pracy do harmonogramu produkcji. Możemy sprzątać w nocy, w weekendy lub podczas przerw technologicznych, aby nie zakłócać procesów produkcyjnych.",
    },
    {
      question: "Czy macie doświadczenie w sprzątaniu hal z wymaganiami sanitarnymi?",
      answer:
        "Tak, posiadamy doświadczenie w sprzątaniu hal spożywczych, farmaceutycznych i innych obiektów wymagających szczególnych standardów higienicznych. Stosujemy odpowiednie środki i procedury zgodne z wymogami HACCP.",
    },
    {
      question: "Czy zapewniacie własny sprzęt do sprzątania hal?",
      answer:
        "Tak, dysponujemy profesjonalnym sprzętem do sprzątania dużych powierzchni, w tym maszynami czyszczącymi, zamiatarkami, myjkami ciśnieniowymi oraz sprzętem do pracy na wysokości.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl="https://ecoefect.pl/sprzatanie-hal" />
      <ServiceSchema
        serviceName="Sprzątanie hal produkcyjnych i magazynowych"
        serviceDescription="Profesjonalne sprzątanie hal produkcyjnych, magazynowych i przemysłowych w Bydgoszczy. Kompleksowe utrzymanie czystości obiektów przemysłowych."
        serviceUrl="https://ecoefect.pl/sprzatanie-hal"
        imageUrl="/sprzatanie-hal.jpg"
      />
      <ServiceLayout
        title="Sprzątanie hal produkcyjnych i magazynowych"
        pageName="Sprzątanie hal"
        imageUrl="/sprzatanie-hal.jpg"
      >
        <div className="prose max-w-none">
          <p className="mb-6">
            Oferujemy profesjonalne usługi sprzątania hal produkcyjnych, magazynowych i przemysłowych dla firm
            w Bydgoszczy i okolicach. Zapewniamy kompleksowe utrzymanie czystości, które spełnia najwyższe standardy
            bezpieczeństwa i higieny pracy.
          </p>

          <ServiceIconSection icon="building" title="Sprzątanie hal produkcyjnych">
            <p>
              Specjalizujemy się w utrzymaniu czystości hal produkcyjnych różnych branż – od przemysłu spożywczego,
              przez farmaceutyczny, aż po maszynowy i elektroniczny. Nasze usługi obejmują codzienne sprzątanie
              stanowisk pracy, ciągów komunikacyjnych, usuwanie odpadów produkcyjnych oraz czyszczenie maszyn
              i urządzeń (zewnętrznie).
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="store" title="Sprzątanie magazynów">
            <p>
              Utrzymujemy czystość w magazynach wysokiego składowania, centrach logistycznych i dystrybucyjnych.
              Nasze usługi obejmują zamiatanie i mycie posadzek, odkurzanie regałów, czyszczenie stref załadunkowych
              i rozładunkowych oraz utrzymanie porządku w częściach socjalnych dla pracowników.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="window" title="Czyszczenie specjalistyczne">
            <p>
              Wykonujemy czyszczenie specjalistyczne, w tym mycie posadzek przemysłowych maszynami szorująco-zbierającymi,
              usuwanie zabrudzeń olejowych i smarowych, czyszczenie po pracach remontowych oraz mycie konstrukcji
              stalowych i elementów na wysokości.
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Zakres usług</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Usługi codzienne</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Zamiatanie i mycie posadzek</li>
                <li>Opróżnianie pojemników na odpady</li>
                <li>Sprzątanie pomieszczeń socjalnych</li>
                <li>Utrzymanie sanitariatów</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Usługi okresowe</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Mycie maszynowe posadzek</li>
                <li>Czyszczenie regałów magazynowych</li>
                <li>Mycie okien i świetlików</li>
                <li>Odkurzanie konstrukcji stalowych</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Usługi specjalne</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Sprzątanie po remontach</li>
                <li>Czyszczenie przed audytami</li>
                <li>Usuwanie zabrudzeń przemysłowych</li>
                <li>Dezynfekcja pomieszczeń</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Branże</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Przemysł spożywczy</li>
                <li>Przemysł farmaceutyczny</li>
                <li>Logistyka i magazyny</li>
                <li>Produkcja i montaż</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Ceny usług sprzątania hal ustalane są indywidualnie, w zależności od powierzchni obiektu, rodzaju
            produkcji, wymagań higienicznych oraz częstotliwości sprzątania. Skontaktuj się z nami, aby otrzymać
            bezpłatną wycenę dopasowaną do potrzeb Twojego zakładu.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6">FAQ</h2>
          <div className="space-y-1">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </ServiceLayout>
    </>
  )
}
