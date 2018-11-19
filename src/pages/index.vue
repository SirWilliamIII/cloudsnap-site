<template>
	<div>
		<app-navbar></app-navbar>
		<app-splash></app-splash>
		<app-logos></app-logos>
		<app-integrate></app-integrate>
	</div>

</template>

<script>
	import Navbar from '../components/Navbar'
	import Masthead from '../components/Masthead'
	import Logos from '../components/AppList'
	import Integrate from '../components/AppSection'

	export default {
		name:       'IndexPage',
		components: {
			'app-navbar':    Navbar,
			'app-splash':    Masthead,
			'app-logos':     Logos,
			'app-integrate': Integrate
		}
	}
</script>

<style>
</style>
