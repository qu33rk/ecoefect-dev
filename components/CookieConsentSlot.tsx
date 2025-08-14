// app/components/CookieConsentSlot.tsx
"use client"

import * as React from "react"
import CookieConsent from "@/components/cookie-consent"

export default function CookieConsentSlot({ gaId }: { gaId: string }) {
  const handleAccept = React.useCallback(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      // Update consent → granted po interakcji
      (window as any).gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      })
      // Wyślij page_view po uzyskaniu zgody
      ;(window as any).gtag('event', 'page_view', {
        page_path: window.location.pathname
      })
      // Opcjonalnie: reconfig, aby zebrać pełne dane od tej chwili
      ;(window as any).gtag('config', gaId, {
        page_path: window.location.pathname
      })
    }
  }, [gaId])

  const handleDecline = React.useCallback(() => {
    // Zostaje denied; ewentualnie usuń/wyczyść marketingowe storage
  }, [])

  return (
    <CookieConsent
      variant="default"
      onAcceptCallback={handleAccept}
      onDeclineCallback={handleDecline}
    />
  )
}
