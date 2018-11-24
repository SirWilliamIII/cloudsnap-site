/* eslint-disable */

<template>
	<div id="contact-form" class="contact-form">
		<div class="row mx-auto">
			<div class="col-md-9">
				<h1 v-if="!messageSent" class="contact-form-title">{{ cloudsnap.title }}</h1>
				<h1 v-if="messageSent" class="contact-form-title">{{ cloudsnap.successMessage }}</h1>

				<div class="separator"></div>
				<div v-if="isSending" class="loading">Delivering Message...</div>


				<form class="form" @submit.prevent="handleSubmit" id="submitForm">
					<input
						type="text"
						name="name"
						placeholder="Name"
						v-model="contact.name">
					<input
						v-validate="{ required: true, email:true, regex: /[0-9]+/ }"
						type="email"
						name="email"
						placeholder="Email"
						v-model="contact.email"
						required
					>
					<textarea name="message"
					          v-model="contact.message"
					          rows="4"
					          placeholder="Message"
					>
					</textarea>
					<button class="button" type="submit">Send</button>
				</form>
			</div>
			<div class="col-md-3" id="sideLogos">
				<div class="col-md-12 text-center">
					<ul class="list-unstyled mb-0">
						<li class="list-item"><i class="fa fa-map-marker fa-2x"></i>
							<p>{{ cloudsnap.city }}</p>
						</li>

						<li class="list-item"><i class="fa fa-phone mt-4 fa-2x"></i>
							<p>{{ cloudsnap.phoneNum }}</p>
						</li>

						<li class="list-item"><i class="fa fa-envelope mt-4 fa-2x"></i>
							<p>{{ cloudsnap.email }}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name:    'contactForm',
		data() {
			return {
				contact:     {
					name:    '',
					email:   '',
					message: ''
				},
				cloudsnap:   {
					title:          'Contact Form',
					city:           'Austin, TX USA',
					phoneNum:       '(877) 841-0203',
					email:          'sales@cloudsnap.com',
					successMessage: 'Message Sent!'
				},
				isSending:   false,
				messageSent: false
			}
		},
		methods: {
			handleSubmit(e) {
				e.preventDefault()
				const url = 'http://localhost:3333/vets'
				this.isSending = true
				let formData = {
					name:    this.contact.name,
					email:   this.contact.email,
					message: this.contact.message,
					date:    new Date()
				}
				axios({
					method: 'post',
					url,
					data:   formData,
					config: { headers: { 'Content-Type:': 'application/json' } }
				})
					.then(res => {
						if(res.status !== 404 && this.isSending === true) {
							this.isSending = false;
							this.messageSent = true;
						}
					})
					.catch(e => {
						return e
					})
			}
		}
	}
</script>


<style>

	.contact-form {
		margin:     40px auto 0 auto;
		max-width:  720px;
		width:      100%;
		transition: 0.35s;
	}

	.contact-form .separator {
		border-bottom: solid 1px #ccc;
		margin-bottom: 30px;
		margin-left:   30px;
		margin-right:  30px;
	}

	.contact-form .form {
		display:        flex;
		flex-direction: column;
		font-size:      22px;
	}

	.contact-form-title {
		color:      #fff;
		text-align: center;
		font-size:  44px;
	}

	.contact-form input[type="email"],
	.contact-form input[type="text"],
	.contact-form textarea {
		border:        solid 1px #d0d0d0;
		font-family:   'Lato', sans-serif;
		padding:       12px 7px;
		margin-bottom: 20px;
		outline:       none;
		color:         #000;
	}

	.contact-form textarea {
		resize: none;
	}

	.contact-form .button {
		background:     #ea532a;
		border:         solid 1px #ea532a;
		color:          white;
		cursor:         pointer;
		padding:        10px 50px;
		text-align:     center;
		text-transform: uppercase;
	}

	.contact-form .button:hover {
		background: #FF5128;
		border:     solid 1px #FF5128;
	}

	.contact-form input[type="email"],
	.contact-form input[type="text"],
	.contact-form textarea,
	.contact-form .button {
		font-size:     15px;
		border-radius: 10px
	}

	#sideLogos {
		color:      #fff;
		margin-top: 50px;

	}

	@media only screen and (max-width: 768px) {
		#sideLogos {
			display: none;
		}

		.contact-form {
			margin-top:    60px;
			margin-bottom: auto;
		}

	}
</style>
