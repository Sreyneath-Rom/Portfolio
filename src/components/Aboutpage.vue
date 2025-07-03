<template>
  <div class="max-w-4xl mx-auto p-6 animate-fadeIn">
    <h1 class="text-3xl font-bold text-center mb-6 text-yellow-600 animate-fadeIn">About Me</h1>

    <!-- Image, name, age, DOB, address -->
    <div class="text-center mb-6 animate-fadeIn">
      <img
        src="https://scontent.fpnh19-1.fna.fbcdn.net/v/t39.30808-6/470218897_1230230461399496_995561225484332007_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=PfsqWc3rFQAQ7kNvwGcBkgY&_nc_oc=AdkDbgr8tXnTTU1svt2Dlzfra-G1_t0casNQEoX48niYSvBTf91e6brQFz-OnH6bL6Q&_nc_zt=23&_nc_ht=scontent.fpnh19-1.fna&_nc_gid=JE6BvFkFzLxHEwXYfgCfAA&oh=00_AfMyh5wHJLt2qwaIFnJRY0u99hVCXShk9E4cvr1P1EdQLA&oe=6867CE7D"
        alt="Sreyneath Rom" class="w-40 h-40 mx-auto mb-4 rounded-full shadow-md object-cover" />
      <p class="text-lg font-semibold text-sky-400">Sreyneath Rom</p>
      <p class="text-sm text-gray-600">
        Age: 21 | DOB: 2004-05-05 | Address: Phnom Penh, Cambodia | Place of Birth: Siem Reap Province
      </p>
    </div>

    <!-- Biography -->
    <div class="text-gray-700 text-sm leading-relaxed text-justify dark:text-gray-300 animate-fadeIn">
      <p>
        Hello! I’m Sreyneath, a passionate learner and aspiring developer with a focus on building responsive web
        applications using Vue.js and Laravel. I’m currently on a journey to deepen my skills in frontend and backend
        development, with a special interest in creating real-world solutions.
      </p>
    </div>

   
  </div>
</template>

<script setup>
// No additional logic needed
</script>

<style>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: inline-block;
  animation: marquee 30s linear infinite;
}

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

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .marquee-container {
    background-color: #2d3748;
  }

  .marquee-content span {
    color: #e2e8f0;
  }
}
</style>
