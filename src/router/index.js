import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutPage from '../views/AboutPage'
import IndexPage from '../views/IndexPage'
import AppsPage from '../views/AppsPage'
import SignUpPage from '../views/SignUpPage'
import ErpsPage from '../views/ErpsPage'


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
