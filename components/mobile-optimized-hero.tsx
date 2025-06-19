"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function MobileOptimizedHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 })
  const { isMobile, isTouch, prefersReducedMotion } = useMobile()

  useEffect(() => {
    setIsLoaded(true)

    // Only track touch/mouse movement on non-mobile or when specifically requested
    if (!isMobile && !prefersReducedMotion) {
      const handleMouseMove = (e: MouseEvent) => {
        setTouchPosition({ x: e.clientX, y: e.clientY })
      }

      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMobile, prefersReducedMotion])

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isTouch && !prefersReducedMotion) {
      const touch = e.touches[0]
      setTouchPosition({ x: touch.clientX, y: touch.clientY })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
      onTouchMove={handleTouchMove}
    >
      {/* Simplified background for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {!isMobile && !prefersReducedMotion && (
          <>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />
          </>
        )}

        {/* Reduced particles on mobile */}
        {(!isMobile || !prefersReducedMotion) &&
          [...Array(isMobile ? 3 : 6)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute w-2 h-2 bg-primary/20 rounded-full",
                isMobile ? "animate-pulse" : "animate-bounce",
              )}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: isMobile ? "2s" : `${3 + i * 0.5}s`,
              }}
            />
          ))}
      </div>

      <div className="container max-w-5xl flex flex-col items-center text-center relative z-10">
        <div className="relative mb-8 group">
          {/* Simplified glow effect for mobile */}
          <div
            className={cn(
              "absolute inset-0 rounded-full transition-all",
              isLoaded && !prefersReducedMotion ? "bg-primary/20 blur-xl opacity-70" : "opacity-0",
              isMobile ? "duration-500" : "duration-1000",
            )}
            style={{
              transform:
                !isMobile && !prefersReducedMotion
                  ? `scale(1.2) translate(${(touchPosition.x - (typeof window !== "undefined" ? window.innerWidth : 0) / 2) * 0.01}px, ${(touchPosition.y - (typeof window !== "undefined" ? window.innerHeight : 0) / 2) * 0.01}px)`
                  : "scale(1.2)",
              animation:
                isLoaded && !prefersReducedMotion
                  ? isMobile
                    ? "pulse 2s ease-in-out infinite"
                    : "pulse 3s ease-in-out infinite"
                  : "none",
            }}
          />

          {/* Simplified rotating border for mobile */}
          {!isMobile && !prefersReducedMotion && (
            <div
              className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-border animate-spin-slow opacity-50"
              style={{ animationDuration: "8s" }}
            />
          )}

          <div
            className={cn(
              "relative rounded-full border-2 border-primary/50 p-1 overflow-hidden transition-all group-hover:scale-105",
              isMobile ? "size-32 duration-300" : "size-40 md:size-48 duration-700",
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90",
            )}
          >
            <Image
              src="/placeholder.svg?height=192&width=192"
              alt="Salma Fariha Akhtar"
              width={isMobile ? 128 : 192}
              height={isMobile ? 128 : 192}
              className={cn(
                "rounded-full object-cover transition-transform",
                isMobile ? "duration-300" : "duration-500 group-hover:scale-110",
              )}
              priority
            />

            {/* Simplified sparkle effect */}
            {!isMobile && !prefersReducedMotion && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="absolute top-2 right-2 size-4 text-primary animate-ping" />
                <Sparkles className="absolute bottom-4 left-4 size-3 text-primary animate-ping delay-300" />
                <Sparkles className="absolute top-1/2 left-2 size-2 text-primary animate-ping delay-700" />
              </div>
            )}
          </div>
        </div>

        {/* Optimized text animations */}
        <div className="relative">
          <h1
            className={cn(
              "font-bold tracking-tight mb-4 transition-all",
              isMobile ? "text-3xl duration-300 delay-100" : "text-4xl md:text-5xl lg:text-6xl duration-700 delay-300",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            <span className="inline-block">
              <span className="text-primary relative">
                John
                {!isMobile && !prefersReducedMotion && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
                )}
              </span>
            </span>{" "}
            <span className={cn("inline-block", !isMobile && !prefersReducedMotion && "animate-bounce delay-500")}>
              Doe
            </span>
          </h1>

          {/* Simplified underline animation */}
          <div
            className={cn(
              "h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto transition-all",
              isMobile ? "duration-500 delay-200" : "duration-1000 delay-700",
              isLoaded ? "w-20 opacity-100" : "w-0 opacity-0",
            )}
          />
        </div>

        <h2
          className={cn(
            "font-medium text-muted-foreground mb-6 transition-all relative",
            isMobile ? "text-lg duration-300 delay-200" : "text-xl md:text-2xl duration-700 delay-500",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          <span className="relative">
            Frontend Developer
            {!isMobile && !prefersReducedMotion && (
              <span className="absolute -top-2 -right-2 text-primary animate-pulse">✨</span>
            )}
          </span>
        </h2>

        <p
          className={cn(
            "max-w-2xl text-muted-foreground mb-8 transition-all leading-relaxed",
            isMobile ? "text-sm duration-300 delay-300" : "duration-700 delay-700",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          I build exceptional and accessible digital experiences for the web. Focused on creating clean, user-friendly
          interfaces with modern technologies.
        </p>

        <div
          className={cn(
            "flex flex-col sm:flex-row gap-4 transition-all",
            isMobile ? "duration-300 delay-400" : "duration-700 delay-900",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          <Button
            size={isMobile ? "default" : "lg"}
            className={cn(
              "gap-2 group relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all transform",
              isMobile
                ? "duration-200 active:scale-95 touch-manipulation"
                : "duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25",
            )}
          >
            <Download className={cn("size-4 transition-transform", !isMobile && "group-hover:animate-bounce")} />
            <span className="relative z-10">Download Resume</span>
            {!isMobile && !prefersReducedMotion && (
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            )}
          </Button>

          <Button
            variant="outline"
            size={isMobile ? "default" : "lg"}
            className={cn(
              "gap-2 group border-primary/50 hover:border-primary hover:bg-primary/10 transition-all transform",
              isMobile ? "duration-200 active:scale-95 touch-manipulation" : "duration-300 hover:scale-105",
            )}
            asChild
          >
            <Link href="#projects">
              <span>View Portfolio</span>
              <ArrowRight className={cn("size-4 transition-transform", !isMobile && "group-hover:translate-x-1")} />
            </Link>
          </Button>
        </div>
      </div>

      {/* Simplified scroll indicator */}
      {!isMobile && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-xs text-muted-foreground">Scroll</span>
        </div>
      )}
    </section>
  )
}
