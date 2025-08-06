import Header from "@/components/header"
import Footer from "@/components/footer"
import SideMenu from "@/components/side-menu"
import Breadcrumbs from "@/components/breadcrumbs"
import ContactSection from "@/components/contact-section"
import type { ReactNode } from "react"

interface ServiceLayoutProps {
  children: ReactNode
  title: string
  pageName: string
  imageUrl?: string
}

export default function ServiceLayout({
  children,
  title,
  pageName,
  imageUrl,
}: ServiceLayoutProps) {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs pageName={pageName} />

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-1/4">
              <SideMenu activePage={pageName} />
            </aside>

            {/* Main content */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold mb-6">{title}</h1>
              {children}
            </div>

            {/* Image or gradient */}
            <div className="lg:w-1/4 h-auto">
              <div
                className={`sticky top-8 w-full h-[calc(100vh-120px)] bg-cover bg-center rounded-lg overflow-hidden`}
                style={{
                  backgroundImage: imageUrl
                    ? `url(${imageUrl})`
                    : "linear-gradient(to bottom right, var(--light-green), var(--dark-green))",
                }}
                aria-label={imageUrl ? title : "EcoEfect background"}
              >
                {!imageUrl && (
                  <div className="w-full h-full flex items-center justify-center text-white opacity-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
