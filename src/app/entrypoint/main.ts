import { createApp } from 'vue'
import 'normalize.css'
import '../styles/variables.css'
import '../styles/base.css'
import { router } from '../routes'
import App from './App.vue'

createApp(App).use(router).mount('#app')
