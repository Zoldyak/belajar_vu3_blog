import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// load bootstrap 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

// load JQUERY
import jQuery from 'jquery'
window.$ = jQuery

// load awsome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// Import template clean blog
import '@/assets/css/clean-blog.css'
import '@/assets/js/clean-blog.js'

createApp(App).use(router).mount('#app')
