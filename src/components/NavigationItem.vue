
<template>
  <router-link
    :to="item.path"
    class="flex items-center gap-2 border-b-2 transition-all duration-300 sm:px-3 sm:py-2 px-2 py-1 text-base sm:text-base"
    :class="[$route.path === item.path ? themeAccent : themeButtonSecondary, 'border-transparent hover:border-opacity-100', { 'border-opacity-100': $route.path === item.path }]"
    active-class="border-opacity-100"
    exact-active-class="border-opacity-100"
    :aria-label="`Go to ${item.label} page`"
  >
    <span
      class="material-symbols-outlined transition-colors duration-300"
      :class="$route.path === item.path ? themeAccent : themeButtonSecondary"
    >
      {{ item.icon }}
    </span>
    <span class="hidden xs:inline">{{ item.label }}</span>
  </router-link>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useDarkMode } from '@/composables/useDarkMode';

// Theme management
const { currentTheme } = useDarkMode();

// Theme classes
const themeAccent = computed(() => ({
  'text-yellow-500 border-yellow-500': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'text-amber-600 border-amber-600': currentTheme.value === 'Sepia',
  'text-blue-400 border-blue-400': currentTheme.value === 'Blue',
  'text-purple-400 border-purple-400': currentTheme.value === 'Purple',
  'text-green-400 border-green-400': currentTheme.value === 'Green',
  'text-orange-400 border-orange-400': currentTheme.value === 'Orange',
  'text-teal-400 border-teal-400': currentTheme.value === 'Teal',
  'text-pink-400 border-pink-400': currentTheme.value === 'Pink',
  'text-indigo-400 border-indigo-400': currentTheme.value === 'Midnight',
}));
const themeButtonSecondary = computed(() => ({
  'text-sky-500 hover:text-sky-400 hover:border-sky-400': currentTheme.value === 'Light',
  'text-sky-400 hover:text-sky-300 hover:border-sky-300': currentTheme.value === 'Dark',
  'text-amber-500 hover:text-amber-400 hover:border-amber-400': currentTheme.value === 'Sepia',
  'text-blue-400 hover:text-blue-300 hover:border-blue-300': currentTheme.value === 'Blue',
  'text-purple-400 hover:text-purple-300 hover:border-purple-300': currentTheme.value === 'Purple',
  'text-green-400 hover:text-green-300 hover:border-green-300': currentTheme.value === 'Green',
  'text-orange-400 hover:text-orange-300 hover:border-orange-300': currentTheme.value === 'Orange',
  'text-teal-400 hover:text-teal-300 hover:border-teal-300': currentTheme.value === 'Teal',
  'text-pink-400 hover:text-pink-300 hover:border-pink-300': currentTheme.value === 'Pink',
  'text-indigo-400 hover:text-indigo-300 hover:border-indigo-300': currentTheme.value === 'Midnight',
}));

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const route = useRoute();
</script>

<style scoped>
.material-symbols-outlined {
  font-size: 1.5em;
}
@media (max-width: 640px) {
  .material-symbols-outlined {
    font-size: 1.25em !important;
  }
  span:not(.material-symbols-outlined) {
    display: none !important;
  }
}

/* Theme-specific colors */
.text-sepia-900 {
  color: #5b4636; /* Matches DarkMode.vue sepia-theme */
}
.text-blue-100 {
  color: #e6f2ff; /* Matches DarkMode.vue blue-theme */
}
.text-purple-100 {
  color: #efe7ff; /* Matches DarkMode.vue purple-theme */
}
.text-green-100 {
  color: #e6fff4; /* Matches DarkMode.vue green-theme */
}
.text-orange-100 {
  color: #fff4e6; /* Matches DarkMode.vue orange-theme */
}
.text-teal-100 {
  color: #e6fffb; /* Matches DarkMode.vue teal-theme */
}
.text-pink-100 {
  color: #fff0f6; /* Matches DarkMode.vue pink-theme */
}
.text-indigo-100 {
  color: #dfefff; /* Matches DarkMode.vue midnight-theme */
}
</style>
