"use client"

import { useEffect, useState, useCallback } from "react"
import { useTheme } from "next-themes"

interface ThemeStyles {
  light: CSSStyleDeclaration
  dark: CSSStyleDeclaration
}

export function useThemePreloader() {
  const { theme } = useTheme()
  const [preloadedStyles, setPreloadedStyles] = useState<ThemeStyles | null>(null)
  const [isPreloaded, setIsPreloaded] = useState(false)

  // Preload theme styles
  const preloadThemeStyles = useCallback(() => {
    if (typeof window === "undefined") return

    // Create temporary elements to capture theme styles
    const lightElement = document.createElement("div")
    const darkElement = document.createElement("div")

    // Apply theme classes
    lightElement.className = "theme-light"
    darkElement.className = "theme-dark dark"

    // Add to DOM temporarily (hidden)
    lightElement.style.position = "absolute"
    lightElement.style.visibility = "hidden"
    lightElement.style.pointerEvents = "none"
    darkElement.style.position = "absolute"
    darkElement.style.visibility = "hidden"
    darkElement.style.pointerEvents = "none"

    document.body.appendChild(lightElement)
    document.body.appendChild(darkElement)

    // Get computed styles
    const lightStyles = window.getComputedStyle(lightElement)
    const darkStyles = window.getComputedStyle(darkElement)

    // Cache the styles
    const themeStyles: ThemeStyles = {
      light: lightStyles,
      dark: darkStyles,
    }

    setPreloadedStyles(themeStyles)
    setIsPreloaded(true)

    // Clean up
    document.body.removeChild(lightElement)
    document.body.removeChild(darkElement)

    // Store in sessionStorage for faster subsequent loads
    try {
      const styleCache = {
        light: {
          background: lightStyles.backgroundColor,
          color: lightStyles.color,
          borderColor: lightStyles.borderColor,
        },
        dark: {
          background: darkStyles.backgroundColor,
          color: darkStyles.color,
          borderColor: darkStyles.borderColor,
        },
      }
      sessionStorage.setItem("theme-styles-cache", JSON.stringify(styleCache))
    } catch (error) {
      console.warn("Failed to cache theme styles:", error)
    }
  }, [])

  // Load cached styles on mount
  useEffect(() => {
    try {
      const cached = sessionStorage.getItem("theme-styles-cache")
      if (cached) {
        setIsPreloaded(true)
      } else {
        preloadThemeStyles()
      }
    } catch (error) {
      preloadThemeStyles()
    }
  }, [preloadThemeStyles])

  return {
    preloadedStyles,
    isPreloaded,
    preloadThemeStyles,
  }
}
