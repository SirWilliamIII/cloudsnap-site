<template>
	<router-link to="agent" class="btn" id="agent-button">Learn about the Cloudsnap Agent</router-link>
</template>

<script>
	export default {
		name: 'AgentBtn'
	}
</script>

<style>
	#agent-button {
		background-color: #2caae0;
		font-size:        22px;
		border-radius:    10px;
		font-weight:      700;
		padding:          20px;
		color:            #ccc;
	}

	#agent-button:hover {
		background-color: #0473a3;
		color:            #fff;
	}

	@media only screen and (max-width: 768px) {

	}
</style>
