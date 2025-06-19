"use client"

import { useTheme } from "next-themes"
import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(() => {
    if (isTransitioning) return // Prevent rapid clicking

    setIsTransitioning(true)

    // Use requestAnimationFrame for smoother transitions
    requestAnimationFrame(() => {
      setTheme(theme === "dark" ? "light" : "dark")

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false)
      }, 150) // Match CSS transition duration
    })
  }, [theme, setTheme, isTransitioning])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <Sun className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative" disabled={isTransitioning}>
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-150 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-150 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
