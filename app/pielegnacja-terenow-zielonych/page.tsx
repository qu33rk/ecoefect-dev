import ServiceLayout from "@/app/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"

export default function TerenyZielonePage() {
  const faqItems = [
    {
      question: "Jak często należy kosić trawnik?",
      answer:
        "W sezonie wzrostu (wiosna, lato) zalecamy koszenie trawnika co 7-10 dni. W okresach suchych można wydłużyć ten czas do 14 dni. Jesienią wystarczy koszenie co 2-3 tygodnie.",
    },
    {
      question: "Kiedy najlepiej zakładać nowy trawnik?",
      answer:
        "Najlepszym okresem na zakładanie trawnika jest wczesna jesień (wrzesień) lub wiosna (kwiecień-maj). W tych okresach warunki wilgotnościowe i temperaturowe są najbardziej sprzyjające dla kiełkowania nasion trawy.",
    },
    {
      question: "Czy oferujecie usługi jednorazowe czy tylko abonamentowe?",
      answer:
        "Oferujemy zarówno usługi jednorazowe, jak i abonamentowe. W przypadku usług abonamentowych, klient może liczyć na korzystniejsze stawki oraz priorytetową obsługę.",
    },
    {
      question: "Czy zapewniacie własny sprzęt i narzędzia?",
      answer:
        "Tak, posiadamy pełen zakres profesjonalnego sprzętu i narzędzi niezbędnych do pielęgnacji terenów zielonych, w tym kosiarki, podkaszarki, nożyce do żywopłotów, dmuchawy do liści i inne.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl="https://ecoefect.pl/pielegnacja-terenow-zielonych" />
      <ServiceLayout
        title="Pielęgnacja ogrodów i terenów zielonych"
        pageName="pielegnacja-terenow-zielonych"
      >
        <div className="prose max-w-none">
          <p className="mb-6">
            Oferujemy kompleksowe usługi pielęgnacji terenów zielonych dla firm, instytucji i wspólnot mieszkaniowych.
            Dbamy o estetyczny wygląd trawników, krzewów i drzew przez cały rok, zapewniając profesjonalną opiekę
            dostosowaną do potrzeb każdego klienta.
          </p>

          <ServiceIconSection icon="window" title="Pielęgnacja trawników">
            <p>
              Świadczymy kompleksowe usługi pielęgnacji trawników, które obejmują regularne koszenie, nawożenie,
              wertykulację, aerację oraz zwalczanie chwastów i mchu. Dzięki systematycznej pielęgnacji, trawniki
              pozostają gęste, zdrowe i estetyczne przez cały sezon. Posiadamy profesjonalny sprzęt, który pozwala na
              efektywne wykonanie wszystkich prac, niezależnie od wielkości terenu.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="building" title="Pielęgnacja krzewów i drzew">
            <p>
              Oferujemy profesjonalne usługi pielęgnacji krzewów i drzew, w tym przycinanie, formowanie, nawożenie oraz
              zabezpieczanie na zimę. Nasze usługi obejmują również usuwanie suchych i chorych gałęzi, co poprawia nie
              tylko wygląd roślin, ale także ich zdrowotność. Dbamy o to, aby krzewy i drzewa zachowały swój naturalny
              kształt i piękno, jednocześnie kontrolując ich wzrost.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="store" title="Zakładanie i renowacja trawników">
            <p>
              Świadczymy usługi zakładania nowych trawników oraz renowacji istniejących. Nasze usługi obejmują
              przygotowanie podłoża, wysiew trawy, nawożenie oraz pierwsze koszenie. W przypadku renowacji,
              przeprowadzamy wertykulację, dosiew trawy oraz nawożenie, co pozwala na odzyskanie pięknego wyglądu
              trawnika. Dobieramy odpowiednie mieszanki traw w zależności od warunków glebowych i nasłonecznienia.
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Nasze usługi sezonowe</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Wiosna</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Wiosenne porządki</li>
                <li>Aeracja trawników</li>
                <li>Nawożenie</li>
                <li>Sadzenie roślin</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Lato</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Regularne koszenie</li>
                <li>Nawadnianie</li>
                <li>Pielęgnacja rabat</li>
                <li>Zwalczanie chwastów</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Jesień</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Grabienie liści</li>
                <li>Przycinanie krzewów</li>
                <li>Zabezpieczenie roślin</li>
                <li>Ostatnie koszenie</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Zima</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Odśnieżanie</li>
                <li>Posypywanie chodników</li>
                <li>Planowanie nasadzeń</li>
                <li>Konserwacja sprzętu</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Koszenie trawników - od 0,50 zł/m<sup>2</sup>
          </p>
          <p>Przycinanie żywopłotów - od 10 zł/mb</p>
          <p>
            Zakładanie trawników - od 25 zł/m<sup>2</sup>
          </p>
          <p>Pielęgnacja kompleksowa - wycena indywidualna</p>

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
