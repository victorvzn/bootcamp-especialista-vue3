// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { globalRegistration } from '@/components/shared/globals.js'

import router from '@/router'

const app = createApp(App)

globalRegistration(app)

app.use(router)

app.mount('#app')
