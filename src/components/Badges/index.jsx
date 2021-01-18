/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description <Badge /> Component
 * @param { String } link: URL address
 * @param { String } value: Text content
*/

import React 	from 'react';
import Link     from 'next/link';

const Badge = ({ link, value }) => {

    return (
        <div className="badge">
            { link ?
                <Link href = { link }>

                </Link> :
                <p className="text-center font-mini weight-bold color-black">
                    { value }
                </p>
            }
        </div>
    );

};

export default Badge;