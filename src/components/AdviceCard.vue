<template>
    <div :id="id"
        class="relative flex w-80 flex-col rounded-xl bg-white text-gray-700  overflow-hidden border-2 border-sky-200  shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_20px_rgba(9,117,241,0.8)] hover:border-sky-400">
        <!-- Header -->
        <div
            class="relative mx-4 -mt-6 h-40 flex items-end px-6 py-4 rounded-xl bg-gradient-to-r from-yellow-700 to-yellow-400 shadow-lg shadow-sky-500/40">
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
        required: true
    }
})

const isOpen = ref(false)
const toggleSection = () => (isOpen.value = !isOpen.value)
</script>


  
