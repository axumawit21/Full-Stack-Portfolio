<script setup>
import { useReveal } from '@/composables/useFadeUp'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark } = useDarkMode()
const { containerRef } = useReveal()

const projects = [
  {
    title: 'AI Powered Adaptive Learning',
    type: 'Vite Technologies',
    role: 'Full Stack Development & AI Integration',
    description: 'An intelligent e-learning platform that adapts content difficulty based on learner performance using AI. Built end-to-end with Vue 3, Node.js, and AI integration.',
    tags: ['Vue 3', 'AI Integration', 'Node.js', 'NestJs', 'REST API', 'Tailwind CSS', 'MongoDB', 'Docker'],
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    gradient: 'from-cyan-500 to-teal-600',
    glow: 'rgba(6,182,212,0.25)',
    highlights: ['AI-driven content adaptation', 'AI Integration for personalized learning', 'Real-time performance tracking', 'Scalable full-stack architecture'],
    featured: true,
    link: null,
  },
  {
    title: 'Rental Platform',
    type: 'Personal Project',
    role: 'Design & Full Stack Development',
    description: 'A full-featured property rental platform with intuitive search, listing management, and booking flows. Built with a focus on clean UX and seamless user journeys.',
    tags: ['Vue 3', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Figma', 'REST API'],
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    gradient: 'from-indigo-500 to-blue-600',
    glow: 'rgba(99,102,241,0.25)',
    highlights: ['Responsive property listings', 'Advanced search & filters', 'Booking flow UX'],
    link: 'https://github.com/axumawit21/rental-platform',
  },
  {
    title: 'Billing Dashboard',
    type: 'Vite Technologies',
    role: 'Design & Frontend Development',
    description: 'A comprehensive billing and invoicing dashboard for internal business operations. Complex financial data presented through clean, scannable interfaces.',
    tags: ['Figma', 'Vue 3', 'Prototyping', 'Tailwind CSS'],
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    gradient: 'from-purple-500 to-pink-600',
    glow: 'rgba(168,85,247,0.25)',
    highlights: ['Data visualization design', 'Component design system', 'User flow optimization'],
    link: 'https://billing-dashboardd.netlify.app/',
  },
  {
    title: 'Attention Tracker',
    type: 'Personal Project',
    role: 'Frontend Development',
    description: 'A focus and productivity application that helps users track attention spans, analyze concentration patterns, and build better focus habits through data-driven insights.',
    tags: ['Vue 3', 'Tailwind CSS', 'Chart.js', 'Pinia'],
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    gradient: 'from-amber-500 to-orange-600',
    glow: 'rgba(245,158,11,0.25)',
    highlights: ['Focus session tracking', 'Attention analytics dashboard', 'Streak & score system'],
    link: 'https://attention-tracker.netlify.app/',
  },
  
]
</script>

<template>
  <section id="projects" class="section-padding relative overflow-hidden">
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none"
      :style="`background: radial-gradient(ellipse, rgba(99,102,241,${isDark ? '0.05' : '0.04'}) 0%, transparent 70%);`"></div>

    <div ref="containerRef" class="max-w-6xl mx-auto px-6 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
          <span class="w-8 h-px bg-gradient-to-r from-transparent to-indigo-500"></span>
          Portfolio
          <span class="w-8 h-px bg-gradient-to-r from-indigo-500 to-transparent"></span>
        </span>
        <h2 :class="['text-4xl md:text-5xl font-extrabold mb-4', isDark ? 'text-white' : 'text-slate-900']">Selected Projects</h2>
        <p :class="['text-lg max-w-xl mx-auto', isDark ? 'text-slate-500' : 'text-slate-500']">Real-world applications built with modern technologies and strong UX focus.</p>
      </div>

      <!-- Project Cards -->
      <div class="grid md:grid-cols-2 gap-6">
        <a
          v-for="(project, i) in projects"
          :key="project.title"
          :href="project.link || undefined"
          :target="project.link ? '_blank' : undefined"
          :rel="project.link ? 'noopener' : undefined"
          :class="[
            'group relative glass rounded-2xl p-6 card-hover overflow-hidden block',
            project.featured ? 'reveal-scale ring-1 ring-indigo-500/30' : (i % 2 === 0 ? 'reveal-left' : 'reveal-right'),
            `delay-${i+1}`,
            project.link ? 'cursor-pointer' : 'cursor-default'
          ]"
        >
          <!-- Featured badge -->
          <div v-if="project.featured"
            class="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold text-white"
            style="background: linear-gradient(135deg, #6366f1, #8b5cf6);">
            ✦ Featured
          </div>

          <!-- Hover glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
            :style="`background: radial-gradient(circle at 30% 20%, ${project.glow} 0%, transparent 60%);`"></div>

          <div class="relative z-10">
            <!-- Icon -->
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
              :style="`background: linear-gradient(135deg, ${project.glow.replace('0.25','0.15')}, transparent); border: 1px solid ${project.glow};`">
              <svg class="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="project.icon"/>
              </svg>
            </div>

            <span :class="['inline-block text-xs font-semibold uppercase tracking-widest mb-2', isDark ? 'text-slate-600' : 'text-slate-400']">{{ project.type }}</span>
            <h3 :class="['text-lg font-bold mb-1', isDark ? 'text-white' : 'text-slate-900']">{{ project.title }}</h3>
            <p class="text-sm font-semibold mb-3 text-gradient">{{ project.role }}</p>
            <p :class="['text-sm leading-relaxed mb-4', isDark ? 'text-slate-400' : 'text-slate-600']">{{ project.description }}</p>

            <ul class="space-y-1.5 mb-5">
              <li v-for="h in project.highlights" :key="h" :class="['flex items-center gap-2 text-xs', isDark ? 'text-slate-500' : 'text-slate-500']">
                <svg class="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4"/>
                </svg>
                {{ h }}
              </li>
            </ul>

            <div class="flex flex-wrap gap-2">
              <span v-for="tag in project.tags" :key="tag"
                :class="['text-xs px-2.5 py-1 rounded-full font-medium transition-colors cursor-default', isDark ? 'text-slate-500 hover:text-indigo-400' : 'text-slate-500 hover:text-indigo-600']"
                :style="`background: ${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(99,102,241,0.06)'}; border: 1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.12)'};`">
                {{ tag }}
              </span>
            </div>

            <!-- View link indicator -->
            <div v-if="project.link" class="mt-4 flex items-center gap-1.5 text-indigo-400 text-xs font-semibold group-hover:gap-3 transition-all duration-300">
              View Project
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
