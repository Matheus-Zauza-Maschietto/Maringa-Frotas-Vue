import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faBars, faPlus, faTable, faGasPump, faCar, faOilCan } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

library.add(faUserSecret, faBars, faPlus, faTable, faGasPump, faCar, faOilCan )

createApp(App)
.use(store)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')