"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0
      setIsMobile(mobile)
      setIsTouch(touch)
    }

    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setPrefersReducedMotion(mediaQuery.matches)

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches)
      }

      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }

    checkMobile()
    const cleanup = checkReducedMotion()

    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
      cleanup?.()
    }
  }, [])

  return { isMobile, isTouch, prefersReducedMotion }
}
