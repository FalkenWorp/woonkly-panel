import React    from 'react';
import Link     from 'next/link';

const AsideFollowing = ({ title, value, moreText }) => {
    return (
        <div className="aside_following column --margin-right-8">
            <div className="__head row align-center">
                <div className="__title">
                    <p className="weight-medium --font-roboto">
                        { title }
                    </p>
                </div>
                <div className="__option">
                    <p className="--font-roboto font-tiny weight-medium">
                        { value }
                    </p>
                </div>
            </div>
            <div className="white-space-8"></div>
            <div className="__content">
                <div className="__follow column">
                    <div className="__icon full responsive-img">
                        <img src="/images/aside/following1.png" alt = "Follower" className="--image" />
                        <img src="/images/aside/verified.svg" alt = "Verified Icon" className="--verified" />
                    </div>
                    <div className="__name">
                        <Link href = "/">
                            <a className="--font-roboto font-mini text-center">
                                Luis Mendez
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="__follow column">
                    <div className="__icon full responsive-img">
                        <img src="/images/aside/following2.png" alt = "Follower" className="--image" />
                        <img src="/images/aside/verified.svg" alt = "Verified Icon" className="--verified" />
                    </div>
                    <div className="__name">
                        <Link href = "/">
                            <a className="--font-roboto font-mini text-center">
                                Luis Mendez
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="__follow column">
                    <div className="__icon full responsive-img">
                        <img src="/images/aside/following3.png" alt = "Follower" className="--image" />
                        <img src="/images/aside/verified.svg" alt = "Verified Icon" className="--verified" />
                    </div>
                    <div className="__name">
                        <Link href = "/">
                            <a className="--font-roboto font-mini text-center">
                                Luis Mendez
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="__follow column">
                    <div className="__icon full responsive-img">
                        <img src="/images/aside/following3.png" alt = "Follower" className="--image" />
                        <img src="/images/aside/verified.svg" alt = "Verified Icon" className="--verified" />
                    </div>
                    <div className="__name">
                        <Link href = "/">
                            <a className="--font-roboto font-mini text-center">
                                Luis Mendez
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="__follow column">
                    <div className="__icon full responsive-img">
                        <img src="/images/aside/following2.png" alt = "Follower" className="--image" />
                        <img src="/images/aside/verified.svg" alt = "Verified Icon" className="--verified" />
                    </div>
                    <div className="__name">
                        <Link href = "/">
                            <a className="--font-roboto font-mini text-center">
                                Luis Mendez
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="__follow column">
                    <div className="__icon full responsive-img">
                        <img src="/images/aside/following1.png" alt = "Follower" className="--image" />
                        <img src="/images/aside/verified.svg" alt = "Verified Icon" className="--verified" />
                    </div>
                    <div className="__name">
                        <Link href = "/">
                            <a className="--font-roboto font-mini text-center">
                                Luis Mendez
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="__all">
                <div className="btn-container full justify-center">
                    <button className="btn --btn-transparent full justify-center color-primary font-text">
                        { moreText }
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default AsideFollowing;