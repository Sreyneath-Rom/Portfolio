<template>
  <div
    :class="['min-h-screen transition-colors duration-700 relative', bgClass]"
    :style="themeVars"
  >
    <!-- Navigation -->
    <Navigation />

    <!-- Background gradient + overlay -->
    <div class="absolute inset-0 -z-20" :class="gradientClass"></div>
    <div
      class="absolute inset-0 -z-10 bg-black/20 backdrop-blur-3xl transition-opacity duration-700"
    ></div>

    <!-- Main Hero Section -->
    <main class="relative pt-28 pb-16">
      
      <!-- NEW HERO SECTION -->
      <section class="py-16 px-4 rounded-lg shadow-lg" :class="themeBg">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">

          <!-- Left: Text -->
          <div class="w-full md:w-1/2 text-center md:text-left">
            <h1
              class="text-3xl md:text-4xl font-bold mb-4 transition-all duration-700"
              :class="[
                themeAccent,
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
              ]"
            >
              <span ref="typedEl"></span>
            </h1>

            <p class="text-base md:text-lg mb-6" :class="themeText">
              Explore my journey in preparing for a career in the IT sector.
            </p>

            <router-link
              to="/portfolio"
              class="px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              :class="themeButton"
            >
              View Portfolio
            </router-link>
          </div>

          <!-- Right: Image -->
          <div class="w-full md:w-1/2 flex justify-center">
            <div class="relative">
              <div
                class="absolute w-36 h-36 md:w-56 md:h-56 rounded-full blur-2xl opacity-50"
                :class="themeBlur"
              ></div>

              <img
                src="@/assets/image/me.jpg"
                alt="Sreyneath Rom profile picture"
                class="relative w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg object-cover"
              />
            </div>
          </div>

        </div>
      </section>

     
    </main>
 <!-- About Section -->
    
        <Aboutpage />
      
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import Typed from "typed.js";

import Navigation from "@/components/Navigation.vue";
import Aboutpage from "@/components/Aboutpage.vue";
import Footer from "@/components/Footer.vue";
import { useDarkMode } from "@/composables/useDarkMode";

const { currentTheme, bgClass, textClass, accentClass, themeBg, themeText, themeButton, themeBlur, themeAccent } =
  useDarkMode();

// Typed.js
const typedEl = ref<HTMLElement | null>(null);
let typedInstance: any = null;

// Entrance animation
const titleVisible = ref(false);

// Backgrounds
const gradientClass = computed(() =>
  ({
    Light: "bg-gradient-to-br from-gray-100 via-white to-gray-50",
    Dark: "bg-gradient-to-br from-gray-900 via-indigo-900 to-black",
    Sepia: "bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100",
    Purple: "bg-gradient-to-br from-purple-950 via-pink-900 to-rose-900",
  }[currentTheme.value] ?? "bg-gradient-to-br from-gray-900 via-indigo-900 to-black")
);

// Theme variables
const themeVars = computed(() => ({
  "--accent-color": currentTheme.value === "Dark" ? "#8b5cf6" : "#06b6d4",
  transition: "background-color 0.6s ease, color 0.6s ease",
}));

// About scrolling
const aboutRef = ref<HTMLElement | null>(null);
function scrollToAbout() {
  aboutRef.value?.scrollIntoView({ behavior: "smooth" });
}

// Mounted
onMounted(() => {
  if (typedEl.value) {
    typedInstance = new Typed(typedEl.value, {
      strings: [
        "Welcome to My Portfolio",
        "I am Sreyneath Rom",
        "Full-Stack Developer",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
  }

  setTimeout(() => (titleVisible.value = true), 200);
});

onUnmounted(() => typedInstance?.destroy());
</script>

<style scoped>
/* Smooth hero glow animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Material symbols fallback */
.material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
}
</style>
