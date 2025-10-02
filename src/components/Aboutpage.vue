<template>
  <div class="max-w-5xl mx-auto p-6 md:p-12">
    <!-- Heading -->
    <h1 class="text-3xl md:text-4xl font-bold text-center mb-8 text-yellow-500">About Me</h1>

    <!-- Profile Section -->
    <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
      <img src="@/assets/image/1.png" alt="Sreyneath Rom" class="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg object-cover" />
      <div class="text-center md:text-left">
        <p class="text-xl font-semibold text-sky-500 mb-2">Sreyneath Rom</p>
        <p class="text-base text-gray-600 dark:text-gray-400">
          Age: 21<br />
          Address: Phnom Penh, Cambodia<br />
          Place of Birth: Siem Reap Province
        </p>
      </div>
    </div>

    <!-- Biography -->
    <p class="text-base text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
      Hello! I’m Sreyneath, a passionate learner and aspiring developer with a focus on building responsive web applications using Vue.js and Laravel. I’m on a journey to deepen my skills in frontend and backend development.
    </p>

    <!-- Social Links -->
    <div class="px-4">
      <p class="text-gray-600 dark:text-gray-400 text-center mb-6">Connect with me:</p>
      <div class="flex justify-center gap-6">
        <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer" class="transform hover:scale-110 transition">
          <div :class="social.class" class="w-12 h-12 rounded-lg flex items-center justify-center shadow-md">
            <svg :viewBox="social.viewBox" fill="currentColor" class="h-8 w-8 text-white">
              <path :d="social.path" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Social media links data
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Sreyneath-Rom',
    class: 'bg-gray-800',
    viewBox: '0 0 24 24',
    path: 'M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1 .8 2v3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z',
  },
  {
    name: 'Email',
    url: 'mailto:romsreyneath4@gmail.com',
    class: 'bg-rose-600',
    viewBox: '0 0 24 24',
    path: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sreyneath-rom-69b2a5321/',
    class: 'bg-blue-700',
    viewBox: '0 0 24 24',
    path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07 1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zm1.78 13.02H3.55V9h3.57v11.45z',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/neath1fly',
    class: 'bg-blue-600',
    viewBox: '0 0 24 24',
    path: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2v-2c0-2.2 1.8-4 4-4h2v3h-2c-1.1 0-2 .9-2 2v2h4v3h-4v4.8c4.56-.93 8-4.96 8-9.8z',
  },
];
</script>

<style scoped>
/* Smooth fade-in animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>