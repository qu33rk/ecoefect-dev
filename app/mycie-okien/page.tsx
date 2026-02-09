import ServiceLayout from "@/app/service-layout"
import ServiceIconSection from "@/components/service-icon-section"
import FAQItem from "@/components/faq-item"
import FAQSchema from "@/components/faq-schema"
import ServiceSchema from "@/components/service-schema"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mycie okien Bydgoszcz | Profesjonalne mycie szyb | Eco Efect",
  description:
    "Profesjonalne mycie okien w Bydgoszczy i okolicach. Czyścimy okna w biurach, domach, lokalach usługowych i obiektach handlowych. Bez smug, szybko i dokładnie!",
  alternates: {
    canonical: "https://ecoefect.pl/mycie-okien",
  },
}

export default function MycieOkienPage() {
  const faqItems = [
    {
      question: "Jak często powinno się myć okna?",
      answer:
        "W przypadku obiektów komercyjnych zalecamy mycie okien co 1-2 miesiące. W domach i mieszkaniach wystarczy zazwyczaj 3-4 razy w roku, choć okna narażone na większe zanieczyszczenia mogą wymagać częstszego czyszczenia.",
    },
    {
      question: "Czy myjecie okna wewnątrz i na zewnątrz?",
      answer:
        "Tak, oferujemy mycie okien zarówno od wewnątrz, jak i od zewnątrz. Możemy również wykonać usługę kompleksową obejmującą obie strony oraz czyszczenie ram i parapetów.",
    },
    {
      question: "Jakich środków używacie do mycia okien?",
      answer:
        "Stosujemy profesjonalne, ekologiczne środki czyszczące oraz wodę demineralizowaną, która nie pozostawia smug i zacieków. Nasze środki są bezpieczne dla powierzchni szklanych i ram okiennych.",
    },
    {
      question: "Czy myjecie również ramy i parapety?",
      answer:
        "Tak, w ramach usługi mycia okien czyścimy również ramy okienne, parapety wewnętrzne i zewnętrzne oraz uszczelki. Na życzenie możemy również wyczyścić rolety i żaluzje.",
    },
    {
      question: "Czy oferujecie usługi abonamentowe?",
      answer:
        "Tak, dla firm i obiektów komercyjnych oferujemy korzystne pakiety abonamentowe z regularnym myciem okien. Pozwala to na utrzymanie stałej czystości przy niższych kosztach jednostkowych.",
    },
  ]

  return (
    <>
      <FAQSchema faqItems={faqItems} pageUrl="https://ecoefect.pl/mycie-okien" />
      <ServiceSchema
        serviceName="Mycie okien"
        serviceDescription="Profesjonalne mycie okien w Bydgoszczy i okolicach. Czyścimy okna w biurach, domach, lokalach usługowych i obiektach handlowych. Bez smug, szybko i dokładnie!"
        serviceUrl="https://ecoefect.pl/mycie-okien"
        imageUrl="/mycie-okien.jpg"
      />
      <ServiceLayout
        title="Mycie okien"
        pageName="Mycie okien"
        imageUrl="/mycie-okien.jpg"
      >
        <div className="prose max-w-none">
          <p className="mb-6">
            Oferujemy profesjonalne usługi mycia okien dla firm i klientów indywidualnych w Bydgoszczy i okolicach.
            Czyste okna to nie tylko kwestia estetyki – wpuszczają więcej światła, poprawiają samopoczucie
            i budują pozytywny wizerunek Twojej firmy. Powierz to zadanie specjalistom!
          </p>

          <ServiceIconSection icon="building" title="Mycie okien w biurach i firmach">
            <p>
              Zapewniamy regularne mycie okien w biurowcach, siedzibach firm i obiektach komercyjnych.
              Pracujemy w godzinach dostosowanych do Twojego harmonogramu – również wieczorami i w weekendy,
              aby nie zakłócać pracy Twoich pracowników. Oferujemy korzystne pakiety abonamentowe.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="store" title="Mycie witryn sklepowych">
            <p>
              Czysta witryna to wizytówka Twojego sklepu. Regularnie myjemy szyby wystawowe w lokalach
              handlowych, galeriach i centrach handlowych. Usuwamy kurz, ślady palców, zacieki i inne
              zabrudzenia, które mogą zniechęcać potencjalnych klientów.
            </p>
          </ServiceIconSection>

          <ServiceIconSection icon="window" title="Mycie okien w domach i mieszkaniach">
            <p>
              Oferujemy również usługi dla klientów indywidualnych. Umyjemy okna w Twoim domu lub mieszkaniu
              szybko i dokładnie, bez smug i zacieków. Czyścimy również ramy, parapety i moskitiery.
              Oszczędź swój czas – zostaw to nam!
            </p>
          </ServiceIconSection>

          <h2 className="text-2xl font-bold mt-10 mb-4">Zakres usług</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Mycie standardowe</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Mycie szyb z obu stron</li>
                <li>Czyszczenie ram okiennych</li>
                <li>Wycieranie parapetów</li>
                <li>Czyszczenie uszczelek</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-green-700">Usługi dodatkowe</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Mycie rolet i żaluzji</li>
                <li>Czyszczenie moskitier</li>
                <li>Mycie drzwi szklanych</li>
                <li>Czyszczenie luster</li>
              </ul>
            </div>
          </div>

          {/* CTA do mycia na wysokości */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-green-800 mb-2">Potrzebujesz mycia okien na wysokości?</h3>
            <p className="text-green-700 mb-4">
              Jeśli Twój budynek ma więcej niż 2-3 piętra, skorzystaj z naszej specjalistycznej usługi
              mycia okien na wysokości. Sięgamy do 20 metrów metodą teleskopową – bezpiecznie i skutecznie.
            </p>
            <Link
              href="/mycie-okien-i-elewacji-na-wysokosciach"
              className="inline-block bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors"
            >
              Dowiedz się więcej →
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Cennik</h2>
          <p>
            Ceny usług mycia okien ustalane są indywidualnie, w zależności od liczby i wielkości okien,
            stopnia zabrudzenia oraz lokalizacji. Skontaktuj się z nami, aby otrzymać bezpłatną wycenę
            dopasowaną do Twoich potrzeb.
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
