<template>

	<div class="row" id="appCards">
		<div v-for="app in apps" :key="apps[app]">
			<div class="card">
				<img :src="app.icon.url" alt="img" class="card-img-top" id="appIcon" />
				<div class="card-body">
					<h5 class="card-title">
						{{ app.name }}
					</h5>
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
			this.loading = true
			axios.get(url).then(res => {
				console.log(res.data[0])
				this.apps = res.data
			})
				.catch(e => {
					this.errors.push(e)
				})
			this.loading = false
		}
	}
</script>

<style>
	#appCards {
		padding:    20px;
		margin:     20px;
		text-align: center;
	}

	#appIcon {
		max-height:  300px;
		width:       auto;
		padding-top: 50px;
	}

	li {
		list-style: none;
	}

	.card {
		background:   #F5F5F5;
		padding:      20px;
		column-count: 1;
		margin:       70px 20px 20px;
	}

	.card:hover {
		transform:  translateY(-0.5em);
		background: #EBEBEB;
	}

</style>
