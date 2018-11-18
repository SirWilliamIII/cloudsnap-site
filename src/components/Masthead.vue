<template>
	<header class="masthead">
		<div class="container h-100">
			<div class="row h-100">
				<div class="col-lg-12 my-auto">
					<div class="row">
						<div class="col-lg-6 my-auto">
							<div class="header-content mx-auto">
								<h1 class="mb-5">Connect your apps in a <strong>snap</strong>
								</h1>
								<a href="#" class="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
							</div>
						</div>
						<div class="col-lg-5 my-auto">
							<img src="../assets/various/header_comp.png" alt="header-comp" style="max-height: 360px;">
						</div>
					</div>
				</div>
			</div>
		</div>
			<SignUpBtn/>
			<AgentBtn/>
	</header>

</template>


<script>
import SignUpBtn from './buttons/SignUp'
import AgentBtn from './buttons/Agent'
export default {
	name: 'Masthead',
	components: {
		SignUpBtn,
		AgentBtn
	}
}
</script>


<style scoped>
.masthead {
	position: relative;
	width: 100%;
	padding-top: 150px;
	padding-bottom: 100px;
	color: white;
	background: url('../assets/various/bg-pattern.png'), #52b9e6;
	background: url('../assets/various/bg-pattern.png'),
		-webkit-gradient(linear, right top, left top, from(#52b9e6), to(#0473a3));
	background: url('../assets/various/bg-pattern.png'),
		linear-gradient(to left, #52b9e6, #0473a3);
}

.masthead .header-content {
	max-width: 500px;
	margin-bottom: 100px;
	text-align: center;
}

@media (min-width: 992px) {
	.masthead {
		height: 100vh;
		min-height: 775px;
		padding-top: 0;
		padding-bottom: 0;
	}

	.masthead .header-content {
		margin-bottom: 0;
		text-align: left;
	}
}
</style>
