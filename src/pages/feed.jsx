/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Page /feed
*/

import Head from 'next/head';
import Link from 'next/link';
import Header from 'components/Header';
import Footer from 'components/Footer';

const PageFeed = _ => {

	return (
		<div className="page-feed full">
			<Head>
				<title>Woonkly - Feed</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
			</Head>
			<main className="column full">
				<Header />
				<div className="main justify-center">
					<div className="container column">
                        <div className="--stake-title-mobile column">
							<p className="font-small weight-semi color-black">
								Skate Panel
							</p>
							<div className="white-space-16"></div>
						</div>
                        <div className="row-responsive">
                            <div className="categories column">
                                <div className="__title">
                                    <span className="weight-bold">
                                        CATEGORIES
                                    </span>
                                </div>
                                <div className="white-space-16"></div>
                                <Link href = "#">
                                    <a className="weight-semi __link">
                                        Marketing
                                    </a>
                                </Link>
                                <div className="white-space-16"></div>
                                <Link href = "#">
                                    <a className="weight-semi __link">
                                        Fitness
                                    </a>
                                </Link>
                                <div className="white-space-16"></div>
                                <Link href = "#">
                                    <a className="weight-semi __link">
                                        Cryptos
                                    </a>
                                </Link>
                                <div className="white-space-16"></div>
                                <Link href = "#">
                                    <a className="weight-semi __link">
                                        Marketing
                                    </a>
                                </Link>
                                <div className="white-space-16"></div>
                                <Link href = "#">
                                    <a className="weight-semi __link">
                                        Sport
                                    </a>
                                </Link>
                                <div className="white-space-16"></div>
                                <Link href = "#">
                                    <a className="weight-semi __link">
                                        Technology
                                    </a>
                                </Link>
                                <div className="white-space-16"></div>
                                <Link href = "#">
                                    <a className="weight-semi __link">
                                        World
                                    </a>
                                </Link>
                                <div className="white-space-16"></div>
                                <Link href = "#">
                                    <a className="weight-semi __link">
                                        Space
                                    </a>
                                </Link>
                                <div className="white-space-16"></div>
                                <Link href = "#">
                                    <a className="weight-semi __link">
                                        Entertainment
                                    </a>
                                </Link>
                                <div className="white-space-16"></div>
                                <Link href = "#">
                                    <a className="weight-semi __link">
                                        Foods
                                    </a>
                                </Link>
                                <div className="white-space-16"></div>
                                <div className="__divider"></div>
                                <div className="white-space-16"></div>
                            </div>
                            <div className="feed column">
                                <div className="__post-creator column">
                                    <div className="__head row">
                                        <div className="__profile-picture responsive-img --margin-right-8">
                                            <img src="/images/profile.jpg" alt="Profile picture" />
                                        </div>
                                        <div className="input-container full">
                                            <textarea rows="5" className="full --font-roboto" placeholder="Share your Thoughts..."></textarea>
                                        </div>
                                    </div>
                                    <div className="__divider full"></div>
                                    <div className="__amount row-responsive">
                                        <div className="input-container">
                                            <input type="text" className="input-text font-tiny color-black weight-medium --font-roboto"  value = { 400 } />
                                        </div>
                                        <div className="__type-cur --margin-left-16 row align-center">
                                            <div className="__icon reponsive-img">
                                                <img src="/images/bnb.svg" alt="BNB Currency"/>
                                            </div>
                                            <p className="color-black weight-medium font-tiny --margin-left-8 --font-roboto">
                                                BNB
                                            </p>
                                        </div>
                                        <div className="input-container --margin-left-32">
                                            <input type="text" className="input-text font-tiny color-black weight-medium --font-roboto"  value = { "16,000" } />
                                        </div>
                                        <div className="__type-cur --margin-left-8 row align-center">
                                            <p className="color-black weight-medium font-tiny --margin-left-8 --font-roboto">
                                                Shares
                                            </p>
                                        </div>
                                    </div>
                                    <div className="__divider full"></div>
                                    <div className="__type row">
                                        <div className="__types">

                                        </div>
                                        <div className="__deploy">
                                            <button className="btn --btn-primary color-white">
                                                Deploy
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="aside column --margin-left-16">
                                <div className="__item row">
                                    <div className="__icon --margin-right-4">
                                        <div className="responsive-img">
                                            <img src="/images/share.svg" className="--share-icon" alt="Share icon" />
                                        </div>
                                    </div>
                                    <div className="__information column">
                                        <p className="weight-bold font-text --font-roboto">
                                            160,000  
                                        </p>
                                        <div className="white-space-4"></div>
                                        <p className="weight-regular --font-roboto">
                                            Minimum Shares estimated
                                        </p>
                                    </div>
                                </div>
                                <div className="white-space-8"></div>
                                <div className="__item row">
                                    <div className="__icon --margin-right-4">
                                        <div className="responsive-img">
                                            <img src="/images/bnb.svg" alt="Share icon" />
                                        </div>
                                    </div>
                                    <div className="__information column">
                                        <p className="weight-bold font-text --font-roboto">
                                            0.0002 
                                        </p>
                                        <div className="white-space-4"></div>
                                        <p className="weight-regular --font-roboto">
                                            BNB per Share estimated
                                        </p>
                                    </div>
                                </div>
                                <div className="white-space-8"></div>
                                <div className="__item row">
                                    <div className="__icon --margin-right-4">
                                        <div className="responsive-img">
                                            <img src="/images/bnb.svg" alt="Share icon" />
                                        </div>
                                    </div>
                                    <div className="__information column">
                                        <p className="weight-bold font-text --font-roboto">
                                            80 BNB
                                        </p>
                                        <div className="white-space-4"></div>
                                        <p className="weight-regular --font-roboto">
                                            Estimated network commision
                                        </p>
                                    </div>
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

export default PageFeed;