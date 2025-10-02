<template>
  <div class="min-h-screen mt-16 md:mt-20 font-sans text-gray-800 dark:text-gray-200 dark:bg-gray-900 p-4 md:p-6">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-16 px-4 rounded-lg shadow-lg">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <!-- Text -->
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h1 id="welcome-title" class="text-3xl md:text-4xl font-bold text-yellow-500 mb-4"></h1>
          <p class="text-base md:text-lg text-gray-300 mb-6">
            Explore my journey in preparing for a career in the IT sector.
          </p>
          <router-link to="/portfolio" class="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
            View Portfolio
          </router-link>
        </div>
        <!-- Image -->
        <div class="w-full md:w-1/2 flex justify-center">
          <div class="relative">
            <div class="absolute w-36 h-36 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-500 blur-2xl opacity-50"></div>
            <img src="@/assets/image/me.jpg" alt="Sreyneath Rom profile picture" class="relative w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Marquee -->
    <div class="max-w-6xl mx-auto mt-8">
      <Marquee />
    </div>

    <!-- About Section -->
    <hr class="border-yellow-500 dark:border-gray-600 my-8" />
    <Aboutpage />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Typed from 'typed.js';
import Aboutpage from '@/components/Aboutpage.vue';
import Footer from '@/components/Footer.vue';
import Marquee from '@/components/Marquee.vue';
import { useDarkMode } from '@/composables/useDarkMode';

useDarkMode();

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
.animate-fadeIn {
  animation: fadeIn 0.8s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>