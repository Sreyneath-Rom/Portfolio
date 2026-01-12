<!-- src/components/NavigationItem.vue -->
<template>
  <router-link
    :to="item.path"
    custom
    v-slot="{ navigate, href, isActive }"
  >
    <a
      :href="href"
      @click="navigate"
      class="group relative flex items-center gap-3 px-5 py-4 rounded-2xl font-medium transition-all duration-300 overflow-hidden"
      :class="[isActive ? activeClasses : inactiveClasses]"
      :aria-current="isActive ? 'page' : null"
      :aria-label="`Go to ${item.label}`"
    >
      <!-- Background Glow -->
      <span
        class="absolute inset-0 rounded-2xl bg-gradient-to-r 
               from-cyan-500/20 via-purple-500/20 to-pink-500/20
               opacity-0 blur-xl transition-opacity duration-500"
        :class="{ 'opacity-100': isActive }"
      ></span>

      <!-- Underline Effect -->
      <span
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 
               bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
               rounded-full transition-all duration-500 group-hover:w-full"
        :class="{ 'w-full': isActive }"
      ></span>

      <!-- Icon -->
      <span
        class="relative z-10 material-symbols-outlined text-2xl transition-all duration-300"
        :class="[
          isActive ? activeIconClass : inactiveIconClass,
          iconGlowClass
        ]"
      >
        {{ item.icon }}
      </span>

      <!-- Label -->
      <span
        class="relative z-10 text-sm tracking-wide transition-all duration-300"
        :class="isActive ? activeTextClass : inactiveTextClass"
      >
        {{ item.label }}
      </span>
    </a>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'

defineProps({
  item: { type: Object, required: true }
})

const { currentTheme, inactiveIconClass, iconGlowClass } = useDarkMode()

// Active / Inactive Classes
const activeClasses = 'scale-105 shadow-lg shadow-purple-500/30 bg-white/10 dark:bg-black/20 backdrop-blur-xl'
const inactiveClasses = 'hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20'

// Text Classes
const activeTextClass = computed(() => currentTheme.value === 'Light' ? 'text-black font-bold' : 'text-white font-bold')
const inactiveTextClass = computed(() => currentTheme.value === 'Light' ? 'text-black/70 group-hover:text-black' : 'text-white/70 group-hover:text-white')

// Icon Classes
const activeIconClass = computed(() => currentTheme.value === 'Light' ? 'text-black drop-shadow-lg' : 'text-white drop-shadow-lg')
</script>

<style scoped>
/* Smooth material icon rendering */
.material-symbols-outlined {
  font-variation-settings:
    "wght" 400,
    "FILL" 1;
}
</style>
