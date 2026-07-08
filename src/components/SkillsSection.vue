<script setup>
import { useReveal } from '@/composables/useFadeUp'

const { containerRef } = useReveal()

const skillCards = [
  {
    title: 'Backend Developer',
    icon: 'M5 12h14M12 5l7 7-7 7',
    gradient: 'from-indigo-500 to-blue-500',
    glow: 'rgba(124,58,237,0.2)',
    skills: ['Node.js', 'Express.js', 'NestJS', 'MongoDB', 'Mongoose', 'REST API', 'JWT Authentication'],
  },
  {
    title: 'Frontend Developer',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'rgba(139,92,246,0.2)',
    skills: ['Vue 3 (Composition API)', 'JavaScript (ES6+)', 'React.Js', 'TypeScript', 'HTML5 & CSS3', 'Tailwind CSS'],
  },
]

const otherSkills = [
  { title: 'UI/UX Design', skills: ['Figma', 'Prototyping', 'Wireframing', 'Design Systems', 'User Flows'] },
  { title: 'DevOps & Tools', skills: ['Git & GitHub', 'Docker', 'Vercel', 'Netlify', 'Postman', 'VS Code', 'CI/CD'] },
  { title: 'AI & Automation', skills: ['Prompt Engineering', 'AI Integration', 'LLM APIs'] },
]
</script>

<template>
  <section class="section-padding relative overflow-hidden">
    <div ref="containerRef" class="max-w-6xl mx-auto px-6">
      <!-- Two main skill cards -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div
          v-for="(card, i) in skillCards"
          :key="card.title"
          :class="['reveal-scale glass-card rounded-2xl p-6 card-hover group relative overflow-hidden', `delay-${i+1}`]"
        >
          <!-- Hover glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
            :style="`background: radial-gradient(circle at 50% 0%, ${card.glow} 0%, transparent 60%);`"></div>

          <div class="relative z-10">
            <!-- Header -->
            <div class="flex items-center gap-3 mb-5">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center"
                :style="`background: linear-gradient(135deg, ${card.glow}, transparent); border: 1px solid ${card.glow};`">
                <svg class="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="card.icon"/>
                </svg>
              </div>
              <h3 class="font-bold text-white text-base">{{ card.title }}</h3>
            </div>

            <!-- Skill list -->
            <div class="space-y-2.5">
              <div v-for="skill in card.skills" :key="skill"
                class="flex items-center gap-3 text-sm text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0"></span>
                {{ skill }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other skills as tags -->
      <div class="grid sm:grid-cols-3 gap-4">
        <div v-for="(group, i) in otherSkills" :key="group.title"
          :class="['reveal-up glass rounded-2xl p-5', `delay-${i+3}`]">
          <h4 class="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">{{ group.title }}</h4>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in group.skills" :key="skill"
              class="skill-tag text-xs px-3 py-1.5 rounded-lg font-medium text-slate-400 hover:text-white cursor-default">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
