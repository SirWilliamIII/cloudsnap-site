<template>
	<div class="about" id="bg">
		<Navbar id="nav" />
		<div id="content">
			<AppLibrary />



		</div>
		<Footer id="foot" />
	</div>
</template>

<script>
	import Navbar from '../components/static/Navbar'
	import Footer from '../components/static/Footer'
	import AppLibrary from '../components/AppLibraryApps'

	export default {
		name:       'AboutPage',
		components: {
			Navbar, Footer, AppLibrary
		}
	}
</script>

<style scoped>
	#bg {
		/* Set rules to fill background */
		display:        flex;
		min-height:     100vh;
		flex-direction: column;
		background:     url('../../assets/images/various/bg-pattern.png'), #52b9e6;
		background:     url('../../assets/images/various/bg-pattern.png'), -webkit-gradient(linear, right top, left top, from(#52b9e6), to(#0473a3));
	}

	#nav {
		width:      100%; /* Full width */
		transition: top 0.3s;
	}

	#content {
		display: flex;
		flex:    1;
	}

</style>
