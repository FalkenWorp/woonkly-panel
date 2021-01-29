/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Page /profile
*/

import Head from 'next/head';
import PostCreator  from 'components/Posts/Creator';
import PostPills    from 'components/Posts/PostPills';
import PostImage    from 'components/Posts/PostImage';
import PostPodcast  from 'components/Posts/PostPodcast';
import PostImages   from 'components/Posts/PostImages';
import PostVideo    from 'components/Posts/PostVideo';
import PostText     from 'components/Posts/PostText';
import AsideMyBalances  from 'components/Asides/MyBalances';
import AsideFollowing   from 'components/Asides/Followings';
import ProfileHead      from 'components/Profile/Head';
import AsideFeaturedPost from 'components/Asides/FeaturedPost';
import Header from 'components/Header';
import Footer from 'components/Footer';


const PageProfile = _ => {

	return (
		<div className="page-profile full">
			<Head>
				<title>Woonkly - My profile</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
			</Head>
			<main className="column full">
				<Header showProfile = { true } />
				<div className="main justify-center">
					<div className="container column">
                        <div className="row-responsive --to-column-mobile">
                            <div className="__left-asides column">
                                <AsideMyBalances />
                                <div className="white-space-16"></div>
                                <AsideFollowing title = "Following" value = { 345 } moreText = "See all followers" />
                            </div>
                            <div className="feed column">
                                <ProfileHead />
                                <div className="white-space-16"></div>
                                <PostCreator />
                                <div className="white-space-16"></div>
                                <PostPills isProfile = { true } />
                                <div className="white-space-16"></div>
                                <PostImage boosted = { true } />
                                <PostPodcast image = "/images/post/post-library.jpg" />
                                <PostImages images = {["/images/post/post-images-1.png", "/images/post/post-images-2.png" ] } />
                                <PostVideo image = "/images/post/post-city.jpg" />
                                <PostText />
                            </div>
                            <div className="__right-asides">
                                <AsideFeaturedPost />
                                <div className="white-space-16"></div>
                                <AsideFollowing title = "Your Match" value = { 345 } moreText = "See all matches" />
                            </div>
                        </div>
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);

};

export default PageProfile;