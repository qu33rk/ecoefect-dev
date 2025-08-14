"use client"

import * as React from "react"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CookieConsentProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "aria-modal"> {
  variant?: "default" | "small" | "mini"
  demo?: boolean
  onAcceptCallback?: () => void
  onDeclineCallback?: () => void
  description?: string
  learnMoreHref?: string
}

const CookieConsent = React.forwardRef<HTMLDivElement, CookieConsentProps>(
  (
    {
      variant = "default",
      demo = false,
      onAcceptCallback = () => {},
      onDeclineCallback = () => {},
      className,
      description = "Ta strona wykorzystuje pliki cookie w celu zapewnienia najlepszego doświadczenia użytkownika oraz analizy ruchu.",
      learnMoreHref = "https://ecoefect.pl/cookies",
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [hide, setHide] = React.useState(false)
    const acceptBtnRef = React.useRef<HTMLButtonElement | null>(null)

    const handleAccept = React.useCallback(() => {
      setIsOpen(false)
      document.cookie =
        "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT"

      // Aktualizacja trybu zgody GA4
      if (typeof window !== "undefined" && (window as any).gtag) {
        // Zgoda na wszystkie kategorie
        ;(window as any).gtag("consent", "update", {
          ad_storage: "granted",
          analytics_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
        })
        ;(window as any).gtag("event", "page_view", {
          page_path: window.location.pathname,
        })
      }

      setTimeout(() => setHide(true), 700)
      onAcceptCallback()
    }, [onAcceptCallback])

    const handleDecline = React.useCallback(() => {
      setIsOpen(false)
      setTimeout(() => setHide(true), 700)
      onDeclineCallback()
    }, [onDeclineCallback])

    React.useEffect(() => {
      try {
        setIsOpen(true)
        if (document.cookie.includes("cookieConsent=true") && !demo) {
          setIsOpen(false)
          setTimeout(() => setHide(true), 700)
        } else {
          // Ustaw focus na przycisk akceptacji
          setTimeout(() => {
            acceptBtnRef.current?.focus()
          }, 100)
        }
      } catch (error) {
        console.warn("Błąd w cookie consent:", error)
      }
    }, [demo])

    if (hide) return null

    const containerClasses = cn(
      "fixed z-50 transition-all duration-700",
      !isOpen ? "translate-y-full opacity-0" : "translate-y-0 opacity-100",
      className
    )

    const commonWrapperProps = {
      ref,
      role: "dialog",
      "aria-modal": true as const,
      "aria-labelledby": "cookie-consent-title",
      "aria-describedby": "cookie-consent-desc",
      className: cn(
        containerClasses,
        variant === "mini"
          ? "right-0 sm:right-4 bottom-4 w-full sm:max-w-3xl"
          : "bottom-0 right-0 sm:right-4 sm:bottom-4 w-full sm:max-w-md"
      ),
      ...props,
    }

    const learnMoreLink = (
      <a
        href={learnMoreHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-primary underline underline-offset-4 hover:no-underline"
        aria-label="Dowiedz się więcej o plikach cookies (link otwiera w nowym oknie)"
      >
        Dowiedz się więcej
      </a>
    )

    if (variant === "default") {
      return (
        <div {...commonWrapperProps} aria-live="polite">
          <Card className="m-3 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle id="cookie-consent-title" className="text-lg">
                Używamy plików cookie
              </CardTitle>
              <Cookie className="h-5 w-5" aria-hidden="true" />
            </CardHeader>
            <CardContent className="space-y-2">
              <CardDescription id="cookie-consent-desc" className="text-sm">
                {description}
              </CardDescription>
              <p className="text-[12px] text-muted-foreground">
                Klikając <span className="font-medium">„Akceptuj”</span>, wyrażasz zgodę na używanie plików cookie.
              </p>
              {learnMoreLink}
            </CardContent>
            <CardFooter className="flex gap-2 pt-2">
              <Button
                onClick={handleDecline}
                variant="secondary"
                className="flex-1"
                aria-label="Odrzuć wszystkie pliki cookie"
              >
                Odrzuć
              </Button>
              <Button
                ref={acceptBtnRef}
                onClick={handleAccept}
                className="flex-1"
                aria-label="Zaakceptuj wszystkie pliki cookie"
              >
                Akceptuj
              </Button>
            </CardFooter>
          </Card>
        </div>
      )
    }

    if (variant === "small") {
      return (
        <div {...commonWrapperProps} aria-live="polite">
          <Card className="m-3 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 h-0 px-4">
              <CardTitle id="cookie-consent-title" className="text-base">
                Używamy plików cookie
              </CardTitle>
              <Cookie className="h-4 w-4" aria-hidden="true" />
            </CardHeader>
            <CardContent className="pt-0 pb-2 px-4">
              <CardDescription id="cookie-consent-desc" className="text-sm">
                {description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex gap-2 h-0 py-2 px-4">
              <Button
                onClick={handleDecline}
                variant="secondary"
                size="sm"
                className="flex-1 rounded-full"
                aria-label="Odrzuć wszystkie pliki cookie"
              >
                Odrzuć
              </Button>
              <Button
                ref={acceptBtnRef}
                onClick={handleAccept}
                size="sm"
                className="flex-1 rounded-full"
                aria-label="Zaakceptuj wszystkie pliki cookie"
              >
                Akceptuj
              </Button>
            </CardFooter>
          </Card>
        </div>
      )
    }

    if (variant === "mini") {
      return (
        <div {...commonWrapperProps} aria-live="polite">
          <Card className="mx-3 p-0 py-3 shadow-lg">
            <CardContent className="sm:flex grid gap-4 p-0 px-3.5">
              <CardDescription id="cookie-consent-desc" className="text-xs sm:text-sm flex-1">
                {description}
              </CardDescription>
              <div className="flex items-center gap-2 justify-end sm:gap-3">
                <Button
                  onClick={handleDecline}
                  size="sm"
                  variant="secondary"
                  className="text-xs h-7"
                  aria-label="Odrzuć wszystkie pliki cookie"
                >
                  Tylko niezbędne
                  <span className="sr-only sm:hidden">Tylko niezbędne</span>
                </Button>
                <Button
                  ref={acceptBtnRef}
                  onClick={handleAccept}
                  size="sm"
                  className="text-xs h-7"
                  aria-label="Zaakceptuj wszystkie pliki cookie"
                >
                  Zaakceptuj wszystkie
                  <span className="sr-only sm:hidden">Zaakceptuj wszystkie</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }

    return null
  }
)

CookieConsent.displayName = "CookieConsent"
export { CookieConsent }
export default CookieConsent