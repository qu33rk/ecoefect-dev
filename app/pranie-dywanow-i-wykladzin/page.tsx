import ServiceLayout from "@/app/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"
import ServiceSchema from "@/components/service-schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pranie i czyszczenie dywanów Bydgoszcz | Eco Efect",
  description:
    "Profesjonalne pranie i czyszczenie dywanów w Bydgoszczy i okolicach. Usuwamy plamy, roztocza, sierść i nieprzyjemne zapachy metodą ekstrakcyjną.",
  alternates: {
    canonical: "https://ecoefect.pl/pranie-dywanow-i-wykladzin",
  },
}

export default function PranieDywanowPage() {
  const faqItems = [
    {
      question: "Jak często warto prać dywan?",
      answer:
        "W domach najczęściej rekomendujemy gruntowne pranie dywanu co 6-12 miesięcy, a przy dzieciach, zwierzętach lub alergikach nawet częściej.",
    },
    {
      question: "Czy usuwacie trudne plamy i zapachy z dywanów?",
      answer:
        "Tak, usuwamy m.in. plamy po kawie, winie i błocie oraz neutralizujemy nieprzyjemne zapachy. Efekt zależy od rodzaju włókna i czasu, jaki minął od zabrudzenia.",
    },
    {
      question: "Jaką metodą czyścicie dywany?",
      answer:
        "Stosujemy metodę ekstrakcyjną: nanosimy roztwór czyszczący, a następnie odsysamy go z brudem. To skuteczny i bezpieczny sposób doczyszczania runa.",
    },
    {
      question: "Po jakim czasie dywan jest gotowy do użytkowania?",
      answer:
        "Zazwyczaj po około 3-6 godzinach, w zależności od rodzaju dywanu, wilgotności powietrza i wentylacji pomieszczenia.",
    },
    {
      question: "Czy środki do prania dywanów są bezpieczne dla dzieci i zwierząt?",
      answer:
        "Tak, korzystamy z profesjonalnych środków przeznaczonych do użytku we wnętrzach. Po wyschnięciu dywanu można bezpiecznie korzystać z pomieszczenia.",
    },
    {
      question: "Czy czyścicie też wykładziny biurowe?",
      answer:
        "Tak, realizujemy także czyszczenie wykładzin w biurach i lokalach usługowych jako usługę uzupełniającą wobec prania dywanów.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl="https://ecoefect.pl/pranie-dywanow-i-wykladzin" />
      <ServiceSchema
        serviceName="Pranie i czyszczenie dywanów"
        serviceDescription="Profesjonalne pranie i czyszczenie dywanów w Bydgoszczy i okolicach. Usuwamy plamy, roztocza, sierść i nieprzyjemne zapachy metodą ekstrakcyjną."
        serviceUrl="https://ecoefect.pl/pranie-dywanow-i-wykladzin"
        imageUrl="/czyszczenie-dywanu.jpg"
      />
      <ServiceLayout
        title="Pranie i czyszczenie dywanów Bydgoszcz"
        pageName="Pranie i czyszczenie dywanów"
        imageUrl="/czyszczenie-dywanu.jpg"
      >
        <div className="prose max-w-none">
          <p className="mb-6">
            Oferujemy profesjonalne pranie i czyszczenie dywanów dla klientów indywidualnych oraz firm w Bydgoszczy i
            okolicach. Skutecznie usuwamy plamy, kurz, roztocza, sierść i nieprzyjemne zapachy, przywracając dywanom
            świeżość, miękkość i estetyczny wygląd.
          </p>

          <p className="mb-6">
            Samodzielne czyszczenie dywanu często usuwa jedynie zabrudzenia powierzchowne. Korzystamy ze sprzętu
            ekstrakcyjnego, który dociera głębiej w runo i pozwala skutecznie odświeżyć dywan bez ryzyka uszkodzenia
            włókien.
          </p>

          <ServiceIconSection icon="window" title="Usuwanie trudnych plam z dywanów">
            <p>
              Usuwamy świeże i utrwalone zabrudzenia, m.in. po napojach, błocie czy codziennym użytkowaniu.
              Szczególną uwagę poświęcamy miejscom najbardziej eksploatowanym, takim jak ciągi komunikacyjne,
              strefy przy sofie czy przestrzeń przy wejściu.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="building" title="Pranie dywanów metodą ekstrakcyjną">
            <p>
              Metoda ekstrakcyjna polega na natrysku roztworu czyszczącego i odessaniu go razem z brudem.
              Dzięki temu efektywnie czyścimy włókna dywanu na większej głębokości, a nie tylko jego powierzchnię.
              To sprawdzona technika, która przywraca świeżość i poprawia higienę użytkowania.
            </p>
            <p className="mt-4">
              Na życzenie wykonujemy również impregnację dywanu, która spowalnia ponowne osadzanie się zabrudzeń
              i ułatwia codzienne utrzymanie czystości.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="store" title="Czyszczenie wykładzin jako usługa dodatkowa">
            <p>
              Poza praniem dywanów realizujemy także czyszczenie wykładzin w mieszkaniach, biurach i lokalach usługowych.
              Zakres tej usługi dobieramy indywidualnie do powierzchni i rodzaju materiału.
            </p>
            <p className="mt-4">
              Pracujemy na terenie Bydgoszczy i okolic. Dla większych realizacji dojeżdżamy również w regionie
              kujawsko-pomorskim po wcześniejszym ustaleniu.
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Pranie dywanów - wycena indywidualna (w zależności od rodzaju runa, metrażu i stopnia zabrudzenia).
          </p>
          <p>
            Czyszczenie wykładzin - od 6 zł/m<sup>2</sup>
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
