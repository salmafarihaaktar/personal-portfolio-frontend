import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { OptimizedThemeProvider } from "@/components/optimized-theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Salma Fariha Akhtar | Frontend Developer",
  description: "Personal portfolio website of Salma Fariha Akhtar, Frontend Developer"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical theme styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --theme-transition-duration: 150ms;
                --background: 240 10% 3.9%;
                --foreground: 0 0% 98%;
                --primary: 271.4 91.7% 65.1%;
              }
              
              body {
                transition: background-color var(--theme-transition-duration) ease-out, 
                           color var(--theme-transition-duration) ease-out;
              }
              
              .theme-instant {
                transition: none !important;
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>

        <OptimizedThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="portfolio-theme"
        >
          <div className="relative flex min-h-screen flex-col bg-background transition-colors duration-150 ease-out">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </OptimizedThemeProvider>
      </body>
    </html>
  )
}
