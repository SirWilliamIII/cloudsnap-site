<template>
	<div id="appLogosWrapper">
		<div class="container" id="appLogosContainer">
			<div class="row text-center mx-auto" id="app-list" data-aos="zoom-in" data-aos-easing="ease-in-sine"
		     data-aos-duration="400">
				<div class="col-md-4 col-sm-6 my-auto" v-for="logo in logos" v-bind:key="logos[logo]">
					<img :src="logo.img" class="appLogos" />
				</div>
			</div>
			<div class="row mx-auto" data-aos="zoom-in" data-aos-easing="ease-in-sine"
		     data-aos-duration="400">
				<div class="col-md-4 offset-md-4 col-xs-8 text-center">
					<router-link to="apps">
						<AppLibBtn />
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import concur from '../../../assets/images/logos/concur-logo-wide-blgo.png'
	import salesforce from '../../../assets/images/logos/salesforce-logo.png'
	import bigC from '../../../assets/images/logos/bigcommerce-logo-wide.png'
	import acumatica from '../../../assets/images/logos/acumatica-logo-tall.svg'
	import shopify from '../../../assets/images/logos/shopify-logo-wide.png'
	import sap from '../../../assets/images/logos/sap-logo.png'

	import AppLibBtn from './buttons/AppLibBtn'

	const logos = [
		{ img: concur },
		{ img: salesforce },
		{ img: bigC },
		{ img: acumatica },
		{ img: shopify },
		{ img: sap }
	]

	export default {
		name:       'logos',
		data() {
			return { logos }
		},
		components: {
			AppLibBtn
		}
	}
</script>


<style scoped>
	#appLogosWrapper {
		background-size: cover;
		background:      url("../../../assets/images/various/white-bg.jpg") center;
		position:        relative;
		height:          50vh;

	}

	.appLogos {
		max-width:  200px;
		max-height: 200px;
		padding:    25px;
	}

	#app-list {
		list-style: none;
	}

	@media only screen and (max-width: 768px) {
		#appLogosWrapper {
			padding-top: 20px;
			height:      120vh;
		}

		#appLogosContainer {
			margin-top: 0;
		}
	}
</style>
