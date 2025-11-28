<template>
  <router-link
    :to="item.path"
    class="flex items-center gap-2 px-3 py-2 border-b-2 border-transparent hover:border-current transition-all"
    :class="[isActive ? accentClass : 'text-gray-500 hover:text-gray-300']"
  >
    <span class="material-symbols-outlined text-xl" :class="isActive ? accentClass : ''">
      {{ item.icon }}
    </span>
    <span class="hidden xs:inline">{{ item.label }}</span>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDarkMode } from '@/composables/useDarkMode'

const { accentClass } = useDarkMode()
const route = useRoute()
const props = defineProps({ item: Object })

const isActive = computed(() => route.path === props.item.path)
</script>