import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/AboutPage'
import Index from '../views/IndexPage'

Vue.use(VueRouter)

const routes = [
	{
		path:      '/about',
		component: About
	}, {
		path:      '/',
		component: Index
	}
]

const router = new VueRouter({
	routes
})

export default router
