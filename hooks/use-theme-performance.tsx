"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function useThemePerformance() {
  const { theme } = useTheme()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Optimize performance during theme transitions
    setIsTransitioning(true)

    // Add class to body to pause animations during theme switch
    document.body.classList.add("theme-switching")

    // Use requestAnimationFrame for smooth transitions
    const timeoutId = setTimeout(() => {
      setIsTransitioning(false)
      document.body.classList.remove("theme-switching")
    }, 150) // Match CSS transition duration

    return () => {
      clearTimeout(timeoutId)
      document.body.classList.remove("theme-switching")
    }
  }, [theme, mounted])

  return {
    isTransitioning,
    mounted,
    currentTheme: theme,
  }
}
