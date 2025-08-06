import ServiceLayout from "@/app/service-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cennik | Eco Efect Bydgoszcz",
  alternates: {
    canonical: "https://ecoefect.pl/cennik",
  },
}

export default function CennikPage() {
  return (
    <ServiceLayout 
      title="Cennik" 
      pageName="Cennik"
      imageUrl="/cennik.webp"
      >
      <div className="prose max-w-none">
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-gray-50 rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left font-bold">Usługa</th>
                <th className="py-3 px-4 text-left font-bold">Cena</th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              <tr className="border-t">
                <td className="py-3 px-4">Sprzątanie biur</td>
                <td className="py-3 px-4">od 1 zł/m2</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4">Sprzątanie hal magazynowych</td>
                <td className="py-3 px-4">od 1,5 zł/m2</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4">Pranie wykładzin</td>
                <td className="py-3 px-4">od 7 zł/m2</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4">Mycie okien na wysokościach</td>
                <td className="py-3 px-4">od 8 zł/m2</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4">Mycie elewacji</td>
                <td className="py-3 px-4">od 7 zł/m2</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4">Polimeryzacja podłóg</td>
                <td className="py-3 px-4">od 9 zł/m2</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4">Doczyszczanie posadzek</td>
                <td className="py-3 px-4">od 5 zł/m2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ServiceLayout>
  )
}
