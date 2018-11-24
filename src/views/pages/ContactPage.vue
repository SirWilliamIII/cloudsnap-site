<template>
	<div id="bg">
		<Navbar />
		<div id="content">
			<!-- TEMPLATE HERE-->

				<ContactForm />


			</div>
			<!-- END -->
		<Footer />
	</div>
</template>

<script>
	import Navbar from '../components/static/Navbar'
	import Footer from '../components/static/Footer'


	import ContactForm from '../components/stateful/ContactForm'

	export default {
		name:       'ContactPage',
		components: {
			Navbar, Footer, ContactForm
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
		margin-top: 100px;
	}
</style>
