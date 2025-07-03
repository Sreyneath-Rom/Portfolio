<template>
    <div class="flex flex-wrap justify-center gap-8 mt-10">
        <div
            v-for="(card, index) in cards"
            :key="card.title"
            class="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 overflow-hidden border-2 border-sky-200 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-500 hover:shadow-[0_0_20px_rgba(9,117,241,0.8)] hover:border-sky-400"
        >
            <div
                class="relative mx-4 -mt-6 h-40 flex items-end px-6 py-4 rounded-xl bg-gradient-to-r from-yellow-700 to-yellow-400 shadow-lg shadow-sky-500/40"
            >
                <h5 class="text-xl font-semibold text-white leading-snug">{{ card.title }}</h5>
            </div>

            <transition name="fade">
                <div v-show="showDetails[index]" class="p-6 text-[12pt] leading-relaxed text-gray-700 space-y-4">
                    <template v-if="card.link">
                        <a
                            :href="card.link"
                            target="_blank"
                            class="inline-block text-sm font-bold text-sky-400 underline hover:text-sky-400 transition"
                        >
                            {{ card.linkText }}
                        </a>
                    </template>
                    <template v-if="card.content">
                        <p v-html="card.content"></p>
                    </template>
                    <template v-if="card.list">
                        <ul class="list-disc list-inside">
                            <li v-for="(item, i) in card.list" :key="i">{{ item }}</li>
                        </ul>
                    </template>
                </div>
            </transition>

            <div class="p-6 pt-0">
                <button
                    @click="toggleDetails(index)"
                    class="w-30 rounded-lg bg-sky-500 py-3 px-2 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 mt-6"
                >
                    {{ showDetails[index] ? 'Hide' : 'Read More' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const cards = [
    {
        title: 'CV and Cover Letter',
        link: 'https://www.canva.com/design/DAGjQTop64Q/Y7LRgoDTg1TlutXgBb9YxQ/view?utm_content=DAGjQTop64Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8cec6f4468',
        linkText: 'View My CV',
        content:
            'My CV and cover letter for a Web Developer role, highlighting hard skills in HTML, CSS, Node.js, JavaScript, TypeScript, PHP, Python, Vue.js, Laravel, and teamwork experience from group projects.',
    },
    {
        title: 'Progress and Challenges Report',
        content: `<p><strong>Progress:</strong> I applied to seven IT positions, optimized my LinkedIn, and attended workshops, resulting in recruiter inquiries and one technical interview.</p>
            <p><strong>Challenges:</strong> Low response rates, difficulty with behavioral questions, and time management struggles during applications and coursework.</p>
            <p><strong>Reflection:</strong> Learned to follow up proactively, enrolled in a React course, and improved both technical and soft skills for future opportunities.</p>`,
    },
    {
        title: 'Practical Advice for IT Interviews',
        list: [
            'Research the company\'s tech stack and tailor your responses.',
            'Practice coding challenges and clearly explain your logic.',
            'Use the STAR method for behavioral questions.',
            'Ask insightful questions about workflow and team culture.',
            'Be transparent about skill gaps and show a growth mindset.',
            'Conduct mock interviews to build confidence and communication skills.',
        ],
    },
    {
        title: 'Reflection on Mock Interview',
        content: `<p><strong>Preparation:</strong> Reviewed Vue.js, Laravel, CRUD apps, and practiced STAR responses for behavioral questions.</p>
            <p><strong>Strengths:</strong> Confidently explained architecture and problem-solving, showcasing technical depth.</p>
            <p><strong>Improvements:</strong> Needed more clarity in STAR examples and deeper framework-specific technical details.</p>
            <p><strong>Lessons:</strong> Learned to give concise behavioral responses, improved confidence, and refined technical articulation for real interviews.</p>`,
    },
    {
        title:'Work at Company'
    }
]

const showDetails = ref(cards.map(() => false))

function toggleDetails(index) {
    showDetails.value[index] = !showDetails.value[index]
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
  
