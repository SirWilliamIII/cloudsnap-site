<template>
	<header class="masthead">
		<div class="container h-100">
			<div class="row h-100">
				<div class="col-lg-6 my-auto">
					<div class="header-content mx-auto">
						<h1 class="mb-5" id="splash-text">Connect your
						                                                                                 apps in a
							<strong>snap</strong>
						</h1>
						<SignUpBtn />
					</div>
				</div>
				<div class="col-lg-6 my-auto">
					<img src="../assets/various/main-comp-img.png" class="img-fluid" id="main-img" alt="header-comp"
					     style="max-height: 540px;" />
				</div>
			</div>
		</div>
	</header>
</template>


<script>
	import SignUpBtn from './buttons/SignUp'
	export default {
		name:       'Masthead',
		components: {
			SignUpBtn
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
		background:     url('../assets/various/bg-pattern.png'), #52b9e6;
		background:     url('../assets/various/bg-pattern.png'), -webkit-gradient(linear, right top, left top, from(#52b9e6), to(#0473a3));
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

	#splash-text {
		font-weight: 300;
		font-size:   90px;
		margin-bottom: 40px;
		margin-top: auto;
		color:       #fff;
		line-height: inherit;
	}

	#main-img {
		max-width: 720px;
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

		#main-img {
			max-width: 340px;
			margin:    0px auto 50px;

		}
	}

</style>
