"use client"

import Link from "next/link"
import { MapPin, Phone, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [ofertaOpen, setOfertaOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <span className="text-2xl font-bold">
                  <span className="text-[#8cc63f]">ECO</span> <span className="text-[#007a33]">EFECT</span>
                </span>
              </div>
              <span className="text-xs text-gray-600 mt-1 ml-1 block">FIRMA SPRZĄTAJĄCA BYDGOSZCZ</span>
            </Link>

            <button
              className="lg:hidden text-gray-700 hover:text-green-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className={`${isMobile && !mobileMenuOpen ? "hidden" : "flex"} flex-col md:flex-row items-center gap-6`}>
            <div className="flex items-center gap-2">
              <div className="text-green-500">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-sm font-medium">Kontakt</h3>
                <p className="text-sm">
                  <a href="tel:+48502630031">502 630 031</a>
                </p>
                <p className="text-xs text-gray-500">
                  <a href="mailto:ecoefect@ecoefect.pl">ecoefect@ecoefect.pl</a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-green-500">
                <MapPin size={20} />
              </div>
              <div>
                <a
                  href="https://www.google.com/maps/place/Eco+Efect+Ryszard+Bąk/@53.101165,18.0634756,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-700 transition-colors"
                >
                  <p className="text-sm">ul. Wojska Polskiego 65</p>
                  <p className="text-sm">85-825 Bydgoszcz</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <nav className={`mt-6 ${isMobile && !mobileMenuOpen ? "hidden" : "block"}`}>
          <ul className="flex flex-col lg:flex-row justify-center lg:justify-end space-y-2 lg:space-y-0 lg:space-x-6">
            <li>
              <Link href="/" className="nav-link active block">
                Strona główna
              </Link>
            </li>
            <li className="relative">
              <button
                className="nav-link flex items-center w-full justify-between lg:justify-start"
                onClick={() => setOfertaOpen(!ofertaOpen)}
              >
                Oferta
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {ofertaOpen && (
                <ul className="lg:absolute z-10 bg-white lg:shadow-md lg:rounded-md py-2 mt-1 w-full lg:w-64 pl-4 lg:pl-0">
                  <li>
                    <Link href="/#et" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                      Usługi sprzątania
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mycie-okien-i-elewacji-na-wysokosciach"
                      className="block px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      Mycie okien na wysokości
                    </Link>
                  </li>
                  <li>
                    <Link href="/pranie-dywanow-i-wykladzin" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                      Czyszczenie wykładzin i pranie dywanów
                    </Link>
                  </li>
                  <li>
                    <Link href="/pielegnacja-terenow-zielonych" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                      Pielęgnacja ogrodów i terenów zielonych
                    </Link>
                  </li>
                  <li>
                    <Link href="/odsniezanie" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                      Odśnieżanie parkingów, placów i obiektów
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/czyszczenie-polimeryzacja-posadzek"
                      className="block px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      Zabezpieczanie i czyszczenie posadzek i podłóg
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/cennik" className="nav-link block">
                Cennik
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="nav-link block">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
