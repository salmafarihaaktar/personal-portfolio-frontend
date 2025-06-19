// import { Card, CardContent } from "@/components/ui/card"
// import { GraduationCap, Award } from "lucide-react"
// import MobileOptimizedScrollReveal from "@/components/mobile-optimized-scroll-reveal"

// const educationData = [
//   {
//     id: 1,
//     degree: "Master of Science in Computer Science",
//     institution: "Tech University",
//     period: "2014 - 2016",
//     description: "Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors.",
//   },
//   {
//     id: 2,
//     degree: "Bachelor of Science in Software Engineering",
//     institution: "State University",
//     period: "2010 - 2014",
//     description: "Focused on software development methodologies and web application development.",
//   },
// ]

// const certifications = [
//   {
//     id: 1,
//     name: "Advanced React & Redux",
//     issuer: "Frontend Masters",
//     date: "2022",
//   },
//   {
//     id: 2,
//     name: "UI/UX Design Fundamentals",
//     issuer: "Interaction Design Foundation",
//     date: "2021",
//   },
//   {
//     id: 3,
//     name: "AWS Certified Developer",
//     issuer: "Amazon Web Services",
//     date: "2020",
//   },
// ]

// export default function Education() {
//   return (
//     <section id="education" className="py-20 px-4">
//       <div className="container max-w-5xl">
//         <MobileOptimizedScrollReveal>
//           <div className="flex flex-col items-center text-center mb-12">
//             <h2 className="text-3xl font-bold mb-2">Education & Learning</h2>
//             <div className="w-20 h-1 bg-primary mb-6"></div>
//             <p className="text-muted-foreground max-w-2xl">My academic background and continuous learning journey</p>
//           </div>
//         </MobileOptimizedScrollReveal>

//         <div className="grid md:grid-cols-2 gap-8">
//           <div>
//             <MobileOptimizedScrollReveal direction="left">
//               <div className="flex items-center gap-2 mb-6">
//                 <div className="bg-primary/20 p-2 rounded-md">
//                   <GraduationCap className="size-6 text-primary" />
//                 </div>
//                 <h3 className="text-2xl font-bold">Education</h3>
//               </div>
//             </MobileOptimizedScrollReveal>

//             <div className="space-y-6">
//               {educationData.map((item, index) => (
//                 <MobileOptimizedScrollReveal key={item.id} delay={200 + index * 150} direction="left">
//                   <Card className="border-none bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 group">
//                     <CardContent className="p-6">
//                       <div className="space-y-2">
//                         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
//                           <h4 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
//                             {item.degree}
//                           </h4>
//                           <span className="text-sm text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
//                             {item.period}
//                           </span>
//                         </div>
//                         <p className="text-primary font-medium">{item.institution}</p>
//                         <p className="text-muted-foreground leading-relaxed">{item.description}</p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </MobileOptimizedScrollReveal>
//               ))}
//             </div>
//           </div>

//           <div>
//             <MobileOptimizedScrollReveal direction="right">
//               <div className="flex items-center gap-2 mb-6">
//                 <div className="bg-primary/20 p-2 rounded-md">
//                   <Award className="size-6 text-primary" />
//                 </div>
//                 <h3 className="text-2xl font-bold">Certifications</h3>
//               </div>
//             </MobileOptimizedScrollReveal>

//             <div className="space-y-6">
//               {certifications.map((cert, index) => (
//                 <MobileOptimizedScrollReveal key={cert.id} delay={200 + index * 150} direction="right">
//                   <Card className="border-none bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 group">
//                     <CardContent className="p-6">
//                       <div className="space-y-2">
//                         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
//                           <h4 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
//                             {cert.name}
//                           </h4>
//                           <span className="text-sm text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
//                             {cert.date}
//                           </span>
//                         </div>
//                         <p className="text-primary font-medium">{cert.issuer}</p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </MobileOptimizedScrollReveal>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
