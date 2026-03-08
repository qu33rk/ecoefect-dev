import ServiceLayout from "@/app/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"
import ServiceSchema from "@/components/service-schema"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Czyszczenie elewacji Bydgoszcz | Eco Efect",
  description:
    "Profesjonalne czyszczenie elewacji w Bydgoszczy i okolicach. Usuwamy zabrudzenia atmosferyczne, glony, porosty i osady z elewacji tynkowanych, klinkierowych i przemysłowych.",
  alternates: {
    canonical: "https://ecoefect.pl/czyszczenie-elewacji",
  },
}

export default function CzyszczenieElewacjiPage() {
  const faqItems = [
    {
      question: "Jak często warto czyścić elewację budynku?",
      answer:
        "W większości przypadków zalecamy czyszczenie elewacji co 2-4 lata, w zależności od lokalizacji budynku, stopnia narażenia na zanieczyszczenia i rodzaju powierzchni.",
    },
    {
      question: "Czy usuwacie glony, mech i zacieki z elewacji?",
      answer:
        "Tak, skutecznie usuwamy glony, porosty, mech, osady atmosferyczne oraz zacieki. Dobieramy środki i technikę czyszczenia do rodzaju elewacji, aby nie uszkodzić powierzchni.",
    },
    {
      question: "Czy czyszczenie elewacji jest bezpieczne dla tynku i farby?",
      answer:
        "Tak, stosujemy odpowiednio dobrane ciśnienie, preparaty i metody pracy. Przed realizacją oceniamy stan elewacji, aby dobrać bezpieczny zakres czyszczenia.",
    },
    {
      question: "Czy wykonujecie również impregnację elewacji?",
      answer:
        "Tak, oferujemy impregnację hydrofobową jako usługę dodatkową. Zmniejsza ona chłonność powierzchni i spowalnia ponowne osadzanie się zabrudzeń.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl="https://ecoefect.pl/czyszczenie-elewacji" />
      <ServiceSchema
        serviceName="Czyszczenie elewacji"
        serviceDescription="Profesjonalne czyszczenie elewacji w Bydgoszczy i okolicach. Usuwamy zabrudzenia atmosferyczne, glony, porosty i osady z różnych typów elewacji."
        serviceUrl="https://ecoefect.pl/czyszczenie-elewacji"
      />
      <ServiceLayout title="Czyszczenie elewacji" pageName="Czyszczenie elewacji" imageUrl="/czyszczenie-elewacji.jpg">
        <div className="prose max-w-none">
          <p className="mb-6">
            Oferujemy profesjonalne czyszczenie elewacji budynków mieszkalnych, biurowych i przemysłowych w Bydgoszczy
            i okolicach. Usuwamy zabrudzenia atmosferyczne, glony, porosty oraz osady, przywracając elewacji świeży i
            estetyczny wygląd.
          </p>

          <ServiceIconSection icon="building" title="Czyszczenie elewacji tynkowanych i malowanych">
            <p>
              Czyścimy elewacje tynkowane i malowane, dobierając technologię do rodzaju powierzchni i stopnia
              zabrudzenia. Pracujemy ostrożnie, aby uzyskać najlepszy efekt wizualny bez ryzyka uszkodzeń.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="store" title="Czyszczenie elewacji obiektów komercyjnych">
            <p>
              Obsługujemy sklepy, biurowce, hale i obiekty usługowe. Regularne czyszczenie elewacji wzmacnia wizerunek
              firmy i poprawia odbiór budynku przez klientów oraz kontrahentów.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="window" title="Usuwanie osadów, glonów i porostów">
            <p>
              Skutecznie eliminujemy naloty biologiczne oraz osady po opadach i spalinach. W razie potrzeby wykonujemy
              zabezpieczenie hydrofobowe, które pomaga dłużej utrzymać efekt czystej elewacji.
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Zakres usług</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Typy elewacji</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Tynki cienkowarstwowe</li>
                <li>Elewacje malowane</li>
                <li>Klinkier i cegła</li>
                <li>Elementy betonowe</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Rodzaje zabrudzeń</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Glony i porosty</li>
                <li>Zacieki i osady</li>
                <li>Zabrudzenia miejskie</li>
                <li>Ślady po opadach i kurzu</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-green-800 mb-2">Potrzebujesz czyszczenia na wysokości?</h3>
            <p className="text-green-700 mb-4">
              Dla wyższych obiektów sprawdź naszą usługę mycia okien i elewacji na wysokości metodą teleskopową.
            </p>
            <Link
              href="/mycie-okien-i-elewacji-na-wysokosciach"
              className="inline-block bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors"
            >
              Zobacz usługę wysokościową →
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Ceny czyszczenia elewacji ustalane są indywidualnie, w zależności od rodzaju powierzchni, metrażu,
            dostępności oraz stopnia zabrudzenia. Skontaktuj się z nami, aby otrzymać bezpłatną wycenę.
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
