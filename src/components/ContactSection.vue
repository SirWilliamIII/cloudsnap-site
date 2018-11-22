<template>
	<div>
		<section class="cta">
			<div class="cta-content">
				<div class="container">
					<div class="row">
						<div class="col-md-4 offset-md-1">
							<h4 id="stop-waiting">
								<strong>Stop</strong> waiting. <br>
							</h4>
							<br>
							<h4 id="stop-waiting2">
								<strong>Start</strong> building.
							</h4>
							<br>
							<div>
								<a href="contact.html" class="btn btn-inverse btn-xl" id="get-started-btn">
									<p>Let's Get Started!</p>
								</a>

							</div>
						</div>
						<div class="col-md-5 offset-md-1 text-center">
							<form method="post" id="contactForm" action="https://nuvola.numanage.io/support/new"
							      style="margin-top: 50px;">
								<div class="row">
									<input type="hidden" name="category" value="19">
									<div class="col-sm-12 text-left">
										<label style="color: #fff; text-align: left;">Name</label>
										<input class="form_input" id="form_name" type="text" name="name" required>
									</div>
									<div class="col-sm-12 text-left">
										<label style="color: #fff;">Email</label>
										<input class="form_input" id="form_email" type="text" name="email" required>
									</div>
									<div class="col-sm-12 text-left">
										<label style="color: #fff;">Message</label>
										<textarea class="form_input" id="form_message" name="message"
										          required></textarea>
									</div>
									<input class="btn float-right main-blue contact-us-submit-btn" type="submit"
									       value="Contact Us!" />
								</div>

							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="overlay"></div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'ContactSection',
		data() {
			return {}
		}
	}
</script>

<style>
	section.cta {
		position:        relative;
		padding:         150px 0;
		background:      #7F7F7F center;
		background-size: cover;
	}

	section.cta .cta-content {
		position: relative;
		z-index:  1;
	}

	section.cta .cta-content h2 {
		font-size:     50px;
		max-width:     450px;
		margin-top:    0;
		margin-bottom: 25px;
		color:         white;
	}

	#stop-waiting {
		font-size:    70px;
		line-height:  70px;
		font-stretch: semi-expanded;
	}

	#stop-waiting2 {
		font-size: 70px;
	}

	#get-started-btn {
    font-size: 18px;
}

	@media only screen and (max-width: 768px) {
		section.cta {
			padding: 50px;
		}

		#stop-waiting {
			font-size:   40px;
			line-height: 30px;
			padding-top: 0px;
		}

		#stop-waiting2 {
			font-size:   40px;
			line-height: 30px;
			padding-top: 0px;
		}
	}
</style>
