import React from 'react';

const ProfileHead = _ => {

    return(
        <div className="profile_head column">
            <div className="__head row">
                <div className="__quick full column">
                    <div className="__image responsive-img">
                        <img src="/images/profile/profile-image.png" alt = "Profile picture" />
                    </div>
                    <div className="white-space-8"></div>
                    <div className="__name row align-center">
                        <h2 className="--font-roboto font-medium">
                            Mr Santos
                        </h2>
                        <img src="/images/profile/verified.svg" alt="Verified Status" className="--margin-left-8 --verified" />
                    </div>
                    <div className="white-space-4"></div>
                    <div className="__location">
                        <p className="--font-roboto font-tiny">
                            Madrid España
                        </p>
                    </div>
                </div>
                <div className="__edit full">
                    <div className="btn-container">
                        <button className="btn --btn-ghost font-tiny color-primary weight-semi --font-roboto">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
            <div className="__footer wrap">
                <div className="__info align-center row">
                    <p className="__value weight-bold --font-roboto">
                        245K
                    </p>
                    <p className="__description --font-roboto">
                        Followers
                    </p>
                </div>
                <div className="__info align-center row">
                    <p className="__value weight-bold --font-roboto">
                        134
                    </p>
                    <p className="__description --font-roboto">
                        Following
                    </p>
                </div>
                <div className="__info align-center row">
                    <p className="__value weight-bold --font-roboto">
                        0.210 BNB
                    </p>
                    <p className="__description --font-roboto">
                        Distributed
                    </p>
                </div>
                <div className="__info align-center row">
                    <p className="__value weight-bold --font-roboto">
                        12.5K BNB
                    </p>
                    <p className="__description --font-roboto">
                        Amount won
                    </p>
                </div>
            </div>
            <div className="white-space-8"></div>
        </div>
    );

};

export default ProfileHead;