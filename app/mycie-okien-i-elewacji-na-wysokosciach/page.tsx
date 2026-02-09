import ServiceLayout from "@/app/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"
import ServiceSchema from "@/components/service-schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mycie okien na wysokości | Eco Efect Bydgoszcz",
  description: "Specjalizujemy się w wysokościowym myciu okien i elewacji metodą teleskopową. Sięgamy do 20 metrów bez technik alpinistycznych. Bezpiecznie i bez smug!",
  alternates: {
    canonical: "https://ecoefect.pl/mycie-okien-i-elewacji-na-wysokosciach",
  },
}

export default function MycieOkienWysokoscPage() {
  const faqItems = [
    {
      question: "Jaką techniką wykonujecie mycie okien na wysokości?",
      answer: "Wysokościowe mycie okien przeprowadzamy z poziomu gruntu, wykorzystując w tym celu kije teleskopowe. Nie stosujemy technik alpinistycznych.",
    },
    {
      question: "Do jakiej wysokości sięgacie?",
      answer: "Nasze kije teleskopowe umożliwiają bezpieczne dotarcie do poziomu około 20 metrów, co odpowiada w przybliżeniu 6-7 piętrowemu budynkowi.",
    },
    {
      question: "Jaki sprzęt wykorzystujecie podczas mycia okien na wysokości?",
      answer:
        "Korzystamy z profesjonalnych urządzeń Ionic Quattro – kompaktowego systemu myjącego wyposażonego w kije teleskopowe zakończone szczotką, który wykorzystuje wodę demineralizowaną działającą pod ciśnieniem.",
    },
    {
      question: "Dlaczego używacie wody demineralizowanej?",
      answer:
        "Woda demineralizowana, otrzymywana w procesie odwróconej osmozy, jest pozbawiona minerałów i zanieczyszczeń. Dzięki temu po wyschnięciu nie pozostawia smug ani zacieków, a efekt jest trwalszy.",
    },
    {
      question: "Czy mycie teleskopowe jest bezpieczne dla budynku?",
      answer:
        "Tak, metoda teleskopowa jest całkowicie bezpieczna. Nie wymaga montażu rusztowań ani kontaktu pracowników z elewacją, co eliminuje ryzyko uszkodzeń mechanicznych.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl="https://ecoefect.pl/mycie-okien-i-elewacji-na-wysokosciach" />
      <ServiceSchema
        serviceName="Mycie okien na wysokości"
        serviceDescription="Specjalizujemy się w wysokościowym myciu okien i elewacji metodą teleskopową. Sięgamy do 20 metrów bez technik alpinistycznych."
        serviceUrl="https://ecoefect.pl/mycie-okien-i-elewacji-na-wysokosciach"
        imageUrl="/mycie-okien-na-wysokosci.jpg"
      />
      <ServiceLayout
        title="Mycie okien na wysokości"
        pageName="Mycie okien na wysokości"
        imageUrl="/mycie-okien-na-wysokosci.jpg"
      >
        <div className="prose max-w-none">
          <p className="mb-6">
            Specjalizujemy się w wysokościowym myciu okien i elewacji budynków wielokondygnacyjnych. Stosujemy
            nowoczesną metodę teleskopową, która pozwala na bezpieczne i skuteczne czyszczenie przeszkleń
            z poziomu gruntu – bez konieczności stosowania technik alpinistycznych czy podnośników.
          </p>

          <ServiceIconSection icon="building" title="Metoda teleskopowa">
            <p>
              Nasze kije teleskopowe sięgają do wysokości około 20 metrów, co odpowiada 6-7 piętrowemu budynkowi.
              Dzięki temu możemy czyścić okna biurowców, apartamentowców i obiektów komercyjnych bez stwarzania
              zagrożenia dla pracowników i otoczenia. Metoda jest ekonomiczna i nie wymaga zamykania terenu
              wokół budynku.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="window" title="Mycie elewacji szklanych">
            <p>
              Oferujemy kompleksowe mycie całych elewacji szklanych – fasad biurowców, centrów handlowych
              i nowoczesnych budynków mieszkalnych. Stosujemy wodę demineralizowaną, która nie pozostawia
              smug ani zacieków nawet na dużych powierzchniach szklanych. Gwarantujemy doskonały efekt
              wizualny i długotrwałą czystość.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="store" title="Czyszczenie trudno dostępnych miejsc">
            <p>
              Dzięki specjalistycznemu sprzętowi docieramy do miejsc niedostępnych dla tradycyjnych metod –
              świetlików dachowych, przeszkleń nad wejściami, okien w trudnych lokalizacjach. Szczotki
              teleskopowe pozwalają na precyzyjne czyszczenie każdego zakamarku, niezależnie od kształtu
              i położenia okna.
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Dlaczego metoda teleskopowa?</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Bezpieczeństwo</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Praca z poziomu gruntu</li>
                <li>Brak rusztowań i podnośników</li>
                <li>Minimalne ryzyko wypadków</li>
                <li>Brak ingerencji w elewację</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Efektywność</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Woda demineralizowana</li>
                <li>Brak smug i zacieków</li>
                <li>Szybka realizacja</li>
                <li>Trwały efekt czystości</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Ceny usług mycia okien na wysokości ustalane są indywidualnie, w zależności od wysokości budynku,
            powierzchni przeszkleń oraz stopnia zabrudzenia. Skontaktuj się z nami, aby otrzymać bezpłatną wycenę.
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
