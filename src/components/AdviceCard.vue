<template>
    <div :id="id" class="relative flex w-full flex-col rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
        <!-- Header -->
        <div
            class="relative mx-4 -mt-6 h-40 flex items-end px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/40">
            <h5 class="text-xl font-semibold text-white leading-snug">
                3. Practical Advice for IT Job Interviews
            </h5>
        </div>

        <!-- Advice List -->
        <transition name="fade">
            <div v-show="isOpen" class="p-6">
                <ul class="list-disc list-inside space-y-2 text-[12pt] leading-relaxed text-gray-700">
                    <li>Research the company’s tech stack (e.g., Vue.js, React) and tailor responses to highlight
                        relevant projects.</li>
                    <li>Practice coding challenges on platforms like LeetCode, and explain your thought process clearly.
                    </li>
                    <li>Use the STAR method to answer behavioral questions, e.g., teamwork in a merge conflict.</li>
                    <li>Ask questions about dev workflow or team culture to show your interest and alignment.</li>
                    <li>Be honest about skill gaps and frame them as growth efforts like online learning.</li>
                    <li>Conduct mock interviews to improve confidence, communication, and professionalism.</li>
                </ul>
            </div>
        </transition>

        <!-- Toggle Button -->
        <div class="p-6 pt-0">
            <button @click="toggleSection"
                class="w-full rounded-lg bg-blue-500 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
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
const toggleSection = () => (isOpen.value = !isOpen.value)
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
  
