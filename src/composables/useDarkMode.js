import { ref, watch } from 'vue';

const THEMES = {
  Light: { class: 'light', icon: 'light_mode', iconColor: 'text-yellow-500' },
  Dark: { class: 'dark', icon: 'dark_mode', iconColor: 'text-gray-200' },
  Sepia: { class: 'sepia-theme', icon: 'palette', iconColor: 'text-amber-700' },
  Blue: { class: 'blue-theme', icon: 'water', iconColor: 'text-sky-200' },
  Purple: { class: 'purple-theme', icon: 'color_lens', iconColor: 'text-violet-400' },
  Green: { class: 'green-theme', icon: 'eco', iconColor: 'text-green-400' },
  Orange: { class: 'orange-theme', icon: 'local_fire_department', iconColor: 'text-orange-400' },
  Teal: { class: 'teal-theme', icon: 'waves', iconColor: 'text-teal-300' },
  Pink: { class: 'pink-theme', icon: 'local_florist', iconColor: 'text-pink-400' },
  Midnight: { class: 'midnight-theme', icon: 'nightlight', iconColor: 'text-indigo-200' }
};

const currentTheme = ref(localStorage.getItem('theme') || 'Dark');

const themes = Object.keys(THEMES).map(name => ({
  name,
  icon: THEMES[name].icon,
  iconColor: THEMES[name].iconColor
}));

const setTheme = (theme) => {
  if (!Object.keys(THEMES).includes(theme)) theme = 'Dark';
  currentTheme.value = theme;
  localStorage.setItem('theme', theme);
  updateTheme();
};

const updateTheme = () => {
  const html = document.documentElement;
  Object.values(THEMES).forEach(theme => html.classList.remove(theme.class));
  html.classList.add(THEMES[currentTheme.value]?.class || THEMES.Dark.class);
};

updateTheme();

watch(currentTheme, () => {
  updateTheme();
});

export function useDarkMode() {
  return { currentTheme, setTheme, themes };
}