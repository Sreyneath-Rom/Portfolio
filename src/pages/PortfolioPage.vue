<template>
  <div class="min-h-screen font-sans transition-colors duration-300" :class="themeClasses">
    <!-- Hero Section -->
    <section id="hero" class="py-24 px-6 text-center animate-section" :class="themeBg">
      <img src="@/assets/image/1.png" alt="Profile Picture" class="w-36 h-36 rounded-full mx-auto mb-6 border-4 shadow-lg object-cover" :class="themeCard" />
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4" :class="themeAccent">My Professional Portfolio</h1>
      <p class="max-w-2xl mx-auto mb-8 text-lg md:text-xl leading-relaxed" :class="themeText">
        <span id="typed-text"></span>
      </p>
      <div class="flex justify-center gap-4 mb-8">
        <button @click="openContactModal" class="px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r" :class="[themeButton, 'from-yellow-400 to-yellow-600']">
          Contact Me
        </button>
        <a :href="cvLink" class="px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r" :class="[themeButtonSecondary, 'from-sky-400 to-sky-600']">
          Download CV
        </a>
      </div>
      <div class="flex justify-center gap-6">
        <a href="https://github.com/Sreyneath-Rom" target="_blank" rel="noopener noreferrer" class="text-2xl hover:scale-110 transition-transform" :class="themeText" aria-label="GitHub Profile">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/sreyneath-rom" target="_blank" rel="noopener noreferrer" class="text-2xl hover:scale-110 transition-transform" :class="themeText" aria-label="LinkedIn Profile">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </section>

    <!-- Project Section -->
    <section id="projects" class="py-16 px-6 animate-section" :class="themeCard">
      <Card />
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Card from '@/components/Card.vue';
import Footer from '@/components/Footer.vue';
import { useDarkMode } from '@/composables/useDarkMode';
import Typed from 'typed.js';

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
  'bg-gray-100': currentTheme.value === 'Light',
  'bg-gray-700': currentTheme.value === 'Dark',
  'bg-sepia-200': currentTheme.value === 'Sepia',
  'bg-blue-800': currentTheme.value === 'Blue',
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
  'text-gray-900 hover:bg-yellow-400 focus:ring-yellow-500': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'text-sepia-900 hover:bg-amber-500 focus:ring-amber-500': currentTheme.value === 'Sepia',
  'text-blue-900 hover:bg-blue-300 focus:ring-blue-400': currentTheme.value === 'Blue',
}));
const themeButtonSecondary = computed(() => ({
  'text-white hover:bg-sky-400 focus:ring-sky-500': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'text-sepia-900 hover:bg-amber-400 focus:ring-amber-500': currentTheme.value === 'Sepia',
  'text-white hover:bg-blue-400 focus:ring-blue-500': currentTheme.value === 'Blue',
}));
const themeCard = computed(() => ({
  'bg-white': currentTheme.value === 'Light',
  'bg-gray-800': currentTheme.value === 'Dark',
  'bg-sepia-100': currentTheme.value === 'Sepia',
  'bg-blue-900': currentTheme.value === 'Blue',
}));

// CV link
const cvLink = 'https://www.canva.com/design/DAGjQTop64Q/Y7LRgoDTg1TlutXgBb9YxQ/view?utm_content=DAGjQTop64Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8cec6f4468';

// Mobile menu
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// Contact modal
const showContactModal = ref(false);
const openContactModal = () => {
  showContactModal.value = true;
  menuOpen.value = false;
};

// Typed.js animation
onMounted(() => {
  new Typed('#typed-text', {
    strings: [
      'Explore my projects showcasing skills in web development.',
      'Building innovative IT solutions.',
      'Crafting responsive and modern interfaces.',
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
  });
});
</script>

<style scoped>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Font Awesome for icons */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

/* Slide animation for mobile menu */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* Section fade-in animation */
.animate-section {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>