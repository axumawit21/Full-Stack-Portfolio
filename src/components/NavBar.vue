<script setup>
import { ref, onMounted } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggle } = useDarkMode()
const scrolled = ref(false)
const mobileOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
})

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <nav :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'glass py-3 shadow-xl shadow-black/30' : 'py-5 bg-transparent']">
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <!-- Brand -->
      <a href="#hero" class="group font-black text-lg tracking-tight transition-colors duration-300"
        :class="isDark ? 'text-white hover:text-indigo-400' : 'text-slate-900 hover:text-indigo-600'">
        Axumawit<span class="text-indigo-500">.</span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a v-for="link in links" :key="link.href" :href="link.href"
          :class="['relative text-sm font-medium transition-colors duration-300 group', isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900']">
          {{ link.label }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300"
            style="background: linear-gradient(90deg, #6366f1, #8b5cf6);"></span>
        </a>

        <!-- Theme Toggle -->
        <button @click="toggle" aria-label="Toggle theme"
          class="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
          :class="isDark ? 'glass-light text-slate-400 hover:text-amber-400' : 'bg-slate-100 text-slate-600 hover:text-indigo-600 border border-slate-200'">
          <!-- Sun icon (shown in dark mode → click to go light) -->
          <svg v-if="isDark" class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
          <!-- Moon icon (shown in light mode → click to go dark) -->
          <svg v-else class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>

        <a href="https://github.com/axumawit21" target="_blank" rel="noopener"
          class="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white">
          <span class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </span>
        </a>
      </div>

      <!-- Mobile Toggle -->
      <div class="md:hidden flex items-center gap-2">
        <button @click="toggle" aria-label="Toggle theme"
          class="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
          :class="isDark ? 'text-slate-400 hover:text-amber-400' : 'text-slate-600 hover:text-indigo-600'">
          <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>
        <button @click="mobileOpen = !mobileOpen" aria-label="Toggle menu"
          :class="isDark ? 'text-white' : 'text-slate-900'">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="mobileOpen" class="md:hidden glass mt-2 mx-4 rounded-2xl p-4 space-y-1">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="mobileOpen = false"
          :class="['block px-4 py-3 rounded-xl text-sm font-medium transition-all', isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100']">
          {{ link.label }}
        </a>
        <a href="https://github.com/axumawit21" target="_blank" rel="noopener"
          class="block px-4 py-3 rounded-xl text-sm font-bold text-indigo-400 hover:bg-indigo-500/10 transition-all">
          GitHub →
        </a>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
