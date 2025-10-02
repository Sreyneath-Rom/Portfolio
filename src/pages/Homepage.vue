<template>
  <div class="min-h-screen mt-16 md:mt-20 font-sans p-4 md:p-6 transition-colors duration-300" :class="themeClasses">
    <!-- Hero Section -->
    <section class="py-16 px-4 rounded-lg shadow-lg" :class="themeBg">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <!-- Text -->
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h1 id="welcome-title" class="text-3xl md:text-4xl font-bold mb-4" :class="themeAccent"></h1>
          <p class="text-base md:text-lg mb-6" :class="themeText">
            Explore my journey in preparing for a career in the IT sector.
          </p>
          <router-link to="/portfolio" class="px-6 py-3 rounded-lg font-semibold transition" :class="themeButton">
            View Portfolio
          </router-link>
        </div>
        <!-- Image -->
        <div class="w-full md:w-1/2 flex justify-center">
          <div class="relative">
            <div class="absolute w-36 h-36 md:w-56 md:h-56 rounded-full blur-2xl opacity-50" :class="themeBlur"></div>
            <img src="@/assets/image/me.jpg" alt="Sreyneath Rom profile picture" class="relative w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <hr class="my-8" :class="themeBorder" />
    <Aboutpage />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import Typed from 'typed.js';
import Aboutpage from '@/components/Aboutpage.vue';
import Footer from '@/components/Footer.vue';
import { useDarkMode } from '@/composables/useDarkMode';

// Theme management
const { currentTheme } = useDarkMode();

// Theme classes
const themeClasses = computed(() => ({
  'bg-white text-gray-800': currentTheme.value === 'Light',
  'bg-gray-800 text-gray-200': currentTheme.value === 'Dark',
  'bg-sepia-100 text-sepia-900': currentTheme.value === 'Sepia',
  'bg-blue-900 text-blue-100': currentTheme.value === 'Blue',
}));
const themeBg = computed(() => ({
  'bg-gradient-to-r from-gray-100 to-gray-200': currentTheme.value === 'Light',
  'bg-gradient-to-r from-gray-700 to-gray-800': currentTheme.value === 'Dark',
  'bg-gradient-to-r from-sepia-200 to-sepia-300': currentTheme.value === 'Sepia',
  'bg-gradient-to-r from-blue-800 to-blue-900': currentTheme.value === 'Blue',
}));
const themeText = computed(() => ({
  'text-gray-800': currentTheme.value === 'Light',
  'text-gray-200': currentTheme.value === 'Dark',
  'text-sepia-900': currentTheme.value === 'Sepia',
  'text-blue-100': currentTheme.value === 'Blue',
}));
const themeAccent = computed(() => ({
  'text-yellow-500': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'text-amber-600': currentTheme.value === 'Sepia',
  'text-blue-400': currentTheme.value === 'Blue',
}));
const themeButton = computed(() => ({
  'bg-yellow-500 text-gray-900 hover:bg-yellow-400': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'bg-amber-600 text-sepia-900 hover:bg-amber-500': currentTheme.value === 'Sepia',
  'bg-blue-400 text-blue-900 hover:bg-blue-300': currentTheme.value === 'Blue',
}));
const themeBlur = computed(() => ({
  'bg-gradient-to-tr from-yellow-400 to-purple-500': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'bg-gradient-to-tr from-amber-400 to-amber-600': currentTheme.value === 'Sepia',
  'bg-gradient-to-tr from-blue-400 to-blue-600': currentTheme.value === 'Blue',
}));
const themeBorder = computed(() => ({
  'border-yellow-500': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'border-amber-600': currentTheme.value === 'Sepia',
  'border-blue-400': currentTheme.value === 'Blue',
}));

// Animate welcome title
onMounted(() => {
  new Typed('#welcome-title', {
    strings: ['Welcome to My Portfolio', 'Explore My IT Journey', 'My Name is Sreyneath'],
    typeSpeed: 70,
    backSpeed: 30,
    loop: true,
    showCursor: false,
  });
});
</script>

<style scoped>
/* Fade animation */
.animate-fadeIn {
  animation: fadeIn 0.8s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Smooth transitions for theme changes */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
</style>