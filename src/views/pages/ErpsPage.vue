<template>
	<div id="bg">
		<Navbar />
		<div id="content">
			<!-- TEMPLATE HERE-->

			<div class="row mx-auto" id="erpImgWrapper">
				<div class="container-fluid text-center">
					<div class="col-lg-12 col-xs-12">
						<img :src="ErpImg" alt="erp" class="img-fluid" id="erpImg">
					</div>
				</div>
			</div>

			<div class="row mx-auto">
				<div class="sectionBlue">
					<div class="container text-center">
						<h3 id="otherTitle">Seamlessly automate data flow to and from your ERP</h3>
						<p>
							With the Cloudsnap platform, it is easy to integrate apps with your ERP. Whether it be a
							cloud based CRM, an eCommerce site, an Expense Management System, or on-prem software, you
							can seamlessly integrate each aspect of your business with Cloudsnap.
						</p>
					</div>
				</div>
			</div>

			<div class="row mx-auto">
				<h3 id="midTitle">Immediately update data from anywhere to anywhere</h3>
			</div>
			<!-- END -->
			<div class="container">
				<div class="row mx-auto">
					<div class="col-lg-3 offset-lg-1">
						<img :src="SalesForceLogo" alt="sflogo" class="logos">
					</div>
					<div class="col-lg-6 offset-lg-1">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto blanditiis
						   cupiditate dicta ducimus, enim est fugit illo ipsa, labore laborum officiis perferendis
						   praesentium quibusdam, quod ratione repudiandae voluptas.
						</p>
					</div>
				</div>
				<div class="row mx-auto">
					<div class="col-lg-3 offset-lg-1 col-xs-8 offset-xs-2">
						<img :src="ConcurLogo" alt="concurlogo" class="logos">
					</div>
					<div class="col-lg-6 offset-lg-1 col-xs-8 offset-xs-2">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto blanditiis
						   cupiditate dicta ducimus, enim est fugit illo ipsa, labore laborum officiis perferendis
						   praesentium quibusdam, quod ratione repudiandae voluptas.
						</p>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '../components/static/Navbar'
	import Footer from '../components/static/Footer'
	import ErpImg from '../../assets/images/various/erp-connect.png'
	import SalesForceLogo from '../../assets/images/logos/salesforce-logo.png'
	import ConcurLogo from '../../assets/images/logos/concur-logo-wide-black.png'

	export default {
		name:       'TemplatePage',
		components: {
			Navbar, Footer
		},
		data() {
			return {
				ErpImg, SalesForceLogo, ConcurLogo
			}
		}
	}
</script>

<style scoped>

	#bg, #content {

		display:        flex;
		flex-direction: column;
		flex:           1;
		z-index:        0;
	}

	#content {
		margin-top: 100px;
	}

	#erpImgWrapper {
		background-color: #fff;
		width:            100%;
	}

	#erpImg {
		margin-top:    40px;
		margin-bottom: 40px;
		width:         1000px;
	}

	#midTitle {
		font-weight: 300;
		font-size:   36px;
		margin:      30px;
	}

	.sectionBlue {
		background-color: rgba(0, 0, 0, 0);
		padding:          50px 0;
		color:            #fff;
	}

	.logos {
		max-width: 200px;
		min-width: 200px;
		padding:   20px;
	}

	@media only screen and (max-width: 768px) {

		#midTitle {
			color:       #333;
			font-size:   44px;
			font-weight: 400;
		}

		#otherTitle {
			font-size:     38px;
			font-weight:   300;
			margin-bottom: 40px;
		}

		.logos {
			max-width: 150px;
			min-width: 150px;
			padding:   10px;
		}
	}
</style>
