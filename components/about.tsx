import Link from "next/link"
import { Code, Figma, Terminal } from "lucide-react"
import MobileOptimizedScrollReveal from "@/components/mobile-optimized-scroll-reveal"
import MobileOptimizedCard from "@/components/mobile-optimized-card"
import MobileOptimizedButton from "@/components/mobile-optimized-button"

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-5xl">
        <MobileOptimizedScrollReveal>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-primary mb-6 transform origin-left animate-pulse"></div>
            <p className="text-muted-foreground max-w-2xl">A brief introduction about who I am and what I do</p>
          </div>
        </MobileOptimizedScrollReveal>

        <MobileOptimizedScrollReveal delay={200}>
          <MobileOptimizedCard className="group">
            <div className="grid md:grid-cols-[2fr_1fr] gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  Who am I?
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  I'm a passionate Frontend Developer with 5+ years of experience creating responsive, user-friendly web
                  applications. I specialize in React, Next.js, and modern CSS frameworks like Tailwind CSS.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  My journey in web development started when I built my first website at 16. Since then, I've worked
                  with startups and established companies to deliver high-quality digital products that users love. I'm
                  constantly learning new technologies and techniques to stay at the forefront of web development.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { label: "GitHub", href: "https://github.com" },
                    { label: "LinkedIn", href: "https://linkedin.com" },
                    { label: "Twitter", href: "https://twitter.com" },
                  ].map((social, index) => (
                    <MobileOptimizedButton
                      key={social.label}
                      variant="outline"
                      size="sm"
                      className="gap-2 hover:border-primary hover:bg-primary/10"
                      asChild
                    >
                      <Link href={social.href} target="_blank" rel="noopener noreferrer">
                        {social.label}
                      </Link>
                    </MobileOptimizedButton>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  Core Skills
                </h3>
                <div className="grid gap-4">
                  {[
                    {
                      icon: Code,
                      title: "Frontend Development",
                      desc: "React, Next.js, TypeScript",
                      color: "text-blue-400",
                    },
                    {
                      icon: Figma,
                      title: "UI/UX Design",
                      desc: "Figma, Adobe XD, Responsive Design",
                      color: "text-pink-400",
                    },
                    {
                      icon: Terminal,
                      title: "Backend Integration",
                      desc: "RESTful APIs, GraphQL, Node.js",
                      color: "text-green-400",
                    },
                  ].map((skill, index) => (
                    <MobileOptimizedScrollReveal key={skill.title} delay={400 + index * 100} direction="left">
                      <div className="flex items-start gap-3 group/skill hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="bg-primary/20 p-2 rounded-md group-hover/skill:bg-primary/30 transition-colors duration-300">
                          <skill.icon className="size-5 text-primary transition-colors duration-300" />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover/skill:text-primary transition-colors duration-300">
                            {skill.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{skill.desc}</p>
                        </div>
                      </div>
                    </MobileOptimizedScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </MobileOptimizedCard>
        </MobileOptimizedScrollReveal>
      </div>
    </section>
  )
}
