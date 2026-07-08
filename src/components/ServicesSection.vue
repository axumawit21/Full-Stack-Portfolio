<script setup>
import { useReveal } from '@/composables/useFadeUp'

const { containerRef } = useReveal()

const services = [
  {
    title: 'Speed & Optimization',
    description: 'High-performance applications with fast loading times, efficient bundling, and optimized rendering for the best user experience.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    color: '#f59e0b',
  },
  {
    title: 'Full-Stack Solutions',
    description: 'Complete end to end application development from database design to beautiful, responsive frontend interfaces and deployment.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    color: '#6366f1',
  },
  {
    title: 'Backend Development',
    description: 'Scalable server-side architecture with REST APIs, database design, authentication, and secure data management using Node.js.',
    icon: 'M5 12h14M12 5l7 7-7 7',
    color: '#10b981',
  },
  {
    title: 'Frontend Development',
    description: 'Building responsive, pixel-perfect user interfaces using Vue 3 and modern CSS frameworks for seamless cross-device experiences.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    color: '#8b5cf6',
  },
]
</script>

<template>
  <section id="services" class="section-padding relative overflow-hidden">
    <div ref="containerRef" class="max-w-6xl mx-auto px-6">
      <!-- Section Title -->
      <div class="text-center mb-14 reveal-up">
        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-3">Services</h2>
        <div class="w-12 h-1 mx-auto rounded-full" style="background: linear-gradient(90deg, #7c3aed, #a855f7);"></div>
      </div>

      <!-- Service Cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          :class="['reveal-scale glass-card rounded-2xl p-6 card-hover group text-center', `delay-${i+1}`]"
        >
          <!-- Icon -->
          <div class="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center service-icon"
            :style="`border-color: ${service.color}30;`">
            <svg class="w-7 h-7" :style="`color: ${service.color};`" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="service.icon"/>
            </svg>
          </div>

          <h3 class="font-bold text-white text-sm mb-2">{{ service.title }}</h3>
          <p class="text-xs text-slate-500 leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
