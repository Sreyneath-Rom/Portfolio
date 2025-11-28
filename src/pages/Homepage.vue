<!-- src/pages/Homepage.vue -->
<template>
  <div class="relative min-h-screen overflow-hidden" :class="[bgClass, textClass]">
    <!-- Animated Background Gradient (theme-aware) -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0" :class="gradientClass"></div>
      <div class="absolute inset-0 bg-black/20 backdrop-blur-3xl"></div>
    </div>

    <!-- Floating Particles -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="floating-particles">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="relative max-w-7xl mx-auto px-6 py-32 md:py-40 text-center flex flex-col items-center justify-center gap-12">
      <!-- Main Heading with Typed.js -->
      <h1 class="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight">
        <span ref="typedEl" class="inline-block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl"></span>
        <span class="block text-4xl md:text-5xl mt-6 opacity-90 font-bold" :class="accentClass">
          Full-Stack Developer
        </span>
      </h1>

      <!-- Subtitle -->
      <p class="text-xl md:text-2xl font-light opacity-90 max-w-4xl leading-relaxed">
        Crafting <span class="font-bold text-cyan-400">beautiful</span>,
        <span class="font-bold text-emerald-400">performant</span>, and
        <span class="font-bold text-pink-400">accessible</span> web experiences with passion and precision.
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-6 mt-10 items-center justify-center">
        <router-link
          to="/portfolio"
          class="group relative inline-flex items-center gap-4 px-10 py-5 rounded-2xl font-bold text-lg tracking-wide overflow-hidden shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl"
          :class="[primaryButtonBg, 'text-white']"
        >
          <span class="relative z-10">View My Work</span>
          <span class="material-symbols-outlined text-2xl relative z-10 group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
          <!-- Shine effect -->
          <span class="absolute inset-0 -translate-x-full bg-white/30 skew-x-12 transition-transform duration-1000 group-hover:translate-x-full"></span>
        </router-link>

        <router-link
          to="/contact"
          class="inline-flex items-center gap-3 px-8 py-5 rounded-2xl font-semibold text-lg border-2 border-current hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          :class="accentClass"
        >
          <span class="material-symbols-outlined">mail</span>
          Let's Talk
        </router-link>
      </div>

      <!-- Tech Badges -->
      <div class="flex flex-wrap gap-4 mt-16 justify-center">
        <span
          v-for="tech in techStack"
          :key="tech"
          class="px-6 py-3 rounded-full text-sm font-medium backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          :class="badgeGlow"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span class="material-symbols-outlined text-5xl opacity-60" :class="accentClass">
          keyboard_arrow_down
        </span>
      </div>
    </section>

    <!-- About Section -->
    <Aboutpage />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Typed from 'typed.js'
import Aboutpage from '@/components/Aboutpage.vue'
import Footer from '@/components/Footer.vue'
import { useDarkMode } from '@/composables/useDarkMode'

const typedEl = ref(null)
const typedInstance = ref(null)

const { bgClass, textClass, accentClass, currentTheme } = useDarkMode()

// Dynamic gradient background
const gradientClass = computed(() => {
  const map = {
    Light: 'bg-gradient-to-br from-gray-100 via-white to-gray-50',
    Dark: 'bg-gradient-to-br from-gray-900 via-black to-purple-900',
    Sepia: 'bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100',
    Blue: 'bg-gradient-to-br from-blue-950 via-indigo-900 to-cyan-900',
    Purple: 'bg-gradient-to-br from-purple-950 via-pink-900 to-rose-900',
    Green: 'bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900',
    Orange: 'bg-gradient-to-br from-orange-900 via-red-900 to-amber-900',
    Teal: 'bg-gradient-to-br from-teal-950 via-cyan-900 to-blue-900',
    Pink: 'bg-gradient-to-br from-pink-950 via-rose-900 to-purple-900',
    Midnight: 'bg-gradient-to-br from-indigo-950 via-black to-purple-950',
  }
  return map[currentTheme.value] || 'bg-gradient-to-br from-gray-900 to-black'
})

// Primary button background
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

// Glassmorphic badge
const badgeGlow = computed(() => `
  bg-white/10 dark:bg-black/30 
  backdrop-blur-xl 
  border-white/30 
  ${textClass.value}
  hover:bg-white/20 dark:hover:bg-black/50
`)

const techStack = ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Laravel', 'Node.js', 'Git', 'Responsive Design']

onMounted(() => {
  if (!typedEl.value) return

  typedInstance.value = new Typed(typedEl.value, {
    strings: [
      'Welcome to My Portfolio',
      'I am Sreyneath Rom',
      'Full-Stack Developer',
      'Building the Future, One Line at a Time'
    ],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1500,
    smartBackspace: true,
    loop: true,
    showCursor: true,
    cursorChar: '<span class="text-cyan-400">|</span>',
  })
})

onUnmounted(() => {
  typedInstance.value?.destroy()
})
</script>

<style scoped>
/* Floating particles */
.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.floating-particles span {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 15s infinite linear;
  bottom: -100px;
}
.floating-particles span:nth-child(1) { left: 10%; animation-delay: 2s; }
.floating-particles span:nth-child(2) { left: 20%; animation-delay: 5s; }
.floating-particles span:nth-child(3) { left: 40%; animation-delay: 8s; }
.floating-particles span:nth-child(4) { left: 70%; animation-delay: 3s; }
.floating-particles span:nth-child(5) { left: 90%; animation-delay: 6s; }

@keyframes float {
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
}
</style>