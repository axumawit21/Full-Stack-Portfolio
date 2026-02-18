<script setup>
import { useReveal } from '@/composables/useFadeUp'
const { containerRef } = useReveal()

const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '3+', label: 'Projects Built' },
  { value: 'Vue 3', label: 'Primary Stack' },
]
const profileItems = [
  { text: 'BSc in Information Technology', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
  { text: 'Vue 3 · Tailwind CSS · Vite', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { text: 'AI-driven & Dashboard Apps', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { text: 'Clean Code & Scalable Systems', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
]
</script>

<template>
  <section id="about" class="section-padding relative overflow-hidden">
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
      style="background: radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%);"></div>

    <div ref="containerRef" class="max-w-6xl mx-auto px-6">
      <!-- Section Title — always visible -->
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
          <span class="w-8 h-px bg-gradient-to-r from-transparent to-indigo-500"></span>
          About Me
          <span class="w-8 h-px bg-gradient-to-r from-indigo-500 to-transparent"></span>
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Building interfaces that
          <span class="text-gradient">matter.</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-16 items-center">
        <!-- Left -->
        <div class="reveal-left">
          <p class="text-slate-400 text-lg leading-relaxed mb-5">
            I'm a Frontend Developer and UI/UX Designer with a BSc in Information Technology and over a year of hands-on experience. I specialize in
            <span class="text-indigo-400 font-semibold">Vue 3</span>,
            <span class="text-purple-400 font-semibold">Tailwind CSS</span>, and modern frontend architecture.
          </p>
          <p class="text-slate-400 text-lg leading-relaxed mb-10">
            From AI-driven adaptive learning systems to billing dashboards and rental platforms, I focus on
            <span class="text-white font-semibold">clean, scalable code</span> and
            <span class="text-white font-semibold">component-based systems</span> that teams love.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4">
            <div v-for="(stat, i) in stats" :key="stat.label"
              :class="['reveal-flip glass rounded-2xl p-4 text-center card-hover neon-border', `delay-${i+1}`]">
              <div class="text-2xl font-black text-gradient mb-1">{{ stat.value }}</div>
              <div class="text-xs text-slate-500 font-medium">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Right — profile card (NO AL monogram) -->
        <div class="reveal-right relative">
          <div class="absolute inset-0 blur-3xl opacity-[0.15] rounded-3xl"
            style="background: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4);"></div>

          <div class="relative glass rounded-3xl p-8 neon-border">
            <!-- Avatar icon instead of AL -->
            <div class="relative w-20 h-20 mb-6">
              <div class="w-20 h-20 rounded-2xl flex items-center justify-center"
                style="background: linear-gradient(135deg, #6366f1, #8b5cf6);">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-[#0a0d1a] flex items-center justify-center">
                <span class="w-2 h-2 bg-emerald-300 rounded-full animate-ping"></span>
              </div>
            </div>

            <h3 class="text-xl font-bold text-white mb-1">Axumawit Leake</h3>
            <p class="text-indigo-400 font-medium text-sm mb-6">Frontend Developer & UI/UX Designer</p>

            <div class="space-y-3">
              <div v-for="item in profileItems" :key="item.text"
                class="flex items-center gap-3 text-sm text-slate-400 group cursor-default">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style="background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.2);">
                  <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
                  </svg>
                </div>
                <span class="group-hover:text-slate-200 transition-colors">{{ item.text }}</span>
              </div>
            </div>

            <div class="mt-6 h-px shimmer rounded-full"></div>
            <div class="mt-4 flex items-center gap-2 text-xs text-slate-600">
              <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Open to full-time & freelance opportunities
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
