import { DockNav } from "@/components/dock-nav";
import { HeroSection } from "@/components/sections/hero";
import { ProfileSection } from "@/components/sections/profile";
import { SkillsSection } from "@/components/sections/skills";
import { EducationSection } from "@/components/sections/education";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <DockNav />
      <main>
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <HeroSection />
          <ProfileSection />
          <SkillsSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
