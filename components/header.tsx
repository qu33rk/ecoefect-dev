"use client"

import Link from "next/link"
import { MapPin, Phone, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [ofertaOpen, setOfertaOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 1024)
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return (
    <header className="bg-white shadow-sm" aria-label="Nagłówek strony">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop layout */}
        <div className="hidden md:flex flex-row items-center justify-between gap-8">
          {/* Logo and description */}
          <div className="flex flex-col items-center md:items-start min-w-[180px]">
            <Link href="/" className="flex flex-col items-center md:items-start" aria-label="Przejdź do strony głównej">
              <span className="text-3xl font-bold leading-none">
                <span className="text-[#8cc63f]">ECO</span>{" "}
                <span className="text-[#007a33]">EFECT</span>
              </span>
              <span className="text-xs text-gray-600 mt-2 block text-center md:text-left font-semibold">
                FIRMA SPRZĄTAJĄCA BYDGOSZCZ
              </span>
            </Link>
          </div>
          {/* Contact info */}
          <div className="flex flex-row items-center gap-8" aria-label="Kontakt i adres">
            <div className="flex items-center gap-2">
              <div className="text-[#8cc63f]">
                <Phone size={30} aria-hidden="true" />
              </div>
              <div>
                <span className="text-sm font-medium">Kontakt</span>
                <p className="text-sm text-gray-700">
                  <a href="tel:+48502630031" aria-label="Zadzwoń pod numer 502 630 031">502 630 031</a>
                </p>
                <p className="text-xs text-gray-500">
                  <a href="mailto:ecoefect@ecoefect.pl" aria-label="Wyślij e-mail na adres ecoefect@ecoefect.pl">ecoefect@ecoefect.pl</a>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[#8cc63f]">
                <MapPin size={30} aria-hidden="true" />
              </div>
              <div>
                <a
                  href="https://www.google.com/maps/place/Eco+Efect+Ryszard+Bąk/@53.101165,18.0634756,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-700 transition-colors"
                  aria-label="Zobacz lokalizację firmy na mapie"
                >
                  <p className="text-sm text-gray-700">ul. Wojska Polskiego 65</p>
                  <p className="text-sm text-gray-500">85-825 Bydgoszcz</p>
                </a>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <nav aria-label="Główne menu">
            <ul className="flex flex-row items-center gap-8">
              <li>
                <Link href="/" className="nav-link active block font-bold" aria-current="page">
                  Strona główna
                </Link>
              </li>
              <li className="relative">
                <button
                  className="nav-link flex items-center font-bold"
                  aria-haspopup="true"
                  aria-expanded={ofertaOpen}
                  aria-controls="oferta-menu"
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
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {ofertaOpen && (
                  <ul
                    id="oferta-menu"
                    className="absolute right-0 z-10 bg-white shadow-md rounded-md py-2 mt-1 w-64"
                    aria-label="Podmenu Oferta"
                  >
                    <li>
                      <Link href="/sprzatanie-biur" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                        Sprzątanie biur
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
                <Link href="/cennik" className="nav-link block font-bold">
                  Cennik
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="nav-link block font-bold">
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-row items-center justify-between gap-4">
          {/* Logo and hamburger */}
          <div className="flex flex-row items-center justify-between w-full">
            <Link href="/" className="flex flex-col items-start" aria-label="Przejdź do strony głównej">
              <span className="text-3xl font-bold leading-none">
                <span className="text-[#8cc63f]">ECO</span>{" "}
                <span className="text-[#007a33]">EFECT</span>
              </span>
              <span className="text-xs text-gray-600 mt-2 block font-semibold">
                FIRMA SPRZĄTAJĄCA BYDGOSZCZ
              </span>
            </Link>
            {/* Hamburger menu */}
            <button
              className="ml-4 text-gray-700 hover:text-green-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMobile && mobileMenuOpen && (
          <nav id="mobile-menu" aria-label="Menu mobilne" className="mt-4">
            <ul className="flex flex-col items-center gap-4">
              <li>
                <Link href="/" className="nav-link active block font-bold border-b-2 border-[#8cc63f] pb-1" aria-current="page">
                  Strona główna
                </Link>
              </li>
              <li className="w-full">
                <button
                  className="nav-link flex items-center font-bold w-full justify-center"
                  aria-haspopup="true"
                  aria-expanded={ofertaOpen}
                  aria-controls="mobile-oferta-menu"
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
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {ofertaOpen && (
                  <ul
                    id="mobile-oferta-menu"
                    className="bg-white shadow-md rounded-md py-2 mt-1 w-full max-w-xs mx-auto"
                    aria-label="Podmenu Oferta"
                  >
                    <li>
                      <Link href="/sprzatanie-biur" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                        Sprzątanie biur
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
                <Link href="/cennik" className="nav-link block font-bold">
                  Cennik
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="nav-link block font-bold">
                  Kontakt
                </Link>
              </li>
            </ul>
            {/* Kontakt i adres na mobile, tylko po rozwinięciu menu */}
            <div className="mt-6 w-full flex flex-col items-center gap-4" aria-label="Kontakt i adres">
              <div className="flex items-center gap-2">
                <div className="text-[#8cc63f]">
                  <Phone size={24} aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-medium">Kontakt</span>
                  <p className="text-xs text-gray-700">
                    <a href="tel:+48502630031" aria-label="Zadzwoń pod numer 502 630 031">502 630 031</a>
                  </p>
                  <p className="text-xs text-gray-500">
                    <a href="mailto:ecoefect@ecoefect.pl" aria-label="Wyślij e-mail na adres ecoefect@ecoefect.pl">ecoefect@ecoefect.pl</a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[#8cc63f]">
                  <MapPin size={24} aria-hidden="true" />
                </div>
                <div>
                  <a
                    href="https://www.google.com/maps/place/Eco+Efect+Ryszard+Bąk/@53.101165,18.0634756,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-700 transition-colors"
                    aria-label="Zobacz lokalizację firmy na mapie"
                  >
                    <p className="text-xs text-gray-700">ul. Wojska Polskiego 65</p>
                    <p className="text-xs text-gray-500">85-825 Bydgoszcz</p>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
