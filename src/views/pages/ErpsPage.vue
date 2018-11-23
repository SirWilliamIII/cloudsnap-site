<template>
	<div id="bg">
		<Navbar />
		<div id="content">
			<!-- TEMPLATE HERE-->
			<AppList />
			<AppList />
			<AppList />
			<AppList />
			<!-- END -->
		</div>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '../components/static/Navbar'
	import Footer from '../components/static/Footer'
	import AppList from '../components/static/AppList'

	export default {
		name:       'ErpsPage',
		components: {
			Navbar, Footer, AppList
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
