import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueAnalytics from 'vue-analytics'
import VeeValidate from 'vee-validate'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueIntercom from 'vue-intercom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

Vue.use(VeeValidate)
Vue.use(VueIntercom, { appId: 'qrls8x48' })


Vue.use(VueAnalytics, {
	id: 'UA-128386238-1',
	router
})

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
