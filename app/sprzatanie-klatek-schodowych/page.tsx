import ServiceLayout from "@/app/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"
import ServiceSchema from "@/components/service-schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sprzątanie klatek schodowych Bydgoszcz | Eco Efect",
  description:
    "Profesjonalne sprzątanie klatek schodowych w Bydgoszczy dla wspólnot mieszkaniowych, spółdzielni i kamienic. Regularne utrzymanie czystości w częściach wspólnych. ☎ 502 630 031.",
  alternates: {
    canonical: "https://ecoefect.pl/sprzatanie-klatek-schodowych",
  },
}

export default function SprzatanieKlatekSchodowych() {
  const faqItems = [
    {
      question: "Jak często powinno być realizowane sprzątanie klatek schodowych?",
      answer:
        "Częstotliwość zależy od wielkości budynku i liczby mieszkańców. Standardowo zalecamy sprzątanie 1-2 razy w tygodniu. W większych budynkach mieszkalnych możemy je realizować nawet codziennie.",
    },
    {
      question: "Czy oferują Państwo sprzątanie klatek schodowych w weekendy?",
      answer:
        "Tak, pracujemy elastycznie – również w weekendy oraz w godzinach porannych lub wieczornych, aby nie zakłócać spokoju mieszkańców. Harmonogram ustalamy indywidualnie ze wspólnotą lub zarządcą.",
    },
    {
      question: "Czy zakres prac obejmuje również mycie okien i przeszkleń?",
      answer:
        "Oczywiście. Zajmujemy się również myciem okien, przeszkleń, drzwi wejściowych, balustrad oraz lamp. Cały zakres ustalamy indywidualnie w umowie.",
    },
    {
      question: "Ile kosztuje sprzątanie klatki schodowej?",
      answer:
        "Cena zależy od liczby pięter, powierzchni, częstotliwości oraz zakresu prac. Oferujemy bezpłatną wycenę po wizji lokalnej. Skontaktuj się z nami, aby poznać szczegóły oferty.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl="https://ecoefect.pl/sprzatanie-klatek-schodowych" />
      <ServiceSchema
        serviceName="Sprzątanie klatek schodowych Bydgoszcz"
        serviceDescription="Profesjonalne sprzątanie klatek schodowych w Bydgoszczy dla wspólnot mieszkaniowych, spółdzielni i kamienic. Eco Efect zapewnia regularne utrzymanie czystości w częściach wspólnych budynków."
        serviceUrl="https://ecoefect.pl/sprzatanie-klatek-schodowych"
        imageUrl="/sprzatanie-klatki.jpg"
      />
      <ServiceLayout
        title="Sprzątanie klatek schodowych Bydgoszcz"
        pageName="Sprzątanie klatek schodowych"
        imageUrl="/sprzatanie-klatki.jpg"
      >
        <div className="prose max-w-none">
          <p className="mb-6">
            Sprzątanie klatek schodowych w Bydgoszczy to usługa skierowana do wspólnot mieszkaniowych, spółdzielni,
            kamienic oraz biurowców. Eco Efect dba o czystość w częściach wspólnych budynków, zapewniając mieszkańcom
            i gościom przyjemne otoczenie. Działamy na terenie całej Bydgoszczy oraz okolic, oferując elastyczne
            harmonogramy i atrakcyjne stawki abonamentowe.
          </p>

          <ServiceIconSection icon="building" title="Regularne sprzątanie klatek schodowych">
            <p>
              W ramach standardowej usługi wykonujemy mycie podłóg, schodów i podestów,
              odkurzanie wycieraczek, wycieranie kurzu z balustrad, parapetów i skrzynek na listy oraz dezynfekcję
              powierzchni dotykowych. Dbamy o każdy szczegół – od piwnicy po ostatnie piętro.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="window" title="Mycie okien i przeszkleń">
            <p>
              Czyste okna w klatce schodowej to lepsze doświetlenie i estetyczny wygląd budynku. Regularnie myjemy
              okna, przeszklenia, drzwi wejściowe oraz lampy i oprawy oświetleniowe. Zapewniamy profesjonalny
              sprzęt i bezpieczne środki czystości.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="store" title="Czyszczenie posadzek i piwnic">
            <p>
              Oferujemy również okresowe czyszczenie i polimeryzację posadzek, sprzątanie korytarzy piwnicznych,
              pomieszczeń wózkowni oraz wind. Kompleksowo dbamy o wszystkie strefy wspólne budynku, dzięki czemu
              mieszkańcy zawsze mają zadbane otoczenie.
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Zakres usług</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Sprzątanie regularne</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Mycie podłóg i schodów</li>
                <li>Odkurzanie wycieraczek</li>
                <li>Wycieranie balustrad</li>
                <li>Czyszczenie skrzynek pocztowych</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Mycie przeszkleń</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Mycie okien</li>
                <li>Czyszczenie drzwi wejściowych</li>
                <li>Mycie luksferów</li>
                <li>Czyszczenie lamp</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Strefy wspólne</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Sprzątanie wind</li>
                <li>Czyszczenie wózkowni</li>
                <li>Mycie korytarzy piwnicznych</li>
                <li>Dezynfekcja klamek i poręczy</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Usługi okresowe</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Polimeryzacja posadzek</li>
                <li>Sprzątanie po remontach</li>
                <li>Pranie wycieraczek</li>
                <li>Mycie elewacji wejściowej</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Dla kogo?</h2>
          <p className="mb-6">
            Naszą ofertę kierujemy do wspólnot mieszkaniowych, spółdzielni, zarządców nieruchomości, kamienic,
            apartamentowców oraz biurowców. Zakres prac i częstotliwość dostosowujemy do potrzeb klienta.
            Współpracujemy z dziesiątkami budynków na terenie Bydgoszczy i okolic – zaufały nam zarówno małe
            wspólnoty kilkurodzinne, jak i duże osiedla.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Cenę ustalamy indywidualnie na podstawie liczby pięter, powierzchni, zakresu prac oraz częstotliwości.
            Skontaktuj się z nami, aby otrzymać bezpłatną wycenę. Oferujemy korzystne stawki abonamentowe dla
            wspólnot mieszkaniowych.
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
