import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTools, faUserSecret, faBars, faPlus, faTable, faGasPump, faCar, faOilCan, faBuilding, faPeopleGroup, faTruck, faBoxesStacked } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

library.add(faUserSecret, faBars, faPlus, faTable, faGasPump, faCar, faOilCan, faBuilding, faTools, faPeopleGroup, faTruck, faBoxesStacked )

createApp(App)
.use(store)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')