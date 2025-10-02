<template>
  <div class="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
    <nav class="max-w-5xl mx-auto h-16 flex items-center justify-between px-4">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 hover:opacity-90 transition" aria-label="Go to homepage">
        <span class="material-symbols-outlined text-2xl text-yellow-500 md:text-3xl">work</span>
        <span class="text-lg font-semibold text-yellow-500 md:text-xl">SREYNEATH ROM</span>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden items-center gap-4 md:flex">
        <router-link v-for="item in navItems" :key="item.label" :to="item.path" class="flex items-center gap-2 px-3 py-2 text-sky-500 hover:text-sky-400 transition" :aria-label="`Go to ${item.label} page`">
          <span class="material-symbols-outlined text-xl">{{ item.icon }}</span>
          <span>{{ item.label }}</span>
        </router-link>
        <DarkMode :isDark="isDark" @toggle="toggle" />
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden" @click="showMobileMenu = !showMobileMenu" aria-label="Toggle mobile menu">
        <span class="material-symbols-outlined text-3xl text-yellow-500">{{ showMobileMenu ? 'close' : 'menu' }}</span>
      </button>

      <!-- Mobile Menu -->
      <transition name="slide">
        <div v-if="showMobileMenu" class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50" @click="showMobileMenu = false">
          <div class="absolute inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-800 p-6 flex flex-col gap-6" @click.stop>
            <!-- Close Button -->
            <button class="self-end" @click="showMobileMenu = false" aria-label="Close mobile menu">
              <span class="material-symbols-outlined text-3xl text-gray-600 dark:text-gray-300">close</span>
            </button>
            <!-- Menu Items -->
            <router-link v-for="item in navItems" :key="item.label" :to="item.path" @click="showMobileMenu = false" class="flex items-center gap-3 px-4 py-3 text-lg text-sky-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition" :aria-label="`Go to ${item.label} page`">
              <span class="material-symbols-outlined text-2xl">{{ item.icon }}</span>
              <span>{{ item.label }}</span>
            </router-link>
            <!-- Dark Mode Toggle -->
            <div class="flex items-center gap-3 px-4 py-3">
              <span class="text-lg text-gray-600 dark:text-gray-300">Theme</span>
              <DarkMode :isDark="isDark" @toggle="toggle" />
            </div>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DarkMode from '@/components/DarkMode.vue';
import { useDarkMode } from '@/composables/useDarkMode';

// Dark mode
const { isDark, toggle } = useDarkMode();

// Navigation items
const navItems = ref([
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'Portfolio', path: '/portfolio', icon: 'work' },
]);

// Mobile menu state
const showMobileMenu = ref(false);
</script>

<style scoped>
/* Slide animation for mobile menu */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Adjust for very small screens */
@media (max-width: 320px) {
  .max-w-5xl {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>