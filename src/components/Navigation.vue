
<template>
  <div class="shadow-md fixed top-0 left-0 right-0 z-50" :class="themeClasses">
    <nav class="max-w-5xl mx-auto h-16 flex items-center justify-between px-4 md:px-6">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-3 hover:opacity-95 transition-colors duration-200" aria-label="Go to homepage">
        <span class="material-symbols-outlined text-2xl md:text-3xl" :class="themeAccent">work</span>
        <span class="text-lg font-semibold md:text-xl tracking-wide" :class="themeAccent">SREYNEATH ROM</span>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden items-center gap-3 md:flex">
        <router-link
          v-for="item in navItems"
          :key="item.label"
          :to="item.path"
          :class="[
            'flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
            isActive(item) ? themeButton : themeButtonSecondary
          ]"
          :aria-label="`Go to ${item.label} page`"
          :aria-current="isActive(item) ? 'page' : null"
        >
          <span class="material-symbols-outlined text-xl" :class="isActive(item) ? themeText : themeButtonSecondary"> {{ item.icon }}</span>
          <span class="font-medium">{{ item.label }}</span>
        </router-link>

        <DarkMode />
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        @click="showMobileMenu = !showMobileMenu"
        aria-label="Toggle mobile menu"
        :aria-expanded="String(showMobileMenu)"
        :class="themeButtonSecondary"
      >
        <span class="material-symbols-outlined text-3xl" :class="themeAccent">{{ showMobileMenu ? 'close' : 'menu' }}</span>
      </button>

      <!-- Mobile Menu -->
      <transition name="overlay-fade">
        <div v-if="showMobileMenu" class="md:hidden fixed inset-0 z-50" @click="showMobileMenu = false">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity"></div>

          <!-- Sliding Panel -->
          <transition name="panel-slide">
            <aside
              class="absolute inset-y-0 right-0 w-80 p-6 flex flex-col gap-5 shadow-xl rounded-l-lg"
              :class="themePanel"
              @click.stop
            >
              <!-- Close Button -->
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-2xl" :class="themeAccent">work</span>
                  <span class="font-semibold" :class="themeAccent">Menu</span>
                </div>
                <button
                  class="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                  @click="showMobileMenu = false"
                  aria-label="Close mobile menu"
                  :class="themeButtonSecondary"
                >
                  <span class="material-symbols-outlined text-3xl" :class="themeTextSecondary">close</span>
                </button>
              </div>

              <!-- Menu Items -->
              <nav class="flex flex-col gap-2">
                <router-link
                  v-for="item in navItems"
                  :key="item.label"
                  :to="item.path"
                  @click="showMobileMenu = false"
                  :class="[
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
                    isActive(item) ? themeButton : themeButtonSecondary
                  ]"
                  :aria-label="`Go to ${item.label} page`"
                  :aria-current="isActive(item) ? 'page' : null"
                >
                  <span class="material-symbols-outlined text-2xl" :class="isActive(item) ? themeText : themeButtonSecondary">{{ item.icon }}</span>
                  <span class="font-medium">{{ item.label }}</span>
                </router-link>
              </nav>

              <!-- Dark Mode Toggle -->
              <div class="mt-auto flex items-center justify-between px-2 py-2">
                <div class="flex items-center gap-3">
                  <span class="text-lg" :class="themeText">Theme</span>
                </div>
                <DarkMode />
              </div>
            </aside>
          </transition>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted, computed } from 'vue'; // Added 'computed' import
import { useRoute } from 'vue-router';
import DarkMode from '@/components/DarkMode.vue';
import { useDarkMode } from '@/composables/useDarkMode';

// Theme management
const { currentTheme } = useDarkMode();

// Theme classes
const themeClasses = computed(() => ({
  'bg-white text-gray-800': currentTheme.value === 'Light',
  'bg-gray-900 text-gray-200': currentTheme.value === 'Dark',
  'bg-sepia-100 text-sepia-900': currentTheme.value === 'Sepia',
  'bg-blue-900 text-blue-100': currentTheme.value === 'Blue',
  'bg-purple-900 text-purple-100': currentTheme.value === 'Purple',
  'bg-green-900 text-green-100': currentTheme.value === 'Green',
  'bg-orange-900 text-orange-100': currentTheme.value === 'Orange',
  'bg-teal-900 text-teal-100': currentTheme.value === 'Teal',
  'bg-pink-900 text-pink-100': currentTheme.value === 'Pink',
  'bg-indigo-900 text-indigo-100': currentTheme.value === 'Midnight',
}));
const themeText = computed(() => ({
  'text-gray-800': currentTheme.value === 'Light',
  'text-gray-200': currentTheme.value === 'Dark',
  'text-sepia-900': currentTheme.value === 'Sepia',
  'text-blue-100': currentTheme.value === 'Blue',
  'text-purple-100': currentTheme.value === 'Purple',
  'text-green-100': currentTheme.value === 'Green',
  'text-orange-100': currentTheme.value === 'Orange',
  'text-teal-100': currentTheme.value === 'Teal',
  'text-pink-100': currentTheme.value === 'Pink',
  'text-indigo-100': currentTheme.value === 'Midnight',
}));
const themeTextSecondary = computed(() => ({
  'text-gray-600': currentTheme.value === 'Light',
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
const themeAccent = computed(() => ({
  'text-yellow-500': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'text-amber-600': currentTheme.value === 'Sepia',
  'text-blue-400': currentTheme.value === 'Blue',
  'text-purple-400': currentTheme.value === 'Purple',
  'text-green-400': currentTheme.value === 'Green',
  'text-orange-400': currentTheme.value === 'Orange',
  'text-teal-400': currentTheme.value === 'Teal',
  'text-pink-400': currentTheme.value === 'Pink',
  'text-indigo-400': currentTheme.value === 'Midnight',
}));
const themeButton = computed(() => ({
  'bg-yellow-500 text-white hover:bg-yellow-400 focus:ring-yellow-500': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'bg-amber-600 text-sepia-900 hover:bg-amber-500 focus:ring-amber-500': currentTheme.value === 'Sepia',
  'bg-blue-400 text-blue-900 hover:bg-blue-300 focus:ring-blue-400': currentTheme.value === 'Blue',
  'bg-purple-400 text-purple-900 hover:bg-purple-300 focus:ring-purple-400': currentTheme.value === 'Purple',
  'bg-green-400 text-green-900 hover:bg-green-300 focus:ring-green-400': currentTheme.value === 'Green',
  'bg-orange-400 text-orange-900 hover:bg-orange-300 focus:ring-orange-400': currentTheme.value === 'Orange',
  'bg-teal-400 text-teal-900 hover:bg-teal-300 focus:ring-teal-400': currentTheme.value === 'Teal',
  'bg-pink-400 text-pink-900 hover:bg-pink-300 focus:ring-pink-400': currentTheme.value === 'Pink',
  'bg-indigo-400 text-indigo-900 hover:bg-indigo-300 focus:ring-indigo-400': currentTheme.value === 'Midnight',
}));
const themeButtonSecondary = computed(() => ({
  'text-sky-500 hover:bg-gray-100 hover:text-sky-400 focus:ring-sky-500': currentTheme.value === 'Light',
  'text-sky-400 hover:bg-gray-800 hover:text-sky-300 focus:ring-sky-400': currentTheme.value === 'Dark',
  'text-amber-500 hover:bg-sepia-200 hover:text-amber-400 focus:ring-amber-500': currentTheme.value === 'Sepia',
  'text-blue-400 hover:bg-blue-800 hover:text-blue-300 focus:ring-blue-400': currentTheme.value === 'Blue',
  'text-purple-400 hover:bg-purple-800 hover:text-purple-300 focus:ring-purple-400': currentTheme.value === 'Purple',
  'text-green-400 hover:bg-green-800 hover:text-green-300 focus:ring-green-400': currentTheme.value === 'Green',
  'text-orange-400 hover:bg-orange-800 hover:text-orange-300 focus:ring-orange-400': currentTheme.value === 'Orange',
  'text-teal-400 hover:bg-teal-800 hover:text-teal-300 focus:ring-teal-400': currentTheme.value === 'Teal',
  'text-pink-400 hover:bg-pink-800 hover:text-pink-300 focus:ring-pink-400': currentTheme.value === 'Pink',
  'text-indigo-400 hover:bg-indigo-800 hover:text-indigo-300 focus:ring-indigo-400': currentTheme.value === 'Midnight',
}));
const themePanel = computed(() => ({
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

// Navigation items
const navItems = ref([
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'Portfolio', path: '/portfolio', icon: 'work' },
]);

// Mobile menu state
const showMobileMenu = ref(false);

const route = useRoute();
const isActive = (item) => {
  return route.path === item.path || (item.path !== '/' && route.path.startsWith(item.path));
};

// Close mobile menu on Escape
const onKeydown = (e) => {
  if (e.key === 'Escape') showMobileMenu.value = false;
};

watch(showMobileMenu, (val) => {
  if (val) window.addEventListener('keydown', onKeydown);
  else window.removeEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown);
});
</script>

<style scoped>
/* Panel slide animation */
.panel-slide-enter-active,
.panel-slide-leave-active {
  transition: transform 250ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 200ms;
}
.panel-slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.panel-slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.panel-slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.panel-slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Backdrop fade */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 200ms;
}
.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}
.overlay-fade-enter-to,
.overlay-fade-leave-from {
  opacity: 1;
}

/* Focus-visible improvements */
:focus {
  outline: none;
}
button:focus,
a:focus {
  box-shadow: 0 0 0 4px rgba(253, 224, 71, 0.12);
}

/* Small screen adjustments */
@media (max-width: 320px) {
  .max-w-5xl {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

/* Theme-specific background colors */
.bg-sepia-100 {
  background-color: #f3eadb; /* Matches DarkMode.vue sepia-theme */
}
.bg-sepia-200 {
  background-color: #f5f0e1; /* Derived from sepia palette */
}
.bg-blue-800 {
  background-color: #1e3a8a; /* Derived from blue palette */
}
.bg-blue-900 {
  background-color: #0b3d91; /* Matches DarkMode.vue blue-theme */
}
.bg-purple-800 {
  background-color: #3b1476; /* Derived from purple palette */
}
.bg-purple-900 {
  background-color: #4c1d95; /* Matches DarkMode.vue purple-theme */
}
.bg-green-800 {
  background-color: #064e3b; /* Derived from green palette */
}
.bg-green-900 {
  background-color: #065f46; /* Matches DarkMode.vue green-theme */
}
.bg-orange-800 {
  background-color: #7c2d12; /* Derived from orange palette */
}
.bg-orange-900 {
  background-color: #a04000; /* Matches DarkMode.vue orange-theme */
}
.bg-teal-800 {
  background-color: #115e59; /* Derived from teal palette */
}
.bg-teal-900 {
  background-color: #0f766e; /* Matches DarkMode.vue teal-theme */
}
.bg-pink-800 {
  background-color: #9d174d; /* Derived from pink palette */
}
.bg-pink-900 {
  background-color: #be185d; /* Matches DarkMode.vue pink-theme */
}
.bg-indigo-800 {
  background-color: #1e1b4b; /* Derived from indigo palette */
}
.bg-indigo-900 {
  background-color: #021124; /* Matches DarkMode.vue midnight-theme */
}

/* Theme-specific text colors */
.text-sepia-900 {
  color: #5b4636; /* Matches DarkMode.vue sepia-theme */
}
.text-sepia-700 {
  color: #8c552f; /* Derived from sepia palette */
}
.text-blue-100 {
  color: #e6f2ff; /* Matches DarkMode.vue blue-theme */
}
.text-blue-200 {
  color: #bfdbfe; /* Derived from blue palette */
}
.text-purple-100 {
  color: #efe7ff; /* Matches DarkMode.vue purple-theme */
}
.text-purple-200 {
  color: #ddd6fe; /* Derived from purple palette */
}
.text-green-100 {
  color: #e6fff4; /* Matches DarkMode.vue green-theme */
}
.text-green-200 {
  color: #a7f3d0; /* Derived from green palette */
}
.text-orange-100 {
  color: #fff4e6; /* Matches DarkMode.vue orange-theme */
}
.text-orange-200 {
  color: #fed7aa; /* Derived from orange palette */
}
.text-teal-100 {
  color: #e6fffb; /* Matches DarkMode.vue teal-theme */
}
.text-teal-200 {
  color: #99f6e4; /* Derived from teal palette */
}
.text-pink-100 {
  color: #fff0f6; /* Matches DarkMode.vue pink-theme */
}
.text-pink-200 {
  color: #f9a8d4; /* Derived from pink palette */
}
.text-indigo-100 {
  color: #dfefff; /* Matches DarkMode.vue midnight-theme */
}
.text-indigo-200 {
  color: #c7d2fe; /* Derived from indigo palette */
}
</style>
