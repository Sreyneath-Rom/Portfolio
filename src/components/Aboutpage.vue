<template>
  <div class="max-w-4xl mx-auto p-4 sm:p-6 md:p-10 lg:p-16 animate-fadeIn">
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-yellow-600 animate-fadeIn">About Me</h1>

    <!-- Image, name, age, DOB, address -->
    <div class="flex flex-col items-center md:flex-row md:items-center md:justify-center mb-6 md:mb-10 animate-fadeIn gap-4 sm:gap-8 md:gap-12">
      <img
        src="https://scontent.fpnh19-1.fna.fbcdn.net/v/t39.30808-6/470218897_1230230461399496_995561225484332007_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=PfsqWc3rFQAQ7kNvwGcBkgY&_nc_oc=AdkDbgr8tXnTTU1svt2Dlzfra-G1_t0casNQEoX48niYSvBTf91e6brQFz-OnH6bL6Q&_nc_zt=23&_nc_ht=scontent.fpnh19-1.fna&_nc_gid=JE6BvFkFzLxHEwXYfgCfAA&oh=00_AfMyh5wHJLt2qwaIFnJRY0u99hVCXShk9E4cvr1P1EdQLA&oe=6867CE7D"
        alt="Sreyneath Rom"
        class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-2 md:mb-0 rounded-full shadow-md object-cover"
      />
      <div class="text-center md:text-left">
        <p class="text-lg sm:text-xl md:text-2xl font-semibold text-sky-400">Sreyneath Rom</p>
        <p class="text-xs sm:text-sm md:text-base text-gray-600">
          Age: 21 | DOB: 2004-05-05<br class="block md:hidden" />
          Address: Phnom Penh, Cambodia<br class="block md:hidden" />
          Place of Birth: Siem Reap Province
        </p>
      </div>
    </div>

    <!-- Biography -->
    <div class="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed text-justify dark:text-gray-300 animate-fadeIn">
      <p>
        Hello! I’m Sreyneath, a passionate learner and aspiring developer with a focus on building responsive web
        applications using Vue.js and Laravel. I’m currently on a journey to deepen my skills in frontend and backend
        development, with a special interest in creating real-world solutions.
      </p>
    </div>
  </div>
   <!-- ClipPath Definition -->
   <svg width="0" height="0" style="position: absolute;">
        <defs>
            <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
                <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path>
            </clipPath>
        </defs>
    </svg>

        <!-- Contact Information Card -->
     <div class="mt-8 md:mt-12 px-2 sm:px-8 md:px-20">
            
            <p class="text-gray-600 text-center mb-2 sm:mb-4 text-xs sm:text-sm md:text-base">Click the icons below to connect with me:</p>

            <!-- Social Media Icons -->
            <div class="relative mt-4 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                <!-- GitHub -->
                <a href="https://github.com/Sreyneath-Rom" target="_blank" rel="noopener noreferrer">
                    <div style="clip-path: url(#squircleClip)"
                        class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white">
                            <path
                                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1 .8 2v3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </div>
                </a>

                <!-- Telegram -->
                <a href="https://t.me/sreyneathrom" target="_blank" rel="noopener noreferrer">
                    <div style="clip-path: url(#squircleClip)"
                        class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center shadow-lg border border-sky-500/50 cursor-pointer transform transition hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white">
                            <path
                                d="M9.8 15.5l-.4 4c.6 0 .8-.3 1.1-.6l2-2 4.1 3c.8.5 1.4.2 1.6-.7l3-14c.2-1-.3-1.4-1.3-1l-17 6c-1 .4-1 .9-.2 1.2l4.3 1.3 10-6.3c.5-.3.8-.1.5.3l-8.5 7.3z" />
                        </svg>
                    </div>
                </a>

                <!-- Email -->
                <a href="mailto:romsreyneath4@gmail.com">
                    <div style="clip-path: url(#squircleClip)"
                        class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-rose-500 to-pink-700 flex items-center justify-center shadow-lg border border-rose-500/50 cursor-pointer transform transition hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white">
                            <path
                                d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                    </div>
                </a>

                <!-- LinkedIn -->
                <a href="https://www.linkedin.com/in/sreyneath-rom-69b2a5321/" target="_blank"
                    rel="noopener noreferrer">
                    <div style="clip-path: url(#squircleClip)"
                        class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white">
                            <path
                                d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07 1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zm1.78 13.02H3.55V9h3.57v11.45z" />
                        </svg>
                    </div>
                </a>

                <!-- Facebook -->
                <a href="https://www.facebook.com/neath1fly" target="_blank" rel="noopener noreferrer">
                    <div style="clip-path: url(#squircleClip)"
                        class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white">
                            <path
                                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2v-2c0-2.2 1.8-4 4-4h2v3h-2c-1.1 0-2 .9-2 2v2h4v3h-4v4.8c4.56-.93 8-4.96 8-9.8z" />
                        </svg>
                    </div>
                </a>
            </div>
          </div>
</template>

<script setup>
// No additional logic needed
</script>

<style>
.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive tweaks for very small screens */
@media (max-width: 400px) {
  .max-w-4xl {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
}
</style>
