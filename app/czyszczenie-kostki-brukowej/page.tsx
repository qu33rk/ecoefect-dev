import ServiceLayout from "@/app/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"
import ServiceSchema from "@/components/service-schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Czyszczenie kostki brukowej Bydgoszcz | Eco Efect",
  description:
    "Profesjonalne czyszczenie kostki brukowej w Bydgoszczy i okolicach. Usuwamy zabrudzenia, mech, porosty i plamy olejowe. Przywracamy estetyczny wygląd podjazdów, chodników i tarasów.",
  alternates: {
    canonical: "https://ecoefect.pl/czyszczenie-kostki-brukowej",
  },
}

export default function CzyszczenieKostkiBrukowejPage() {
  const faqItems = [
    {
      question: "Jak często czyścić kostkę brukową?",
      answer:
        "Najczęściej rekomendujemy gruntowne czyszczenie 1-2 razy w roku, zwykle po zimie i przed sezonem jesienno-zimowym. Częstotliwość zależy od stopnia eksploatacji oraz warunków otoczenia.",
    },
    {
      question: "Czy usuwacie mech i chwasty z fug?",
      answer:
        "Tak, usuwamy mech, chwasty i porosty z powierzchni oraz fug między kostkami. W razie potrzeby stosujemy dodatkowe środki ograniczające ich szybki nawrót.",
    },
    {
      question: "Czy można wyczyścić plamy z oleju i smaru?",
      answer:
        "W większości przypadków tak. Stosujemy odpowiednio dobrane preparaty i techniki czyszczenia ciśnieniowego, które skutecznie redukują plamy olejowe oraz zabrudzenia eksploatacyjne.",
    },
    {
      question: "Czy po czyszczeniu wykonujecie impregnację kostki?",
      answer:
        "Tak, oferujemy impregnację kostki brukowej jako usługę dodatkową. Impregnacja pomaga ograniczyć wchłanianie brudu i wilgoci, a także ułatwia późniejsze utrzymanie czystości.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl="https://ecoefect.pl/czyszczenie-kostki-brukowej" />
      <ServiceSchema
        serviceName="Czyszczenie kostki brukowej"
        serviceDescription="Profesjonalne czyszczenie kostki brukowej w Bydgoszczy i okolicach. Usuwamy zabrudzenia, mech, porosty i plamy olejowe."
        serviceUrl="https://ecoefect.pl/czyszczenie-kostki-brukowej"
      />
      <ServiceLayout title="Czyszczenie kostki brukowej" pageName="Czyszczenie kostki brukowej">
        <div className="prose max-w-none">
          <p className="mb-6">
            Oferujemy profesjonalne czyszczenie kostki brukowej dla firm, wspólnot i klientów indywidualnych w
            Bydgoszczy i okolicach. Skutecznie usuwamy zabrudzenia atmosferyczne, osady, mech, porosty i plamy
            eksploatacyjne, przywracając estetyczny wygląd podjazdów, chodników i tarasów.
          </p>

          <ServiceIconSection icon="building" title="Czyszczenie podjazdów i placów">
            <p>
              Czyścimy kostkę brukową na podjazdach, parkingach, placach manewrowych i ciągach komunikacyjnych.
              Korzystamy z profesjonalnych urządzeń ciśnieniowych, które skutecznie usuwają nagromadzony brud,
              nie niszcząc powierzchni.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="store" title="Czyszczenie chodników i stref wejściowych">
            <p>
              Dbamy o estetykę chodników, stref wejściowych do budynków, terenów wokół sklepów i obiektów usługowych.
              Regularne czyszczenie poprawia nie tylko wygląd, ale również bezpieczeństwo użytkowania nawierzchni.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="window" title="Doczyszczanie zabrudzeń trudnych">
            <p>
              Usuwamy uporczywe zabrudzenia, takie jak plamy olejowe, ślady po oponach, osady organiczne oraz naloty
              po sezonie zimowym. W razie potrzeby wykonujemy również impregnację kostki, aby zabezpieczyć powierzchnię
              przed szybkim ponownym zabrudzeniem.
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Zakres usług</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Powierzchnie</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Podjazdy i parkingi</li>
                <li>Chodniki i alejki</li>
                <li>Tarasy i opaski wokół budynków</li>
                <li>Place i strefy wejściowe</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Rodzaje zabrudzeń</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Mech i porosty</li>
                <li>Plamy olejowe i smarowe</li>
                <li>Zabrudzenia po opadach i błocie</li>
                <li>Osady i naloty atmosferyczne</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Ceny czyszczenia kostki brukowej ustalane są indywidualnie w zależności od powierzchni, stopnia
            zabrudzenia oraz zakresu prac dodatkowych (np. impregnacja). Skontaktuj się z nami, aby otrzymać
            bezpłatną wycenę.
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
