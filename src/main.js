// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/main.css'

// // Import Material Symbols globally
// import 'material-symbols/outlined.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Apply saved theme instantly on load (prevents flash)
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('theme') || 'Dark'
  document.documentElement.className = ''
  document.documentElement.classList.add(
    'transition-colors', 'duration-300',
    saved === 'Light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-gray-100'
  )
}