<template>
	<header class="masthead" id="masthead">
		<div class="container h-100">
			<div class="row h-100">
				<div class="col-lg-7 my-auto">
					<div class="header-content mx-auto">
						<h1 class="mb-5">New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
						<a href="#" class="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
					</div>
				</div>
				<div class="col-lg-5 my-auto">
					<img src="../images/assets/header_comp.png" alt="header-comp">
				</div>
			</div>
		</div>
	</header>
</template>


<script>
	export default {
		name: 'Masthead'
	}
</script>


<style scoped>
	header.masthead {
		position:       relative;
		width:          100%;
		padding-top:    150px;
		padding-bottom: 100px;
		color:          white;
		background:     url("../images/assets/bg-pattern.png"), #4FB8E6;
		background:     url("../images/assets/bg-pattern.png"), -webkit-gradient(linear, right top, left top, from(#4FB8E6), to(#04709F));
		background:     url("../images/assets/bg-pattern.png"), linear-gradient(to left, #4FB8E6, #04709F);
	}

	header.masthead .header-content {
		max-width:     500px;
		margin-bottom: 100px;
		text-align:    center;
	}

	header.masthead .header-content h1 {
		font-size: 30px;
	}

	header.masthead .device-container {
		max-width:    325px;
		margin-right: auto;
		margin-left:  auto;
	}

	header.masthead .device-container .screen img {
		border-radius: 3px;
	}

	@media (min-width: 992px) {
		header.masthead {
			height:         100vh;
			min-height:     775px;
			padding-top:    0;
			padding-bottom: 0;
		}

		header.masthead .header-content {
			margin-bottom: 0;
			text-align:    left;
		}

		header.masthead .header-content h1 {
			font-size: 50px;
		}

		header.masthead .device-container {
			max-width: 325px;
		}
	}
</style>
