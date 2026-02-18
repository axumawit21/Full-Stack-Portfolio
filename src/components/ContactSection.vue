<script setup>
import { ref } from 'vue'
import { useReveal } from '@/composables/useFadeUp'

const { containerRef } = useReveal()
const form = ref({ name: '', email: '', subject: '', message: '' })
const isSubmitting = ref(false)
const submitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  await new Promise(r => setTimeout(r, 1500))
  isSubmitting.value = false
  submitted.value = true
  form.value = { name: '', email: '', subject: '', message: '' }
  setTimeout(() => { submitted.value = false }, 5000)
}

const contactInfo = [
  { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Email', value: 'axumawitleake@gmail.com', href: 'mailto:axumawitleake@gmail.com' },
  { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', label: 'Location', value: 'Mekelle, Ethiopia', href: null },
  { icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Availability', value: 'Open to opportunities', href: null },
]
</script>

<template>
  <section id="contact" class="section-padding relative overflow-hidden">
    <div class="absolute top-0 left-0 w-96 h-96 pointer-events-none"
      style="background: radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%);"></div>
    <div class="absolute bottom-0 right-0 w-80 h-80 pointer-events-none"
      style="background: radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%);"></div>

    <div ref="containerRef" class="max-w-6xl mx-auto px-6 relative z-10">
      <!-- Section Title — always visible -->
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
          <span class="w-8 h-px bg-gradient-to-r from-transparent to-indigo-500"></span>
          Contact
          <span class="w-8 h-px bg-gradient-to-r from-indigo-500 to-transparent"></span>
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4">Let's Work Together</h2>
        <p class="text-slate-500 text-lg max-w-xl mx-auto">Have a project in mind? I'd love to hear from you.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Left -->
        <div class="reveal-left space-y-8">
          <div>
            <h3 class="text-2xl font-bold text-white mb-3">Ready to build something great?</h3>
            <p class="text-slate-400 leading-relaxed">
              I'm currently available for freelance projects and full-time opportunities. Whether you need a polished UI, a Vue 3 application, or a complete design system — let's talk.
            </p>
          </div>

          <div class="space-y-3">
            <a v-for="info in contactInfo" :key="info.label"
              :href="info.href || undefined"
              :class="['flex items-center gap-4 p-4 glass-light rounded-xl transition-all duration-300', info.href ? 'hover:border-indigo-500/30 hover:-translate-y-1 cursor-pointer' : 'cursor-default']"
            >
              <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style="background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.2);">
                <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="info.icon"/>
                </svg>
              </div>
              <div>
                <p class="text-xs text-slate-600 font-medium">{{ info.label }}</p>
                <p class="text-sm font-semibold text-slate-300">{{ info.value }}</p>
              </div>
            </a>
          </div>

          <div class="flex gap-3">
            <a href="https://github.com/axumawit21" target="_blank" rel="noopener"
              class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white glass-light hover:border-slate-500/40 transition-all duration-300 hover:-translate-y-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener"
              class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1"
              style="background: rgba(37,99,235,0.15); border: 1px solid rgba(37,99,235,0.25);">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <!-- Right -->
        <div class="reveal-right">
          <form @submit.prevent="handleSubmit" class="glass rounded-2xl p-8 space-y-5 neon-border">
            <Transition name="fade">
              <div v-if="submitted" class="flex items-center gap-3 p-4 rounded-xl text-emerald-400 text-sm font-medium"
                style="background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.2);">
                <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Message sent! I'll get back to you soon.
              </div>
            </Transition>

            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Name</label>
                <input v-model="form.name" type="text" required placeholder="Your name"
                  class="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all"
                  style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Email</label>
                <input v-model="form.email" type="email" required placeholder="your@email.com"
                  class="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all"
                  style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Subject</label>
              <input v-model="form.subject" type="text" required placeholder="Project inquiry, collaboration..."
                class="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all"
                style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Message</label>
              <textarea v-model="form.message" required rows="5" placeholder="Tell me about your project..."
                class="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none"
                style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);"></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting"
              class="btn-primary w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed">
              <span class="flex items-center gap-2">
                <svg v-if="isSubmitting" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                <svg v-if="!isSubmitting" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
