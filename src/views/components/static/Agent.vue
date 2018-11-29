<template>
	<div class="text-white" id="prem">
		<div class="container" id="premWrapper">
			<h1 id="premTitle">Connect all of your apps...</h1>
			<div class="row">
				<div class="col-md-6 offset-md-3 text-center">
					<h1 class="sectionHeader">On Premises</h1>
					<p class="sectionText">
						By using our secure Agent, you can connect any custom on-premises application; even legacy apps
						and apps without an API <span style="color: #2CAAE0">(An API or 'Application Program
						                                                     Interface' is a tool that applications use
						                                                     to communicate with each other)</span> <br><br>
						See how we connect to on-prem apps without an API. Breath new life into your legacy software.
						Make secure connections, even at the database level.
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4 offset-md-4 col-xs-6 offset-xs-3" data-aos="zoom-in" data-aos-easing="ease-in-sine"
		     data-aos-duration="400">
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

<style scoped>
	#prem {
		background-size: cover;
		background:      url('../../../assets/images/various/prem_bg.jpg') center;
		position:        relative;
		text-align:      center;
		height:          100vh;
	}

	#premTitle {
		text-align:  center;
		font-size:   64px;
		font-weight: 300;
	}

	.sectionHeader {
		letter-spacing: 1px;
		color:          #2CAAE0;
		text-align:     center;
		font-size:      54px;
	}

	.sectionText {
		text-align: center;
		font-size:  18px;
		margin-top: 10px;
	}

	#premWrapper {
		margin-top: 15vh;
	}

	@media only screen and (max-width: 768px) {

		#premWrapper {
			margin-top: 10vh;
		}

		#premTitle {
			text-align:  center;
			font-size:   54px;
			font-weight: 300;
		}

		.sectionHeader {
			font-size:  44px;
			margin-top: 10px;
		}

		.sectionText {
			font-size:  15px;
			margin-top: 15px;
		}
	}
</style>
