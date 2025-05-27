import ServiceLayout from "@/components/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"

export default function MycieOkienPage() {
  const faqItems = [
    {
      question: "Jaką techniką wykonujecie mycie okien na wysokości?",
      answer: "Wysokościowe mycie okien przeprowadzamy z poziomu gruntu, wykorzystując w tym celu kije teleskopowe.",
    },
    {
      question: "Czy oferujecie także alpinistyczne mycie okien?",
      answer: "Nie.",
    },
    {
      question: "Do jakiej wysokości myjecie okna?",
      answer: "Kije teleskopowe umożliwiają sprawne i bezpieczne dotarcie do poziomu 14 metrów.",
    },
    {
      question: "Jaki sprzęt wykorzystujecie podczas mycia okien na wysokości?",
      answer:
        "Korzystamy z profesjonalnych urządzeń Ionic Quattro, które umożliwiają szybkie i dokładne czyszczenie stolarki okiennej. To kompaktowy system myjący, wyposażony w kije teleskopowe zakończone szczotką, który wykorzystuje wodę działającą pod ciśnieniem.",
    },
    {
      question: "Jaką metodą myjecie okna, elewacje i witryny sklepowe?",
      answer:
        "Bez względu na wysokość i lokalizację przeszkleń, mycie okien odbywa się z wykorzystaniem wody demineralizowanej, otrzymywanej w procesie odwróconej osmozy. To woda pozbawiona związków chemicznych, o najwyższym stopniu czystości. Dzięki temu, podczas mycia szyb nie pozostają żadne smugi i wyczyszczone zostają nawet silne zabrudzenia.",
    },
    {
      question: "Czy oferujecie wyłącznie mycie elewacji szklanych?",
      answer:
        "Nie, zajmujemy się czyszczeniem i doczyszczaniem elewacji wykonanych z różnych materiałów. Proponujemy też wyłącznie mycie fasad. To odpowiedni wybór dla budynków zlokalizowanych przy ruchliwych ulicach i w reprezentacyjnych miejscach, który pozwala przywrócić im dotychczasowy blask w najbardziej widocznej części.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl="https://ecoefect.pl/mycie-okien-i-elewacji-na-wysokosciach" />
      <ServiceLayout
        title="Mycie okien na wysokości"
        pageName="mycie-okien-i-elewacji-na-wysokosciach"
      >
        <div className="prose max-w-none">
          <p className="mb-6">
            Wysokościowe mycie okien może odbywać za pomocą kilku metod. Najpopularniejsze z nich to technika
            alpinistyczna, wykorzystanie podnośnika lub mycie szyb z poziomu gruntu. Na wybór konkretnego sposobu ma
            wpływ przede wszystkim wysokość budynku i budżet klienta. Naszym zleceniodawcom proponujemy usługę
            najbardziej ekonomiczną i najmniej inwazyjną - czyszczenie szyb i elewacji z wykorzystaniem kijów
            teleskopowych z poziomu gruntu.
          </p>

          <ServiceIconSection icon="window" title="Mycie szyb">
            <p>
              Oferujemy fachowe mycie okien i przeszkleń w biurowcach, wieżowcach i obiektach handlowo-usługowych.
              Posiadamy specjalistyczny sprzęt umożliwiający precyzyjne czyszczenie szyb, framug i fasad. Nie stosujemy
              technik alpinistycznych, jednak dzięki wykorzystaniu szczotek teleskopowych sięgamy poziomu 26 metrów, nie
              stwarzając zagrożenia. Ta wysokość odpowiada w przybliżeniu 8-piętrowemu budynkowi.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="building" title="Mycie elewacji">
            <p>
              Przeprowadzając wysokościowe mycie elewacji gwarantujemy doskonały efekt wizualny - bez zacieków i smug. W
              tym celu stosujemy wielokrotnie filtrowaną, demineralizowaną wodę, o większych zdolnościach absorpcji
              brudu. Dzięki temu możemy zagwarantować nie tylko długotrwały, lśniący efekt, ale także dotarcie w nawet
              trudno dostępne miejsca. Regularne mycie fasad i przeszkleń to nie tylko kwestia estetyki, ale także
              komfortu pracy i warunków mieszkalnych. Zanieczyszczone szyby ograniczają przenikanie światła dziennego do
              wnętrza, zmniejszając widoczność i prowadząc do generowania wyższych rachunków za elektryczność.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="store" title="Mycie witryn sklepowych">
            <p>
              Poza dbaniem o zewnętrzne części budynków zajmujemy się także czyszczeniem przeszkleń wewnątrz obiektów.
              Szyby wystawowe to elementy o niestandardowych wymiarach, a dotarcie do ich wszystkich zakamarków wymaga
              czasu i odpowiedniego sprzętu. Dolne partie są szczególnie narażone na zaleganie kurzu i brudu oraz
              powstawanie tłustych, nieestetycznych śladów po odciskach palców. Mycie witryn sklepowych w
              wielkopowierzchniowych kompleksach oferujemy w ramach współpracy okazjonalnej i abonamentowej.
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Bezpieczne mycie okien na wysokości</h2>
          <p className="mb-6">
            Duże powierzchnie szklane, a nawet całe elewacje ze szkła, to istotny trend we współczesnej architekturze. Z
            tego względu mycie okien na wysokościach cieszy się coraz większym zainteresowaniem. Bez względu na to, czy
            usługa obejmuje wyłącznie mycie fasad czy całej elewacji budynku, tego typu prace powinny być wykonywane
            przez fachowców. Powierzenie wysokościowego mycia okien specjalistom to gwarancja precyzyjnie wykonanej
            usługi, z zachowaniem środków ostrożności wynikających z zasad BHP. W ten sposób można uzyskać najlepsze
            możliwe rezultaty, nie ryzykując jednocześnie dobrem pracowników i otoczenia, a także stanem technicznym
            budynku.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Mycie okien i witryn - od 5 zł/m<sup>2</sup>
          </p>
          <p>
            Mycie okien na wysokości do 20 m - od 8 zł/m<sup>2</sup>
          </p>
          <p>
            Mycie elewacji - od 7 zł/m<sup>2</sup>
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
