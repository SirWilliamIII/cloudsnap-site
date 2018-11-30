<template>
	<div id="bg">
		<Navbar />
		<div id="content">
			<!-- TEMPLATE HERE-->
			<SignUpForm />
			<!-- END -->
		</div>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '../components/static/Navbar'
	import Footer from '../components/static/Footer'
	import SignUpForm from '../components/stateful/SignUp/SignUpForm'

	export default {
		name:       'SignupPage',
		components: {
			Navbar, Footer, SignUpForm
		}
	}
</script>

<style scoped>

	#bg, #content {

		display:        flex;
		flex-direction: column;
		flex:           1;
		z-index:        0;
		overflow:       hidden;
	}

	#content {
		margin-top: 100px;
	}
</style>
