'use client';

import { PortfolioHeader } from '@/components/portfolio/portfolio-header';
import { HeroSection } from '@/components/portfolio/hero-section';
import { AboutSection } from '@/components/portfolio/about-section';
import { SkillsSection } from '@/components/portfolio/skills-section';
import { ExperienceSection } from '@/components/portfolio/experience-section';
import { ProjectsSection } from '@/components/portfolio/projects-section';
import { TestimonialsSection } from '@/components/portfolio/testimonials-section';
import { GlobeSection } from '@/components/portfolio/globe-section';
import { ContactSection } from '@/components/portfolio/contact-section';
import { PortfolioFooter } from '@/components/portfolio/portfolio-footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <PortfolioHeader />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <GlobeSection />
      <ContactSection />
      <PortfolioFooter />
    </div>
  );
}
