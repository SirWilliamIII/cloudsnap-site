<template>
	<div class="contact-form">
		<form action="https://postmail.invotes.com/send" method="post" id="email_form">
			<h1 id="formTitle">Email Us</h1>
			<!-- Access Token for Postmail -->
			<input type="hidden" name="access_token" value="geuvzcp1zvzd52yx9u3qw54q" />
			<!-- INPUTS -->

					<input class="form-control" type="email" name="sales@cloudsnap.com"
					       placeholder="Your email address"
					       required />


					<input class="form-control" type="text" name="subject" placeholder="Subject" required />

				<textarea class="form-control" name="text" placeholder="Message" rows="4" required></textarea>

				<input id="submitForm" type="submit" value="Send" class="btn form-control" />
			<!-- INPUTS END-->
			<input type="hidden" name="success_url" value="/#/thanks" />
			<input type="hidden" name="error_url" value="/#/error/" />
		</form>
	</div>
</template>

<script>

	const form = document.getElementById("emailForm")

	export default {
		name: 'Postmail',
		data() {
			return {
				emailValue: ''
			}
		},
		created() {
			const submitButton = document.getElementById("submitForm")
			form.addEventListener("submit", function (e) {
				setTimeout(() => {
					submitButton.value = "Sending..."
					submitButton.disabled = true
				}, 1)
			})
		}
	}
</script>

<style scoped>

	#submitForm {
		background-color: #ff5128;
		font-weight:      700;
		color:            #ccc;
		border-radius:    10px;
		font-size:        24px;
		margin-top:       10px;
		padding:          20px;
	}

	#submitForm:hover {
		background-color: #ff3100;
		color:            #fff;
	}

	#formTitle {
		color:         #fff;
		font-size:     66px;
		margin-bottom: 20px;
		margin-top:    30px;
	}

	@media only screen and (max-width: 768px) {
		#formTitle {
			color:          #fff;
			font-size:      44px;
			padding-bottom: 10px;
			padding-top:    10px;
		}

		.inputWidth {
		}

		#submitForm {
			font-size:  18px;
			margin-top: 10px;
		}

		#email_form {
			margin-right: 40px;
		}

	}
</style>
