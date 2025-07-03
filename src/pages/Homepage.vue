<template>
  <div
    class="min-h-screen mt-16 sm:mt-24 text-[12pt] font-[Verdana] leading-relaxed p-3 sm:p-6 text-black dark:text-white dark:bg-gray-900">
    <!-- Welcome Section -->
    <div class="flex flex-col sm:flex-row justify-start items-center mb-10 sm:mb-20">
      <div class="sm:mr-20 w-full sm:w-auto text-center sm:text-left mb-6 sm:mb-0">
        <h1 id="welcome-title" class="text-2xl sm:text-4xl font-bold text-yellow-600 mb-2"></h1>
        <p class="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
          Explore my journey in preparing for a career in the IT sector.
        </p>
      </div>

      <div class="relative mt-4 sm:mt-0 flex justify-center items-center w-full sm:w-auto">
        <!-- Glow background -->
        <div
          class="absolute w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr from-yellow-300 via-pink-300 to-purple-400 blur-2xl opacity-70 animate-pulse">
        </div>
        <!-- Profile image -->
        <img
          src="https://scontent.fpnh19-1.fna.fbcdn.net/v/t39.30808-6/469514138_1224431698646039_3343655745036244234_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=pC2ybbwtYiwQ7kNvwGj1-0m&_nc_oc=AdllyPa2FRWSyZEbVW-dO2xU7By65wq6CZD-M5-ZK_86lzLev-AyO8RgCe2_ETUqAeY&_nc_zt=23&_nc_ht=scontent.fpnh19-1.fna&_nc_gid=FXZXTwiSM5hYmjJScT2b9g&oh=00_AfNImfy2RR10N5r83nh9DB1azL2Ur0FO9-vkLg8nZpNBzA&oe=6867CD92"
          alt="Profile picture" class="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full shadow-md object-cover" />
      </div>
    </div>

    <!-- Programming Languages & Tools Marquee -->
    <div class="mt-8 space-y-4">

      <!-- Programming Languages Row -->
      <div class="marquee-container bg-gray-100 py-3 overflow-hidden relative rounded-lg">

        <div class="marquee-content whitespace-nowrap animate-marquee text-gray-700 font-medium inline-block">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript" class="inline h-6 mx-2 align-middle" />
          JavaScript •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript" class="inline h-6 mx-2 align-middle" />
          TypeScript •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP"
            class="inline h-6 mx-2 align-middle" />
          PHP •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python"
            class="inline h-6 mx-2 align-middle" />
          Python •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"
            class="inline h-6 mx-2 align-middle" />
          HTML •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS"
            class="inline h-6 mx-2 align-middle" />
          CSS •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL"
            class="inline h-6 mx-2 align-middle" />
          SQL •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java"
            class="inline h-6 mx-2 align-middle" />
          Java •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#"
            class="inline h-6 mx-2 align-middle" />
          C# •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++"
            class="inline h-6 mx-2 align-middle" />
          C++ •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt="Ruby"
            class="inline h-6 mx-2 align-middle" />
          Ruby •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go"
            class="inline h-6 mx-2 align-middle" />
          Go •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" alt="Swift"
            class="inline h-6 mx-2 align-middle" />
          Swift •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin"
            class="inline h-6 mx-2 align-middle" />
          Kotlin •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript" class="inline h-6 mx-2 align-middle" />
          JavaScript •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript" class="inline h-6 mx-2 align-middle" />
          TypeScript •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP"
            class="inline h-6 mx-2 align-middle" />
          PHP •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python"
            class="inline h-6 mx-2 align-middle" />
          Python •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"
            class="inline h-6 mx-2 align-middle" />
          HTML •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS"
            class="inline h-6 mx-2 align-middle" />
          CSS •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL"
            class="inline h-6 mx-2 align-middle" />
          SQL •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java"
            class="inline h-6 mx-2 align-middle" />
          Java •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#"
            class="inline h-6 mx-2 align-middle" />
          C# •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++"
            class="inline h-6 mx-2 align-middle" />
          C++ •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt="Ruby"
            class="inline h-6 mx-2 align-middle" />
          Ruby •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go"
            class="inline h-6 mx-2 align-middle" />
          Go •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" alt="Swift"
            class="inline h-6 mx-2 align-middle" />
          Swift •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin"
            class="inline h-6 mx-2 align-middle" />
          Kotlin •
        </div>
      </div>

      <!-- Frontend Frameworks Row -->
      <div class="marquee-container bg-gray-100 py-3 overflow-hidden relative rounded-lg">

        <div class="marquee-content whitespace-nowrap animate-marquee text-gray-700 font-medium inline-block">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js"
            class="inline h-6 mx-2 align-middle" />
          React.js •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js"
            class="inline h-6 mx-2 align-middle" />
          Vue.js •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            alt="Tailwind CSS" class="inline h-6 mx-2 align-middle" />
          Tailwind CSS •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap"
            class="inline h-6 mx-2 align-middle" />
          Bootstrap •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5"
            class="inline h-6 mx-2 align-middle" />
          HTML •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"
            class="inline h-6 mx-2 align-middle" />
          CSS •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SASS"
            class="inline h-6 mx-2 align-middle" />
          SASS •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js"
            class="inline h-6 mx-2 align-middle" />
          React.js •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js"
            class="inline h-6 mx-2 align-middle" />
          Vue.js •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            alt="Tailwind CSS" class="inline h-6 mx-2 align-middle" />
          Tailwind CSS •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap"
            class="inline h-6 mx-2 align-middle" />
          Bootstrap •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5"
            class="inline h-6 mx-2 align-middle" />
          HTML •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"
            class="inline h-6 mx-2 align-middle" />
          CSS •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SASS"
            class="inline h-6 mx-2 align-middle" />
          SASS •

        </div>
      </div>

      <!-- Backend Frameworks + Tools Row -->
      <div class="marquee-container bg-gray-100 py-3 overflow-hidden relative rounded-lg">

        <div class="marquee-content whitespace-nowrap animate-marquee text-gray-700 font-medium inline-block">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" alt="Laravel"
            class="inline h-6 mx-2 align-middle" />
          Laravel •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js"
            class="inline h-6 mx-2 align-middle" />
          Node.js •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express"
            class="inline h-6 mx-2 align-middle bg-white rounded" />
          Express •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"
            class="inline h-6 mx-2 align-middle" />
          Git •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"
            class="inline h-6 mx-2 align-middle bg-white rounded" />
          GitHub •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma"
            class="inline h-6 mx-2 align-middle" />
          Figma •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code"
            class="inline h-6 mx-2 align-middle" />
          VS Code •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman"
            class="inline h-6 mx-2 align-middle" />
          Postman •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL"
            class="inline h-6 mx-2 align-middle" />
          MySQL •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB"
            class="inline h-6 mx-2 align-middle" />
          MongoDB •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase"
            class="inline h-6 mx-2 align-middle" />
          Firebase •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" alt="Laravel"
            class="inline h-6 mx-2 align-middle" />
          Laravel •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js"
            class="inline h-6 mx-2 align-middle" />
          Node.js •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express"
            class="inline h-6 mx-2 align-middle bg-white rounded" />
          Express •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"
            class="inline h-6 mx-2 align-middle" />
          Git •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"
            class="inline h-6 mx-2 align-middle bg-white rounded" />
          GitHub •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma"
            class="inline h-6 mx-2 align-middle" />
          Figma •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code"
            class="inline h-6 mx-2 align-middle" />
          VS Code •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman"
            class="inline h-6 mx-2 align-middle" />
          Postman •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL"
            class="inline h-6 mx-2 align-middle" />
          MySQL •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB"
            class="inline h-6 mx-2 align-middle" />
          MongoDB •
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase"
            class="inline h-6 mx-2 align-middle" />
          Firebase •
        </div>
      </div>

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

<style scoped>
/* Custom styles for extra small screens if needed */
</style>
