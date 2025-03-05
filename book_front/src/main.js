import './assets/main.css'

import {createApp} from 'vue'

import App from './App.vue'
import router from './Plugins/router.js'
import {createPinia} from 'pinia'

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')
