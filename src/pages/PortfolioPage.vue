<template>
  <div class="min-h-screen py-20 px-6" :class="[bgClass, textClass]">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-5xl font-bold mb-4" :class="accentClass">Experience</h2>
      <div class="h-1 w-24 bg-current opacity-70 mx-auto mb-8 rounded-full"></div>

      <button
        @click="openContactModal"
        class="px-8 py-3 rounded-xl text-white font-bold mb-12 transition"
        :class="themeButton"
      >
        Contact Me
      </button>

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
          :key="project.id"
          :class="[
            'relative p-4 rounded-2xl transition-transform duration-300 ease-out overflow-hidden',
            themeCard,
            'hover:-translate-y-1 hover:shadow-2xl',
            !cardAnimated[project.id] ? 'opacity-0 translate-y-8' : 'opacity-100'
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
              class="px-3 py-1 text-xs font-semibold rounded-full shadow-sm bg-opacity-90"
              :class="themeBadge"
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
            :aria-expanded="detailsState[project.id] ? 'true' : 'false'"
            :aria-label="detailsState[project.id] ? `Hide details of ${project.title}` : `Show details of ${project.title}`"
          >
            {{ detailsState[project.id] ? 'Hide Details' : 'Read More' }}
          </button>

          <transition name="fade">
            <div v-if="detailsState[project.id]" class="mt-3 text-sm max-h-44 overflow-y-auto pr-2" :class="themeTextSecondary">
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

          <div v-if="formSuccess" class="mb-4 p-3 rounded-lg" :class="themeSuccess">
            Message sent successfully!
          </div>

          <form @submit.prevent="sendContact" class="space-y-4" novalidate>
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
import { ref, computed, onMounted, watch, nextTick, onUnmounted } from 'vue';
import { useDarkMode } from '@/composables/useDarkMode';

// Theme management
const { currentTheme } = useDarkMode();

// Map theme names to Tailwind utility class strings
const bgClass = computed(() => {
  switch (currentTheme.value) {
    case 'Dark': return 'bg-gray-900';
    case 'Sepia': return 'bg-yellow-50';
    case 'Blue': return 'bg-blue-950';
    case 'Purple': return 'bg-purple-950';
    case 'Green': return 'bg-green-950';
    case 'Orange': return 'bg-orange-950';
    case 'Teal': return 'bg-teal-950';
    case 'Pink': return 'bg-pink-950';
    case 'Midnight': return 'bg-indigo-950';
    default: return 'bg-white';
  }
});

const textClass = computed(() => {
  switch (currentTheme.value) {
    case 'Dark': return 'text-gray-200';
    case 'Sepia': return 'text-yellow-900';
    case 'Blue': return 'text-blue-100';
    case 'Purple': return 'text-purple-100';
    case 'Green': return 'text-green-100';
    case 'Orange': return 'text-orange-100';
    case 'Teal': return 'text-teal-100';
    case 'Pink': return 'text-pink-100';
    case 'Midnight': return 'text-indigo-100';
    default: return 'text-gray-800';
  }
});

const accentClass = computed(() => {
  switch (currentTheme.value) {
    case 'Sepia': return 'text-amber-600';
    case 'Blue': return 'text-blue-400';
    case 'Purple': return 'text-purple-400';
    case 'Green': return 'text-green-400';
    case 'Orange': return 'text-orange-400';
    case 'Teal': return 'text-teal-400';
    case 'Pink': return 'text-pink-400';
    case 'Midnight': return 'text-indigo-400';
    default: return 'text-yellow-500';
  }
});

const themeButton = computed(() => {
  switch (currentTheme.value) {
    case 'Sepia': return 'bg-amber-600 text-yellow-900 hover:bg-amber-500 focus:ring-amber-500';
    case 'Blue': return 'bg-blue-400 text-blue-900 hover:bg-blue-300 focus:ring-blue-400';
    case 'Purple': return 'bg-purple-400 text-purple-900 hover:bg-purple-300 focus:ring-purple-400';
    case 'Green': return 'bg-green-400 text-green-900 hover:bg-green-300 focus:ring-green-400';
    case 'Orange': return 'bg-orange-400 text-orange-900 hover:bg-orange-300 focus:ring-orange-400';
    case 'Teal': return 'bg-teal-400 text-teal-900 hover:bg-teal-300 focus:ring-teal-400';
    case 'Pink': return 'bg-pink-400 text-pink-900 hover:bg-pink-300 focus:ring-pink-400';
    case 'Midnight': return 'bg-indigo-400 text-indigo-900 hover:bg-indigo-300 focus:ring-indigo-400';
    case 'Dark':
    case 'Light':
    default: return 'bg-yellow-500 text-white hover:bg-yellow-400 focus:ring-yellow-500';
  }
});

const themeButtonSecondary = computed(() => {
  switch (currentTheme.value) {
    case 'Sepia': return 'text-amber-500 hover:bg-yellow-50 focus:ring-amber-500';
    case 'Blue': return 'text-blue-400 hover:bg-blue-800 hover:text-blue-300 focus:ring-blue-400';
    case 'Purple': return 'text-purple-400 hover:bg-purple-800 hover:text-purple-300 focus:ring-purple-400';
    case 'Green': return 'text-green-400 hover:bg-green-800 hover:text-green-300 focus:ring-green-400';
    case 'Orange': return 'text-orange-400 hover:bg-orange-800 hover:text-orange-300 focus:ring-orange-400';
    case 'Teal': return 'text-teal-400 hover:bg-teal-800 hover:text-teal-300 focus:ring-teal-400';
    case 'Pink': return 'text-pink-400 hover:bg-pink-800 hover:text-pink-300 focus:ring-pink-400';
    case 'Midnight': return 'text-indigo-400 hover:bg-indigo-800 hover:text-indigo-300 focus:ring-indigo-400';
    case 'Dark': return 'text-sky-400 hover:bg-gray-800 hover:text-sky-300 focus:ring-sky-400';
    default: return 'text-sky-500 hover:bg-gray-100 hover:text-sky-400 focus:ring-sky-500';
  }
});

const themeCard = computed(() => {
  switch (currentTheme.value) {
    case 'Dark': return 'bg-gray-800 border border-gray-700';
    case 'Sepia': return 'bg-yellow-50 border border-yellow-200';
    case 'Blue': return 'bg-blue-900 border border-blue-700';
    case 'Purple': return 'bg-purple-900 border border-purple-700';
    case 'Green': return 'bg-green-900 border border-green-700';
    case 'Orange': return 'bg-orange-900 border border-orange-700';
    case 'Teal': return 'bg-teal-900 border border-teal-700';
    case 'Pink': return 'bg-pink-900 border border-pink-700';
    case 'Midnight': return 'bg-indigo-900 border border-indigo-700';
    default: return 'bg-white border border-gray-200';
  }
});

const themeCardHeader = computed(() => {
  switch (currentTheme.value) {
    case 'Dark': return 'bg-gray-700';
    case 'Sepia': return 'bg-yellow-100';
    case 'Blue': return 'bg-blue-700';
    case 'Purple': return 'bg-purple-700';
    case 'Green': return 'bg-green-700';
    case 'Orange': return 'bg-orange-700';
    case 'Teal': return 'bg-teal-700';
    case 'Pink': return 'bg-pink-700';
    case 'Midnight': return 'bg-indigo-700';
    default: return 'bg-yellow-100';
  }
});

const themeInput = computed(() => {
  switch (currentTheme.value) {
    case 'Dark': return 'bg-gray-900 border border-gray-700';
    case 'Sepia': return 'bg-yellow-50 border border-yellow-200';
    case 'Blue': return 'bg-blue-950 border border-blue-700';
    case 'Purple': return 'bg-purple-950 border border-purple-700';
    case 'Green': return 'bg-green-950 border border-green-700';
    case 'Orange': return 'bg-orange-950 border border-orange-700';
    case 'Teal': return 'bg-teal-950 border border-teal-700';
    case 'Pink': return 'bg-pink-950 border border-pink-700';
    case 'Midnight': return 'bg-indigo-950 border border-indigo-700';
    default: return 'bg-gray-50 border border-gray-300';
  }
});

const themeText = computed(() => textClass.value);
const themeTextSecondary = computed(() => {
  switch (currentTheme.value) {
    case 'Dark': return 'text-gray-400';
    case 'Sepia': return 'text-yellow-800';
    case 'Blue': return 'text-blue-200';
    case 'Purple': return 'text-purple-200';
    case 'Green': return 'text-green-200';
    case 'Orange': return 'text-orange-200';
    case 'Teal': return 'text-teal-200';
    case 'Pink': return 'text-pink-200';
    case 'Midnight': return 'text-indigo-200';
    default: return 'text-gray-600';
  }
});

const themeBadge = computed(() => {
  switch (currentTheme.value) {
    case 'Dark': return 'bg-gray-700 text-gray-200';
    case 'Sepia': return 'bg-yellow-100 text-yellow-800';
    case 'Blue': return 'bg-blue-800 text-blue-100';
    case 'Purple': return 'bg-purple-800 text-purple-100';
    case 'Green': return 'bg-green-800 text-green-100';
    case 'Orange': return 'bg-orange-800 text-orange-100';
    case 'Teal': return 'bg-teal-800 text-teal-100';
    case 'Pink': return 'bg-pink-800 text-pink-100';
    case 'Midnight': return 'bg-indigo-800 text-indigo-100';
    default: return 'bg-gray-100 text-gray-800';
  }
});

const themeSuccess = computed(() => {
  switch (currentTheme.value) {
    case 'Dark': return 'bg-green-900 text-green-100';
    default: return 'bg-green-50 text-green-800';
  }
});

// Projects - added stable id for keys
const projects = [
  {
    id: 'pos-001',
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
    id: 'ecom-002',
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
    id: 'task-003',
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

const detailsState = ref({});     // keyed by project.id
const cardAnimated = ref({});     // keyed by project.id

// initialize states for all projects
function initProjectStates() {
  projects.forEach(p => {
    if (!(p.id in detailsState.value)) detailsState.value[p.id] = false;
    if (!(p.id in cardAnimated.value)) cardAnimated.value[p.id] = false;
  });
}
initProjectStates();

const toggleDetails = (id) => {
  // ensure states exist
  initProjectStates();
  // close others and toggle requested
  Object.keys(detailsState.value).forEach(k => {
    detailsState.value[k] = k === id ? !detailsState.value[k] : false;
  });
};

const nameInputRef = ref(null);

const openContactModal = () => {
  showContactModal.value = true;
  formSuccess.value = false;
  formErrors.value = { name: false, email: false, message: false };
  isSubmitting.value = false;
};

// focus input when modal opens and prevent body scroll
watch(showContactModal, async (val) => {
  if (val) {
    // prevent background scroll
    document.body.style.overflow = 'hidden';
    await nextTick();
    if (nameInputRef.value && typeof nameInputRef.value.focus === 'function') {
      nameInputRef.value.focus();
    }
  } else {
    document.body.style.overflow = '';
  }
});

onUnmounted(() => {
  // restore scroll if component unmounts while modal open
  document.body.style.overflow = '';
});

// simple email regex
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

const sendContact = async () => {
  formErrors.value = {
    name: !contactForm.value.name.trim(),
    email: !emailRe.test(contactForm.value.email || ''),
    message: !contactForm.value.message.trim(),
  };

  if (!formErrors.value.name && !formErrors.value.email && !formErrors.value.message) {
    isSubmitting.value = true;
    // Simulate async send (replace with real API call)
    setTimeout(() => {
      formSuccess.value = true;
      isSubmitting.value = false;
      contactForm.value = { name: '', email: '', message: '' };
    }, 1200);
  }
};

// Card animation on mount
onMounted(() => {
  initProjectStates();
  // stagger animation per visible project; mark all as animated after a short delay
  setTimeout(() => {
    Object.keys(cardAnimated.value).forEach(k => cardAnimated.value[k] = true);
  }, 50);
});
</script>

<style scoped>
/* Transitions only; styling uses Tailwind utilities */
* {
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Fade transition for details */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, max-height 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
