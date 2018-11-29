<template>
	<div id="bg">
		<Navbar />
		<div id="content">
			<!-- TEMPLATE HERE-->
			<Splash />
			<Features />
			<AppList />
			<Integrate />
			<Scalability />
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
	import ContactSection from '../components/static/ContactSection'
	import Integrate from '../components/static/Integrate'
	import Scalability from '../components/static/Scalability'


	export default {
		name:       'IndexPage',
		components: {
			Navbar, Footer, Splash, AppList, Features, ContactSection, Integrate, Scalability
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
		background-color: #2CAAE0;
	}

	@media only screen and (max-width: 768px) {
		#content {
			margin-top: 0;
		}
	}
</style>
