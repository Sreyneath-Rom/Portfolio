<template>
  <footer class="text-center mt-6 px-2 py-4 sm:px-0 transition-colors duration-300" :class="themeClasses">
    <p class="text-xs sm:text-sm" :class="themeText">© 2025 Sreyneath Rom. All rights reserved.</p>
    <p class="text-xs sm:text-sm mt-2" :class="themeText">Built with Vue.js</p>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useDarkMode } from '@/composables/useDarkMode';

// Theme management
const { currentTheme } = useDarkMode();

// Theme classes
const themeClasses = computed(() => ({
  'bg-white': currentTheme.value === 'Light',
  'bg-gray-900': currentTheme.value === 'Dark',
  'bg-sepia-100': currentTheme.value === 'Sepia',
  'bg-blue-900': currentTheme.value === 'Blue',
  'bg-purple-900': currentTheme.value === 'Purple',
  'bg-green-900': currentTheme.value === 'Green',
  'bg-orange-900': currentTheme.value === 'Orange',
  'bg-teal-900': currentTheme.value === 'Teal',
  'bg-pink-900': currentTheme.value === 'Pink',
  'bg-indigo-900': currentTheme.value === 'Midnight',
}));
const themeText = computed(() => ({
  'text-gray-500': currentTheme.value === 'Light',
  'text-gray-400': currentTheme.value === 'Dark',
  'text-sepia-700': currentTheme.value === 'Sepia',
  'text-blue-200': currentTheme.value === 'Blue',
  'text-purple-200': currentTheme.value === 'Purple',
  'text-green-200': currentTheme.value === 'Green',
  'text-orange-200': currentTheme.value === 'Orange',
  'text-teal-200': currentTheme.value === 'Teal',
  'text-pink-200': currentTheme.value === 'Pink',
  'text-indigo-200': currentTheme.value === 'Midnight',
}));
</script>

<style scoped>
/* Smooth transitions for theme changes */
* {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Theme-specific background colors */
.bg-sepia-100 {
  background-color: #f3eadb; /* Matches DarkMode.vue sepia-theme */
}
.bg-blue-900 {
  background-color: #0b3d91; /* Matches DarkMode.vue blue-theme */
}
.bg-purple-900 {
  background-color: #4c1d95; /* Matches DarkMode.vue purple-theme */
}
.bg-green-900 {
  background-color: #065f46; /* Matches DarkMode.vue green-theme */
}
.bg-orange-900 {
  background-color: #a04000; /* Matches DarkMode.vue orange-theme */
}
.bg-teal-900 {
  background-color: #0f766e; /* Matches DarkMode.vue teal-theme */
}
.bg-pink-900 {
  background-color: #be185d; /* Matches DarkMode.vue pink-theme */
}
.bg-indigo-900 {
  background-color: #021124; /* Matches DarkMode.vue midnight-theme */
}

/* Theme-specific text colors */
.text-sepia-700 {
  color: #8c552f; /* Derived from sepia palette */
}
.text-blue-200 {
  color: #bfdbfe; /* Derived from blue palette */
}
.text-purple-200 {
  color: #ddd6fe; /* Derived from purple palette */
}
.text-green-200 {
  color: #a7f3d0; /* Derived from green palette */
}
.text-orange-200 {
  color: #fed7aa; /* Derived from orange palette */
}
.text-teal-200 {
  color: #99f6e4; /* Derived from teal palette */
}
.text-pink-200 {
  color: #f9a8d4; /* Derived from pink palette */
}
.text-indigo-200 {
  color: #c7d2fe; /* Derived from indigo palette */
}
</style>

