import ServiceLayout from "@/app/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"
import ServiceSchema from "@/components/service-schema"
import type { Metadata } from "next"

const pageUrl = "https://ecoefect.pl/sprzatanie-galerii-handlowych"

export const metadata: Metadata = {
  title: "Sprzątanie galerii i centrów handlowych | Eco Efect Bydgoszcz",
  description:
    "Sprzątanie galerii i centrów handlowych w Bydgoszczy i okolicach. Utrzymanie czystości pasaży, sanitariatów i stref wspólnych. Zapytaj Eco Efect o wycenę.",
  alternates: { canonical: pageUrl },
}

export default function SprzatanieGaleriiHandlowychPage() {
  const faqItems = [
    {
      question: "Jak często należy sprzątać galerię handlową?",
      answer: "Częstotliwość zależy od wielkości obiektu, liczby odwiedzających i rodzaju stref. W pasażach i sanitariatach zwykle potrzebne jest regularne utrzymanie czystości w ciągu dnia oraz prace gruntowne według ustalonego harmonogramu.",
    },
    {
      question: "Czy sprzątanie można zorganizować poza godzinami otwarcia?",
      answer: "Tak, harmonogram prac można dopasować do godzin funkcjonowania obiektu. Czyszczenie posadzek i inne prace wymagające ograniczenia ruchu planujemy z zarządcą tak, by nie utrudniać korzystania z galerii.",
    },
    {
      question: "Czy oferta obejmuje również strefy gastronomiczne i sanitariaty?",
      answer: "Tak, zakres współpracy może obejmować strefy wspólne przy lokalach gastronomicznych oraz sanitariaty. Szczegółowy plan, częstotliwość i zakres czynności ustalamy indywidualnie dla obiektu.",
    },
    {
      question: "Od czego zależy cena sprzątania centrum handlowego?",
      answer: "Wycena zależy od powierzchni, układu i rodzaju stref, natężenia ruchu, zakresu prac oraz ich częstotliwości. Skontaktuj się z nami, aby omówić potrzeby obiektu i otrzymać indywidualną ofertę.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl={pageUrl} />
      <ServiceSchema
        serviceName="Sprzątanie galerii i centrów handlowych Bydgoszcz"
        serviceDescription="Utrzymanie czystości galerii i centrów handlowych w Bydgoszczy i okolicach: pasaże, sanitariaty, wejścia oraz strefy wspólne."
        serviceUrl={pageUrl}
        imageUrl="/sprzatanie-galerii.jpg"
      />
      <ServiceLayout
        title="Sprzątanie galerii i centrów handlowych Bydgoszcz"
        pageName="Sprzątanie galerii handlowych"
        imageUrl="/sprzatanie-galerii.jpg"
      >
        <div className="prose max-w-none">
          <p className="mb-6">
            Galerie i centra handlowe wymagają stałej dbałości o czystość przestrzeni odwiedzanych przez klientów.
            Eco Efect oferuje sprzątanie obiektów handlowych w Bydgoszczy i okolicach, z zakresem prac dopasowanym
            do układu budynku, natężenia ruchu i godzin otwarcia.
          </p>

          <ServiceIconSection title="Pasaże, wejścia i ciągi komunikacyjne">
            <p>
              Dbamy o czystość pasaży, wejść, holów, schodów i wind. Usuwanie bieżących zabrudzeń oraz regularne
              mycie posadzek pomagają utrzymać estetykę miejsc o dużym natężeniu ruchu przez cały dzień.
            </p>
          </ServiceIconSection>

          <ServiceIconSection title="Sanitariaty i strefy wspólne">
            <p>
              Sprzątanie sanitariatów, części wypoczynkowych i wspólnych przestrzeni przy strefach gastronomicznych
              dopasowujemy do potrzeb obiektu. Uwzględniamy czyszczenie powierzchni dotykowych i opróżnianie koszy.
            </p>
          </ServiceIconSection>

          <ServiceIconSection title="Prace okresowe i elastyczny harmonogram">
            <p>
              Oprócz codziennego utrzymania czystości możemy zaplanować okresowe mycie przeszkleń, czyszczenie
              posadzek i prace porządkowe po wydarzeniach. Terminy ustalamy z zarządcą, aby ograniczyć utrudnienia
              dla najemców i odwiedzających.
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Zakres usług</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Strefy wejściowe</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Sprzątanie wejść i holów</li>
                <li>Mycie drzwi i przeszkleń</li>
                <li>Usuwanie bieżących zabrudzeń</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Pasaże i komunikacja</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Mycie posadzek</li>
                <li>Czyszczenie schodów i wind</li>
                <li>Opróżnianie koszy</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Strefy wspólne</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Sprzątanie sanitariatów</li>
                <li>Porządek przy strefie gastronomicznej</li>
                <li>Czyszczenie powierzchni dotykowych</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Prace okresowe</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Gruntowne czyszczenie posadzek</li>
                <li>Mycie przeszkleń</li>
                <li>Sprzątanie po wydarzeniach</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Cena sprzątania galerii i centrum handlowego zależy od powierzchni, liczby stref, natężenia ruchu,
            zakresu zadań oraz częstotliwości prac. Skontaktuj się z nami, aby otrzymać indywidualną wycenę.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6">FAQ</h2>
          <div className="space-y-1">
            {faqItems.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </ServiceLayout>
    </>
  )
}
