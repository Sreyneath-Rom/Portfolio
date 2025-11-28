<template>
  <section class="relative min-h-screen py-20 px-6 overflow-hidden" :class="themeClasses">
    <!-- Background gradient overlay -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
    </div>

    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          <span class="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>
        <div class="mx-auto w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full shadow-lg shadow-purple-500/50"></div>
        <p class="mt-8 text-xl opacity-90" :class="themeText">
          Real-world solutions built with passion, precision, and modern technology.
        </p>
      </div>

      <!-- Filter Pills -->
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="setFilter(filter)"
          class="group relative px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 overflow-hidden"
          :class="[
            activeFilter === filter
              ? 'text-white shadow-2xl shadow-purple-500/50'
              : 'text-white/70 hover:text-white backdrop-blur-md border border-white/20'
          ]"
        >
          <span class="relative z-10">{{ filter }}</span>
          <!-- Active glow -->
          <span
            v-if="activeFilter === filter"
            class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full blur-xl opacity-70"
          ></span>
          <!-- Shine sweep -->
          <span class="absolute inset-0 -translate-x-full bg-white/30 skew-x-12 transition-transform duration-1000 group-hover:translate-x-full"></span>
        </button>
      </div>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <article
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="group relative"
          :style="{ animationDelay: `${index * 0.15}s` }"
          @mouseenter="hoveredCard = project.id"
          @mouseleave="hoveredCard = null"
        >
          <!-- Glassmorphic Card -->
          <div
            class="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-700"
            :class="[
              'bg-white/10 dark:bg-black/30',
              hoveredCard === project.id ? 'scale-105 shadow-3xl shadow-purple-500/50' : 'scale-100'
            ]"
          >
            <!-- Gradient overlay on hover -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            ></div>

            <!-- Floating particles -->
            <div class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <div class="floating-particles">
                <span></span><span></span><span></span>
              </div>
            </div>

            <!-- Image -->
            <div class="relative overflow-hidden">
              <img
                :src="project.image"
                :alt="`Screenshot of ${project.title}`"
                class="w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
                @error="e => e.target.src = placeholderImage"
              />
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div class="text-center text-white">
                  <h3 class="text-2xl font-bold">{{ project.title }}</h3>
                  <p class="text-sm mt-2 opacity-90">{{ project.role }}</p>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="relative p-8 space-y-6">
              <div>
                <h3 class="text-2xl font-bold" :class="themeText">{{ project.title }}</h3>
                <p class="text-sm mt-2" :class="themeTextSecondary">
                  {{ project.role }} • {{ project.duration }}
                </p>
              </div>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-3">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md border border-white/30 shadow-lg"
                  :class="techGlow"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Actions -->
              <div class="flex gap-4 pt-4">
                <a
                  v-if="project.demoLink"
                  :href="project.demoLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 group relative px-6 py-3 rounded-2xl font-bold text-center overflow-hidden shadow-xl transition-all duration-300 hover:scale-105"
                  :class="primaryButton"
                >
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-xl">open_in_new</span>
                    Live Demo
                  </span>
                  <span class="absolute inset-0 translate-x-[-100%] bg-white/30 skew-x-12 transition-transform duration-1000 group-hover:translate-x-full"></span>
                </a>

                <a
                  v-if="project.githubLink"
                  :href="project.githubLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 px-6 py-3 rounded-2xl font-bold text-center border-2 border-white/30 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                  :class="accentClass"
                >
                  <span class="flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined">code</span>
                    Source
                  </span>
                </a>
              </div>

              <!-- Read More -->
              <button
                @click="toggleDetails(project.id)"
                class="w-full mt-6 py-3 rounded-2xl font-semibold border border-white/30 hover:bg-white/10 transition-all duration-300"
                :class="isDetailsOpen(project.id) ? 'bg-white/10' : ''"
              >
                {{ isDetailsOpen(project.id) ? 'Hide Details' : 'Read More' }}
              </button>

              <!-- Details -->
              <transition name="fade">
                <div v-if="isDetailsOpen(project.id)" class="mt-4 text-sm space-y-3" :class="themeTextSecondary">
                  <ul class="list-disc list-inside space-y-2">
                    <li v-for="task in project.tasks" :key="task">{{ task }}</li>
                  </ul>
                </div>
              </transition>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { currentTheme, accentClass, textClass } = useDarkMode()
const hoveredCard = ref(null)
const activeFilter = ref('All')
const detailsState = ref({})
const placeholderImage = 'https://via.placeholder.com/800x600/1a1a2e/ffffff?text=No+Image'

const projects = [
  {
    id: 'pos-system',
    title: 'POS System',
    duration: 'Feb - May 2025',
    role: 'DevOps & Frontend',
    image: 'https://www.nchsoftware.com/point-of-sale/screenshots/main.jpg',
    demoLink: 'https://example.com/pos-demo',
    githubLink: 'https://github.com/Sreyneath-Rom/pos-system',
    technologies: ['PHP', 'JavaScript', 'Bootstrap'],
    tasks: [
      'Monitored server performance and resolved infrastructure issues.',
      'Configured CI/CD pipelines and deployment environments.',
      'Designed responsive UI with Bootstrap 5 and vanilla JS.',
      'Integrated payment gateways and real-time inventory.',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    duration: 'Jan - Apr 2025',
    role: 'Frontend Developer',
    image: 'https://www.researchgate.net/publication/228647368/figure/fig1/AS:301863099486217@1448981179537/Screenshot-of-e-commerce-site-used-in-our-experiment.png',
    demoLink: 'https://example.com/ecommerce',
    githubLink: 'https://github.com/Sreyneath-Rom/ecommerce',
    technologies: ['Vue.js', 'Tailwind CSS', 'Pinia'],
    tasks: [
      'Built fully responsive storefront with Vue 3 + Composition API.',
      'Implemented cart, wishlist, and user authentication.',
      'Optimized performance with lazy loading and code splitting.',
      'Integrated Stripe and PayPal payment gateways.',
    ],
  },
  {
    id: 'task-manager',
    title: 'Task Manager Pro',
    duration: 'Mar - Jun 2025',
    role: 'Full-Stack Developer',
    image: 'https://cdn.dribbble.com/userupload/30407847/file/original-8bc7ddef427bc2323290790791f875e9.png',
    demoLink: 'https://taskmanager.sreyneath.dev',
    githubLink: 'https://github.com/Sreyneath-Rom/task-manager',
    technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'MySQL'],
    tasks: [
      'Developed RESTful APIs with Laravel Sanctum authentication.',
      'Built real-time dashboard with Vue 3 and Inertia.js.',
      'Implemented drag-and-drop task reordering.',
      'Added team collaboration and file attachments.',
    ],
  },
]

const filters = computed(() => {
  const techs = new Set()
  projects.forEach(p => p.technologies.forEach(t => techs.add(t)))
  return ['All', ...Array.from(techs)]
})

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter(p => p.technologies.includes(activeFilter.value))
})

const setFilter = (filter) => {
  activeFilter.value = filter
  detailsState.value = {}
}

const isDetailsOpen = (id) => !!detailsState.value[id]
const toggleDetails = (id) => {
  detailsState.value = { ...detailsState.value, [id]: !detailsState.value[id] }
}

// Theme classes
const themeClasses = computed(() => {
  const map = {
    Light: 'bg-gradient-to-br from-gray-50 to-white',
    Dark: 'bg-gradient-to-br from-black via-gray-900 to-purple-900',
    Sepia: 'bg-gradient-to-br from-amber-50 to-orange-100',
    Blue: 'bg-gradient-to-br from-blue-950 to-cyan-900',
    Purple: 'bg-gradient-to-br from-purple-950 to-pink-900',
    Green: 'bg-gradient-to-br from-emerald-950 to-teal-900',
    Orange: 'bg-gradient-to-br from-orange-900 to-red-900',
    Teal: 'bg-gradient-to-br from-teal-950 to-cyan-900',
    Pink: 'bg-gradient-to-br from-pink-950 to-rose-900',
    Midnight: 'bg-gradient-to-br from-indigo-950 via-black to-purple-950',
  }
  return map[currentTheme.value] || 'bg-gradient-to-br from-black to-gray-900'
})

const themeText = computed(() => textClass.value)

const primaryButton = computed(() => {
  const map = {
    Light: 'bg-gray-800 hover:bg-gray-900 text-white',
    Dark: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white',
    Sepia: 'bg-gradient-to-r from-amber-600 to-orange-600 text-white',
    Blue: 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white',
    Purple: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white',
    Green: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white',
    Orange: 'bg-gradient-to-r from-orange-600 to-red-600 text-white',
    Teal: 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white',
    Pink: 'bg-gradient-to-r from-pink-600 to-rose-600 text-white',
    Midnight: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white',
  }
  return map[currentTheme.value] || 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
})

const techGlow = 'bg-white/20 backdrop-blur-md hover:bg-white/30 hover:shadow-xl hover:shadow-cyan-500/30'
</script>

<style scoped>
.floating-particles span {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: float 8s infinite linear;
}
.floating-particles span:nth-child(1) { left: 20%; animation-delay: 0s; }
.floating-particles span:nth-child(2) { left: 50%; animation-delay: 2s; }
.floating-particles span:nth-child(3) { left: 80%; animation-delay: 4s; }

@keyframes float {
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(-300px) rotate(360deg); opacity: 0; }
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  max-height: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>