<template>
  <div
    class="min-h-screen mt-25 text-[12pt] font-[Verdana] leading-relaxed p-6 text-black dark:text-white dark:bg-gray-900">
    <!-- Welcome Section -->
    <div class="flex justify-start mb-[80px] sm:mb-20 ml-30">
      <div>
        <h1 id="welcome-title" class="text-4xl font-bold text-yellow-600 mb-2"></h1>
        <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Explore my journey in preparing for a career in the IT sector.
        </p>
      </div>
      <div class="ml-80">
        <img
          src="https://scontent.fpnh19-1.fna.fbcdn.net/v/t39.30808-6/469514138_1224431698646039_3343655745036244234_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=pC2ybbwtYiwQ7kNvwGj1-0m&_nc_oc=AdllyPa2FRWSyZEbVW-dO2xU7By65wq6CZD-M5-ZK_86lzLev-AyO8RgCe2_ETUqAeY&_nc_zt=23&_nc_ht=scontent.fpnh19-1.fna&_nc_gid=FXZXTwiSM5hYmjJScT2b9g&oh=00_AfNImfy2RR10N5r83nh9DB1azL2Ur0FO9-vkLg8nZpNBzA&oe=6867CD92"
          alt="Profile picture" class="w-70 h-70 rounded-full mb-4 shadow-md object-cover" />
      </div>
    </div>
    <hr class="border-yellow-500 dark:border-gray-600 mb-10" />

    <!-- Project Cards -->
    <div class="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 mt-10">
      <div v-for="(project, index) in projects" :key="project.title"
        class="flex items-start justify-center w-[320px] min-h-[420px] p-8 rounded-lg border-2 border-gray-700 bg-[#212121] shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_20px_rgba(9,117,241,0.8)] hover:border-[#0974f1]">
        <div class="flex flex-col items-start gap-5 text-[#e8e8e8] w-full">
          <p class="font-bold text-2xl m-0">{{ project.title }}</p>
          <p class="leading-relaxed text-sm text-gray-300 m-0">
            {{ project.role }} | {{ project.duration }}
          </p>

          <button @click="toggleDetails(index)"
            class="bg-[#0974f1] text-[#e8e8e8] font-semibold rounded-md px-4 py-2 shadow-[0_5px_10px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-transparent hover:text-[#e8e8e8]  hover:outline-[#e8e8e8] active:shadow-none">
            {{ showDetails[index] ? 'Hide Details' : 'Read more' }}
          </button>

          <transition name="fade">
            <div v-if="showDetails[index]" class="mt-2 text-sm text-gray-400 max-h-[120px] overflow-y-auto pr-1">
              <ul class="list-disc list-inside">
                <li v-for="(task, i) in project.tasks" :key="i">{{ task }}</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <hr class="border-yellow-500 dark:border-gray-600 mb-10 mt-10" />
    <Aboutpage />
    <hr class="border-yellow-500 dark:border-gray-600 mb-10" />
    <Contactpage />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Typed from 'typed.js'
import Aboutpage from '../components/Aboutpage.vue'
import Contactpage from '@/components/Contactpage.vue'

const isDark = ref(false)
const showDetails = ref([])

const projects = [
  {
    title: 'POS System',
    duration: 'Feb 10, 2025 - May 02, 2025',
    role: 'DevOps',
    tasks: [
      'Monitored server performance and resolved infrastructure issues.',
      'Configured environments for development, testing, and production.',
      'Designed responsive user interfaces with HTML, CSS, JavaScript, and Bootstrap 5.',
      'Fetched and processed data using PHP and a connected database.'
    ]
  },
  {
    title: 'Inventory Management App',
    duration: 'Jan 14, 2025 - Jan 29, 2025',
    role: 'Designer',
    tasks: [
      'Designed responsive user interfaces with HTML, CSS, and Bootstrap 5.',
      'Created wireframes and mockups using Figma.',
      'Collaborated with developers to ensure design consistency.',
      'Fetched and handled data using JavaScript.'
    ]
  },
  {
    title: 'Video Download',
    duration: 'Nov 18, 2024 – Nov 28, 2024',
    role: 'Team Leader',
    tasks: [
      'Led a team of 3 members to develop a video downloader tool.',
      'Structured the project workflow and delegated tasks.',
      'Integrated JSON for dynamic configuration and settings.'
    ]
  },
  {
    title: 'Bakery Shop',
    duration: 'Oct 21, 2024 – Nov 5, 2024',
    role: 'Designer',
    tasks: [
      'Designed a visually appealing bakery website using SASS.',
      'Enhanced layout responsiveness for a better user experience.',
      'Maintained design consistency across pages.'
    ]
  },
  {
    title: 'Brochure Design',
    duration: 'June 18, 2024 – Aug 16, 2024',
    role: 'Designer',
    tasks: [
      'Created professional marketing brochures using Figma.',
      'Applied branding guidelines and visual design principles.',
      'Presented final designs to stakeholders for feedback and approval.'
    ]
  },
  {
    title: 'Product Owner / UX/UI / Data / PM',
    duration: 'Jan – Mar 2025',
    role: 'Multidisciplinary Roles',
    tasks: [
      'Practiced defining product requirements and writing user stories.',
      'Utilized Jira to manage and track tasks in an agile environment.',
      'Translated user requirements into wireframes and prototypes.',
      'Analyzed and visualized data using Python and Power BI.',
      'Explored agile ceremonies (planning, stand-ups, reviews).'
    ]
  }
]

showDetails.value = Array(projects.length).fill(false)

onMounted(() => {
  isDark.value = localStorage.getItem('theme') === 'dark'
  updateTheme()

  new Typed('#welcome-title', {
    strings: ['Welcome to My Portfolio', 'Explore My IT Journey'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  })
})

function toggleDetails(index) {
  showDetails.value[index] = !showDetails.value[index]
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function toggleDark() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  updateTheme()
}

function updateTheme() {
  const html = document.documentElement
  html.classList.toggle('dark', isDark.value)
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
