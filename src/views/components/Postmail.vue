<template>
	<div>
		<form action="https://postmail.invotes.com/send"
    method="post" id="email_form">

    <input type="text" name="subject" placeholder="Subject" />
    <textarea name="text" placeholder="Message"></textarea>
    <input type="hidden" name="access_token" value="geuvzcp1zvzd52yx9u3qw54q" />
      <!-- return urls can be fully qualified -OR-
         start with / for root relative -OR-
         start with . for url relative -->
    <input type="hidden" name="success_url" value="/thanks" />
    <input type="hidden" name="error_url" value="/#/error/" />



			<!-- set the reply-to address -->
			<input type="text" name="will@cloudsnap.com"
			       placeholder="Email" />

			<!-- to append extra fields, use the extra_ prefix.
				Entries will be appended to your message body. -->
			<!-- <input type="text" name="extra_phone_number"
						placeholder="Phone Number" /> -->

			<!-- to split your message into 160 chars
				 for an sms gateway -->
			<!-- <input type="hidden"
						name="sms_format" value="true" /> -->

			<input id="submitForm" type="submit" value="Send" />
		</form>

	</div>
</template>

<script>

	const form = document.getElementById("emailForm")

	export default {
		name: 'Postmail',
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

<style>
</style>
