<template>
	<div class="container">
		<div class="row" id="rowWrapper">
			<div class="col-lg-2 col-md-2 col-xs-4" v-for="app in apps" :key="apps[app]" data-aos="zoom-in"
			     data-aos-duration="200">
				<div class="card h-70 appIconWrapper">
					<div class="card-body appIconContent my-auto">
						<h4 class="card-title">
							{{ app.name }}
						</h4>
						<br>
						<div class="card-img">
							<img :src="app.icon.url" alt="img" class="card-img-bottom" id="appIcon" />
						</div>
						<!--<div class="card-text">-->
						<!--</div>-->
						<!--<div class="card-footer">-->
						<!--</div>-->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	const url = 'https://nuvola.numanage.io/app_templates.json'

	export default {
		name: 'AppCards',
		data() {
			return {
				apps:    [],
				loading: false
			}
		},
		created() {
			const badIconIds = [137, 255, 261, 264, 271, 272, 273, 277, 281, 282, 283, 289, 294, 295, 304, 305]

			this.loading = true
			axios.get(url)
				.then(res => {
					return res.data
				})
				.then(icons => {
					icons.sort((a, b) => {
						if(a.name > b.name) {
							return 1
						} else {
							return -1
						}
					})
					return icons
				})
				.then(sortedIcons => {
					this.apps = sortedIcons
					return true
				})
				.catch(e => {
					this.errors.push(e)
				})
			this.loading = false
		}
	}
</script>

<style>
	#appIcon {
		max-width:  100px;
		max-height: 100px;
	}

	.appIconWrapper {
		margin-bottom: 20px;
		border-radius: 8px;
	}

	.appIconContent {
		border:        2px solid #29A9E0;
		border-radius: 5px;
		color:         #29A9E0;
		height:        220px;
		font-weight:   700;
	}

	.card-title {
		font-size:   15px;
		line-height: 22px;
		font-weight: 700;
	}

	#rowWrapper {
		background-color: white;
		padding:          30px;
		border-radius:    10px;
		border:           1px solid #29A9E0;
	}

	@media only screen and (max-width: 768px) {
	}

</style>
