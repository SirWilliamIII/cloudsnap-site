<template>
	<div class="container">
		<div class="row">
			<div class="col-md-10 offset-md-2">
				<div class="row">
					<div class="col-md-10" id="signUpForm">
                                <span id="signUpHeader">
									<p>Sign up for a free 30&nbsp;day&nbsp;trial</p>
									<span style="font-size:16px;">no credit card necessary)</span>
                                </span>
						<form id="contactForm">
							<h2>User Information</h2>
							<div class="row">
								<div class="col-sm-6">
									<label for="firstName">First Name:</label>
									<input name="firstName" type="text" class="inputField" id="firstName" required>
								</div>
								<div class="col-sm-6">
									<label for="lastName">Last Name:</label>
									<input name="lastName" id="lastName" type="text" class="inputField" required>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-6">
									<label for="companyName">Company Name:</label>
									<input name="companyName" type="text" id="companyName" class="inputField" required>
								</div>
								<div class="col-sm-6">
									<label>Phone Number</label>
									<input name="phone_number" type="number" id="phone_number"
									       class="inputField" required>
								</div>
							</div>


							<div class="row">
								<div class="col-sm-6">
									<label>Email</label>
									<input name="email" type="email" id="email"
									       class="inputField" required>
								</div>

								<div class="col-sm-6">
									<label>Password</label>
									<input name="password" type="password"
									       class="inputField" required>
								</div>
							</div>
							<br>
							<div class="row">
								<div class="col-sm-12">
									<h3>Get Your Custom Cloudsnap Instance</h3>
									<hr>
									<div class="row">
										<div class="col-7" style="padding-right:0;">
											<input name="corporation[subdomain]" id="subdomain" type="text"
											       placeholder="Company"
											       class="inputField"
											       required>
										</div>
										<div class="col-5" style="padding-left:0;padding-top:4px;">
											.numanage.io
										</div>
										<div class="col-12" style="font-size:13px;color:#999">Example:
											<u>companyname</u>.numanage.io
										</div>
									</div>
								</div>
							</div>
							<br>
							<input class="btn float-xs-right" type="submit" value="Submit"
							       id="submitBtn">
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SignUpForm'
	}
</script>

<style>

	#signUpForm {
		background-color: white;
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

	.inputField {
		border:        1px solid #ccc;
		border-radius: 10px;
	}

	#submitBtn {
		padding:          10px 20px 10px 20px;
		background-color: #2CAAE0;
		color:            #fff;
		border-radius:    10px;
	}
</style>
