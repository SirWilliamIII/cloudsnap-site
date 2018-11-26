import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutPage from '../views/pages/AboutPage'
import IndexPage from '../views/pages/IndexPage'
import AppsPage from '../views/pages/AppsPage'
import SignUpPage from '../views/pages/SignUpPage'
import ErpsPage from '../views/pages/ErpsPage'
import ContactPage from '../views/pages/ContactPage'
import ThanksPage from '../views/pages/ThanksPage'
import ErrorPage from '../views/pages/ErrorPage'
import PostmailPage from '../views/pages/EmailUsPage'
import AgentPage from '../views/pages/AgentPage'
import TestPage from '../views/pages/TestPage'


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
	}, {
		path: '/contact',
		component: ContactPage
	}, {
		path: '/thanks',
		component: ThanksPage
	}, {
		path: '/error',
		component: ErrorPage
	}, {
		path: '/email',
		component: PostmailPage
	}, {
		path: '/agent',
		component: AgentPage
	}, {
		path: '/will',
		component: TestPage
	}
]

const router = new VueRouter({
	routes
})

export default router
