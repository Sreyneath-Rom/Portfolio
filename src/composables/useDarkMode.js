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

const themeClasses = {
  Light:    { bg: 'bg-white',       text: 'text-gray-900',   accent: 'text-purple-600' },
  Dark:     { bg: 'bg-gray-900',    text: 'text-gray-100',   accent: 'text-purple-400' },
  Sepia:    { bg: 'bg-amber-50',    text: 'text-amber-900',  accent: 'text-amber-700' },
  Blue:     { bg: 'bg-blue-950',    text: 'text-blue-100',   accent: 'text-cyan-400' },
  Purple:   { bg: 'bg-purple-950',  text: 'text-purple-100', accent: 'text-pink-400' },
  Green:    { bg: 'bg-emerald-950', text: 'text-emerald-100',accent: 'text-lime-400' },
  Orange:   { bg: 'bg-orange-950',  text: 'text-orange-100', accent: 'text-orange-400' },
  Teal:     { bg: 'bg-teal-950',    text: 'text-teal-100',   accent: 'text-cyan-400' },
  Pink:     { bg: 'bg-pink-950',    text: 'text-pink-100',   accent: 'text-rose-400' },
  Midnight: { bg: 'bg-indigo-950',  text: 'text-indigo-100', accent: 'text-purple-400' },
}

const currentTheme = ref('Dark')

// Load from localStorage
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('theme')
  if (saved && themeClasses[saved]) currentTheme.value = saved
}

export function useDarkMode() {
  const setTheme = (name) => {
    if (!themeClasses[name]) name = 'Dark'
    currentTheme.value = name
    localStorage.setItem('theme', name)

    const classes = themeClasses[name]
    document.documentElement.className = ''
    document.documentElement.classList.add(
      classes.bg, classes.text, 'transition-colors', 'duration-300'
    )
  }

  watch(currentTheme, (name) => {
    setTheme(name)
  }, { immediate: true })

  return {
    currentTheme: readonly(currentTheme),
    setTheme,
    themes,
    bgClass: computed(() => themeClasses[currentTheme.value]?.bg || 'bg-gray-900'),
    textClass: computed(() => themeClasses[currentTheme.value]?.text || 'text-gray-100'),
    accentClass: computed(() => themeClasses[currentTheme.value]?.accent || 'text-purple-400'),
  }
}