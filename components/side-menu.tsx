import Link from "next/link"

interface SideMenuProps {
  activePage: string
}

export default function SideMenu({ activePage }: SideMenuProps) {
  const menuItems = [
    { title: "NASZE USŁUGI", href: "#", isHeader: true },
    { title: "Mycie okien na wysokości", href: "/mycie-okien-i-elewacji-na-wysokosciach" },
    { title: "Czyszczenie wykładzin i pranie dywanów", href: "/pranie-dywanow-i-wykladzin" },
    { title: "Pielęgnacja ogrodów i terenów zielonych", href: "/pielegnacja-terenow-zielonych" },
    { title: "Odśnieżanie parkingów, placów i obiektów", href: "/odsniezanie" },
    { title: "Zabezpieczanie i czyszczenie posadzek i podłóg", href: "/czyszczenie-polimeryzacja-posadzek" },
    { title: "Cennik", href: "/cennik" },
    { title: "Polityka plików cookies", href: "/cookies" },
  ]

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {menuItems.map((item, index) => (
          <li key={index} className={item.isHeader ? "bg-gray-700 text-white py-3 px-4 font-bold" : ""}>
            {item.isHeader ? (
              <span>{item.title}</span>
            ) : (
              <Link
                href={item.href}
                className={`block py-3 px-4 transition-colors ${
                  activePage === item.href.replace("/", "") || (item.href.includes(activePage) && activePage !== "")
                    ? "bg-green-700 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
