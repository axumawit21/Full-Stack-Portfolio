<script setup>
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen relative">
    <!-- Ambient background glow -->
    <div class="fixed inset-0 pointer-events-none" style="z-index: 0;">
      <div class="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pulse-glow"
        style="background: radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%);"></div>
      <div class="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full pulse-glow"
        style="background: radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 65%); animation-delay: -2s;"></div>
    </div>

    <NavBar />
    <main class="relative" style="z-index: 2;">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </main>
    <div class="relative" style="z-index: 2;">
      <FooterSection />
    </div>
  </div>
</template>
