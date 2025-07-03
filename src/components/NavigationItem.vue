<template>
    <router-link
        :to="item.path"
        class="flex items-center gap-2 border-b-2 border-transparent transition-all duration-300
            sm:px-3 sm:py-2
            px-2 py-1 text-base sm:text-base"
        :class="isActive
            ? 'border-yellow-600 text-yellow-600 font-semibold'
            : 'hover:border-yellow-600 hover:text-sky-400 text-sky-400'"
    >
        <span
            class="material-symbols-outlined transition-colors duration-300"
            :class="isActive ? 'text-yellow-600' : 'text-sky-400'"
            style="font-size: 1.5em;"
        >
            {{ item.icon }}
        </span>
        <span class="hidden xs:inline sm:inline">{{ item.label }}</span>
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

const isActive = computed(() => route.path === props.item.path)
</script>

<style scoped>
@media (max-width: 640px) {
  .material-symbols-outlined {
    font-size: 1.25em !important;
  }
  span:not(.material-symbols-outlined) {
    display: none !important;
  }
}
</style>
  
