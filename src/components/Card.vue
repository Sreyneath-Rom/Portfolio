<template>
  <div class="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 transition-colors duration-300" :class="themeClasses">
    <div
      v-for="(experience, index) in experiences"
      :key="experience.title"
      class="w-full sm:w-80 p-6 rounded-lg shadow-lg transition hover:shadow-xl hover:scale-105"
      :class="themeCard"
      style="min-height: 300px;"
    >
      <img
        :src="experience.logo"
        :alt="`${experience.title} logo`"
        class="w-16 h-16 object-contain mb-4 mx-auto"
      />
      <div class="w-full px-4 py-3 rounded-lg" :class="themeCardHeader">
        <p class="font-bold text-xl mb-2 text-center" :class="themeText">{{ experience.title }}</p>
        <p class="text-sm text-center" :class="themeTextSecondary">{{ experience.role }} | {{ experience.duration }}</p>
      </div>
      <button
        @click="toggleDetails(index)"
        class="w-full mt-4 py-2 px-4 rounded-lg font-semibold text-sm uppercase transition hover:scale-105"
        :class="themeButtonSecondary"
        :aria-label="showDetails[index] ? `Hide details of ${experience.title}` : `Show details of ${experience.title}`"
      >
        {{ showDetails[index] ? 'Hide Details' : 'Read More' }}
      </button>
      <transition name="fade">
        <div v-if="showDetails[index]" class="mt-4 text-sm max-h-32 overflow-y-auto" :class="themeTextSecondary">
          <ul class="list-disc list-inside space-y-2">
            <li v-for="(task, i) in experience.tasks" :key="i">{{ task }}</li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
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
const themeText = computed(() => ({
  'text-gray-800': currentTheme.value === 'Light',
  'text-gray-200': currentTheme.value === 'Dark',
  'text-sepia-900': currentTheme.value === 'Sepia',
  'text-blue-100': currentTheme.value === 'Blue',
}));
const themeTextSecondary = computed(() => ({
  'text-gray-600': currentTheme.value === 'Light',
  'text-gray-400': currentTheme.value === 'Dark',
  'text-sepia-700': currentTheme.value === 'Sepia',
  'text-blue-200': currentTheme.value === 'Blue',
}));
const themeCard = computed(() => ({
  'bg-white': currentTheme.value === 'Light',
  'bg-gray-800': currentTheme.value === 'Dark',
  'bg-sepia-100': currentTheme.value === 'Sepia',
  'bg-blue-900': currentTheme.value === 'Blue',
}));
const themeCardHeader = computed(() => ({
  'bg-yellow-100': currentTheme.value === 'Light',
  'bg-gray-600': currentTheme.value === 'Dark',
  'bg-sepia-300': currentTheme.value === 'Sepia',
  'bg-blue-700': currentTheme.value === 'Blue',
}));
const themeButtonSecondary = computed(() => ({
  'bg-sky-500 text-white hover:bg-sky-400': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'bg-amber-500 text-sepia-900 hover:bg-amber-400': currentTheme.value === 'Sepia',
  'bg-blue-500 text-white hover:bg-blue-400': currentTheme.value === 'Blue',
}));

// Experience data
const experiences = [
  {
    title: 'Frontend Developer at Tech Startup',
    role: 'Developer',
    duration: 'Jan 2025 - Present',
    logo: 'https://via.placeholder.com/64?text=Tech+Startup',
    tasks: [
      'Developed web applications using Vue.js and Laravel.',
      'Collaborated with teams to deliver scalable solutions.',
      'Optimized performance and improved user experience.',
    ],
  },
  {
    title: 'Intern at Web Agency',
    role: 'Web Development Intern',
    duration: 'Jun 2024 - Dec 2024',
    logo: 'https://via.placeholder.com/64?text=Web+Agency',
    tasks: [
      'Assisted in building responsive websites with HTML, CSS, and JavaScript.',
      'Integrated APIs for dynamic content.',
      'Participated in code reviews and agile workflows.',
    ],
  },
  {
    title: 'Freelance Developer',
    role: 'Freelancer',
    duration: 'Mar 2024 - May 2024',
    logo: 'https://via.placeholder.com/64?text=Freelance',
    tasks: [
      'Built custom websites for small businesses using Vue.js.',
      'Designed responsive layouts with Tailwind CSS.',
      'Managed client requirements and delivered on time.',
    ],
  },
];

const showDetails = ref(Array(experiences.length).fill(false));

const toggleDetails = (index) => {
  showDetails.value = showDetails.value.map((val, i) => (i === index ? !val : false));
};
</script>

<style scoped>
/* Fade animation for card details */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Smooth transitions for theme changes and hover effects */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
}
</style>