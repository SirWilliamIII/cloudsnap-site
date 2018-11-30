<template>
	<header id="splash">
		<div class="container" id="splashContainer">
			<div class="row">
				<div class="col-md-5" id="headerWrapper">
					<div class="headerContent">
						<SplashText />
					</div>
				</div>
				<div class="col-md-7 col-xs-12 mx-auto">
					<div class="row">
						<SplashImg id="splashImg" />
						<SignUpBtn id="signBtn"/>
					</div>
					<div class="row">

					</div>
				</div>
			</div>
		</div>
	</header>
</template>


<script>
	import SignUpBtn from '../buttons/SignUpBtn'
	import SplashImg from './SplashImage'
	import SplashText from './SplashHeading'


	export default {
		name:       'Splash',
		components: {
			SignUpBtn, SplashImg, SplashText
		}
	}
</script>


<style scoped>

	#splash {
		margin-top: 100px;
		height:     100vh;
	}

	.headerContent {
		color: #fff;
	}

	#signBtn {
		margin-left: 200px;
		margin-top: 50px;
	}

	@media only screen and (max-width: 768px) {

		.headerContent {
		}

		#headerWrapper {
			display: none;
		}

		#splashImg {
			margin-left: -20px;
		}

		#signBtn {
			margin-left: 90px;
			margin-top: 110px;
		}
	}
</style>
