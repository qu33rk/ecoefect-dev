import Image from "next/image"

export default function ProfessionalSection() {
  return (
    <>
    <section className="py-16 bg-white" id="one">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Profesjonalna firma sprzątająca</h2>
            <p className="text-gray-700 mb-6">
              Świadczymy kompleksowe usługi utrzymania czystości wewnątrz i na zewnątrz budynków, w tym pielęgnację
              terenów zielonych i przestrzeni parkingowych w Bydgoszczy i województwie kujawsko-pomorskim.
            </p>
            <p className="text-gray-700 mb-6">
              Ciągły rozwój firmy, inwestycje w specjalistyczny sprzęt i szkolenia pracowników pozwoliły nam zbudować
              silną markę na lokalnym rynku usług sprzątających.
            </p>
            <p className="text-gray-700 mb-8">
              Korzystamy z profesjonalnego sprzętu i środków czystości renomowanych producentów (m.in. Karcher, Taski,
              Vileda), stosując sprawdzone metody organizacji pracy.
            </p>
            <a
              href="tel:+48502630031"
              className="inline-flex items-center bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition-colors"
            >
              Zadzwoń teraz <span className="ml-2">→</span>
            </a>
          </div>
          <div className="md:w-1/2 w-full h-[360px] md:h-80 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-600 to-green-800 rounded-lg text-white opacity-80">
              <Image 
                src="/czyszczenie-powierzchni.jpg"
                alt="Używane środki czystości"
                width={400}
                height={300}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
     
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center md:h-[500px]">
          <div className="md:w-1/2 w-full h-[360px] md:h-full bg-gray-200 rounded-lg flex items-center justify-center">
            {/* Placeholder for image */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-600 to-green-800 rounded-lg text-white opacity-80">
              <Image 
                src="/srodki-czystosci.jpg"
                alt="Używane środki czystości"
                width={400}
                height={300}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Sprzątanie biur i obiektów</h2>
            <p className="text-gray-700 mb-6">
              Działamy w sposób dyskretny, nie rozpraszając mieszkańców i pracowników przebywających w lokalu. Wykorzystywane przez nas środki czystości posiadają stosowne atesty i nie stwarzają zagrożenia dla otoczenia. Zapewniają usunięcie nawet trudnych i długotrwałych zabrudzeń, jednocześnie łagodnie traktując powierzchnie. Nasza oferta obejmuje:
            </p>
            {/* Sekcja usług biurowych */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                {/* Ikona biura */}
                <svg width="48" height="48" fill="none" stroke="#8cc63f" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="7" width="18" height="14" rx="2" />
                  <rect x="7" y="11" width="2" height="2" />
                  <rect x="11" y="11" width="2" height="2" />
                  <rect x="15" y="11" width="2" height="2" />
                  <rect x="7" y="15" width="2" height="2" />
                  <rect x="11" y="15" width="2" height="2" />
                  <rect x="15" y="15" width="2" height="2" />
                  <rect x="9" y="3" width="6" height="4" rx="1" />
                </svg>
                <span className="font-bold text-lg">
                  Sprzątanie biur (już od 1 zł za m2)
                </span>
              </div>
              <div className="flex items-center gap-4">
                {/* Ikona wspólnoty */}
                <svg width="48" height="48" fill="none" stroke="#8cc63f" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="4" y="7" width="4" height="13" rx="1" />
                  <rect x="10" y="3" width="4" height="17" rx="1" />
                  <rect x="16" y="10" width="4" height="10" rx="1" />
                </svg>
                <span className="font-bold text-lg">
                  Sprzątanie wspólnot mieszkaniowych
                </span>
              </div>
              <div className="flex items-center gap-4">
                {/* Ikona handlu */}
                <svg width="48" height="48" fill="none" stroke="#8cc63f" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="7" width="18" height="14" rx="2" />
                  <rect x="7" y="11" width="2" height="2" />
                  <rect x="11" y="11" width="2" height="2" />
                  <rect x="15" y="11" width="2" height="2" />
                </svg>
                <span className="font-bold text-lg">
                  Sprzątanie obiektów handlowych
                </span>
              </div>
              <div className="flex items-center gap-4">
                {/* Ikona produkcji */}
                <svg width="48" height="48" fill="none" stroke="#8cc63f" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 20v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" />
                  <path d="M9 14V8a3 3 0 0 1 6 0v6" />
                  <path d="M12 2v2" />
                </svg>
                <span className="font-bold text-lg">
                  Sprzątanie hal produkcyjnych
                </span>
              </div>
              <div className="flex items-center gap-4">
                {/* Ikona cennika */}
                <svg width="48" height="48" fill="none" stroke="#8cc63f" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 8h8M8 12h8M8 16h8" />
                </svg>
                <span className="font-bold text-lg">
                  Wycenę za sprzątanie
                </span>
              </div>
            </div>
            <p className="text-gray-700 mb-8">
              Biuro jest wizytówką każdej firmy, dlatego z dużą starannością realizujemy powierzone zadania. Jesteśmy otwarci na negocjowanie warunków współpracy. Chętnie dostosujemy się w kwestii preferowanych godzin pracy i liczby personelu, by nie zakłócać funkcjonowania firmy.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
