<template>
	<div>
		<router-link to="/" class="navbar-brand p-3">
			<img :src="logo.img" alt="logo" id="logo" />
		</router-link>
	</div>
</template>

<script>
	import cloudsnapLogo from '../../../assets/images/logos/cloudsnap-logo-white.png'

	export default {
		name: 'Logo',
		data() {
			return {
				logo: {
					img: cloudsnapLogo
				}
			}
		}
	}
</script>

<style>
	#logo {
		max-width:  180px;
		max-height: 40px;
	}
</style>
