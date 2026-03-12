<script setup>
import { ref, onMounted } from 'vue'
import { useReveal } from '@/composables/useFadeUp'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark } = useDarkMode()
const { containerRef } = useReveal()
const barsVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) barsVisible.value = true
  }, { threshold: 0.15 })
  const el = document.querySelector('#skills')
  if (el) observer.observe(el)
})

const skillCategories = [
  {
    title: 'Frontend',
    icon: '⚡',
    gradient: 'from-indigo-500 to-blue-500',
    glow: 'rgba(99,102,241,0.25)',
    skills: [
      { name: 'Vue 3 (Composition API)', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'Vite', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Responsive Design', level: 92 },
    ]
  },
  {
    title: 'UI/UX Design',
    icon: '🎨',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'rgba(168,85,247,0.25)',
    skills: [
      { name: 'Figma', level: 88 },
      { name: 'Prototyping', level: 85 },
      { name: 'Design Systems', level: 80 },
      { name: 'User Flows', level: 82 },
    ]
  },
  {
    title: 'Tools & Other',
    icon: '🛠',
    gradient: 'from-cyan-500 to-teal-500',
    glow: 'rgba(6,182,212,0.25)',
    skills: [
      { name: 'Git & Version Control', level: 85 },
      { name: 'REST API Integration', level: 80 },
      { name: 'AI Integration', level: 75 },
      { name: 'Basic Backend (Node.js)', level: 65 },
    ]
  },
]

const softSkills = [
  { name: 'Problem Solving', icon: '🧩' },
  { name: 'Attention to Detail', icon: '🔍' },
  { name: 'Team Collaboration', icon: '🤝' },
  { name: 'Fast Learner', icon: '🚀' },
  { name: 'Communication', icon: '💬' },
  { name: 'Time Management', icon: '⏱' },
  { name: 'Creative Thinking', icon: '💡' },
  { name: 'Adaptability', icon: '🌊' },
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
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div
          v-for="(cat, i) in skillCategories"
          :key="cat.title"
          :class="['reveal-scale glass rounded-2xl p-6 card-hover group relative overflow-hidden', `delay-${i+1}`]"
        >
          <!-- Hover glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
            :style="`background: radial-gradient(circle at 50% 0%, ${cat.glow} 0%, transparent 60%);`"></div>

          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                :style="`background: linear-gradient(135deg, ${cat.glow.replace('0.25','0.2')}, transparent); border: 1px solid ${cat.glow};`">
                {{ cat.icon }}
              </div>
              <h3 :class="['font-bold text-base', isDark ? 'text-white' : 'text-slate-900']">{{ cat.title }}</h3>
            </div>

            <div class="space-y-4">
              <div v-for="skill in cat.skills" :key="skill.name">
                <div class="flex justify-between items-center mb-2">
                  <span :class="['text-sm font-medium', isDark ? 'text-slate-300' : 'text-slate-700']">{{ skill.name }}</span>
                  <span :class="['text-xs font-mono', isDark ? 'text-slate-600' : 'text-slate-400']">{{ skill.level }}%</span>
                </div>
                <div class="h-1.5 rounded-full overflow-hidden" :style="`background: ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'};`">
                  <div
                    :class="`h-full rounded-full bg-gradient-to-r ${cat.gradient} transition-all duration-1000 ease-out`"
                    :style="{ width: barsVisible ? skill.level + '%' : '0%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Soft Skills -->
      <div class="text-center">
        <p :class="['text-xs font-semibold tracking-widest uppercase mb-5', isDark ? 'text-slate-600' : 'text-slate-500']">Soft Skills</p>
        <div class="flex flex-wrap justify-center gap-3">
          <div
            v-for="(skill, i) in softSkills"
            :key="skill.name"
            :class="['flex items-center gap-2 px-4 py-2 glass-light rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-1 cursor-default', isDark ? 'text-slate-400 hover:text-white hover:border-indigo-500/30' : 'text-slate-600 hover:text-slate-900 hover:border-indigo-500/20']"
          >
            <span>{{ skill.icon }}</span>
            {{ skill.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
