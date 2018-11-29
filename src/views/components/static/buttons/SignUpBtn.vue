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
		padding:          35px;
		color:            #ccc;
	}

	#sign-up-btn:hover {
		background-color: #ff3100;
		color:            #fff;
	}

	@media only screen and (max-width: 768px) {
		#btnWrapper {
			margin:        80px 80px 80px 60px;
			font-size:     24px;
			border-radius: 10px;
			padding:       20px;
		}
	#sign-up-btn {
		background-color: #ff5128;
		font-weight:      700;
		font-size:        24px;
		border-radius:    15px;
		padding:          20px;
		color:            #ccc;
	}

	}
</style>
