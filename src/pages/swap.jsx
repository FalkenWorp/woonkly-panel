/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Page /swap
*/

import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';

const PageSwap = _ => {

	return (
		<div className="page-swap full">
			<Head>
				<title>Woonkly - Swap</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
			</Head>
			<main className="column full">
				<Header />
				<div className="main justify-center">
					<div className="container column justify-center align-center">
                        <div className="__card-container full justify-center">
                            <div className="__card-swap">
                                <div className="__title justify-center">
                                    <h2 className="color-black font-double">
                                        Swap
                                    </h2>
                                </div>
                                <div className="white-space-16"></div>
                                <div className="__subtitle justify-center row">
                                    <h3 className="weight-regular">
                                        Metamask Connected
                                    </h3>
                                    <div className="__icon responsive-img --margin-left-16">
                                        <img src = "/images/swap/metamask.png" alt = "Metamask Logo" />
                                    </div>
                                </div>
                                <div className="white-space-32"></div>
                                <div className="input-container column">
                                    <label htmlFor="from" className="color-black font-small">
                                        From
                                    </label>
                                    <div className="white-space-8"></div>
                                    <div className="row">
                                        <input className="input-text" type="number" name="from" placeholder = "100.000" />
                                        <select name="from_currency" id="from_currency" className="input-select font-tiny">
                                            <option value="woop">
                                                Woop - BEP 20
                                            </option>
                                            <option value="bnb">
                                                BNB - BEP 20
                                            </option>
                                            <option value="ethereum">
                                                Ethereum - ERC 20
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="white-space-8"></div>
                                <div className="justify-center">
                                    <span className="weight-bold font-large color-black">
                                        ↓
                                    </span>
                                </div>
                                <div className="input-container column">
                                    <label htmlFor="to" className="color-black font-small">
                                        To
                                    </label>
                                    <div className="white-space-8"></div>
                                    <div className="row">
                                        <input className="input-text" type="number" name="to" placeholder = "100.000" />
                                        <select name="to_currency" id="to_currency" className="input-select font-tiny">
                                            <option value="woop">
                                                Woop - BEP 20
                                            </option>
                                            <option value="bnb">
                                                BNB - BEP 20
                                            </option>
                                            <option value="ethereum">
                                                Ethereum - ERC 20
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="white-space-24"></div>
                                <div className="btn-container">
                                    <button className="btn --btn-primary --btn-swap color-white weight-bold full justify-center">
                                        SWAP
                                    </button>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);

};

export default PageSwap;
