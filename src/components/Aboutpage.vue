<template>
  <div class="max-w-5xl mx-auto p-6 transition-colors duration-300" :class="themeClasses">
    <!-- Heading -->
    <h1 class="text-3xl font-bold text-center mb-8 md:text-4xl" :class="themeAccent">
      About Me
    </h1>

    <!-- Profile Section (responsive & compact) -->
    <div
      class="w-full max-w-3xl mx-auto p-4 md:p-6 rounded-2xl backdrop-blur-sm bg-white/20 dark:bg-black/20 border border-white/10 shadow-lg flex flex-col md:flex-row items-center gap-4 mb-8"
    >
      <!-- Avatar -->
      <div class="flex-shrink-0" style="isolation:isolate;">
      <div
        class="relative rounded-xl overflow-hidden w-28 h-28 md:w-44 md:h-44 flex items-center justify-center shadow-2xl transform transition-transform duration-300 hover:scale-105 bg-transparent"
      >
        <!-- Animated multi-color glow behind the photo -->
        <span
        aria-hidden="true"
        class="absolute -inset-2 rounded-2xl pointer-events-none animate-pulse"
        style="background: conic-gradient(from 180deg at 50% 50%, #ffd54a, #ff6bcb, #6b8cff, #36d399, #ffd54a); filter: blur(18px) saturate(1.1); opacity:0.8; z-index:0; mix-blend-mode:screen;"
        ></span>

        <!-- Thin rim for contrast -->
        <span
        aria-hidden="true"
        class="absolute inset-0 rounded-xl pointer-events-none"
        style="z-index:1; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.06); mix-blend-mode:overlay;"
        ></span>

        <picture class="relative z-10 w-full h-full rounded-xl overflow-hidden">
        <img
          :src="img1"
          alt="Sreyneath Rom"
          class="w-full h-full object-cover rounded-xl"
          style="background:transparent; mix-blend-mode:multiply; filter: saturate(1.05) contrast(1.03) drop-shadow(0 10px 24px rgba(0,0,0,0.18));"
        />
        </picture>

        <!-- Subtle vignette -->
        <span
        aria-hidden="true"
        class="absolute inset-0 rounded-xl pointer-events-none"
        style="z-index:2; background: radial-gradient(60% 60% at 50% 35%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.12) 100%);"
        ></span>
      </div>
      </div>

      <!-- Details -->
      <div class="text-center md:text-left flex-1">
      <p
        class="text-xl md:text-2xl font-extrabold leading-tight mb-1 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-400"
        :class="themeAccent"
      >
        Sreyneath Rom
      </p>

      <p class="text-sm mb-2" :class="themeTextSecondary">
        Age: 21 • Phnom Penh, Cambodia<br />
        Born in Siem Reap Province
      </p>

      <!-- Skill badges (compact) -->
      <div class="flex flex-wrap gap-2 mb-3 justify-center md:justify-start">
        <span
        class="text-xs px-2 py-0.5 rounded-full font-medium shadow-sm"
        :class="[ 'bg-white/80 dark:bg-black/40', themeText ]"
        >
        Vue.js
        </span>
        <span
        class="text-xs px-2 py-0.5 rounded-full font-medium shadow-sm"
        :class="[ 'bg-white/80 dark:bg-black/40', themeText ]"
        >
        Laravel
        </span>
        <span
        class="text-xs px-2 py-0.5 rounded-full font-medium shadow-sm"
        :class="[ 'bg-white/80 dark:bg-black/40', themeText ]"
        >
        Responsive
        </span>
        <span
        class="text-xs px-2 py-0.5 rounded-full font-medium shadow-sm"
        :class="[ 'bg-white/80 dark:bg-black/40', themeText ]"
        >
        UI/UX
        </span>
      </div>

      <!-- Quick tagline -->
      <p class="text-sm mb-2" :class="themeTextSecondary">
        <svg
        class="inline-block mr-1 align-middle"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        >
        <path
          d="M12 2v6l4 2"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1" />
        </svg>
        Lifelong learner. Building joyful, accessible web experiences.
      </p>

      <!-- Short biography (kept concise to fit) -->
      <p class="text-base mb-0" :class="themeText">
        Hello! I’m Sreyneath, an aspiring developer focused on responsive web apps using Vue.js and Laravel.
      </p>
      </div>
    </div>

  
    <!-- Skills Highlights -->
    <div class="w-full">
      <h2 class="text-xl font-semibold text-center mb-6" :class="themeAccent">
        Key Skills
      </h2>
      <Marquee />
    </div>

    <!-- Social Links -->
    <div class="px-4">
      <p class="text-center mb-6" :class="themeTextSecondary">
        Connect with me or
        <a :href="cvLink" class="hover:underline" :class="themeAccent">download my CV</a>:
      </p>
      <div class="flex justify-center gap-6">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Connect via ${social.name}`"
          class="relative group"
        >
          <div
            :class="[social.class, themeSocialBg]"
            class="w-12 h-12 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-colors duration-200"
          >
            <svg
              :viewBox="social.viewBox"
              fill="currentColor"
              class="h-8 w-8 text-white"
            >
              <path :d="social.path" />
            </svg>
          </div>
          <!-- Tooltip -->
          <span
            class="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 dark:bg-gray-700 text-white text-xs rounded py-1 px-2"
            >{{ social.name }}</span
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Marquee from '@/components/Marquee.vue';
import { useDarkMode } from '@/composables/useDarkMode';
import img1 from '@/assets/image/1.png';

// import cv from '@/components/CV.vue'; // Removed, use cvLink instead

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
const themeTextSecondary = computed(() => ({
  'text-gray-600': currentTheme.value === 'Light',
  'text-gray-400': currentTheme.value === 'Dark',
  'text-sepia-700': currentTheme.value === 'Sepia',
  'text-blue-200': currentTheme.value === 'Blue',
  'text-purple-200': currentTheme.value === 'Purple',
  'text-green-200': currentTheme.value === 'Green',
  'text-orange-200': currentTheme.value === 'Orange',
  'text-teal-200': currentTheme.value === 'Teal',
  'text-pink-200': currentTheme.value === 'Pink',
  'text-indigo-200': currentTheme.value === 'Midnight',
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
const themeSocialBg = computed(() => ({
  'hover:bg-gray-700': currentTheme.value === 'Light',
  'hover:bg-gray-600': currentTheme.value === 'Dark',
  'hover:bg-sepia-600': currentTheme.value === 'Sepia',
  'hover:bg-blue-800': currentTheme.value === 'Blue',
  'hover:bg-purple-800': currentTheme.value === 'Purple',
  'hover:bg-green-800': currentTheme.value === 'Green',
  'hover:bg-orange-800': currentTheme.value === 'Orange',
  'hover:bg-teal-800': currentTheme.value === 'Teal',
  'hover:bg-pink-800': currentTheme.value === 'Pink',
  'hover:bg-indigo-800': currentTheme.value === 'Midnight',
}));

// CV link
const cvLink = 'https://www.canva.com/design/DAGjQTop64Q/Y7LRgoDTg1TlutXgBb9YxQ/view?utm_content=DAGjQTop64Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8cec6f4468';

// Social links
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Sreyneath-Rom',
    class: 'bg-gray-800',
    viewBox: '0 0 24 24',
    path: 'M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1 .8 2v3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z',
  },
  {
    name: 'Email',
    url: 'mailto:romsreyneath4@gmail.com',
    class: 'bg-rose-600',
    viewBox: '0 0 24 24',
    path: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sreyneath-rom-69b2a5321/',
    class: 'bg-blue-700',
    viewBox: '0 0 24 24',
    path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07 1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zm1.78 13.02H3.55V9h3.57v11.45z',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/neath1fly',
    class: 'bg-blue-600',
    viewBox: '0 0 24 24',
    path: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2v-2c0-2.2 1.8-4 4-4h2v3h-2c-1.1 0-2 .9-2 2v2h4v3h-4v4.8c4.56-.93 8-4.96 8-9.8z',
  },
];
</script>

<style scoped>
/* Smooth fade-in animation */
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

/* Theme-specific secondary text colors */
.text-sepia-700 {
  color: #8c552f; /* Derived from sepia palette */
}
.text-blue-200 {
  color: #bfdbfe; /* Derived from blue palette */
}
.text-purple-200 {
  color: #ddd6fe; /* Derived from purple palette */
}
.text-green-200 {
  color: #a7f3d0; /* Derived from green palette */
}
.text-orange-200 {
  color: #fed7aa; /* Derived from orange palette */
}
.text-teal-200 {
  color: #99f6e4; /* Derived from teal palette */
}
.text-pink-200 {
  color: #f9a8d4; /* Derived from pink palette */
}
.text-indigo-200 {
  color: #c7d2fe; /* Derived from indigo palette */
}

/* Theme-specific hover background colors for social links */
.hover\:bg-sepia-600 {
  background-color: #a68a64; /* Derived from sepia palette */
}
.hover\:bg-blue-800 {
  background-color: #1e3a8a; /* Derived from blue palette */
}
.hover\:bg-purple-800 {
  background-color: #3b1476; /* Derived from purple palette */
}
.hover\:bg-green-800 {
  background-color: #064e3b; /* Derived from green palette */
}
.hover\:bg-orange-800 {
  background-color: #7c2d12; /* Derived from orange palette */
}
.hover\:bg-teal-800 {
  background-color: #115e59; /* Derived from teal palette */
}
.hover\:bg-pink-800 {
  background-color: #9d174d; /* Derived from pink palette */
}
.hover\:bg-indigo-800 {
  background-color: #1e1b4b; /* Derived from indigo palette */
}
</style>
