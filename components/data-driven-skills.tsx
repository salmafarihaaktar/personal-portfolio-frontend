import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Palette, GitBranch } from "lucide-react"
import MobileOptimizedScrollReveal from "@/components/mobile-optimized-scroll-reveal"
import { PORTFOLIO_DATA } from "@/lib/data"

export default function DataDrivenSkills() {
  const { skills } = PORTFOLIO_DATA

  const skillIcons = {
    frontend: <Code className="size-5" />,
    backend: <Server className="size-5" />,
    design: <Palette className="size-5" />,
    devops: <GitBranch className="size-5" />,
  }

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-5xl">
        <MobileOptimizedScrollReveal>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-muted-foreground max-w-2xl">Technologies and tools I work with</p>
          </div>
        </MobileOptimizedScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([key, category], index) => (
            <MobileOptimizedScrollReveal key={key} delay={index * 150} direction="up">
              <Card className="border-none bg-card/50 backdrop-blur-sm group hover:bg-card/70 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 relative overflow-hidden">
                {/* Animated background gradient */}
                {/* <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                /> */}

                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className={`w-9 h-9 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center text-purple-400`}
                    >
                      {skillIcons[key as keyof typeof skillIcons]}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {category.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="bg-background/50 hover:bg-primary/20 hover:border-primary hover:scale-105 transition-all duration-300 cursor-default"
                        style={{
                          animationDelay: `${skillIndex * 50}ms`,
                          transitionDelay: `${skillIndex * 25}ms`,
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MobileOptimizedScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
