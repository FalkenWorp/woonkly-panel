import React from 'react';

const AsideMyBalances = () => {
    return (
        <div className="aside_my-balance column --margin-right-8">
            <div className="__head row align-center">
                <div className="__title">
                    <p className="weight-medium --font-roboto">
                        My Balances
                    </p>
                </div>
                <div className="__option">
                    <div className="btn-container">
                        <button className="btn --btn-transparent justify-center color-primary font-text">
                            Add
                        </button>
                    </div>
                </div>
            </div>
            <div className="white-space-8"></div>
            <div className="__balance row">
                <div className="__icon responsive-img">
                    <img src="/images/aside/woop.svg" alt = "Balance Icon" className="--woop" />
                </div>
                <div className="__value">
                    <p className="--font-roboto font-tiny weight-semi">
                        143,000
                    </p>
                </div>
            </div>
            <div className="__balance row">
                <div className="__icon responsive-img">
                    <img src="/images/aside/bnb.svg" alt = "Balance Icon" className="--bnb" />
                </div>
                <div className="__value">
                    <p className="--font-roboto font-tiny weight-semi">
                        345
                    </p>
                </div>
            </div>
            <div className="__balance row">
                <div className="__icon responsive-img">
                    <img src="/images/aside/eth.svg" alt = "Balance Icon" />
                </div>
                <div className="__value">
                    <p className="--font-roboto font-tiny weight-semi">
                        24
                    </p>
                </div>
            </div>
            <div className="__all">
                <div className="btn-container full justify-center">
                    <button className="btn --btn-transparent full justify-center color-primary font-text">
                        View all
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default AsideMyBalances;