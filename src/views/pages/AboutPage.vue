<template>
	<div id="bg">
		<Navbar />
		<div id="body">
			<!-- TEMPLATE HERE-->
			<main class="content">
				<h1>this is the holy grail main content</h1>
				<ul>
					<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum dolorum illo ipsam maiores
					    non odit qui repellat sint tenetur. Atque excepturi fuga minima nemo placeat quos reiciendis
					    repudiandae velit!
					</li>
					<li>
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequuntur
							    cum cupiditate esse eum, exercitationem explicabo illum in ipsum iure modi nesciunt odio
							    optio quam quas sunt tempora vel?
							</li>
							<li>#1</li>
						</ul>
					</li>
					<li>
						<h1>COOL</h1>
					</li>
					<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, blanditiis corporis dicta
					    dolore eaque eos esse, ex illum impedit in itaque iure magnam nesciunt pariatur sapiente
					    similique sit, suscipit voluptatum!
					</li>
				</ul>
			</main>
			<nav class="sideNav">
				<img src="../../assets/images/icons/shopify.svg" alt="">
								<img src="../../assets/images/icons/workflow_touch.png" alt="">
			</nav>
			<aside class="ads">
				<h3>ads??????????</h3>
				<ul>
					<li>
				<img src="../../assets/images/apps/Zendesk.png" alt="">
					</li>
					<li>
				<img src="../../assets/images/apps/acumatica.png" alt="">
					</li>
					<li>
				<img src="../../assets/images/apps/salesforce.jpg" alt="">
					</li>
				</ul>

			</aside>
			<!-- END -->
		</div>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '../components/static/Navbar'
	import Footer from '../components/static/Footer'

	export default {
		name:       'AboutPage',
		components: {
			Navbar, Footer
		}
	}
</script>

<style scoped>

	#bg, #body {

		display:        flex;
		flex-direction: column;
		flex:           1;
		z-index:        0;
	}

	#body {
		margin-top: 100px;
	}

	.content {
		flex: 1;
	}

	.sideNav, .ads {
		/* 12em is the width of the columns */
		flex: 0 0 12em;
	}

	.sideNav {
		/* put the nav on the left */
		order: -1;
	}

	@media (min-width: 768px) {
		#body {
			flex-direction: row;
			flex:           1;
		}

		.content {
			flex: 1;
		}

		.sideNav, .ads {
			/* 12em is the width of the columns */
			flex: 0 0 12em;
		}
	}
</style>
