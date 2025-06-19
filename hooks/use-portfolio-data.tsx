"use client"

import { PORTFOLIO_DATA } from "@/lib/data"
import { useMemo } from "react"

export function usePortfolioData() {
  const data = useMemo(() => PORTFOLIO_DATA, [])

  // Helper functions for common data operations
  const getFeaturedProjects = () => {
    return data.projects.filter((project) => project.featured)
  }

  const getRecentExperience = (limit = 3) => {
    return data.experience.slice(0, limit)
  }

  const getSkillsByCategory = (category: keyof typeof data.skills) => {
    return data.skills[category]
  }

  const getSocialLinks = (includeNavbar = false) => {
    return Object.values(data.contact.social).filter((social) => (includeNavbar ? social.navbar : !social.navbar))
  }

  const getContactInfo = () => {
    return [
      {
        icon: data.contact.social.email.icon,
        label: "Email",
        value: data.contact.email,
        href: data.contact.social.email.url,
      },
      {
        icon: data.contact.social.phone.icon,
        label: "Phone",
        value: data.contact.phone,
        href: data.contact.social.phone.url,
      },
      {
        icon: data.contact.social.location.icon,
        label: "Location",
        value: data.contact.location,
        href: data.contact.social.location.url,
      },
    ]
  }

  return {
    data,
    getFeaturedProjects,
    getRecentExperience,
    getSkillsByCategory,
    getSocialLinks,
    getContactInfo,
  }
}
