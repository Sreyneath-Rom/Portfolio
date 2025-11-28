<template>
  <div ref="root" class="relative">
    <button
      @click="toggle()"
      @keydown.enter.prevent="toggle()"
      @keydown.space.prevent="toggle()"
      :aria-expanded="open"
      aria-haspopup="menu"
      class="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
      type="button"
    >
      <span class="material-symbols-outlined text-xl" :class="iconColor">{{ icon }}</span>
      <span class="text-sm font-medium">{{ currentTheme }}</span>
    </button>

    <div
      v-if="open"
      class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-50 overflow-hidden"
      role="menu"
      aria-label="Theme selector"
    >
      <button
        v-for="t in themes"
        :key="t.name"
        @click="selectTheme(t.name)"
        @keydown.enter.prevent="selectTheme(t.name)"
        @keydown.space.prevent="selectTheme(t.name)"
        role="menuitemradio"
        :aria-checked="currentTheme === t.name"
        tabindex="0"
        class="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3 transition focus:outline-none"
        :class="{ 'bg-gray-100 dark:bg-gray-700 font-semibold': currentTheme === t.name }"
        type="button"
      >
        <span class="material-symbols-outlined" :class="t.iconColor">{{ t.icon }}</span>
        <span>{{ t.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useDarkMode, themes } from '@/composables/useDarkMode'

const { currentTheme, setTheme } = useDarkMode()
const open = ref(false)
const root = ref(null)

const toggle = () => {
  open.value = !open.value
  if (open.value) {
    // focus first selectable item for keyboard users
    // using nextTick would be fine but keeping simple and robust
    const first = root.value?.querySelector('[role="menuitemradio"]')
    first?.focus()
  }
}

const selectTheme = (name) => {
  setTheme(name)
  open.value = false
}

const icon = computed(() => {
  const t = themes.find((x) => x.name === currentTheme.value)
  return t?.icon ?? 'dark_mode'
})
const iconColor = computed(() => {
  const t = themes.find((x) => x.name === currentTheme.value)
  return t?.iconColor ?? 'text-gray-300'
})

const onDocumentClick = (e) => {
  if (!root.value) return
  if (!root.value.contains(e.target)) open.value = false
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