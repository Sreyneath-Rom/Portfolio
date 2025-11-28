<!-- src/components/Marquee.vue -->
<template>
  <div class="mt-20 space-y-10">
    <h3 class="text-center text-3xl md:text-4xl font-black tracking-tight" :class="accentClass">
      Technologies I Master
    </h3>

    <div v-for="(row, i) in rows" :key="i"
         class="group relative overflow-hidden rounded-3xl bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl"
         @mouseenter="hovered = i" @mouseleave="hovered = null">
      <div class="py-10 overflow-hidden">
        <div class="flex items-center gap-16"
             :class="[i % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse', hovered === i ? 'animation-paused' : '']">
          <div v-for="icon in [...row, ...row]" :key="icon.alt + Math.random()"
               class="flex-shrink-0 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-125 hover:bg-white/20">
            <img :src="icon.src" :alt="icon.alt" class="w-12 h-12 object-contain" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { accentClass } = useDarkMode()
const hovered = ref(null)

const rows = [
  [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', alt: 'Vue.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg', alt: 'Laravel' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', alt: 'Tailwind' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  ],
  [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', alt: 'Git' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'MySQL' },
  ]
]
</script>

<style scoped>
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes marquee-reverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
.animate-marquee { animation: marquee 40s linear infinite; }
.animate-marquee-reverse { animation: marquee-reverse 40s linear infinite; }
.animation-paused { animation-play-state: paused !important; }
</style>