<template>
	<div class="container">
		<div class="row" id="mainRow">
			<div class="col-md-12" id="signUpForm">
                <span id="signUpHeader">
					<p>Sign up for a free 30&nbsp;day&nbsp;trial</p>
					<span style="font-size:16px;">no credit card necessary)</span>
                </span>
				<form id="contactForm">
					<h2 class="text-center">User Information</h2>
					<hr style="background-color: #333; color: #333;">
					<div class="row text-left">
						<div class="col-lg-3">
							<label>First Name:</label>
						</div>
						<div class="col-lg-3">
							<input name="firstName" type="text" class="inputField"
							       placeholder="First Name" required>
						</div>
						<div class="col-lg-3">
							<label>Last Name:</label>
						</div>
						<div class="col-lg-3">
							<input name="lastName" type="text" class="inputField"
							       placeholder="Last Name" required>
						</div>
					</div>
					<div class="row text-left">
						<div class="col-lg-3">
							<label>Company:</label>
						</div>
						<div class="col-lg-3">
							<input name="coName" type="text" class="inputField"
							       value="Company Name" required>
						</div>
						<div class="col-lg-3">

							<label>Phone Number:</label>
						</div>
						<div class="col-lg-3">
							<input name="phoneNum" type="number"
							       class="inputField" value="Phone Number" required>
						</div>
					</div>


					<div class="row text-left">
						<div class="col-lg-3">
							<label>Email:</label>
						</div>
						<div class="col-lg-3">
							<input name="email" type="email" id="email"
							       class="inputField" value="Email" required>
						</div>


						<div class="col-lg-3">
							<label>Password:</label>
						</div>
						<div class="col-lg-3">
							<input name="password" type="password"
							       class="inputField" value="password" required>
						</div>
					</div>

					<br>
					<div class="row text-left">
						<div class="col-lg-8 offset-lg-2">
							<h2 style="text-align: center;">Get Your Custom Cloudsnap Instance</h2>
							<hr style="background-color: #333; color: #333;">
							<div class="row">
								<div class="col-lg-8">
									<input name="corporation[subdomain]" id="subdomain" type="text"
									       placeholder="Company"
									       class="inputField"
									       required />
								</div>
								<div class="col-lg-4">
									.numanage.io
								</div>
								<div class="col-12" style="font-size:13px;color:#999">Example: <u>companyname</u>.numanage.io
								</div>
							</div>
							<div class="row float-right">
								<div class="col-lg-4">
									<input class="btn" type="submit" value="Submit"
									       id="submitBtn">
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
	export default {
		name: 'SignUpForm'
	}
</script>

<style>

	#signUpForm {
		background-color: #fff;
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
		padding:       5px;
		margin:        8px;
	}

	.inputField:focus {
		border:        1px solid #aaa;
		border-radius: 10px;
	}

	#submitBtn {
		padding:          20px;
		background-color: #2CAAE0;
		color:            #fff;
		border-radius:    10px;
		width: 150px;
	}

	#mainRow {
		margin-top: 50px;
	}

	@media only screen and (max-width: 768px) {
		#mainRow {
			margin-top: 0;
		}
	}

</style>
