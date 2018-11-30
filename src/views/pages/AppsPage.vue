<template>
	<div id="bg">
		<Navbar />
		<div id="content" class="text-center">
			<!-- TEMPLATE HERE-->
			<h1 class="cardsTitle">Which apps would you like to connect?</h1>
			<AppCards />
			<h1 class="cardsTitle">
				App library updated daily
			</h1>
			<SignUpBtn />
		</div>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '../components/static/Navbar'
	import Footer from '../components/static/Footer'
	import AppCards from '../components/stateful/AppLibraryCards'
	import SignUpBtn from '../components/static/buttons/SignUpBtn'

	export default {
		name:       'AppsPage',
		components: {
			Navbar, Footer, AppCards, SignUpBtn
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

	.cardsTitle {
		color:         #fff;
		margin-bottom: 50px;
		margin-top:    50px;
		font-size:     60px;
	}
</style>
