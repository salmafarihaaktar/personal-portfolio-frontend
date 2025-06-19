"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface TouchFeedbackProps {
  children: React.ReactNode
  className?: string
  intensity?: "light" | "medium" | "strong"
  disabled?: boolean
}

export default function TouchFeedback({
  children,
  className,
  intensity = "medium",
  disabled = false,
}: TouchFeedbackProps) {
  const [isPressed, setIsPressed] = useState(false)
  const { isTouch, prefersReducedMotion } = useMobile()

  if (!isTouch || prefersReducedMotion || disabled) {
    return <div className={className}>{children}</div>
  }

  const getIntensityClasses = () => {
    switch (intensity) {
      case "light":
        return "active:scale-98 active:brightness-95"
      case "medium":
        return "active:scale-95 active:brightness-90"
      case "strong":
        return "active:scale-90 active:brightness-85"
      default:
        return "active:scale-95 active:brightness-90"
    }
  }

  return (
    <div
      className={cn(
        "transition-all duration-150 ease-out touch-manipulation select-none",
        getIntensityClasses(),
        isPressed && "scale-95 brightness-90",
        className,
      )}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onTouchCancel={() => setIsPressed(false)}
    >
      {children}
    </div>
  )
}
