<template>
  <div class="min-h-screen pt-20 px-6" :class="[bgClass, textClass]">
    <section class="max-w-6xl mx-auto py-20 text-center flex flex-col items-center gap-6">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight" :class="accentClass" aria-hidden="false">
        <span ref="typedEl" class="inline-block"></span>
      </h1>

      <p class="text-lg sm:text-xl opacity-85 max-w-2xl">
        Explore my journey preparing for a career in the IT sector — projects, skills, and learnings.
      </p>

      <div class="flex gap-4 items-center flex-wrap justify-center">
        <router-link
          to="/portfolio"
          :class="['inline-block px-6 py-3 rounded-xl font-semibold transition transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2', buttonClass]"
          aria-label="View portfolio"
        >
          View Portfolio
        </router-link>

        <router-link
          to="/contact"
          class="inline-block px-6 py-3 rounded-xl border border-current bg-transparent hover:bg-white/5 transition text-sm"
          aria-label="Contact me"
        >
          Contact
        </router-link>
      </div>

      <div class="flex gap-2 mt-4 flex-wrap justify-center items-center">
        <!-- simple badges for quick scan -->
        <span class="px-3 py-1 rounded-full bg-white/8 text-sm">Vue 3</span>
        <span class="px-3 py-1 rounded-full bg-white/8 text-sm">TypeScript</span>
        <span class="px-3 py-1 rounded-full bg-white/8 text-sm">Tailwind</span>
        <span class="px-3 py-1 rounded-full bg-white/8 text-sm">Node</span>
      </div>
    </section>

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
let typedInstance = null

const { bgClass, textClass, accentClass, currentTheme } = useDarkMode()

// map theme names to concrete Tailwind classes to avoid dynamic class generation issues
const buttonClass = computed(() => {
  const theme = currentTheme && currentTheme.value ? String(currentTheme.value).toLowerCase() : ''
  const map = {
    blue: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400',
    green: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-400',
    purple: 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-400',
    red: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-400',
    yellow: 'bg-yellow-500 hover:bg-yellow-600 text-black focus:ring-yellow-300',
    teal: 'bg-teal-600 hover:bg-teal-700 text-white focus:ring-teal-400',
    indigo: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-400',
  }
  return map[theme] ?? 'bg-gray-700 hover:bg-gray-800 text-white focus:ring-gray-500'
})

onMounted(() => {
  if (!typedEl.value) return
  typedInstance = new Typed(typedEl.value, {
    strings: ['Welcome to My Portfolio', 'I am Sreyneath Rom', 'Full‑Stack Developer'],
    typeSpeed: 70,
    backSpeed: 35,
    backDelay: 1200,
    smartBackspace: true,
    loop: true,
    showCursor: true,
    cursorChar: '|',
  })
})

onUnmounted(() => {
  if (typedInstance) {
    typedInstance.destroy()
    typedInstance = null
  }
})
</script>