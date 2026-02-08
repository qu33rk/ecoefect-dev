"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useMemo, useRef, useEffect } from "react"

export default function SideMenu() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false) // tylko mobile
  const [height, setHeight] = useState<string>("0px")
  const contentRef = useRef<HTMLUListElement>(null)

  const menuItems = useMemo(
    () => [
      { title: "Sprzątanie biur", href: "/sprzatanie-biur" },
      { title: "Mycie okien na wysokości", href: "/mycie-okien-i-elewacji-na-wysokosciach" },
      { title: "Czyszczenie wykładzin i pranie dywanów", href: "/pranie-dywanow-i-wykladzin" },
      { title: "Pielęgnacja ogrodów i terenów zielonych", href: "/pielegnacja-terenow-zielonych" },
      { title: "Odśnieżanie parkingów, placów i obiektów", href: "/odsniezanie" },
      { title: "Zabezpieczanie i czyszczenie posadzek i podłóg", href: "/czyszczenie-polimeryzacja-posadzek" },
      { title: "Cennik", href: "/cennik" },
      { title: "Polityka plików cookies", href: "/cookies" },
    ],
    []
  )

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"))

  // Animacja wysokości tylko na mobile
  useEffect(() => {
    if (!contentRef.current) return
    setHeight(isOpen ? contentRef.current.scrollHeight + "px" : "0px")
  }, [isOpen])

  return (
    <nav aria-label="Menu boczne" className="bg-gray-100 rounded-lg overflow-hidden">
      {/* Nagłówek – zawsze widoczny, ale toggle tylko na mobile */}
      <div
        className="flex justify-between items-center p-4 bg-gray-200 select-none"
        onClick={() => {
          // toggle tylko na mobile
          if (typeof window !== "undefined" && window.innerWidth < 768) {
            setIsOpen(prev => !prev)
          }
        }}
      >
        <span className="font-bold">Nasze usługi</span>

        {/* Ikony tylko mobile */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`md:hidden ${isOpen ? "hidden" : "block"}`}
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>

      {/* Desktop: zawsze rozwinięte, bez animacji, bez zależności od window/state */}
      <ul className="hidden md:block divide-y divide-gray-200">
        {menuItems.map((item, idx) => {
          const active = isActive(item.href)
          return (
            <li key={idx}>
              <Link
                href={item.href}
                className={`block py-3 px-4 transition-colors ${
                  active ? "bg-green-700 text-white" : "hover:bg-gray-200"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Mobile: wariant z animacją max-height */}
      <ul
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`md:hidden divide-y divide-gray-200 overflow-hidden transition-[max-height] duration-300 ease-in-out`}
      >
        {menuItems.map((item, idx) => {
          const active = isActive(item.href)
          return (
            <li key={idx}>
              <Link
                href={item.href}
                className={`block py-3 px-4 transition-colors ${
                  active ? "bg-green-700 text-white" : "hover:bg-gray-200"
                }`}
                aria-current={active ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}