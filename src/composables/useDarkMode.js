import { ref, watchEffect } from 'vue'

const isDark = ref(true)

// Initialize from localStorage or default to dark
const stored = localStorage.getItem('theme')
if (stored === 'light') {
    isDark.value = false
} else {
    isDark.value = true
}

// Sync class on <html>
watchEffect(() => {
    const html = document.documentElement
    if (isDark.value) {
        html.classList.add('dark')
    } else {
        html.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
})

export function useDarkMode() {
    function toggle() {
        isDark.value = !isDark.value
    }
    return { isDark, toggle }
}
