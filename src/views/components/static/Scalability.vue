<template>

	<div class="section_block text-white" id="scalability" v-bind:style="{ backgroundImage: 'url(' + scalability + ')' }">
		<div class="container" id="scaleContainer">
			<div class="col-sm-6 offset-sm-6">
				<h1 class="sectionHeader">Built to Scale</h1>
				<p class="section_sub_head">Cloudsnap is built with size in mind. It is robust and scalable to
				                            accommodate any existing database or workload.
				</p>
			</div>
		</div>
	</div>

</template>

<script>
	import scalability from '../../../assets/images/various/scalability_bg.jpg'

	export default {
		name:    'Scalability',
		data() {
			return {
			scalability
			}
		},
		methods: {}
	}
</script>

<style scoped>
	#scalability {
		background-position: right
	}

	#scaleContainer {
		text-align: center;
		background: rgba(0, 0, 0, 0) right;

	}

	.sectionHeader {
		text-align:     center;
		letter-spacing: 1px;
		color:          #333;
		z-index: 1;
	}

	.section_sub_head {
		padding-top: 10px;
		color:       #333;
		font-size:   22px;
	}

	.section_sub_head:hover {
		color: #aaa;
	}


</style>
