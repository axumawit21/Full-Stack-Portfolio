<script setup>
import { useReveal } from '@/composables/useFadeUp'

const { containerRef } = useReveal()

const experiences = [
  {
    title: 'Bachelor of Science in Information Technology',
    subtitle: 'Mekelle Institute of Technology · Graduated 2026',
    description: 'Graduated with a BSc in Information Technology, gaining expertise in programming, data structures, algorithms, software engineering, and modern web development practices.',
    type: 'Education',
    color: '#06b6d4',
  },
  {
    title: 'Web Development Intern',
    subtitle: 'CodeAlpha · 3 Months',
    description: 'Completed a 3-month web development internship gaining hands-on experience building real-world web applications. Collaborated with teams on frontend tasks and earned a certificate of completion.',
    type: 'Internship',
    color: '#8b5cf6',
  },
  {
    title: 'Frontend & Backend Training',
    subtitle: 'Self-Directed Learning',
    description: 'Deepened expertise in Vue 3, Node.js, Express, and MongoDB through intensive self-study and personal projects. Built multiple full-stack applications from scratch.',
    type: 'Learning',
    color: '#f59e0b',
  },
  {
    title: 'Full Stack Developer & UI/UX Designer',
    subtitle: 'Vite Technologies · Current',
    description: 'Contributing to major products including a billing dashboard and the AI Powered Adaptive Learning platform. Leading UI/UX design and handling full-stack development with AI integration.',
    type: 'Work',
    color: '#6366f1',
  },
]
</script>

<template>
  <section id="resume" class="section-padding relative overflow-hidden">
    <div ref="containerRef" class="max-w-4xl mx-auto px-6">
      <!-- Section Title -->
      <div class="text-center mb-14 reveal-up">
        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-3">Resume</h2>
        <div class="w-12 h-1 mx-auto rounded-full" style="background: linear-gradient(90deg, #7c3aed, #a855f7);"></div>
      </div>

      <!-- Timeline -->
      <div class="relative pl-8 md:pl-12">
        <!-- Vertical line -->
        <div class="absolute left-3 md:left-5 top-2 bottom-2 w-px timeline-line"></div>

        <div class="space-y-8">
          <div v-for="(exp, i) in experiences" :key="exp.title"
            :class="['relative reveal-left', `delay-${i+1}`]">

            <!-- Timeline dot -->
            <div class="absolute -left-5 md:-left-7 top-1.5 w-4 h-4 rounded-full border-[3px] border-[#06080e]"
              :style="`background: ${exp.color};`">
            </div>

            <!-- Card -->
            <div class="glass-card rounded-2xl p-5 md:p-6 card-hover group">
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 class="font-bold text-white text-base">{{ exp.title }}</h3>
                  <p class="text-sm text-slate-500">{{ exp.subtitle }}</p>
                </div>
                <span class="text-xs font-bold px-3 py-1 rounded-full text-white flex-shrink-0 self-start"
                  :style="`background: ${exp.color}30; color: ${exp.color}; border: 1px solid ${exp.color}40;`">
                  {{ exp.type }}
                </span>
              </div>
              <p class="text-sm text-slate-400 leading-relaxed">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
