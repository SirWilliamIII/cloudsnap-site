<template>
	<section class="my-4">
		<!--Section heading-->
		<div class="row">
			<!--Grid column-->
			<div class="col-md-9 mb-md-0 mb-5">
				<form id="contact-form" action="http://localhost:3333/vets">
					<div class="form-group">
						<label for="email">Email address</label>
						<input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"
						       placeholder="Enter email" v-model="email">
						<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
						                                                   else.
						</small>
					</div>
					<p> {{ email }} {{ password }}</p>
					<div class="form-group">
						<label for="password">Password</label>
						<input type="password" id="password" class="form-control" name="password"
						       placeholder="Password" v-model="password">
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>

				<div class="text-center text-md-left">
					<a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
				</div>
				<div class="status"></div>
			</div>
			<!--Grid column-->

			<!--Grid column-->
			<div class="col-md-3 text-center">
				<ul class="list-unstyled mb-0">
					<li><i class="fa fa-map-marker fa-2x"></i>
						<p>Austin, TX USA</p>
					</li>

					<li><i class="fa fa-phone mt-4 fa-2x"></i>
						<p>(877) 841-0203</p>
					</li>

					<li><i class="fa fa-envelope mt-4 fa-2x"></i>
						<p>sales@cloudsnap.com</p>
					</li>
				</ul>
			</div>
			<!--Grid column-->

		</div>

	</section>

</template>

<script>

	export default {
		name: 'Contact',
		data() {
			return {
				email:    '',
				password: ''
			}
		}
	}

</script>

<style scoped>

</style>
