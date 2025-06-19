import DataDrivenHero from "@/components/data-driven-hero"
import DataDrivenAbout from "@/components/data-driven-about"
import DataDrivenTimeline from "@/components/data-driven-timeline"
import DataDrivenEducation from "@/components/data-driven-education"
import DataDrivenSkills from "@/components/data-driven-skills"
import DataDrivenProjects from "@/components/data-driven-projects"
import DataDrivenContact from "@/components/data-driven-contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <DataDrivenHero />
      <DataDrivenAbout />
      <DataDrivenTimeline />
      <DataDrivenEducation />
      <DataDrivenSkills />
      <DataDrivenProjects />
      <DataDrivenContact />
    </main>
  )
}
