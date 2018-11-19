<template>
	<div class="about">
		<h1>What is a Crypto-Currency?</h1>
		<p>
			It's a digital currency in which encryption techniques are used to regulate the generation of units of
			currency and verify the transfer of funds, operating independently of a central bank.
		</p>
		<Contact />
	</div>
</template>

<script>
	import Contact from '../components/Contact'

	export default {
		name: 'About',
		components: {
			Contact
		}
	}
</script>
