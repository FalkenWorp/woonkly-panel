import React    from 'react';

const AsideEstimated = _ => {

    return(
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
    );

};

export default AsideEstimated;