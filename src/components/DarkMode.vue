<template>
  <div ref="root" class="relative group">
    <!-- Theme Toggle Button -->
    <button
      @click="toggle"
      @keydown.enter.prevent="toggle"
      @keydown.space.prevent="toggle"
      :aria-expanded="open"
      :aria-haspopup="true"
      class="relative flex items-center gap-3 px-5 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg backdrop-blur-xl border border-white/20"
      :class="toggleBg"
      type="button"
    >
      <span class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>

      <span class="relative flex items-center gap-3">
        <span class="material-symbols-outlined text-2xl animate-pulse" :class="activeIconClass">
          {{ icon }}
        </span>
        <span :class="activeTextClass" class="text-sm tracking-wide">{{ currentTheme }}</span>
      </span>

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
            class="w-full px-5 py-4 flex items-center gap-4 transition-all duration-300 hover:scale-105 focus:outline-none hover:bg-white/10"
            :class="currentTheme === t.name ? activeItem : inactiveItem"
          >
            <div class="relative">
              <span
                class="absolute -inset-2 rounded-full blur-xl opacity-70 animate-pulse"
                :class="getGlowClass(t.name)"
              ></span>
              <span class="relative material-symbols-outlined text-2xl" :class="t.iconColor">
                {{ t.icon }}
              </span>
            </div>

            <span :class="getTextColor(t.name)" class="font-medium">{{ t.name }}</span>

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

const toggle = async () => {
  open.value = !open.value
  if (open.value) {
    await nextTick()
    const firstItem = root.value?.querySelector('[role="menuitemradio"]')
    firstItem?.focus()
  }
}

const selectTheme = (name) => {
  setTheme(name)
  open.value = false
}

const close = () => {
  open.value = false
}

const handleClickOutside = (e) => {
  if (root.value && !root.value.contains(e.target) && open.value) close()
}

const handleEscape = (e) => {
  if (e.key === 'Escape' && open.value) close()
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscape)
})

// Computed
const icon = computed(() => themes.find(t => t.name === currentTheme.value)?.icon ?? 'dark_mode')

const activeIconClass = computed(() =>
  ['Light','Sepia'].includes(currentTheme.value) ? 'text-black drop-shadow-lg' : 'text-white drop-shadow-lg'
)

const activeTextClass = computed(() =>
  ['Light','Sepia'].includes(currentTheme.value) ? 'text-black font-bold' : 'text-white font-bold'
)

const getTextColor = (name) =>
  ['Light','Sepia'].includes(name) ? 'text-black' : 'text-white'

const getGlowClass = (name) => ({
  Light: 'bg-yellow-400/50', Dark: 'bg-gray-600/50', Sepia: 'bg-amber-600/50',
  Blue: 'bg-blue-500/60', Purple: 'bg-purple-500/60', Green: 'bg-emerald-500/60',
  Orange: 'bg-orange-500/60', Teal: 'bg-teal-500/60', Pink: 'bg-pink-500/60',
  Midnight: 'bg-indigo-500/60',
}[name] || 'bg-gray-500/50')

const toggleBg = computed(() => 
  ['Light', 'Sepia',].includes(currentTheme.value)
    ? 'bg-white/30 hover:bg-white/50'
    : 'bg-black/40 hover:bg-black/60'
)

const menuBg = computed(() =>
  ['Light', 'Sepia'].includes(currentTheme.value) ? 'bg-white/80' : 'bg-black/70'
)

const activeItem = computed(() => 'bg-white/20 font-bold')
const inactiveItem = computed(() => ['Light', 'Sepia', ].includes(currentTheme.value) ? 'text-black/80' : 'text-white/80')
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-12px) scale(0.95);
}
</style>
