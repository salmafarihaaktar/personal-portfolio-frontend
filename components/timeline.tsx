// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { cn } from "@/lib/utils"
// import MobileOptimizedScrollReveal from "@/components/mobile-optimized-scroll-reveal"

// const experiences = [
//   {
//     id: 1,
//     role: "Senior Frontend Developer",
//     company: "Tech Innovations Inc.",
//     period: "2021 - Present",
//     description:
//       "Lead frontend development for enterprise applications, mentoring junior developers and implementing best practices across projects.",
//     technologies: ["React", "Next.js", "TypeScript", "GraphQL", "Tailwind CSS"],
//   },
//   {
//     id: 2,
//     role: "Mid-level Frontend Developer",
//     company: "Digital Solutions Ltd.",
//     period: "2018 - 2021",
//     description:
//       "Developed responsive web applications and collaborated with UX designers to implement pixel-perfect interfaces.",
//     technologies: ["React", "JavaScript", "SCSS", "RESTful APIs", "Jest"],
//   },
//   {
//     id: 3,
//     role: "Junior Frontend Developer",
//     company: "WebCraft Studio",
//     period: "2016 - 2018",
//     description:
//       "Built and maintained client websites, implemented responsive designs, and worked with content management systems.",
//     technologies: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress"],
//   },
// ]

// export default function Timeline() {
//   return (
//     <section id="experience" className="py-20 px-4 bg-muted/30">
//       <div className="container max-w-5xl">
//         <MobileOptimizedScrollReveal>
//           <div className="flex flex-col items-center text-center mb-12">
//             <h2 className="text-3xl font-bold mb-2">Professional Experience</h2>
//             <div className="w-20 h-1 bg-primary mb-6"></div>
//             <p className="text-muted-foreground max-w-2xl">My career path and professional growth over the years</p>
//           </div>
//         </MobileOptimizedScrollReveal>

//         <div className="relative">
//           {/* Animated timeline line */}
//           <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 md:translate-x-0 overflow-hidden">
//             <div className="w-full h-full bg-gradient-to-b from-primary via-primary/50 to-transparent animate-pulse" />
//           </div>

//           <div className="space-y-12">
//             {experiences.map((exp, index) => (
//               <MobileOptimizedScrollReveal
//                 key={exp.id}
//                 delay={index * 200}
//                 direction={index % 2 === 0 ? "left" : "right"}
//               >
//                 <div className="relative group">
//                   {/* Enhanced timeline dot */}
//                   <div
//                     className={cn(
//                       "absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full border-4 -translate-x-1/2 transition-all duration-500 group-hover:scale-125",
//                       index === 0
//                         ? "border-primary bg-background shadow-lg shadow-primary/50 animate-pulse"
//                         : "border-muted-foreground/50 bg-background group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30",
//                     )}
//                   />

//                   <Card
//                     className={cn(
//                       "border-none bg-card/50 backdrop-blur-sm ml-6 md:ml-0 md:w-[calc(50%-20px)] transition-all duration-500 hover:bg-card/70 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 group",
//                       index % 2 === 0 ? "md:mr-auto" : "md:ml-auto",
//                     )}
//                   >
//                     <CardContent className="p-6">
//                       <div className="space-y-2">
//                         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
//                           <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
//                             {exp.role}
//                           </h3>
//                           <span className="text-sm text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
//                             {exp.period}
//                           </span>
//                         </div>
//                         <p className="text-primary font-medium">{exp.company}</p>
//                         <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
//                         <div className="flex flex-wrap gap-2 pt-2">
//                           {exp.technologies.map((tech, techIndex) => (
//                             <Badge
//                               key={tech}
//                               variant="secondary"
//                               className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
//                               style={{ animationDelay: `${techIndex * 50}ms` }}
//                             >
//                               {tech}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </MobileOptimizedScrollReveal>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
