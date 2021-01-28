import React from 'react';

const PostText = ({ boosted = false }) => {

    return(
        <div className="__post --image column">
            <div className="__header row align-center">
                <div className="__author row">
                    <div className="responsive-img">
                        <img src="/images/post/mr-santos.png" alt="Author picture"/>
                    </div>
                    <div className="__name --margin-left-8">
                        <p className="color-black weight-medium --font-roboto">
                            Mr Santos
                        </p>
                    </div>
                    <div className="__verified responsive-img --margin-left-8">
                        <img src="/images/post/verified.svg" alt="Verified icon" />
                    </div>
                    <div className="__follow --margin-left-8 --margin-right-4">
                        <button className="font-tiny --font-roboto color-gold">
                            Follow  
                        </button>
                    </div>
                </div>
                <div className="__date --margin-left-8">
                    <p className="font-mini --font-roboto">
                        35 mins
                    </p>
                </div>
            </div>
            { boosted &&
                <div className="__boosted responsive-img">
                    <img src="/images/post/boosted.svg" alt="Boosted tag" />
                </div>
            }
            <div className="white-space-16"></div>
            <div className="__text">
                <p className="color-black font-text --font-roboto">
                    When mega corporations and governments decide what can and cannot be said, who can speak and who cannot, who is right and who is wrong … it is called a totalitarian regime.
                </p>
            </div>
            <div className="white-space-16"></div>
            <div className="__shares row">
                <div className="__contacts align-center full row --margin-right-16">
                    <div className="__contacts-shares row align-center">
                        <div className="__image responsive-img">
                            <img src="/images/post/contact1.png" alt="Contact 1" />
                        </div>
                        <div className="__image responsive-img">
                            <img src="/images/post/contact2.png" alt="Contact 2" />
                        </div>
                        <div className="__image responsive-img">
                            <img src="/images/post/contact3.png" alt="Contact 3" />
                        </div>
                    </div>
                    <div className="__contacts-counr">
                        <p className="--font-roboto color-black">
                            <span className="weight-bold --font-roboto --margin-left-8">
                                Yulissa Torres
                            </span>
                            <span className="font-tiny --font-roboto --margin-left-4">
                                + 3 more people
                            </span>
                        </p>
                    </div>
                </div>
                <div className="__options row">
                    <div className="btn-container --margin-right-8">
                        <button className="btn weight-semi --btn-gold color-white font-mini">
                            Share
                        </button>
                    </div>
                    <div className="btn-container --margin-rigth-8">
                        <button className="btn weight-semi --btn-primary-alt font-mini">
                            Boost
                        </button>
                    </div>
                </div> 
            </div>
            <div className="white-space-24"></div>
            <div className="__divider"></div>
            <div className="white-space-16"></div>
            <div className="__controls row-responsive">
                <div className="btn-container row">
                    <button className="--btn-controls row align-center">
                        <div className="__icon responsive-img">
                            <img src="/images/post/heart.svg" alt="Heart icon" />
                        </div>
                        <span className="font-mini --margin-left-8 --font-roboto">
                            5.6 Likes
                        </span>
                    </button>
                    <button className="--btn-controls row align-center">
                        <div className="__icon responsive-img">
                            <img src="/images/post/comments.svg" alt="Heart icon" />
                        </div>
                        <span className="font-mini --margin-left-8 --font-roboto">
                            677 Comments
                        </span>
                    </button>
                    <button className="--btn-controls row align-center">
                        <div className="__icon responsive-img">
                            <img src="/images/post/share.svg" alt="Heart icon" />
                        </div>
                        <span className="font-mini --margin-left-8 --font-roboto">
                            15.2k Shares
                        </span>
                    </button>
                    <div className="__indicator row align-center">
                        <div className="__icon responsive-img">
                            <img src="/images/post/woop.svg" alt="Heart icon" />
                        </div>
                        <span className="font-mini --margin-left-8 --font-roboto --quantity">
                            8,314 / 10,000
                        </span>
                        <span className="__progress --margin-left-8">
                            <div className="__progress-bar"></div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default PostText;