import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import VueTippy from "vue-tippy";
import "tippy.js/dist/tippy.css";

// import router from './router'

const app = createApp(App)

// app.use(createPinia())
app.use(VueTippy)
// app.use(router)

app.mount('#app')
