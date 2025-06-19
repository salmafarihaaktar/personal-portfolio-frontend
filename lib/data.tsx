import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ExternalLink, Code2, Users2, Award, Coffee } from "lucide-react"

export const PORTFOLIO_DATA = {
  // Personal Information
  personal: {
    name: "Salma Fariha Aktar",
    initials: "SF",
    title: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    locationLink: "https://www.google.com/maps/place/dhaka",
    email: "salmafarihaaktar@gmail.com",
    phone: "+880 1732853860",
    website: "https://fariha-portfolio-frontend.vercel.app/",
    avatarUrl: "/fariha-pic.png?height=192&width=192",
    description:
      "I build exceptional and accessible digital experiences for the web. Focused on creating clean, user-friendly interfaces with modern technologies.",
    summary:
      "I'm a passionate Frontend Developer with over 2+ years of experience crafting responsive, user-centric web applications. I specialize in React, Next.js, and modern CSS frameworks like Tailwind CSS. I've collaborated with both startups and established companies to develop high-quality digital products that prioritize performance, accessibility, and seamless user experiences. Continuously exploring new technologies and best practices, I strive to stay ahead in the ever-evolving landscape of web development.",
  },

  industries: ["E-commerce", "FinTech", "Education", "SaaS", "Startups"],

  highlights: [
    {
      title: "2+ Years Experience",
      description: "Building modern web applications",
      icon: <Code2 size={32} />,
    },
    {
      title: "5+ Live Client Projects",
      description: "Successfully delivered to clients",
      icon: <Users2 size={32} />,
    },
    {
      title: "Industry Recognition",
      description: "Award-winning designs and solutions",
      icon: <Award size={32} />,
    },
    {
      title: "Remote Friendly Support",
      description: "Flexible and collaborative approach",
      icon: <Coffee size={32} />,
    },
  ],

  // Navigation Items
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],

  // Contact Information
  contact: { 
    email: "salmafarihaaktar@gmail.com",
    phone: "+880 1732853860",
    location: "Dhaka, Bangladesh",
    social: {
      email: {
        name: "Email",
        url: "mailto:salmafarihaaktar@gmail.com",
        icon: Mail,
        navbar: false,
      },
      linkedin: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/salma-fariha-aktar-8926a41b6/",
        icon: Linkedin,
        navbar: false,
      },
      github: {
        name: "GitHub",
        url: "https://github.com/salmafarihaaktar",
        icon: Github,
        navbar: false,
      },
      twitter: {
        name: "Twitter",
        url: "https://x.com/Fariha415",
        icon: Twitter,
        navbar: false,
      },
      phone: {
        name: "Phone",
        url: "+880 1732853860",
        icon: Phone,
        navbar: true,
      },
      location: {
        name: "Location",
        url: "#",
        icon: MapPin,
        navbar: true,
      },
    },
  },

  // Skills & Technologies
  skills: {
    frontend: {
      name: "Frontend",
      color: "from-blue-500 to-cyan-500",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Redux",
        "Framer Motion",
      ],
    },
    backend: {
      name: "Backend",
      color: "from-green-500 to-emerald-500",
      technologies: ["Node.js", "Express", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL", "Firebase", "AWS"],
    },
    design: {
      name: "Design",
      color: "from-pink-500 to-rose-500",
      technologies: [
        "Figma",
        "Adobe XD",
        "UI/UX",
        "Responsive Design",
        "Design Systems",
        "Material UI",
        "Wireframing",
        "Prototyping",
        "Accessibility",
      ],
    },
  },

  // Work Experience
  experience: [
    {
      id: 1,
      role: "Junior Software Engineer",
      company: "Fintech Hub Ltd",
      location: "Dhaka, Bangladesh",
      period: "2024 - Present",
      startDate: "2024-11",
      endDate: "Present",
      description:
        "Developing and maintaining web applications with a focus on performance, scalability, and user experience. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React", "Next.js", "TypeScript", "RESTful APIs", "Tailwind"],
      achievements: [
        "Led a team of 5 developers to deliver a major e-commerce platform redesign",
        "Reduced page load times by 40% through performance optimizations",
        "Implemented CI/CD pipelines that reduced deployment time by 60%",
      ],
      companyUrl: "https://techinnovations.com",
      logoUrl: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      role: "Sales Executive",
      company: "Aggressive ROI Sdn. Bhd.",
      location: "Dhaka, Bangladesh",
      period: "2023 - 2024",
      startDate: "2023-05",
      endDate: "2024-10",
      description:
        "Managed client relationships, identified sales opportunities, and drove revenue growth through strategic marketing initiatives. Collaborated with the marketing team to develop targeted campaigns.",
      technologies: ["Sales", "Google Analytics", "Microsoft Excel", "CRM Tools"],
      achievements: [
        "Built a dashboard application used by over 10,000 daily active users",
        "Implemented comprehensive test coverage that reduced bugs by 35%",
        "Mentored 3 junior developers who were promoted within a year",
      ],
      companyUrl: "https://digitalsolutions.com",
      logoUrl: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      role: "Full Stack Developer",
      company: "BFIN It Pvt Ltd",
      location: "Dhaka, Bangladesh",
      period: "2022 - 2023",
      startDate: "2022-10",
      endDate: "2023-02",
      description:
        "Developed full-stack web applications with a focus on user experience and performance. Worked closely with designers and product managers to implement new features and improve existing ones.",
      technologies: ["HTML", "CSS", "PHP", "Laravel", "Bootstrap"],
      achievements: [
        "Developed over 20 client websites with responsive designs",
        "Created a reusable component library that increased development speed by 25%",
        "Received client satisfaction rating of 4.8/5 across all projects",
      ],
      companyUrl: "https://webcraft.com",
      logoUrl: "/placeholder.svg?height=40&width=40",
    },
  ],

  // Education & Certifications
  education: [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "Jahangirnagar University",
      location: "Dhaka, Bangladesh",
      period: "2023 - 2025",
      startDate: "2023-06",
      endDate: "2025-06",
      description: "Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors.",
      // gpa: "3.6/4.0",
      logoUrl: "/placeholder.svg?height=40&width=40",
      institutionUrl: "https://techuniversity.edu",
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "International University of Business Agriculture and Technology",
      location: "Dhaka, Bangladesh",
      period: "2019 - 2022",
      startDate: "2019-01",
      endDate: "2022-12",
      description: "Focused on software development methodologies and web application development.",
      // gpa: "3.8/4.0",
      logoUrl: "/placeholder.svg?height=40&width=40",
      institutionUrl: "https://stateuniversity.edu",
    },
  ],

  // Certifications
  certifications: [
    {
      id: 1,
      name: "B2B Sales Strategy",
      issuer: "LinkedIn Learning",
      date: "2024",
      credentialId: "FM-2022-001",
      credentialUrl: "https://frontendmasters.com/certificates/",
      logoUrl: "/placeholder.svg?height=40&width=40",
      link: ""
    },
    {
      id: 2,
      name: "UI UX Design Career Track Program",
      issuer: "Ostad",
      date: "2025",
      credentialId: "IDF-2021-002",
      credentialUrl: "https://interaction-design.org/certificates/",
      logoUrl: "/placeholder.svg?height=40&width=40",
      link: ""
    },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "Arabic Learning Management System",
      description:
        "Enhanced the user interface by refining UI components, adding profile management features, integrating PayPal for course subscriptions, and implementing a dynamic leaderboard system. Focused on delivering a smooth, responsive experience tailored for Arabic learners.",
      image: "/lms-user.png?height=300&width=500",
      technologies: ["React.js", "Zustend", "Tailwind CSS", "REST APIs"],
      keyFeatures: [
        "UI component refinement",
        "Profile and subscription management",
        "Dynamic leaderboard",
        "Optimized for Arabic learners"
      ],
      liveUrl: "https://nakhlah-language-learning-app.vercel.app/",
      codeUrl: "https://github.com/shraiyan47/Nakhlah-LanguageLearningApp",
      featured: true,
      status: "completed",
      date: "2024",
      category: "Web Application",
      team: "Team of 2",
    },
    {
      id: 2,
      title: "E-Commerce Storefront",
      description:
        "Developed a fully responsive e-commerce site with dark/light mode, dynamic product display, cart management using local storage, and bKash Hosted Checkout integration for secure payments.",
      image: "/ecommerce-storefront.png?height=300&width=500",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"],
      keyFeatures: [
        "Dark/light mode",
        "Dynamic product listings",
        "Cart with local storage",
        "bKash payment integration"
      ],
      liveUrl: "https://ecommerce-site-frontend-seven.vercel.app/",
      codeUrl: "https://github.com/rafin333/ecommerce-site-frontend",
      featured: true,
      status: "completed",
      date: "2024",
      category: "Web Application",
      team: "Solo Project",
    },
    {
      id: 3,
      title: "Islamic App",
      description:
        "Developed a comprehensive Islamic web app featuring live prayer times, a Hijri calendar, Quran recitations, Hadith of the day, and essential Islamic tools like Qibla finder, Zakat calculator, and Tasbih counter. Integrated geolocation, dark mode, and multilingual UI with a seamless, mobile-responsive user experience.",
      image: "/islamic-app.png?height=300&width=500",
      technologies: ["React.js", "Redux", "Tailwind CSS", "REST APIs"],
      keyFeatures: [
        "Prayer times & Hijri calendar",
        "Quran & Hadith features",
        "Qibla, Zakat, Tasbih tools",
        "Dark mode & multilingual UI"
      ],
      liveUrl: "https://v0-true-ligth.vercel.app/",
      codeUrl: "https://github.com/shraiyan47/TrueLight/tree/rafinDev",
      featured: true,
      status: "completed",
      date: "2024",
      category: "Web Application",
      team: "Team of 2",
    },
    {
      id: 4,
      title: "Real-Time Chat App",
      description:
        "Built a real-time messaging app with user authentication, live message delivery, typing indicators, and message history. Focused on responsive UI, smooth UX, and WebSocket integration for instant communication.",
      image: "/chat-app.png?height=300&width=500",
      technologies: ["React.js", "Node.js", "Tailwind CSS", "Socket.IO"],
      keyFeatures: [
        "Real-time messaging",
        "Authentication & typing status",
        "Message history",
        "WebSocket integration"
      ],
      liveUrl: "https://v0-true-ligth.vercel.app/",
      codeUrl: "https://github.com/rafin333",
      featured: true,
      status: "completed",
      date: "2024",
      category: "Web Application",
      team: "Solo Project",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Designed and developed a modern, responsive personal portfolio for a client, featuring animated sections, smooth navigation, dark/light mode, and optimized performance for a professional online presence.",
      image: "/client-portfolio.png?height=300&width=500",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
      keyFeatures: [
        "Responsive design",
        "Smooth scroll & animation",
        "Dark/light mode",
        "Performance optimized"
      ],
      liveUrl: "https://salma-fariha-frontend-portfolio.vercel.app/",
      codeUrl: "https://github.com/rafin333/client-portfolio",
      featured: false,
      status: "completed",
      date: "2024",
      category: "Web Application",
      team: "Solo Project",
    },
    {
      id: 6,
      title: "LMS Admin Dashboard",
      description:
        "Developed and optimized the admin dashboard with role-based access control (RBAC), rich text editors for managing policies and email templates, and full CRUD operations for FAQs and user feedback. Actively contributed to bug fixing and UI improvements to enhance admin workflows.",
      image: "/lms-admin.png?height=300&width=500",
      technologies: ["React.js", "Redux", "Tailwind CSS", "REST APIs"],
      keyFeatures: [
        "RBAC system",
        "Rich text policy/email editors",
        "CRUD for FAQs/feedback",
        "Workflow UI improvements"
      ],
      liveUrl: "https://nakhlah-arabic.vercel.app/",
      codeUrl: "https://github.com/shraiyan47/NakhlahSaudi",
      featured: false,
      status: "completed",
      date: "2024",
      category: "Web Application",
      team: "Team of 2",
    },
  ],


  // Resume/CV
  resume: {
    url: "/salma-fariha-resume.pdf",
    lastUpdated: "2024-01-15",
  },

  // SEO & Meta
  seo: {
    title: "Salma Fariha | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web technologies. Building exceptional digital experiences.",
    keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Web Development", "UI/UX"],
    ogImage: "/og-image.png",
  },

  // Analytics & Tracking
  analytics: {
    googleAnalyticsId: "GA_MEASUREMENT_ID",
    hotjarId: "HOTJAR_ID",
  },
} as const


export type PortfolioData = typeof PORTFOLIO_DATA
export type Experience = (typeof PORTFOLIO_DATA.experience)[0]
export type Project = (typeof PORTFOLIO_DATA.projects)[0]
export type Education = (typeof PORTFOLIO_DATA.education)[0]
export type Certification = (typeof PORTFOLIO_DATA.certifications)[0]
export type Skill = typeof PORTFOLIO_DATA.skills.frontend
export type SocialLink = typeof PORTFOLIO_DATA.contact.social.github
