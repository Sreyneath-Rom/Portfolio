
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
          <router-link to="/portfolio" class="px-6 py-3 rounded-lg font-semibold transition-colors duration-200" :class="themeButton">
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
  'bg-purple-900 text-purple-100': currentTheme.value === 'Purple',
  'bg-green-900 text-green-100': currentTheme.value === 'Green',
  'bg-orange-900 text-orange-100': currentTheme.value === 'Orange',
  'bg-teal-900 text-teal-100': currentTheme.value === 'Teal',
  'bg-pink-900 text-pink-100': currentTheme.value === 'Pink',
  'bg-indigo-900 text-indigo-100': currentTheme.value === 'Midnight',
}));
const themeBg = computed(() => ({
  'bg-gradient-to-r from-gray-100 to-gray-200': currentTheme.value === 'Light',
  'bg-gradient-to-r from-gray-700 to-gray-800': currentTheme.value === 'Dark',
  'bg-gradient-to-r from-sepia-200 to-sepia-300': currentTheme.value === 'Sepia',
  'bg-gradient-to-r from-blue-800 to-blue-900': currentTheme.value === 'Blue',
  'bg-gradient-to-r from-purple-800 to-purple-900': currentTheme.value === 'Purple',
  'bg-gradient-to-r from-green-800 to-green-900': currentTheme.value === 'Green',
  'bg-gradient-to-r from-orange-800 to-orange-900': currentTheme.value === 'Orange',
  'bg-gradient-to-r from-teal-800 to-teal-900': currentTheme.value === 'Teal',
  'bg-gradient-to-r from-pink-800 to-pink-900': currentTheme.value === 'Pink',
  'bg-gradient-to-r from-indigo-800 to-indigo-900': currentTheme.value === 'Midnight',
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
  'bg-yellow-500 text-gray-900 hover:bg-yellow-400': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'bg-amber-600 text-sepia-900 hover:bg-amber-500': currentTheme.value === 'Sepia',
  'bg-blue-400 text-blue-900 hover:bg-blue-300': currentTheme.value === 'Blue',
  'bg-purple-400 text-purple-900 hover:bg-purple-300': currentTheme.value === 'Purple',
  'bg-green-400 text-green-900 hover:bg-green-300': currentTheme.value === 'Green',
  'bg-orange-400 text-orange-900 hover:bg-orange-300': currentTheme.value === 'Orange',
  'bg-teal-400 text-teal-900 hover:bg-teal-300': currentTheme.value === 'Teal',
  'bg-pink-400 text-pink-900 hover:bg-pink-300': currentTheme.value === 'Pink',
  'bg-indigo-400 text-indigo-900 hover:bg-indigo-300': currentTheme.value === 'Midnight',
}));
const themeBlur = computed(() => ({
  'bg-gradient-to-tr from-yellow-400 to-purple-500': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'bg-gradient-to-tr from-amber-400 to-amber-600': currentTheme.value === 'Sepia',
  'bg-gradient-to-tr from-blue-400 to-blue-600': currentTheme.value === 'Blue',
  'bg-gradient-to-tr from-purple-400 to-purple-600': currentTheme.value === 'Purple',
  'bg-gradient-to-tr from-green-400 to-green-600': currentTheme.value === 'Green',
  'bg-gradient-to-tr from-orange-400 to-orange-600': currentTheme.value === 'Orange',
  'bg-gradient-to-tr from-teal-400 to-teal-600': currentTheme.value === 'Teal',
  'bg-gradient-to-tr from-pink-400 to-pink-600': currentTheme.value === 'Pink',
  'bg-gradient-to-tr from-indigo-400 to-indigo-600': currentTheme.value === 'Midnight',
}));
const themeBorder = computed(() => ({
  'border-yellow-500': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'border-amber-600': currentTheme.value === 'Sepia',
  'border-blue-400': currentTheme.value === 'Blue',
  'border-purple-400': currentTheme.value === 'Purple',
  'border-green-400': currentTheme.value === 'Green',
  'border-orange-400': currentTheme.value === 'Orange',
  'border-teal-400': currentTheme.value === 'Teal',
  'border-pink-400': currentTheme.value === 'Pink',
  'border-indigo-400': currentTheme.value === 'Midnight',
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

/* Theme-specific background colors */
.bg-sepia-100 {
  background-color: #f3eadb; /* Matches DarkMode.vue sepia-theme */
}
.bg-blue-900 {
  background-color: #0b3d91; /* Matches DarkMode.vue blue-theme */
}
.bg-purple-900 {
  background-color: #4c1d95; /* Matches DarkMode.vue purple-theme */
}
.bg-green-900 {
  background-color: #065f46; /* Matches DarkMode.vue green-theme */
}
.bg-orange-900 {
  background-color: #a04000; /* Matches DarkMode.vue orange-theme */
}
.bg-teal-900 {
  background-color: #0f766e; /* Matches DarkMode.vue teal-theme */
}
.bg-pink-900 {
  background-color: #be185d; /* Matches DarkMode.vue pink-theme */
}
.bg-indigo-900 {
  background-color: #021124; /* Matches DarkMode.vue midnight-theme */
}

/* Theme-specific text colors */
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

/* Theme-specific gradient colors */
.bg-gradient-to-r.from-sepia-200 {
  --tw-gradient-from: #f5f0e1; /* Derived from sepia palette */
}
.bg-gradient-to-r.to-sepia-300 {
  --tw-gradient-to: #ede4d3; /* Derived from sepia palette */
}
.bg-gradient-to-r.from-blue-800 {
  --tw-gradient-from: #1e3a8a; /* Derived from blue palette */
}
.bg-gradient-to-r.to-blue-900 {
  --tw-gradient-to: #0b3d91; /* Matches DarkMode.vue blue-theme */
}
.bg-gradient-to-r.from-purple-800 {
  --tw-gradient-from: #3b1476; /* Derived from purple palette */
}
.bg-gradient-to-r.to-purple-900 {
  --tw-gradient-to: #4c1d95; /* Matches DarkMode.vue purple-theme */
}
.bg-gradient-to-r.from-green-800 {
  --tw-gradient-from: #064e3b; /* Derived from green palette */
}
.bg-gradient-to-r.to-green-900 {
  --tw-gradient-to: #065f46; /* Matches DarkMode.vue green-theme */
}
.bg-gradient-to-r.from-orange-800 {
  --tw-gradient-from: #7c2d12; /* Derived from orange palette */
}
.bg-gradient-to-r.to-orange-900 {
  --tw-gradient-to: #a04000; /* Matches DarkMode.vue orange-theme */
}
.bg-gradient-to-r.from-teal-800 {
  --tw-gradient-from: #115e59; /* Derived from teal palette */
}
.bg-gradient-to-r.to-teal-900 {
  --tw-gradient-to: #0f766e; /* Matches DarkMode.vue teal-theme */
}
.bg-gradient-to-r.from-pink-800 {
  --tw-gradient-from: #9d174d; /* Derived from pink palette */
}
.bg-gradient-to-r.to-pink-900 {
  --tw-gradient-to: #be185d; /* Matches DarkMode.vue pink-theme */
}
.bg-gradient-to-r.from-indigo-800 {
  --tw-gradient-from: #1e1b4b; /* Derived from indigo palette */
}
.bg-gradient-to-r.to-indigo-900 {
  --tw-gradient-to: #021124; /* Matches DarkMode.vue midnight-theme */
}
</style>
