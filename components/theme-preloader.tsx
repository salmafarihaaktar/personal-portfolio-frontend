"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

// CSS variables for instant theme switching
const THEME_VARIABLES = {
  light: {
    "--background": "0 0% 100%",
    "--foreground": "240 10% 3.9%",
    "--card": "0 0% 100%",
    "--card-foreground": "240 10% 3.9%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "240 10% 3.9%",
    "--primary": "271.4 91.7% 65.1%",
    "--primary-foreground": "0 0% 98%",
    "--secondary": "240 4.8% 95.9%",
    "--secondary-foreground": "240 5.9% 10%",
    "--muted": "240 4.8% 95.9%",
    "--muted-foreground": "240 3.8% 46.1%",
    "--accent": "240 4.8% 95.9%",
    "--accent-foreground": "240 5.9% 10%",
    "--destructive": "0 84.2% 60.2%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "240 5.9% 90%",
    "--input": "240 5.9% 90%",
    "--ring": "271.4 91.7% 65.1%",
  },
  dark: {
    "--background": "240 10% 3.9%",
    "--foreground": "0 0% 98%",
    "--card": "240 10% 3.9%",
    "--card-foreground": "0 0% 98%",
    "--popover": "240 10% 3.9%",
    "--popover-foreground": "0 0% 98%",
    "--primary": "271.4 91.7% 65.1%",
    "--primary-foreground": "0 0% 98%",
    "--secondary": "240 3.7% 15.9%",
    "--secondary-foreground": "0 0% 98%",
    "--muted": "240 3.7% 15.9%",
    "--muted-foreground": "240 5% 64.9%",
    "--accent": "240 3.7% 15.9%",
    "--accent-foreground": "0 0% 98%",
    "--destructive": "0 62.8% 30.6%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "240 3.7% 15.9%",
    "--input": "240 3.7% 15.9%",
    "--ring": "271.4 91.7% 65.1%",
  },
}

export function ThemePreloader() {
  const { theme } = useTheme()

  useEffect(() => {
    if (typeof window === "undefined") return

    // Preload both theme styles immediately
    const style = document.createElement("style")
    style.id = "theme-preloader-styles"
    style.textContent = `
      :root {
        ${Object.entries(THEME_VARIABLES.light)
          .map(([key, value]) => `${key}: ${value};`)
          .join("\n        ")}
      }
      
      .dark {
        ${Object.entries(THEME_VARIABLES.dark)
          .map(([key, value]) => `${key}: ${value};`)
          .join("\n        ")}
      }
      
      /* Instant theme switching optimization */
      .theme-instant-switch {
        transition: none !important;
      }
      
      /* Preload critical theme-dependent styles */
      .theme-preload-light {
        background-color: hsl(0 0% 100%);
        color: hsl(240 10% 3.9%);
        border-color: hsl(240 5.9% 90%);
      }
      
      .theme-preload-dark {
        background-color: hsl(240 10% 3.9%);
        color: hsl(0 0% 98%);
        border-color: hsl(240 3.7% 15.9%);
      }
    `

    // Insert at the beginning of head for high priority
    document.head.insertBefore(style, document.head.firstChild)

    // Preload theme-specific images and assets
    const preloadAssets = () => {
      // Create link elements for preloading
      const lightPreload = document.createElement("link")
      lightPreload.rel = "preload"
      lightPreload.as = "style"
      lightPreload.href =
        "data:text/css;base64," +
        btoa(`
        .light-theme-assets {
          background-image: url('/placeholder.svg?height=192&width=192');
        }
      `)

      const darkPreload = document.createElement("link")
      darkPreload.rel = "preload"
      darkPreload.as = "style"
      darkPreload.href =
        "data:text/css;base64," +
        btoa(`
        .dark-theme-assets {
          background-image: url('/placeholder.svg?height=192&width=192');
        }
      `)

      document.head.appendChild(lightPreload)
      document.head.appendChild(darkPreload)
    }

    preloadAssets()

    return () => {
      // Cleanup
      const existingStyle = document.getElementById("theme-preloader-styles")
      if (existingStyle) {
        existingStyle.remove()
      }
    }
  }, [])

  // Apply instant theme switching when theme changes
  useEffect(() => {
    if (typeof window === "undefined" || !theme) return

    const root = document.documentElement
    const variables = THEME_VARIABLES[theme as keyof typeof THEME_VARIABLES]

    if (variables) {
      // Apply variables instantly without transitions
      root.classList.add("theme-instant-switch")

      Object.entries(variables).forEach(([key, value]) => {
        root.style.setProperty(key, value)
      })

      // Re-enable transitions after a frame
      requestAnimationFrame(() => {
        root.classList.remove("theme-instant-switch")
      })
    }
  }, [theme])

  return null
}
