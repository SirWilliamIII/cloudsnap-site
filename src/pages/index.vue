<template>
	<div>
		<Navbar/>
		<Masthead/>
		<Logos/>
		<Integrate/>
	</div>

</template>

<script>
import Navbar from '../components/Navbar'
import Masthead from '../components/Masthead'
import Integrate from '../components/AppSection'
import Logos from '../components/AppList'

export default {
	name: 'IndexPage',
	components: {
		Navbar,
		Masthead,
		Logos,
		Integrate
	}
}
</script>

<style>
</style>
