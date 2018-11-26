<template>
	<div id="bg">
		<Navbar />
		<div id="body">
			<!-- TEMPLATE HERE-->
			<main class="content">
				<!--<div class="container">-->
					<!--<div class="row">-->
						<!--<div class="col-md-12 col-xs-12">-->
							<!--<img src="../../assets/images/logos/concur-logo-wide-black.png"-->
							     <!--id="coLogo"-->
							     <!--class="img-fluid" />-->
						<!--</div>-->
					<!--</div>-->
				<!--</div>-->
				<div class="container" style="margin-top: -20px;">
                <br>
                <h2 class="section_header">Partner Benefits</h2>
                <hr>
                <h3 style="color: #2CAAE0">API Connections</h3>
                <p>
                    Unleash the power of your data and allow your applications to talk to each other with Cloudsnap platform. Remove barriers within your organization and allow information to be easily shared and consumed. Eliminate error-prone business processes such as
                    excel exports that are manually reimported into other apps.
                </p>
                <br>

                <h3 style="color: #2CAAE0">Training data integration</h3>
                <p>
                    Seamlessly integrate your learning management system (LMS) with the rest of your applications. Allow your training data to flow freely into other HR applications. Save thousands of dollars by eliminating manual data entry.
                </p>
                <br>

                <h3 style="color: #2CAAE0">Modernization of on-prem systems</h3>
                <p>
                    Rejuvenate legacy systems that are not easily connected to your newer applications. Cloudsnap is built with legacy systems in mind and has the features to build out these connections with ease. Let us save you millions in development costs when legacy
                    integration is a must.
                </p>
                <br>

                <h3 style="color: #2CAAE0">Integration with CRM apps</h3>
                <p>
                    Increase revenue by boosting the efficiency of your customer on-boarding process. Cloudsnap unleashes the functionality of apps like SalesForce and gives you the means to bring new customer data into your ERP, accounting package and project management
                    software with ease.
                </p>
            </div>
			</main>
			<nav class="sideNav">
				<ul style="list-style-type: none;">
					<li class="partnerListItem">
						Access to the Platform - which allows ability to test and build out custom connectors
					</li>
					<li class="partnerListItem">Discounted pricing</li>
					<li class="partnerListItem">Dedicated sales and support resources</li>
					<li class="partnerListItem">Monthly Webinars/Training</li>
					<li class="partnerListItem">Knowledge Based Articles</li>
					<li class="partnerListItem">Q&A Discussion Board</li>

				</ul>
			</nav>
			<aside class="ads">
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-xs-12">
							<img src="../../assets/images/logos/concur-logo-wide-black.png"
							     id="coLogo"
							     class="img-fluid" />
						</div>
					</div>
				</div>
			</aside>
			<!-- END -->
		</div>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '../components/static/Navbar'
	import Footer from '../components/static/Footer'

	export default {
		name:       'HGPage',
		components: {
			Navbar, Footer
		}
	}
</script>

<style scoped>

	#bg, #body {

		display:        flex;
		flex-direction: column;
		flex:           1;
		z-index:        0;
	}

	#body {
		margin-top: 100px;
	}

	.content {
		flex: 1;
	}

	.sideNav, .ads {
		/* 12em is the width of the columns */
		flex: 0 0 12em;
	}

	.sideNav {
		/* put the nav on the left */
		order: -1;
	}

	#coLogo {
		max-width: 400px;
	}

	.partnerListItem {

	}

	@media (min-width: 768px) {
		#body {
			flex-direction: row;
			flex:           1;
		}

		.content {
			flex: 1;
		}

		.sideNav, .ads {
			/* 12em is the width of the columns */
			flex: 0 0 12em;
		}
	}
</style>
