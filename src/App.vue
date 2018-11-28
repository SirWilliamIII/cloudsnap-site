<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	let prevScrollpos = window.pageYOffset;
	const app_id = 'qrls8x48'
	export default {
		name:      'app',
		created() {
			Intercom('boot', {app_id})
			window.addEventListener('scroll', this.handleScroll)
		},
		mounted() {
			Intercom("boot", {
				app_id
			})
			Intercom("show")
		},
		watch:     {
			email: email => {
				Intercom("update", { email })
			}
		},
		methods:   {
			handleScroll: e => {
				// document -> main object of rendered DOM
				// window === root object === gets loaded first in browser === visible part in browser
				// window props: length, innerWidth, innerHeight

				e.preventDefault()
				const nav = document.getElementById('nav-bar')
				let currentScrollPos = window.pageYOffset
				let bodyHeight = document.body.offsetHeight

				if((innerHeight + currentScrollPos) >= bodyHeight - 2) {
					nav.style.top = '0'
				} else if(prevScrollpos > currentScrollPos) {
					nav.style.top = '0'
				} else {
					nav.style.top = '-95px'
				}
				prevScrollpos = currentScrollPos;
				if(prevScrollpos > '95') {
					nav.style.backgroundColor = '#333'
				} else {
					nav.style.backgroundColor = 'rgba(0, 0, 0, 0)'
				}
			}
		},
		destroyed: () => {
			Intercom('shutdown')
			window.removeEventListener('scroll', this.handleScroll)
		}
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Lato:300,400,400i,700');

	h1,
	h2,
	h3,
	h4,
	h5,
	p {
		font-family:           'lato', "Avenir Next", sans-serif;
		font-feature-settings: "liga" 0;
	}

	h1 {
		font-weight: 300;
		color:       #fff;
		font-size:   82px;
	}

	h2 {
		font-weight: 300;
	}

	#app {
		display:                 flex;
		min-height:              100vh;
		flex-direction:          column;
		overflow-x:              hidden;

		font-family:             'Lato', 'Avenir Next', Arial, sans-serif;
		-webkit-font-smoothing:  antialiased;
		-moz-osx-font-smoothing: grayscale;
		color:                   #333;
		background:              url("assets/images/various/bg-pattern.png"), -webkit-gradient(linear, right top, left top, from(#52B9E6), to(#0473A3));
		background:              url("assets/images/various/bg-pattern.png"), linear-gradient(to left, #52B9E6, #0473A3);
	}
</style>
