import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
// @ts-ignore
import App from './App.vue'

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .mount('#app')

