<script setup>
import { useReveal } from '@/composables/useFadeUp'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark } = useDarkMode()
const { containerRef } = useReveal()

const experiences = [
  {
    role: 'Full Stack Developer & UI/UX Designer',
    company: 'Vite Technologies',
    companyUrl: 'https://vitetechsolutions.com/',
    period: 'Recent',
    type: 'Work',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    glow: 'rgba(99,102,241,0.2)',
    description: 'Contributed to two major products — a billing dashboard and the AI Powered Adaptive Learning platform. Led UI/UX design for the billing dashboard and handled full-stack development with AI integration for the learning platform.',
    achievements: [
      'Designed and delivered a complete billing dashboard UI with Figma',
      'Developed the AI Powered Adaptive Learning platform end-to-end using the MEVN stack',
      'Integrated AI APIs for personalized content delivery and adaptive learning paths',
      'Built RESTful backend services with Node.js and NestJs',
      'Established reusable component libraries and design tokens',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'CodeAlpha',
    companyUrl: 'https://www.codealpha.tech/',
    period: '3 Months',
    type: 'Internship',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
    glow: 'rgba(168,85,247,0.2)',
    description: 'Completed a 3-month web development internship gaining hands-on experience building real-world web applications. Earned a certificate of completion.',
    achievements: [
      'Built and deployed web applications during the internship',
      'Collaborated with a team on frontend development tasks',
      'Gained practical experience with modern web technologies',
      'Received certificate of completion from CodeAlpha',
    ],
    certificate: true,
  },
]
</script>

<template>
  <section id="experience" class="section-padding relative overflow-hidden">
    <div :class="['absolute inset-0', isDark ? 'bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)]']" style="background-size: 50px 50px;"></div>

    <div ref="containerRef" class="max-w-4xl mx-auto px-6 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
          <span class="w-8 h-px bg-gradient-to-r from-transparent to-indigo-500"></span>
          Background
          <span class="w-8 h-px bg-gradient-to-r from-indigo-500 to-transparent"></span>
        </span>
        <h2 :class="['text-4xl md:text-5xl font-extrabold mb-4', isDark ? 'text-white' : 'text-slate-900']">Experience</h2>
        <p :class="['text-lg max-w-xl mx-auto', isDark ? 'text-slate-500' : 'text-slate-500']">My professional journey building products and growing as a developer.</p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <div class="absolute left-6 top-0 bottom-0 w-px hidden md:block"
          style="background: linear-gradient(to bottom, rgba(99,102,241,0.5), rgba(168,85,247,0.3), transparent);"></div>

        <div class="space-y-8">
          <div v-for="(exp, i) in experiences" :key="exp.company"
            :class="['relative md:pl-16', i % 2 === 0 ? 'reveal-left' : 'reveal-right', `delay-${i+1}`]">

            <!-- Timeline dot -->
            <div :class="['absolute left-4 top-8 w-4 h-4 rounded-full hidden md:block -translate-x-1/2 border-2', isDark ? 'border-[#080b18]' : 'border-white']"
              :style="`background: linear-gradient(135deg, ${exp.glow.replace('0.2','1')}, #8b5cf6);`"></div>

            <!-- Card -->
            <div class="group glass rounded-2xl p-6 card-hover relative overflow-hidden neon-border">
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                :style="`background: radial-gradient(circle at 0% 0%, ${exp.glow} 0%, transparent 60%);`"></div>

              <div class="relative z-10">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div class="flex items-center gap-3">
                    <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      :style="`background: linear-gradient(135deg, ${exp.glow}, transparent); border: 1px solid ${exp.glow};`">
                      <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="exp.icon"/>
                      </svg>
                    </div>
                    <div>
                      <h3 :class="['font-bold text-base', isDark ? 'text-white' : 'text-slate-900']">{{ exp.role }}</h3>
                      <p :class="['text-sm', isDark ? 'text-slate-500' : 'text-slate-500']">
                        <a v-if="exp.companyUrl" :href="exp.companyUrl" target="_blank" rel="noopener"
                          :class="['hover:text-indigo-400 transition-colors duration-300 underline decoration-dotted underline-offset-2', isDark ? 'text-slate-400' : 'text-slate-500']">
                          {{ exp.company }}
                        </a>
                        <span v-else>{{ exp.company }}</span>
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 flex-shrink-0">
                    <span class="text-xs font-bold px-3 py-1 rounded-full text-white"
                      :style="`background: linear-gradient(135deg, ${exp.glow.replace('0.2','0.4')}, rgba(139,92,246,0.3));`">
                      {{ exp.type }}
                    </span>
                    <span :class="['text-xs font-mono', isDark ? 'text-slate-600' : 'text-slate-400']">{{ exp.period }}</span>
                  </div>
                </div>

                <p :class="['text-sm leading-relaxed mb-4', isDark ? 'text-slate-400' : 'text-slate-600']">{{ exp.description }}</p>

                <ul class="space-y-2">
                  <li v-for="a in exp.achievements" :key="a" :class="['flex items-start gap-2 text-sm', isDark ? 'text-slate-400' : 'text-slate-600']">
                    <svg class="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                    </svg>
                    {{ a }}
                  </li>
                </ul>

                <div v-if="exp.certificate" class="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-400"
                  style="background: rgba(245,158,11,0.08); border: 1px solid rgba(245,158,11,0.2);">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                  Certificate of Completion · CodeAlpha
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
