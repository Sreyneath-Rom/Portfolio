<template>
  <div :class="['min-h-screen transition-colors duration-700', bgClass]" :style="themeVars">
    <!-- Navigation -->
    <Navigation />

    <!-- Background gradient + overlay -->
    <div class="absolute inset-0 -z-20" :class="gradientClass"></div>
    <div class="absolute inset-0 -z-10 bg-black/20 backdrop-blur-3xl transition-opacity duration-700"></div>

    <!-- Main Hero Section -->
    <main class="relative pt-28 pb-16">
      <section class="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <!-- Left: Hero text -->
        <div class="space-y-6">
          <h1
            ref="heroTitle"
            class="leading-tight font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight transform transition-all duration-700"
            :class="titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          >
            <span ref="typedEl" class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400"></span>
            <span class="block mt-4 text-3xl md:text-4xl" :class="accentClass">Full-Stack Developer</span>
          </h1>

          <p class="max-w-2xl text-lg md:text-xl transition-all duration-700" :class="subVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'">
            Crafting <strong class="text-cyan-400">beautiful</strong>, <strong class="text-emerald-400">performant</strong>, and <strong class="text-pink-400">accessible</strong> web experiences.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mt-6" :class="ctasVisible ? 'opacity-100' : 'opacity-0'">
            <router-link
              to="/portfolio"
              class="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-bold shadow-lg transform transition duration-300 hover:scale-105"
              :class="[primaryButtonBg, 'text-white']"
            >
              View My Work
              <span class="material-symbols-outlined">arrow_forward</span>
            </router-link>
            <button
              @click="scrollToAbout"
              class="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold border-2 hover:bg-white/10 transition"
              :class="accentClass"
            >
              Let's Talk
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </button>
          </div>

          <div class="flex flex-wrap gap-3 mt-8">
            <span
              v-for="t in techStack"
              :key="t"
              class="px-4 py-2 rounded-full text-sm font-medium shadow backdrop-blur-md border"
              :class="badgeGlow"
            >
              {{ t }}
            </span>
          </div>
        </div>

        <!-- Right: Parallax Card -->
        <div class="flex justify-center md:justify-end relative">
          <div class="absolute -left-20 -top-20 w-40 h-40 rounded-full blur-3xl opacity-40" :class="orbClass"></div>

          <div
            ref="parallaxCard"
            @pointermove="onPointerMove"
            @pointerleave="resetPointer"
            class="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/10 overflow-hidden transform transition-all duration-300"
          >
            <div class="absolute inset-0 pointer-events-none" :style="cardInnerStyle">
              <div class="absolute inset-0" :class="innerGradient" />
            </div>
            <img src="@/assets/image/me.jpg" alt="Sreyneath" class="object-cover w-full h-full" />
            <div class="absolute bottom-4 left-4 text-left">
              <div class="text-sm font-semibold" :class="textClass">Sreyneath Rom</div>
              <div class="text-xs opacity-80" :class="textClass">Full-Stack Developer</div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section ref="aboutRef" class="max-w-6xl mx-auto px-6 py-16">
        <Aboutpage />
      </section>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, reactive } from 'vue'
import Typed from 'typed.js'
import Navigation from '@/components/Navigation.vue'
import Aboutpage from '@/components/Aboutpage.vue'
import Footer from '@/components/Footer.vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { currentTheme, bgClass, textClass, accentClass } = useDarkMode()

// Typed.js
const typedEl = ref<HTMLElement | null>(null)
let typedInstance: any = null

// Entrance animations
const titleVisible = ref(false)
const subVisible = ref(false)
const ctasVisible = ref(false)

// Tech stack badges
const techStack = ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Laravel', 'Node.js', 'Git', 'Responsive Design']
const badgeGlow = computed(() => `bg-white/10 dark:bg-black/30 backdrop-blur-xl border-white/30 ${textClass.value} hover:bg-white/20 dark:hover:bg-black/50`)

// Backgrounds
const gradientClass = computed(() => {
  const map: Record<string,string> = {
    Light: 'bg-gradient-to-br from-gray-100 via-white to-gray-50',
    Dark: 'bg-gradient-to-br from-gray-900 via-indigo-900 to-black',
    Sepia: 'bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100',
    Purple: 'bg-gradient-to-br from-purple-950 via-pink-900 to-rose-900'
  }
  return map[currentTheme.value] ?? map.Dark
})
const orbClass = computed(() => ({ Light: 'bg-cyan-200/30', Dark: 'bg-pink-400/30', Purple: 'bg-purple-500/30' }[currentTheme.value] ?? 'bg-cyan-200/30'))
const innerGradient = computed(() => 'bg-gradient-to-br from-black/10 to-white/5 mix-blend-overlay')

// Primary button
const primaryButtonBg = computed(() => ({ Light: 'bg-gray-800 hover:bg-gray-900', Dark: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' }[currentTheme.value] ?? 'bg-gray-800'))

// Theme CSS variables
const themeVars = computed(() => ({ '--accent-color': currentTheme.value==='Dark'?'#8b5cf6':'#06b6d4', transition:'background-color 0.6s ease, color 0.6s ease' }))

// About section scroll
const aboutRef = ref<HTMLElement | null>(null)
function scrollToAbout() { aboutRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }

// 3D Parallax Card
const parallaxCard = ref<HTMLElement | null>(null)
const cardInnerStyle = reactive({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)' })
function onPointerMove(e: PointerEvent) {
  const el = parallaxCard.value
  if(!el) return
  const rect = el.getBoundingClientRect()
  const px = (e.clientX - rect.left)/rect.width - 0.5
  const py = (e.clientY - rect.top)/rect.height - 0.5
  cardInnerStyle.transform = `perspective(900px) rotateX(${-py*10}deg) rotateY(${px*14}deg) scale(1.03)`
}
function resetPointer() { cardInnerStyle.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)' }

onMounted(() => {
  if(typedEl.value){
    typedInstance = new Typed(typedEl.value, { strings:['Welcome to My Portfolio','I am Sreyneath Rom','Full-Stack Developer'], typeSpeed:70, backSpeed:40, loop:true, showCursor:true, cursorChar:'|' })
  }
  setTimeout(()=> titleVisible.value=true,180)
  setTimeout(()=> subVisible.value=true,420)
  setTimeout(()=> ctasVisible.value=true,760)
})
onUnmounted(()=> typedInstance?.destroy())
</script>
