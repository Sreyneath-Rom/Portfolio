<template>
  <div class="relative">
    <!-- Theme Toggle Button -->
    <button @click="toggleDropdown" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition" aria-label="Select theme">
      <span class="material-symbols-outlined text-xl" :class="themeIconClass">{{ themeIcon }}</span>
      <span class="text-sm font-medium text-gray-800 dark:text-gray-200">{{ currentTheme }}</span>
    </button>

    <!-- Theme Dropdown -->
    <transition name="fade">
      <div v-if="showDropdown" class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50">
        <button v-for="theme in themes" :key="theme.name" @click="selectTheme(theme.name)" class="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition" :aria-label="`Switch to ${theme.name} theme`">
          <span class="material-symbols-outlined text-lg" :class="theme.class">{{ theme.icon }}</span>
          <span>{{ theme.name }}</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDarkMode } from '@/composables/useDarkMode';

// Theme management
const { currentTheme, setTheme } = useDarkMode();
const showDropdown = ref(false);

// Theme options
const themes = [
  { name: 'Light', icon: 'light_mode', class: 'text-yellow-500' },
  { name: 'Dark', icon: 'dark_mode', class: 'text-gray-200' },
  { name: 'Sepia', icon: 'palette', class: 'text-sepia-700' },
  { name: 'Blue', icon: 'water', class: 'text-blue-400' },
];

// Toggle dropdown
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

// Select theme
const selectTheme = (theme) => {
  setTheme(theme);
  showDropdown.value = false;
};

// Current theme icon
const themeIcon = computed(() => {
  const theme = themes.find(t => t.name === currentTheme.value);
  return theme ? theme.icon : 'light_mode';
});
const themeIconClass = computed(() => {
  const theme = themes.find(t => t.name === currentTheme.value);
  return theme ? theme.class : 'text-yellow-500';
});
</script>

<style scoped>
/* Fade animation for dropdown */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Theme-specific styles */
.sepia-theme {
  background-color: #f4f1e9;
  color: #5c4033;
}
.blue-theme {
  background-color: #1e3a8a;
  color: #dbeafe;
}
</style>