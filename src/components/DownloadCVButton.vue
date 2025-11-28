<!-- src/components/DownloadCVButton.vue -->
<template>
  <a
    :href="cvUrl"
    download="Sreyneath_Rom_CV.pdf"
    class="group relative inline-flex items-center gap-3.5 overflow-hidden rounded-2xl px-9 py-4.5 font-bold text-lg tracking-wide shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-transparent"
    :class="[buttonBg, buttonText, buttonRing]"
    aria-label="Download Sreyneath Rom's CV as PDF"
  >
    <!-- Animated shine sweep -->
    <span
      class="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-transform duration-1000 group-hover:translate-x-full"
    ></span>

    <!-- Download icon with subtle bounce on hover -->
    <span
      class="material-symbols-outlined text-2xl transition-transform duration-300 group-hover:translate-y-1"
    >
      download
    </span>

    <span class="relative z-10">Download CV</span>

    <!-- Optional: small file indicator -->
    <span class="text-xs opacity-80 ml-1">PDF</span>
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'
import cvUrl from '@/assets/Sreyneath_Rom_CV.pdf' // Local asset import (uncomment if using local file)

const { currentTheme } = useDarkMode()


// Or use GitHub raw:
// const cvUrl = 'https://raw.githubusercontent.com/Sreyneath-Rom/portfolio/main/public/Sreyneath_Rom_CV.pdf'

const buttonBg = computed(() => {
  const theme = currentTheme.value
  const map = {
    Light: 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white',
    Dark: 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-900',
    Sepia: 'bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white',
    Blue: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white',
    Purple: 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white',
    Green: 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white',
    Orange: 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white',
    Teal: 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white',
    Pink: 'bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white',
    Midnight: 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white',
  }
  return map[theme] || map.Dark
})

const buttonText = computed(() => {
  return ['Light', 'Sepia', 'Blue', 'Purple', 'Green', 'Orange', 'Teal', 'Pink', 'Midnight'].includes(currentTheme.value)
    ? 'text-white'
    : 'text-gray-900'
})

const buttonRing = computed(() => {
  const map = {
    Light: 'focus:ring-gray-500',
    Dark: 'focus:ring-gray-400',
    Sepia: 'focus:ring-amber-500',
    Blue: 'focus:ring-blue-500',
    Purple: 'focus:ring-purple-500',
    Green: 'focus:ring-green-500',
    Orange: 'focus:ring-orange-500',
    Teal: 'focus:ring-teal-500',
    Pink: 'focus:ring-pink-500',
    Midnight: 'focus:ring-indigo-500',
  }
  return map[currentTheme.value] || 'focus:ring-gray-400'
})
</script>

<style scoped>
/* Extra smooth shine animation */
.group:hover span:first-child {
  animation: shine 1.2s ease-in-out;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) skewX(-12deg);
  }
  100% {
    transform: translateX(100%) skewX(-12deg);
  }
}
</style>