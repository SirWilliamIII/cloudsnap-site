<template>
	<img src="../../assets/various/main-comp-img.png" class="img-fluid" id="main-img" alt="header-comp" />
</template>

<script>
	export default {
		name: 'mainImage'
	}
</script>

<style scoped>
	#main-img {
		max-width: 720px;
	}

	@media only screen and (max-width: 768px) {
		#main-img {
			max-width: 340px;
			margin:    0px auto 50px;

		}
	}
</style>
