<template>
	<header id="splash">
		<div class="container" id="splashContainer">
			<div class="row" id="splashRow">
				<div class="col-md-5">
					<div class="header-content">
						<SplashText />
					</div>
				</div>
				<div class="col-md-7 col-xs-12">
					<SplashImg />
					<SignUpBtn id="signUp" />
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
		height: 100vh;
	}

	.header-content {
		color: #fff;
	}

	#signUp {
		margin-top: 20px;
		margin-left: 110px;
		padding: 40px;
	}

	@media only screen and (max-width: 768px) {
		#splash {
			margin-top: 20px;
		}

		.header-content {
			display: none;
		}

		#signUp {
			margin-top: 40px;
			padding: 20px;
			margin-left: 15px;
		}

		#splashContainer {
			height: 100%;
		}
		#splashRow {
			height: 100%;
		}


	}
</style>
