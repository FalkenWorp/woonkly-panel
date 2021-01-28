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
import PostPodcast  from 'components/Posts/PostPodcast';
import PostImages   from 'components/Posts/PostImages';
import PostVideo    from 'components/Posts/PostVideo';
import PostText     from 'components/Posts/PostText';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AsideEstimated from 'components/Asides/Estimated';
import AsideRecentShares from 'components/Asides/RecentsShares';

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
                        <div className="row-responsive">
                            <div className="__left-asides column">
                                <FeedCategories />
                                <AsideRecentShares />
                            </div>
                            <div className="feed column">
                                <PostCreator />
                                <div className="white-space-16"></div>
                                <PostPills />
                                <div className="white-space-16"></div>
                                <PostImage boosted = { true } />
                                <PostPodcast image = "/images/post/post-library.jpg" />
                                <PostImages images = {["/images/post/post-images-1.png", "/images/post/post-images-2.png" ] } />
                                <PostVideo image = "/images/post/post-city.jpg" />
                                <PostText />
                            </div>
                            <AsideEstimated />
                        </div>
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);

};

export default PageFeed;