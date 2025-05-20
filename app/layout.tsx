import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: "ECO EFECT - Profesjonalne usługi sprzątania",
  description:
    "Firma sprzątająca Bydgoszcz - profesjonalne usługi sprzątania w województwie kujawsko-pomorskim i nie tylko",
  robots: "noindex,follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
