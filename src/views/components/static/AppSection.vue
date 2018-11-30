<template>
	<div class="text-white" id="integrate">
		<div class="container" style="padding-top: 20px;">
			<div class="row my-auto">
				<div class="col-sm-12 text-right">
					<br>
					<SplashText />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import SplashText from './Splash/SplashText'
	export default {
		name:       'integrate',
		components: {
			SplashText
		}
	}
</script>

<style scoped>
	#integrate {
		background-image: url('../../../assets/images/various/integrate_bg.jpg');
		margin:           auto;
	}
</style>
