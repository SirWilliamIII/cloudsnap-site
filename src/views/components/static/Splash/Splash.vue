<template>
	<header id="splash">
		<div class="container" id="splashContainer">
			<div class="row" id="splashRow">
				<div class="col-md-5">
					<div class="header-content">
						<SplashText />
						<div id="signUpBtn1">
							<SignUpBtn />
						</div>
					</div>

				</div>
				<div class="col-md-7 col-xs-12 my-auto">
					<SplashImg />
				</div>
				<div class="row" id="signUpBtn">
					<div class="col-xs-12 mx-auto">
						<SignUpBtn />
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
		height: 100vh;
	}

	#signUpBtn {
		visibility: hidden;
	}

	#signUpBtn1 {
		margin-top: 50px;
	}

	.header-content {
		color: #fff;
	}

	@media only screen and (max-width: 768px) {
		#splash {
			margin-top: 20px;
		}

		.header-content {
			display: none;
		}

		#signUpBtn1{
			visibility: hidden;
		}
		#signUpBtn {
			visibility: visible;
		}
		#splashContainer {
			height: 100%;
		}
		#splashRow {
			height: 100%;
		}


	}
</style>
