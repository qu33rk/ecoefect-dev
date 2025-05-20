export default function Steps() {
  return (
    <section className="py-16 bg-gray-50" id="et">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Usługi sprzątania</h2>
          <p className="text-xl">zamów w 3 prostych krokach:</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="step-circle mb-6">1</div>
            <h3 className="text-xl font-bold mb-4">Skontaktuj się</h3>
            <p className="text-gray-700">
              Zadzwoń{" "}
              <a href="tel:+48502630031" className="text-green-700 hover:underline">
                502 630 031
              </a>{" "}
              lub wypełnij formularz kontaktowy – nasza firma odpowie na Twoje pytania.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="step-circle mb-6">2</div>
            <h3 className="text-xl font-bold mb-4">Umów spotkanie</h3>
            <p className="text-gray-700">
              Nasz przedstawiciel przyjedzie na miejsce, aby obejrzeć obiekt i poznać Twoje oczekiwania.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="step-circle mb-6">3</div>
            <h3 className="text-xl font-bold mb-4">Ustal szczegóły</h3>
            <p className="text-gray-700">
              Przedstawiamy Ci ofertę na usługi sprzątania, a po jej akceptacji finalizujemy formalności.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
