export default function ExperienceSection() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-green-700 via-green-700 to-emerald-800 px-6 py-12 text-white shadow-[0_24px_70px_-40px_rgba(22,101,52,0.65)] md:px-10 md:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Firma sprzątająca z doświadczeniem
            </h2>
            <div className="mt-8 grid gap-4 text-left md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-base leading-7 text-green-50 md:text-lg">
                  Od ponad 10 lat świadczymy profesjonalne usługi sprzątania. Doskonale znamy bydgoski rynek, potrzeby i
                  wymagania naszych klientów.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-base leading-7 text-green-50 md:text-lg">
                  Jesteśmy w stanie zaoferować szybką i dokładną realizację zleceń, gwarantując jednocześnie pełne
                  zadowolenie bezpieczeństwo.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-base leading-7 text-green-50 md:text-lg">
                  Wieloletnia praktyka i zdobyte doświadczenie nauczyły nas indywidualnego podejścia do każdego projektu.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-base leading-7 text-green-50 md:text-lg">
                  Szanujemy czas i pieniądze naszych klientów, dlatego szczegółowe warunki współpracy i zakres usług
                  ustalamy indywidualnie, po zapoznaniu się oczekiwaniami.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/15 bg-white/10 px-6 py-5">
              <p className="text-base leading-7 text-green-50 md:text-lg">
                Na dobry początek proponujemy spotkanie i wycenę sprzątania lub innych usług w Państwa siedzibie.
              </p>
              <p className="mt-3 text-lg font-bold md:text-xl">
                Gwarantujemy rzeczowe podejście i atrakcyjne warunki współpracy!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
