<template>
	<div class="container">
		<div class="row" id="mainRow">
			<div class="col-md-8 offset-md-2 col-xs-10 offset-xs-1" id="signUpForm">
                <span id="signUpHeader">
					<p>Sign up for a free 30&nbsp;day&nbsp;trial</p>
					<span style="font-size:16px;">(no credit card necessary)</span>
                </span>
				<form id="contactFormEls" style="background-color: #fff;" @submit.prevent="onSubmit">
					<h2 class="dark-text text-center">User Information</h2>
					<div class="row">
						<div class="col-md-6 col-xs-12">
							<label for="first_name" class="dark-text">First Name:</label>
							<input class="dark-text inputField form-control"
							       v-model='contact.first_name'
							       name="first_name"
							       type="text"
							       id="first_name"
							       required
							/>
						</div>
						<div class="col-xs-12 col-md-6">
							<label class="dark-text">Last Name:</label>
							<input class="dark-text inputField form-control"
							       v-model="contact.last_name"
							       name="last_name"
							       type="text"
							       id="last_name"
							       required
							/>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 col-md-6">
							<label class="dark-text">Company Name:</label>
							<input class="dark-text inputField form-control"
							       v-model="contact.company_name"
							       name="company_name"
							       type="text"
							       id="company_name"
							       required
							/>
						</div>
						<div class="col-xs-12 col-md-6">
							<label class="dark-text">Phone Number:</label>
							<input class="dark-text inputField form-control"
							       v-model="contact.phone_number"
							       name="phone_number"
							       type="number"
							       id="phone_number"
							       required
							/>
						</div>
					</div>

					<div class="row">
						<div class="col-xs-12 col-md-6">
							<label class="dark-text">Email Address:</label>
							<input
								class="dark-text inputField form-control"
								v-model="contact.email"
								name="email"
								type="email"
								id="email"
								required
							/>
						</div>
						<div class="col-xs-12 col-md-6">
							<label class="dark-text">Password:</label>
							<input class="dark-text inputField form-control"
							       v-model="contact.password"
							       name="password"
							       type="password"
							       required
							/>
						</div>
					</div>
					<br>
					<div class="row">
						<div class="col-xs-12 col-md-12">
							<h3 class="dark-text text-left">Get Your Custom Cloudsnap Instance</h3>
							<hr>
							<div class="row">
								<div class="col-xs-10 col-md-12">
									<div style="display: flex; justify-content: space-between;">
										<input
											class="dark-text inputField form-control"
											v-model="contact.subdomain"
											name="corporation[subdomain]"
											id="subdomain"
											type="text"
											placeholder="Company"
											required
										/>
										<p style="margin-top: 20px;" id="smallText">.numanage.io</p>
										<input class="dark-text inputField" type="submit"
										       value="Submit" id="submitBtn" />
									</div>

								</div>
							</div>
							<div class="row">
								<sub> Example: companyname.numanage.io </sub>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:    'SignUpForm',
		data() {
			return {
				contact: {
					first_name:   '',
					last_name:    '',
					company_name: '',
					phone_number: '',
					email:        '',
					password:     '',
					subdomain:    ''
				}
			}
		},
		methods: {
			onSubmit: function (e) {
				e.preventDefault()
				var email = $('#email').val().toLowerCase();
				$('#email').val(email)

				var subdomain = $('#subdomain').val()
				var email = $('#email').val()
				var url = "https://numanage.io/corporations.json"; // the script where you handle the form input.
				var data = $("#contactFormEls").serialize()

				$.ajax({
					type:    "POST",
					url:     url,
					data:    data, // serializes the form's elements.
					success: function (data) {
						window.location = "https://" + subdomain + ".numanage.io/marketing-login?email=" + email
					},
					error:   function (xhr) {
						console.log(xhr)
					}
				})


				$('#corporation_name').keyup(function () {
					var str = $('#corporation_name').val();
					var new_val = str.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '').toLowerCase()
					$('#subdomain').val(new_val)
				})


				$('#subdomain').keyup(function () {
					console.log("down")
					var str = $('#subdomain').val();
					var new_val = str.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '').toLowerCase()

					if(/^[a-z0-9]*$/.test(str) == false) {
						console.log("subdomain error")
						$('#subdomain_warning').css("color", "red")
						$('#subdomain_warning').css("font-weight", "bold")
						$('#subdomain').val(new_val)

					} else {
						$('#subdomain_warning').css("color", "#999999")
						$('#subdomain_warning').css("font-weight", "300")

					}


				})

				e.preventDefault();
			}
		}

	}
</script>

<style scoped>

	.dark-text {
		color: #333
	}

	#signUpForm {
		background-size: 480px 720px;
	}

	#sign_up_icon img {
		max-width: 60%;
		opacity:   0.5;
	}

	#contactFormEls {
		padding: 20px 60px 40px 60px;
	}

	#signUpHeader {
		background-color: #29A9E0;
		color:            white;
		width:            calc(100% + 30px);
		margin-left:      -15px;
		display:          block;
		padding:          25px 25px 10px 25px;
		font-weight:      100;
		font-size:        200%;
		letter-spacing:   3px;
		text-align:       center;
	}

	#signUpHeader p {
		margin-bottom: -15px;
	}

	#signUpHeader span {
		line-height: 0;
		margin-top:  0;
	}

	#submitBtn {
		background-color: #ff5128;
		color:            #fff;
		padding:          20px;
		border-radius:    10px;
		font-size:        16px;
		margin-bottom:    20px;
		max-width:        150px;
	}

	.inputField {
		border:        1px solid #aaa;
		border-radius: 10px;
		margin-left:   20px;
		color: #aaa
	}

	.inputField:focus {
		border-color: #2CAAE0;
		color: #333;
	}

	@media only screen and (max-width: 768px) {
		#submitBtn {
			background-color: #ff5128;
			color:            #fff;
			border-radius:    5px;
			font-size:        16px;
			padding: 10px;
		}

		.inputField {
			margin-left: 0;
			width:       auto;
		}

		#smallText {
			display: none;
		}
	}
</style>
