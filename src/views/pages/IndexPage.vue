<template>
	<div id="bg">
		<Navbar />
		<div id="content">
			<!-- TEMPLATE HERE-->
			<Splash />
			<Features />
			<AppList />

			<Agent />

			<ContactSection />

			<!-- END -->
		</div>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '../components/static/Navbar'
	import Footer from '../components/static/Footer'
	import Splash from '../components/static/Splash/Splash'
	import AppList from '../components/static/AppList'
	import Features from '../components/static/Features'
	import Agent from '../components/static/Agent'
	import ContactSection from '../components/static/ContactSection'


	export default {
		name:       'IndexPage',
		components: {
			Navbar, Footer, Splash, AppList, Features, Agent, ContactSection
		}
	}
</script>

<style scoped>

	#bg, #content {
		display:        flex;
		flex-direction: column;
		flex:           1;
		z-index:        0;
	}

	#content {
		margin-top: 80px;
	}

	Footer {
		background-color: #ABABAB;
	}

	@media only screen and (max-width: 768px) {
		#content {
			margin-top: 0;
		}
	}
</style>
