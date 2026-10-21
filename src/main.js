import { createApp } from 'vue'
import App from './App.vue'
import { initLocale } from './i18n/index.js'
import { reveal } from './directives/reveal.js'
import './styles/main.css'

initLocale()

createApp(App).directive('reveal', reveal).mount('#app')
