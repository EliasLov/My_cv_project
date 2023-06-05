import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faPhone, faEnvelope, faCity, faLink } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faPhone, faEnvelope, faCity, faLink)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

