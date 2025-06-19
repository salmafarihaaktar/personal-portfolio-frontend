import Link from "next/link"
import { Code, Figma, Terminal } from "lucide-react"
import MobileOptimizedScrollReveal from "@/components/mobile-optimized-scroll-reveal"
import MobileOptimizedCard from "@/components/mobile-optimized-card"
import MobileOptimizedButton from "@/components/mobile-optimized-button"
import { PORTFOLIO_DATA } from "@/lib/data"
import { Badge } from "./ui/badge"

export default function DataDrivenAbout() {
  const { personal, contact, industries, highlights } = PORTFOLIO_DATA

  const socialLinks = Object.values(contact.social)
    .filter((social) => social.navbar)
    .map((social) => ({
      label: social.name,
      href: social.url,
      Icon: social.icon,
    }))



  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-5xl">
        <MobileOptimizedScrollReveal>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-primary mb-6 transform origin-left animate-pulse"></div>
            <p className="text-muted-foreground max-w-2xl ">A brief introduction about who I am and what I do</p>
          </div>
        </MobileOptimizedScrollReveal>

        <MobileOptimizedScrollReveal delay={200}>
          <MobileOptimizedCard className="group">
            <div className="grid md:grid-cols-1 gap-8">
              <div>
                <p className="text-muted-foreground mb-4 leading-relaxed text-center">{personal.summary}</p>

                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-4">Industries I've worked in</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {industries.map(industry => (
                      <Badge
                        key={industry}
                        variant="secondary"
                        className="text-sm px-3 py-1 cursor-pointer"
                      >
                        {industry}
                      </Badge>
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </MobileOptimizedCard>
        </MobileOptimizedScrollReveal>

        <MobileOptimizedScrollReveal delay={400}>
          <div className="mt-10 p-8 hidden sm:block">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-muted/10 border border-muted/30 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_12px_24px_-4px_rgba(139,92,200,0.4)]"

                >
                  <div className="bg-primary/20 text-primary p-2 rounded-full shadow-md mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </MobileOptimizedScrollReveal>

      </div>
    </section>
  )
}
