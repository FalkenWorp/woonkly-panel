import React from 'react';

const PostPills = _ => {

    return(
        <div className="__pills wrap">
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
        </div>
    );

};

export default PostPills;