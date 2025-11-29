<template>
  <div class="about-root min-h-screen py-20 px-6 transition-colors duration-500" :class="themeClasses">
    <!-- Heading -->
    <h1
      class="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
    >
      About Me
    </h1>

    <!-- Profile Card -->
    <div class="max-w-4xl mx-auto">
      <div class="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
        <!-- Avatar with glow -->
        <div class="flex-shrink-0 relative w-44 h-44 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20 transition-all duration-500 hover:ring-white/40 hover:scale-105" style="isolation: isolate">
          <span aria-hidden="true" class="absolute -inset-6 rounded-full opacity-80 animate-pulse" :style="glowStyle"></span>
          <img :src="img1" alt="Sreyneath Rom – Full-Stack Developer" loading="lazy" class="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" style="mix-blend-mode: luminosity; filter: contrast(1.2) saturate(1.3);" />
          <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(circle at 50% 30%, transparent 40%, rgba(0,0,0,0.4) 100%)"></div>
        </div>

        <!-- Info Section -->
        <div class="flex-1 text-center md:text-left space-y-7">
          <div>
            <h2 class="text-4xl md:text-5xl font-black tracking-tight">
              <span class="bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">Sreyneath Rom</span>
            </h2>
            <p class="mt-3 text-xl font-medium">Full-Stack Developer</p>
            <p class="text-sm opacity-75">Phnom Penh, Cambodia • Born in Siem Reap • Age 21</p>
          </div>

          <p class="text-lg leading-relaxed max-w-2xl">
            Passionate about building <strong class="text-cyan-400">beautiful</strong>, 
            <strong class="text-emerald-400">performant</strong>, and 
            <strong class="text-pink-400">accessible</strong> web experiences with 
            <strong class="text-yellow-400">Vue.js</strong>, <strong class="text-purple-400">Laravel</strong>, 
            and modern tools. Always learning. Always creating.
          </p>

          <!-- Skill Badges -->
          <div class="flex flex-wrap gap-3 justify-center md:justify-start">
            <span v-for="skill in skills" :key="skill" class="px-5 py-2.5 rounded-full text-sm font-bold shadow-lg backdrop-blur-md border border-white/30">
              {{ skill }}
            </span>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-5 mt-10 justify-center md:justify-start">
            <DownloadCVButton />
            <a href="mailto:romsreyneath4@gmail.com" class="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-bold text-lg border-2 border-current hover:bg-white/10 transition-all duration-300">
              <span class="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">mail</span>
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills Marquee -->
    <section class="mt-24">
      
      <Marquee />
    </section>

    <!-- Social Links -->
    <section class="mt-28 text-center">
      <p class="text-xl mb-10">Let's connect!</p>
      <div class="flex justify-center gap-10">
        <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer" class="group relative" :aria-label="`Visit my ${social.name} profile`">
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-2 group-focus:scale-125 shadow-xl" :class="social.bg">
            <svg :viewBox="social.viewBox" class="w-9 h-9 text-white" fill="currentColor">
              <path :d="social.path" />
            </svg>
          </div>
          <span class="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap">
            {{ social.name }}
            <span class="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-gray-900"></span>
          </span>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Marquee from '@/components/Marquee.vue'
import DownloadCVButton from '@/components/DownloadCVButton.vue'
import img1 from '@/assets/image/1.png'

const skills = ['Vue.js', 'Laravel', 'Tailwind CSS', 'TypeScript', 'Responsive Design', 'UI/UX', 'Git']

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Sreyneath-Rom', bg: 'bg-gray-800 hover:bg-gray-600', viewBox: '0 0 24 24', path: 'M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1 .8 2v3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z' },
  { name: 'Email', url: 'mailto:romsreyneath4@gmail.com', bg: 'bg-rose-600 hover:bg-rose-500', viewBox: '0 0 24 24', path: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sreyneath-rom-69b2a5321/', bg: 'bg-blue-700 hover:bg-blue-600', viewBox: '0 0 24 24', path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07 1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zm1.78 13.02H3.55V9h3.57v11.45z' },
  { name: 'Facebook', url: 'https://www.facebook.com/neath1fly', bg: 'bg-blue-600 hover:bg-blue-500', viewBox: '0 0 24 24', path: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2v-2c0-2.2 1.8-4 4-4h2v3h-2c-1.1 0-2 .9-2 2v2h4v3h-4v4.8c4.56-.93 8-4.96 8-9.8z' },
]

import { useDarkMode } from '@/composables/useDarkMode'
const { currentTheme } = useDarkMode()

const themeClasses = computed(() => {
  const map = {
    Light: 'bg-gradient-to-br from-gray-50 to-gray-100',
    Dark: 'bg-gradient-to-br from-gray-900 via-black to-gray-900',
    Sepia: 'bg-gradient-to-br from-yellow-50 to-amber-100',
    Blue: 'bg-gradient-to-br from-blue-950 to-indigo-950',
    Purple: 'bg-gradient-to-br from-purple-950 to-pink-950',
    Green: 'bg-gradient-to-br from-emerald-950 to-teal-950',
    Orange: 'bg-gradient-to-br from-orange-950 to-red-950',
    Teal: 'bg-gradient-to-br from-teal-950 to-cyan-950',
    Pink: 'bg-gradient-to-br from-pink-950 to-rose-950',
    Midnight: 'bg-gradient-to-br from-indigo-950 via-black to-purple-950',
  }
  return map[currentTheme.value] || 'bg-gradient-to-br from-gray-900 to-black'
})

const glowStyle = computed(() => {
  const gradients = {
    Light: 'conic-gradient(from 0deg, #fbbf24, #f472b6, #818cf8, #34d399, #fbbf24)',
    Dark: 'conic-gradient(from 0deg, #60a5fa, #c084fc, #86efac, #f87171, #60a5fa)',
  }
  return { background: gradients[currentTheme.value] || gradients.Dark, filter: 'blur(32px)' }
})
</script>
