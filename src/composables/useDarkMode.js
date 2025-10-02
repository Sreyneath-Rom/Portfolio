import { ref, watch } from 'vue';

// Manage multiple themes
const currentTheme = ref(localStorage.getItem('theme') || 'Light');

const setTheme = (theme) => {
  currentTheme.value = theme;
  localStorage.setItem('theme', theme);
  updateTheme();
};

// Apply theme classes to document
const updateTheme = () => {
  const html = document.documentElement;
  html.classList.remove('light', 'dark', 'sepia-theme', 'blue-theme');
  if (currentTheme.value === 'Dark') {
    html.classList.add('dark');
  } else if (currentTheme.value === 'Sepia') {
    html.classList.add('sepia-theme');
  } else if (currentTheme.value === 'Blue') {
    html.classList.add('blue-theme');
  } else {
    html.classList.add('light');
  }
};

// Initialize theme
updateTheme();

// Watch for theme changes
watch(currentTheme, () => {
  updateTheme();
});

export function useDarkMode() {
  return { currentTheme, setTheme };
}