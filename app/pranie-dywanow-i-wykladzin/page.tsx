import ServiceLayout from "@/app/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Czyszczenie wykładzin i pranie dywanów | Eco Efect Bydgoszcz",
  description:
    "Oferujemy profesjonalne pranie wykładzin i dywanów, czyszczenie tapicerki meblowej oraz ozonowanie pomieszczeń na terenie Bydgoszczy i okolic.",
  alternates: {
    canonical: "https://ecoefect.pl/pranie-dywanow-i-wykladzin",
  },
}

export default function PranieDywanowPage() {
  const faqItems = [
    {
      question: "Czy oferujecie także usługi czyszczenia wykładzin, prania dywanów i czyszczenia tapicerki meblowej?",
      answer:
        "Tak, oferujemy kompleksowe usługi czyszczenia wykładzin, prania dywanów i czyszczenia tapicerki meblowej.",
    },
    {
      question: "Czy mogę zamówić czyszczenie wykładziny lub dywanu poza Bydgoszczą?",
      answer: "Tak, świadczymy usługi również poza Bydgoszczą. Skontaktuj się z nami, aby ustalić szczegóły.",
    },
    {
      question:
        "Czy w przypadku czyszczenia wykładziny lub prania dywanu Bydgoszcz i okolice obsługujecie całe województwo?",
      answer: "Tak, obsługujemy całe województwo kujawsko-pomorskie.",
    },
    {
      question: "Jaką metodą czyścicie dywany i wykładziny?",
      answer:
        "Stosujemy metodę ekstrakcyjną, która polega na rozpyleniu mieszaniny wody i środka czyszczącego, a następnie odessaniu jej wraz z brudem za pomocą specjalnego odkurzacza.",
    },
    {
      question: "Czy oferujecie także impregnowanie dywanów?",
      answer:
        "Tak, w ramach usługi prania dywanów wykonujemy również impregnowanie, które zabezpiecza dywan przed ponownym zabrudzeniem.",
    },
    {
      question: "Po jakim czasie można użytkować dywan lub wykładzinę?",
      answer:
        "Dywan lub wykładzinę można użytkować po około 3 godzinach od zakończenia czyszczenia, gdy wilgoć całkowicie odparuje.",
    },
    {
      question: "Czy oferujecie czyszczenie wykładzin i pranie samochodowe?",
      answer: "Tak, oferujemy również czyszczenie tapicerki samochodowej.",
    },
    {
      question: "Czy zajmujecie się czyszczeniem tapicerki meblowej?",
      answer: "Tak, czyszczenie tapicerki meblowej jest jedną z naszych specjalizacji.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl="https://ecoefect.pl/pranie-dywanow-i-wykladzin" />
      <ServiceLayout
        title="Czyszczenie wykładzin i pranie dywanów Bydgoszcz"
        pageName="Czyszczenie wykładzin i pranie dywanów Bydgoszcz"
        imageUrl="/czyszczenie-dywanu.jpg"
      >
        <div className="prose max-w-none">
          <p className="mb-6">
          Jeśli zauważysz, że Twój dywan lub wykładzina w domu czy firmie straciły dawną świeżość, nie trać czasu na nieskuteczne metody – zadzwoń do nas!
          Samodzielne próby usuwania trudnych plam czy głębokich zabrudzeń bywają bardzo czasochłonne i wymagają specjalistycznych środków. Nigdy też nie 
          ma pewności, czy domowe sposoby przyniosą oczekiwany efekt. W większości przypadków tradycyjne metody po prostu się nie sprawdzają, a dodatkowo 
          wymagają ogromu energii, co szybko zniechęca. Dochodzi do tego jeszcze problem braku odpowiednich warunków i miejsca, aby przeprowadzić dokładne czyszczenie. 
          Dlatego, jeśli chcesz szybko i skutecznie odświeżyć dywany lub wykładziny w Bydgoszczy, powierz to profesjonalistom.
          </p>

          <p className="mb-6">
            Profesjonalne czyszczenie wykładzin to najszybszy i najpewniejszy sposób, by pozbyć się problemu. Powierz to zadanie specjalistom, 
            którzy mają nie tylko wiedzę i doświadczenie, ale także nowoczesny sprzęt, dzięki któremu nawet najbardziej uporczywe zabrudzenia znikają bez śladu.
          </p>

          <ServiceIconSection icon="window" title="Koniec z trudnymi plamami!">
            <p>
              Oferujemy profesjonalne usuwanie zarówno starych i uporczywych, jak i świeżych, trudnych do wyczyszczenia plam. Bez problemu poradzimy sobie 
              z pozostałościami po kawie, czerwonym winie, herbacie, krwi czy wosku. Pomyśleliśmy też o właścicielach zwierząt – skutecznie usuwamy sierść 
              i zabrudzenia, które głęboko osadzają się w dywanach i wykładzinach. Takie zabrudzenia potrafią być ogromnym wyzwaniem dla domowników i osób 
              sprzątających tradycyjnymi metodami, ale dla nas to codzienność. Dzięki profesjonalnym rozwiązaniom sprawimy, że Twoja wykładzina odzyska świeżość
              i czystość, jakiej oczekujesz.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="building" title="Czyszczenie wykładzin i dywanów metodą ekstrakcyjną">
            <p>
              Czyszczenie dywanów metodą ekstrakcyjną, którą stosujemy na co dzień w swojej pracy, polega na rozpyleniu
              mieszaniny wody i środka czyszczącego tuż nad powierzchnią. Po wniknięciu w tkaninę substancja ta jest
              odsysana za pomocą specjalnego odkurzacza. Metoda ta pozwala usunąć różnego typu brud, stare zabrudzenia i
              nieprzyjemne zapachy. Pozostała w tkaninie wilgoć odparowuje z niej samoczynnie w ciągu około 3 godzin. W
              ramach usługi wykonujemy też impregnowanie dywanu. Po tym czasie można się po nim swobodnie poruszać.
              Stosowane przez nas środki czyszczące są całkowicie bezpieczne dla domowników oraz zwierząt. Nie wywołują
              alergii i mają przyjemny zapach.
            </p>
            <p className="mt-4">
              Cenę czyszczenia wykładzin lub dywanu obliczamy z uwzględnieniem ich powierzchni oraz materiału, z którego
              zostały wykonane.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="store" title="Czyszczenie tapicerki meblowej">
            <p>
              Czyszczenie tapicerki meblowej to zabieg, który warto wykonywać regularnie, aby Twoje meble zawsze wyglądały świeżo i estetycznie.
              Tak jak w przypadku prania dywanów czy czyszczenia wykładzin, przyjedziemy bezpośrednio pod wskazany adres – niezależnie od
              tego, czy potrzebujesz usługi w domu, czy w firmie. Dzięki temu oszczędzisz czas i unikniesz kłopotów związanych z przewożeniem mebli.
            </p>
            <p className="mt-4">
              Jeśli zależy Ci na kompleksowej usłudze sprzątania, oferujemy także dokładne doczyszczanie pomieszczeń. 
              Skontaktuj się z nami, a przygotujemy dla Ciebie szczegółową i dopasowaną ofertę.
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Pranie wykładzin - od 6 zł/m<sup>2</sup>
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
