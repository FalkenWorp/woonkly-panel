/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description <CardSingle /> Component 
 * @param { String } icon: Image URL
 * @param { String } iconName: Image title and alt
 * @param { String } value: Title
 * @param { String } description: Description of the currency
*/

import React from 'react';

const CardSingle = ({ icon, iconName, value, description }) => {

    return(
        <div className="__card column --single">
            <div className="__icon justify-center">
                <img src = { icon } alt = { iconName } />
            </div>
            <div className="white-space-32"></div>
            <h3 className="text-center font-triple">
                { value }
            </h3>
            <div className="white-space-24"></div>
            <h4 className="text-center font-regular weight-semi">
                { description }
            </h4>
            <div className="white-space-24"></div>
            <div className="btn-container justify-center">
                <button className="__btn --btn-primary --mr-8 color-white weight-semi">
                    Unstake
                </button>
                <button className="__btn --btn-primary --ml-8 color-white weight-semi">
                    +
                </button>
            </div>
        </div>
    );

};

export default CardSingle;