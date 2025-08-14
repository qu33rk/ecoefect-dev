// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import CookieConsentSlot from "@/components/CookieConsentSlot" // patrz sekcja 2

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  robots: "index,follow",
  verification: { google: "UK8pEQpUeoVLFbiVXEwi9O99XNtTzkmQFTKRpKvoNJw" }
}

const GA_MEASUREMENT_ID = "G-6NS586029X"

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <head>
        {/* GA4 gtag.js */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        {/* Consent Mode: default denied (v2) + GA4 init */}
        <Script id="ga4-consent-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Ustaw domyślny stan zgody przed użyciem tagów
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });

            // Opcjonalnie: redakcja identyfikatorów rekl. po klikach
            gtag('set', 'ads_data_redaction', true);

            // Inicjalizacja GA4
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              anonymize_ip: true
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Slot klientowy z banerem i przełączaniem zgody */}
        <CookieConsentSlot gaId={GA_MEASUREMENT_ID} />
        {children}
      </body>
    </html>
  )
}
