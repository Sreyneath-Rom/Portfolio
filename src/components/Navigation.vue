<template>
    <div class="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <nav class="h-16 w-10/12 m-auto flex items-center justify-between gap-4">
            <!-- Left: Logo + Title + Search -->
            <div id="nav-item" class="flex items-center gap-6">
                <router-link to="/" class="flex items-center gap-2 hover:opacity-80 transition">
                    <span class="material-symbols-outlined text-3xl text-yellow-600">work</span>
                    <span class="text-2xl font-semibold text-yellow-600">Portfolio</span>
                </router-link>

                <!-- Search Bar with Icons (hidden on mobile) -->
                <div class="relative ml-50 hidden md:block">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-400">
                        search
                    </span>
                    <input type="text" placeholder="Search..." aria-label="Search library"
                        class="w-120 px-5 py-2 text-white bg-transparent border border-sky-400 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-600 shadow-inner" />
                    <span class="material-symbols-outlined absolute right-3 top-1/2 transform -translate-y-1/2 text-sky-400 cursor-pointer hover:text-sky-600">
                        mic
                    </span>
                </div>
            </div>

            <!-- Hamburger Menu (visible on mobile) -->
            <button class="md:hidden flex items-center" @click="showMobileMenu = !showMobileMenu">
                <span class="material-symbols-outlined text-3xl text-yellow-600">menu</span>
            </button>

            <!-- Right: Navigation Links (hidden on mobile) -->
            <div class="hidden md:flex items-center gap-6">
                <NavigationItem v-for="item in navItems" :key="item.label" :item="item" :to="item.path" />
            </div>
        </nav>

        <!-- Mobile Menu Drawer -->
        <transition name="fade">
            <div v-if="showMobileMenu" class="md:hidden fixed inset-0 bg-black bg-opacity-40 z-50" @click="showMobileMenu = false">
                <div class="absolute top-0 right-0 w-2/3 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col gap-6"
                     @click.stop>
                    <button class="self-end mb-4" @click="showMobileMenu = false">
                        <span class="material-symbols-outlined text-2xl">close</span>
                    </button>
                    <NavigationItem v-for="item in navItems" :key="item.label" :item="item" :to="item.path" @click="showMobileMenu = false" />
                    <!-- Mobile Search Bar -->
                    <div class="relative mt-4">
                        <span class="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-400">
                            search
                        </span>
                        <input type="text" placeholder="Search..." aria-label="Search library"
                            class="w-full px-5 py-2 text-black bg-transparent border border-sky-400 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-600 shadow-inner" />
                        <span class="material-symbols-outlined absolute right-3 top-1/2 transform -translate-y-1/2 text-sky-400 cursor-pointer hover:text-sky-600">
                            mic
                        </span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from "vue";
import NavigationItem from "./NavigationItem.vue";

const navItems = ref([
    { label: "Home", path: "/", icon: "home" },
    { label: "Portfolio", path: "/portfolio", icon: "work" },
]);

const showMobileMenu = ref(false);
</script>

<style scoped>
/* Simple fade transition for mobile menu */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
