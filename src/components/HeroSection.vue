<script setup>
import { ref, onMounted } from 'vue'
import profileImg from '@/assets/portfolio img.png'

const visible = ref(false)

onMounted(() => {
  setTimeout(() => { visible.value = true }, 100)
})

const personalInfo = [
  { label: 'Age', value: '23', color: '#6366f1' },
  { label: 'Degree', value: 'Bachelors', color: '#8b5cf6' },
  { label: 'City', value: 'Addis Ababa, Ethiopia', color: '#06b6d4' },
  { label: 'Freelancer', value: 'Available', color: '#10b981' },
]
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center relative overflow-hidden pt-20 pb-10">
    <!-- Subtle glow behind photo -->
    <div class="absolute top-1/4 right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 65%);"></div>

    <div class="max-w-6xl mx-auto px-6 w-full">
      <div class="grid md:grid-cols-[1fr_auto] gap-10 items-center">

        <!-- Left: Text Content -->
        <div :class="['transition-all duration-700', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-2">
            Axumawit Leake
            <span class="text-slate-500 font-normal text-xl sm:text-2xl md:text-3xl"> | </span>
            <span class="text-gradient text-xl sm:text-2xl md:text-3xl font-semibold">full stack developer</span>
          </h1>

          <!-- Brief About Me -->
          <p class="text-slate-400 text-base sm:text-lg leading-relaxed mt-4 mb-2 max-w-xl">
            A passionate Full Stack Developer & UI/UX Designer from Ethiopia with a B.Sc. in Information Technology. I craft modern, scalable web applications using the
            <span class="text-indigo-400 font-semibold">MEVN stack</span> turning ideas into polished digital experiences.
          </p>

          <!-- Personal Info Bullets -->
          <div class="flex flex-wrap gap-x-6 gap-y-2 mt-5 mb-8">
            <div v-for="info in personalInfo" :key="info.label"
              class="flex items-center gap-2 text-sm">
              <span class="info-dot" :style="`background: ${info.color};`"></span>
              <span class="text-slate-500">{{ info.label }}:</span>
              <span class="text-slate-300 font-medium">{{ info.value }}</span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4">
            <a href="#contact"
              class="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-white text-sm">
              Contact me
            </a>
            <a href="#portfolio"
              class="btn-outline inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-slate-300 text-sm">
              View my work
            </a>
          </div>
        </div>

        <!-- Right: Profile Photo -->
        <div :class="['flex justify-center md:justify-end transition-all duration-700 delay-200', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
          style="transition-delay: 0.3s;">
          <div class="relative">
            <!-- Gradient ring -->
            <div class="photo-blob w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
              <img :src="profileImg" alt="Axumawit Leake"
                class="w-full h-full object-cover bg-[#0c0e1a]" />
            </div>
            <!-- Status badge -->
           
          </div>
        </div>
      </div>
    </div>

    <!-- Rainbow accent line at bottom -->
    <div class="absolute bottom-0 left-0 right-0 rainbow-line"></div>
  </section>
</template>
