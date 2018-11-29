<template>
	<div id="mainText">
		<h1 id="splash-text">
			Connect your apps in a<strong> snap</strong>
		</h1>
		<p class="lead"> The iPaaS solution built for the connected enterprise</p>
	</div>
</template>

<script>
	export default {
		name: 'MainText'
	}
</script>

<style scoped>
	#splash-text {
		font-weight:   300;
		font-size:     90px;
		margin-bottom: 40px;
		margin-top:    auto;
		color:         #fff;
		line-height:   inherit;
	}

	@media only screen and (max-width: 768px) {
		#splash-text {
			font-size: 42px;
			margin-top: 0;
		}

	}
</style>
