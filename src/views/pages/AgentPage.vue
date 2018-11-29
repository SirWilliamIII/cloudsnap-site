<template>
	<div id="bg">
		<Navbar />
		<div id="content">
			<!-- TEMPLATE HERE-->
			<div id="agentLanding">
				<div class="container">
					<div class="row text-center">
						<div class="col-md-6 offset-md-6 wh-bg-on-sm">
							<h1 class="headerText">The Cloudsnap</h1>
							<h1 class="headerText ex_lr">Agent</h1>
							<img class="headerText" :src="images.agent" id="headerImg">
							<h3 class="headerText" id="connectAnything">connect anything</h3>
							<br>
						</div>
					</div>
				</div>
			</div>
			<div id="appSection">
				<div class="container">
					<div class="row">
						<div class="col-sm-6">
							<div class="row text-center" id="iconImgs">
								<div class="col-md-4 col-xs-4 icons">
									<img :src="images.wrench">
									<h5 class="iconSubtext">Connect any application</h5>
								</div>
								<div class="col-md-4 col-xs-4 icons">
									<img :src="images.noApi">
									<h5 class="iconSubtext">No API necessary</h5>
								</div>
								<div class="col-md-4 col-xs-4 icons">
									<img :src="images.rocket">
									<h5 class="iconSubtext">Make your apps come alive!</h5>
								</div>
							</div>
						</div>
						<div class="col-sm-5 offset-sm-1">
							<p>
								{{ text.main }}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="container" id="agentTitleWrapper">
				<br>
				<h2 id="agentTitle">The Cloudsnap Agent uses shared TLS certificates over&nbsp;WebSockets.
				</h2>
			</div>

			<div class="sectionBlock" id="configurableBlock">
				<div class="container">
					<div class="row text-center">
						<div class="col-sm-7">
							<h1 class="sectionHead">Highly Configurable</h1>
							<p class="sectionText">You are in complete control of what goes into the Agent and what
							                       comes out. Set which databases, tables, or queries the Agent has
							                       access to. You command what it can read and what it can write.
							</p>
						</div>
						<div class="col-sm-5">
							<img :src="images.configurable" id="configureBlock">
						</div>
					</div>
				</div>
			</div>
			<div class="sectionBlock" id="secureBlock">
				<div class="container">
					<div class="row text-center">
						<div class="col-sm-5">
							<img :src="images.secure" id="secureImg">
						</div>
						<div class="col-sm-7">
							<h1 class="sectionHead">Highly Secure</h1>
							<p class="sectionText">Since the Cloudsnap Agent lives and is setup on premise, no
							                       authentication ever leaves the facility. The only access the
							                       Cloudsnap system has to your data is what you tell the Agent to
							                       supply.
							</p>
						</div>
					</div>
				</div>
			</div>
			<!-- END -->
		</div>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '../components/static/Navbar'
	import Footer from '../components/static/Footer'

	import secure from '../../assets/images/icons/secure.png'
	import configurable from '../../assets/images/icons/configure.png'
	import agent from '../../assets/images/icons/agent.png'
	import wrench from '../../assets/images/icons/wrench.png'
	import noApi from '../../assets/images/icons/no_api.png'
	import rocket from '../../assets/images/icons/rocket.png'

	const images = { secure, configurable, agent, wrench, noApi, rocket }

	export default {
		name:       'AgentPage',
		components: {
			Navbar, Footer
		},
		data() {
			return {
				images,
				text: {
					main:
						'Connect to the applications you have on premises with the Cloudsnap Agent. Your apps don\'t need to have an API and they can even be legacy applications. You don\'t have to change your existing apps, just install the agent and let it do the work for you! We found that customers who use this increase the ROI of their legacy apps by 300%.'
				}

			}
		}
	}
</script>

<style scoped>

	#bg, #content {
		display:        flex;
		flex-direction: column;
		flex:           1;
		z-index:        0;
	}

	#content {
		margin-top: 100px;
	}

	#agentLanding {
		background-image: url('../../assets/images/various/agent_bg.jpg');
		background-size:  cover;
		padding:          50px 0;
		border-bottom:    1px solid #333;
	}

	.headerText {
		color:      #333;
		margin-top: 20px;
	}

	#headerImg {
		width: 200px;
	}

	#appSection {
		margin-top: 50px;
		padding:    50px 0;
		color:      white;
	}

	.icons img {
		margin-bottom: 15px;
		height:        75px;
	}

	.icons {
		padding: 10px 10px 0 10px;
	}

	.sectionHead,
	.sectionText {
		text-align: center;
	}

	.sectionHead {
		letter-spacing: 1px;
		color:          #333;
	}

	.sectionBlock {
		background-size:     cover;
		background-position: center;
		padding:             50px 0;
		position:            relative;
	}

	#secureImg {
		max-width: 150px;
	}

	#secureBlock {
		background-color: #f3f3f3;
	}

	#configureBlock {
		max-width: 150px;
	}

	#agentTitle {
		margin-top:  10px;
		font-weight: 300;
	}

	#configurableBlock {
		background-color: #fff;
	}

	#agentTitleWrapper {
		background-color: #fff;
		text-align:       center;
		margin-top:       60px;
		border-top:       1px solid #333;
		border-left:       1px solid #333;
		border-right:       1px solid #333;

	}

	@media only screen and (max-width: 768px) {

		#agentLanding {
			background-image: none;
			background-size:  cover;
			color:            #fff;
			margin-top:       20px;
			padding:          0;
		}

		.headerText {
			color: #fff;
		}

		#connectAnything {
			display: none;
		}

		#headerImg {
			display: none;
		}

		.icons img {
			margin-bottom: 15px;
			height:        60px;
		}

		.icons {
			padding: 10px;
		}

		#iconImgs {
			margin-bottom: 50px;
		}

		#appSection {
			margin-top: 0;
		}

		.iconSubtext {
			font-size: 16px;
		}
	}


</style>
