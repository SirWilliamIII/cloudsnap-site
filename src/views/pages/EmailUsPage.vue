<template>
	<div id="bg">
		<Navbar />
		<div id="content">
			<!-- TEMPLATE HERE-->
			<div class="container" id="mailWrapper">
				<div class="row">
					<div class="col-lg-12">
						<Postmail />
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
	import Postmail from '../components/stateful/Postmail'

	export default {
		name:       'EmailUsPage',
		components: {
			Navbar, Footer, Postmail
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
		margin-top: 80px;
	}

</style>
