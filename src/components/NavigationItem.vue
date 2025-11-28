<!-- src/components/NavigationItem.vue -->
<template>
  <router-link
    :to="item.path"
    class="group relative flex items-center gap-3 px-5 py-4 rounded-2xl font-medium transition-all duration-300 overflow-hidden"
    :class="[isActive ? activeClasses : inactiveClasses]"
    :aria-current="isActive ? 'page' : null"
    :aria-label="`Go to ${item.label}`"
  >
    <!-- Background glow on hover/active -->
    <span
      class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
      :class="{ 'opacity-100': isActive }"
    ></span>

    <!-- Animated gradient underline -->
    <span
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full transition-all duration-500 group-hover:w-full"
      :class="{ 'w-full': isActive }"
    ></span>

    <!-- Icon -->
    <span
      class="relative z-10 material-symbols-outlined text-2xl transition-all duration-300"
      :class="isActive ? 'text-white drop-shadow-lg' : 'text-white/60 group-hover:text-white'"
    >
      {{ item.icon }}
    </span>

    <!-- Label (hidden on tiny screens) -->
    <span
      class="relative z-10 hidden xs:inline text-sm tracking-wide transition-all duration-300"
      :class="isActive ? 'text-white font-bold' : 'text-white/70 group-hover:text-white'"
    >
      {{ item.label }}
    </span>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDarkMode } from '@/composables/useDarkMode'

const { accentClass } = useDarkMode()
const route = useRoute()
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const isActive = computed(() => {
  return route.path === props.item.path || 
         (props.item.path !== '/' && route.path.startsWith(props.item.path))
})

// Active state: glowing + scale
const activeClasses = 'scale-110 shadow-2xl shadow-purple-500/30'

// Inactive state: subtle hover lift
const inactiveClasses = 'hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20'
</script>

<style scoped>
/* Extra smooth focus ring */
router-link:focus-visible {
  outline: 3px solid rgba(147, 51, 234, 0.4);
  outline-offset: 4px;
}
</style>