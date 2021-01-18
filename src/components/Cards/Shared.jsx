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
import Bagde from 'components/Badges';

const CardShared = ({ icon, iconName, value, description, badgeValue, isCompounded = false }) => {

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
                <button className="btn --btn-primary --margin-right-4 color-white weight-semi">
                    Collect
                </button>
                { isCompounded &&
                    <button className="btn --btn-ghost --margin-left-4 color-primary weight-semi">
                        Compound
                    </button>
                }
            </div>
            <Bagde value = { badgeValue } />
        </div>
    );

};

export default CardShared;