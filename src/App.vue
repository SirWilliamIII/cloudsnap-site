<template>
	<div id="app">
		<Navbar></Navbar>
		<Masthead></Masthead>
	</div>
</template>

<script>
	import Navbar from './components/Navbar'
	import Masthead from './components/Masthead'

	export default {
		name:       'app',
		components: {
			Navbar, Masthead
		}
	}
</script>

<style>
	#app {
		background-color: #ff00ff;
	}
</style>
