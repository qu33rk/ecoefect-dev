export default function CallToAction() {
  return (
    <section className="py-12 bg-green-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Potrzebujesz profesjonalnych usług?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Skontaktuj się z nami, aby otrzymać bezpłatną wycenę i dowiedzieć się więcej o naszych usługach.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+48502630031"
            className="bg-white text-green-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Zadzwoń: 502 630 031
          </a>
          <a
            href="/kontakt"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
          >
            Formularz kontaktowy
          </a>
        </div>
      </div>
    </section>
  )
}
