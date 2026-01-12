<!-- src/components/Card.vue -->
<template>
  <article
    class="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10
           shadow-xl hover:shadow-2xl hover:shadow-purple-500/20
           transition-all duration-700 hover:-translate-y-4"
    :style="{ animationDelay: `${index * 0.15}s` }"
  >
    <!-- Image -->
    <div class="relative overflow-hidden h-64">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
        <div>
          <h3 class="text-2xl font-bold text-white">{{ project.title }}</h3>
          <p class="text-white/80 text-sm">{{ project.role }} • {{ project.duration }}</p>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="p-8 space-y-6">
      <header>
        <h3 class="text-2xl font-bold text-white">{{ project.title }}</h3>
        <p class="text-sm mt-2 opacity-60">
          {{ project.role }} <span class="opacity-40">• {{ project.duration }}</span>
        </p>
      </header>

      <!-- Tech Badges -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="px-4 py-2 text-xs font-medium rounded-full bg-white/10 border border-white/20 text-white/80"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-4">
        <a
          v-if="project.demoLink"
          :href="project.demoLink"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 py-3.5 rounded-xl bg-white/15 border border-white/30 text-white text-center font-medium text-sm hover:bg-white/25 transition"
        >
          View Live
        </a>
        <a
          v-if="project.githubLink"
          :href="project.githubLink"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 py-3.5 rounded-xl bg-transparent border border-white/30 text-white text-center font-medium text-sm hover:bg-white/10 transition"
        >
          Source
        </a>
      </div>

      <!-- Expand Button -->
      <button
        @click="$emit('toggle-details')"
        class="w-full flex items-center justify-between text-sm opacity-60 hover:opacity-100 transition pt-4 border-t border-white/10"
      >
        <span>{{ isExpanded ? 'Hide' : 'Show' }} details</span>
        <span class="material-symbols-outlined text-lg">
          {{ isExpanded ? 'expand_less' : 'expand_more' }}
        </span>
      </button>

      <!-- Expanded Details -->
      <transition name="slide">
        <div v-if="isExpanded" class="pt-6 space-y-3 text-sm opacity-80 border-t border-white/10">
          <p v-for="(task, i) in project.tasks" :key="i" class="flex items-start gap-3">
            <span class="text-accent mt-0.5">▹</span>
            {{ task }}
          </p>
        </div>
      </transition>
    </div>
  </article>
</template>

<script setup>
defineProps({
  project: Object,
  index: Number,
  isExpanded: Boolean
})
defineEmits(['toggle-details'])
</script>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.4s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; max-height: 0; padding-top: 0; padding-bottom: 0; }
.slide-enter-to, .slide-leave-from { opacity: 1; max-height: 400px; }
</style>