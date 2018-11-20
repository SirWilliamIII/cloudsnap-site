<template>
	<div>
		<app-navbar></app-navbar>
				<router-link to="About" style="color: #ffff00;">About</router-link>
		<app-splash></app-splash>
		<app-logos></app-logos>

		<app-integrate></app-integrate>
		<app-contact></app-contact>
		<app-footer></app-footer>

	</div>
</template>

<script>
	import Navbar from '../components/Navbar'
	import Masthead from '../components/Masthead'
	import Logos from '../components/AppList'
	import Integrate from '../components/AppSection'
	import ContactUs from '../components/forms/ContactUs'
	import Footer from '../components/Footer'

	export default {
		name:       'Index',
		components: {
			'app-navbar':    Navbar,
			'app-splash':    Masthead,
			'app-logos':     Logos,
			'app-integrate': Integrate,
			'app-contact':   ContactUs,
			'app-footer':    Footer
		}
	}
</script>

