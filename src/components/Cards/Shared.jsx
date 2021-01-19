/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description <CardShare /> Component 
 * @param { String } icon: Image URL
 * @param { String } iconName: Image title and alt
 * @param { String } value: Title
 * @param { String } description: Description of the currency
 * @param { String } badgeValue: Badge content
 * @param { Boolean } isCompounded: Allow the compound button
*/

import React    from 'react';
import Link     from 'next/link';
import Bagde    from 'components/Badges';
import usePortal from 'react-useportal';

const CardShared = ({ icon, iconName, value, description, badgeValue, isCompounded = false }) => {

    const { openPortal, closePortal, isOpen, Portal } = usePortal();

    return(
        <div className="__card column --small">
            <div className="__icon justify-center">
                <img src = { icon } alt = { iconName } />
            </div>
            <div className="white-space-16"></div>
            <h3 className="text-center weight-bold font-medium">
                { value }
            </h3>
            <div className="white-space-8"></div>
            <h4 className="text-center font-tiny weight-semi">
                { description }
            </h4>
            <div className="white-space-24"></div>
            <div className="btn-container --compound justify-center">
                <button className="btn --btn-primary --margin-right-4 color-white weight-semi" 
                    onClick = { openPortal }>
                    Collect
                </button>
                { isCompounded &&
                    <button className="btn --btn-ghost --margin-left-4 color-primary weight-semi">
                        Compound
                    </button>
                }
            </div>
            <Bagde value = { badgeValue } />
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

export default CardShared;