import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, ExternalLink, MapPin, Calendar } from "lucide-react"
import MobileOptimizedScrollReveal from "@/components/mobile-optimized-scroll-reveal"
import { PORTFOLIO_DATA } from "@/lib/data"
import { Badge } from "./ui/badge"

export default function DataDrivenEducation() {
  const { education, certifications } = PORTFOLIO_DATA

  return (
    <section id="education" className="py-20 px-4">
      <div className="container max-w-5xl">
        <MobileOptimizedScrollReveal>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Education & Learning</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-muted-foreground max-w-2xl">My academic background and continuous learning journey</p>
          </div>
        </MobileOptimizedScrollReveal>

        <div className="grid md:grid-cols-1 gap-8">
          <div>
            <MobileOptimizedScrollReveal direction="left">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary/20 p-2 rounded-md">
                  <GraduationCap className="size-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
            </MobileOptimizedScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {education.map((item, index) => (
                <MobileOptimizedScrollReveal key={item.id} delay={200 + index * 150} direction="left">
                  <Card className="border-none bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 group">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                            {item.degree}
                          </h3>

                        </div>
                        <div className="flex items-center gap-2 text-base text-muted-foreground">
                          <GraduationCap className="h-4 w-4" />
                          <span >{item.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span >{item.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span >{item.location}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {/* <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            GPA: {item.gpa}
                          </Badge> */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </MobileOptimizedScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <MobileOptimizedScrollReveal direction="right">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary/20 p-2 rounded-md">
                  <Award className="size-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
            </MobileOptimizedScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <MobileOptimizedScrollReveal key={cert.id} delay={200 + index * 150} direction="right">
                  <Card className="border-none bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 group">
                    <CardContent className="p-6">

                      <div className="space-y-2">

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">

                          <h4 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                            {cert.name}
                          </h4>
                          <span className="text-sm text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
                            {cert.date}
                          </span>

                        </div>
                        <p className="text-muted-foreground">{cert.issuer}</p>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-primary hover:underline gap-1 group mt-2"
                        >
                          View Certificate
                          <ExternalLink className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </a>

                      </div>
                    </CardContent>
                  </Card>
                </MobileOptimizedScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
