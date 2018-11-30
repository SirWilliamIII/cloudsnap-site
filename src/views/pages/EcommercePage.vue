<template>
	<div id="bg">
		<Navbar />
		<div id="content">
			<!-- TEMPLATE HERE-->

			<div class="row mx-auto" id="ecomImgWrapper">
				<div class="container-fluid text-center">
					<div class="col-lg-12 col-xs-12">
						<img :src="EcomImg" alt="erp" class="img-fluid" id="ecomImg">
					</div>
				</div>
			</div>

			<div class="row mx-auto">
				<div class="sectionBlue">
					<div class="container text-center">
						<h3 id="otherTitle">Seamlessly automate data flow to and from your E-Commerce Application</h3>
						<p>
							With the Cloudsnap platform, it is easy to integrate apps with your e-commerce app. Whether
							it be a cloud based CRM, an eCommerce site, an Expense Management System, or on-prem
							software, you can seamlessly integrate each aspect of your business with Cloudsnap.
						</p>
					</div>
				</div>
			</div>


			<!-- END -->
			<div class="container" id="ecomWrapper">
				<div class="row mx-auto">
					<h3 id="midTitle">Immediately update data from anywhere to anywhere</h3>
				</div>
				<div class="row mx-auto">
					<div class="col-lg-3 offset-lg-1">
						<img :src="ShopifyLogo" alt="logo" class="logos">
					</div>
					<div class="col-lg-6 offset-lg-1">
						<p>Shopify is completely cloud-based and hosted, which means you don’t have to worry about
						   upgrading or maintaining software or web servers. This gives you the flexibility to access
						   and run your business from anywhere with an internet connection.
						</p>
					</div>
				</div>
				<div class="row mx-auto">
					<div class="col-lg-3 offset-lg-1">
						<img :src="BigCommerce" alt="logo" class="logos">
					</div>
					<div class="col-lg-6 offset-lg-1">
						<p>BigCommerce Enterprise features an open architecture that’s designed to seamlessly
						   integrate with your business today and grow with it in the future. Flexible APIs and webhooks make building your own integrations fast and cost effective.
						</p>
					</div>
				</div>
				<div class="row mx-auto">
					<div class="col-lg-3 offset-lg-1 col-xs-8 offset-xs-2">
						<img :src="Magento" alt="logo" class="logos">
					</div>
					<div class="col-lg-6 offset-lg-1 col-xs-8 offset-xs-2">
						<p>Magento empowers thousands of retailers and brands with the best eCommerce platforms and
						   flexible cloud solutions to rapidly innovate and grow.
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
	import EcomImg from '../../assets/images/various/e-com-connect.png'
	import BigCommerce from '../../assets/images/logos/bigcommerce-logo-wide.png'
	import Magento from '../../assets/images/logos/magento-logo-wide.png'
	import ShopifyLogo from '../../assets/images/logos/shopify-logo-white.svg'

	export default {
		name:       'EcommercePage',
		components: {
			Navbar, Footer
		},
		data() {
			return {
				EcomImg, BigCommerce, Magento, ShopifyLogo
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

	#ecomWrapper {
		background-color: #f1f1f1;
		border: 1px solid #ccc;
		border-radius: 10px;
	}

	#ecomImgWrapper {
		background-color: #fff;
		width:            100%;
	}

	#ecomImg {
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
