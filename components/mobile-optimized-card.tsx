"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import TouchFeedback from "@/components/mobile-touch-feedback"

interface MobileOptimizedCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  clickable?: boolean
  onClick?: () => void
}

export default function MobileOptimizedCard({
  children,
  className,
  hover = true,
  clickable = false,
  onClick,
}: MobileOptimizedCardProps) {
  const { isMobile, prefersReducedMotion } = useMobile()

  const cardContent = (
    <Card
      className={cn(
        "border-none bg-card/50 backdrop-blur-sm transition-all",
        hover &&
          !prefersReducedMotion &&
          (isMobile
            ? "duration-200 active:bg-card/70"
            : "duration-500 hover:bg-card/70 hover:shadow-xl hover:shadow-primary/10 hover:scale-105"),
        clickable && "cursor-pointer",
        className,
      )}
      onClick={onClick}
    >
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  )

  if (clickable && isMobile) {
    return <TouchFeedback intensity="light">{cardContent}</TouchFeedback>
  }

  return cardContent
}
