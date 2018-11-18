<template>
	<div>
		<Navbar/>
		<Masthead/>
	</div>

</template>

<script>
	import Navbar from '../components/Navbar'
	import Masthead from '../components/Masthead'

	export default {
		name:       'IndexPage',
		components: {
			Navbar, Masthead
		}
	}
</script>

<style>

</style>
