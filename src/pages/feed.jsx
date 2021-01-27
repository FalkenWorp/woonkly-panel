/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Page /feed
*/

import Head from 'next/head';
import FeedCategories from 'components/Navigation/FeedCategories';
import PostCreator  from 'components/Posts/Creator';
import PostPills    from 'components/Posts/PostPills';
import PostImage    from 'components/Posts/PostImage';
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
				<Header showProfile = { true } />
				<div className="main justify-center">
					<div className="container column">
                        <div className="--stake-title-mobile column">
							<p className="font-small weight-semi color-black">
								Feed
							</p>
							<div className="white-space-16"></div>
						</div>
                        <div className="row-responsive">
                            <FeedCategories />
                            <div className="feed column">
                                <PostCreator />
                                <div className="white-space-16"></div>
                                <PostPills />
                                <div className="white-space-16"></div>
                                <PostImage boosted = { true } />
                                <PostImage />
                                <PostImage />
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