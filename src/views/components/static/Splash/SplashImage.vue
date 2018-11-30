<template>
	<div>
		<img :src="img.url" class="img-fluid" id="main-img" alt="header-comp" />
	</div>
</template>

<script>
	import MainImg from '../../../../assets/images/various/main-comp-img.png'

	export default {


		name: 'SplashImage',
		data() {
			return {
				img: {
					url: MainImg
				}
			}
		}
	}
</script>

<style scoped>

	#main-img {
		max-height: 420px;
	}

	@media only screen and (max-width: 768px) {
		#main-img {
			max-width: 420px;
			margin-top: 50px;
		}
	}


</style>
