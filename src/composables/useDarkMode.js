// src/composables/useDarkMode.js
import { ref, watch, readonly, computed } from 'vue'

export const themes = [
  { name: 'Light',    icon: 'light_mode',           iconColor: 'text-yellow-500' },
  { name: 'Dark',     icon: 'dark_mode',            iconColor: 'text-gray-300' },
  { name: 'Sepia',    icon: 'palette',              iconColor: 'text-amber-700' },
  { name: 'Blue',     icon: 'water_drop',           iconColor: 'text-blue-400' },
  { name: 'Purple',   icon: 'auto_fix_high',        iconColor: 'text-purple-400' },
  { name: 'Green',    icon: 'eco',                  iconColor: 'text-green-400' },
  { name: 'Orange',   icon: 'local_fire_department',iconColor: 'text-orange-400' },
  { name: 'Teal',     icon: 'waves',                iconColor: 'text-teal-400' },
  { name: 'Pink',     icon: 'local_florist',        iconColor: 'text-pink-400' },
  { name: 'Midnight', icon: 'nightlight',           iconColor: 'text-indigo-400' },
]

const themeMap = {
  Light:    { bg: 'bg-white',       text: 'text-gray-900',   accent: 'text-yellow-500' },
  Dark:     { bg: 'bg-gray-900',    text: 'text-gray-100',   accent: 'text-gray-300' },
  Sepia:    { bg: 'bg-yellow-100',  text: 'text-yellow-900',  accent: 'text-yellow-700' },
  Blue:     { bg: 'bg-blue-900',    text: 'text-blue-100',   accent: 'text-blue-400' },
  Purple:   { bg: 'bg-purple-900',  text: 'text-purple-100', accent: 'text-purple-400' },
  Green:    { bg: 'bg-green-900',   text: 'text-green-100',  accent: 'text-green-400' },
  Orange:   { bg: 'bg-orange-900',  text: 'text-orange-100', accent: 'text-orange-400' },
  Teal:     { bg: 'bg-teal-900',    text: 'text-teal-100',   accent: 'text-teal-400' },
  Pink:     { bg: 'bg-pink-900',    text: 'text-pink-100',   accent: 'text-pink-400' },
  Midnight: { bg: 'bg-indigo-900',  text: 'text-indigo-100', accent: 'text-indigo-400' },
}

function getValidTheme(name) {
  return themeMap[name] ? name : 'Dark'
}

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const stored = localStorage.getItem('theme')
    return getValidTheme(stored || 'Dark')
  }
  return 'Dark'
}

const currentTheme = ref(getInitialTheme())

export const setTheme = (name) => {
  const validTheme = getValidTheme(name)
  currentTheme.value = validTheme
  try {
    localStorage.setItem('theme', validTheme)
  } catch (e) {
    // ignore localStorage errors (e.g. privacy mode)
  }
}

// Keep root element classes in sync
watch(currentTheme, (name) => {
  const target = themeMap[name] || themeMap.Dark
  // Remove all known bg/text classes
  Object.values(themeMap).forEach(({ bg, text }) => {
    document.documentElement.classList.remove(bg, text)
  })
  // Add the chosen ones
  document.documentElement.classList.add(target.bg, target.text, 'transition-colors', 'duration-300')
}, { immediate: true })

export function useDarkMode() {
  const bgClass = computed(() => (themeMap[currentTheme.value] || themeMap.Dark).bg)
  const textClass = computed(() => (themeMap[currentTheme.value] || themeMap.Dark).text)
  const accentClass = computed(() => (themeMap[currentTheme.value] || themeMap.Dark).accent)

  return {
    currentTheme: readonly(currentTheme),
    setTheme,
    themes,
    bgClass,
    textClass,
    accentClass,
  }
}