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

import React from 'react';

const CardShared = ({ icon, iconName, value, description, badgeValue, isCompounded = false }) => {

    return(
        <div className="__card column --badge">
            <div className="__icon justify-center">
                <img src = { icon } alt = { iconName } />
            </div>
            <div className="white-space-32"></div>
            <h3 className="text-center font-double">
                { value }
            </h3>
            <div className="white-space-16"></div>
            <h4 className="text-center font-tiny weight-semi">
                { description }
            </h4>
            <div className="white-space-24"></div>
            <div className="btn-container justify-center">
                <button className="__btn --btn-primary --mr-8 color-white weight-semi">
                    Collect
                </button>
                { isCompounded &&
                    <button className="__btn --btn-ghost --ml-8 weight-semi color-primary">
                        Compound
                    </button>
                }
            </div>
            <div className="--badge-mini row">
                <p className="color-black font-mini weight-bold">
                    { badgeValue }
                </p>
            </div>
        </div>
    );

};

export default CardShared;