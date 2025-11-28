<template>
  <footer class="relative overflow-hidden py-16 mt-32" :class="footerBg">
    <!-- Subtle animated gradient overlay -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0" :class="gradientOverlay"></div>
      <div class="absolute inset-0 bg-black/40 backdrop-blur-3xl"></div>
    </div>

    <!-- Floating particles (same as homepage) -->
    <div class="absolute inset-0 pointer-events-none opacity-30">
      <div class="floating-particles">
        <span></span><span></span><span></span><span></span>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div class="text-center space-y-8">
        <!-- Main Footer Text -->
        <div>
          <h3 class="text-3xl md:text-4xl font-bold tracking-tight" :class="accentClass">
            Let's Build Something Amazing
          </h3>
          <p class="mt-4 text-lg opacity-90" :class="textClass">
            Open to full-time opportunities • Freelance • Collaboration
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-5 justify-center items-center mt-10">
          <a
            href="mailto:romsreyneath4@gmail.com"
            class="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl"
            :class="[primaryButtonBg, 'text-white']"
          >
            <span class="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
              mail
            </span>
            Get In Touch
            <span class="absolute inset-0 translate-x-[-100%] bg-white/20 skew-x-12 transition-transform duration-1000 group-hover:translate-x-full"></span>
          </a>

          <a
            href="https://github.com/Sreyneath-Rom/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-semibold border-2 border-current hover:bg-white/10 backdrop-blur-md transition-all duration-300"
            :class="accentClass"
          >
            <span class="material-symbols-outlined text-2xl">code</span>
            View Source Code
          </a>
        </div>

        <!-- Copyright & Credits -->
        <div class="pt-12 border-t border-white/20 mt-16">
          <p class="text-sm opacity-70" :class="textClass">
            © {{ year }} <span class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Sreyneath Rom</span>. All rights reserved.
          </p>
          <p class="text-xs opacity-50 mt-2">
            Crafted with <span class="text-red-500">♥</span> using
            <strong>Vue 3</strong> • <strong>Tailwind CSS</strong> • <strong>TypeScript</strong>
          </p>
        </div>

        <!-- Back to Top Button -->
        <button
          @click="scrollToTop"
          class="absolute -top-10 left-1/2 -translate-x-1/2 group p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <span class="material-symbols-outlined text-3xl" :class="accentClass">
            arrow_upward
          </span>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { bgClass, textClass, accentClass, currentTheme } = useDarkMode()
const year = new Date().getFullYear()

// Dynamic footer background with theme-specific gradients
const footerBg = computed(() => {
  const map = {
    Light: 'bg-gradient-to-t from-gray-100 to-transparent',
    Dark: 'bg-gradient-to-t from-black via-gray-900 to-transparent',
    Sepia: 'bg-gradient-to-t from-amber-100 to-transparent',
    Blue: 'bg-gradient-to-t from-blue-950 to-transparent',
    Purple: 'bg-gradient-to-t from-purple-950 to-transparent',
    Green: 'bg-gradient-to-t from-emerald-950 to-transparent',
    Orange: 'bg-gradient-to-t from-orange-900 to-transparent',
    Teal: 'bg-gradient-to-t from-teal-950 to-transparent',
    Pink: 'bg-gradient-to-t from-pink-950 to-transparent',
    Midnight: 'bg-gradient-to-t from-indigo-950 to-transparent',
  }
  return map[currentTheme.value] || 'bg-gradient-to-t from-black to-transparent'
})

const gradientOverlay = computed(() => {
  const map = {
    Light: 'bg-gradient-to-b from-transparent via-gray-50 to-gray-200',
    Dark: 'bg-gradient-to-b from-purple-900/20 via-transparent to-pink-900/20',
    Sepia: 'bg-gradient-to-b from-amber-200/30 to-orange-200/20',
    Blue: 'bg-gradient-to-b from-cyan-900/30 to-blue-900/20',
    Purple: 'bg-gradient-to-b from-purple-800/30 to-pink-800/20',
    Green: 'bg-gradient-to-b from-emerald-900/30 to-teal-900/20',
    Orange: 'bg-gradient-to-b from-orange-900/30 to-red-900/20',
    Teal: 'bg-gradient-to-b from-teal-900/30 to-cyan-900/20',
    Pink: 'bg-gradient-to-b from-pink-900/30 to-rose-900/20',
    Midnight: 'bg-gradient-to-b from-indigo-900/40 to-purple-900/30',
  }
  return map[currentTheme.value] || 'bg-gradient-to-b from-purple-900/20 to-transparent'
})

const primaryButtonBg = computed(() => {
  const map = {
    Light: 'bg-gray-800 hover:bg-gray-900',
    Dark: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
    Sepia: 'bg-gradient-to-r from-amber-600 to-orange-600',
    Blue: 'bg-gradient-to-r from-blue-600 to-cyan-600',
    Purple: 'bg-gradient-to-r from-purple-600 to-pink-600',
    Green: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    Orange: 'bg-gradient-to-r from-orange-600 to-red-600',
    Teal: 'bg-gradient-to-r from-teal-600 to-cyan-600',
    Pink: 'bg-gradient-to-r from-pink-600 to-rose-600',
    Midnight: 'bg-gradient-to-r from-indigo-600 to-purple-600',
  }
  return map[currentTheme.value] || 'bg-gradient-to-r from-purple-600 to-pink-600'
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
/* Re-use floating particles from homepage */
.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.floating-particles span {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  animation: float 20s infinite linear;
  bottom: -50px;
}
.floating-particles span:nth-child(1) { left: 15%; animation-delay: 1s; }
.floating-particles span:nth-child(2) { left: 35%; animation-delay: 4s; }
.floating-particles span:nth-child(3) { left: 60%; animation-delay: 7s; }
.floating-particles span:nth-child(4) { left: 85%; animation-delay: 3s; }

@keyframes float {
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  10% { opacity: 0.8; }
  90% { opacity: 0.8; }
  100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
}
</style>