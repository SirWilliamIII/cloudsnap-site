/* eslint-disable */

<template>
	<div>
		<nav id="nav-bar" class="navbar navbar-expand-lg fixed-top">
			<div class="container-fluid mx-3">
				<Logo />
				<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
				        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
				        aria-label="Toggle navigation">
					<font-awesome-icon icon="bars"></font-awesome-icon>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="nav navbar-nav ml-auto" v-for="link in navLinks" v-bind:key="navLinks[link]">
						<li class="nav-item">
							<a class="nav-link js-scroll-trigger" href="#">{{ link.name }}</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	import Logo from './Logo'

	const navLinks = [
		{ name: 'App Library' },
		{ name: 'Partners' },
		{ name: 'Contact' },
		{ name: 'Free Trial' }
	]

	export default {
		name: 'Navbar',
		components: {
			Logo
		},
		data() {
			return {
				navLinks
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#nav-bar {
		-webkit-transition: all .35s;
		transition:         all .35s;
		font-family:        'Lato', 'Helvetica', 'Arial', 'sans-serif';
		font-weight:        300;
		letter-spacing:     1px;
	}

	#nav-bar .navbar-toggler {
		font-size: 18px;
		padding:   22px 20px;
		color:     #333;
	}

	#nav-bar .navbar-nav > li > a {
		font-size:      14px;
		letter-spacing: 1px;
		text-transform: uppercase;
	}

	#nav-bar .navbar-nav > li > a,
	#nav-bar .navbar-nav > li > a:focus {
		color: #fff;
	}

	#nav-bar .navbar-nav > li > a:hover,
	#nav-bar .navbar-nav > li > a:focus:hover {
		color: #ccc;
	}

	@media (min-width: 992px) {
		#nav-bar {
			border-color:     transparent;
			background-color: transparent;
		}

		#nav-bar .navbar-nav > li > a,
		#nav-bar .navbar-nav > li > a:focus {
			color: #fff;
		}

		#nav-bar .navbar-nav > li > a:hover,
		#nav-bar .navbar-nav > li > a:focus:hover {
			color: #ccc;
		}
	}
</style>
