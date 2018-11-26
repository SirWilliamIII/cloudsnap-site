<template>
	<div id="bg">
		<Navbar />
		<div id="content" class="text-center">
			<!-- TEMPLATE HERE-->
			<h1>App Library</h1>
			<AppCards />
		</div>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '../components/static/Navbar'
	import Footer from '../components/static/Footer'
	import AppCards from '../components/stateful/AppLibraryCards'

	export default {
		name:       'AppsPage',
		components: {
			Navbar, Footer, AppCards
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
