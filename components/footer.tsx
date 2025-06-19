'use client'

import Link from "next/link"
import { usePortfolioData } from "@/hooks/use-portfolio-data"
import { Heart } from "lucide-react"

export default function Footer() {
  const { data, getSocialLinks } = usePortfolioData()
  const socialLinks = getSocialLinks()

  return (
    <footer className="w-full border-t py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
        <p className="text-sm text-muted-foreground whitespace-nowrap">
          &copy; {new Date().getFullYear()} {data.personal.name}. Made with <Heart className="h-4 w-4 text-red-500 fill-current inline" /> and lots of coffee.
        </p>


        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <social.icon className="size-5" />
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
