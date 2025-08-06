import ServiceLayout from "@/app/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"

export default function PosadzkiPage() {
  const faqItems = [
    {
      question: "Jak często należy przeprowadzać polimeryzację posadzek?",
      answer:
        "Częstotliwość polimeryzacji zależy od intensywności użytkowania posadzki. W miejscach o dużym natężeniu ruchu, jak centra handlowe czy korytarze biurowe, zaleca się przeprowadzanie polimeryzacji co 3-6 miesięcy. W mniej uczęszczanych miejscach wystarczy raz w roku.",
    },
    {
      question: "Czy po krystalizacji marmuru można od razu korzystać z posadzki?",
      answer:
        "Tak, po krystalizacji marmuru posadzka jest gotowa do użytkowania od razu po zakończeniu prac. Nie wymaga to dodatkowego czasu na schnięcie czy utwardzanie.",
    },
    {
      question: "Jakie są korzyści z polimeryzacji posadzek?",
      answer:
        "Polimeryzacja posadzek przynosi wiele korzyści, w tym: zwiększenie odporności na zabrudzenia i uszkodzenia mechaniczne, ułatwienie codziennego utrzymania czystości, poprawę wyglądu posadzki poprzez nadanie jej połysku, przedłużenie żywotności posadzki oraz redukcję kosztów związanych z wymianą zniszczonych podłóg.",
    },
    {
      question: "Czy usługi czyszczenia i konserwacji posadzek można wykonywać w godzinach nocnych?",
      answer:
        "Tak, oferujemy możliwość wykonania usług w godzinach nocnych lub w weekendy, aby nie zakłócać normalnego funkcjonowania firmy czy instytucji. Jest to szczególnie ważne w przypadku obiektów handlowych, biurowych czy użyteczności publicznej.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl="https://ecoefect.pl/czyszczenie-polimeryzacja-posadzek" />
      <ServiceLayout
        title="Zabezpieczanie i czyszczenie posadzek i podłóg"
        pageName="czyszczenie-polimeryzacja-posadzek"
      >
        <div className="prose max-w-none">
          <p className="mb-6">
            Oferujemy profesjonalne usługi czyszczenia, konserwacji i zabezpieczania różnych typów posadzek. Nasze
            usługi są skierowane do firm, instytucji i obiektów handlowych, gdzie podłogi są narażone na intensywne
            użytkowanie i wymagają specjalistycznej pielęgnacji..
          </p>

          <ServiceIconSection icon="window" title="Czyszczenie maszynowe posadzek">
            <p>
              Świadczymy usługi czyszczenia maszynowego różnych typów posadzek, w tym PCV, linoleum, kamiennych,
              betonowych i żywicznych. Wykorzystujemy profesjonalne maszyny czyszczące i środki chemiczne, które
              skutecznie usuwają zabrudzenia, nie niszcząc powierzchni. Nasze usługi obejmują zarówno regularne
              czyszczenie, jak i doczyszczanie silnie zabrudzonych powierzchni.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="building" title="Polimeryzacja i zabezpieczanie powierzchni">
            <p>
              Oferujemy usługi polimeryzacji i zabezpieczania posadzek, które przedłużają ich żywotność i poprawiają
              wygląd. Polimeryzacja polega na nałożeniu na posadzkę specjalnej powłoki polimerowej, która chroni ją
              przed zabrudzeniami, zarysowaniami i uszkodzeniami mechanicznymi. Zabezpieczone posadzki są łatwiejsze w
              utrzymaniu czystości i zachowują estetyczny wygląd przez długi czas.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="store" title="Krystalizacja marmuru i granitu">
            <p>
              Specjalizujemy się w krystalizacji marmuru i granitu, która przywraca naturalny połysk i głębię koloru
              kamiennym posadzkom. Proces krystalizacji polega na mechanicznym polerowaniu powierzchni z użyciem
              specjalnych środków chemicznych, które reagują z węglanem wapnia zawartym w marmurze, tworząc twardą i
              błyszczącą powłokę. Krystalizacja nie tylko poprawia wygląd posadzki, ale także zwiększa jej odporność na
              zabrudzenia i uszkodzenia.
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Rodzaje posadzek, które obsługujemy</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">PCV i linoleum</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Czyszczenie maszynowe</li>
                <li>Polimeryzacja</li>
                <li>Zabezpieczanie powłokami</li>
                <li>Usuwanie starych powłok</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Kamień naturalny</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Krystalizacja marmuru</li>
                <li>Impregnacja granitu</li>
                <li>Czyszczenie i konserwacja</li>
                <li>Polerowanie</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Posadzki betonowe</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Szlifowanie</li>
                <li>Impregnacja</li>
                <li>Zabezpieczanie przed pyłem</li>
                <li>Czyszczenie maszynowe</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Posadzki żywiczne</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Czyszczenie specjalistyczne</li>
                <li>Renowacja</li>
                <li>Konserwacja</li>
                <li>Zabezpieczanie</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Czyszczenie maszynowe posadzek - od 5 zł/m<sup>2</sup>
          </p>
          <p>
            Polimeryzacja - od 10 zł/m<sup>2</sup>
          </p>
          <p>
            Krystalizacja marmuru - od 25 zł/m<sup>2</sup>
          </p>
          <p>
            Impregnacja posadzek kamiennych - od 15 zł/m<sup>2</sup>
          </p>
          <p>Renowacja posadzek betonowych - wycena indywidualna</p>

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
