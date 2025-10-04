<template>
  <div class="relative">
    <!-- Theme Toggle Button -->
    <button
      @click="toggleDropdown"
      @keydown.enter="toggleDropdown"
      @keydown.space.prevent="toggleDropdown"
      class="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-500 transition"
      aria-label="Select theme"
      ref="toggleButton"
    >
      <span class="material-symbols-outlined text-xl" :class="themeIconClass">{{ themeIcon }}</span>
      <span class="text-sm font-medium text-gray-800 dark:text-gray-200">{{ currentTheme }}</span>
    </button>

    <!-- Theme Dropdown -->
    <transition name="fade">
      <div
        v-if="showDropdown"
        class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50"
        ref="dropdown"
        @keydown.escape="showDropdown = false"
      >
        <button
          v-for="theme in themes"
          :key="theme.name"
          @click="selectTheme(theme.name)"
          @keydown.enter="selectTheme(theme.name)"
          @keydown.space.prevent="selectTheme(theme.name)"
          class="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 transition"
          :aria-label="`Switch to ${theme.name} theme`"
        >
          <span class="material-symbols-outlined text-lg" :class="theme.iconColor">{{ theme.icon }}</span>
          <span>{{ theme.name }}</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useDarkMode } from '@/composables/useDarkMode';

const { currentTheme, setTheme, themes } = useDarkMode();
const showDropdown = ref(false);
const toggleButton = ref(null);
const dropdown = ref(null);

// Close dropdown on outside click
const handleOutsideClick = (event) => {
  if (
    showDropdown.value &&
    !dropdown.value?.contains(event.target) &&
    !toggleButton.value?.contains(event.target)
  ) {
    showDropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick);
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
  return theme ? theme.icon : 'dark_mode';
});
const themeIconClass = computed(() => {
  const theme = themes.find(t => t.name === currentTheme.value);
  return theme ? theme.iconColor : 'text-gray-200';
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

/* Dark mode adjustments */
.bg-gray-700 {
  background-color: #374151; /* Tailwind gray-700 */
}
.dark\:bg-gray-800 {
  background-color: #1f2937; /* Tailwind gray-800 */
}
.dark\:text-gray-200 {
  color: #e5e7eb; /* Tailwind gray-200 */
}
</style>