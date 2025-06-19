"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Send } from "lucide-react"
import MobileOptimizedScrollReveal from "@/components/mobile-optimized-scroll-reveal"
import { usePortfolioData } from "@/hooks/use-portfolio-data"
import emailjs from 'emailjs-com';

export default function DataDrivenContact() {
  const { data, getContactInfo, getSocialLinks } = usePortfolioData()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
      try {
    // 1. Send email to admin
    await emailjs.send(
      "service_eqjo0j5",
      "template_tj69ehy",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "tXy1-9z4L2Fc3g2t2"
    )

    // 2. Send auto-reply to user
    await emailjs.send(
      "service_eqjo0j5",
      "template_axq7m7o",
      {
        name: formData.name,
        email: formData.email,
      },
      "tXy1-9z4L2Fc3g2t2"
    )

    setFormStatus("success")
    setFormData({ name: "", email: "", message: "" })
  } catch (error) {
    console.error(error)
    setFormStatus("error")
  } finally {
    setIsSubmitting(false)
    setTimeout(() => setFormStatus(null), 5000)
  }
}

  const contactInfo = getContactInfo()
  const socialLinks = getSocialLinks()

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-5xl">
        <MobileOptimizedScrollReveal>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-muted-foreground max-w-2xl">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>
        </MobileOptimizedScrollReveal>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-8">

          <MobileOptimizedScrollReveal direction="left">
            <Card className="border-none bg-card/50 backdrop-blur-sm h-fit hover:bg-card/70 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <MobileOptimizedScrollReveal key={item.label} delay={200 + index * 100} direction="left">
                      <div className="flex items-start gap-3 group/item hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center text-purple-400 transition-transform duration-500 group-hover/item:scale-110">
                          <item.icon className="size-5" />
                        </div>

                        <div>
                          <h4 className="font-medium group-hover/item:text-primary transition-colors duration-300">
                            {item.label}
                          </h4>
                          {item.href !== "#" ? (
                            <Link
                              href={item.href}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                            >
                              {item.value}
                            </Link>
                          ) : (
                            <p className="text-sm text-muted-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </MobileOptimizedScrollReveal>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-3">Connect with me</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={social.name}
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg"
                        style={{ animationDelay: `${index * 100}ms` }}
                        asChild
                      >
                        <Link href={social.url} target="_blank" rel="noopener noreferrer">
                          <social.icon className="size-4" />
                          <span className="sr-only">{social.name}</span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>

                <>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full text-left p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20 mt-8 transition-all duration-500 hover:scale-105"
                    aria-label="Let's work together"
                  >
                    <h4 className="font-bold">Let's work together!</h4>
                  </button>

                  {/* Modal */}
                  {isModalOpen && (
                    <div
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 sm:px-0"
                      onClick={() => setIsModalOpen(false)}
                      aria-modal="true"
                      role="dialog"
                    >
                      <div
                        className="relative bg-white/10 rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 text-center cursor-auto backdrop-filter backdrop-blur-md border border-white/20"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="absolute -top-1 -right-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/30 transition md:top-4 md:right-4"
                          aria-label="Close modal"
                        >
                          <span className="text-2xl font-bold text-white hover:text-gray-100">×</span>
                        </button>

                        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-purple-300 animate-bounce w-fit mx-auto">
                          🎉 Surprise! 🎉
                        </h2>

                        <p className="mb-8 text-white text-base sm:text-lg leading-relaxed">
                          You found the secret handshake! Thanks for stopping by and making my day brighter.
                        </p>

                        <a
                          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                            "🤫 Shhh... I just unlocked the SECRET HANDSHAKE on this portfolio! Wanna see? Check it out! 🔐✨ #SecretHandshake"
                          )}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg font-semibold shadow-lg transition-transform transform hover:-translate-y-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            aria-hidden="true"
                          >
                            <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.896 9.896 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149 4.822 4.822 0 003.195 9.86a4.903 4.903 0 01-2.228-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.996 4.996 0 01-2.224.084 4.937 4.937 0 004.604 3.417A9.867 9.867 0 010 19.54a13.978 13.978 0 007.548 2.209c9.142 0 14.307-7.721 13.995-14.646a9.936 9.936 0 002.411-2.535z" />
                          </svg>
                          Share on Twitter
                        </a>
                      </div>
                    </div>
                  )}

                </>

              </CardContent>
            </Card>
          </MobileOptimizedScrollReveal>

          <MobileOptimizedScrollReveal direction="right" delay={200}>
            <Card className="border-none bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={`transition-all duration-300 ${focusedField === "name" ? "ring-2 ring-primary/50 border-primary" : ""
                          }`}
                        required
                      />
                      {focusedField === "name" && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`transition-all duration-300 ${focusedField === "email" ? "ring-2 ring-primary/50 border-primary" : ""
                          }`}
                        required
                      />
                      {focusedField === "email" && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or just say hello!"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className={`transition-all duration-300 resize-none ${focusedField === "message" ? "ring-2 ring-primary/50 border-primary" : ""
                          }`}
                        required
                      />
                      {focusedField === "message" && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2 relative overflow-hidden group/btn hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    {isSubmitting ? (
                      <>
                        <div className="size-4 border-2 border-current border-r-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="size-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {formStatus === "success" && (
                    <div className="flex items-center gap-2 text-green-500 text-sm mt-2 animate-in slide-in-from-bottom-2 duration-300">
                      <CheckCircle className="size-4" />
                      Your message has been sent successfully!
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="flex items-center gap-2 text-red-500 text-sm mt-2 animate-in slide-in-from-bottom-2 duration-300">
                      <AlertCircle className="size-4" />
                      There was an error sending your message. Please try again.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </MobileOptimizedScrollReveal>
        </div>
      </div>
    </section>
  )
}
