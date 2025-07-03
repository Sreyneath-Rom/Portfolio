<template>
  <div
    class="min-h-screen mt-16 sm:mt-24 text-12 font-Verdana leading-relaxed p-3 sm:p-6 text-black dark:text-white dark:bg-gray-900 animate-fadeIn">
    <!-- Welcome Section -->
    <div class="flex flex-col sm:flex-row justify-between items-center mb-10 sm:mb-20">
      <!-- Text Left -->
      <div class="sm:mr-20 w-full sm:w-1/2 text-center sm:text-left mb-6 sm:mb-0 max-w-xl">
        <h1 id="welcome-title" class="text-2xl sm:text-4xl font-bold text-yellow-600 mb-2 ml-0 sm:ml-20"></h1>
        <p class="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 ml-0 sm:ml-20">
          Explore my journey in preparing for a career in the IT sector.
        </p>
      </div>
      <!-- Image Right -->
      <div class="relative mt-4 sm:mt-0 flex justify-center items-center w-full sm:w-auto max-w-xs sm:max-w-none">
        <div
          class="absolute w-32 h-32 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr from-yellow-300 via-pink-300 to-purple-400 blur-2xl opacity-70 animate-pulse">
        </div>
        <img
          src="https://scontent.fpnh19-1.fna.fbcdn.net/v/t39.30808-6/469514138_1224431698646039_3343655745036244234_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=pC2ybbwtYiwQ7kNvwGj1-0m&_nc_oc=AdllyPa2FRWSyZEbVW-dO2xU7By65wq6CZD-M5-ZK_86lzLev-AyO8RgCe2_ETUqAeY&_nc_zt=23&_nc_ht=scontent.fpnh19-1.fna&_nc_gid=FXZXTwiSM5hYmjJScT2b9g&oh=00_AfNImfy2RR10N5r83nh9DB1azL2Ur0FO9-vkLg8nZpNBzA&oe=6867CD92"
          alt="Profile picture" class="relative w-24 h-24 sm:w-48 sm:h-48 rounded-full shadow-md object-cover" />
      </div>
    </div>
    <div class="overflow-x-auto">
      <Marquee />
    </div>

    <hr class="border-yellow-500 dark:border-gray-600 mb-6 sm:mb-10 mt-6 sm:mt-10" />
    <Aboutpage />
    <hr class="border-yellow-500 dark:border-gray-600 mb-6 sm:mb-10" />
    <Contactpage />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Typed from 'typed.js'
import Aboutpage from '../components/Aboutpage.vue'
import Contactpage from '@/components/Contactpage.vue'
import Marquee from '@/components/Marquee.vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = localStorage.getItem('theme') === 'dark'
  updateTheme()

  new Typed('#welcome-title', {
    strings: ['Welcome to My Portfolio', 'Explore My IT Journey', 'My name is Sreyneath'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  })
})

function updateTheme() {
  const html = document.documentElement
  html.classList.toggle('dark', isDark.value)
}
</script>
