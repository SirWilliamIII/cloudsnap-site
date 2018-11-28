<template>
	<div class="btnWrapper">
		<router-link to="agent" class="btn" id="agent-button">Learn about our Agent</router-link>
	</div>
</template>

<script>
	export default {
		name: 'AgentBtn'
	}
</script>

<style>
	#agent-button {
		background-color: #2caae0;
		font-size:        24px;
		border-radius:    10px;
		font-weight:      700;
		padding:          25px;
		color:            #ccc;
		margin-top: 10px;
	}

	#agent-button:hover {
		background-color: #0473a3;
		color:            #fff;
	}

	@media only screen and (max-width: 768px) {
		#agent-button {
			font-size: 18px;
		}
	}
</style>
