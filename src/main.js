import Vue from 'vue'
import App from './App.vue'
import router from './router/index'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

library.add(faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


new Vue({
	render:     h => h(App),
	el:         "#app",
	name:       'app',
	router,
	template:   '<App/>',
	components: { App }
}).$mount('#app')
