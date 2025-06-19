"use client"

import type React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import TouchFeedback from "@/components/mobile-touch-feedback"

interface MobileOptimizedButtonProps extends ButtonProps {
  children: React.ReactNode
  haptic?: boolean
}

export default function MobileOptimizedButton({
  children,
  className,
  haptic = true,
  ...props
}: MobileOptimizedButtonProps) {
  const { isMobile, isTouch, prefersReducedMotion } = useMobile()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Haptic feedback for mobile devices
    if (haptic && isTouch && "vibrate" in navigator) {
      navigator.vibrate(10) // Very short vibration
    }

    props.onClick?.(e)
  }

  const buttonElement = (
    <Button
      {...props}
      onClick={handleClick}
      className={cn(
        "transition-all touch-manipulation",
        isMobile ? "duration-150 active:scale-95" : "duration-300 hover:scale-105",
        !prefersReducedMotion && isMobile && "active:brightness-90",
        className,
      )}
    >
      {children}
    </Button>
  )

  if (isMobile && isTouch) {
    return (
      <TouchFeedback intensity="medium" disabled={props.disabled}>
        {buttonElement}
      </TouchFeedback>
    )
  }

  return buttonElement
}
