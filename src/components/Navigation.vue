<template>
  <div class="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
    <nav class="max-w-5xl mx-auto h-16 flex items-center justify-between px-4 md:px-6">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-3 hover:opacity-95 transition" aria-label="Go to homepage">
        <span class="material-symbols-outlined text-2xl text-yellow-500 md:text-3xl">work</span>
        <span class="text-lg font-semibold text-yellow-500 md:text-xl tracking-wide">SREYNEATH ROM</span>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden items-center gap-3 md:flex">
        <router-link
          v-for="item in navItems"
          :key="item.label"
          :to="item.path"
          :class="['flex items-center gap-2 px-3 py-2 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-yellow-300', isActive(item) ? 'bg-yellow-500 text-white shadow' : 'text-sky-500 hover:text-sky-400 hover:bg-gray-100 dark:hover:bg-gray-800']"
          :aria-label="`Go to ${item.label} page`"
          :aria-current="isActive(item) ? 'page' : null"
        >
          <span class="material-symbols-outlined text-xl">{{ item.icon }}</span>
          <span class="font-medium">{{ item.label }}</span>
        </router-link>

        <DarkMode :isDark="isDark" @toggle="toggleDarkMode" />
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
        @click="showMobileMenu = !showMobileMenu"
        aria-label="Toggle mobile menu"
        :aria-expanded="String(showMobileMenu)"
      >
        <span class="material-symbols-outlined text-3xl text-yellow-500">{{ showMobileMenu ? 'close' : 'menu' }}</span>
      </button>

      <!-- Mobile Menu -->
      <transition name="overlay-fade">
        <div v-if="showMobileMenu" class="md:hidden fixed inset-0 z-50" @click="showMobileMenu = false">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity"></div>

          <!-- Sliding Panel -->
          <transition name="panel-slide">
            <aside
              class="absolute inset-y-0 right-0 w-80 bg-white dark:bg-gray-900 p-6 flex flex-col gap-5 shadow-xl rounded-l-lg"
              @click.stop
            >
              <!-- Close Button -->
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-2xl text-yellow-500">work</span>
                  <span class="font-semibold text-yellow-500">Menu</span>
                </div>
                <button class="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300" @click="showMobileMenu = false" aria-label="Close mobile menu">
                  <span class="material-symbols-outlined text-3xl text-gray-600 dark:text-gray-300">close</span>
                </button>
              </div>

              <!-- Menu Items -->
              <nav class="flex flex-col gap-2">
                <router-link
                  v-for="item in navItems"
                  :key="item.label"
                  :to="item.path"
                  @click="showMobileMenu = false"
                  :class="['flex items-center gap-3 px-4 py-3 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-yellow-300', isActive(item) ? 'bg-yellow-500 text-white' : 'text-sky-500 hover:bg-gray-100 dark:hover:bg-gray-800']"
                  :aria-label="`Go to ${item.label} page`"
                  :aria-current="isActive(item) ? 'page' : null"
                >
                  <span class="material-symbols-outlined text-2xl">{{ item.icon }}</span>
                  <span class="font-medium">{{ item.label }}</span>
                </router-link>
              </nav>

              <!-- Dark Mode Toggle -->
              <div class="mt-auto flex items-center justify-between px-2 py-2">
                <div class="flex items-center gap-3">
                  <span class="text-lg text-gray-700 dark:text-gray-300">Theme</span>
                </div>
                <DarkMode :isDark="isDark" @toggle="toggleDarkMode" />
              </div>
            </aside>
          </transition>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, watch, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import DarkMode from '@/components/DarkMode.vue';
import { useDarkMode } from '@/composables/useDarkMode';

const { isDark, toggle: toggleDarkMode } = useDarkMode();

// Navigation items
const navItems = ref([
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'Portfolio', path: '/portfolio', icon: 'work' },
]);

// Mobile menu state
const showMobileMenu = ref(false);

const route = useRoute();
const isActive = (item) => {
  // mark active when paths match or when route starts with the item's path (for nested routes)
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
  transition: transform 250ms cubic-bezier(.2,.8,.2,1), opacity 200ms;
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
</style>