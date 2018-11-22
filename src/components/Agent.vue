<template>
	<div class=" section_block large text-white" id="prem">
		<div class="container">
			<h3 style="text-align:center">Connect all of your apps...</h3>
			<hr style="width:50%;">
			<div class="row">
				<div class="col-md-6 offset-md-3">
					<h1 class="section_header ">On Premises</h1>
					<p class="section_text">
						By using our secure Agent, you can connect any custom on-premises application; even legacy apps
						and apps without an <span style="color: #4FB8E6">API (An API is a tool that applications use to communicate
	                                                     with each other)
		                        <br><br>
	                            <a href="#">See how we connect to on-prem apps without an API </a>
                            </span>. Breath new life into your legacy software. Make secure connections, even at the
						database level.
					</p>
					<div class="row">
						<a href="#" class="btn" id="agent_info_button"> <span>Learn about the Cloudsnap Agent</span></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'prem',
		data() {
			return {}
		}
	}
</script>

<style>
	#prem {
		background-image: url('../assets/various/prem_bg.jpg');
	}

	.section_text {
		text-align: center;
	}

	.section_header {
		letter-spacing: 1px;
		color:          #2CAAE0;
	}
</style>
