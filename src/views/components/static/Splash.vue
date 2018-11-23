<template>
	<header class="masthead">
		<div class="container h-100">
			<div class="row h-100">
				<div class="col-lg-6 my-auto">
					<div class="header-content mx-auto">
						<MainText/>
						<SignUpBtn />
					</div>
				</div>
				<div class="col-lg-6 my-auto">
					<MainImg />
				</div>
			</div>
		</div>
	</header>
</template>


<script>
	import SignUpBtn from '../buttons/SignUpBtn'
	import MainImg from './MainImage'
	import MainText from './SplashHeading'

	export default {
		name:       'Masthead',
		components: {
			SignUpBtn, MainImg, MainText
		}
	}
</script>


<style scoped>

	.masthead {
		position:       relative;
		width:          100%;
		padding-top:    150px;
		padding-bottom: 100px;
		color:          white;
		background:     url('../../../assets/images/various/bg-pattern.png'), #52b9e6;
		background:     url('../../../assets/images/various/bg-pattern.png'), -webkit-gradient(linear, right top, left top, from(#52b9e6), to(#0473a3));
	}

	.masthead .header-content {
		max-width:     500px;
		text-align:    center;
		padding-top:   0;
		margin-bottom: 100px;
	}

	@media (min-width: 992px) {
		.masthead {
			height:         100vh;
			min-height:     775px;
			padding-top:    0;
			padding-bottom: 0;
		}

		.masthead .header-content {
			text-align:    left;
			margin-bottom: 0;
		}
	}





	@media only screen and (max-width: 768px) {
		.header-content {
			text-align: center !important;
		}

		.header-content h1 {
			font-size: 300%;
		}

		.header-content hr {
			margin: auto;
		}

		#splash-text {
			margin-top: 0;
			font-size:  36px;
		}
	}
</style>
