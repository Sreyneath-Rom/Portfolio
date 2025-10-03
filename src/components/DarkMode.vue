<template>
  <div class="relative">
    <!-- Theme Toggle Button -->
    <button @click="toggleDropdown" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition" aria-label="Select theme">
      <span class="material-symbols-outlined text-xl" :class="themeIconClass">{{ themeIcon }}</span>
      <span class="text-sm font-medium text-gray-800 dark:text-gray-200">{{ currentTheme }}</span>
    </button>

    <!-- Theme Dropdown -->
    <transition name="fade">
      <div v-if="showDropdown" class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50">
        <button v-for="theme in themes" :key="theme.name" @click="selectTheme(theme.name)" class="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition" :aria-label="`Switch to ${theme.name} theme`">
          <span class="material-symbols-outlined text-lg" :class="theme.iconColor">{{ theme.icon }}</span>
          <span>{{ theme.name }}</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useDarkMode } from '@/composables/useDarkMode';

const { currentTheme, setTheme } = useDarkMode();
const showDropdown = ref(false);

// Theme options with body class names and icon color classes
const themes = [
  { name: 'Light', icon: 'light_mode', iconColor: 'text-yellow-500', bodyClass: '' },
  { name: 'Dark', icon: 'dark_mode', iconColor: 'text-gray-200', bodyClass: '' },
  { name: 'Sepia', icon: 'palette', iconColor: 'text-amber-700', bodyClass: 'sepia-theme' },
  { name: 'Blue', icon: 'water', iconColor: 'text-sky-200', bodyClass: 'blue-theme' },
  { name: 'Purple', icon: 'color_lens', iconColor: 'text-violet-400', bodyClass: 'purple-theme' },
  { name: 'Green', icon: 'eco', iconColor: 'text-green-400', bodyClass: 'green-theme' },
  { name: 'Orange', icon: 'local_fire_department', iconColor: 'text-orange-400', bodyClass: 'orange-theme' },
  { name: 'Teal', icon: 'waves', iconColor: 'text-teal-300', bodyClass: 'teal-theme' },
  { name: 'Pink', icon: 'local_florist', iconColor: 'text-pink-400', bodyClass: 'pink-theme' },
  { name: 'Midnight', icon: 'nightlight', iconColor: 'text-indigo-200', bodyClass: 'midnight-theme' },
];

// Remove all theme classes from body and apply the selected one (if any)
const allBodyClasses = themes.map(t => t.bodyClass).filter(Boolean);
const applyThemeClass = (themeName) => {
  document.body.classList.remove(...allBodyClasses);
  const theme = themes.find(t => t.name === themeName);
  if (theme && theme.bodyClass) {
    document.body.classList.add(theme.bodyClass);
  }
};

onMounted(() => {
  applyThemeClass(currentTheme.value);
});

watch(currentTheme, (newTheme) => {
  applyThemeClass(newTheme);
});

// Toggle dropdown
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

// Select theme
const selectTheme = (theme) => {
  setTheme(theme);
  showDropdown.value = false;
};

// Current theme icon & color class
const themeIcon = computed(() => {
  const theme = themes.find(t => t.name === currentTheme.value);
  return theme ? theme.icon : 'light_mode';
});
const themeIconClass = computed(() => {
  const theme = themes.find(t => t.name === currentTheme.value);
  return theme ? theme.iconColor : 'text-yellow-500';
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
  background-color: #f3eadb;
  color: #5b4636;
}
.blue-theme {
  background-color: #0b3d91;
  color: #e6f2ff;
}
.purple-theme {
  background-color: #4c1d95;
  color: #efe7ff;
}
.green-theme {
  background-color: #065f46;
  color: #e6fff4;
}
.orange-theme {
  background-color: #a04000;
  color: #fff4e6;
}
.teal-theme {
  background-color: #0f766e;
  color: #e6fffb;
}
.pink-theme {
  background-color: #be185d;
  color: #fff0f6;
}
.midnight-theme {
  background-color: #021124;
  color: #dfefff;
}

/* Ensure background covers body nicely */
body.sepia-theme,
body.blue-theme,
body.purple-theme,
body.green-theme,
body.orange-theme,
body.teal-theme,
body.pink-theme,
body.midnight-theme {
  transition: background-color 0.25s ease, color 0.25s ease;
}
</style>
