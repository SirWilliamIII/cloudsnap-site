<template>
	<div>
		<app-navbar></app-navbar>
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
	import Contact from '../components/ContactForm'
	import Footer from '../components/Footer'

	export default {
		name:       'IndexPage',
		components: {
			'app-navbar':    Navbar,
			'app-splash':    Masthead,
			'app-logos':     Logos,
			'app-integrate': Integrate,
			'app-contact': Contact,
			'app-footer': Footer
		}
	}
</script>

<style>
</style>
