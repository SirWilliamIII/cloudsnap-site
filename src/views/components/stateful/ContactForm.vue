/* eslint-disable */

<template>
	<div id="contact-form" class="contact-form">
		<div class="row mx-auto" id="rowWrapper">
			<div class="col-md-10 offset-md-1 text-center">
				<h1 v-if="!messageSent" class="contact-form-title">{{ cloudsnap.title }}</h1>
				<h1 v-if="messageSent" class="contact-form-title-after">
					{{ cloudsnap.successMessage }}
				</h1>
				<p v-if="messageSent" class="lead" style="color: #fff;">
					{{ cloudsnap.successMessageSub }}
				</p>

				<div v-if="!messageSent" class="separator"></div>

				<div v-if="isSending" class="loading">Delivering Message...</div>
				<form v-if="!messageSent" class="form" @submit.prevent="handleSubmit" id="submitForm">

					<input
						class="inputField"
						type="text"
						name="name"
						placeholder="Name"
						v-model="contact.name">
					<input
						class="inputField"
						v-validate="{ required: true, email:true, regex: /[0-9]+/ }"
						type="email"
						name="email"
						placeholder="Email"
						v-model="contact.email"
						required
					>
					<textarea
						class="inputField"
						name="message"
						v-model="contact.message"
						rows="4"
						placeholder="Message"
					>
					</textarea>
					<button class="button" type="submit">Send</button>
				</form>
			</div>
			<!--<div class="col-md-3" id="sideLogos" v-if="!messageSent">-->
			<!--<div class="col-md-12 text-center">-->
			<!--<ul class="list-unstyled mb-0">-->
			<!--<li class="list-item"><i class="fa fa-map-marker fa-2x"></i>-->
			<!--<p>{{ cloudsnap.address }} {{ cloudsnap.city }}</p>-->
			<!--</li>-->

			<!--<li class="list-item"><i class="fa fa-phone mt-4 fa-2x"></i>-->
			<!--<p>{{ cloudsnap.phone }}</p>-->
			<!--</li>-->

			<!--<li class="list-item"><i class="fa fa-envelope mt-4 fa-2x"></i>-->
			<!--<p>{{ cloudsnap.email }}</p>-->
			<!--</li>-->
			<!--</ul>-->
			<!--</div>-->
			<!--</div>-->
		</div>

	</div>
</template>

<script>
	import axios from 'axios'
	import serialize from 'serialize-javascript'

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
					title:             'Contact Us!',
					address:           '701 Brazos St.',
					city:              'Austin, TX',
					phone:             '(877) 841-0203',
					email:             'sales@cloudsnap.com',
					successMessage:    'Message Sent!',
					successMessageSub: 'Thanks for the inquiry! We will contact you shortly!'
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

				serialize(formData)

				axios({
					method: 'post',
					url,
					data:   formData,
					config: { headers: { 'Content-Type:': 'application/json' } }
				})
					.then(res => {
						if(res.status !== 404 && this.isSending === true) {
							this.isSending = false
							this.messageSent = true
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
		border-bottom: solid 1px #2CAAE0;
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
		color:      #2CAAE0;
		text-align: center;
		font-size:  44px;

	}

	.contact-form-title-after {
		color:       #333;
		text-align:  center;
		font-weight: 300;
		font-size:   100px;
		margin-top:  150px;
	}

	.contact-form input[type="email"],
	.contact-form input[type="text"],
	.contact-form textarea {
		border:        solid 1px #ccc;
		font-family:   'Lato', sans-serif;
		padding:       12px 7px;
		margin-bottom: 20px;
		outline:       none;
		color:         #ccc;
	}

	.contact-form textarea {
		resize: none;
	}

	.contact-form .button {
		background:     #2CAAE0;
		border:         solid 1px #2CAAE0;
		color:          #fff;
		cursor:         pointer;
		padding:        10px 50px;
		text-align:     center;
		text-transform: uppercase;
	}

	.contact-form .button:hover {
		background: #0473A3;
		border:     solid 1px #0473A3;
		color:      #aaa;
	}

	.contact-form input[type="email"],
	.contact-form input[type="text"],
	.contact-form textarea,
	.contact-form .button {
		font-size:     15px;
		border-radius: 10px;
	}

	.contact-form input[type="email"]:focus,
	.contact-form input[type="text"]:focus,
	.contact-form textarea:focus {
		border-color: #2CAAE0;
	}

	#rowWrapper {
		background-color: #f3f3f3;
		padding:          50px;
		border-radius:    10px;
	}

	/*#sideLogos {*/
	/*color:      #fff;*/
	/*margin-top: 50px;*/

	/*}*/

	@media only screen and (max-width: 768px) {
		/*#sideLogos {*/
		/*display: none;*/
		/*}*/
		.contact-form {
			margin-top:    0;
			margin-bottom: auto;
		}

		.contact-form-title {
			margin-top: 0;
		}

		.contact-form-title-after {
			color:       #fff;
			text-align:  center;
			font-weight: 300;
			font-size:   80px;
			margin-top:  0px;
		}

	}
</style>
