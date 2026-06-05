import Link from "next/link"
import ServiceLayout from "@/app/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"
import ServiceSchema from "@/components/service-schema"
import { Briefcase, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sprzątanie szkół i placówek oświatowych | Eco Efect Bydgoszcz",
  description:
    "Profesjonalne sprzątanie szkół, przedszkoli i placówek oświatowych w Bydgoszczy. Dezynfekcja sal lekcyjnych, korytarzy i sanitariatów. Eco Efect – zaufaj specjalistom. ☎ 502 630 031.",
  alternates: {
    canonical: "https://ecoefect.pl/sprzatanie-szkol",
  },
}

export default function SprzatanieSzkol() {
  const faqItems = [
    {
      question: "Jak często powinna być sprzątana szkoła?",
      answer:
        "Placówki oświatowe wymagają codziennego sprzątania i dezynfekcji, najczęściej po zakończeniu zajęć lub wczesnym rankiem przed przyjściem uczniów. W okresach wzmożonej zachorowalności zalecamy częstszą dezynfekcję powierzchni dotykowych. Harmonogram dostosowujemy do planu lekcji i potrzeb placówki.",
    },
    {
      question: "Czy sprzątacie szkoły poza godzinami zajęć?",
      answer:
        "Tak, sprzątanie szkół realizujemy najczęściej w godzinach popołudniowych i wieczornych lub wczesnym rankiem, tak aby nie zakłócać przebiegu zajęć i zapewnić uczniom bezpieczne, czyste otoczenie.",
    },
    {
      question: "Czy używacie środków bezpiecznych dla dzieci?",
      answer:
        "Oczywiście. Stosujemy wyłącznie certyfikowane, skuteczne i bezpieczne preparaty czyszczące oraz dezynfekujące, przyjazne dla dzieci i młodzieży. Na życzenie placówki możemy używać środków ekologicznych i hipoalergicznych.",
    },
    {
      question: "Jaki jest koszt sprzątania szkoły?",
      answer:
        "Cena usługi zależy od powierzchni placówki, liczby pomieszczeń, zakresu prac oraz częstotliwości sprzątania. Oferujemy konkurencyjne stawki abonamentowe i bezpłatną wycenę na miejscu. Skontaktuj się z nami, aby poznać szczegóły oferty.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl="https://ecoefect.pl/sprzatanie-szkol" />
      <ServiceSchema
        serviceName="Sprzątanie szkół Bydgoszcz"
        serviceDescription="Profesjonalne sprzątanie szkół, przedszkoli i placówek oświatowych w Bydgoszczy. Kompleksowa dezynfekcja sal lekcyjnych, korytarzy, sanitariatów i sal gimnastycznych. Eco Efect – firma sprzątająca z doświadczeniem w obsłudze placówek oświatowych."
        serviceUrl="https://ecoefect.pl/sprzatanie-szkol"
        imageUrl="/sprzatanie-szkol.png"
      />
      <ServiceLayout
        title="Sprzątanie szkół Bydgoszcz"
        pageName="Sprzątanie szkół"
        imageUrl="/sprzatanie-szkol.png"
      >
        <div className="prose max-w-none">
          <p className="mb-6">
            Sprzątanie szkół w Bydgoszczy wymaga szczególnej staranności, dbałości o bezpieczeństwo dzieci
            i znajomości procedur sanitarnych. Eco Efect specjalizuje się w profesjonalnym utrzymaniu czystości
            w szkołach, przedszkolach i innych placówkach oświatowych na terenie Bydgoszczy i okolic. Zapewniamy
            czyste i higieniczne otoczenie, sprzyjające zdrowiu uczniów oraz komfortowi pracy nauczycieli.
          </p>

          <ServiceIconSection icon="building" title="Codzienne sprzątanie i dezynfekcja">
            <p>
              Nasze usługi sprzątania szkół w Bydgoszczy obejmują kompleksowe utrzymanie czystości na co dzień.
              Wykonujemy mycie i dezynfekcję podłóg, wycieranie i odkażanie powierzchni dotykowych – klamek,
              poręczy, ławek i biurek, a także opróżnianie koszy na śmieci. Dbamy o to, aby każda sala lekcyjna
              i pomieszczenie szkolne spełniało najwyższe standardy czystości.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="window" title="Utrzymanie korytarzy i sanitariatów">
            <p>
              Korytarze, klatki schodowe oraz szatnie i toalety to miejsca o największym natężeniu ruchu uczniów.
              Sprzątanie szkół w wykonaniu Eco Efect obejmuje regularne mycie i dezynfekcję tych stref oraz
              uzupełnianie środków higienicznych – mydła, ręczników papierowych i płynów do dezynfekcji rąk.
              Czysta i zadbana szkoła to zdrowie i bezpieczeństwo dzieci.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="store" title="Sprzątanie sal gimnastycznych i jadalni">
            <p>
              Sale gimnastyczne, stołówki i jadalnie szkolne wymagają szczególnej higieny. Oferujemy sprzątanie
              szkół z uwzględnieniem specyfiki tych pomieszczeń – mycie i zabezpieczanie posadzek sportowych,
              dezynfekcję stołów oraz utrzymanie czystości w strefach przygotowywania i spożywania posiłków.
              Stosujemy profesjonalne preparaty skuteczne i bezpieczne dla dzieci.
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Zakres usług</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Sprzątanie codzienne</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Mycie i dezynfekcja podłóg</li>
                <li>Odkażanie powierzchni dotykowych</li>
                <li>Opróżnianie koszy na śmieci</li>
                <li>Czyszczenie sal lekcyjnych</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Sanitariaty i szatnie</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Dezynfekcja toalet i łazienek</li>
                <li>Uzupełnianie środków higienicznych</li>
                <li>Czyszczenie szatni</li>
                <li>Odkażanie umywalek i armatury</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Strefy wspólne</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Sprzątanie korytarzy</li>
                <li>Czyszczenie klatek schodowych</li>
                <li>Mycie sal gimnastycznych</li>
                <li>Utrzymanie stołówek i jadalni</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Usługi dodatkowe</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Mycie okien i przeszkleń</li>
                <li>Pranie wykładzin i tapicerki</li>
                <li>Polimeryzacja podłóg</li>
                <li>Sprzątanie po remontach</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Dlaczego warto wybrać Eco Efect?</h2>
          <p className="mb-6">
            Sprzątanie szkół Bydgoszcz to nasza specjalność. Posiadamy wieloletnie doświadczenie w obsłudze
            placówek oświatowych i znamy specyfikę pracy w obiektach, w których przebywają dzieci i młodzież.
            Nasi pracownicy są przeszkoleni z zakresu procedur sanitarnych i stosowania profesjonalnych środków
            dezynfekujących. Gwarantujemy terminowość, rzetelność oraz pełną dyskrecję. Współpracujemy ze szkołami
            i przedszkolami w Bydgoszczy i okolicach, oferując elastyczne warunki i konkurencyjne ceny.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Ceny usług sprzątania szkół w Bydgoszczy ustalane są indywidualnie na podstawie powierzchni placówki,
            liczby pomieszczeń, zakresu prac oraz częstotliwości sprzątania. Skontaktuj się z nami, aby otrzymać
            bezpłatną wycenę dostosowaną do potrzeb Twojej placówki. Oferujemy korzystne stawki abonamentowe.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6">FAQ</h2>
          <div className="space-y-1">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>

          {/* Sekcja dla osób szukających pracy */}
          <div className="not-prose mt-10 bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#007a33] p-3 rounded-full shrink-0">
                <Briefcase className="text-white h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#007a33] mb-2">Szukasz pracy przy sprzątaniu szkół?</h2>
                <p className="text-gray-700 mb-4">
                  Stale powiększamy nasz zespół. Jeśli szukasz stabilnego zatrudnienia przy sprzątaniu szkół
                  i placówek oświatowych w Bydgoszczy, sprawdź naszą aktualną ofertę pracy i dołącz do Eco Efect.
                </p>
                <Link
                  href="/praca"
                  className="inline-flex items-center gap-2 bg-[#007a33] hover:bg-[#005f27] text-white font-medium px-5 py-3 rounded-lg transition-colors"
                  aria-label="Przejdź do zakładki Praca"
                >
                  <span>Zobacz oferty pracy</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ServiceLayout>
    </>
  )
}
