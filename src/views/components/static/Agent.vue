<template>
	<div class="text-white" id="prem">
		<div class="container">
			<h3 style="text-align:center">Connect all of your apps...</h3>
			<div class="row">
				<div class="col-md-6 offset-md-3 text-center">
					<h1 class="section_header ">On Premises</h1>
					<p class="section_text">
						By using our secure Agent, you can connect any custom on-premises application; even legacy apps
						and apps without an API <span style="color: #2CAAE0">(An API is a tool that applications use
						                                                     to communicate with each other)</span> <br><br>
						See how we connect to on-prem apps without an API. Breath new life into your legacy software.
						Make secure connections, even at the database level.
					</p>
					<AgentBtn />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import AgentBtn from './buttons/AgentBtn'

	export default {
		name:       'prem',
		components: {
			AgentBtn
		}
	}
</script>

<style>
	#prem {
		background-size: cover;
		background:      url('../../../assets/images/various/prem_bg.jpg') center;
		position:        relative;
		padding:         50px 0;
		text-align:      center;
	}

	.section_text {
		text-align: center;
	}

	.section_header {
		letter-spacing: 1px;
		color:          #2CAAE0;
		text-align:     center;
	}
</style>
