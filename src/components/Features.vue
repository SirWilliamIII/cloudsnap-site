<template>
	<div class="text-white section_block large" id="features">
		<div class="container">
			<div class="row text-center" id="features-block">
				<div class="col-md-3 col-6" v-for="icon in icons" v-bind:key="icons[icon]">
					<img :src="icon.img" class="features-icon">
					<h2 class="dark-text">{{ icon.title }}</h2>
					<p class="dark-text">{{ icon.subtitle }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import easyImg from '../assets/icons/easy-black.png'
	import connectImg from '../assets/icons/connect-black.png'
	import wfImg from '../assets/icons/workflow-black.png'
	import hybridImg from '../assets/icons/hybrid-black.png'

	const icons = [
		{
			img:      easyImg,
			title:    'Dedicated to the user experience',
			subtitle: 'Fast, Reliable, Powerful -- Connect your apps in minutes not days'
		},
		{
			img:      connectImg,
			title:    'Make any connection',
			subtitle: 'Choose from our connected apps or create custom connections'
		},
		{
			img:      wfImg,
			title:    'Drag & drop workflows',
			subtitle: 'Our easy to use, drag and drop workflow creator allows you to customize your workflows'
		},
		{
			img:      hybridImg,
			title:    'Hybrid integration',
			subtitle: 'Connect cloud applications & on-prem legacy applications'
		}
	]

	export default {
		name: 'features',
		data() {
			return { icons }
		}
	}
</script>

<style>

	#features {
		background-color: #FFC228;
		padding-bottom:   100px;
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
		#features-block {
			padding-top: 0;
		}
	}
</style>
