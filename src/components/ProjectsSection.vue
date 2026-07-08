<script setup>
import { useReveal } from '@/composables/useFadeUp'

import adaptiveImg from '@/assets/port pic/adaptive.png'
import rentalImg from '@/assets/port pic/home rental.png'
import billingImg from '@/assets/port pic/billing.png'
import attentionImg from '@/assets/port pic/attention tracker.png'
import loanPredictionImg from '@/assets/port pic/loan prediction.png'

const { containerRef } = useReveal()

const projects = [
  {
    title: 'AI Loan Prediction for Microfinance',
    description: 'AI-powered loan risk prediction system that helps microfinance institutions analyze borrower data, predict default risks, and make smarter lending decisions.',
    image: loanPredictionImg,
    tags: ['Vue', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/axumawit21/AI-loan-prediction-for-microfinance',
    demo: 'https://ai-loan-prediction-for-microfinance.vercel.app',
  },
  {
    title: 'AI Powered Adaptive Learning',
    description: 'An intelligent e-learning platform that adapts content based on learner performance using AI.',
    image: adaptiveImg,
    tags: ['Vue 3', 'Node.js', 'AI', 'MongoDB'],
    github: 'https://github.com/axumawit21/adaptive-learning',
    demo: 'https://ai-powered-adaptive-learning-d5a4.vercel.app/',
  },
  {
    title: 'Rental Platform',
    description: 'Full-featured property rental platform with intuitive search and booking flows.',
    image: rentalImg,
    tags: ['Vue 3', 'Express', 'MongoDB'],
    github: 'https://github.com/axumawit21/rental-platform',
    demo: 'https://rental-platform-sigma-three.vercel.app/',
  },
  {
    title: 'Billing Dashboard',
    description: 'Comprehensive billing and invoicing dashboard for internal business operations.',
    image: billingImg,
    tags: ['Figma', 'Vue 3', 'Tailwind'],
    github: 'https://github.com/axumawit21/Billing-Dashboard',
    demo: 'https://billing-dashboardd.netlify.app/',
  },
  {
    title: 'Attention Tracker',
    description: 'Focus and productivity app that tracks attention spans and builds better focus habits.',
    image: attentionImg,
    tags: ['Vue 3', 'Tailwind', 'Chart.js'],
    github: 'https://github.com/axumawit21/Attention-tracker',
    demo: 'https://attention-tracker.netlify.app/',
  },
]
</script>

<template>
  <section id="portfolio" class="section-padding relative overflow-hidden">
    <div ref="containerRef" class="max-w-6xl mx-auto px-6">
      <!-- Section Title -->
      <div class="text-center mb-14 reveal-up">
        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-3">My Portfolio</h2>
        <div class="w-12 h-1 mx-auto rounded-full" style="background: linear-gradient(90deg, #7c3aed, #a855f7);"></div>
      </div>

      <!-- Project Grid -->
      <div class="grid sm:grid-cols-2 gap-6">
        <div
          v-for="(project, i) in projects"
          :key="project.title"
          :class="[
            'group glass-card rounded-2xl overflow-hidden card-hover block reveal-scale',
            `delay-${i+1}`,
          ]"
        >
          <!-- Image -->
          <div class="relative overflow-hidden h-48 sm:h-52">
            <img :src="project.image" :alt="project.title"
              class="w-full h-full object-cover portfolio-img" />
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <!-- Info -->
          <div class="p-5">
            <h3 class="font-bold text-white text-base mb-1.5">{{ project.title }}</h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-3">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in project.tags" :key="tag"
                class="skill-tag text-xs px-2.5 py-1 rounded-lg font-medium text-slate-400">
                {{ tag }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center gap-3">
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener"
                class="project-btn project-btn--github">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener"
                class="project-btn project-btn--demo">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
}

.project-btn--github {
  color: #cbd5e1;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-btn--github:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.project-btn--demo {
  color: #c4b5fd;
  background: rgba(124, 58, 237, 0.15);
  border: 1px solid rgba(124, 58, 237, 0.3);
}

.project-btn--demo:hover {
  color: #fff;
  background: rgba(124, 58, 237, 0.3);
  border-color: rgba(168, 85, 247, 0.5);
  transform: translateY(-1px);
}
</style>
