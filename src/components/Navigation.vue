<template>
    <div class="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <nav class="h-16 w-10/12 m-auto flex items-center justify-between gap-4 ">
            <!-- Left: Logo + Title + Search -->
            <div id="nav-item" class="flex items-center gap-6 ">
                <router-link to="/" class="flex items-center gap-2 hover:opacity-80 transition">
                    <span class="material-symbols-outlined text-3xl text-yellow-600">work</span>
                    <span class="text-2xl font-semibold text-yellow-600">Portfolio</span>
                </router-link>

                <!-- Search Bar with Icons -->
                <div class="relative ml-50">
                    <!-- Search Icon -->
                    <span
                        class="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-400">
                        search
                    </span>

                    <!-- Input Field -->
                    <input type="text" placeholder="Search..." aria-label="Search library"
                        class="w-120 px-5 py-2 text-white bg-transparent border border-sky-400 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-600 shadow-inner" />

                    <!-- Mic Icon -->
                    <span
                        class="material-symbols-outlined absolute right-3 top-1/2 transform -translate-y-1/2 text-sky-400 cursor-pointer hover:text-sky-600">
                        mic
                    </span>
                </div>
            </div>

            <!-- Right: Navigation Links -->
            <div class="flex items-center gap-6">
                <NavigationItem v-for="item in navItems" :key="item.label" :item="item" :to="item.path" />
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref } from "vue";
import NavigationItem from "./NavigationItem.vue";

const navItems = ref([
    { label: "Home", path: "/", icon: "home" },
    { label: "Portfolio", path: "/portfolio", icon: "work" },
]);
</script>
