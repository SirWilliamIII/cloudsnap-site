<template>
	<div id="bg">
		<Navbar />
		<div id="body">
			<!-- TEMPLATE HERE-->
			<main class="content">
				<h1>this is the holy grail main content</h1>
			</main>
			<nav class="sideNav">
				side nav
			</nav>
			<aside class="ads">
				ads??????????
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
		name:       'HGPage',
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
