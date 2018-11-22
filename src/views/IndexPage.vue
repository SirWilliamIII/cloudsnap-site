<template>
	<div>
		<app-navbar></app-navbar>
		<app-splash></app-splash>
		<app-logos></app-logos>
		<app-features></app-features>
		<app-agent></app-agent>
		<app-integrate></app-integrate>
		<app-contact></app-contact>
		<app-contactSection></app-contactSection>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import Navbar from '../components/Navbar'
	import Masthead from '../components/Masthead'
	import Logos from '../components/AppList'
	import Features from '../components/Features'
	import Integrate from '../components/AppSection'
	import Agent from '../components/Agent'
	import ContactUs from '../components/forms/ContactUs'
	import ContactSection from '../components/ContactSection'
	import Footer from '../components/Footer'


	export default {
		name:       'Index',
		components: {
			'app-navbar':         Navbar,
			'app-splash':         Masthead,
			'app-logos':          Logos,
			'app-features':       Features,
			'app-integrate':      Integrate,
			'app-agent':          Agent,
			'app-contact':        ContactUs,
			'app-contactSection': ContactSection,
			'app-footer':         Footer
		}
	}
</script>

