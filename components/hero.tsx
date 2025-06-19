// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Download, ArrowRight, Sparkles } from "lucide-react"
// import { cn } from "@/lib/utils"

// export default function Hero() {
//   const [isLoaded, setIsLoaded] = useState(false)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     setIsLoaded(true)

//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }

//     window.addEventListener("mousemove", handleMouseMove)
//     return () => window.removeEventListener("mousemove", handleMouseMove)
//   }, [])

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />

//         {/* Floating particles */}
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-primary/20 rounded-full animate-bounce"
//             style={{
//               left: `${20 + i * 15}%`,
//               top: `${30 + (i % 2) * 40}%`,
//               animationDelay: `${i * 0.5}s`,
//               animationDuration: `${3 + i * 0.5}s`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="container max-w-5xl flex flex-col items-center text-center relative z-10">
//         <div className="relative mb-8 group">
//           {/* Enhanced glowing ring with mouse tracking */}
//           <div
//             className={cn(
//               "absolute inset-0 rounded-full transition-all duration-1000",
//               isLoaded ? "bg-primary/20 blur-xl opacity-70" : "opacity-0",
//             )}
//             style={{
//               transform: `scale(1.2) translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`,
//               animation: isLoaded ? "pulse 3s ease-in-out infinite" : "none",
//             }}
//           />

//           {/* Rotating border */}
//           <div
//             className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-border animate-spin-slow opacity-50"
//             style={{ animationDuration: "8s" }}
//           />

//           <div
//             className={cn(
//               "relative size-40 md:size-48 rounded-full border-2 border-primary/50 p-1 overflow-hidden transition-all duration-700 group-hover:scale-105",
//               isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90",
//             )}
//           >
//             <Image
//               src="/placeholder.svg?height=192&width=192"
//               alt="Salma Fariha Akhtar"
//               width={192}
//               height={192}
//               className="rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
//               priority
//             />

//             {/* Sparkle effect on hover */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <Sparkles className="absolute top-2 right-2 size-4 text-primary animate-ping" />
//               <Sparkles className="absolute bottom-4 left-4 size-3 text-primary animate-ping delay-300" />
//               <Sparkles className="absolute top-1/2 left-2 size-2 text-primary animate-ping delay-700" />
//             </div>
//           </div>
//         </div>

//         {/* Animated text with typewriter effect */}
//         <div className="relative">
//           <h1
//             className={cn(
//               "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 transition-all duration-700 delay-300",
//               isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
//             )}
//           >
//             <span className="inline-block">
//               <span className="text-primary relative">
//                 John
//                 <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
//               </span>
//             </span>{" "}
//             <span className="inline-block animate-bounce delay-500">Doe</span>
//           </h1>

//           {/* Animated underline */}
//           <div
//             className={cn(
//               "h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto transition-all duration-1000 delay-700",
//               isLoaded ? "w-32 opacity-100" : "w-0 opacity-0",
//             )}
//           />
//         </div>

//         <h2
//           className={cn(
//             "text-xl md:text-2xl font-medium text-muted-foreground mb-6 transition-all duration-700 delay-500 relative",
//             isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
//           )}
//         >
//           <span className="relative">
//             Frontend Developer
//             <span className="absolute -top-2 -right-2 text-primary animate-pulse">✨</span>
//           </span>
//         </h2>

//         <p
//           className={cn(
//             "max-w-2xl text-muted-foreground mb-8 transition-all duration-700 delay-700 leading-relaxed",
//             isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
//           )}
//         >
//           I build exceptional and accessible digital experiences for the web. Focused on creating clean, user-friendly
//           interfaces with modern technologies.
//         </p>

//         <div
//           className={cn(
//             "flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-900",
//             isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
//           )}
//         >
//           <Button
//             size="lg"
//             className="gap-2 group relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
//           >
//             <Download className="size-4 transition-transform group-hover:animate-bounce" />
//             <span className="relative z-10">Download Resume</span>
//             <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//           </Button>

//           <Button
//             variant="outline"
//             size="lg"
//             className="gap-2 group border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
//             asChild
//           >
//             <Link href="#projects">
//               <span>View Portfolio</span>
//               <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </Button>
//         </div>
//       </div>

//       {/* Enhanced scroll indicator */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
//         </div>
//         <span className="text-xs text-muted-foreground">Scroll</span>
//       </div>
//     </section>
//   )
// }
