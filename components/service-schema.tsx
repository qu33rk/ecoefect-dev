import Script from "next/script"

interface ServiceSchemaProps {
  serviceName: string
  serviceDescription: string
  serviceUrl: string
  imageUrl?: string
}

export default function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceUrl,
  imageUrl,
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    url: serviceUrl,
    provider: {
      "@type": "LocalBusiness",
      name: "Eco Efect Ryszard Bąk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Wojska Polskiego 65",
        addressLocality: "Bydgoszcz",
        postalCode: "85-825",
        addressCountry: "PL",
      },
      telephone: "+48502630031",
      email: "ecoefect@ecoefect.pl",
      url: "https://ecoefect.pl",
    },
    areaServed: {
      "@type": "Place",
      name: "Bydgoszcz i województwo kujawsko-pomorskie",
    },
    ...(imageUrl && { image: `https://ecoefect.pl${imageUrl}` }),
  }

  return (
    <Script id="service-schema" type="application/ld+json">
      {JSON.stringify(serviceSchema)}
    </Script>
  )
}
