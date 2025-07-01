<template>
    <div :id="id" class="relative flex w-full flex-col rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
        <!-- Header -->
        <div
            class="relative mx-4 -mt-6 h-40 flex items-end px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/40">
            <h5 class="text-xl font-semibold text-white leading-snug">
                4. Reflection on Internal Mock Interview
            </h5>
        </div>

        <!-- Content -->
        <transition name="fade">
            <div v-show="isOpen" class="p-6 text-[12pt] leading-relaxed text-gray-700 space-y-4">
                <p>
                    <strong>Preparation:</strong> I prepared by reviewing Vue.js and Laravel concepts, focusing on
                    explaining a CRUD application with form validation and API integration. I also rehearsed STAR method
                    responses for behavioral questions, such as handling tight deadlines.
                </p>
                <p>
                    <strong>Strengths:</strong> I confidently explained my project’s architecture, using technical terms
                    like “reactive components” and “middleware,” which impressed the interviewer. My calm demeanor
                    during a JavaScript coding question showcased strong problem-solving skills.
                </p>
                <p>
                    <strong>Improvements:</strong> I struggled to articulate a clear STAR response for a team conflict
                    question, as my example lacked specificity. Additionally, I rushed through a question on Laravel
                    routing, missing key details about middleware implementation.
                </p>
                <p>
                    <strong>Lessons:</strong> The mock interview highlighted the need for concise, structured behavioral
                    responses and deeper technical preparation for framework-specific questions. Practicing improved my
                    confidence and ability to articulate technical concepts, while feedback helped me refine my active
                    listening and time management skills, crucial for real IT interviews.
                </p>
            </div>
        </transition>

        <!-- Toggle Button -->
        <div class="p-6 pt-0">
            <button type="button" @click="toggleSection"
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
        required: true,
    }
})

const isOpen = ref(false)

function toggleSection() {
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
  
