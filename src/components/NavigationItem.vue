<template>
    <router-link
        :to="item.path"
        class="flex items-center gap-2 border-b-2 border-transparent transition-all duration-300
            sm:px-3 sm:py-2
            px-2 py-1 text-base sm:text-base"
        active-class="border-yellow-600 text-yellow-600 font-semibold"
        exact-active-class="border-yellow-600 text-yellow-600 font-semibold"
        :class="'hover:border-yellow-600 hover:text-sky-400 text-sky-400'"
    >
        <span
            class="material-symbols-outlined transition-colors duration-300"
            :class="$route.path === item.path ? 'text-yellow-600' : 'text-sky-400'"
        >
            {{ item.icon }}
        </span>
        <span class="hidden xs:inline">{{ item.label }}</span>
    </router-link>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})

const route = useRoute()

// Removed isActive, using router-link's active-class instead
</script>

<style scoped>
.material-symbols-outlined {
  font-size: 1.5em;
}
@media (max-width: 640px) {
  .material-symbols-outlined {
    font-size: 1.25em !important;
  }
  span:not(.material-symbols-outlined) {
    display: none !important;
  }
}
</style>
  
