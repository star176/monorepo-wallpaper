import ElementPlus from 'element-plus'
import '@renderer/assets/global.scss'
import '@renderer/assets/tailwind.css'
import 'element-plus/dist/index.css'
import router from './router'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
