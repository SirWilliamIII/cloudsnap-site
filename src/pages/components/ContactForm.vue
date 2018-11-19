<template>
	<div id="contact-form" class="contact-form">
		<h1 class="contact-form_title">Contact Form</h1>
		<div class="separator"></div>
		<div v-if="isSending" class="loading">Sending...</div>

		<form class="form" @submit="onSubmit">
			<input required name="name" v-model='contact.name' placeholder="Name" type="text" autocomplete="off">
			<input required name="email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off">
			<textarea name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
			<button class="button">Send</button>
		</form>
	</div>
</template>

<script>
	export default {
		name:    'contactForm',
		data() {
			return {
				contact:   {
					name:    '',
					email:   '',
					message: ''
				},
				isSending: false
			}
		},
		methods: {
			onSubmit(e) {
				e.preventDefault()
				this.isSending = true

				setTimeout(() => {
					let form = new FormData()
					for(let field in this.contact) {
						console.log(this.contact[field])
						form.append(field, this.contact[field]);
					}
					this.http.post('http://localhost:3333/vets', form)
						.then(res => {
							console.log(res);
							this.isSending = false;
						})
						.catch(e => {
							console.log(e)
						})
				}, 1000)
			}
		}
	}
</script>


<style>

	.contact-form {
		margin:    0 auto;
		max-width: 720px;
		width:     100%;
	}

	.contact-form .separator {
		border-bottom: solid 1px #ccc;
		margin-bottom: 30px;
	}

	.contact-form .form {
		display:        flex;
		flex-direction: column;
		font-size:      22px;
	}

	.contact-form_title {
		color:      #333;
		text-align: left;
		font-size:  30px;
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
</style>
