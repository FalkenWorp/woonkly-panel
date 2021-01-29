import React from 'react';
import { featured } from 'static/aside-featured-post.json';

const AsideFeaturedPost = () => {
    return (
        <div className="aside_featured column --margin-right-8">
            <div className="__title">
                <p className="--font-roboto weight-bold">
                    Featured Post
                </p>
            </div>
            <div className="white-space-8"></div>
            <div className="__content column">
                { featured?.map((feature, key) =>
                    <div className="__featured" key = { key }>
                        <div className="__title">
                            <p className="--font-roboto font-tiny weight-medium">
                                { feature.title }
                            </p>
                        </div>
                        <div className="__description row-responsive">
                            <p className="--font-roboto font-mini">
                                { feature.shares }
                            </p>
                            <p className="--font-roboto font-mini">
                                { feature.profits }
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default AsideFeaturedPost;