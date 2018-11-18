<template>
	<div id="section-block">
		<div class="container">
			<div class="row text-center">
				<div class="col-md-4 col-sm-6 my-auto">
					<img src="../assets/logos/acumatica-logo-tall.svg" class="app-logos">
				</div>
				<div class="col-md-4 col-sm-6 my-auto">
					<img src="../assets/logos/salesforce-logo.png" class="app-logos">
				</div>
				<div class="col-md-4 col-sm-6 my-auto">
					hi
				</div>
			</div>
			<div class="row text-center">
				<div class="col-md-4 col-sm-6 my-auto">
					<img src="../assets/logos/shopify-logo-wide.png" class="app-logos">
				</div>
				<div class="col-md-4 col-sm-6 my-auto">
					<img src="../assets/logos/b1-logo.png" class="app-logos">
				</div>

				<div class="col-md-4 col-sm-6 my-auto">
					<img src="../assets/logos/concur-logo-wide-blgo.png" class="app-logos">
				</div>
			</div>
			<div class="row text-center">
				<a href="#" class="btn" id="app_library_button"> <span>View complete library</span> </a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'logos'
	}
</script>


<style scoped>
	#section-block {
		background-size:     cover;
		background-position: center;
		padding:             50px 0;
		position:            relative;
	}

	@media only screen and (max-width: 768px) {
		#section-block {
			padding:             20px 0;
		}
	}

	.app-logos {
		max-width:  200px;
		max-height: 200px;
		padding:    30px;
	}
</style>
