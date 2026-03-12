<script setup>
import { ref, onMounted } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark } = useDarkMode()
const visible = ref(false)
const typedText = ref('')
const titles = ['Frontend Developer', 'Vue.js Specialist', 'UI/UX Designer', 'Interface Architect']
let titleIndex = 0
let charIndex = 0
let isDeleting = false

function typeWriter() {
  const current = titles[titleIndex]
  if (!isDeleting) {
    typedText.value = current.substring(0, charIndex + 1)
    charIndex++
    if (charIndex === current.length) {
      isDeleting = true
      setTimeout(typeWriter, 2000)
      return
    }
  } else {
    typedText.value = current.substring(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      titleIndex = (titleIndex + 1) % titles.length
    }
  }
  setTimeout(typeWriter, isDeleting ? 55 : 85)
}

onMounted(() => {
  setTimeout(() => { visible.value = true }, 80)
  setTimeout(typeWriter, 1000)
})

const socials = [
  {
    label: 'GitHub', href: 'https://github.com/axumawit21',
    icon: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z'
  },
  {
    label: 'LinkedIn', href: 'https://www.linkedin.com/in/axumawit-leake-38934626b',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  },
  {
    label: 'Email', href: 'mailto:axumawitleake@gmail.com',
    icon: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
  },
]
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Radial glow layers -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full pulse-glow"
        :style="`background: radial-gradient(circle, rgba(99,102,241,${isDark ? '0.12' : '0.08'}) 0%, transparent 65%);`"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pulse-glow"
        :style="`background: radial-gradient(circle, rgba(168,85,247,${isDark ? '0.09' : '0.06'}) 0%, transparent 65%); animation-delay: -2s;`"></div>
    </div>

    <!-- Floating geometric decorations -->
    <div class="absolute top-24 right-16 opacity-20 float">
      <div :class="['w-20 h-20 border rounded-2xl spin-slow', isDark ? 'border-indigo-400/40' : 'border-indigo-400/25']"></div>
    </div>
    <div class="absolute bottom-40 left-12 opacity-[0.15] float-b">
      <div :class="['w-12 h-12 border rounded-full', isDark ? 'border-purple-400/40' : 'border-purple-400/25']"></div>
    </div>
    <div class="absolute top-1/2 right-8 opacity-[0.10] float">
      <div :class="['w-8 h-8 rounded-sm spin-slow-r', isDark ? 'bg-cyan-400/20' : 'bg-cyan-400/15']"></div>
    </div>
    <div class="absolute top-1/3 left-8 opacity-[0.10] float-b">
      <div :class="['w-6 h-6 border rounded-sm', isDark ? 'border-cyan-400/30' : 'border-cyan-400/20']"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">

      <!-- Badge -->
      <div
        :class="['inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-10 glass-light text-sm font-medium transition-all duration-700', isDark ? 'text-slate-300' : 'text-slate-600', visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6']"
      >
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Available for new opportunities
      </div>

      <!-- Name — smaller size -->
      <div class="overflow-hidden mb-2">
        <h1
          :class="['text-5xl md:text-7xl font-black tracking-tight leading-none transition-all', isDark ? 'text-white' : 'text-slate-900', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
          style="transition-delay: 0.15s; transition-duration: 0.8s;"
        >
          Axumawit
        </h1>
      </div>
      <div class="overflow-hidden mb-6">
        <h1
          :class="['text-5xl md:text-7xl font-black tracking-tight leading-none text-gradient glow-text transition-all', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
          style="transition-delay: 0.28s; transition-duration: 0.8s;"
        >
          Leake
        </h1>
      </div>

      <!-- Typewriter -->
      <div
        :class="['h-10 flex items-center justify-center mb-6 transition-all duration-700', visible ? 'opacity-100' : 'opacity-0']"
        style="transition-delay: 0.5s;"
      >
        <p :class="['text-xl md:text-2xl font-mono font-semibold', isDark ? 'text-slate-400' : 'text-slate-500']">
          <span class="text-indigo-400 typing-cursor">{{ typedText }}</span>
        </p>
      </div>

      <!-- Tagline -->
      <p
        :class="['text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700', isDark ? 'text-slate-500' : 'text-slate-500', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6']"
        style="transition-delay: 0.65s;"
      >
        Turning complex ideas into elegant, high-performance interfaces —
        <span :class="['font-medium', isDark ? 'text-slate-300' : 'text-slate-700']">where clean code meets exceptional design.</span>
      </p>

      <!-- CTAs -->
      <div
        :class="['flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 transition-all duration-700', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6']"
        style="transition-delay: 0.8s;"
      >
        <a href="#projects" class="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base">
          <span>View My Work</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
        <a href="#contact"
          :class="['group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base glass-light transition-all duration-300 hover:-translate-y-1 neon-border', isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900']">
          Get In Touch
        </a>
      </div>

      <!-- Social icons -->
      <div
        :class="['flex items-center justify-center gap-3 transition-all duration-700', visible ? 'opacity-100' : 'opacity-0']"
        style="transition-delay: 0.95s;"
      >
        <a v-for="(s, i) in socials" :key="s.label" :href="s.href"
          target="_blank" rel="noopener" :aria-label="s.label"
          :style="`transition-delay: ${i * 0.08}s`"
          :class="['w-10 h-10 glass-light rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110', isDark ? 'text-slate-500 hover:text-indigo-400 hover:border-indigo-500/40' : 'text-slate-400 hover:text-indigo-600 hover:border-indigo-500/30']">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path :d="s.icon"/></svg>
        </a>
      </div>
    </div>

    <!-- Scroll line -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span :class="['text-xs font-mono tracking-widest uppercase', isDark ? 'text-slate-700' : 'text-slate-400']">scroll</span>
      <div class="w-px h-14 overflow-hidden">
        <div class="w-full h-full bg-gradient-to-b from-indigo-500 to-transparent animate-bounce"></div>
      </div>
    </div>
  </section>
</template>
