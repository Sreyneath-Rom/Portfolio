<!-- Marquee.vue -->
<template>
  <div class="mt-12 space-y-4">
    <!-- Languages / Core Row -->
    <div :class="['py-4 rounded-xl overflow-hidden', containerBg]">
      <div class="whitespace-nowrap overflow-hidden">
              <div
                class="flex items-center will-change-transform"
                :class="['animate-marquee-left', trackClass]"
                aria-hidden="true"
              >
                <span
                  v-for="(icon, i) in duplicated(languages)"
                  :key="icon.src + '-' + i"
                  class="marquee-item"
                  aria-hidden="true"
                >
                  <img
                    :src="icon.src"
                    :alt="icon.alt"
                    class="inline h-12 w-12 object-contain"
                    loading="lazy"
                    @error="onImageError"
                  />
                </span>
              </div>
      </div>
    </div>

    <!-- Frontend Frameworks Row -->
    <div :class="['marquee-container py-3 overflow-hidden relative rounded-lg', themeContainer]">
      <div
        :class="['marquee-content whitespace-nowrap font-medium inline-block will-change-transform', themeText, 'animate-marquee-right', trackClass]"
        aria-hidden="true"
      >
        <span
          v-for="(icon, i) in duplicated(frontend)"
          :key="icon.src + '-' + i"
          class="marquee-item"
          aria-hidden="true"
        >
          <img
            :src="icon.src"
            :alt="icon.alt"
            class="inline h-12 w-12 object-contain"
            loading="lazy"
            @error="onImageError"
          />
        </span>
      </div>
    </div>

    <!-- Backend / Tools Row -->
    <div :class="['marquee-container py-3 overflow-hidden relative rounded-lg', themeContainer]">
      <div
        :class="['marquee-content whitespace-nowrap font-medium inline-block will-change-transform', themeText, 'animate-marquee-left', trackClass]"
        aria-hidden="true"
      >
        <span
          v-for="(icon, i) in duplicated(backend)"
          :key="icon.src + '-' + i"
          class="marquee-item"
          aria-hidden="true"
        >
          <img
            :src="icon.src"
            :alt="icon.alt"
            class="inline h-12 w-12 object-contain"
            loading="lazy"
            @error="onImageError"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { currentTheme } = useDarkMode()

// Simple lists of icon objects (src + alt). Add or remove entries here.
const languages = ref([
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', alt: 'PHP' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'MySQL' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', alt: 'Java' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', alt: 'C#' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', alt: 'C++' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg', alt: 'Ruby' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', alt: 'Go' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', alt: 'Swift' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', alt: 'Kotlin' }
])

const frontend = ref([
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', alt: 'Vue' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png', alt: 'Tailwind CSS' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', alt: 'Bootstrap' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', alt: 'SASS' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' }
])

const backend = ref([
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png', alt: 'Laravel' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', alt: 'Git' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'GitHub' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', alt: 'VS Code' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', alt: 'Postman' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'MySQL' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', alt: 'Firebase' }
])

// Duplicates an array so the animation can scroll seamlessly.
// Accepts either a ref containing an array or a plain array.
const duplicated = (arrRef) => {
  const arr = Array.isArray(arrRef) ? arrRef : (arrRef && Array.isArray(arrRef.value) ? arrRef.value : [])
  // return a copy doubled; guard against non-iterable values
  return arr.concat(arr)
}

// Simple placeholder and image error fallback
const placeholderImage = 'https://via.placeholder.com/48?text=?'
const onImageError = (e) => {
  if (e && e.target) {
    e.target.onerror = null
    e.target.src = placeholderImage
  }
}

// Theme mappings
const containerBg = computed(() => {
  const map = {
    Light: 'bg-gray-50',
    Dark: 'bg-gray-800',
    Sepia: 'bg-yellow-50/80',
    Blue: 'bg-blue-900/50'
  }
  return map[currentTheme.value] || 'bg-gray-800'
})

const themeContainer = computed(() => {
  const map = {
    Light: 'bg-white/60',
    Dark: 'bg-gray-900/60',
    Sepia: 'bg-yellow-50/40',
    Blue: 'bg-blue-800/30'
  }
  return map[currentTheme.value] || ''
})

const themeText = computed(() => {
  const map = {
    Light: 'text-gray-800',
    Dark: 'text-gray-100',
    Sepia: 'text-gray-800',
    Blue: 'text-white'
  }
  return map[currentTheme.value] || 'text-gray-100'
})

// Optional: adjust duration per row; kept same for simplicity
const trackClass = 'duration-40s' // utility class; defined in scoped CSS below
</script>

<style scoped>
/* durations as utility classes to keep template clean */
.duration-25s { animation-duration: 25s; }
.duration-30s { animation-duration: 30s; }
.duration-40s { animation-duration: 40s; }

/* Keyframes and animation classes */
@keyframes marquee-left {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes marquee-right {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}

.animate-marquee-left {
  animation-name: marquee-left;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 40s; /* overridden by duration utility if provided */
}

.animate-marquee-right {
  animation-name: marquee-right;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 40s;
}

/* Make sure the inner track is wide enough - using inline-block/whitespace-nowrap + duplication gives seamless loop */
.marquee-container { background-clip: padding-box; }
.marquee-content img,
.will-change-transform img {
  display: inline-block;
  vertical-align: middle;
}

/* Pause animation on hover/focus for accessibility */
.marquee-container:hover .animate-marquee-left,
.marquee-container:hover .animate-marquee-right,
.marquee-container:focus-within .animate-marquee-left,
.marquee-container:focus-within .animate-marquee-right {
  animation-play-state: paused !important;
}

/* Individual marquee item styling */
.marquee-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  margin: 0 1.5rem;
  border-radius: 9999px;
  padding: 0.25rem;
  background: rgba(255,255,255,0.04);
}
.marquee-item img { width: 100%; height: 100%; }

/* Accessibility: hide repeated decorative motion to assistive tech */
[aria-hidden="true"] { pointer-events: none; }

/* Optional: reduce motion preference */
@media (prefers-reduced-motion: reduce) {
  .animate-marquee-left,
  .animate-marquee-right {
    animation: none;
    transform: none;
  }
}
</style>
