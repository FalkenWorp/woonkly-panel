/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description <CardSingle /> Component 
 * @param { String } icon: Image URL
 * @param { String } iconName: Image title and alt
 * @param { String } value: Title
 * @param { String } description: Description of the currency
*/

import React    from 'react';
import Link     from 'next/link';
import usePortal from 'react-useportal';

const CardSingle = ({ icon, iconName, value, description }) => {

    const { openPortal, closePortal, isOpen, Portal } = usePortal();

    return(
        <div className="__card column --single">
            <div className="__icon justify-center">
                <img src = { icon } alt = { iconName } />
            </div>
            <div className="white-space-16"></div>
            <h3 className="text-center weight-bold font-semi">
                { value }
            </h3>
            <div className="white-space-16"></div>
            <h4 className="text-center font-text weight-semi">
                { description }
            </h4>
            <div className="white-space-32"></div>
            <div className="btn-container justify-center">
                <button className="btn --btn-primary --margin-right-8 font-tiny color-white weight-semi"
                    onClick = { openPortal }>
                    Unstake
                </button>
                <button className="btn --btn-primary --square --margin-left-8 font-tiny color-white weight-bold"
                    onClick = { openPortal }>
                    +
                </button>
            </div>
            { isOpen &&
                <Portal>
                    <div className="modal column">
                        <div className="__container --connect column">
                            <div className="__head">
                                <div className="__title">
                                    <h4 className="weight-bold">
                                        Connect to a Wallet
                                    </h4>
                                </div>
                                <div className="__close btn-container">
                                    <button className="btn --btn-transparent weight-bold"
                                        onClick = { closePortal }>
                                        X
                                    </button>
                                </div>
                            </div>
                            <div className="white-space-24"></div>
                            <div className="__content">
                                <div className="btn-container">
                                    <button className="full align-center --btn-meta --padding-8">
                                        <span className="weight-bold font-small">
                                            Metamask
                                        </span>
                                        <div className="responsive-img">
                                            <img src="/images/metamask-logo.svg" alt="Metamask Logo"/>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="white-space-24"></div>
                            <div className="__footer">
                                <div className="row justify-center align-center">
                                    <div className="responsive-img --margin-right-8">
                                        <img src="/images/faq.svg" alt="Faq icon" />
                                    </div>
                                    <Link href = "#">
                                        <a className="weight-semi color-black">
                                            Learn how to connect
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Portal>
            }
        </div>
    );

};

export default CardSingle;