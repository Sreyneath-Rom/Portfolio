<template>
    <div :id="id"
        class="relative flex w-80 flex-col rounded-xl bg-white text-gray-700  overflow-hidden border-2 border-sky-200  shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_20px_rgba(9,117,241,0.8)] hover:border-sky-400">
        <!-- Header / Title Section -->
        <div
            class="relative mx-4 -mt-6 h-40 flex items-end px-6 py-4 rounded-xl bg-gradient-to-r from-yellow-700 to-yellow-400 shadow-lg shadow-sky-500/40">
            <h5 class="text-xl font-semibold text-white leading-snug">
                2. Progress and Challenges Report
            </h5>
        </div>

        <!-- Details -->
        <transition name="fade">
            <div v-show="isOpen" class="p-6 text-[12pt] leading-relaxed text-gray-700 space-y-4">
                <p>
                    <strong>Progress:</strong> I applied to seven IT positions, including Junior Frontend Developer and
                    Web Developer roles, using platforms like LinkedIn and Indeed. I optimized my LinkedIn profile with
                    keywords like <em>"Vue.js"</em> and <em>"JavaScript"</em>, resulting in two recruiter inquiries. I
                    attended three career workshops, practiced networking, and refined my elevator pitch. I secured one
                    technical interview after showcasing a Vue.js-based e-commerce site with Laravel backend
                    integration.
                </p>
                <p>
                    <strong>Challenges:</strong> I faced low response rates, with feedback from only two of seven
                    applications. A React-based coding test revealed gaps in state management using Redux. Behavioral
                    questions about conflict resolution were tough due to limited work experience, and I sometimes
                    hesitated in interviews. Time management was also a hurdle, as balancing coursework and job
                    applications led to rushed submissions.
                </p>
                <p>
                    <strong>Reflection:</strong> These experiences taught me to follow up proactively with recruiters,
                    improving my communication skills. I enrolled in a React course to close technical gaps and
                    practiced STAR method responses for behavioral questions. This enhanced both my technical skills
                    (Vue.js, Laravel) and soft skills (networking, time management), preparing me for future
                    opportunities.
                </p>
            </div>
        </transition>

        <!-- Toggle Button -->
        <div class="p-6 pt-0">
            <button type="button" @click="toggleSection"
                class="w-30 rounded-lg bg-sky-500 py-3 px-2 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 mt-10">
                {{ isOpen ? 'Hide' : 'Read More' }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    id: {
        type: String,
        required: true,
    }
})

const isOpen = ref(false)

const toggleSection = () => {
    isOpen.value = !isOpen.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
  
