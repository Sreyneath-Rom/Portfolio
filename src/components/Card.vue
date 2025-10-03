<template>
  <div class="py-8 px-4 sm:px-6">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 text-center" :class="themeAccent">Experience</h2>
    <p class="max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed text-center" :class="themeText">
      Projects showcasing skills in web development and IT solutions.
    </p>

    <!-- Filter Bar -->
    <div class="flex flex-wrap justify-center gap-2 mb-10">
      <button
        v-for="filter in filters"
        :key="filter"
        @click="setFilter(filter)"
        class="px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2"
        :class="[activeFilter === filter ? themeButton : themeButtonSecondary, 'min-w-[100px]']"
        :aria-label="`Filter projects by ${filter}`"
      >
        {{ filter }}
      </button>
    </div>

    <!-- Project Cards -->
    <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(project, index) in filteredProjects"
        :key="project.title"
        class="relative p-4 rounded-lg shadow-md transition-all duration-300 ease-out opacity-0 translate-y-6"
        :class="[themeCard, { 'animate-card': true }]"
        :style="{ animationDelay: `${index * 0.1}s` }"
        role="region"
        :aria-label="`Project: ${project.title}`"
      >
        <img
          :src="project.image"
          :alt="`Screenshot of ${project.title}`"
          class="w-full h-40 object-cover rounded-md mb-3"
        />
        <div class="p-3" :class="themeCardHeader">
          <h3 class="text-lg font-semibold mb-1" :class="themeText">{{ project.title }}</h3>
          <p class="text-sm" :class="themeTextSecondary">{{ project.role }} | {{ project.duration }}</p>
        </div>
        <!-- Technology Badges -->
        <div class="flex flex-wrap gap-1.5 mb-3">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-2 py-0.5 text-xs font-medium rounded-full"
            :class="themeButtonSecondary"
          >
            {{ tech }}
          </span>
        </div>
        <!-- Action Buttons -->
        <div class="flex gap-2">
          <a
            v-if="project.demoLink"
            :href="project.demoLink"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 py-2 rounded-md text-xs font-medium transition-all hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2"
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
            class="flex-1 py-2 rounded-md text-xs font-medium transition-all hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2"
            :class="themeButtonSecondary"
            :aria-label="`View source code of ${project.title}`"
          >
            Source
          </a>
        </div>
        <button
          @click="toggleDetails(index)"
          class="w-full mt-3 py-2 rounded-md text-xs font-medium transition-all hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2"
          :class="themeButtonSecondary"
          :aria-label="showDetails[index] ? `Hide details of ${project.title}` : `Show details of ${project.title}`"
        >
          {{ showDetails[index] ? 'Hide Details' : 'Read More' }}
        </button>
        <transition name="fade">
          <div v-if="showDetails[index]" class="mt-3 text-sm max-h-36 overflow-y-auto" :class="themeTextSecondary">
            <ul class="list-disc list-inside space-y-1">
              <li v-for="(task, i) in project.tasks" :key="i">{{ task }}</li>
            </ul>
          </div>
        </transition>
      </div>
    </div>

    <!-- Contact Modal -->
    <transition name="fade">
      <div v-if="showContactModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" @keydown.esc="closeModal">
        <div class="p-5 sm:p-6 rounded-lg shadow-lg max-w-sm w-full" :class="themeCard" role="dialog" aria-labelledby="contact-modal-title">
          <h2 id="contact-modal-title" class="text-xl font-semibold mb-4" :class="themeText">Contact Me</h2>
          <div v-if="formSuccess" class="mb-3 p-3 rounded-md bg-green-100 text-green-800 text-sm" :class="themeText">
            Message sent successfully!
          </div>
          <form @submit.prevent="sendContact">
            <div class="mb-3">
              <input
                type="text"
                v-model="contactForm.name"
                placeholder="Your Name"
                class="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-offset-1"
                :class="[themeInput, { 'border-red-500': formErrors.name }]"
                required
                aria-label="Your Name"
                aria-invalid="formErrors.name"
                @focus="formErrors.name = false"
              />
              <p v-if="formErrors.name" class="text-red-500 text-xs mt-1">Name is required.</p>
            </div>
            <div class="mb-3">
              <input
                type="email"
                v-model="contactForm.email"
                placeholder="Your Email"
                class="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-offset-1"
                :class="[themeInput, { 'border-red-500': formErrors.email }]"
                required
                aria-label="Your Email"
                aria-invalid="formErrors.email"
                @focus="formErrors.email = false"
              />
              <p v-if="formErrors.email" class="text-red-500 text-xs mt-1">Valid email is required.</p>
            </div>
            <div class="mb-3">
              <textarea
                v-model="contactForm.message"
                placeholder="Your Message"
                class="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-offset-1"
                :class="[themeInput, { 'border-red-500': formErrors.message }]"
                rows="4"
                required
                aria-label="Your Message"
                aria-invalid="formErrors.message"
                @focus="formErrors.message = false"
              ></textarea>
              <p v-if="formErrors.message" class="text-red-500 text-xs mt-1">Message is required.</p>
            </div>
            <div class="flex justify-end gap-2">
              <button
                type="button"
                @click="closeModal"
                class="px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-opacity-80"
                :class="themeText"
                aria-label="Cancel contact form"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-opacity-80"
                :class="[themeButton, { 'opacity-50 cursor-not-allowed': isSubmitting }]"
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
  'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300': currentTheme.value === 'Light',
  'bg-gray-600 text-gray-200 hover:bg-gray-500 focus:ring-gray-500': currentTheme.value === 'Dark',
  'bg-sepia-200 text-sepia-900 hover:bg-sepia-300 focus:ring-sepia-300': currentTheme.value === 'Sepia',
  'bg-blue-600 text-blue-100 hover:bg-blue-500 focus:ring-blue-500': currentTheme.value === 'Blue',
}));
const themeCard = computed(() => ({
  'bg-white': currentTheme.value === 'Light',
  'bg-gray-800': currentTheme.value === 'Dark',
  'bg-sepia-100': currentTheme.value === 'Sepia',
  'bg-blue-900': currentTheme.value === 'Blue',
}));
const themeCardHeader = computed(() => ({
  'bg-gray-50': currentTheme.value === 'Light',
  'bg-gray-700': currentTheme.value === 'Dark',
  'bg-sepia-50': currentTheme.value === 'Sepia',
  'bg-blue-800': currentTheme.value === 'Blue',
}));
const themeInput = computed(() => ({
  'bg-white border-gray-300': currentTheme.value === 'Light',
  'bg-gray-800 border-gray-600': currentTheme.value === 'Dark',
  'bg-sepia-100 border-sepia-300': currentTheme.value === 'Sepia',
  'bg-blue-900 border-blue-600': currentTheme.value === 'Blue',
}));

// Projects
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
const filters = ['All', 'Vue.js', 'Laravel', 'JavaScript', 'PHP'];
const activeFilter = ref('All');
const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects;
  return projects.filter(project => project.technologies.includes(activeFilter.value));
});

const setFilter = (filter) => {
  activeFilter.value = filter;
};

// Contact form and details
const showDetails = ref(Array(projects.length).fill(false));
const showContactModal = ref(false);
const contactForm = ref({ name: '', email: '', message: '' });
const formSuccess = ref(false);
const formErrors = ref({ name: false, email: false, message: false });
const isSubmitting = ref(false);

const toggleDetails = (index) => {
  showDetails.value = showDetails.value.map((val, i) => (i === index ? !val : false));
};

const openContactModal = () => {
  showContactModal.value = true;
  formSuccess.value = false;
  formErrors.value = { name: false, email: false, message: false };
  isSubmitting.value = false;
  setTimeout(() => {
    document.querySelector('input[aria-label="Your Name"]')?.focus();
  }, 100);
};

const closeModal = () => {
  showContactModal.value = false;
  formSuccess.value = false;
  contactForm.value = { name: '', email: '', message: '' };
  formErrors.value = { name: false, email: false, message: false };
  isSubmitting.value = false;
};

const sendContact = async () => {
  // Basic validation
  formErrors.value = {
    name: !contactForm.value.name.trim(),
    email: !contactForm.value.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    message: !contactForm.value.message.trim(),
  };

  if (!formErrors.value.name && !formErrors.value.email && !formErrors.value.message) {
    isSubmitting.value = true;
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async submission
    console.log('Contact Form:', contactForm.value);
    formSuccess.value = true;
    setTimeout(() => {
      closeModal();
    }, 1500);
  }
};

// Card animation on mount
onMounted(() => {
  const cards = document.querySelectorAll('.animate-card');
  cards.forEach(card => card.classList.add('animate-in'));
});
</script>

<style scoped>
/* Fade animation for card details and modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Card animation */
.animate-card {
  opacity: 0;
  transform: translateY(20px);
}
.animate-card.animate-in {
  animation: slideIn 0.4s ease-out forwards;
}
@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom scrollbar for project details */
.max-h-36::-webkit-scrollbar {
  width: 4px;
}
.max-h-36::-webkit-scrollbar-track {
  background: transparent;
}
.max-h-36::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}
.max-h-36::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}

/* Smooth transitions for theme changes and hover effects */
* {
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
}
</style>