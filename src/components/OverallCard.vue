<template>
    <div :id="id" class="relative flex w-full flex-col rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
        <!-- Header -->
        <div
            class="relative mx-4 -mt-6 h-40 flex items-end px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/40">
            <h5 class="text-xl font-semibold text-white leading-snug">
                5. Overall
            </h5>
        </div>

        <!-- Content -->
        <transition name="fade">
            <div v-show="isOpen" class="p-6 text-[12pt] leading-relaxed text-gray-700">
                <p>
                    This portfolio, built with Vue.js, adheres to guidelines (Verdana, 12pt, no typos). All sections are
                    structured to reflect my technical growth in Vue.js and Laravel and professional development in
                    communication, adaptability, and time management.
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
  
