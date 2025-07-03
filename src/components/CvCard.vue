<template>
    <div :id="id"
        class="relative flex flex-col w-full max-w-xs md:max-w-md rounded-xl bg-white text-gray-700 overflow-hidden border-2 border-sky-200 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_20px_rgba(9,117,241,0.8)] hover:border-sky-400 mx-auto">
        <!-- Header / Title Section -->
        <div
            class="relative mx-2 md:mx-4 -mt-6 h-28 md:h-40 flex items-end px-4 md:px-6 py-3 md:py-4 rounded-xl bg-gradient-to-r from-yellow-700 to-yellow-400 shadow-lg shadow-sky-500/40">
            <h5 class="text-lg md:text-xl font-semibold text-white leading-snug">
                1. CV and Cover Letter
            </h5>
        </div>

        <!-- Content Section -->
        <transition name="fade">
            <div v-show="isOpen" class="p-4 md:p-6 space-y-3 md:space-y-4">
                <a href="https://www.canva.com/design/DAGjQTop64Q/Y7LRgoDTg1TlutXgBb9YxQ/view?utm_content=DAGjQTop64Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8cec6f4468"
                    target="_blank"
                    class="inline-block text-xs md:text-sm font-bold text-sky-400 underline hover:text-sky-400 transition mt-6 md:mt-10">
                    View My CV
                </a>
                <p class="text-xs md:text-sm leading-relaxed">
                    My CV and cover letter for a Web Developer
                    role,
                    Hard Skills HTML, CSS, Node.js, JavaScript, TypeScript, PHP, Python, Vue.js, Laravel,
                    and team collaboration experience from group projects.
                </p>
            </div>
        </transition>

        <!-- Toggle Button -->
        <div class="p-4 md:p-6 pt-0">
            <button type="button" @click="toggleSection"
                class="w-full md:w-30 rounded-lg bg-sky-500 py-2 md:py-3 px-2 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 mt-6 md:mt-10">
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
        required: true
    }
})

const isOpen = ref(false)

const toggleSection = () => {
    isOpen.value = !isOpen.value
}
</script>


  
