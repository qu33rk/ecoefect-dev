export default function ServicesSection() {
  return (
    <>
    <section className="py-12 bg-green-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Firma sprzątająca <span className="text-green-300">ECO EFECT</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-700"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h10" />
                <path d="M7 12h10" />
                <path d="M7 17h10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">sprzątanie biur</h3>
            <p className="text-green-100">firm oraz wspólnot mieszkaniowych</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-700"
              >
                <path d="M3 9h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                <path d="M12 3v6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">usługi sprzątania</h3>
            <p className="text-green-100">hal produkcyjnych i powierzchni magazynowych</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-700"
              >
                <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                <path d="M2 7h20" />
                <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">sprzątanie obiektów handlowych</h3>
            <p className="text-green-100">sklepów, galerii, targowisk i rynków</p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-12 bg-white" id="text">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Jak działamy?</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700">
            Oferujemy profesjonalne usługi sprzątające w Bydgoszczy i województwie kujawsko-pomorskim, bez dodatkowych opłat za dojazd. Nasza siedziba znajduje się na Kapuściskach. Działamy elastycznie przez całą dobę, zarówno w dni robocze jak i weekendy, dostosowując się do potrzeb różnych branż. Ze względu na używany sprzęt, dla biur rekomendujemy sprzątanie wieczorem, a dla obiektów handlowych – w późnych godzinach nocnych. Preferujemy współpracę w modelu abonamentowym, co pozwala nam oferować lepszą jakość usług w korzystniejszych cenach, zapewniając klientom stałą gotowość ich przestrzeni na przyjęcie gości.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
