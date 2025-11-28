<!-- src/components/Navigation.vue -->
<template>
  <header class="fixed top-0 left-0 right-0 z-50" :class="headerClasses">
    <!-- Glassmorphic backdrop -->
    <div class="absolute inset-0 -z-10 bg-white/10 dark:bg-black/30 backdrop-blur-2xl border-b border-white/20"></div>

    <nav class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Logo -->
      <router-link
        to="/"
        class="group flex items-center gap-4 hover:scale-105 transition-all duration-300"
        aria-label="Go to homepage"
      >
        <div class="relative">
          <!-- Pulsing glow ring -->
          <div class="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-70 blur-2xl group-hover:opacity-100 animate-pulse transition-all duration-700"></div>
          <div class="relative p-4 rounded-full bg-black/50 backdrop-blur-xl border-2 border-white/30 shadow-2xl">
            <span class="material-symbols-outlined text-4xl text-white drop-shadow-2xl">code</span>
          </div>
        </div>
        <span class="text-3xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          SREYNEATH ROM
        </span>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center gap-6">
        <!-- Using your beautiful NavigationItem component -->
        <NavigationItem
          v-for="item in navItems"
          :key="item.label"
          :item="item"
        />

        <!-- Theme Toggle -->
        <DarkMode />

        <!-- Hire Me CTA -->
        <a
          href="mailto:romsreyneath4@gmail.com"
          class="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl overflow-hidden transition-all duration-500 hover:scale-110"
          :class="primaryButtonBg"
        >
          <span class="relative z-10 flex items-center gap-3 text-white">
            <span class="material-symbols-outlined text-2xl group-hover:scale-125 transition-transform">mail</span>
            Hire Me
          </span>
          <!-- Shine sweep -->
          <span class="absolute inset-0 -translate-x-full bg-white/40 skew-x-12 transition-transform duration-1000 group-hover:translate-x-full"></span>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="showMobileMenu = !showMobileMenu"
        class="lg:hidden p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 hover:bg-white/20 transition-all duration-300"
        :aria-label="showMobileMenu ? 'Close menu' : 'Open menu'"
      >
        <span class="material-symbols-outlined text-4xl text-white">
          {{ showMobileMenu ? 'close' : 'menu' }}
        </span>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <teleport to="body">
      <transition name="mobile-menu">
        <div v-if="showMobileMenu" class="fixed inset-0 z-50 lg:hidden" @click="showMobileMenu = false">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/80 backdrop-blur-2xl"></div>

          <!-- Panel -->
          <div
            class="absolute inset-y-0 right-0 w-full max-w-md bg-gradient-to-br from-black/95 via-purple-900/50 to-pink-900/30 backdrop-blur-3xl border-l border-white/20 shadow-3xl"
            @click.stop
          >
            <div class="flex flex-col h-full">
              <!-- Header -->
              <div class="p-8 border-b border-white/10">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-5">
                    <div class="p-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 shadow-2xl">
                      <span class="material-symbols-outlined text-4xl text-white">person</span>
                    </div>
                    <div>
                      <p class="text-3xl font-black text-white">Sreyneath Rom</p>
                      <p class="text-white/70">Full-Stack Developer</p>
                    </div>
                  </div>
                  <button @click="showMobileMenu = false" class="p-3 rounded-full bg-white/10 hover:bg-white/20">
                    <span class="material-symbols-outlined text-4xl text-white">close</span>
                  </button>
                </div>
              </div>

              <!-- Mobile Nav Items -->
              <nav class="flex-1 p-8 space-y-4">
                <NavigationItem
                  v-for="item in navItems"
                  :key="item.label"
                  :item="item"
                  class="block w-full"
                  @click="showMobileMenu = false"
                />
              </nav>

              <!-- Mobile Theme Toggle -->
              <div class="p-8 border-t border-white/10">
                <DarkMode class="w-full justify-center" />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import NavigationItem from '@/components/NavigationItem.vue'
import DarkMode from '@/components/DarkMode.vue'
import { useDarkMode } from '@/composables/useDarkMode'

const showMobileMenu = ref(false)
const { currentTheme } = useDarkMode()

// Full navigation items
const navItems = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'Portfolio', path: '/portfolio', icon: 'work' },

]

const primaryButtonBg = computed(() => {
  const map = {
    Light: 'bg-gray-800 hover:bg-gray-900',
    Dark: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
    Sepia: 'bg-gradient-to-r from-amber-600 to-orange-600',
    Blue: 'bg-gradient-to-r from-blue-600 to-cyan-600',
    Purple: 'bg-gradient-to-r from-purple-600 to-pink-600',
    Green: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    Orange: 'bg-gradient-to-r from-orange-600 to-red-600',
    Teal: 'bg-gradient-to-r from-teal-600 to-cyan-600',
    Pink: 'bg-gradient-to-r from-pink-600 to-rose-600',
    Midnight: 'bg-gradient-to-r from-indigo-600 to-purple-600',
  }
  return map[currentTheme.value] || 'bg-gradient-to-r from-purple-600 to-pink-600'
})

const headerClasses = 'transition-all duration-500 supports-backdrop-blur:bg-white/10 dark:supports-backdrop-blur:bg-black/30'
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  transform: translateX(100%);
}
</style>