<script setup>
import { useReveal } from '@/composables/useFadeUp'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark } = useDarkMode()
const { containerRef } = useReveal()

const skillCategories = [
  {
    title: 'Frontend',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    gradient: 'from-indigo-500 to-blue-500',
    glow: 'rgba(99,102,241,0.25)',
    skills: ['Vue 3 (Composition API)', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 & CSS3', 'Vite', 'Tailwind CSS', 'Pinia', 'Vue Router', 'Responsive Design']
  },
  {
    title: 'Backend',
    icon: 'M5 12h14M12 5l7 7-7 7',
    gradient: 'from-emerald-500 to-green-600',
    glow: 'rgba(16,185,129,0.25)',
    skills: ['Node.js', 'Express.js', 'NestJS', 'MongoDB', 'Mongoose', 'REST API', 'JWT Authentication']
  },
  {
    title: 'UI/UX Design',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'rgba(168,85,247,0.25)',
    skills: ['Figma', 'Prototyping', 'Wireframing', 'Design Systems', 'User Flows', 'Responsive Layouts']
  },
  {
    title: 'Deployment',
    icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
    gradient: 'from-orange-500 to-red-500',
    glow: 'rgba(249,115,22,0.25)',
    skills: ['Vercel', 'Netlify', 'AWS', 'CI/CD', 'GitHub Actions']
  },
  {
    title: 'Tools',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    gradient: 'from-cyan-500 to-teal-500',
    glow: 'rgba(6,182,212,0.25)',
    skills: ['Git & GitHub', 'Postman', 'Docker', 'VS Code', 'npm', 'Jira', 'Slack']
  },
  {
    title: 'AI & Automation',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    gradient: 'from-violet-500 to-fuchsia-500',
    glow: 'rgba(139,92,246,0.25)',
    skills: ['Prompt Engineering', 'AI Integration', 'LLM APIs', 'Cursor & Antigravity']
  },
]

const softSkills = [
  'Problem Solving',
  'Attention to Detail',
  'Team Collaboration',
  'Fast Learner',
  'Communication',
  'Time Management',
  'Creative Thinking',
  'Adaptability',
]
</script>

<template>
  <section id="skills" class="section-padding relative overflow-hidden">
    <div :class="['absolute inset-0', isDark ? 'bg-[linear-gradient(rgba(99,102,241,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.025)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)]']" style="background-size: 50px 50px;"></div>
    <div class="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-40 pointer-events-none"
      :style="`background: radial-gradient(ellipse, rgba(99,102,241,${isDark ? '0.08' : '0.06'}) 0%, transparent 70%);`"></div>

    <div ref="containerRef" class="max-w-6xl mx-auto px-6 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
          <span class="w-8 h-px bg-gradient-to-r from-transparent to-indigo-500"></span>
          Expertise
          <span class="w-8 h-px bg-gradient-to-r from-indigo-500 to-transparent"></span>
        </span>
        <h2 :class="['text-4xl md:text-5xl font-extrabold mb-4', isDark ? 'text-white' : 'text-slate-900']">Skills & Technologies</h2>
        <p :class="['text-lg max-w-xl mx-auto', isDark ? 'text-slate-500' : 'text-slate-500']">A curated set of tools I use to build modern, scalable web applications.</p>
      </div>

      <!-- Skill Cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div
          v-for="(cat, i) in skillCategories"
          :key="cat.title"
          :class="['reveal-scale glass rounded-2xl p-6 card-hover group relative overflow-hidden', `delay-${i+1}`]"
        >
          <!-- Hover glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
            :style="`background: radial-gradient(circle at 50% 0%, ${cat.glow} 0%, transparent 60%);`"></div>

          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center"
                :style="`background: linear-gradient(135deg, ${cat.glow.replace('0.25','0.2')}, transparent); border: 1px solid ${cat.glow};`">
                <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="cat.icon"/>
                </svg>
              </div>
              <h3 :class="['font-bold text-base', isDark ? 'text-white' : 'text-slate-900']">{{ cat.title }}</h3>
            </div>

            <div class="flex flex-wrap gap-2">
              <span v-for="skill in cat.skills" :key="skill"
                :class="['text-sm px-3 py-1.5 rounded-lg font-medium transition-all duration-300 cursor-default hover:scale-105', isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900']"
                :style="`background: ${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(99,102,241,0.06)'}; border: 1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(99,102,241,0.12)'};`">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Soft Skills -->
      <div class="text-center">
        <p :class="['text-xs font-semibold tracking-widest uppercase mb-5', isDark ? 'text-slate-600' : 'text-slate-500']">Soft Skills</p>
        <div class="flex flex-wrap justify-center gap-3">
          <div
            v-for="skill in softSkills"
            :key="skill"
            :class="['px-4 py-2 glass-light rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-1 cursor-default', isDark ? 'text-slate-400 hover:text-white hover:border-indigo-500/30' : 'text-slate-600 hover:text-slate-900 hover:border-indigo-500/20']"
          >
            {{ skill }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
