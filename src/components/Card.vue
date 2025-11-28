<template>
  <div class="px-4 py-10 md:py-16 transition-colors duration-300" :class="themeClasses">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-2" :class="themeAccent">Experience</h2>
        <div class="mx-auto h-1 w-24 rounded-full mb-4" :class="[themeAccent, 'opacity-90']"></div>
        <p class="max-w-3xl mx-auto text-base md:text-lg leading-relaxed" :class="themeText">
          Hands-on projects using HTML, CSS, JavaScript, TypeScript, PHP, Python, Vue.js, Laravel, and collaborative teamwork.
        </p>
      </div>

      <!-- Filter Bar -->
      <div class="flex flex-wrap justify-center gap-3 mb-10" role="tablist" aria-label="Project filters">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="setFilter(filter)"
          class="px-4 py-2 rounded-full text-sm font-medium transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
          :class="[activeFilter === filter ? themeButton : themeButtonSecondary, 'shadow-sm']"
          :aria-pressed="activeFilter === filter ? 'true' : 'false'"
          :aria-label="`Filter projects by ${filter}`"
          role="tab"
          :aria-selected="activeFilter === filter"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Project Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :class="[
            'relative p-4 rounded-2xl transition-transform duration-300 ease-out overflow-hidden',
            themeCard,
            'hover:-translate-y-1 hover:shadow-2xl',
            !cardAnimated.value[project.id] ? 'opacity-0 translate-y-8' : 'opacity-100'
          ]"
          :style="{ animationDelay: `${index * 0.12}s` }"
          role="listitem"
          :aria-label="`Project: ${project.title}`"
        >
          <!-- Image -->
          <div class="relative rounded-xl overflow-hidden mb-4 group">
            <img
              :src="project.image"
              :alt="project.alt || `Screenshot of ${project.title}`"
              loading="lazy"
              @error="onImageError"
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
          <div class="flex flex-wrap gap-2 mb-3" aria-hidden="false">
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
            @click="toggleDetails(project.id)"
            class="w-full mt-4 py-2 rounded-lg text-sm font-semibold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
            :class="themeButtonSecondary"
            :aria-expanded="isDetailsOpen(project.id) ? 'true' : 'false'"
            :aria-controls="`details-${project.id}`"
            :aria-label="isDetailsOpen(project.id) ? `Hide details of ${project.title}` : `Show details of ${project.title}`"
          >
            {{ isDetailsOpen(project.id) ? 'Hide Details' : 'Read More' }}
          </button>

          <transition name="fade">
            <div
              v-if="isDetailsOpen(project.id)"
              :id="`details-${project.id}`"
              class="mt-3 text-sm max-h-44 overflow-y-auto pr-2"
              :class="themeTextSecondary"
            >
              <ul class="list-disc list-inside space-y-2">
                <li v-for="(task, i) in project.tasks" :key="i">{{ task }}</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useDarkMode } from '@/composables/useDarkMode';

const { currentTheme } = useDarkMode();

// Keep theme computed props as in original (unchanged for brevity)
const themeClasses = computed(() => (currentTheme.value === 'Light' ? 'bg-white text-gray-800' :
  currentTheme.value === 'Dark' ? 'bg-gray-900 text-gray-200' :
  currentTheme.value === 'Sepia' ? 'bg-sepia-100 text-sepia-900' :
  currentTheme.value === 'Blue' ? 'bg-blue-900 text-blue-100' :
  currentTheme.value === 'Purple' ? 'bg-purple-900 text-purple-100' :
  currentTheme.value === 'Green' ? 'bg-green-900 text-green-100' :
  currentTheme.value === 'Orange' ? 'bg-orange-900 text-orange-100' :
  currentTheme.value === 'Teal' ? 'bg-teal-900 text-teal-100' :
  currentTheme.value === 'Pink' ? 'bg-pink-900 text-pink-100' :
  'bg-indigo-900 text-indigo-100'));

const themeText = computed(() => (currentTheme.value === 'Light' ? 'text-gray-800' :
  currentTheme.value === 'Dark' ? 'text-gray-200' :
  currentTheme.value === 'Sepia' ? 'text-sepia-900' :
  currentTheme.value === 'Blue' ? 'text-blue-100' :
  currentTheme.value === 'Purple' ? 'text-purple-100' :
  currentTheme.value === 'Green' ? 'text-green-100' :
  currentTheme.value === 'Orange' ? 'text-orange-100' :
  currentTheme.value === 'Teal' ? 'text-teal-100' :
  currentTheme.value === 'Pink' ? 'text-pink-100' :
  'text-indigo-100'));

const themeTextSecondary = computed(() => (currentTheme.value === 'Light' ? 'text-gray-600' :
  currentTheme.value === 'Dark' ? 'text-gray-400' :
  currentTheme.value === 'Sepia' ? 'text-sepia-700' :
  currentTheme.value === 'Blue' ? 'text-blue-200' :
  currentTheme.value === 'Purple' ? 'text-purple-200' :
  currentTheme.value === 'Green' ? 'text-green-200' :
  currentTheme.value === 'Orange' ? 'text-orange-200' :
  currentTheme.value === 'Teal' ? 'text-teal-200' :
  currentTheme.value === 'Pink' ? 'text-pink-200' :
  'text-indigo-200'));

const themeAccent = computed(() => (currentTheme.value === 'Light' || currentTheme.value === 'Dark' ? 'text-yellow-500' :
  currentTheme.value === 'Sepia' ? 'text-amber-600' :
  currentTheme.value === 'Blue' ? 'text-blue-400' :
  currentTheme.value === 'Purple' ? 'text-purple-400' :
  currentTheme.value === 'Green' ? 'text-green-400' :
  currentTheme.value === 'Orange' ? 'text-orange-400' :
  currentTheme.value === 'Teal' ? 'text-teal-400' :
  currentTheme.value === 'Pink' ? 'text-pink-400' :
  'text-indigo-400'));

const themeButton = computed(() => (currentTheme.value === 'Light' || currentTheme.value === 'Dark' ? 'bg-yellow-500 text-white hover:bg-yellow-400 focus:ring-yellow-500' :
  currentTheme.value === 'Sepia' ? 'bg-amber-600 text-sepia-900 hover:bg-amber-500 focus:ring-amber-500' :
  currentTheme.value === 'Blue' ? 'bg-blue-400 text-blue-900 hover:bg-blue-300 focus:ring-blue-400' :
  currentTheme.value === 'Purple' ? 'bg-purple-400 text-purple-900 hover:bg-purple-300 focus:ring-purple-400' :
  currentTheme.value === 'Green' ? 'bg-green-400 text-green-900 hover:bg-green-300 focus:ring-green-400' :
  currentTheme.value === 'Orange' ? 'bg-orange-400 text-orange-900 hover:bg-orange-300 focus:ring-orange-400' :
  currentTheme.value === 'Teal' ? 'bg-teal-400 text-teal-900 hover:bg-teal-300 focus:ring-teal-400' :
  currentTheme.value === 'Pink' ? 'bg-pink-400 text-pink-900 hover:bg-pink-300 focus:ring-pink-400' :
  'bg-indigo-400 text-indigo-900 hover:bg-indigo-300 focus:ring-indigo-400'));

const themeButtonSecondary = computed(() => (currentTheme.value === 'Light' ? 'text-sky-500 hover:bg-gray-100 hover:text-sky-400 focus:ring-sky-500' :
  currentTheme.value === 'Dark' ? 'text-sky-400 hover:bg-gray-800 hover:text-sky-300 focus:ring-sky-400' :
  currentTheme.value === 'Sepia' ? 'text-amber-500 hover:bg-sepia-200 hover:text-amber-400 focus:ring-amber-500' :
  currentTheme.value === 'Blue' ? 'text-blue-400 hover:bg-blue-800 hover:text-blue-300 focus:ring-blue-400' :
  currentTheme.value === 'Purple' ? 'text-purple-400 hover:bg-purple-800 hover:text-purple-300 focus:ring-purple-400' :
  currentTheme.value === 'Green' ? 'text-green-400 hover:bg-green-800 hover:text-green-300 focus:ring-green-400' :
  currentTheme.value === 'Orange' ? 'text-orange-400 hover:bg-orange-800 hover:text-orange-300 focus:ring-orange-400' :
  currentTheme.value === 'Teal' ? 'text-teal-400 hover:bg-teal-800 hover:text-teal-300 focus:ring-teal-400' :
  currentTheme.value === 'Pink' ? 'text-pink-400 hover:bg-pink-800 hover:text-pink-300 focus:ring-pink-400' :
  'text-indigo-400 hover:bg-indigo-800 hover:text-indigo-300 focus:ring-indigo-400'));

const themeCard = computed(() => (currentTheme.value === 'Light' ? 'bg-white border-gray-300' :
  currentTheme.value === 'Dark' ? 'bg-gray-800 border-gray-600' :
  currentTheme.value === 'Sepia' ? 'bg-sepia-100 border-sepia-400' :
  currentTheme.value === 'Blue' ? 'bg-blue-900 border-blue-600' :
  currentTheme.value === 'Purple' ? 'bg-purple-900 border-purple-600' :
  currentTheme.value === 'Green' ? 'bg-green-900 border-green-600' :
  currentTheme.value === 'Orange' ? 'bg-orange-900 border-orange-600' :
  currentTheme.value === 'Teal' ? 'bg-teal-900 border-teal-600' :
  currentTheme.value === 'Pink' ? 'bg-pink-900 border-pink-600' :
  'bg-indigo-900 border-indigo-600'));

const themeCardHeader = computed(() => (currentTheme.value === 'Light' ? 'bg-yellow-100' :
  currentTheme.value === 'Dark' ? 'bg-gray-600' :
  currentTheme.value === 'Sepia' ? 'bg-sepia-300' :
  currentTheme.value === 'Blue' ? 'bg-blue-700' :
  currentTheme.value === 'Purple' ? 'bg-purple-700' :
  currentTheme.value === 'Green' ? 'bg-green-700' :
  currentTheme.value === 'Orange' ? 'bg-orange-700' :
  currentTheme.value === 'Teal' ? 'bg-teal-700' :
  currentTheme.value === 'Pink' ? 'bg-pink-700' :
  'bg-indigo-700'));

const placeholderImage = 'https://via.placeholder.com/800x480?text=No+Image';

// Projects with stable ids
/** @type {Array} */
const projects = [
  {
    id: 'pos-system',
    title: 'POS System',
    duration: 'Feb 10, 2025 - May 02, 2025',
    role: 'DevOps',
    image: 'https://www.nchsoftware.com/point-of-sale/screenshots/main.jpg',
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
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    duration: 'Jan 15, 2025 - Apr 30, 2025',
    role: 'Frontend Developer',
    image: 'https://www.researchgate.net/publication/228647368/figure/fig1/AS:301863099486217@1448981179537/Screenshot-of-e-commerce-site-used-in-our-experiment.png',
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
    id: 'task-manager-app',
    title: 'Task Manager App',
    duration: 'Mar 01, 2025 - Jun 15, 2025',
    role: 'Full-Stack Developer',
    image: 'https://cdn.dribbble.com/userupload/30407847/file/original-8bc7ddef427bc2323290790791f875e9.png?resize=752x&vertical=center',
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
  // close details for visible projects when filter changes
  detailsState.value = {};
};

// Details state keyed by project id for stability across filters
const detailsState = ref({});

const isDetailsOpen = (id) => !!detailsState.value[id];

const toggleDetails = (id) => {
  // toggle only the provided id and close others
  detailsState.value = Object.fromEntries(
    filteredProjects.value.map(p => [p.id, p.id === id ? !detailsState.value[id] : false])
  );
};

// Card animation state keyed by id
const cardAnimated = ref({});

// animate cards in with a stagger using per-card timeouts
onMounted(() => {
  filteredProjects.value.forEach((p, i) => {
    cardAnimated.value[p.id] = false;
    setTimeout(() => {
      cardAnimated.value = { ...cardAnimated.value, [p.id]: true };
    }, 80 + i * 120);
  });
});

// simplify image error fallback
const onImageError = (e) => {
  e.target.src = placeholderImage;
  e.target.classList.add('opacity-70');
};
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

/* Theme-specific background colors (kept as in original) */
.bg-sepia-50 { background-color: #f7f2e7; }
.bg-sepia-100 { background-color: #f3eadb; }
.bg-sepia-200 { background-color: #f5f0e1; }
.bg-sepia-300 { background-color: #ede4d3; }
.bg-blue-700 { background-color: #1d4ed8; }
.bg-blue-800 { background-color: #1e3a8a; }
.bg-blue-900 { background-color: #0b3d91; }
.bg-blue-950 { background-color: #172554; }
.bg-purple-700 { background-color: #6d28d9; }
.bg-purple-800 { background-color: #3b1476; }
.bg-purple-900 { background-color: #4c1d95; }
.bg-purple-950 { background-color: #2e1065; }
.bg-green-700 { background-color: #047857; }
.bg-green-800 { background-color: #064e3b; }
.bg-green-900 { background-color: #065f46; }
.bg-green-950 { background-color: #022c22; }
.bg-orange-700 { background-color: #c2410c; }
.bg-orange-800 { background-color: #7c2d12; }
.bg-orange-900 { background-color: #a04000; }
.bg-orange-950 { background-color: #431407; }
.bg-teal-700 { background-color: #0d9488; }
.bg-teal-800 { background-color: #115e59; }
.bg-teal-900 { background-color: #0f766e; }
.bg-teal-950 { background-color: #042f2e; }
.bg-pink-700 { background-color: #db2777; }
.bg-pink-800 { background-color: #9d174d; }
.bg-pink-900 { background-color: #be185d; }
.bg-pink-950 { background-color: #4a044e; }
.bg-indigo-700 { background-color: #4f46e5; }
.bg-indigo-800 { background-color: #1e1b4b; }
.bg-indigo-900 { background-color: #021124; }
.bg-indigo-950 { background-color: #0f172a; }

/* Theme-specific text colors */
.text-sepia-900 { color: #5b4636; }
.text-sepia-700 { color: #8c552f; }
.text-blue-100 { color: #e6f2ff; }
.text-blue-200 { color: #bfdbfe; }
.text-purple-100 { color: #efe7ff; }
.text-purple-200 { color: #ddd6fe; }
.text-green-100 { color: #e6fff4; }
.text-green-200 { color: #a7f3d0; }
.text-orange-100 { color: #fff4e6; }
.text-orange-200 { color: #fed7aa; }
.text-teal-100 { color: #e6fffb; }
.text-teal-200 { color: #99f6e4; }
.text-pink-100 { color: #fff0f6; }
.text-pink-200 { color: #f9a8d4; }
.text-indigo-100 { color: #dfefff; }
.text-indigo-200 { color: #c7d2fe; }

/* Theme-specific border colors */
.border-sepia-300 { border-color: #e7d5b3; }
.border-sepia-400 { border-color: #d4a373; }
.border-blue-600 { border-color: #2563eb; }
.border-purple-600 { border-color: #6d28d9; }
.border-green-600 { border-color: #059669; }
.border-orange-600 { border-color: #ea580c; }
.border-teal-600 { border-color: #0d9488; }
.border-pink-600 { border-color: #db2777; }
.border-indigo-600 { border-color: #4f46e5; }
</style>
