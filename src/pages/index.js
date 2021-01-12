import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';

const PageHome = _ => {

	return (
		<div className="page-home full">
			<Head>
				<title>Woonkly - Stake Panel</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="column full">
				<Header />
				<div className="main justify-center">
					<div className="container column">
						<div className="white-space-32"></div>
						<div className="justify-center">
							<h2 className="font-double">
								You own the <span className="color-success">0.7%</span> of Woonkly net Profit
							</h2>
						</div>
						<div className="white-space-32"></div>
						<div className="justify-center">
							<div className="__card column --single">
								<div className="__icon justify-center">
									<img src="/images/woop.svg" alt="Woop Logo"/>
								</div>
								<div className="white-space-32"></div>
								<h3 className="text-center font-triple">
									7.004
								</h3>
								<div className="white-space-24"></div>
								<h4 className="text-center font-regular weight-semi">
									Woop Bep 20 Staked
								</h4>
								<div className="white-space-24"></div>
								<div className="btn-container justify-center">
									<button className="__btn --btn-primary --mr-8 color-white weight-semi">
										Unstake
									</button>
									<button className="__btn --btn-primary --ml-8 color-white weight-semi">
										+
									</button>
								</div>
							</div>
						</div>
						<div className="white-space-16"></div>
						<div className="cards-container wrap">
							<div className="__card column --badge">
								<div className="__icon justify-center">
									<img src="/images/woop.svg" alt="Woop Logo"/>
								</div>
								<div className="white-space-32"></div>
								<h3 className="text-center font-double">
									7.004
								</h3>
								<div className="white-space-16"></div>
								<h4 className="text-center font-tiny weight-semi">
									Woop Bep 20 Staked
								</h4>
								<div className="white-space-24"></div>
								<div className="btn-container justify-center">
									<button className="__btn --btn-primary --mr-8 color-white weight-semi">
										Collect
									</button>
									<button className="__btn --btn-ghost --ml-8 weight-semi color-primary">
										Compound
									</button>
								</div>
								<div className="--badge-mini row">
									<p className="color-black font-mini weight-bold">
										BEP20
									</p>
								</div>
							</div>
							
							<div className="__card column --badge">
								<div className="__icon justify-center">
									<img src="/images/bnb.svg" alt="Woop Logo"/>
								</div>
								<div className="white-space-32"></div>
								<h3 className="text-center font-double">
									7.004
								</h3>
								<div className="white-space-16"></div>
								<h4 className="text-center font-tiny weight-semi">
									BNB Earned
								</h4>
								<div className="white-space-24"></div>
								<div className="btn-container justify-center">
									<button className="__btn --btn-primary --mr-8 color-white weight-semi">
										Collect
									</button>
								</div>
								<div className="--badge-mini row">
									<p className="color-black font-mini weight-bold">
										BEP20
									</p>
								</div>
							</div>
							<div className="__card column --badge">
								<div className="__icon justify-center">
									<img src="/images/ethereum.svg" alt="Woop Logo"/>
								</div>
								<div className="white-space-32"></div>
								<h3 className="text-center font-double">
									7.004
								</h3>
								<div className="white-space-16"></div>
								<h4 className="text-center font-tiny weight-semi">
									ETH Earned
								</h4>
								<div className="white-space-24"></div>
								<div className="btn-container justify-center">
									<button className="__btn --btn-primary --mr-8 color-white weight-semi">
										Collect
									</button>
								</div>
								<div className="--badge-mini row">
									<p className="color-black font-mini weight-bold">
										BEP20
									</p>
								</div>
							</div>
							<div className="__card column --badge">
								<div className="__icon justify-center">
									<img src="/images/cake.svg" alt="Woop Logo"/>
								</div>
								<div className="white-space-32"></div>
								<h3 className="text-center font-double">
									7.004
								</h3>
								<div className="white-space-16"></div>
								<h4 className="text-center font-tiny weight-semi">
									Woop Bep 20 Staked
								</h4>
								<div className="white-space-24"></div>
								<div className="btn-container justify-center">
									<button className="__btn --btn-primary --mr-8 color-white weight-semi">
										Collect
									</button>
								</div>
								<div className="--badge-mini row">
									<p className="color-black font-mini weight-bold">
										BEP20
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="white-space-16"></div>
				<Footer />
			</main>
		</div>
	);

};

export default PageHome;
