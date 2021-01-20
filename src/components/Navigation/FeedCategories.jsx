import React    from 'react';
import Link     from 'next/link';
import { categories } from 'static/categories.json';

const FeedCategories = _ => {

    return(
        <div className="categories column">
            <div className="__title">
                <span className="weight-bold font-text">
                    CATEGORIES
                </span>
            </div>
            { categories && categories.map((category, key) =>
                <div className="__nav-item column" key = { key }>
                    <div className="white-space-16"></div>
                    <Link href = { category.url }>
                        <a className="weight-semi font-tiny __link">
                            { category.name }
                        </a>
                    </Link>
                </div>
            )}
            <div className="white-space-16"></div>
            <div className="__divider"></div>
        </div>
    )

};

export default FeedCategories;