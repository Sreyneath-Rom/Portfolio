<template>
  <div class="min-h-screen font-sans p-4 md:p-8 transition-colors duration-300" :class="themeClasses">
    <!-- Hero Section -->
    <section class="py-16 px-6 text-center" :class="themeBg">
      <h1 class="text-3xl font-bold mb-6 md:text-4xl" :class="themeAccent">My Professional Portfolio</h1>
      <p class="max-w-2xl mx-auto mb-8 text-base md:text-lg" :class="themeText">
        Explore my projects showcasing skills in web development and IT solutions.
      </p>
      <div class="flex justify-center gap-4">
        <button @click="openContactModal" class="px-6 py-3 rounded-lg font-semibold transition hover:scale-105" :class="themeButton">
          Contact Me
        </button>
        <a :href="cvLink" class="px-6 py-3 rounded-lg font-semibold transition hover:scale-105" :class="themeButtonSecondary">
          Download CV
        </a>
      </div>
    </section>

    <!-- Project School Section -->
    <section class="py-16 px-6 text-center" :class="themeCard">
      <h2 class="text-3xl font-bold mb-6 md:text-4xl" :class="themeAccent">Project School</h2>
      <p class="max-w-3xl mx-auto mb-8 text-base md:text-lg" :class="themeText">
        Hands-on projects using HTML, CSS, JavaScript, TypeScript, PHP, Python, Vue.js, Laravel, and collaborative teamwork.
      </p>

      <!-- Filter Bar -->
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="setFilter(filter)"
          class="px-4 py-2 rounded-lg text-sm font-semibold transition hover:scale-105"
          :class="[
            activeFilter === filter ? themeButton : themeButtonSecondary,
            'min-w-[100px]',
          ]"
          :aria-label="`Filter projects by ${filter}`"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Project Cards -->
      <div class="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          class="w-full sm:w-80 p-6 rounded-lg shadow-lg transition hover:shadow-xl hover:scale-105"
          :class="themeCard"
        >
          <img :src="project.image" :alt="project.title" class="w-full h-40 object-cover rounded-lg mb-4" />
          <div class="w-full px-4 py-3 rounded-lg" :class="themeCardHeader">
            <p class="font-bold text-xl mb-2" :class="themeText">{{ project.title }}</p>
            <p class="text-sm" :class="themeTextSecondary">{{ project.role }} | {{ project.duration }}</p>
          </div>
          <div class="flex gap-2 mt-4">
            <a
              v-if="project.demoLink"
              :href="project.demoLink"
              target="_blank"
              rel="noopener noreferrer"
              class="w-1/2 py-2 rounded-lg font-semibold text-sm uppercase transition hover:scale-105"
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
              class="w-1/2 py-2 rounded-lg font-semibold text-sm uppercase transition hover:scale-105"
              :class="themeButtonSecondary"
              :aria-label="`View source code of ${project.title}`"
            >
              Source
            </a>
          </div>
          <button
            @click="toggleDetails(index)"
            class="w-full mt-4 py-2 px-4 rounded-lg font-semibold text-sm uppercase transition hover:scale-105"
            :class="themeButtonSecondary"
            :aria-label="showDetails[index] ? `Hide details of ${project.title}` : `Show details of ${project.title}`"
          >
            {{ showDetails[index] ? 'Hide Details' : 'Read More' }}
          </button>
          <transition name="fade">
            <div v-if="showDetails[index]" class="mt-4 text-sm max-h-32 overflow-y-auto" :class="themeTextSecondary">
              <ul class="list-disc list-inside space-y-2">
                <li v-for="(task, i) in project.tasks" :key="i">{{ task }}</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="max-w-5xl mx-auto py-16 px-6 text-center">
      <h2 class="text-3xl font-bold mb-8 md:text-4xl" :class="themeAccent">Experience</h2>
      <Card />
    </section>

    <!-- Contact Modal -->
    <div v-if="showContactModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="p-6 rounded-lg shadow-lg max-w-md w-full" :class="themeCard">
        <h2 class="text-xl font-bold mb-4" :class="themeText">Contact Me</h2>
        <form @submit.prevent="sendContact">
          <input
            type="text"
            v-model="contactForm.name"
            placeholder="Your Name"
            class="w-full p-3 mb-4 border rounded-lg"
            :class="themeInput"
            required
            aria-label="Your Name"
          />
          <input
            type="email"
            v-model="contactForm.email"
            placeholder="Your Email"
            class="w-full p-3 mb-4 border rounded-lg"
            :class="themeInput"
            required
            aria-label="Your Email"
          />
          <textarea
            v-model="contactForm.message"
            placeholder="Your Message"
            class="w-full p-3 mb-4 border rounded-lg"
            :class="themeInput"
            rows="4"
            required
            aria-label="Your Message"
          ></textarea>
          <div class="flex justify-end gap-4">
            <button type="button" @click="showContactModal = false" class="px-4 py-2" :class="themeText">
              Cancel
            </button>
            <button type="submit" class="px-4 py-2 rounded-lg" :class="themeButtonSecondary">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Card from '@/components/Card.vue';
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
  'bg-yellow-500 text-gray-900 hover:bg-yellow-400': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'bg-amber-600 text-sepia-900 hover:bg-amber-500': currentTheme.value === 'Sepia',
  'bg-blue-400 text-blue-900 hover:bg-blue-300': currentTheme.value === 'Blue',
}));
const themeButtonSecondary = computed(() => ({
  'bg-sky-500 text-white hover:bg-sky-400': currentTheme.value === 'Light' || currentTheme.value === 'Dark',
  'bg-amber-500 text-sepia-900 hover:bg-amber-400': currentTheme.value === 'Sepia',
  'bg-blue-500 text-white hover:bg-blue-400': currentTheme.value === 'Blue',
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

// CV link
const cvLink = 'https://www.canva.com/design/DAGjQTop64Q/Y7LRgoDTg1TlutXgBb9YxQ/view?utm_content=DAGjQTop64Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8cec6f4468';

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

const toggleDetails = (index) => {
  showDetails.value = showDetails.value.map((val, i) => (i === index ? !val : false));
};

const openContactModal = () => {
  showContactModal.value = true;
};

const sendContact = () => {
  console.log('Contact Form:', contactForm.value);
  showContactModal.value = false;
  contactForm.value = { name: '', email: '', message: '' };
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