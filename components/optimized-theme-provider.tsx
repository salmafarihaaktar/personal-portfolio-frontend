"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { ThemePreloader } from "./theme-preloader"
import { useThemePreloader } from "@/hooks/use-theme-preloader"

export function OptimizedThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { isPreloaded } = useThemePreloader()

  return (
    <NextThemesProvider {...props}>
      <ThemePreloader />
      {children}
    </NextThemesProvider>
  )
}
