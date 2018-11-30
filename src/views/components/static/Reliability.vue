<template>
	<div class="section_block large text-white" id="reliability">
		<div class="container">
			<div class="row text-center">
				<div class="col-md-6 offset-md-3">
					<h1 class="section_header">Reliability</h1>
					<p class="section_sub_head" style="color: #fff">The Cloudsnap platform is designed with built in redundancies to ensure that all
					                                                <!-- q/a -->
						<span style="color: #4FB8E6">API
								<span class="answer">
									(An API is a tool that applications use to communicate with each other)
									<br><br><router-link to="agent">
									See how we connect to on-prem legacy apps without an API</router-link>
								</span>
                            </span><!-- end  q/a -->&nbsp;calls and workflows execute as expected.
					</p>
					<hr>
					<p class="section_text"><em>With Cloudsnap you can set it and forget it. It just works!</em>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:    'Reliability',
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style scoped>
	#reliability {
		background-image: url('../../../assets/images/various/reliability_bg.jpg');
	}

	.section_block.large {
		padding-bottom: 50px;
	}

	.section_block {
		background-size:     cover;
		background-position: center;
		padding:             50px 0;
		position:            relative;
	}


</style>
