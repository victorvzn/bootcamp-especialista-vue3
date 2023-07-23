// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { globalRegistration } from '@/components/shared/globals.js'

const app = createApp(App)

globalRegistration(app)

app.mount('#app')
