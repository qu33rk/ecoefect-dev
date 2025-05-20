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
