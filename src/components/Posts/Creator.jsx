import React from 'react';

const PostCreator = _ => {

    return(
        <div className="__post-creator column">
            <div className="__head row">
                <div className="__profile-picture responsive-img --margin-right-8">
                    <img src="/images/profile.jpg" alt="Profile picture" />
                </div>
                <div className="input-container full">
                    <textarea rows="4" className="input-textarea full color-black --font-roboto" placeholder="Share your Thoughts..."></textarea>
                </div>
            </div>
            <div className="__divider full"></div>
            <div className="white-space-8"></div>
            <div className="__amount row-responsive">
                <div className="input-container">
                    <input type="text" className="input-text font-tiny color-black weight-medium" readOnly value = { 400 } />
                </div>
                <div className="row align-center --margin-left-16">
                    <div className="__icon reponsive-img">
                        <img src="/images/bnb.svg" alt="BNB Currency"/>
                    </div>
                    <p className="color-black weight-medium font-tiny --margin-left-8 --font-roboto">
                        BNB
                    </p>
                </div>
                <div className="input-container --margin-left-32">
                    <input type="text" className="input-text font-tiny color-black weight-medium" readOnly value = { "16,000" } />
                </div>
                <div className="row align-center --margin-left-8">
                    <p className="color-black weight-medium font-tiny --margin-left-8 --font-roboto">
                        Shares
                    </p>
                </div>
            </div>
            <div className="white-space-8"></div>
            <div className="__divider full"></div>
            <div className="white-space-8"></div>
            <div className="__type row align-center">
                <div className="__types row-responsive">
                    <div className="btn-container">
                        <button className="--btn-transparent --padding-8 color-black align-center">
                            <div className="__icon responsive-img --margin-right-8">
                                <img src="/images/text.svg" alt="Text type"/>
                            </div>
                            <span className="weight-semi font-text">
                                Text
                            </span>
                        </button>
                    </div>
                    <div className="btn-container">
                        <button className="--btn-transparent --padding-8 color-black align-center">
                            <div className="__icon responsive-img --margin-right-8">
                                <img src="/images/image.svg" alt="Image type"/>
                            </div>
                            <span className="weight-semi font-text">
                                Image
                            </span>
                        </button>
                    </div>
                    <div className="btn-container">
                        <button className="--btn-transparent --padding-8 color-black align-center">
                            <div className="__icon responsive-img --margin-right-8">
                                <img src="/images/video.svg" alt="Video type"/>
                            </div>
                            <span className="weight-semi font-text">
                                Video
                            </span>
                        </button>
                    </div>
                    <div className="btn-container">
                        <button className="--btn-transparent --padding-8 color-black align-center">
                            <div className="__icon responsive-img --margin-right-8">
                                <img src="/images/podcast.svg" alt="Podcast type"/>
                            </div>
                            <span className="weight-semi font-text">
                                Podcast
                            </span>
                        </button>
                    </div>
                </div>
                <div className="__deploy">
                    <button className="btn --btn-primary color-white">
                        Deploy
                    </button>
                </div>
            </div>
        </div>
    );

};

export default PostCreator;
