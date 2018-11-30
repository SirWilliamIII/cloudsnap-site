<template>
	<div id="btnWrapper">
		<router-link to="signup" class="btn" id="sign-up-btn">Sign Up!</router-link>
	</div>
</template>

<script>
	export default {
		name: 'SignUpBtn'
	}
</script>

<style scoped>
	#sign-up-btn {
		background-color: #ff5128;
		font-weight:      700;
		font-size:        28px;
		border-radius:    15px;
		padding:          20px 80px 20px 80px;
		color:            #fff;
	}

	#sign-up-btn:hover {
		background-color: #ff3100;
		color:            #ccc;
	}

	@media only screen and (max-width: 768px) {
		#sign-up-btn {
			font-size:     24px;
			border-radius: 10px;
			padding:       20px;
			width: 200px;
		}


	#sign-up-btn:hover {
		background-color: #ff3100;
		color:            #ccc;
	}
	}
</style>
