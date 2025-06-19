"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface MobileOptimizedScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  duration?: number
  threshold?: number
}

export default function MobileOptimizedScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 700,
  threshold = 0.1,
}: MobileOptimizedScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { isMobile, prefersReducedMotion } = useMobile()

  useEffect(() => {
    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reduce delay on mobile for faster perceived performance
          const mobileDelay = isMobile ? Math.min(delay, 100) : delay
          setTimeout(() => setIsVisible(true), mobileDelay)
        }
      },
      {
        threshold: isMobile ? 0.05 : threshold, // Lower threshold for mobile
        rootMargin: isMobile ? "0px 0px -20px 0px" : "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold, isMobile, prefersReducedMotion])

  const getTransformClasses = () => {
    // Simplified animations for mobile and reduced motion
    if (prefersReducedMotion) {
      return "opacity-100 translate-x-0 translate-y-0"
    }

    const mobileDuration = isMobile ? Math.min(duration, 400) : duration
    const base = `transition-all ease-out`
    const durationClass = `duration-${mobileDuration}`

    if (!isVisible) {
      // Reduced transform distances on mobile for better performance
      const mobileTransform = isMobile ? "4" : "8"

      switch (direction) {
        case "up":
          return `${base} ${durationClass} opacity-0 translate-y-${mobileTransform}`
        case "down":
          return `${base} ${durationClass} opacity-0 -translate-y-${mobileTransform}`
        case "left":
          return `${base} ${durationClass} opacity-0 translate-x-${mobileTransform}`
        case "right":
          return `${base} ${durationClass} opacity-0 -translate-x-${mobileTransform}`
        case "fade":
          return `${base} ${durationClass} opacity-0`
        default:
          return `${base} ${durationClass} opacity-0 translate-y-${mobileTransform}`
      }
    }

    return `${base} ${durationClass} opacity-100 translate-x-0 translate-y-0`
  }

  return (
    <div
      ref={ref}
      className={cn(getTransformClasses(), className)}
      style={{
        transitionDuration: prefersReducedMotion ? "0ms" : `${isMobile ? Math.min(duration, 400) : duration}ms`,
        willChange: isVisible ? "auto" : "transform, opacity",
      }}
    >
      {children}
    </div>
  )
}
