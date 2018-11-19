<template>
	<footer class="footer">
		<div class="container-fluid">
			<div class="row" style="padding-top: 15px;">
				<div class="col-md-4 text-center col-xs-4 footer-link" style="color:#fff">
					<a href="mailto:sales@cloudsnap.com" id="sales_email">sales@cloudsnap.com</a>
				</div>
				<div class="col-md-4 col-xs-4 text-center footer-link">
					<a href="https://www.facebook.com/Cloudsnap-719145441790767/?modal=admin_todo_tour" target="_blank"
					   class="social-icon"> <i class="fa fa-facebook-square" aria-hidden="true"></i> </a> <a
					href="https://www.linkedin.com/company/cloudsnapconnect/ " target="_blank" class="social-icon"> <i
					class="fa fa-linkedin-square" aria-hidden="true"></i></a> <a href="https://twitter.com/Cloudsnap2"
					                                                             target="_blank" class="social-icon"> <i
					class="fa fa-twitter-square" aria-hidden="true"></i> </a>
					<!-- <a href="https://plus.google.com/117394247437473667113 " target="_blank "> <i class="fa fa-google-plus-square " aria-hidden="true "></i></a> -->
				</div>
				<div class="col-md-4 text-center footer-link col-xs-4">
					<a href="tel:+18778410203" id="sales_phone">(877) 841-0203</a>
				</div>
			</div>
			<div class="row">
				<div class="text-center col-md-12 col-xs-12" id="footer_address">
					<p>701 Brazos Street Austin, Texas 78701 <br> <sub> &copy; Cloudsnap | All Rights reserved </sub>
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>


<style scoped>
	footer {
		background:     url('../assets/various/bg-pattern.png'), -webkit-gradient(linear, right top, left top, from(#52b9e6), to(#0473a3));
		font-weight:      100;
		position:         absolute;
		width:            100%;
		height:           120px;
	}

	footer .fa {
		font-size: 200%;
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
	}

	#sales_phone {
		font-size: 100%;
	}

	#sales_email {
		font-size: 100%;
	}


	#footer_address {
		font-size: 80%;
		padding:   5px;
		color:     white;
	}

	@media only screen and (max-width: 768px) {

		.footer {
			height:      140px;
			line-height: 1;
		}
	}


</style>
