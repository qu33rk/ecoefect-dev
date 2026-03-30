import ServiceLayout from "@/app/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"
import ServiceSchema from "@/components/service-schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sprzątanie przychodni Bydgoszcz | Eco Efect",
  description:
    "Profesjonalne sprzątanie przychodni w Bydgoszczy i okolicach. Dezynfekcja gabinetów lekarskich, poczekalni i stref pacjentów. Eco Efect – zaufaj specjalistom. ☎ 502 630 031.",
  alternates: {
    canonical: "https://ecoefect.pl/sprzatanie-przychodni",
  },
}

export default function SprzataniePrzychodni() {
  const faqItems = [
    {
      question: "Jak często powinno być sprzątane przychodnia?",
      answer:
        "Przychodnie lekarskie wymagają codziennego sprzątania i dezynfekcji. W przypadku dużego ruchu pacjentów zalecamy sprzątanie nawet dwa razy dziennie – rano przed otwarciem i po zakończeniu przyjęć. Nasze usługi sprzątania przychodni w Bydgoszczy obejmują elastyczne harmonogramy dostosowane do godzin pracy placówki.",
    },
    {
      question: "Czy używacie środków dezynfekujących odpowiednich dla placówek medycznych?",
      answer:
        "Tak, stosujemy wyłącznie profesjonalne preparaty dezynfekujące zatwierdzone do stosowania w placówkach ochrony zdrowia. Nasze środki są skuteczne wobec bakterii, wirusów i grzybów, a jednocześnie bezpieczne dla pacjentów i personelu medycznego.",
    },
    {
      question: "Czy oferujecie sprzątanie przychodni poza godzinami pracy placówki?",
      answer:
        "Oczywiście. Sprzątanie przychodni w Bydgoszczy realizujemy najczęściej w godzinach wieczornych lub wczesnoporannych, tak aby nie kolidować z przyjęciami pacjentów. Harmonogram ustalamy indywidualnie z każdą placówką.",
    },
    {
      question: "Jaki jest koszt sprzątania przychodni?",
      answer:
        "Cena usługi zależy od powierzchni przychodni, zakresu prac oraz częstotliwości sprzątania. Oferujemy konkurencyjne stawki i bezpłatną wycenę na miejscu. Skontaktuj się z nami, aby poznać szczegóły oferty sprzątania przychodni w Bydgoszczy.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl="https://ecoefect.pl/sprzatanie-przychodni" />
      <ServiceSchema
        serviceName="Sprzątanie przychodni Bydgoszcz"
        serviceDescription="Profesjonalne sprzątanie przychodni lekarskich w Bydgoszczy. Kompleksowa dezynfekcja gabinetów, poczekalni i stref pacjentów. Eco Efect – firma sprzątająca z doświadczeniem w obsłudze placówek medycznych."
        serviceUrl="https://ecoefect.pl/sprzatanie-przychodni"
        imageUrl="/sprzatanie-przychodni.jpg"
      />
      <ServiceLayout
        title="Sprzątanie przychodni Bydgoszcz"
        pageName="Sprzątanie przychodni"
        imageUrl="/sprzatanie-przychodni.jpg"
      >
        <div className="prose max-w-none">
          <p className="mb-6">
            Sprzątanie przychodni w Bydgoszczy wymaga szczególnej staranności i znajomości procedur sanitarnych.
            Eco Efect specjalizuje się w profesjonalnym utrzymaniu czystości w placówkach medycznych, gabinetach
            lekarskich i poradniach na terenie Bydgoszczy i okolic. Zapewniamy bezpieczeństwo higieniczne
            zarówno pacjentom, jak i personelowi medycznemu.
          </p>

          <ServiceIconSection icon="building" title="Codzienne sprzątanie i dezynfekcja">
            <p>
              Nasze usługi sprzątania przychodni w Bydgoszczy obejmują kompleksowe utrzymanie czystości na co dzień.
              Wykonujemy mycie i dezynfekcję podłóg, wycieranie i odkażanie powierzchni dotykowych – klamek,
              poręczy, blatów rejestracji, a także opróżnianie pojemników na odpady, w tym odpadów medycznych
              zgodnie z obowiązującymi przepisami. Dbamy o to, aby każde pomieszczenie przychodni spełniało
              najwyższe standardy czystości.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="window" title="Utrzymanie stref pacjentów">
            <p>
              Poczekalnie, korytarze i toalety dla pacjentów to miejsca o największym natężeniu ruchu. Sprzątanie
              przychodni Bydgoszcz w wykonaniu Eco Efect obejmuje regularne sprzątanie i dezynfekcję tych stref,
              uzupełnianie środków higienicznych – mydła, ręczników papierowych i płynów do dezynfekcji rąk.
              Czysta i zadbana przychodnia to komfort pacjentów i pozytywny wizerunek placówki.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="store" title="Gabinetów lekarskich i zabiegowych">
            <p>
              Gabinety lekarskie i zabiegowe wymagają najwyższego poziomu higieny. Oferujemy sprzątanie przychodni
              w Bydgoszczy z uwzględnieniem specyfiki gabinetów medycznych – dezynfekcję foteli, kozetек, sprzętu
              oraz powierzchni roboczych. Stosujemy profesjonalne preparaty przeznaczone do placówek ochrony
              zdrowia, skuteczne wobec bakterii, wirusów i grzybów.
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Zakres usług</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Sprzątanie codzienne</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Mycie i dezynfekcja podłóg</li>
                <li>Odkażanie powierzchni dotykowych</li>
                <li>Opróżnianie koszy na odpady</li>
                <li>Czyszczenie toalet i łazienek</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Dezynfekcja gabinetów</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Odkażanie foteli i kozetek</li>
                <li>Dezynfekcja powierzchni roboczych</li>
                <li>Czyszczenie sprzętu medycznego</li>
                <li>Dezynfekcja lamp i uchwytów</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Strefy pacjentów</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Sprzątanie poczekalni</li>
                <li>Czyszczenie korytarzy</li>
                <li>Uzupełnianie środków higienicznych</li>
                <li>Dezynfekcja rejestracji</li>
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
            Sprzątanie przychodni Bydgoszcz to nasza specjalność. Posiadamy wieloletnie doświadczenie w obsłudze
            placówek medycznych i znamy specyfikę pracy w tego typu obiektach. Nasi pracownicy są przeszkoleni
            z zakresu procedur sanitarnych i stosowania profesjonalnych środków dezynfekujących. Gwarantujemy
            terminowość, rzetelność oraz pełną dyskrecję. Współpracujemy z przychodniami w Bydgoszczy i okolicach,
            oferując elastyczne warunki i konkurencyjne ceny.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Ceny usług sprzątania przychodni w Bydgoszczy ustalane są indywidualnie na podstawie powierzchni
            placówki, zakresu prac oraz częstotliwości sprzątania. Skontaktuj się z nami, aby otrzymać bezpłatną
            wycenę dostosowaną do potrzeb Twojej przychodni. Oferujemy korzystne stawki abonamentowe.
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
