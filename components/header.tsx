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
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop layout */}
        <div className="hidden md:flex flex-row items-center justify-between gap-8">
          {/* Logo and description */}
          <div className="flex flex-col items-center md:items-start min-w-[180px]">
            <Link href="/" className="flex flex-col items-center md:items-start">
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
          <div className="flex flex-row items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="text-[#8cc63f]">
                <Phone size={30} />
              </div>
              <div>
                <span className="text-sm font-medium">Kontakt</span>
                <p className="text-sm text-gray-700">
                  <a href="tel:+48502630031">502 630 031</a>
                </p>
                <p className="text-xs text-gray-500">
                  <a href="mailto:ecoefect@ecoefect.pl">ecoefect@ecoefect.pl</a>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[#8cc63f]">
                <MapPin size={30} />
              </div>
              <div>
                <a
                  href="https://www.google.com/maps/place/Eco+Efect+Ryszard+Bąk/@53.101165,18.0634756,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-700 transition-colors"
                >
                  <p className="text-sm text-gray-700">ul. Wojska Polskiego 65</p>
                  <p className="text-sm text-gray-500">85-825 Bydgoszcz</p>
                </a>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <nav>
            <ul className="flex flex-row items-center gap-8">
              <li>
                <Link href="/" className="nav-link active block font-bold">
                  Strona główna
                </Link>
              </li>
              <li className="relative">
                <button
                  className="nav-link flex items-center font-bold"
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
                  <ul className="absolute right-0 z-10 bg-white shadow-md rounded-md py-2 mt-1 w-64">
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
            <div className="flex flex-col items-start">
              <Link href="/" className="flex flex-col items-start">
                <span className="text-3xl font-bold leading-none">
                  <span className="text-[#8cc63f]">ECO</span>{" "}
                  <span className="text-[#007a33]">EFECT</span>
                </span>
                <span className="text-xs text-gray-600 mt-2 block font-semibold">
                  FIRMA SPRZĄTAJĄCA BYDGOSZCZ
                </span>
              </Link>
              {/* Contact info below logo on mobile */}
              {!mobileMenuOpen && (
                <div className="mt-2 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="text-[#8cc63f]">
                      <Phone size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-medium">Kontakt</span>
                      <p className="text-xs text-gray-700">
                        <a href="tel:+48502630031">502 630 031</a>
                      </p>
                      <p className="text-xs text-gray-500">
                        <a href="mailto:ecoefect@ecoefect.pl">ecoefect@ecoefect.pl</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[#8cc63f]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <a
                        href="https://www.google.com/maps/place/Eco+Efect+Ryszard+Bąk/@53.101165,18.0634756,17z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-700 transition-colors"
                      >
                        <p className="text-xs text-gray-700">ul. Wojska Polskiego 65</p>
                        <p className="text-xs text-gray-500">85-825 Bydgoszcz</p>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Hamburger menu */}
            <button
              className="ml-4 text-gray-700 hover:text-green-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMobile && mobileMenuOpen && (
          <nav className="mt-4">
            <ul className="flex flex-col items-center gap-4">
              <li>
                <Link href="/" className="nav-link active block font-bold border-b-2 border-[#8cc63f] pb-1">
                  Strona główna
                </Link>
              </li>
              <li>
                <button
                  className="nav-link flex items-center font-bold"
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
                  <ul className="bg-white shadow-md rounded-md py-2 mt-1 w-64 mx-auto">
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
        )}
      </div>
    </header>
  )
}
