/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Page /
*/

import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import CardSingle from 'components/Cards/Single';
import CardLarge  from 'components/Cards/Large';

const PageHome = _ => {

	return (
		<div className="page-stake full">
			<Head>
				<title>Woonkly - Stake Panel</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
			</Head>
			<main className="column full">
				<Header />
				<div className="main justify-center">
					<div className="container column justify-center align-center">
						<div className="white-space-32"></div>
						<div className="--stake-title-mobile column">
							<p className="font-small weight-semi color-black text-left">
								Skate Panel
							</p>
							<div className="white-space-16"></div>
						</div>
						<div className="__main-title justify-center">
							<h2 className="font-double text-center">
								You own the <span className="color-success">0.7%</span> of Woonkly net Profit
							</h2>
						</div>
						<div className="white-space-32"></div>
						<div className="__cards-container row">
							<CardSingle icon = "/images/woops.svg" iconName = "Woop" value = "7.004" description = "Woop Bep 20 Staked" />
							<div className="column --column --margin-left-16">
								<CardLarge icon = "/images/woop.svg" iconName = "Woop" value = "345" description = "Woop Earned" badgeValue = "BEP20" isCompounded = { true } />
								<div className="white-space-16 --hidden-mobile"></div>
								<CardLarge icon = "/images/bnb.svg" iconName = "BNB" value = "2.42" description = "BNB Earned" badgeValue = "BEP20" isCompounded = { true } />
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
