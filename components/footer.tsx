import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-bold mb-4">Ecoefect</p>
            <p className="text-gray-700 mb-4">
              Sprzątamy na terenie Bydgoszczy, województwa kujawsko-pomorskiego i nie tylko. Współpracujemy z małymi i
              dużymi podmiotami z regionu, zapewniając profesjonalne, terminowe i sprawnie sprzątanie biur, wspólnot
              mieszkaniowych, hal i obiektów handlowych. Oferujemy abonamentowe usługi sprzątania, a także szeroki
              pakiet usług dodatkowych. Zaufały nam dziesiątki firm, ponieważ po nas nie trzeba poprawiać!
            </p>
          </div>

          <div>
            <p className="font-bold mb-4">Kontakt:</p>
            <p className="mb-1">Eco Efect Ryszard Bąk</p>
            <p className="mb-1">ul. Wojska Polskiego 65</p>
            <p className="mb-1">85-825 Bydgoszcz</p>
            <p className="mb-1">
              tel.:{" "}
              <a href="tel:+48502630031" className="hover:text-green-700 transition-colors">
                502 630 031
              </a>
            </p>
            <p className="mb-6">
              mail:{" "}
              <a href="mailto:ecoefect@ecoefect.pl" className="hover:text-green-700 transition-colors">
                ecoefect@ecoefect.pl
              </a>
            </p>

            <p className="font-bold mb-2">Godziny pracy:</p>
            <p>Pn – pt: 8:00 – 16:00</p>
          </div>

          <div>
            <p className="font-bold mb-4">Oferta:</p>
            <ul className="space-y-2">
              <li>
                <Link href="/#et" className="hover:text-green-700 transition-colors">
                  Usługi sprzątania
                </Link>
              </li>
              <li>
                <Link href="/mycie-okien" className="hover:text-green-700 transition-colors">
                  Mycie okien na wysokości
                </Link>
              </li>
              <li>
                <Link href="/pranie-dywanow" className="hover:text-green-700 transition-colors">
                  Czyszczenie wykładzin i pranie dywanów
                </Link>
              </li>
              <li>
                <Link href="/tereny-zielone" className="hover:text-green-700 transition-colors">
                  Pielęgnacja ogrodów i terenów zielonych
                </Link>
              </li>
              <li>
                <Link href="/odsniezanie" className="hover:text-green-700 transition-colors">
                  Odśnieżanie parkingów, placów i obiektów
                </Link>
              </li>
              <li>
                <Link href="/posadzki" className="hover:text-green-700 transition-colors">
                  Zabezpieczanie i czyszczenie posadzek i podłóg
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Eco Efect Ryszard Bąk</p>
            <p className="mt-2 md:mt-0">
              <Link href="/cookies" className="hover:text-green-700 transition-colors">
                Polityka plików cookies
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
