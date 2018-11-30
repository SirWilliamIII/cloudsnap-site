<template>
	<div class="text-white section_block" id="integrate">
		<div class="container" style="z-index: 2;">
			<div class="row text-center">
				<div class="col-md-6 my-auto" id="integrateWrapper">
					<h1 class="sectionHeader mainText">Integrate Seamlessly</h1>
					<h1 class="mainText">with the apps you already use</h1>
					<hr>
					<p class="lead" style="color: #2CAAE0;">
						{{ integrate.mainText }}
					</p>
					<!--<a href="#prem" class="btn btn-info">See more</a> -->
				</div>
				<div class="col-md-5">
					<img :src="bgPic" class="hidden-sm-down" id="integrate_comp">
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import bgPic from "../../../assets/images/various/integrate_comp_2.png"

	export default {
		name:    'Integrate',
		data() {
			return {
				bgPic,
				integrate: {
					mainText:
						'Choose from our library of connected apps or create your own custom connection in minutes. Custom apps can be both cloud based as well as on-prem or legacy apps.'
				}
			}
		},
		methods: {}
	}
</script>

<style scoped>
	#integrate {
		height: 75vh;
	}

	.text-white {
		color: #fff;
	}

	#integrate_comp {
		max-height: 480px;
		max-width:  620px;
		right:      100px;
		z-index:    1;
	}

	.section_block {
		background-size:     cover;
		background-position: center;
		padding:             50px 0;
		position:            relative;
	}

	.sectionHeader {
		letter-spacing: 1px;
		color:          #2CAAE0;
		text-align:     center;
	}

	.mainText {
		font-size:   50px;
		color:       #2CAAE0;
		font-weight: 700;
	}

	@media only screen and (max-width: 768px) {
		#integrate_comp {
			display: none;
		}
	}

	#integrateWrapper {
		background-color: #f1f1f1;
		padding:          40px;
		border-radius:    10px;
	}

	@media only screen and (max-width: 768px) {
		#integrate {
			height: 110vh;
		}

		#integrateWrapper {
			background-color: #aaa;
			padding:          40px;
			border-radius:    10px;
		}
	}

</style>
