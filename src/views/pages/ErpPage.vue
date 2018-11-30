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

			<!-- END -->
			<div class="container" id="erpWrapper">
				<div class="row mx-auto">

					<div class="row mx-auto">
						<h3 id="midTitle">Immediately update data from anywhere to anywhere</h3>
					</div>
					<div class="col-lg-3 offset-lg-1">
						<img :src="Acumatica" alt="acumaticaLogo" class="logos">
					</div>
					<div class="col-lg-6 offset-lg-1">
						<p>Acumatica ERP is the fastest-growing Cloud ERP company. Acumatica delivers adaptable cloud and mobile technology
						   with a unique all-inclusive user licensing model, enabling a complete, real time view of your business anytime, anywhere.

						</p>
					</div>
				</div>

				<div class="row mx-auto">
					<div class="col-lg-3 offset-lg-1">
						<img :src="Sage" alt="sagelogo" class="logos">
					</div>
					<div class="col-lg-6 offset-lg-1">
						<p>Sage 300 ERP is a Windows based range of ERP software, available with a variety of
						   database back ends. This can run under a Windows environment and has an option of being hosted by Sage
						</p>
					</div>
				</div>
				<div class="row mx-auto">
					<div class="col-lg-3 offset-lg-1 col-xs-8 offset-xs-2">
						<img :src="SAP" alt="saplogo" class="logos">
					</div>
					<div class="col-lg-6 offset-lg-1 col-xs-8 offset-xs-2">
						<p>With SAP, to increase control over your small business with software designed to
						   grow with you. Streamline key processes, gain greater insight into your business, and make decisions based on real-time information – so you can drive profitable growth.
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
	import SAP from '../../assets/images/logos/sap-logo.png'
	import Acumatica from '../../assets/images/logos/acumatica-logo-tall.svg'
	import Sage from '../../assets/images/logos/sage_logo.svg'

	export default {
		name:       'ErpPage',
		components: {
			Navbar, Footer
		},
		data() {
			return {
				ErpImg, SAP, Acumatica, Sage
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

	#erpWrapper {
		background-color: #f1f1f1;
		border: 1px solid #ccc;
		border-radius: 10px;
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
