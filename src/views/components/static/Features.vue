<template>
	<div class="text-white section_block large" id="features">
		<div class="container">
			<div class="row text-center" id="features-block">
				<div class="col-md-3 col-6" v-for="icon in icons" v-bind:key="icons[icon]">
					<img :src="icon.img" class="features-icon">
					<h2 class="dark-text" id="iconTitle">{{ icon.title }}</h2>
					<p class="dark-text" id="iconSubtitle">{{ icon.subtitle }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import easyImg from '../../../assets/images/icons/easy-black.png'
	import connectImg from '../../../assets/images/icons/connect-black.png'
	import wfImg from '../../../assets/images/icons/workflow-black.png'
	import hybridImg from '../../../assets/images/icons/hybrid-black.png'

	const icons = [
		{
			img:      hybridImg,
			title:    'Hybrid Integration',
			subtitle: 'Connect cloud applications & on-prem legacy applications'
		},
		{
			img:      wfImg,
			title:    'Drag and Drop Workflow Engine',
			subtitle: 'Our easy to use, drag and drop workflow creator allows you to customize your workflows'
		},
		{
			img:      easyImg,
			title:    'Dedicated to the User Experience',
			subtitle: 'Fast, Reliable, Powerful -- Connect your apps in minutes not days'
		},
		{
			img:      connectImg,
			title:    'Make Any Connection',
			subtitle: 'Choose from our connected apps or create custom connections'
		}
	]

	export default {
		name: 'features',
		data() {
			return { icons }
		}
	}
</script>

<style scoped>

	#features {
		background-color: #FFC228;
		padding-bottom:   50px;
	}

	.features-icon {
		margin-top: 50px;
	}

	#features img {
		max-height:    60px;
		max-width:     100%;
		margin-bottom: 20px;
	}

	#features p {
		margin: 0;
	}

	.dark-text {
		color: #333;
	}

	@media only screen and (max-width: 768px) {
		#features {
			height: 100vh;
		}

		.features-icon {
			margin-top: 70px;
		}

		#features img {
			max-height:    60px;
			max-width:     100%;
			margin-bottom: 10px;
		}

		#iconTitle {
			font-size: 24px;
		}

		#iconSubtitle {
			font-size: 14px;
		}
	}
</style>
