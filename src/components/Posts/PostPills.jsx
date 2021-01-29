import React, { Fragment } from 'react';

const PostPills = ({ isProfile = false }) => {

    return(
        <div className="__pills wrap">
            { isProfile ?
                <Fragment>
                    <div className="btn-container">
                        <button className="btn --btn-pills --active font-text weight-bold">
                            Post
                        </button>
                    </div>
                    <div className="btn-container">
                        <button className="btn --btn-pills font-text weight-medium">
                            Multimedia
                        </button>
                    </div>
                    </Fragment> :
                    <Fragment>
                    <div className="btn-container">
                        <button className="btn --btn-pills --active font-text weight-bold">
                            Explore
                        </button>
                    </div>
                    <div className="btn-container">
                        <button className="btn --btn-pills font-text weight-medium">
                            New
                        </button>
                    </div>
                    <div className="btn-container">
                        <button className="btn --btn-pills font-text weight-medium">
                            My friends
                        </button>
                    </div>
                    <div className="btn-container">
                        <button className="btn --btn-pills font-text weight-medium">
                            Favorites
                        </button>
                    </div>
                </Fragment>
            }
        </div>
    );

};

export default PostPills;