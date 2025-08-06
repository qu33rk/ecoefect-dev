import ServiceLayout from "@/app/service-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polityka plików cookies | ECO EFECT Bydgoszcz",
  description:
    "Polityka plików cookies firmy ECO EFECT. Informacje o przechowywaniu i dostępie do informacji na urządzeniach Użytkownika za pomocą plików Cookies.",
  robots: "noindex,follow",
}

export default function CookiesPage() {
  return (
    <ServiceLayout
      title="Polityka plików cookies"
      pageName="cookies"
      metaTitle="Polityka plików cookies | ECO EFECT Bydgoszcz"
      metaDescription="Polityka plików cookies firmy ECO EFECT. Informacje o przechowywaniu i dostępie do informacji na urządzeniach Użytkownika za pomocą plików Cookies."
      canonicalUrl="https://ecoefect.pl/cookies"
    >
      <div className="prose max-w-none">
        <p className="mb-6">
          Niniejsza Polityka Cookies określa zasady przechowywania i dostępu do informacji na urządzeniach Użytkownika
          za pomocą plików Cookies, służących realizacji usług świadczonych drogą elektroniczną przez Administratora.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Definicje</h2>
        <ol className="list-decimal pl-6 mb-6">
          <li>
            <strong>Administrator</strong> - oznacza firmę Eco Efect Ryszard Bąk, która świadczy usługi drogą
            elektroniczną oraz przechowuje i uzyskuje dostęp do informacji w urządzeniach Użytkownika.
          </li>
          <li>
            <strong>Cookies</strong> - oznacza dane informatyczne, w szczególności niewielkie pliki tekstowe, zapisywane
            i przechowywane na urządzeniach za pośrednictwem których Użytkownik korzysta ze stron internetowych Serwisu.
          </li>
          <li>
            <strong>Cookies Administratora</strong> - oznacza Cookies zamieszczane przez Administratora, związane ze
            świadczeniem usług drogą elektroniczną przez Administratora za pośrednictwem Serwisu.
          </li>
          <li>
            <strong>Cookies Zewnętrzne</strong> - oznacza Cookies zamieszczane przez partnerów Administratora, za
            pośrednictwem strony internetowej Serwisu.
          </li>
          <li>
            <strong>Serwis</strong> - oznacza stronę internetową, pod którą Administrator prowadzi serwis internetowy,
            działającą w domenie ecoefect.pl.
          </li>
          <li>
            <strong>Urządzenie</strong> - oznacza elektroniczne urządzenie za pośrednictwem którego Użytkownik uzyskuje
            dostęp do stron internetowych Serwisu.
          </li>
          <li>
            <strong>Użytkownik</strong> - oznacza podmiot, na rzecz którego zgodnie z Regulaminem i przepisami prawa
            mogą być świadczone usługi drogą elektroniczną lub z którym zawarta może być Umowa o świadczenie usług drogą
            elektroniczną.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4">Rodzaje wykorzystywanych Cookies</h2>
        <ol className="list-decimal pl-6 mb-6">
          <li>
            <strong>Cookies sesyjne</strong> - pliki tymczasowe, które przechowywane są w urządzeniu końcowym
            Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania
            (przeglądarki internetowej).
          </li>
          <li>
            <strong>Cookies stałe</strong> - pliki przechowywane w urządzeniu końcowym Użytkownika przez czas określony
            w parametrach plików Cookies lub do czasu ich usunięcia przez Użytkownika.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4">Cele wykorzystywania Cookies</h2>
        <ol className="list-decimal pl-6 mb-6">
          <li>
            Dostosowanie zawartości stron internetowych Serwisu do preferencji Użytkownika oraz optymalizacja
            korzystania ze stron internetowych.
          </li>
          <li>
            Tworzenie statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają ze stron
            internetowych, co umożliwia ulepszanie ich struktury i zawartości.
          </li>
          <li>
            Utrzymanie sesji Użytkownika Serwisu (po zalogowaniu), dzięki której Użytkownik nie musi na każdej
            podstronie Serwisu ponownie wpisywać loginu i hasła.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Możliwości określenia warunków przechowywania lub uzyskiwania dostępu przez Cookies
        </h2>
        <ol className="list-decimal pl-6 mb-6">
          <li>
            Użytkownik może samodzielnie i w każdym czasie zmienić ustawienia dotyczące plików Cookies, określając
            warunki ich przechowywania i uzyskiwania dostępu przez pliki Cookies do Urządzenia Użytkownika. Zmiany
            ustawień, o których mowa w zdaniu poprzednim, Użytkownik może dokonać za pomocą ustawień przeglądarki
            internetowej lub za pomocą konfiguracji usługi.
          </li>
          <li>
            Użytkownik może w każdej chwili usunąć pliki Cookies korzystając z dostępnych funkcji w przeglądarce
            internetowej, której używa.
          </li>
          <li>
            Ograniczenie stosowania plików Cookies może wpłynąć na niektóre funkcjonalności dostępne na stronie
            internetowej Serwisu.
          </li>
        </ol>
      </div>
    </ServiceLayout>
  )
}
