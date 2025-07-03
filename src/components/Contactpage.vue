<template>
    <!-- ClipPath Definition -->
    <svg width="0" height="0" style="position: absolute;">
        <defs>
            <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
                <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path>
            </clipPath>
        </defs>
    </svg>

    <div
        class="min-h-screen bg-white p-6 text-[12pt] font-[Verdana] leading-relaxed flex flex-col items-center justify-center animate-fadeIn">
        <!-- Header -->
        <h1 class="text-3xl font-bold text-yellow-600 mb-6">Contact Me</h1>
        <p class="text-lg text-gray-700 mb-8 text-center max-w-lg animate-fadeIn">
            Feel free to reach out for inquiries, collaborations, or opportunities in the IT sector. I’m passionate
            about Vue.js, Laravel, and building innovative web solutions.
        </p>

        <!-- Contact Information Card -->
     
            <h2 class="text-xl font-semibold text-sky-400 mb-4">Get in Touch</h2>
            <p class="text-gray-600 text-center mb-4">Click the icons below to connect with me:</p>

            <!-- Social Media Icons -->
            <div class="relative mt-4 flex flex-wrap justify-center gap-4">
                <!-- GitHub -->
                <a href="https://github.com/Sreyneath-Rom" target="_blank" rel="noopener noreferrer">
                    <div style="clip-path: url(#squircleClip)"
                        class="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8 text-white">
                            <path
                                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1 .8 2v3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </div>
                </a>

                <!-- Telegram -->
                <a href="https://t.me/sreyneathrom" target="_blank" rel="noopener noreferrer">
                    <div style="clip-path: url(#squircleClip)"
                        class="w-14 h-14 bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center shadow-lg border border-sky-500/50 cursor-pointer transform transition hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8 text-white">
                            <path
                                d="M9.8 15.5l-.4 4c.6 0 .8-.3 1.1-.6l2-2 4.1 3c.8.5 1.4.2 1.6-.7l3-14c.2-1-.3-1.4-1.3-1l-17 6c-1 .4-1 .9-.2 1.2l4.3 1.3 10-6.3c.5-.3.8-.1.5.3l-8.5 7.3z" />
                        </svg>
                    </div>
                </a>

                <!-- Email -->
                <a href="mailto:romsreyneath4@gmail.com">
                    <div style="clip-path: url(#squircleClip)"
                        class="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-700 flex items-center justify-center shadow-lg border border-rose-500/50 cursor-pointer transform transition hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8 text-white">
                            <path
                                d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                    </div>
                </a>

                <!-- LinkedIn -->
                <a href="https://www.linkedin.com/in/sreyneath-rom-69b2a5321/" target="_blank"
                    rel="noopener noreferrer">
                    <div style="clip-path: url(#squircleClip)"
                        class="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8 text-white">
                            <path
                                d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07 1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zm1.78 13.02H3.55V9h3.57v11.45z" />
                        </svg>
                    </div>
                </a>

                <!-- Facebook -->
                <a href="https://www.facebook.com/neath1fly" target="_blank" rel="noopener noreferrer">
                    <div style="clip-path: url(#squircleClip)"
                        class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8 text-white">
                            <path
                                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2v-2c0-2.2 1.8-4 4-4h2v3h-2c-1.1 0-2 .9-2 2v2h4v3h-4v4.8c4.56-.93 8-4.96 8-9.8z" />
                        </svg>
                    </div>
                </a>
            </div>
      

        <!-- Footer -->
        <div class="text-center mt-6">
            <p class="text-sm text-gray-500">© 2025 Sreyneath Rom. All rights reserved.</p>
            <p class="text-sm text-gray-500 mt-2">Built with Vue.js and Laravel.</p>
        </div>

        <!-- Scroll to Top Button -->
        <button @click="scrollToTop"
            class="fixed bottom-6 right-6 bg-yellow-500 text-white px-3 py-1 rounded-full shadow hover:bg-yellow-600">
            ↑ Top
        </button>
    </div>
</template>

<script setup>
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<style scoped>
/* Optional custom styles */
</style>
