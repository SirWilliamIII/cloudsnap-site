<template>
	<form>
		<div class="container">
			<div class="text-center my-2" style="font-size: 30px;">
				Contact Us
			</div>
			<div class="form-row">
				<div class="form-group col-md-6 offset-md-3">
					<input v-model="form.name" type="text" class="form-control" id="inputName" placeholder="Name" required>
				</div>
				<div class="form-group col-md-6 offset-md-3">
					<input v-model="form.email" type="email" class="form-control" id="inputEmail" placeholder="Email"
					       required>
				</div>
				<div class="form-group col-md-6 offset-md-3">
					<input v-model="form.password" type="password" class="form-control" id="inputPassword"
					       placeholder="Password" required>
				</div>
				<div class="form-group col-md-6 offset-md-3">
					<select id="inputState" class="form-control">
						<option disabled value="">Please Select...</option>
						<option v-for="option in options">Sales</option>
					</select>
				</div>
				<div class="form-group col-md-6 offset-md-3">
					<textarea v-model="form.message" class="form-control" placeholder="Message" required></textarea>
				</div>
				<div class="form-group col-md-2 offset-md-8">
					<button class="btn btn-outline-dark">BUTTON</button>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
	export default {
		name: 'ContactUs',
		data() {
			return {
				form: {
					name: '',
					email: '',
					password: '',
					message: ''
				}
			}
		}
	}
</script>

<style></style>
