<template>
    <div :id="id" class="relative flex w-full flex-col rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
        <!-- Header / Title Section -->
        <div
            class="relative mx-4 -mt-6 h-40 flex items-end px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/40">
            <h5 class="text-xl font-semibold text-white leading-snug">
                1. CV and Cover Letter
            </h5>
        </div>

        <!-- Content Section -->
        <transition name="fade">
            <div v-show="isOpen" class="p-6 space-y-4">
                <a href="https://www.canva.com/design/DAGjQTop64Q/Y7LRgoDTg1TlutXgBb9YxQ/view?utm_content=DAGjQTop64Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8cec6f4468"
                    target="_blank"
                    class="inline-block text-sm font-bold text-blue-600 underline hover:text-blue-800 transition">
                    View My CV
                </a>
                <p class="text-[12pt] leading-relaxed">
                    This section has been assessed. I tailored my CV and cover letter for a Junior Frontend Developer
                    role,
                    emphasizing Vue.js, Laravel, and team collaboration experience from group projects.
                </p>
            </div>
        </transition>

        <!-- Toggle Button -->
        <div class="p-6 pt-0">
            <button type="button" @click="toggleSection"
                class="w-full rounded-lg bg-blue-500 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
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
  
