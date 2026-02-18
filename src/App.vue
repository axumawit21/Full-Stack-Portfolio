<script setup>
import TechBackground from '@/components/TechBackground.vue'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen relative">
    <!-- Global animated tech background — sits behind everything -->
    <TechBackground />
    <NavBar />
    <main class="relative" style="z-index: 2;">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
    <div class="relative" style="z-index: 2;">
      <FooterSection />
    </div>
  </div>
</template>
