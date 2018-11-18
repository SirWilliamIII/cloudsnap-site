<template>
	<div>
		<Navbar/>
		<Masthead/>
		<Integrate/>
	</div>

</template>

<script>
import Navbar from '../components/Navbar'
import Masthead from '../components/Masthead'
import Integrate from '../components/AppSection'

export default {
	name: 'IndexPage',
	components: {
		Navbar,
		Masthead,
		Integrate
	}
}
</script>

<style>
</style>
