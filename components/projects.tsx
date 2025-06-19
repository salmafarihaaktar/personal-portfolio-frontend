// import Image from "next/image"
// import Link from "next/link"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
// import MobileOptimizedScrollReveal from "@/components/mobile-optimized-scroll-reveal"

// const projects = [
//   {
//     id: 1,
//     title: "E-commerce Dashboard",
//     description:
//       "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing.",
//     image: "/placeholder.svg?height=300&width=500",
//     tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
//     liveUrl: "https://example.com",
//     codeUrl: "https://github.com",
//   },
//   {
//     id: 2,
//     title: "Social Media App",
//     description: "A full-featured social media application with real-time messaging, post sharing, and user profiles.",
//     image: "/placeholder.svg?height=300&width=500",
//     tags: ["Next.js", "Firebase", "Tailwind CSS", "SWR"],
//     liveUrl: "https://example.com",
//     codeUrl: "https://github.com",
//   },
//   {
//     id: 3,
//     title: "Task Management Tool",
//     description:
//       "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
//     image: "/placeholder.svg?height=300&width=500",
//     tags: ["React", "Redux", "Node.js", "MongoDB"],
//     liveUrl: "https://example.com",
//     codeUrl: "https://github.com",
//   },
//   {
//     id: 4,
//     title: "Weather Forecast App",
//     description:
//       "A weather application that provides real-time forecasts, historical data, and location-based weather alerts.",
//     image: "/placeholder.svg?height=300&width=500",
//     tags: ["Vue.js", "OpenWeather API", "SCSS", "Axios"],
//     liveUrl: "https://example.com",
//     codeUrl: "https://github.com",
//   },
// ]

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 px-4">
//       <div className="container max-w-5xl">
//         <MobileOptimizedScrollReveal>
//           <div className="flex flex-col items-center text-center mb-12">
//             <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
//             <div className="w-20 h-1 bg-primary mb-6"></div>
//             <p className="text-muted-foreground max-w-2xl">A selection of my recent work and personal projects</p>
//           </div>
//         </MobileOptimizedScrollReveal>

//         <div className="grid sm:grid-cols-2 gap-6">
//           {projects.map((project, index) => (
//             <MobileOptimizedScrollReveal
//               key={project.id}
//               delay={index * 150}
//               direction={index % 2 === 0 ? "left" : "right"}
//             >
//               <Card className="border-none bg-card/50 backdrop-blur-sm overflow-hidden group hover:bg-card/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] relative">
//                 {/* Animated border */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] rounded-lg">
//                   <div className="w-full h-full bg-card rounded-lg" />
//                 </div>

//                 <div className="relative z-10">
//                   <div className="relative h-48 overflow-hidden">
//                     <Image
//                       src={project.image || "/placeholder.svg"}
//                       alt={project.title}
//                       fill
//                       className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
//                     />

//                     {/* Overlay with project links */}
//                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
//                       <Button
//                         size="sm"
//                         variant="secondary"
//                         className="gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100"
//                         asChild
//                       >
//                         <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                           <ExternalLink className="size-4" />
//                           Live
//                         </Link>
//                       </Button>
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200"
//                         asChild
//                       >
//                         <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
//                           <Github className="size-4" />
//                           Code
//                         </Link>
//                       </Button>
//                     </div>
//                   </div>

//                   <CardContent className="p-6">
//                     <div className="flex items-start justify-between mb-2">
//                       <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
//                         {project.title}
//                       </h3>
//                       <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
//                     </div>

//                     <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tags.map((tag, tagIndex) => (
//                         <Badge
//                           key={tag}
//                           variant="secondary"
//                           className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
//                           style={{ animationDelay: `${tagIndex * 50}ms` }}
//                         >
//                           {tag}
//                         </Badge>
//                       ))}
//                     </div>

//                     <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
//                       <Button size="sm" variant="default" className="gap-2 flex-1" asChild>
//                         <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                           <ExternalLink className="size-4" />
//                           Live Demo
//                         </Link>
//                       </Button>
//                       <Button size="sm" variant="outline" className="gap-2 flex-1" asChild>
//                         <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
//                           <Github className="size-4" />
//                           Code
//                         </Link>
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </div>
//               </Card>
//             </MobileOptimizedScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
