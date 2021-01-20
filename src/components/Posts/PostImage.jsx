import React from 'react';
import Badge from 'components/Badges';

const PostImage = _ => {

    return(
        <div className="__post --highlight --image column">
            <div className="__header row align-center">
                <div className="__date">
                    <p className="font-mini --font-roboto">
                        1 day ago
                    </p>
                </div>
                <div className="__currency">
                    <div className="row">
                        <div className="__icon align-center responsive-img --margin-right-8">
                            <img src="/images/woop.svg" alt="Woop Icon" />
                        </div>
                        <Badge value = "BEP20" />
                    </div>
                </div>
            </div>
            <div className="white-space-16"></div>
            <div className="__text">
                <p className="color-black font-text --font-roboto">
                    When mega corporations and governments decide what can and cannot be said, who can speak and who cannot, who is right and who is wrong … it is called a totalitarian regime.
                </p>
            </div>
            <div className="white-space-16"></div>
            <div className="__image responsive-img">
                <img src="/images/post-image-min.jpg" alt="Post picture" />
            </div>
            <div className="white-space-32"></div>
            <div className="__footer row-responsive">
                <div className="__author align-center full row --margin-right-16">
                    <div className="__author-share row align-center">
                        <div className="responsive-img">
                            <img src="/images/author-thumb.jpg" alt="Author picture"/>
                        </div>
                        <div className="name --margin-left-8">
                            <p className="color-black --font-roboto">
                                Mr Santos
                            </p>
                        </div>
                    </div>
                    <div className="__shares">
                        <p className="--font-roboto">
                            34.5K Shares
                        </p>
                    </div>
                </div>
                <div className="__options row">
                    <div className="btn-container --margin-right-8">
                        <button className="btn weight-semi --btn-primary color-white font-mini">
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
            <div className="white-space-16"></div>
        </div>
    );

};

export default PostImage;