"use client"

import { useTheme } from "next-themes"
import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function InstantThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const instantToggleTheme = useCallback(() => {
    if (typeof window === "undefined") return

    const newTheme = theme === "dark" ? "light" : "dark"
    const root = document.documentElement

    // Disable transitions temporarily for instant switching
    root.style.setProperty("--theme-transition-duration", "0ms")

    // Apply theme instantly
    setTheme(newTheme)

    // Re-enable transitions after the switch
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        root.style.setProperty("--theme-transition-duration", "150ms")
      })
    })
  }, [theme, setTheme])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <Sun className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button variant="ghost" size="icon" onClick={instantToggleTheme} className="relative">
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-150 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-150 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
