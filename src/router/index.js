import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutPage from '../views/pages/AboutPage'
import IndexPage from '../views/pages/IndexPage'
import AppsPage from '../views/pages/AppsPage'
import SignUpPage from '../views/pages/SignUpPage'
import ErpsPage from '../views/pages/ErpsPage'


Vue.use(VueRouter)

const routes = [
	{
		path:      '/',
		component: IndexPage
	}, {
		path:      '/about',
		component: AboutPage
	}, {
		path:      '/apps',
		component: AppsPage
	}, {
		path:      '/signup',
		component: SignUpPage
	}, {
		path:      '/erps',
		component: ErpsPage
	}
]

const router = new VueRouter({
	routes
})

export default router
