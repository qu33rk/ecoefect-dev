import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function KontaktPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Kontakt</h1>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-green-700">Dane kontaktowe</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="text-green-600 h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-gray-700">502 630 031</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="text-green-600 h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-700">ecoefect@ecoefect.pl</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="text-green-600 h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">Adres</p>
                    <p className="text-gray-700">ul. Wojska Polskiego 65</p>
                    <p className="text-gray-700">85-825 Bydgoszcz</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-3">Godziny pracy</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Poniedziałek - Piątek</div>
                  <div>8:00 - 16:00</div>
                  <div>Sobota</div>
                  <div>Zamknięte</div>
                  <div>Niedziela</div>
                  <div>Zamknięte</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-green-700">Formularz kontaktowy</h2>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Imię i nazwisko
                    </label>
                    <Input id="name" placeholder="Wpisz swoje imię i nazwisko" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefon
                    </label>
                    <Input id="phone" placeholder="Wpisz swój numer telefonu" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Wpisz swój adres email" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Temat
                  </label>
                  <Input id="subject" placeholder="Wpisz temat wiadomości" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Wiadomość
                  </label>
                  <Textarea id="message" placeholder="Wpisz swoją wiadomość" rows={5} />
                </div>

                <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                  <Send className="h-4 w-4 mr-2" />
                  Wyślij wiadomość
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
