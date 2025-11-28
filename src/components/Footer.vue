<template>
  <footer :class="['py-6', 'text-center', 'text-sm', bgClass, textClass]">
    <div class="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div>
        <p class="opacity-80">© {{ year }} Sreyneath Rom. All rights reserved.</p>
        <p class="opacity-50 mt-1">Built with Vue.js + Tailwind</p>
      </div>

      <div class="flex items-center gap-3">
        <a href="https://github.com/Sreyneath-Rom/Portfolio" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-3 py-2 rounded-lg hover:underline">
          <span class="material-symbols-outlined">code</span>
          <span class="text-sm">View on GitHub</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// useDarkMode provides reactive background and text classes based on the current theme (dark or light mode)
import { useDarkMode } from '@/composables/useDarkMode'
const { bgClass, textClass } = useDarkMode()
const year = new Date().getFullYear()
</script>