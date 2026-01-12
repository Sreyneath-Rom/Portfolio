// src/composables/useDarkMode.js
import { ref, watch, readonly, computed } from 'vue'

export const themes = [
  { name: 'Light',    icon: 'light_mode',            iconColor: 'text-yellow-500' },
  { name: 'Dark',     icon: 'dark_mode',             iconColor: 'text-black' },
  { name: 'Sepia',    icon: 'palette',               iconColor: 'text-amber-700' },
  { name: 'Blue',     icon: 'water_drop',            iconColor: 'text-cyan-400' },
  { name: 'Purple',   icon: 'auto_fix_high',         iconColor: 'text-purple-400' },
  { name: 'Green',    icon: 'eco',                   iconColor: 'text-emerald-400' },
  { name: 'Orange',   icon: 'local_fire_department', iconColor: 'text-orange-400' },
  { name: 'Teal',     icon: 'waves',                 iconColor: 'text-teal-400' },
  { name: 'Pink',     icon: 'local_florist',         iconColor: 'text-pink-400' },
  { name: 'Midnight', icon: 'nightlight',            iconColor: 'text-indigo-400' },
]

const currentTheme = ref('Dark')

// Load saved theme from localStorage
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('theme')
  if (themes.some(t => t.name === saved)) currentTheme.value = saved
}

const baseThemeClasses = {
  Light:    ['bg-white', 'text-gray-900'],
  Dark:     ['bg-gray-900', 'text-gray-100'],
  Sepia:    ['bg-amber-50', 'text-amber-900'],
  Blue:     ['bg-blue-950', 'text-blue-100'],
  Purple:   ['bg-purple-950', 'text-purple-100'],
  Green:    ['bg-emerald-950', 'text-emerald-100'],
  Orange:   ['bg-orange-950', 'text-orange-100'],
  Teal:     ['bg-teal-950', 'text-teal-100'],
  Pink:     ['bg-pink-950', 'text-pink-100'],
  Midnight: ['bg-indigo-950', 'text-indigo-100'],
}

// Apply root theme classes
function applyTheme(name) {
  const root = document.documentElement
  Object.values(baseThemeClasses).flat().forEach(cls => root.classList.remove(cls))
  root.classList.add(...baseThemeClasses[name], 'transition-colors', 'duration-300')
}

export function useDarkMode() {
  const validNames = themes.map(t => t.name)

  const setTheme = (name) => {
    if (!validNames.includes(name)) name = 'Dark'
    currentTheme.value = name
    localStorage.setItem('theme', name)
  }

  watch(currentTheme, (name) => applyTheme(name), { immediate: true })

  // Computed for component styling
  const themeBg = computed(() => ({
    Light:    'bg-gradient-to-br from-gray-50 to-gray-100',
    Dark:     'bg-gradient-to-br from-gray-900 via-black to-gray-900',
    Sepia:    'bg-gradient-to-br from-yellow-50 to-amber-100',
    Blue:     'bg-gradient-to-br from-blue-950 to-indigo-950',
    Purple:   'bg-gradient-to-br from-purple-950 to-pink-950',
    Green:    'bg-gradient-to-br from-emerald-950 to-teal-950',
    Orange:   'bg-gradient-to-br from-orange-950 to-red-950',
    Teal:     'bg-gradient-to-br from-teal-950 to-cyan-950',
    Pink:     'bg-gradient-to-br from-pink-950 to-rose-950',
    Midnight: 'bg-gradient-to-br from-indigo-950 via-black to-purple-950',
  }[currentTheme.value]))

  const accentClass = computed(() => ({
    Light: 'purple-600',
    Dark: 'black',
    Sepia: 'amber-700',
    Blue: 'cyan-400',
    Purple: 'pink-400',
    Green: 'lime-400',
    Orange: 'orange-400',
    Teal: 'cyan-400',
    Pink: 'rose-400',
    Midnight: 'purple-400'
  }[currentTheme.value]))

  
  const inactiveIconClass = computed(() => ({
  Light: 'text-black/70 group-hover:text-black',
  Dark: 'text-black/70 group-hover:text-black',
  Sepia: 'text-amber-300/70 group-hover:text-amber-500',
  Blue: 'text-cyan-300/70 group-hover:text-cyan-400',
  Purple: 'text-purple-300/70 group-hover:text-purple-400',
  Green: 'text-emerald-300/70 group-hover:text-emerald-400',
  Orange: 'text-orange-300/70 group-hover:text-orange-400',
  Teal: 'text-teal-300/70 group-hover:text-teal-400',
  Pink: 'text-pink-300/70 group-hover:text-pink-400',
  Midnight: 'text-indigo-300/70 group-hover:text-indigo-400',
}[currentTheme.value] || 'text-white/60 group-hover:text-white'))


  const iconGlowClass = computed(() => {
    if (['Light','Sepia','Blue','Purple','Green','Orange','Teal','Pink'].includes(currentTheme.value))
      return 'drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]'
    return ''
  })

  const themeButton = computed(() => `bg-gradient-to-r ${
    {
      Light: 'from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white',
      Dark: 'from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white',
      Sepia: 'from-amber-600 to-orange-600 text-white',
      Blue: 'from-blue-600 to-cyan-600 text-white',
      Purple: 'from-purple-600 to-pink-600 text-white',
      Green: 'from-emerald-600 to-teal-600 text-white',
      Orange: 'from-orange-600 to-red-600 text-white',
      Teal: 'from-teal-600 to-cyan-600 text-white',
      Pink: 'from-pink-600 to-rose-600 text-white',
      Midnight: 'from-indigo-600 to-purple-600 text-white',
    }[currentTheme.value]
  }`)

  const glowStyle = computed(() => ({
    background: {
      Light: 'conic-gradient(from 0deg, #fbbf24, #f472b6, #818cf8, #34d399, #fbbf24)',
      Dark: 'conic-gradient(from 0deg, #60a5fa, #c084fc, #86efac, #f87171, #60a5fa)',
    }[currentTheme.value] || 'conic-gradient(from 0deg, #60a5fa, #c084fc, #86efac, #f87171, #60a5fa)',
    filter: 'blur(40px)'
  }))

  return {
    currentTheme: readonly(currentTheme),
    setTheme,
    themes,
    themeBg,
    accentClass,
    inactiveIconClass,
    iconGlowClass,
    themeButton,
    glowStyle,
  }
}
