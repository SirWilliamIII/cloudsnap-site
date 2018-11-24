<template>
	<div class="container">
	<div id="appsWrapperWrapper">
		<div v-for="app in apps" :key="apps[app]" id="appsWrapper">
			<div id="apps">
				<img :src="app.icon.url" alt="img" class="card-img-top" id="appIcon" />
				<div>
					<h4>
						{{ app.name }}
					</h4>
					<p>{{ (app.description).slice(0,80) }}</p>
					<p>
						<small>Last Updated: {{ (app.created_at).slice(0, 10) }}</small>
					</p>
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
		name: 'appPageLogos',
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
	#appsWrapperWrapper {
		display:     flex;
		flex-flow:   row wrap;
		margin-left: 0;
		width:       100%
	}

	#appsWrapper {
		flex:      auto;
		height:    250px;
		min-width: 250px;
		margin:    0;
	}

	#apps {
		width: 250px;
	}

	#appIcon {
		max-width:  80px;
		max-height: 80px;
	}

	@media only screen and (max-width: 768px) {
	}

</style>
