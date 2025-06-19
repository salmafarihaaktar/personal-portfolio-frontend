import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowUpRight, Users, Calendar } from "lucide-react"
import MobileOptimizedScrollReveal from "@/components/mobile-optimized-scroll-reveal"
import { PORTFOLIO_DATA } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function DataDrivenProjects() {
  const { projects } = PORTFOLIO_DATA

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-5xl">
        <MobileOptimizedScrollReveal>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-muted-foreground max-w-2xl">A selection of my recent work and personal projects</p>
          </div>
        </MobileOptimizedScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MobileOptimizedScrollReveal
              key={project.id}
              delay={index * 150}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <Card className="border-none bg-card/50 backdrop-blur-sm overflow-hidden group hover:bg-card/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] relative">
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] rounded-lg">
                  <div className="w-full h-full bg-card rounded-lg" />
                </div>

                <div className="relative z-10">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {project.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {project.team}
                      </div>
                    </div>

                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">{project.description}</p>

                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Array.isArray((project as any).keyFeatures) &&
                        (project as any).keyFeatures.map((tag: string, tagIndex: number) => (
                          <Badge variant="outline" className="text-xs" key={tagIndex}>
                            {tag}
                          </Badge>
                        ))}
                    </div>

                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tag, tagIndex) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className=" hover:text-primary-foreground transition-all duration-300"
                          style={{ animationDelay: `${tagIndex * 50}ms` }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 group-hover:opacity-100 transition-opacity duration-300 delay-200">

                      <Button
                        size="sm" variant="outline" 
                        className="group gap-2 flex-1 transition-all duration-300 group-hover:bg-primary hover:text-white hover:border-transparent" 
                        asChild
                      >
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative inline-flex items-center gap-1 px-4 py-2 overflow-hidden rounded-md transition-all duration-300"
                        >
                          <ExternalLink className="size-4 transition-transform group-hover:rotate-45" />
                          <span className="relative z-10">Live Demo</span>
                          <div className="absolute -inset-1 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 z-0" />
                        </Link>
                      </Button>

                      <Button size="sm" variant="outline" className="gap-2 flex-1" asChild>
                        <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="size-4" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </MobileOptimizedScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
