"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InstantThemeToggle } from "@/components/instant-theme-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePortfolioData } from "@/hooks/use-portfolio-data"

export default function Header() {
  const { data } = usePortfolioData()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Find the current active section based on scroll position
      const sections = data.navigation.map((item) => item.name.toLowerCase())

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [data.navigation])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full theme-transition-optimized",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="#home" className="text-xl font-bold theme-critical">
          <span className="text-primary">{data.personal.name.split(" ")[0]}</span>
          {data.personal.name.split(" ")[1]}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {data.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium theme-critical hover:text-primary",
                activeSection === item.name.toLowerCase() ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <InstantThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <InstantThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b theme-transition-optimized">
          <div className="container py-4 flex flex-col gap-4">
            <nav className="flex flex-col gap-2">
              {data.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md theme-critical",
                    activeSection === item.name.toLowerCase() ? "bg-primary/10 text-primary" : "hover:bg-muted",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
