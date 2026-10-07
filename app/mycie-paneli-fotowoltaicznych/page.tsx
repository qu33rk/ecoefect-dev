import ServiceLayout from "@/app/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"
import ServiceSchema from "@/components/service-schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mycie i czyszczenie paneli fotowoltaicznych | Eco Efect Bydgoszcz",
  description:
    "Profesjonalne mycie paneli fotowoltaicznych w Bydgoszczy i okolicach. Czyszczenie instalacji dachowych i gruntowych, przywrócenie pełnej wydajności. Eco Efect – bezpłatna wycena. ☎ 502 630 031.",
  alternates: {
    canonical: "https://ecoefect.pl/mycie-paneli-fotowoltaicznych",
  },
}

export default function MyciePaneliFotowoltaicznych() {
  const faqItems = [
    {
      question: "Jak często należy czyścić panele fotowoltaiczne?",
      answer:
        "Zalecamy mycie paneli fotowoltaicznych co najmniej raz w roku, a w przypadku instalacji w mocno zapylonych lub otoczonych drzewami lokalizacjach – dwa razy w roku, najlepiej wiosną i jesienią. Regularne czyszczenie pozwala utrzymać maksymalną wydajność instalacji przez cały rok.",
    },
    {
      question: "Czy czyszczenie paneli faktycznie zwiększa produkcję energii?",
      answer:
        "Tak. Zabrudzenia takie jak kurz, pyłki, odchody ptaków czy osady po deszczu mogą obniżyć wydajność instalacji nawet o 10-20%. Profesjonalne mycie paneli fotowoltaicznych przywraca pełną przepuszczalność światła i pozwala odzyskać utraconą produkcję energii.",
    },
    {
      question: "Jakimi metodami i środkami myjecie panele fotowoltaiczne?",
      answer:
        "Do czyszczenia paneli używamy wyłącznie metod bezpiecznych dla ogniw – wody demineralizowanej, miękkich szczotek i teleskopowych tłoków. Nie stosujemy detergentów i środków ściernych, które mogłyby uszkodzić powłokę antyrefleksyjną oraz zarysować szkło paneli.",
    },
    {
      question: "Jaki jest koszt mycia paneli fotowoltaicznych?",
      answer:
        "Cena usługi zależy od liczby paneli, typu instalacji (dachowa lub gruntowa), wysokości montażu oraz lokalizacji. Oferujemy bezpłatną wycenę na miejscu oraz korzystne stawki przy myciu okresowym. Skontaktuj się z nami, aby poznać szczegóły oferty.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl="https://ecoefect.pl/mycie-paneli-fotowoltaicznych" />
      <ServiceSchema
        serviceName="Mycie paneli fotowoltaicznych Bydgoszcz"
        serviceDescription="Profesjonalne mycie i czyszczenie paneli fotowoltaicznych w Bydgoszczy i okolicach. Czyszczenie instalacji dachowych i gruntowych, przywrócenie pełnej wydajności. Eco Efect – firma sprzątająca z doświadczeniem w pracach na wysokości."
        serviceUrl="https://ecoefect.pl/mycie-paneli-fotowoltaicznych"
        imageUrl="/czyszczenie-paneli-fotowoltaicznych.jpg"
      />
      <ServiceLayout
        title="Mycie paneli fotowoltaicznych Bydgoszcz"
        pageName="Mycie paneli fotowoltaicznych"
        imageUrl="/czyszczenie-paneli-fotowoltaicznych.jpg"
      >
        <div className="prose max-w-none">
          <p className="mb-6">
            Panele fotowoltaiczne tracą na wydajności wraz z narastaniem zabrudzeń – kurzu, pyłków, odchodów
            ptaków oraz osadów pozostawianych przez deszcz. Eco Efect oferuje profesjonalne mycie paneli
            fotowoltaicznych na terenie Bydgoszczy i okolic, zarówno dla instalacji domowych, jak i
            komercyjnych. Dzięki naszemu serwisowi Twoja instalacja odzyska pełną moc, a Ty – maksymalny
            zwrot z inwestycji.
          </p>

          <ServiceIconSection title="Profesjonalne mycie paneli fotowoltaicznych">
            <p>
              Do czyszczenia paneli stosujemy wodę demineralizowaną, miękkie szczotki i teleskopowe tłoki,
              które pozwalają bezpiecznie dotrzeć do każdego zakątka instalacji. Nie używamy detergentów
              ani środków ściernych – dzięki temu nie uszkadzamy powłoki antyrefleksyjnej i nie rysujemy
              szkła ogniw. Po naszym serwisie panele są wolne od osadów i smug, co przekłada się na
              wyraźny wzrost produkcji energii.
            </p>
          </ServiceIconSection>

          <ServiceIconSection title="Czyszczenie instalacji dachowych i gruntowych">
            <p>
              Myjemy zarówno instalacje montowane na dachach skośnych i płaskich, jak i instalacje naziemne
              oraz mikrofarmy fotowoltaiczne. Posiadamy doświadczenie w pracach na wysokości oraz odpowiedni
              sprzęt, dzięki czemu bezpiecznie realizujemy usługi również na trudno dostępnych dachach.
              Pracujemy w sposób uniemożliwiający chodzenie po panelach, co chroni ogniswa przed uszkodzeniami
              mechanicznymi.
            </p>
          </ServiceIconSection>

          <ServiceIconSection title="Przegląd i konserwacja instalacji">
            <p>
              Podczas każdego mycia przeprowadzamy również wzrokowy przegląd instalacji – sprawdzamy stan
              paneli, mocowań i okablowania oraz usuwamy gniazda ptaków i inne zanieczyszczenia z okolic
              modułów. Dzięki temu wcześnie wykrywasz potencjalne usterki, zanim wpłyną one na pracę całej
              instalacji i Twoje rachunki za prąd.
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Zakres usług</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Mycie paneli</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Mycie wodą demineralizowaną</li>
                <li>Usuwanie osadów i smug</li>
                <li>Czyszczenie ram i szyb modułów</li>
                <li>Bezpieczne dla powłok antyrefleksyjnych</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Instalacje dachowe</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Dachy skośne i płaskie</li>
                <li>Praca na wysokości z zabezpieczeniem</li>
                <li>Mycie tłokami teleskopowymi</li>
                <li>Brak konieczności wchodzenia na panele</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Instalacje gruntowe</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Instalacje naziemne przydomowe</li>
                <li>Mikrofarmy fotowoltaiczne</li>
                <li>Czyszczenie rzędów modułów</li>
                <li>Usuwanie zabrudzeń organicznych</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Usługi dodatkowe</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Przegląd wzrokowy instalacji</li>
                <li>Usuwanie gniazd ptaków</li>
                <li>Czyszczenie dachów i rynien</li>
                <li>Mycie okien i elewacji</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Dlaczego warto wybrać Eco Efect?</h2>
          <p className="mb-6">
            Mycie paneli fotowoltaicznych w Bydgoszczy powierz profesjonalistom. Posiadamy wieloletnie
            doświadczenie w usługach czyszczących oraz pracach na wysokości, a także profesjonalny sprzęt
            do bezpiecznego mycia instalacji fotowoltaicznych. Pracujemy szybko, terminowo i bez
            ryzyka dla Twojej instalacji. Współpracujemy z klientami indywidualnymi i firmami na terenie
            Bydgoszczy oraz całego województwa kujawsko-pomorskiego, oferując elastyczne warunki i
            konkurencyjne ceny.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Ceny mycia paneli fotowoltaicznych ustalane są indywidualnie w zależności od liczby modułów,
            typu instalacji, wysokości montażu oraz lokalizacji. Skontaktuj się z nami, aby otrzymać
            bezpłatną wycenę dostosowaną do Twojej instalacji. Oferujemy korzystne stawki przy myciu
            okresowym.
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
