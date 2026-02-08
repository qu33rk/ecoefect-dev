import ServiceLayout from "@/app/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"
import ServiceSchema from "@/components/service-schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sprzątanie biur i obiektów komercyjnych | Eco Efect Bydgoszcz",
  description:
    "Profesjonalne sprzątanie biur, obiektów komercyjnych i przestrzeni biurowych w Bydgoszczy. Oferujemy kompleksowe usługi utrzymania czystości dla firm. Sprawdź naszą ofertę!",
  alternates: {
    canonical: "https://ecoefect.pl/sprzatanie-biur",
  },
}

export default function SprzatanieBiurPage() {
  const faqItems = [
    {
      question: "Jak często powinno być sprzątane biuro?",
      answer:
        "Częstotliwość sprzątania zależy od wielkości biura i liczby pracowników. Standardowo zalecamy sprzątanie codzienne lub co drugi dzień. Dla mniejszych biur wystarczające może być sprzątanie 2-3 razy w tygodniu.",
    },
    {
      question: "Czy oferujecie sprzątanie w godzinach nocnych lub weekendowych?",
      answer:
        "Tak, dostosowujemy godziny pracy do potrzeb klienta. Możemy sprzątać w godzinach wieczornych, nocnych lub w weekendy, aby nie zakłócać normalnego funkcjonowania biura.",
    },
    {
      question: "Jakie środki czystości używacie?",
      answer:
        "Stosujemy profesjonalne, certyfikowane środki czystości, w tym produkty ekologiczne i hipoalergiczne. Na życzenie klienta możemy używać wyłącznie środków przyjaznych dla środowiska.",
    },
    {
      question: "Czy zapewniacie własny sprzęt i środki czystości?",
      answer:
        "Tak, zapewniamy pełen zakres profesjonalnego sprzętu oraz środków czystości. Klient nie musi się martwić o zaopatrzenie w jakiekolwiek materiały.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl="https://ecoefect.pl/sprzatanie-biur" />
      <ServiceSchema
        serviceName="Sprzątanie biur i obiektów komercyjnych"
        serviceDescription="Profesjonalne sprzątanie biur, obiektów komercyjnych i przestrzeni biurowych w Bydgoszczy. Oferujemy kompleksowe usługi utrzymania czystości dla firm."
        serviceUrl="https://ecoefect.pl/sprzatanie-biur"
        imageUrl="/sprzatanie-biur.jpg"
      />
      <ServiceLayout
        title="Sprzątanie biur i obiektów komercyjnych"
        pageName="Sprzątanie biur"
        imageUrl="/sprzatanie-biur.jpg"
      >
        <div className="prose max-w-none">
          <p className="mb-6">
            Oferujemy profesjonalne usługi sprzątania biur i obiektów komercyjnych dla firm w Bydgoszczy i okolicach.
            Zapewniamy kompleksowe utrzymanie czystości, dzięki czemu Twoi pracownicy mogą skupić się na tym, co
            najważniejsze – swojej pracy.
          </p>

          <ServiceIconSection icon="building" title="Codzienne sprzątanie biur">
            <p>
              Nasze codzienne usługi sprzątania obejmują odkurzanie i mycie podłóg, wycieranie kurzu z mebli i sprzętów,
              opróżnianie koszy na śmieci, czyszczenie i dezynfekcję toalet oraz kuchni biurowych. Dbamy o każdy
              szczegół, aby Twoje biuro zawsze prezentowało się nienagannie.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="window" title="Mycie okien i przeszkleń">
            <p>
              W ramach kompleksowej obsługi oferujemy regularne mycie okien wewnętrznych i zewnętrznych, czyszczenie
              przeszklonych ścianek działowych oraz drzwi szklanych. Czyste okna wpuszczają więcej światła i tworzą
              przyjemniejszą atmosferę pracy.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="store" title="Sprzątanie przestrzeni wspólnych">
            <p>
              Zajmujemy się również utrzymaniem czystości w częściach wspólnych budynków biurowych – recepcjach, korytarzach,
              klatkach schodowych, windach i parkingach podziemnych. Zapewniamy profesjonalny wizerunek Twojej firmy od
              samego wejścia do budynku.
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Zakres usług</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Usługi codzienne</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Odkurzanie i mycie podłóg</li>
                <li>Wycieranie kurzu</li>
                <li>Opróżnianie koszy</li>
                <li>Dezynfekcja sanitariatów</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Usługi okresowe</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Mycie okien</li>
                <li>Pranie wykładzin</li>
                <li>Czyszczenie tapicerki</li>
                <li>Polimeryzacja podłóg</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Usługi specjalne</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Sprzątanie po remontach</li>
                <li>Dezynfekcja pomieszczeń</li>
                <li>Sprzątanie przed/po eventach</li>
                <li>Czyszczenie serwerowni</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Dodatkowe usługi</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Uzupełnianie środków higienicznych</li>
                <li>Pielęgnacja roślin biurowych</li>
                <li>Sortowanie odpadów</li>
                <li>Drobne naprawy</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Ceny usług sprzątania biur ustalane są indywidualnie, w zależności od powierzchni, zakresu prac oraz
            częstotliwości sprzątania. Skontaktuj się z nami, aby otrzymać bezpłatną wycenę dopasowaną do potrzeb
            Twojej firmy.
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
