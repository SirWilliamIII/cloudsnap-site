<template>
	<div id="bg">
		<Navbar />
		<div id="content">
			<!-- TEMPLATE HERE-->


			<!-- END -->
		</div>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '../components/static/Navbar'
	import Footer from '../components/static/Footer'

	export default {
		name:       'AppsPage',
		components: {
			Navbar, Footer
		}
	}
</script>

<style scoped>

	#bg, #content {
		display:        flex;
		flex-direction: column;
		flex:           1;
	}

</style>
