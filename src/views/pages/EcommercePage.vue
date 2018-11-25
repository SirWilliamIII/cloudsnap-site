<template>
	<div id="bg">
		<Navbar />
		<div id="content">
			<!-- TEMPLATE HERE-->
<h1>E-Commerce Page</h1>
			<!-- END -->
		</div>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '../components/static/Navbar'
	import Footer from '../components/static/Footer'


	export default {
		name:       'ECommercePage',
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
		z-index:        0;
	}

	#content {
		margin-top: 80px;
	}
</style>
