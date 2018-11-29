<template>
	<div class="container">
		<div class="row" id="mainRow">
			<div class="col-md-12" id="signUpForm">
                <span id="signUpHeader">
					<p>Sign up for a free 30&nbsp;day&nbsp;trial</p>
					<span style="font-size:16px;">(no credit card necessary)</span>
                </span>
				<form id="contactForm" @submit="onSubmit"
				      action="https://numanage.io/corporations.json"
				      method="post" style="background-color: #fff;">
					<h2 class="dark-text">User Information</h2>
					<div class="row">
						<div class="col-md-6 col-xs-6">
							<label class="dark-text">First Name:</label>
							<input class="float-right input"
							       v-model='contact.firstName'
							       name="first_name"
							       type="text"
							       id="first_name"
							       required>
						</div>
						<div class="col-xs-6 col-md-6">
							<label class="dark-text">Last Name:</label>
							<input class="float-right dark-text" v-model="contact.lastName" name="last_name" type="text"
							       id="last_name"
							       style="border: 1px solid #ccc; border-radius: 10px; width: 250px; margin-left: 20px;"
							       required>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-6 col-md-6">
							<label class="dark-text">Company Name:</label>
							<input class="float-right dark-text" v-model="contact.company_name" name="company_name" type="text"
							       id="company_name"
							       style="border: 1px solid #ccc; border-radius: 10px; width: 250px; margin-left: 20px;"
							       required>
						</div>
						<div class="col-xs-6 col-md-6">
							<label class="dark-text">Phone Number:</label>
							<input class="float-right dark-text" v-model="contact.phoneNum" name="phone_number" type="number"
							       id="phone_number"
							       style="border: 1px solid #ccc; border-radius: 10px; width: 250px; margin-left: 20px;"
							       required>
						</div>
					</div>

					<div class="row">
						<div class="col-xs-12 col-md-6">
							<label class="dark-text">Email Address:</label>
							<input
								class="float-right dark-text"
								v-model="contact.email"
								name="email"
								type="email"
								id="email"
								style="border: 1px solid #ccc; border-radius: 10px; width: 250px; margin-left: 20px;"
								required
							>
						</div>

						<div class="col-xs-6 col-md-6">
							<label class="dark-text">Password:</label>
							<input class="float-right dark-text" v-model="contact.password" name="password" type="password"
							       style="border: 1px solid #ccc; border-radius: 10px; width: 250px;
							       margin-left: 20px;" required>
						</div>
					</div>
					<br>
					<div class="row">
						<div class="col-xs-12 col-md-6">
							<h3 class="dark-text">Get Your Custom Cloudsnap Instance</h3>
							<hr>
							<div class="row">
								<div class="col-7" style="padding-right:0;">
									<input class="dark-text" v-model="contact.subdomain" name="subdomain" id="subdomain" type="text"
									       placeholder="Company" style="border: 1px solid #ccc; border-radius: 10px;"
									       required>
									<sub class="dark-text">.numanage.io</sub>
								</div>
								<div class="col-4">
									<input class="btn float-xs-right" type="submit"
									       value="Submit" id="submitBtn">
								</div>
								<div class="col-12" style="font-size:13px;color:#999">Example: <u>companyname</u>.numanage.io
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	const url = 'https://numanage.io/corporations.json'

	let contactForm = document.getElementById('contactForm')
	let serialized = JSON.stringify(contactForm)

	export default {
		name:    'SignUpForm',
		data() {
			return {
				contact: {
					first_name: '',
					last_name:  '',
					company_name:    '',
					phone_number:  '',
					email:     '',
					password:  '',
					subdomain: ''
				}
			}
		},
		methods: {
			onSubmit() {
				this.$http.post(url, serialized)
					.then(res => {
						if(res.status !== 400) {
							window.location =
								`https://${this.subdomain}.numanage.io/marketing-login?email=${this.email}`
						}
					})
					.catch(e => {
						console.log(e)
					})
			}
		}

	}
</script>

<style>

	.dark-text {
		color: #333
	}

	#signUpForm {
		background-size: cover
	}

	#sign_up_icon img {
		max-width: 60%;
		opacity:   0.5;
	}

	#contactForm {
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
		padding:          10px 20px 10px 20px;
		background-color: #ff5128;
		color:            #fff;
		margin-left:      20px;
	}

	@media only screen and (max-width: 768px) {
		#submitBtn {
			padding:          5px 5px 5px 5px;
			background-color: #ff5128;
			color:            #fff;
			margin-left:      30px;
			font-size: 80%;
		}
	}
</style>
