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
      <!-- Glow & Underline (same as before) -->
      <span class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
            :class="{ 'opacity-100': isActive }"></span>
      <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full transition-all duration-500 group-hover:w-full"
            :class="{ 'w-full': isActive }"></span>

      <span class="relative z-10 material-symbols-outlined text-2xl transition-all duration-300"
            :class="isActive ? 'text-white drop-shadow-lg' : 'text-white/60 group-hover:text-white'">
        {{ item.icon }}
      </span>

      <span class="relative z-10 hidden xs:inline text-sm tracking-wide transition-all duration-300"
            :class="isActive ? 'text-white font-bold' : 'text-white/70 group-hover:text-white'">
        {{ item.label }}
      </span>
    </a>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  item: { type: Object, required: true }
})

const activeClasses = 'scale-110 shadow-2xl shadow-purple-500/30'
const inactiveClasses = 'hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20'
</script>