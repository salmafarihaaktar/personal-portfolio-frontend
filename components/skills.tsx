// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Code, Server, Palette, GitBranch } from "lucide-react"
// import MobileOptimizedScrollReveal from "@/components/mobile-optimized-scroll-reveal"

// const skillCategories = [
//   {
//     id: "frontend",
//     name: "Frontend",
//     icon: <Code className="size-5" />,
//     color: "from-blue-500 to-cyan-500",
//     skills: [
//       "HTML5",
//       "CSS3",
//       "JavaScript (ES6+)",
//       "TypeScript",
//       "React",
//       "Next.js",
//       "Vue.js",
//       "Tailwind CSS",
//       "SCSS/SASS",
//       "Redux",
//       "Framer Motion",
//       "Jest",
//     ],
//   },
//   {
//     id: "backend",
//     name: "Backend",
//     icon: <Server className="size-5" />,
//     color: "from-green-500 to-emerald-500",
//     skills: ["Node.js", "Express", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL", "Firebase", "AWS"],
//   },
//   {
//     id: "design",
//     name: "Design",
//     icon: <Palette className="size-5" />,
//     color: "from-pink-500 to-rose-500",
//     skills: [
//       "Figma",
//       "Adobe XD",
//       "Responsive Design",
//       "UI/UX Principles",
//       "Design Systems",
//       "Wireframing",
//       "Prototyping",
//       "Accessibility",
//     ],
//   },
//   {
//     id: "devops",
//     name: "DevOps",
//     icon: <GitBranch className="size-5" />,
//     color: "from-purple-500 to-violet-500",
//     skills: ["Git", "GitHub Actions", "CI/CD", "Docker", "Vercel", "Netlify", "Performance Optimization", "Testing"],
//   },
// ]

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 px-4 bg-muted/30">
//       <div className="container max-w-5xl">
//         <MobileOptimizedScrollReveal>
//           <div className="flex flex-col items-center text-center mb-12">
//             <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
//             <div className="w-20 h-1 bg-primary mb-6"></div>
//             <p className="text-muted-foreground max-w-2xl">Technologies and tools I work with</p>
//           </div>
//         </MobileOptimizedScrollReveal>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {skillCategories.map((category, index) => (
//             <MobileOptimizedScrollReveal key={category.id} delay={index * 150} direction="up">
//               <Card className="border-none bg-card/50 backdrop-blur-sm group hover:bg-card/70 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 relative overflow-hidden">
//                 {/* Animated background gradient */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
//                 />

//                 <CardContent className="p-6 relative z-10">
//                   <div className="flex items-center gap-2 mb-4">
//                     <div
//                       className={`bg-gradient-to-br ${category.color} p-2 rounded-md text-white group-hover:scale-110 transition-transform duration-300`}
//                     >
//                       {category.icon}
//                     </div>
//                     <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
//                       {category.name}
//                     </h3>
//                   </div>

//                   <div className="flex flex-wrap gap-2">
//                     {category.skills.map((skill, skillIndex) => (
//                       <Badge
//                         key={skill}
//                         variant="outline"
//                         className="bg-background/50 hover:bg-primary/20 hover:border-primary hover:scale-105 transition-all duration-300 cursor-default"
//                         style={{
//                           animationDelay: `${skillIndex * 50}ms`,
//                           transitionDelay: `${skillIndex * 25}ms`,
//                         }}
//                       >
//                         {skill}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </MobileOptimizedScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
