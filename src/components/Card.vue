<template>
    <div class="flex flex-wrap justify-center gap-8 mt-10">

        <!-- CV and Cover Letter Card -->
        <div
            class="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 overflow-hidden border-2 border-sky-200 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-500 hover:shadow-[0_0_20px_rgba(9,117,241,0.8)] hover:border-sky-400">
            <div
                class="relative mx-4 -mt-6 h-40 flex items-end px-6 py-4 rounded-xl bg-gradient-to-r from-yellow-700 to-yellow-400 shadow-lg shadow-sky-500/40">
                <h5 class="text-xl font-semibold text-white leading-snug">1. CV and Cover Letter</h5>
            </div>

            <transition name="fade">
                <div v-show="isOpenCv" class="p-6 text-[12pt] leading-relaxed text-gray-700 space-y-4">
                    <a href="https://www.canva.com/design/DAGjQTop64Q/Y7LRgoDTg1TlutXgBb9YxQ/view?utm_content=DAGjQTop64Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8cec6f4468"
                        target="_blank"
                        class="inline-block text-sm font-bold text-sky-400 underline hover:text-sky-400 transition">
                        View My CV
                    </a>
                    <p>
                        My CV and cover letter for a Web Developer role, highlighting hard skills in HTML, CSS, Node.js,
                        JavaScript, TypeScript, PHP, Python, Vue.js, Laravel, and teamwork experience from group
                        projects.
                    </p>
                </div>
            </transition>

            <div class="p-6 pt-0">
                <button @click="toggleSection('cv')"
                    class="w-30 rounded-lg bg-sky-500 py-3 px-2 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 mt-6">
                    {{ isOpenCv ? 'Hide' : 'Read More' }}
                </button>
            </div>
        </div>

        <!-- Progress and Challenges Report Card -->
        <div
            class="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 overflow-hidden border-2 border-sky-200 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-500 hover:shadow-[0_0_20px_rgba(9,117,241,0.8)] hover:border-sky-400">
            <div
                class="relative mx-4 -mt-6 h-40 flex items-end px-6 py-4 rounded-xl bg-gradient-to-r from-yellow-700 to-yellow-400 shadow-lg shadow-sky-500/40">
                <h5 class="text-xl font-semibold text-white leading-snug">2. Progress and Challenges Report</h5>
            </div>

            <transition name="fade">
                <div v-show="isOpenProgress" class="p-6 text-[12pt] leading-relaxed text-gray-700 space-y-4">
                    <p><strong>Progress:</strong> I applied to seven IT positions, optimized my LinkedIn, and attended
                        workshops, resulting in recruiter inquiries and one technical interview.</p>
                    <p><strong>Challenges:</strong> Low response rates, difficulty with behavioral questions, and time
                        management struggles during applications and coursework.</p>
                    <p><strong>Reflection:</strong> Learned to follow up proactively, enrolled in a React course, and
                        improved both technical and soft skills for future opportunities.</p>
                </div>
            </transition>

            <div class="p-6 pt-0">
                <button @click="toggleSection('progress')"
                    class="w-30 rounded-lg bg-sky-500 py-3 px-2 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 mt-6">
                    {{ isOpenProgress ? 'Hide' : 'Read More' }}
                </button>
            </div>
        </div>

        <!-- Practical Advice Card -->
        <div
            class="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 overflow-hidden border-2 border-sky-200 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-500 hover:shadow-[0_0_20px_rgba(9,117,241,0.8)] hover:border-sky-400">
            <div
                class="relative mx-4 -mt-6 h-40 flex items-end px-6 py-4 rounded-xl bg-gradient-to-r from-yellow-700 to-yellow-400 shadow-lg shadow-sky-500/40">
                <h5 class="text-xl font-semibold text-white leading-snug">3. Practical Advice for IT Interviews</h5>
            </div>

            <transition name="fade">
                <div v-show="isOpenAdvice" class="p-6 text-[12pt] leading-relaxed text-gray-700 space-y-2">
                    <ul class="list-disc list-inside">
                        <li>Research the company's tech stack and tailor your responses.</li>
                        <li>Practice coding challenges and clearly explain your logic.</li>
                        <li>Use the STAR method for behavioral questions.</li>
                        <li>Ask insightful questions about workflow and team culture.</li>
                        <li>Be transparent about skill gaps and show a growth mindset.</li>
                        <li>Conduct mock interviews to build confidence and communication skills.</li>
                    </ul>
                </div>
            </transition>

            <div class="p-6 pt-0">
                <button @click="toggleSection('advice')"
                    class="w-30 rounded-lg bg-sky-500 py-3 px-2 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 mt-6">
                    {{ isOpenAdvice ? 'Hide' : 'Read More' }}
                </button>
            </div>
        </div>

        <!-- Reflection on Mock Interview Card -->
        <div
            class="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 overflow-hidden border-2 border-sky-200 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-500 hover:shadow-[0_0_20px_rgba(9,117,241,0.8)] hover:border-sky-400">
            <div
                class="relative mx-4 -mt-6 h-40 flex items-end px-6 py-4 rounded-xl bg-gradient-to-r from-yellow-700 to-yellow-400 shadow-lg shadow-sky-500/40">
                <h5 class="text-xl font-semibold text-white leading-snug">4. Reflection on Mock Interview</h5>
            </div>

            <transition name="fade">
                <div v-show="isOpenReflection" class="p-6 text-[12pt] leading-relaxed text-gray-700 space-y-4">
                    <p><strong>Preparation:</strong> Reviewed Vue.js, Laravel, CRUD apps, and practiced STAR responses
                        for behavioral questions.</p>
                    <p><strong>Strengths:</strong> Confidently explained architecture and problem-solving, showcasing
                        technical depth.</p>
                    <p><strong>Improvements:</strong> Needed more clarity in STAR examples and deeper framework-specific
                        technical details.</p>
                    <p><strong>Lessons:</strong> Learned to give concise behavioral responses, improved confidence, and
                        refined technical articulation for real interviews.</p>
                </div>
            </transition>

            <div class="p-6 pt-0">
                <button @click="toggleSection('reflection')"
                    class="w-30 rounded-lg bg-sky-500 py-3 px-2 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 mt-6">
                    {{ isOpenReflection ? 'Hide' : 'Read More' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpenCv = ref(false)
const isOpenProgress = ref(false)
const isOpenAdvice = ref(false)
const isOpenReflection = ref(false)

function toggleSection(section) {
    if (section === 'cv') isOpenCv.value = !isOpenCv.value
    if (section === 'progress') isOpenProgress.value = !isOpenProgress.value
    if (section === 'advice') isOpenAdvice.value = !isOpenAdvice.value
    if (section === 'reflection') isOpenReflection.value = !isOpenReflection.value
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
  
