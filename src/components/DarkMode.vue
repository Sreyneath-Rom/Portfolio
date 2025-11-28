<!-- src/components/DarkMode.vue -->
<template>
  <div ref="root" class="relative group">
    <!-- Theme Toggle Button -->
    <button
      @click="toggle()"
      @keydown.enter.prevent="toggle()"
      @keydown.space.prevent="toggle()"
      :aria-expanded="open"
      :aria-haspopup="menu"
      class="relative flex items-center gap-3 px-5 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg backdrop-blur-xl border border-white/20"
      :class="[toggleBg, 'text-white']"
      type="button"
    >
      <!-- Glow on hover -->
      <span class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>

      <span class="relative flex items-center gap-3">
        <span class="material-symbols-outlined text-2xl animate-pulse" :class="iconGlow">
          {{ icon }}
        </span>
        <span class="text-sm tracking-wide">{{ currentTheme }}</span>
      </span>

      <!-- Chevron indicator -->
      <span class="material-symbols-outlined text-lg transition-transform duration-300" :class="open ? 'rotate-180' : ''">
        expand_more
      </span>
    </button>

    <!-- Dropdown Menu -->
    <transition name="dropdown">
      <div
        v-if="open"
        class="absolute right-0 mt-3 w-56 origin-top-right rounded-2xl shadow-2xl overflow-hidden z-50 backdrop-blur-2xl border border-white/20"
        :class="menuBg"
        role="menu"
        aria-label="Theme selector"
      >
        <div class="py-2">
          <button
            v-for="t in themes"
            :key="t.name"
            @click="selectTheme(t.name)"
            @keydown.enter.prevent="selectTheme(t.name)"
            @keydown.space.prevent="selectTheme(t.name)"
            role="menuitemradio"
            :aria-checked="currentTheme === t.name"
            class="w-full px-5 py-4 flex items-center gap-4 transition-all duration-300 hover:scale-105 focus:outline-none"
            :class="[
              currentTheme === t.name ? activeItem : inactiveItem,
              'hover:bg-white/10'
            ]"
          >
            <!-- Theme Icon with Glow -->
            <div class="relative">
              <span
                class="absolute -inset-2 rounded-full blur-xl opacity-70 animate-pulse"
                :class="t.glow"
              ></span>
              <span class="relative material-symbols-outlined text-2xl" :class="t.iconColor">
                {{ t.icon }}
              </span>
            </div>

            <span class="font-medium">{{ t.name }}</span>

            <!-- Checkmark for active theme -->
            <span
              v-if="currentTheme === t.name"
              class="ml-auto material-symbols-outlined text-2xl text-cyan-400 animate-bounce"
            >
              check_circle
            </span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useDarkMode, themes } from '@/composables/useDarkMode'

const { currentTheme, setTheme } = useDarkMode()
const open = ref(false)
const root = ref(null)

// Enhanced themes with glow colors
const enhancedThemes = themes.map(t => ({
  ...t,
  glow: {
    Light: 'bg-yellow-400/50',
    Dark: 'bg-gray-600/50',
    Sepia: 'bg-amber-600/50',
    Blue: 'bg-blue-500/60',
    Purple: 'bg-purple-500/60',
    Green: 'bg-emerald-500/60',
    Orange: 'bg-orange-500/60',
    Teal: 'bg-teal-500/60',
    Pink: 'bg-pink-500/60',
    Midnight: 'bg-indigo-500/60',
  }[t.name] || 'bg-gray-500/50'
}))

const toggle = async () => {
  open.value = !open.value
  if (open.value) {
    await nextTick()
    const first = root.value?.querySelector('[role="menuitemradio"]')
    first?.focus()
  }
}

const selectTheme = (name) => {
  setTheme(name)
  open.value = false
}

const icon = computed(() => {
  const t = themes.find(x => x.name === currentTheme.value)
  return t?.icon ?? 'dark_mode'
})

const iconGlow = computed(() => {
  const map = {
    Light: 'text-yellow-400',
    Dark: 'text-gray-300',
    Sepia: 'text-amber-500',
    Blue: 'text-cyan-400',
    Purple: 'text-purple-400',
    Green: 'text-emerald-400',
    Orange: 'text-orange-400',
    Teal: 'text-teal-400',
    Pink: 'text-pink-400',
    Midnight: 'text-indigo-400',
  }
  return map[currentTheme.value] || 'text-gray-300'
})

// Dynamic backgrounds
const toggleBg = computed(() => 'bg-black/40 hover:bg-black/60')
const menuBg = computed(() => 'bg-black/70')

const activeItem = computed(() => 'bg-white/10 font-bold')
const inactiveItem = computed(() => 'text-white/80')

// Close on outside click or Escape
const onDocumentClick = (e) => {
  if (root.value && !root.value.contains(e.target)) open.value = false
}
const onKeyDown = (e) => {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeyDown)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeyDown)
})
</script>

<style scoped>
/* Smooth dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-12px) scale(0.95);
}
.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>