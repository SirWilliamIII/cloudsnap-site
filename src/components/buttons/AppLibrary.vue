<template>
	<a href="#" class="btn" id="app-btn">
		View complete library
	</a>
</template>

<script>
export default {
	name: 'app-btn'
}
</script>

<style scoped>
	#app-btn {
		background-color: #2caae0;
		padding:          20px;
		border-radius:    10px;
		font-weight:      700;
		font-size:        22px;
		color:            #ccc;
	}

	#app-btn:hover {
		background-color: #0473a3;
		color: #fff;
	}
</style>
