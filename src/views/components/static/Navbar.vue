/* eslint-disable */

<template>
	<div>
		<nav id="nav-bar" class="navbar navbar-expand-md">
			<div class="container" style="display: flex;">
				<Logo class="navbar-brand" />
				<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
				        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
				        aria-label="Toggle navigation">
					<font-awesome-icon icon="bars" style="color: #fff;">
					</font-awesome-icon>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<div class="nav navbar-nav ml-auto">
						<div class="nav-item">
							<router-link to="about" class="nav-link">About</router-link>
						</div>
						<div class="nav-item">
							<router-link to="apps" class="nav-link">Apps</router-link>
						</div>
						<div class="nav-item">
							<router-link to="signup" class="nav-link">Sign Up</router-link>
						</div>
						<div class="nav-item">
							<router-link to="erps" class="nav-link">ERPs</router-link>
						</div>
						<div class="nav-item">
							<router-link to="contact" class="nav-link">Contact</router-link>
						</div>
					</div>

				</div>
				<div class="nav navbar-nav ml-auto" id="navPhoneNumWrapper">
					<p id="navPhoneNum"><i class="fa fa-phone"></i> 877.841.0203</p>
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
		{ name: 'ERPs' },
		{ name: 'Contact' }
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
<style>

	#nav-bar {
		-webkit-transition: 0.55s;
		position:           fixed;
		top:                0;
		width:              100%;
		font-family:        'Lato', 'Helvetica', 'Arial', 'sans-serif';
		font-weight:        300;
		letter-spacing:     1px;
		border-color:       transparent;
		background-color:   transparent;
		z-index:            1;
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

	.nav-link {
		color: #fff;
	}

	.nav-link:hover {
		color: #aaa;
	}

	#navPhoneNumWrapper {
		padding-left: 100px;
	}

	#navPhoneNum {
		color:       #fff;
		font-weight: 300;
		font-size:   22px;
	}

	#apps {
		text-align: center;
	}

	@media only screen and (max-width: 768px) {

		.nav-link {
			color: #fff;
		}

		.nav-link:hover {
			color: #aaa;
		}

		#navPhoneNumWrapper {
			display: none;
		}

	}

</style>
