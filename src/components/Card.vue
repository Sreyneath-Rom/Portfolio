<template>
  <div class="px-4 py-10 md:py-16">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-2" :class="themeAccent">Experience</h2>
        <div class="mx-auto h-1 w-24 rounded-full mb-4" :class="[themeAccent, 'opacity-90']"></div>
        <p class="max-w-3xl mx-auto text-base md:text-lg leading-relaxed" :class="themeText">
          Hands-on projects using HTML, CSS, JavaScript, TypeScript, PHP, Python, Vue.js, Laravel, and collaborative teamwork.
        </p>
      </div>

      <!-- Filter Bar -->
      <div class="flex flex-wrap justify-center gap-3 mb-10">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="setFilter(filter)"
          class="px-4 py-2 rounded-full text-sm font-medium transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
          :class="[ activeFilter === filter ? themeButton : themeButtonSecondary, 'shadow-sm' ]"
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
          <div class="relative rounded-xl overflow-hidden mb-4">
            <img
              :src="project.image"
              :alt="`Screenshot of ${project.title}`"
              class="w-full h-44 sm:h-40 md:h-48 object-cover transition-transform duration-400 group-hover:scale-105 rounded-lg"
            />
            <div
              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300"
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

          <div v-if="formSuccess" class="mb-4 p-3 rounded-lg bg-green-50" :class="themeText">
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
                :class="themeText"
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
const themeTextSecondary = computed(() => ({
  'text-gray-600': currentTheme.value === 'Light',
  'text-gray-400': currentTheme.value === 'Dark',
  'text-sepia-700': currentTheme.value === 'Sepia',
  'text-blue-200': currentTheme.value === 'Blue',
}));
const themeAccent = computed(() => ({
  'text-yellow-500': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'text-amber-600': currentTheme.value === 'Sepia',
  'text-blue-400': currentTheme.value === 'Blue',
}));
const themeButton = computed(() => ({
  'bg-yellow-500 text-gray-900 hover:bg-yellow-400 focus:ring-yellow-500': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'bg-amber-600 text-sepia-900 hover:bg-amber-500 focus:ring-amber-500': currentTheme.value === 'Sepia',
  'bg-blue-400 text-blue-900 hover:bg-blue-300 focus:ring-blue-400': currentTheme.value === 'Blue',
}));
const themeButtonSecondary = computed(() => ({
  'bg-sky-500 text-white hover:bg-sky-400 focus:ring-sky-500': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'bg-amber-500 text-sepia-900 hover:bg-amber-400 focus:ring-amber-500': currentTheme.value === 'Sepia',
  'bg-blue-500 text-white hover:bg-blue-400 focus:ring-blue-500': currentTheme.value === 'Blue',
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
const themeInput = computed(() => ({
  'bg-gray-50 border-gray-300': currentTheme.value === 'Light',
  'bg-gray-900 border-gray-600': currentTheme.value === 'Dark',
  'bg-sepia-50 border-sepia-300': currentTheme.value === 'Sepia',
  'bg-blue-950 border-blue-600': currentTheme.value === 'Blue',
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
  // Ensure detailsState matches projects length
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