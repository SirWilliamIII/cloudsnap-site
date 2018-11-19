<template>
	<div id="appLogosWrapper">
		<div class="container">
			<div class="row text-center mx-auto" id="app-list">
				<div class="col-md-4 col-sm-6 my-auto" v-for="logo in logos" v-bind:key="logos[logo]">
					<img :src="logo.img" class="appLogos" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import concur from '../assets/logos/concur-logo-wide-blgo.png'
	import salesforce from '../assets/logos/salesforce-logo.png'
	import bigC from '../assets/logos/bigcommerce-logo-wide.png'
	import acumatica from '../assets/logos/acumatica-logo-tall.svg'
	import shopify from '../assets/logos/shopify-logo-wide.png'
	import sap from '../assets/logos/sap-logo.png'

	const logos = [
		{ img: concur },
		{ img: salesforce },
		{ img: bigC },
		{ img: acumatica },
		{ img: shopify },
		{ img: sap }
	]

	export default {
		name: 'logos',
		data() {
			return { logos }
		}
	}
</script>


<style scoped>
	#appLogosWrapper {
		background-size: cover;
		background:      url("../assets/various/white-bg.jpg") center;
		padding:         20px 0 40px;
		position:        relative;
	}

	@media only screen and (max-width: 768px) {
		#appLogosWrapper {
			padding: 20px 0;
		}
	}

	.appLogos {
		max-width:  200px;
		max-height: 200px;
		padding:    30px;
	}

	#app-list {
		list-style: none;
	}
</style>
