<template>
	<footer class="footer">
		<div class="container-fluid">
			<div class="row" style="padding-top: 15px;">
				<div class="col-md-4 text-center col-xs-4">
					<a href="mailto:sales@cloudsnap.com" id="sales_email">{{ cloudsnap.email }}</a>
				</div>
				<div class="col-md-4 col-xs-4 text-center">
					<a href="https://www.facebook.com/Cloudsnap-719145441790767/?modal=admin_todo_tour" target="_blank"
					   class="social-icon"> <i class="fa fa-facebook-square" aria-hidden="true"></i> </a> <a
					href="https://www.linkedin.com/company/cloudsnapconnect/ " target="_blank" class="social-icon"> <i
					class="fa fa-linkedin-square" aria-hidden="true"></i></a> <a href="https://twitter.com/Cloudsnap2"
					                                                             target="_blank" class="social-icon"> <i
					class="fa fa-twitter-square" aria-hidden="true"></i> </a>
				</div>
				<div class="col-md-4 text-center col-xs-4">
					<a href="tel:+18778410203" id="sales_phone">{{ cloudsnap.phoneNum }}</a>
				</div>
			</div>
			<div class="row">
				<div class="text-center col-md-12 col-xs-12" id="footer-address">
					<p>{{ cloudsnap.address }}<br> <sub> <i class="fa fa-copyright"></i> {{ cloudsnap.copywrite }}
					</sub>
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	const cloudsnap = {
		email:     'sales@cloudsnap.com',
		phoneNum:  '(877) 841-0203',
		address:   '701 Brazos Street Austin, Texas 78701 ',
		copywrite: ' Cloudsnap | All Rights Reserved '
	}

	export default {
		name: 'Footer',
		data() {
			return {
				cloudsnap
			}
		}
	}
</script>


<style scoped>
	footer {
		background-color: rgba(0, 0, 0, 0);
		font-weight:      100;
		width:            100%;
		position:         fixed;
		left:             0;
		bottom:           0;
	}

	footer a {
		color: #fff;
	}

	footer a:hover {
		color: #ccc;
	}

	.social-icon {
		margin-left:  10px;
		margin-right: 10px;
		font-size: 200%;
	}

	#sales_phone {
		font-size: 100%;
	}

	#sales_email {
		font-size: 100%;
	}

	#footer-address {
		font-size: 80%;
		padding:   5px;
		color:     white;
	}

	@media only screen and (max-width: 768px) {
	}


</style>
