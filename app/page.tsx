import type React from "react"
import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Steps from "@/components/steps"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import BrandsSection from "@/components/brands-section"
import ProfessionalSection from "@/components/professional-section"
import ExperienceSection from "@/components/experience-section"
import TestimonialsSection from "@/components/testimonials-section"
import MapSection from "@/components/map-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Firma sprzątająca Bydgoszcz - sprzątanie biur i firm ✅ Eco Efect",
  description: "Profesjonalna firma sprzątająca z Bydgoszczy świadcząca kompleksowe usługi związane z utrzymaniem czystości. ☎ 502 630 031",
  alternates: {
    canonical: "https://ecoefect.pl/",
  }
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Steps />
      <AboutSection />
      <ServicesSection />
      <BrandsSection />
      <ProfessionalSection />
      <ExperienceSection />
      <TestimonialsSection />
      <MapSection />
      <Footer />
    </main>
  )
}
