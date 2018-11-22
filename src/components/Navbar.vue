/* eslint-disable */

<template>
	<div>
		<nav id="nav-bar" class="navbar navbar-expand-lg fixed-top">
			<div class="container-fluid mx-3">
				<Logo />
				<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
				        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
				        aria-label="Toggle navigation">
				<font-awesome-icon icon="bars">
				</font-awesome-icon>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<div class="nav navbar-nav ml-auto">
						<div class="nav-item">
							<router-link to="about" class="nav-link js-scroll-trigger white-text">About</router-link>
						</div>
						<div class="nav-item">
							<router-link to="apps" class="nav-link js-scroll-trigger white-text">Apps</router-link>
							</div>
						<div class="nav-item">
							<router-link to="signUp" class="nav-link js-scroll-trigger white-text">Sign Up</router-link>
							</div>
						<div class="nav-item">
							<router-link to="erps" class="nav-link js-scroll-trigger white-text">ERPs</router-link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	import Logo from './Logo'

	const navLinks = [
		{ name: 'About' },
		{ name: 'Apps' },
		{ name: 'Sign Up' },
		{ name: 'ERPs' }
	]

	export default {
		name:       'Navbar',
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

	.white-text {
		color: #fff;
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
