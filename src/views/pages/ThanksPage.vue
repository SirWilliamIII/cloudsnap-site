<template>
	<div id="bg">
		<Navbar />
		<div id="content">
			<!-- TEMPLATE HERE-->
			<div class="container" style="padding-top:100px;">
				<h1 class="text-center" id="title">Thank You!</h1>
				<p class="text-center" id="subtitle">We have received your message and will contact you shortly</p>
			</div>
			<!-- END -->
		</div>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '../components/static/Navbar'
	import Footer from '../components/static/Footer'

	export default {
		name:       'ThanksPage',
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
		margin-top: 100px;
	}

	#title {
		padding-top:    50px;
		padding-bottom: 10px;
		color:          #fff;
		font-size:      94px;
		font-weight:    300;
	}

	#subtitle {
		color:       #fff;
		font-size:   26px;
		font-weight: 300;
	}

	@media only screen and (max-width: 768px) {

		#title {
			padding-top: 0;
			font-size:   56px;
			margin-top:  0;
		}

		#subtitle {
			margin-top: 20px;
			font-size: 22px;
		}

	}
</style>
