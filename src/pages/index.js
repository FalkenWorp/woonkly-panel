/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Page /
*/

import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import CardSingle from 'components/Cards/Single';
import CardShared from 'components/Cards/Shared';

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
							<CardSingle icon = "/images/woop.svg" iconName = "Woop" value = "7.004" description = "Woop Bep 20 Staked" />
						</div>
						<div className="white-space-16"></div>
						<div className="cards-container wrap">
							<CardShared icon = "/images/woop.svg" iconName = "Woop" value = "7.004" description = "Woop Bep 20 Staked" badgeValue = "BEP20" isCompounded = { true } />
							<CardShared icon = "/images/bnb.svg" iconName = "Bnb" value = "7.004" description = "BNB Earned" badgeValue = "BEP20" />
							<CardShared icon = "/images/ethereum.svg" iconName = "ETH" value = "7.004" description = "ETH Earned" badgeValue = "BEP20" />
							<CardShared icon = "/images/cake.svg" iconName = "Cake" value = "7.004" description = "Woop Bep 20 Staked" badgeValue = "BEP20" />
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
