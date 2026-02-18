import { ref, onMounted, onUnmounted, nextTick } from 'vue'

export function useReveal() {
    const containerRef = ref(null)
    let observer = null

    const SELECTORS = '.reveal-clip, .reveal-left, .reveal-right, .reveal-scale, .reveal-flip'

    onMounted(async () => {
        // Wait for DOM to fully render
        await nextTick()

        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                        // Unobserve after triggering so it only animates once
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
        )

        // Observe within this container only
        const root = containerRef.value || document
        root.querySelectorAll(SELECTORS).forEach(el => observer.observe(el))
    })

    onUnmounted(() => {
        if (observer) observer.disconnect()
    })

    return { containerRef }
}

// Alias for backward compat
export { useReveal as useFadeUp }
