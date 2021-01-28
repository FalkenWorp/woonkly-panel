import React    from 'react';

const AsideRecentShares = () => {
    return (
        <div className="recent-shares column">
            <div className="white-space-32"></div>
            <div className="__title">
                <span className="weight-bold font-text">
                    YOUR RECENTLY SHARED
                </span>
            </div>
            <div className="white-space-16"></div>
            <div className="__recent column">
                <div className="__item column">
                    <div className="__user">
                        <p className="weight-medium color-black font-tiny --font-roboto">
                            Mr Santos
                        </p>
                    </div>
                    <div className="white-space-4"></div>
                    <div className="__description">
                        <p className="font-mini color-black --font-roboto">
                            When mega corporations and governments decide what can and cannot be said, who…
                        </p>
                    </div>
                    <div className="white-space-16"></div>
                    <div className="__currency row">
                        <div className="__icon responsive-img">
                            <img src="/images/aside/bnb.svg" alt="Currency icon" />
                        </div>
                        <div className="__value --margin-left-8 align-center">
                            <b className="color-black weight-tiny weight-bold --font-roboto">
                                0.0002 BNB
                            </b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AsideRecentShares;