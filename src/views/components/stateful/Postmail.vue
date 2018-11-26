<template>
	<div class="contact-form">
		<form action="https://postmail.invotes.com/send" method="post" id="email_form">
			<h1 class="title">Email Us</h1>

			<!-- Access Token for Postmail -->
			<input type="hidden" name="access_token" value="geuvzcp1zvzd52yx9u3qw54q" />
			<!-- INPUTS -->
			<div class="row">
				<input class="inputWidth" type="email" name="will@cloudsnap.com"
				       placeholder="Your email address"
				       required />

				<input class="inputWidth" type="text" name="subject" placeholder="Subject" required />

				<textarea class="inputWidth" name="text" placeholder="Message" rows="4" required></textarea>

				<input id="submitForm" type="submit" value="Send" class="btn inputWidth" />
			</div>
			<!-- INPUTS END-->

			<!-- return urls can be fully qualified -OR-
			   start with / for root relative -OR-
			   start with . for url relative -->
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
		padding:          15px;
		width:            600px;
	}

	#submitForm:hover {
		background-color: #ff3100;
		color:            #fff;
	}

	.title {
		color:          #fff;
		font-size:      54px;
		padding-bottom: 30px;
		margin-top:     60px;

	}

	.inputWidth {
		width: 600px;
	}

	@media only screen and (max-width: 768px) {

		.title {
			color:          #fff;
			font-size:      36px;
			padding-bottom: 15px;
			margin-left:    120px;
			margin-top:     30px;
		}

		.inputWidth {
			width:       240px;
			margin-left: 80px;
		}

		#submitForm {

			border-radius: 10px;
			font-size:     18px;
			padding:       10px;
			width:         240px;
		}

	}

</style>
