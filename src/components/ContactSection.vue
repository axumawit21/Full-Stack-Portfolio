<script setup>
import { ref } from 'vue'
import { useReveal } from '@/composables/useFadeUp'

const { containerRef } = useReveal()
const form = ref({ name: '', email: '', subject: '', message: '' })
const isSubmitting = ref(false)
const submitted = ref(false)
const errorMsg = ref('')

const WEB3FORMS_KEY = 'd6cc95e2-9561-4fc4-b2dd-719fd6b6b1cd'

const handleSubmit = async () => {
  isSubmitting.value = true
  errorMsg.value = ''

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      }),
    })

    const data = await res.json()

    if (data.success) {
      submitted.value = true
      form.value = { name: '', email: '', subject: '', message: '' }
      setTimeout(() => { submitted.value = false }, 5000)
    } else {
      errorMsg.value = 'Something went wrong. Please try again.'
    }
  } catch {
    errorMsg.value = 'Network error. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/axumawit21',
    icon: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z',
    fill: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/axumawit-leake-38934626b',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    fill: true,
  },
  {
    label: 'Email',
    href: 'mailto:axumawitleake@gmail.com',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    fill: false,
  },
]
</script>

<template>
  <section id="contact" class="section-padding relative overflow-hidden">
    <div ref="containerRef" class="max-w-6xl mx-auto px-6">
      <!-- Section Title -->
      <div class="text-center mb-14 reveal-up">
        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-3">Contact Me</h2>
        <div class="w-12 h-1 mx-auto rounded-full" style="background: linear-gradient(90deg, #7c3aed, #a855f7);"></div>
      </div>

      <!-- Social Icons Row -->
      <div class="flex justify-center gap-5 mb-14 reveal-up delay-1">
        <a v-for="s in socials" :key="s.label" :href="s.href"
          target="_blank" rel="noopener" :aria-label="s.label"
          class="social-btn w-14 h-14 rounded-2xl flex items-center justify-center text-slate-400 hover:text-indigo-400">
          <svg class="w-6 h-6" :fill="s.fill ? 'currentColor' : 'none'" :stroke="s.fill ? 'none' : 'currentColor'" viewBox="0 0 24 24">
            <path v-if="!s.fill" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="s.icon"/>
            <path v-else :d="s.icon"/>
          </svg>
        </a>
      </div>

      <!-- Contact Form -->
      <div class="max-w-2xl mx-auto reveal-up delay-2">
        <form @submit.prevent="handleSubmit" class="glass-card rounded-2xl p-8 space-y-5">
          <Transition name="fade">
            <div v-if="submitted" class="flex items-center gap-3 p-4 rounded-xl text-emerald-400 text-sm font-medium"
              style="background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.2);">
              <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Message sent! I'll get back to you soon.
            </div>
          </Transition>
          <Transition name="fade">
            <div v-if="errorMsg" class="flex items-center gap-3 p-4 rounded-xl text-red-400 text-sm font-medium"
              style="background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.2);">
              {{ errorMsg }}
            </div>
          </Transition>

          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Name</label>
              <input v-model="form.name" type="text" required placeholder="Your name"
                class="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all"
                style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);" />
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Email</label>
              <input v-model="form.email" type="email" required placeholder="your@email.com"
                class="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all"
                style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Subject</label>
            <input v-model="form.subject" type="text" required placeholder="Project inquiry, collaboration..."
              class="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all"
              style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);" />
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Message</label>
            <textarea v-model="form.message" required rows="5" placeholder="Tell me about your project..."
              class="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none"
              style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);"></textarea>
          </div>

          <button type="submit" :disabled="isSubmitting"
            class="btn-primary w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed">
            <svg v-if="isSubmitting" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
