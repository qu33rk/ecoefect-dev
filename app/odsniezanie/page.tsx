import ServiceLayout from "@/app/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"
import ServiceSchema from "@/components/service-schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Odśnieżanie parkingów, placów i obiektów | ECO EFECT Bydgoszcz",
  description:
    "Prowadzimy prace zimowe związane z odśnieżaniem parkingów, chodników, obiektów i przestrzeni wokół budynków. Usuwamy warstwy ubitego śniegu, sople lodu oraz błoto. Pracujemy sprawnie, dokładnie, na własnych narzędziach!",
  alternates: {
    canonical: "https://ecoefect.pl/odsniezanie",
  },
}

export default function OdsniezaniePage() {
  const faqItems = [
    {
      question: "Jak szybko reagujecie na opady śniegu?",
      answer:
        "W przypadku klientów abonamentowych, rozpoczynamy odśnieżanie niezwłocznie po opadach śniegu, zazwyczaj w ciągu 1-2 godzin. Dla zleceń jednorazowych, czas reakcji zależy od dostępności zespołu i warunków pogodowych.",
    },
    {
      question: "Czy oferujecie usługi jednorazowe czy tylko abonamentowe?",
      answer:
        "Oferujemy zarówno usługi jednorazowe, jak i abonamentowe. W przypadku usług abonamentowych, klient może liczyć na priorytetową obsługę po każdych opadach śniegu w okresie zimowym.",
    },
    {
      question: "Jakich środków używacie do posypywania oblodzonych powierzchni?",
      answer:
        "W zależności od potrzeb i preferencji klienta, stosujemy różne środki przeciwpoślizgowe, w tym sól drogową, piasek, mieszankę soli i piasku oraz ekologiczne środki przeciwoblodzeniowe, które są bezpieczne dla roślin i zwierząt.",
    },
    {
      question: "Czy zapewniacie własny sprzęt?",
      answer:
        "Tak, posiadamy pełen zakres profesjonalnego sprzętu niezbędnego do odśnieżania, w tym pługi, odśnieżarki, posypywarki oraz sprzęt do załadunku i transportu śniegu.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl="https://ecoefect.pl/odsniezanie" />
      <ServiceSchema
        serviceName="Odśnieżanie parkingów, placów i obiektów"
        serviceDescription="Prowadzimy prace zimowe związane z odśnieżaniem parkingów, chodników, obiektów i przestrzeni wokół budynków. Usuwamy warstwy ubitego śniegu, sople lodu oraz błoto."
        serviceUrl="https://ecoefect.pl/odsniezanie"
        imageUrl="/odsniezanie.jpg"
      />
      <ServiceLayout
        title="Odśnieżanie parkingów, placów i obiektów"
        pageName="Odśnieżanie parkingów, placów i obiektów"
        imageUrl="/odsniezanie.jpg"
      >
        <div className="prose max-w-none">
          <p className="mb-6">
            Oferujemy profesjonalne usługi odśnieżania i zimowego utrzymania terenów dla firm, instytucji i wspólnot
            mieszkaniowych. Nasze usługi zapewniają bezpieczeństwo i komfort użytkowania parkingów, chodników i dróg
            dojazdowych w okresie zimowym.
          </p>

          <ServiceIconSection icon="window" title="Odśnieżanie parkingów i placów">
            <p>
              Świadczymy usługi odśnieżania parkingów, placów manewrowych i innych dużych powierzchni. Wykorzystujemy
              profesjonalny sprzęt, który pozwala na szybkie i efektywne usunięcie śniegu nawet z rozległych terenów.
              Nasze usługi obejmują również posypywanie powierzchni środkami przeciwpoślizgowymi, co zapobiega tworzeniu
              się oblodzeń i zapewnia bezpieczeństwo użytkownikom.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="building" title="Odśnieżanie chodników i dróg dojazdowych">
            <p>
              Oferujemy odśnieżanie chodników, dróg dojazdowych, schodów i innych ciągów komunikacyjnych. Dbamy o to,
              aby wszystkie przejścia były bezpieczne i dostępne dla pieszych. Nasze usługi obejmują również usuwanie
              sopli lodowych i nawisów śnieżnych, które mogą stanowić zagrożenie dla przechodniów.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="store" title="Wywóz śniegu">
            <p>
              W przypadku obfitych opadów śniegu, oferujemy usługi wywozu śniegu z terenów, gdzie jego składowanie jest
              niemożliwe lub utrudnione. Dysponujemy odpowiednim sprzętem do załadunku i transportu śniegu, co pozwala
              na szybkie i efektywne oczyszczenie terenu.
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Dlaczego warto zlecić odśnieżanie profesjonalistom?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Bezpieczeństwo - minimalizacja ryzyka wypadków i urazów</li>
            <li>
              Odpowiedzialność prawna - właściciele i zarządcy nieruchomości są zobowiązani do utrzymania bezpiecznych
              warunków na swoim terenie
            </li>
            <li>Oszczędność czasu - odśnieżanie to czasochłonne zadanie, które wymaga odpowiedniego sprzętu</li>
            <li>
              Profesjonalny sprzęt - dysponujemy specjalistycznym sprzętem, który pozwala na efektywne odśnieżanie
              różnych powierzchni
            </li>
            <li>Całodobowa dostępność - jesteśmy gotowi do działania 24/7 w okresie zimowym</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Odśnieżanie parkingów - od 0,80 zł/m<sup>2</sup> miesięcznie (abonament)
          </p>
          <p>
            Odśnieżanie chodników - od 2 zł/m<sup>2</sup> miesięcznie (abonament)
          </p>
          <p>Jednorazowe odśnieżanie - wycena indywidualna</p>
          <p>Wywóz śniegu - wycena indywidualna</p>

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
