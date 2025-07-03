<template>
    <div>
        <!-- Hero Section -->
        <section class="bg-gray-700 text-white text-center py-20 px-4">
            <h1 class="text-3xl md:text-4xl font-bold mb-4">Welcome to My Professional Portfolio</h1>
            <p class="max-w-xl mx-auto mb-6">
                A collection of my journey applying job search skills in the IT sector.
            </p>
            <div class="flex justify-center gap-4">
                <button class="border border-white px-5 py-2 rounded hover:bg-white hover:text-gray-700 transition">
                    Contact Me
                </button>
                <button class="bg-black px-5 py-2 rounded hover:bg-gray-900 transition">
                    Download CV
                </button>
            </div>
        </section>

        <!-- Project School Section -->
        <section class="bg-white text-gray-700 text-center py-20 px-4 mt-10">
            <h1 class="text-3xl md:text-4xl font-bold mb-4">Project School</h1>
            <p class="leading-relaxed text-sm text-gray-700 m-0">
                I have learned HTML, CSS, Node.js, JavaScript, TypeScript, PHP, Python, Vue.js, Laravel,
                and team collaboration experience from group projects.
            </p>

            <!-- Project Cards -->
            <div class="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 mt-10">
                <div v-for="(project, index) in projects" :key="project.title"
                    class="flex flex-col self-start w-80 p-6 rounded-lg border-2 bg-white overflow-hidden border-sky-200 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-500 hover:shadow-[0_0_20px_rgba(9,117,241,0.8)] hover:border-sky-400">
                    <div class="flex flex-col items-start gap-5 w-full">
                        <div
                            class="w-full px-6 py-2 rounded-xl bg-gradient-to-r from-yellow-700 to-yellow-400 shadow-lg shadow-sky-500/40">
                            <p class="font-bold text-2xl m-0 text-gray-100 mb-2">{{ project.title }}</p>
                            <p class="leading-relaxed text-sm text-gray-200 m-0">
                                {{ project.role }} | {{ project.duration }}
                            </p>
                        </div>

                        <button type="button" @click="toggleDetails(index)"
                            class="w-32 rounded-lg bg-sky-500 py-3 px-2 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 mt-6">
                            {{ showDetails[index] ? 'Hide Details' : 'Read more' }}
                        </button>

                        <transition name="fade">
                            <div v-if="showDetails[index]"
                                class="mt-2 text-sm text-gray-700 max-h-[120px] overflow-y-auto pr-1 text-left">
                                <ul class="list-disc list-inside">
                                    <li v-for="(task, i) in project.tasks" :key="i">{{ task }}</li>
                                </ul>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </section>

        <!-- Cards Section -->
        <section class="flex flex-wrap justify-center gap-8 mt-10">
            <!-- <CvCard id="cv-card" />
            <ProgressCard id="progress-card" />
            <AdviceCard id="advice-card" />
            <ReflectionCard id="reflection-card" /> -->
            <Card/>
        </section>

        <!-- Footer -->
        <Footer class="mb-10" />

        <!-- Scroll to Top Button -->
        <button @click="scrollToTop"
            class="fixed bottom-6 right-6 bg-yellow-500 text-white px-3 py-1 rounded-full shadow hover:bg-yellow-600">
            ↑ Top
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
// import CvCard from '@/components/CvCard.vue'
// import ProgressCard from '@/components/ProgressCard.vue'
// import AdviceCard from '@/components/AdviceCard.vue'
// import ReflectionCard from '@/components/ReflectionCard.vue'
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'

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
        title: 'Inventory App',
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
        role: 'Leader',
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
        role: 'Workshop',
        tasks: [
            'Practiced defining product requirements and writing user stories.',
            'Utilized Jira to manage and track tasks in an agile environment.',
            'Translated user requirements into wireframes and prototypes.',
            'Analyzed and visualized data using Python and Power BI.',
            'Explored agile ceremonies (planning, stand-ups, reviews).'
        ]
    }
]

const showDetails = ref(Array(projects.length).fill(false))

function toggleDetails(index) {
    showDetails.value[index] = !showDetails.value[index]
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>
  
