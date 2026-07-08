<script setup>
import { ref, onMounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
})

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Resume', href: '#resume' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <nav :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'glass py-2.5 shadow-xl shadow-black/40' : 'py-4 bg-transparent']">
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <!-- Brand -->
      <a href="#hero" class="group font-black text-lg tracking-tight text-white hover:text-indigo-400 transition-colors duration-300">
        Axumawit<span class="text-violet-500">.</span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-7">
        <a v-for="link in links" :key="link.label" :href="link.href"
          class="relative text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 group">
          {{ link.label }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300"
            style="background: linear-gradient(90deg, #7c3aed, #a855f7);"></span>
        </a>
      </div>

      <!-- Mobile Toggle -->
      <div class="md:hidden">
        <button @click="mobileOpen = !mobileOpen" aria-label="Toggle menu" class="text-white">
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
        <a v-for="link in links" :key="link.label" :href="link.href" @click="mobileOpen = false"
          class="block px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all">
          {{ link.label }}
        </a>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
