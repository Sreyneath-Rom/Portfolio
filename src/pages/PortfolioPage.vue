```
<template>
  <div class="px-4 py-10 md:py-16 transition-colors duration-300" :class="themeClasses">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8 mt-10">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-2" :class="themeAccent">Experience</h2>
        <div class="mx-auto h-1 w-24 rounded-full mb-4" :class="[themeAccent, 'opacity-90']"></div>
        <p class="max-w-3xl mx-auto text-base md:text-lg leading-relaxed" :class="themeText">
          Hands-on projects using HTML, CSS, JavaScript, TypeScript, PHP, Python, Vue.js, Laravel, and collaborative teamwork.
        </p>
      </div>

      <!-- Contact Button -->
      <div class="text-center mb-10">
        <button
          @click="openContactModal"
          class="px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
          :class="themeButton"
          aria-label="Open contact form"
        >
          Contact Me
        </button>
      </div>

      <!-- Filter Bar -->
      <div class="flex flex-wrap justify-center gap-3 mb-10">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="setFilter(filter)"
          class="px-4 py-2 rounded-full text-sm font-medium transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
          :class="[activeFilter === filter ? themeButton : themeButtonSecondary, 'shadow-sm']"
          :aria-pressed="activeFilter === filter ? 'true' : 'false'"
          :aria-label="`Filter projects by ${filter}`"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Project Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          :class="[
            'relative p-4 rounded-2xl transition-transform duration-300 ease-out overflow-hidden',
            themeCard,
            'hover:translate-y-[-6px] hover:shadow-2xl',
            !cardAnimated[index] ? 'opacity-0 translate-y-8' : 'opacity-100'
          ]"
          :style="{ animationDelay: `${index * 0.12}s` }"
          role="region"
          :aria-label="`Project: ${project.title}`"
        >
          <!-- Image -->
          <div class="relative rounded-xl overflow-hidden mb-4 group">
            <img
              :src="project.image"
              :alt="`Screenshot of ${project.title}`"
              class="w-full h-44 sm:h-40 md:h-48 object-cover transition-transform duration-400 group-hover:scale-105 rounded-lg"
            />
            <div
              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div class="text-center text-white">
                <div class="font-semibold text-lg">{{ project.title }}</div>
                <div class="text-xs mt-1 opacity-90">{{ project.role }}</div>
              </div>
            </div>
          </div>

          <!-- Header -->
          <div class="p-3 rounded-lg mb-3 border" :class="[themeCardHeader, 'border-transparent']">
            <h3 class="text-lg md:text-xl font-bold mb-1" :class="themeText">{{ project.title }}</h3>
            <p class="text-sm" :class="themeTextSecondary">{{ project.role }} • <span class="opacity-80">{{ project.duration }}</span></p>
          </div>

          <!-- Tech Badges -->
          <div class="flex flex-wrap gap-2 mb-3">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-3 py-1 text-xs font-semibold rounded-full shadow-sm"
              :class="[themeButtonSecondary, 'bg-opacity-90']"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Actions -->
          <div class="flex gap-3 mt-2">
            <a
              v-if="project.demoLink"
              :href="project.demoLink"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 py-2 rounded-lg text-sm font-semibold uppercase text-center transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
              :class="themeButton"
              :aria-label="`View demo of ${project.title}`"
            >
              Demo
            </a>
            <a
              v-if="project.githubLink"
              :href="project.githubLink"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 py-2 rounded-lg text-sm font-semibold uppercase text-center transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
              :class="themeButtonSecondary"
              :aria-label="`View source code of ${project.title}`"
            >
              Source
            </a>
          </div>

          <button
            @click="toggleDetails(index)"
            class="w-full mt-4 py-2 rounded-lg text-sm font-semibold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
            :class="themeButtonSecondary"
            :aria-expanded="detailsState[index] ? 'true' : 'false'"
            :aria-label="detailsState[index] ? `Hide details of ${project.title}` : `Show details of ${project.title}`"
          >
            {{ detailsState[index] ? 'Hide Details' : 'Read More' }}
          </button>

          <transition name="fade">
            <div v-if="detailsState[index]" class="mt-3 text-sm max-h-44 overflow-y-auto pr-2" :class="themeTextSecondary">
              <ul class="list-disc list-inside space-y-2">
                <li v-for="(task, i) in project.tasks" :key="i">{{ task }}</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Contact Modal -->
    <transition name="modal">
      <div
        v-if="showContactModal"
        class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 px-4"
        @click.self="showContactModal = false"
        @keydown.window.esc="showContactModal = false"
      >
        <div class="w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl" :class="themeCard" role="dialog" aria-labelledby="contact-modal-title">
          <h2 id="contact-modal-title" class="text-2xl font-bold mb-4" :class="themeText">Contact Me</h2>

          <div v-if="formSuccess" class="mb-4 p-3 rounded-lg" :class="[themeSuccess, themeTextSuccess]">
            Message sent successfully!
          </div>

          <form @submit.prevent="sendContact" class="space-y-4">
            <div>
              <input
                ref="nameInputRef"
                type="text"
                v-model="contactForm.name"
                placeholder="Your Name"
                class="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                :class="[themeInput, { 'border-red-500': formErrors.name }]"
                required
                aria-label="Your Name"
                :aria-invalid="formErrors.name ? 'true' : 'false'"
                @focus="formErrors.name = false"
              />
              <p v-if="formErrors.name" class="text-red-500 text-sm mt-1">Please enter your name.</p>
            </div>

            <div>
              <input
                type="email"
                v-model="contactForm.email"
                placeholder="Your Email"
                class="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                :class="[themeInput, { 'border-red-500': formErrors.email }]"
                required
                aria-label="Your Email"
                :aria-invalid="formErrors.email ? 'true' : 'false'"
                @focus="formErrors.email = false"
              />
              <p v-if="formErrors.email" class="text-red-500 text-sm mt-1">Please enter a valid email.</p>
            </div>

            <div>
              <textarea
                v-model="contactForm.message"
                placeholder="Your Message"
                class="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                :class="[themeInput, { 'border-red-500': formErrors.message }]"
                rows="5"
                required
                aria-label="Your Message"
                :aria-invalid="formErrors.message ? 'true' : 'false'"
                @focus="formErrors.message = false"
              ></textarea>
              <p v-if="formErrors.message" class="text-red-500 text-sm mt-1">Please enter a message.</p>
            </div>

            <div class="flex justify-end gap-3">
              <button
                type="button"
                @click="showContactModal = false"
                class="px-4 py-2 rounded-lg font-medium transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
                :class="themeTextSecondary"
                aria-label="Cancel contact form"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="px-4 py-2 rounded-lg font-medium transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
                :class="[themeButtonSecondary, { 'opacity-50 cursor-not-allowed': isSubmitting }]"
                :disabled="isSubmitting"
                aria-label="Send contact form"
              >
                {{ isSubmitting ? 'Sending...' : 'Send' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useDarkMode } from '@/composables/useDarkMode';

// Theme management
const { currentTheme } = useDarkMode();

// Theme classes
const themeClasses = computed(() => ({
  'bg-white text-gray-800': currentTheme.value === 'Light',
  'bg-gray-900 text-gray-200': currentTheme.value === 'Dark',
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
const themeButton = computed(() => ({
  'bg-yellow-500 text-white hover:bg-yellow-400 focus:ring-yellow-500': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'bg-amber-600 text-sepia-900 hover:bg-amber-500 focus:ring-amber-500': currentTheme.value === 'Sepia',
  'bg-blue-400 text-blue-900 hover:bg-blue-300 focus:ring-blue-400': currentTheme.value === 'Blue',
  'bg-purple-400 text-purple-900 hover:bg-purple-300 focus:ring-purple-400': currentTheme.value === 'Purple',
  'bg-green-400 text-green-900 hover:bg-green-300 focus:ring-green-400': currentTheme.value === 'Green',
  'bg-orange-400 text-orange-900 hover:bg-orange-300 focus:ring-orange-400': currentTheme.value === 'Orange',
  'bg-teal-400 text-teal-900 hover:bg-teal-300 focus:ring-teal-400': currentTheme.value === 'Teal',
  'bg-pink-400 text-pink-900 hover:bg-pink-300 focus:ring-pink-400': currentTheme.value === 'Pink',
  'bg-indigo-400 text-indigo-900 hover:bg-indigo-300 focus:ring-indigo-400': currentTheme.value === 'Midnight',
}));
const themeButtonSecondary = computed(() => ({
  'text-sky-500 hover:bg-gray-100 hover:text-sky-400 focus:ring-sky-500': currentTheme.value === 'Light',
  'text-sky-400 hover:bg-gray-800 hover:text-sky-300 focus:ring-sky-400': currentTheme.value === 'Dark',
  'text-amber-500 hover:bg-sepia-200 hover:text-amber-400 focus:ring-amber-500': currentTheme.value === 'Sepia',
  'text-blue-400 hover:bg-blue-800 hover:text-blue-300 focus:ring-blue-400': currentTheme.value === 'Blue',
  'text-purple-400 hover:bg-purple-800 hover:text-purple-300 focus:ring-purple-400': currentTheme.value === 'Purple',
  'text-green-400 hover:bg-green-800 hover:text-green-300 focus:ring-green-400': currentTheme.value === 'Green',
  'text-orange-400 hover:bg-orange-800 hover:text-orange-300 focus:ring-orange-400': currentTheme.value === 'Orange',
  'text-teal-400 hover:bg-teal-800 hover:text-teal-300 focus:ring-teal-400': currentTheme.value === 'Teal',
  'text-pink-400 hover:bg-pink-800 hover:text-pink-300 focus:ring-pink-400': currentTheme.value === 'Pink',
  'text-indigo-400 hover:bg-indigo-800 hover:text-indigo-300 focus:ring-indigo-400': currentTheme.value === 'Midnight',
}));
const themeCard = computed(() => ({
  'bg-white border-gray-300': currentTheme.value === 'Light',
  'bg-gray-800 border-gray-600': currentTheme.value === 'Dark',
  'bg-sepia-100 border-sepia-400': currentTheme.value === 'Sepia',
  'bg-blue-900 border-blue-600': currentTheme.value === 'Blue',
  'bg-purple-900 border-purple-600': currentTheme.value === 'Purple',
  'bg-green-900 border-green-600': currentTheme.value === 'Green',
  'bg-orange-900 border-orange-600': currentTheme.value === 'Orange',
  'bg-teal-900 border-teal-600': currentTheme.value === 'Teal',
  'bg-pink-900 border-pink-600': currentTheme.value === 'Pink',
  'bg-indigo-900 border-indigo-600': currentTheme.value === 'Midnight',
}));
const themeCardHeader = computed(() => ({
  'bg-yellow-100': currentTheme.value === 'Light',
  'bg-gray-600': currentTheme.value === 'Dark',
  'bg-sepia-300': currentTheme.value === 'Sepia',
  'bg-blue-700': currentTheme.value === 'Blue',
  'bg-purple-700': currentTheme.value === 'Purple',
  'bg-green-700': currentTheme.value === 'Green',
  'bg-orange-700': currentTheme.value === 'Orange',
  'bg-teal-700': currentTheme.value === 'Teal',
  'bg-pink-700': currentTheme.value === 'Pink',
  'bg-indigo-700': currentTheme.value === 'Midnight',
}));
const themeInput = computed(() => ({
  'bg-gray-50 border-gray-300': currentTheme.value === 'Light',
  'bg-gray-900 border-gray-600': currentTheme.value === 'Dark',
  'bg-sepia-50 border-sepia-300': currentTheme.value === 'Sepia',
  'bg-blue-950 border-blue-600': currentTheme.value === 'Blue',
  'bg-purple-950 border-purple-600': currentTheme.value === 'Purple',
  'bg-green-950 border-green-600': currentTheme.value === 'Green',
  'bg-orange-950 border-orange-600': currentTheme.value === 'Orange',
  'bg-teal-950 border-teal-600': currentTheme.value === 'Teal',
  'bg-pink-950 border-pink-600': currentTheme.value === 'Pink',
  'bg-indigo-950 border-indigo-600': currentTheme.value === 'Midnight',
}));
const themeSuccess = computed(() => ({
  'bg-green-50 text-green-800': currentTheme.value === 'Light',
  'bg-green-900 text-green-100': currentTheme.value === 'Dark',
  'bg-green-50 text-green-800': currentTheme.value === 'Sepia',
  'bg-green-900 text-green-100': currentTheme.value === 'Blue',
  'bg-green-900 text-green-100': currentTheme.value === 'Purple',
  'bg-green-900 text-green-100': currentTheme.value === 'Green',
  'bg-green-900 text-green-100': currentTheme.value === 'Orange',
  'bg-green-900 text-green-100': currentTheme.value === 'Teal',
  'bg-green-900 text-green-100': currentTheme.value === 'Pink',
  'bg-green-900 text-green-100': currentTheme.value === 'Midnight',
}));

// Projects
/**
 * @typedef {Object} Project
 * @property {string} title - The project title.
 * @property {string} duration - The duration of the project.
 * @property {string} role - The role played in the project.
 * @property {string} image - URL to the project image.
 * @property {string} demoLink - URL to the live demo (optional).
 * @property {string} githubLink - URL to the source code repository (optional).
 * @property {string[]} technologies - List of technologies used.
 * @property {string[]} tasks - List of tasks or responsibilities.
 */

/** @type {Project[]} */
const projects = [
  {
    title: 'POS System',
    duration: 'Feb 10, 2025 - May 02, 2025',
    role: 'DevOps',
    image: 'https://via.placeholder.com/320x160?text=POS+System',
    demoLink: 'https://example.com/pos-demo',
    githubLink: 'https://github.com/Sreyneath-Rom/pos-system',
    technologies: ['PHP', 'JavaScript', 'Bootstrap'],
    tasks: [
      'Monitored server performance and resolved infrastructure issues.',
      'Configured environments for development, testing, and production.',
      'Designed responsive user interfaces with HTML, CSS, JavaScript, and Bootstrap 5.',
      'Fetched and processed data using PHP and a connected database.',
    ],
  },
  {
    title: 'E-Commerce Platform',
    duration: 'Jan 15, 2025 - Apr 30, 2025',
    role: 'Frontend Developer',
    image: 'https://via.placeholder.com/320x160?text=E-Commerce',
    demoLink: 'https://example.com/ecommerce-demo',
    githubLink: 'https://github.com/Sreyneath-Rom/ecommerce',
    technologies: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
    tasks: [
      'Built responsive UI with Vue.js and Tailwind CSS.',
      'Integrated REST APIs for product listings and user authentication.',
      'Optimized page load times using lazy loading.',
      'Collaborated with backend team for seamless data flow.',
    ],
  },
  {
    title: 'Task Manager App',
    duration: 'Mar 01, 2025 - Jun 15, 2025',
    role: 'Full-Stack Developer',
    image: 'https://via.placeholder.com/320x160?text=Task+Manager',
    demoLink: 'https://example.com/task-manager-demo',
    githubLink: 'https://github.com/Sreyneath-Rom/task-manager',
    technologies: ['Laravel', 'Vue.js', 'MySQL'],
    tasks: [
      'Developed backend APIs with Laravel and MySQL.',
      'Created interactive frontend with Vue.js.',
      'Implemented user authentication and task CRUD operations.',
      'Ensured responsive design for mobile and desktop.',
    ],
  },
];

// Filter logic
const filters = computed(() => {
  const techSet = new Set();
  projects.forEach(project => {
    project.technologies.forEach(tech => techSet.add(tech));
  });
  return ['All', ...Array.from(techSet)];
});
const activeFilter = ref('All');
const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects;
  return projects.filter(project => project.technologies.includes(activeFilter.value));
});

const setFilter = (filter) => {
  activeFilter.value = filter;
};

// Contact form and details
const showContactModal = ref(false);
const contactForm = ref({ name: '', email: '', message: '' });
const formSuccess = ref(false);
const formErrors = ref({ name: false, email: false, message: false });
const isSubmitting = ref(false);

const detailsState = ref(Array(projects.length).fill(false));

const toggleDetails = (index) => {
  if (detailsState.value.length !== projects.length) {
    detailsState.value = Array(projects.length).fill(false);
  }
  detailsState.value = detailsState.value.map((val, i) => (i === index ? !val : false));
};

const nameInputRef = ref(null);

const openContactModal = () => {
  showContactModal.value = true;
  formSuccess.value = false;
  formErrors.value = { name: false, email: false, message: false };
  isSubmitting.value = false;
};

const sendContact = async () => {
  formErrors.value = {
    name: !contactForm.value.name.trim(),
    email: !contactForm.value.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i),
    message: !contactForm.value.message.trim(),
  };

  if (!formErrors.value.name && !formErrors.value.email && !formErrors.value.message) {
    isSubmitting.value = true;
    // Simulate async send (replace with real API call)
    setTimeout(() => {
      formSuccess.value = true;
      isSubmitting.value = false;
      contactForm.value = { name: '', email: '', message: '' };
    }, 2000);
  }
};

// Card animation on mount
const cardAnimated = ref(Array(projects.length).fill(false));
onMounted(() => {
  setTimeout(() => {
    cardAnimated.value = cardAnimated.value.map(() => true);
  }, 50);
});
</script>

<style scoped>
/* Smooth transitions for theme changes */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Fade transition for details */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, max-height 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
}

/* Theme-specific background colors */
.bg-sepia-50 {
  background-color: #f7f2e7; /* Derived from sepia palette */
}
.bg-sepia-100 {
  background-color: #f3eadb; /* Matches DarkMode.vue sepia-theme */
}
.bg-sepia-200 {
  background-color: #f5f0e1; /* Derived from sepia palette */
}
.bg-sepia-300 {
  background-color: #ede4d3; /* Derived from sepia palette */
}
.bg-blue-700 {
  background-color: #1d4ed8; /* Derived from blue palette */
}
.bg-blue-800 {
  background-color: #1e3a8a; /* Derived from blue palette */
}
.bg-blue-900 {
  background-color: #0b3d91; /* Matches DarkMode.vue blue-theme */
}
.bg-blue-950 {
  background-color: #172554; /* Derived from blue palette */
}
.bg-purple-700 {
  background-color: #6d28d9; /* Derived from purple palette */
}
.bg-purple-800 {
  background-color: #3b1476; /* Derived from purple palette */
}
.bg-purple-900 {
  background-color: #4c1d95; /* Matches DarkMode.vue purple-theme */
}
.bg-purple-950 {
  background-color: #2e1065; /* Derived from purple palette */
}
.bg-green-700 {
  background-color: #047857; /* Derived from green palette */
}
.bg-green-800 {
  background-color: #064e3b; /* Derived from green palette */
}
.bg-green-900 {
  background-color: #065f46; /* Matches DarkMode.vue green-theme */
}
.bg-green-950 {
  background-color: #022c22; /* Derived from green palette */
}
.bg-orange-700 {
  background-color: #c2410c; /* Derived from orange palette */
}
.bg-orange-800 {
  background-color: #7c2d12; /* Derived from orange palette */
}
.bg-orange-900 {
  background-color: #a04000; /* Matches DarkMode.vue orange-theme */
}
.bg-orange-950 {
  background-color: #431407; /* Derived from orange palette */
}
.bg-teal-700 {
  background-color: #0d9488; /* Derived from teal palette */
}
.bg-teal-800 {
  background-color: #115e59; /* Derived from teal palette */
}
.bg-teal-900 {
  background-color: #0f766e; /* Matches DarkMode.vue teal-theme */
}
.bg-teal-950 {
  background-color: #042f2e; /* Derived from teal palette */
}
.bg-pink-700 {
  background-color: #db2777; /* Derived from pink palette */
}
.bg-pink-800 {
  background-color: #9d174d; /* Derived from pink palette */
}
.bg-pink-900 {
  background-color: #be185d; /* Matches DarkMode.vue pink-theme */
}
.bg-pink-950 {
  background-color: #4a044e; /* Derived from pink palette */
}
.bg-indigo-700 {
  background-color: #4f46e5; /* Derived from indigo palette */
}
.bg-indigo-800 {
  background-color: #1e1b4b; /* Derived from indigo palette */
}
.bg-indigo-900 {
  background-color: #021124; /* Matches DarkMode.vue midnight-theme */
}
.bg-indigo-950 {
  background-color: #0f172a; /* Derived from indigo palette */
}

/* Theme-specific text colors */
.text-sepia-900 {
  color: #5b4636; /* Matches DarkMode.vue sepia-theme */
}
.text-sepia-700 {
  color: #8c552f; /* Derived from sepia palette */
}
.text-blue-100 {
  color: #e6f2ff; /* Matches DarkMode.vue blue-theme */
}
.text-blue-200 {
  color: #bfdbfe; /* Derived from blue palette */
}
.text-purple-100 {
  color: #efe7ff; /* Matches DarkMode.vue purple-theme */
}
.text-purple-200 {
  color: #ddd6fe; /* Derived from purple palette */
}
.text-green-100 {
  color: #e6fff4; /* Matches DarkMode.vue green-theme */
}
.text-green-200 {
  color: #a7f3d0; /* Derived from green palette */
}
.text-orange-100 {
  color: #fff4e6; /* Matches DarkMode.vue orange-theme */
}
.text-orange-200 {
  color: #fed7aa; /* Derived from orange palette */
}
.text-teal-100 {
  color: #e6fffb; /* Matches DarkMode.vue teal-theme */
}
.text-teal-200 {
  color: #99f6e4; /* Derived from teal palette */
}
.text-pink-100 {
  color: #fff0f6; /* Matches DarkMode.vue pink-theme */
}
.text-pink-200 {
  color: #f9a8d4; /* Derived from pink palette */
}
.text-indigo-100 {
  color: #dfefff; /* Matches DarkMode.vue midnight-theme */
}
.text-indigo-200 {
  color: #c7d2fe; /* Derived from indigo palette */
}
.text-green-800 {
  color: #065f46; /* Derived from green palette */
}

/* Theme-specific border colors */
.border-sepia-300 {
  border-color: #e7d5b3; /* Derived from sepia palette */
}
.border-sepia-400 {
  border-color: #d4a373; /* Derived from sepia palette */
}
.border-blue-600 {
  border-color: #2563eb; /* Derived from blue palette */
}
.border-purple-600 {
  border-color: #6d28d9; /* Derived from purple palette */
}
.border-green-600 {
  border-color: #059669; /* Derived from green palette */
}
.border-orange-600 {
  border-color: #ea580c; /* Derived from orange palette */
}
.border-teal-600 {
  border-color: #0d9488; /* Derived from teal palette */
}
.border-pink-600 {
  border-color: #db2777; /* Derived from pink palette */
}
.border-indigo-600 {
  border-color: #4f46e5; /* Derived from indigo palette */
}
</style>
