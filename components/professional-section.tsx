export default function ProfessionalSection() {
  return (
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
          <div className="md:w-1/2 h-80 bg-gray-200 rounded-lg">
            {/* Placeholder for image */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-600 to-green-800 rounded-lg text-white opacity-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M8 13h8" />
                <path d="M8 17h8" />
                <path d="M8 9h2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
