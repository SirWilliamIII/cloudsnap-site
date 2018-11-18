<template>
	<div class="row" id="app-logos-wrapper">
		<div class="col-md-2 col-sm-6 my-auto">
			<img src="../assets/logos/acumatica-logo-tall.svg" class="app-logos">
		</div>
		<div class="col-md-2 col-sm-6 my-auto">
			<img src="../assets/logos/concur-logo-wide-blgo.png" class="app-logos">
		</div>
		<div class="col-md-2 col-sm-6 my-auto">
			<img src="../assets/logos/salesforce-logo.png" class="app-logos">
		</div>
		<div class="col-md-2 col-sm-6 my-auto">
			<img src="../assets/logos/shopify-logo-dark.svg" class="app-logos">
		</div>
		<div class="col-md-2 col-sm-6 my-auto">
			<img src="../assets/logos/b1-logo.png" class="app-logos">
		</div>
		<div class="col-sm-5 mx-auto">
			<img src="../assets/various/integrate_comp_2.png" id="integrate-comp-img" />
		</div>
	</div>
</template>


<style>

	#app-logos-wrapper {
		display:         flex;
		justify-content: space-between;
	}

	#integrate-comp-img {
		max-height: 600px;
		max-width:  720px;
	}

	.app-logos {
		max-width:  120px;
		max-height: 120px;
	}

	@media only screen and (max-width: 768px) {
		#integrate-comp-img {
			display: none;
		}
	}

</style>
