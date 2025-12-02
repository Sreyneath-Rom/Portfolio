<!-- src/components/Navigation.vue -->
<template>
  <header class="fixed top-4 left-0 right-0 z-50 px-4">
    <!-- Navbar container (iOS 26 style) -->
    <div
      class="max-w-7xl mx-auto flex items-center justify-between rounded-3xl px-6 py-3 backdrop-blur-xl bg-white/10 dark:bg-black/30 shadow-lg transition-colors duration-300"
    >
      <!-- Logo / Brand -->
      <router-link to="/" class="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
        <div class="w-10 h-10 rounded-full overflow-hidden shadow-md">
          <img src="@/assets/image/me.jpg" alt="Sreyneath Rom" class="w-full h-full object-cover"/>
        </div>
        <span class="text-white font-bold tracking-tighter">SREYNEATH ROM</span>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center gap-4">
        <NavigationItem v-for="item in navItems" :key="item.label" :item="item"/>
        <a href="mailto:romsreyneath4@gmail.com"
           class="group relative inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-bold text-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110 bg-gradient-to-r from-purple-600 to-pink-600"
        >
          <span class="relative z-10 flex items-center gap-2 text-white">
            <span class="material-symbols-outlined text-2xl group-hover:scale-125 transition-transform">mail</span>
            Hire Me
          </span>
          <span class="absolute inset-0 -translate-x-full bg-white/40 skew-x-12 transition-transform duration-1000 group-hover:translate-x-full"></span>
        </a>

        <!-- Dark Mode Toggle -->
        <DarkMode/>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="showMobileMenu = !showMobileMenu"
              class="lg:hidden p-3 rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-xl hover:bg-white/20 transition-all duration-300 focus-visible:ring-4 focus-visible:ring-white/50"
              :aria-label="showMobileMenu ? 'Close menu' : 'Open menu'">
        <span class="material-symbols-outlined text-4xl text-white">
          {{ showMobileMenu ? 'close' : 'menu' }}
        </span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <teleport to="body">
      <transition name="mobile-menu">
        <div v-if="showMobileMenu" class="fixed inset-0 z-50 lg:hidden" @click="showMobileMenu = false">
          <div class="absolute inset-0 bg-black/80 backdrop-blur-2xl"></div>
          <div class="absolute inset-y-0 right-0 w-full max-w-md bg-white/10 dark:bg-black/30 backdrop-blur-3xl border-l border-white/20 shadow-3xl"
               @click.stop>
            <div class="flex flex-col h-full">
              <!-- Mobile Header -->
              <div class="p-6 border-b border-white/10 flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-cyan-500 to-purple-600 shadow-2xl flex items-center justify-center">
                    <span class="material-symbols-outlined text-3xl text-white">person</span>
                  </div>
                  <div>
                    <p class="text-2xl font-black text-black">Sreyneath Rom</p>
                    <p class="text-white/70 text-sm">Full-Stack Developer</p>
                  </div>
                </div>
                <button @click="showMobileMenu = false" class="p-2 rounded-full bg-white/10 hover:bg-white/20">
                  <span class="material-symbols-outlined text-3xl text-white">close</span>
                </button>
              </div>

              <!-- Dark Mode Toggle -->
              <div class="p-6 flex justify-center">
                <DarkMode/>
              </div>

              <!-- Mobile Navigation Items -->
              <nav class="flex-1 p-6 space-y-4">
                <NavigationItem v-for="item in navItems" :key="item.label" :item="item"
                                @click="showMobileMenu = false" class="block w-full"/>
              </nav>

              <div class="p-6 border-t border-white/10"></div>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import NavigationItem from './NavigationItem.vue'
import DarkMode from './DarkMode.vue'

const router = useRouter()
const showMobileMenu = ref(false)

const navItems = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'Portfolio', path: '/portfolio', icon: 'work' },
]

// Close mobile menu on route change
watch(() => router.currentRoute.value.path, () => {
  showMobileMenu.value = false
})

// Lock scroll when mobile menu is open
watch(showMobileMenu, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
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
