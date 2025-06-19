// "use client"

// import type React from "react"

// import { useState } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent } from "@/components/ui/card"
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from "lucide-react"
// import MobileOptimizedScrollReveal from "@/components/mobile-optimized-scroll-reveal"

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)
//   const [focusedField, setFocusedField] = useState<string | null>(null)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500))
//       setFormStatus("success")
//       setFormData({ name: "", email: "", message: "" })
//     } catch (error) {
//       setFormStatus("error")
//     } finally {
//       setIsSubmitting(false)
//       // Reset form status after 5 seconds
//       setTimeout(() => setFormStatus(null), 5000)
//     }
//   }

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "john.doe@example.com",
//       href: "mailto:john.doe@example.com",
//       color: "text-blue-400",
//     },
//     { icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890", color: "text-green-400" },
//     { icon: MapPin, label: "Location", value: "San Francisco, California", href: "#", color: "text-red-400" },
//   ]

//   const socialLinks = [
//     { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-gray-400" },
//     { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
//     { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-400" },
//   ]

//   return (
//     <section id="contact" className="py-20 px-4 bg-muted/30">
//       <div className="container max-w-5xl">
//         <MobileOptimizedScrollReveal>
//           <div className="flex flex-col items-center text-center mb-12">
//             <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
//             <div className="w-20 h-1 bg-primary mb-6"></div>
//             <p className="text-muted-foreground max-w-2xl">
//               Have a project in mind or want to collaborate? Feel free to reach out!
//             </p>
//           </div>
//         </MobileOptimizedScrollReveal>

//         <div className="grid md:grid-cols-[1fr_1.5fr] gap-8">
//           <MobileOptimizedScrollReveal direction="left">
//             <Card className="border-none bg-card/50 backdrop-blur-sm h-fit hover:bg-card/70 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
//                   Contact Information
//                 </h3>

//                 <div className="space-y-4">
//                   {contactInfo.map((item, index) => (
//                     <MobileOptimizedScrollReveal key={item.label} delay={200 + index * 100} direction="left">
//                       <div className="flex items-start gap-3 group/item hover:transform hover:translate-x-2 transition-all duration-300">
//                         <div
//                           className={`bg-primary/20 p-2 rounded-md group-hover/item:bg-primary/30 transition-all duration-300`}
//                         >
//                           <item.icon
//                             className={`size-5 text-primary group-hover/item:${item.color} transition-colors duration-300`}
//                           />
//                         </div>
//                         <div>
//                           <h4 className="font-medium group-hover/item:text-primary transition-colors duration-300">
//                             {item.label}
//                           </h4>
//                           {item.href !== "#" ? (
//                             <Link
//                               href={item.href}
//                               className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
//                             >
//                               {item.value}
//                             </Link>
//                           ) : (
//                             <p className="text-sm text-muted-foreground">{item.value}</p>
//                           )}
//                         </div>
//                       </div>
//                     </MobileOptimizedScrollReveal>
//                   ))}
//                 </div>

//                 <div className="mt-8">
//                   <h4 className="font-medium mb-3">Connect with me</h4>
//                   <div className="flex gap-3">
//                     {socialLinks.map((social, index) => (
//                       <Button
//                         key={social.label}
//                         variant="outline"
//                         size="icon"
//                         className={`rounded-full hover:scale-110 transition-all duration-300 ${social.color} hover:shadow-lg`}
//                         style={{ animationDelay: `${index * 100}ms` }}
//                         asChild
//                       >
//                         <Link href={social.href} target="_blank" rel="noopener noreferrer">
//                           <social.icon className="size-4" />
//                           <span className="sr-only">{social.label}</span>
//                         </Link>
//                       </Button>
//                     ))}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </MobileOptimizedScrollReveal>

//           <MobileOptimizedScrollReveal direction="right" delay={200}>
//             <Card className="border-none bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
//                   Send Me a Message
//                 </h3>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="space-y-2">
//                     <label htmlFor="name" className="text-sm font-medium">
//                       Name
//                     </label>
//                     <div className="relative">
//                       <Input
//                         id="name"
//                         name="name"
//                         placeholder="Your name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField("name")}
//                         onBlur={() => setFocusedField(null)}
//                         className={`transition-all duration-300 ${
//                           focusedField === "name" ? "ring-2 ring-primary/50 border-primary" : ""
//                         }`}
//                         required
//                       />
//                       {focusedField === "name" && (
//                         <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
//                       )}
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="email" className="text-sm font-medium">
//                       Email
//                     </label>
//                     <div className="relative">
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         placeholder="Your email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField("email")}
//                         onBlur={() => setFocusedField(null)}
//                         className={`transition-all duration-300 ${
//                           focusedField === "email" ? "ring-2 ring-primary/50 border-primary" : ""
//                         }`}
//                         required
//                       />
//                       {focusedField === "email" && (
//                         <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
//                       )}
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="message" className="text-sm font-medium">
//                       Message
//                     </label>
//                     <div className="relative">
//                       <Textarea
//                         id="message"
//                         name="message"
//                         placeholder="Your message"
//                         rows={5}
//                         value={formData.message}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField("message")}
//                         onBlur={() => setFocusedField(null)}
//                         className={`transition-all duration-300 resize-none ${
//                           focusedField === "message" ? "ring-2 ring-primary/50 border-primary" : ""
//                         }`}
//                         required
//                       />
//                       {focusedField === "message" && (
//                         <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
//                       )}
//                     </div>
//                   </div>

//                   <Button
//                     type="submit"
//                     className="w-full gap-2 relative overflow-hidden group/btn hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
//                     disabled={isSubmitting}
//                   >
//                     <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
//                     {isSubmitting ? (
//                       <>
//                         <div className="size-4 border-2 border-current border-r-transparent rounded-full animate-spin" />
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="size-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
//                         Send Message
//                       </>
//                     )}
//                   </Button>

//                   {formStatus === "success" && (
//                     <div className="flex items-center gap-2 text-green-500 text-sm mt-2 animate-in slide-in-from-bottom-2 duration-300">
//                       <CheckCircle className="size-4" />
//                       Your message has been sent successfully!
//                     </div>
//                   )}

//                   {formStatus === "error" && (
//                     <div className="flex items-center gap-2 text-red-500 text-sm mt-2 animate-in slide-in-from-bottom-2 duration-300">
//                       <AlertCircle className="size-4" />
//                       There was an error sending your message. Please try again.
//                     </div>
//                   )}
//                 </form>
//               </CardContent>
//             </Card>
//           </MobileOptimizedScrollReveal>
//         </div>
//       </div>
//     </section>
//   )
// }
