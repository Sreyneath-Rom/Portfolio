<template>
    <div>
        <!-- Hero Section -->
        <section class="bg-gray-700 text-white text-center py-20 px-4">
            <h1 class="text-3xl md:text-4xl font-bold mb-4">Welcome to My Professional Portfolio</h1>
            <p class="max-w-xl mx-auto mb-6">
                A collection of my journey applying job search skills in the IT sector.
            </p>
            <div class="flex justify-center gap-4">
                <button
                    class="border border-white px-5 py-2 rounded hover:bg-white hover:text-gray-700 transition">Contact
                    Me</button>
                <button class="bg-black px-5 py-2 rounded hover:bg-gray-900 transition">Download CV</button>
            </div>
        </section>

        <!-- Cards Section -->
        <section class="max-w-5xl mx-auto py-16 px-4 space-y-8">
            <CvCard id="cv-card" />
            <ProgressCard id="progress-card" />
            <AdviceCard id="advice-card" />
            <ReflectionCard id="reflection-card" />
            <OverallCard id="overall-card" />
        </section>

        
        <!-- Footer -->
        <footer class="text-center mt-6">
            <p class="text-sm text-gray-500">© 2025 Sreyneath Rom. All rights reserved.</p>
            <p class="text-sm text-gray-500 mt-2">Built with Vue.js and Laravel.</p>
        </footer>

        <!-- Scroll to Top Button -->
        <button @click="scrollToTop"
            class="fixed bottom-6 right-6 bg-yellow-500 text-white px-3 py-1 rounded-full shadow hover:bg-yellow-600">
            ↑ Top
        </button>
    </div>
</template>

<script setup>
import CvCard from '@/components/CvCard.vue'
import ProgressCard from '@/components/ProgressCard.vue'
import AdviceCard from '@/components/AdviceCard.vue'
import ReflectionCard from '@/components/ReflectionCard.vue'
import OverallCard from '@/components/OverallCard.vue'

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>
  
