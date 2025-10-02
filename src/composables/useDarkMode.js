import { ref, watch, onMounted } from 'vue';

export function useDarkMode() {
  const isDark = ref(false);

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    isDark.value = savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    updateTheme();
  });

  watch(isDark, (newVal) => {
    localStorage.setItem('theme', newVal ? 'dark' : 'light');
    updateTheme();
  });

  function updateTheme() {
    document.documentElement.classList.toggle('dark', isDark.value);
  }

  function toggle() {
    isDark.value = !isDark.value;
  }

  return { isDark, toggle };
}