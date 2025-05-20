import ServiceLayout from "@/components/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"

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
        title="Czyszczenie wykładzin i pranie dywanów"
        pageName="pranie-dywanow-i-wykladzin"
        imageUrl="/images/carpet-cleaning.png"
      >
        <div className="prose max-w-none">
          <p className="mb-6">
            Gdy dojdziesz do wniosku, że dywanowi lub wykładzinie w Twoim domu czy firmie daleko do pierwotnej
            świeżości, zachwali po nas! Samodzielne próby wyczyszczenia wykładziny z trudnych do usunięcia plam czy
            głębokich zabrudzeń są czasochłonne i wymagają odpowiednich preparatów. Często brakuje także pewności, czy i
            w jakim stopniu domowe metody będą skuteczne. Tradycyjne domowe metody są tu nie sprawdzają. Trzeba też
            pamiętać, że wymaga włożenia wiele energii, co stanowi znaczące potknięcie w walce z nieoczekiwanymi! Często
            pojawia się też problem braku miejsca do realizacji tej czynności.
          </p>

          <p className="mb-6">
            Profesjonalne czyszczenie wykładzin rozwiąże Twój problem szybko i skutecznie. Zaufaj doświadczonym osobom,
            które dysponują nie tylko wiedzą i doświadczeniem, ale przede wszystkim sprzętem umożliwiającym usuwanie
            odpornych i uporczywych włókien.
          </p>

          <ServiceIconSection icon="window" title="Koniec z trudnymi plamami!">
            <p>
              Oferujemy profesjonalne usuwanie starych, uporczywych, nowych i trudno usuwalnych plam. Bez trudu
              poradzimy sobie z pozostałościami po kawie, czerwonym winie, herbacie, krwi czy wosku. Mamy również coś
              dla miłośników zwierząt: pozbędziemy się nieprzyjemnej sierści, głęboko zalegającej w Twoim dywanie czy
              wykładzinie. Każde z tych zanieczyszczeń jest poważną dla użytkowników domu lub biura, a także problemem
              dla osób sprzątających tradycyjnymi metodami. Jesteśmy firmą świadczącą wykładzin nie tylko tak, jak
              podjął skutecznej!
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
              alergii i są przyjemne zapachowo.
            </p>
            <p className="mt-4">
              Cenę czyszczenia wykładzin lub dywanu obliczamy z uwzględnieniem ich powierzchni oraz materiału, z którego
              zostały wykonane.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="store" title="Czyszczenie tapicerki meblowej">
            <p>
              Czyszczenie tapicerki meblowej to czynność, którą warto powtarzać regularnie. Podobnie jak w przypadku
              czyszczenia wykładzin i prania dywanów, wykonamy ją niezależnie pod Twój adres - niezależnie czy chodzi o
              sprzątanie w firmie, czy też w domu. Pozwoli Ci to zaoszczędzić czas oraz kłopoty związane z przewożeniem
              mebli.
            </p>
            <p className="mt-4">
              Jeżeli szukasz kompleksowej usługi sprzątania, możesz u nas również skorzystać z opcji doczyszczania
              pomieszczeń. Skontaktuj się z nami, aby uzyskać szczegółową ofertę.
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
