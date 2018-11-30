<template>
	<div class="text-white section_block" id="integrate">
		<div class="container" style="z-index: 2;">
			<div class="row text-center">
				<div class="col-md-6 my-auto">
					<h1 class="section_header">Integrate Seamlessly</h1>
					<h1>with the apps you already use</h1>
					<hr>
					<p class="section_text">
						Choose from our library of connected apps or create your own custom connection in minutes.
						Custom apps can be both cloud based as well as on-prem or legacy apps.
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
				bgPic
			}
		},
		methods: {}
	}
</script>

<style>
	#integrate {
		height:  70vh;
	}

	.text-white {
		color: #fff;
	}

	#integrate_comp {
		height:     100%;
		max-height: 480px;
		max-width:  620px;
		top:        0;
		right:      100px;
		z-index:    1;

	}

	.section_block {
		background-size:     cover;
		background-position: center;
		padding:             50px 0;
		position:            relative;
	}

	.section_header {
		letter-spacing: 1px;
		color:          #fff;
		text-align:     center;
	}

	@media only screen and (max-width: 768px) {
		#integrate_comp {
			display: none;
		}
	}

</style>
