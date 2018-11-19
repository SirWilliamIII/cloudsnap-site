<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
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
		font-family:           'lato';
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
		overflow-x:              hidden;
		width:                   100%;
		height:                  100%;
		margin:                  0;
		padding:                 0;
		font-family:             'Lato', Arial, sans-serif;
		-webkit-font-smoothing:  antialiased;
		-moz-osx-font-smoothing: grayscale;
		color:                   #333;
		background:              url("assets/various/bg-pattern.png"), #52B9E6;
		background:              url("assets/various/bg-pattern.png"), -webkit-gradient(linear, right top, left top, from(#52B9E6), to(#0473A3));
		background:              url("assets/various/bg-pattern.png"), linear-gradient(to left, #52B9E6, #0473A3);

	}
</style>
