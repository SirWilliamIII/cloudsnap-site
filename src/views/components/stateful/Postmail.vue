<template>
	<div class="contact-form">
		<form action="https://postmail.invotes.com/send" method="post" id="email_form">
			<h1 id="formTitle">Email Us</h1>
			<!-- Access Token for Postmail -->
			<input type="hidden" name="access_token" value="f9fzfpejnykpz47yzfysbasi" />
			<!-- INPUTS -->

			<input class="form-control" type="email" name="sales@cloudsnap.com"
			       placeholder="Your email address"
			       required />


			<input class="form-control" type="text" name="subject" placeholder="Subject" style="color:#333;" required />

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
		color:            #fff;
		border-radius:    10px;
		font-size:        24px;
		text-align: center;
		padding-bottom: 40px;
	}

	#submitForm:hover {
		background-color: #ff3100;
		color:            #ccc;
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

		#submitForm {
			font-size:  26px;
			color: white;
		}

		#submitForm:hover {
			color: #aaa;
		}

		#email_form {
			margin-right: 40px;
		}

	}
</style>
