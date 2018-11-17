<template>
	<div>
		<nav id="nav-bar" class="navbar navbar-expand-lg navbar-light fixed-top">
			<div class="container">
				<a href="#" class="navbar-brand js-scroll-trigger"> <img
					src="../images/logos/cloudsnap-logo-white.png" alt="logo">Cloudsnap</a>

				<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
					data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
					aria-label="Toggle navigation">
					MENU
					<font-awesome-icon icon="bars"/>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<a class="nav-link js-scroll-trigger" href="#download">Download</a>
						</li>
						<li class="nav-item">
							<a class="nav-link js-scroll-trigger" href="#features">Features</a>
						</li>
						<li class="nav-item">
							<a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		name:  'Navbar'
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#nav-bar {
		background-color: #2CAAE0;
		max-height:       80px;
		max-width:        200px;
	}


#nav-bar {
    border-color: rgba(34, 34, 34, 0.05);
    background-color: white;
    -webkit-transition: all .35s;
    transition: all .35s;
    font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
    font-weight: 200;
    letter-spacing: 1px;
}

#nav-bar .navbar-brand {
    color: #fdcc52;
    font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
    font-weight: 200;
    letter-spacing: 1px;
}

#nav-bar .navbar-brand:hover,
#nav-bar .navbar-brand:focus {
    color: #fcbd20;
}

#nav-bar .navbar-toggler {
    font-size: 12px;
    padding: 8px 10px;
    color: #222222;
}

#nav-bar .navbar-nav>li>a {
    font-size: 11px;
    font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';
    letter-spacing: 2px;
    text-transform: uppercase;
}

#nav-bar .navbar-nav>li>a.active {
    color: #fdcc52 !important;
    background-color: transparent;
}

#nav-bar .navbar-nav>li>a.active:hover {
    background-color: transparent;
}

#nav-bar .navbar-nav>li>a,
#nav-bar .navbar-nav>li>a:focus {
    color: #222222;
}

#nav-bar .navbar-nav>li>a:hover,
#nav-bar .navbar-nav>li>a:focus:hover {
    color: #fdcc52;
}

@media (min-width: 992px) {
    #nav-bar {
        border-color: transparent;
        background-color: transparent;
    }
    #nav-bar .navbar-brand:hover,
    #nav-bar .navbar-brand:focus {
        color: white;
    }
    #nav-bar .navbar-nav>li>a,
    #nav-bar .navbar-nav>li>a:focus {
        color: rgba(255, 255, 255, 0.7);
    }
    #nav-bar .navbar-nav>li>a:hover,
    #nav-bar .navbar-nav>li>a:focus:hover {
        color: white;
    }
    #nav-bar.navbar-shrink {
        border-color: rgba(34, 34, 34, 0.1);
        background-color: white;
    }
    #nav-bar.navbar-shrink .navbar-brand {
        color: #222222;
    }
    #nav-bar.navbar-shrink .navbar-brand:hover,
    #nav-bar.navbar-shrink .navbar-brand:focus {
        color: #fdcc52;
    }
    #nav-bar.navbar-shrink .navbar-nav>li>a,
    #nav-bar.navbar-shrink .navbar-nav>li>a:focus {
        color: #222222;
    }
    #nav-bar.navbar-shrink .navbar-nav>li>a:hover,
    #nav-bar.navbar-shrink .navbar-nav>li>a:focus:hover {
        color: #fdcc52;
    }
}


</style>
