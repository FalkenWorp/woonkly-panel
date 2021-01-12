import React from 'react';

const Header = _ => {

	return (
		<header className = "header justify-center">
			<div className="container">
				<div className="row full">
					<div className="left full row align-center">
						<div className="__logo">
							<img src="/images/logo.jpg" alt="Woonkly Logo"/>
						</div>
						<div className="__section-title">
							<p className="color-gray font-regular weight-medium">
								Stake Panel
							</p>
						</div>
					</div>
					<nav className="right full row align-center">
						<div className="__nav-item row align-center">
							<div className="__icon responsive-img">
								<img src="/images/woop.svg" alt="Wook Icon"/>
							</div>
							<div className="__score">
								<p className="weight-semi color-black">
									560.000
								</p>
							</div>
						</div>
						<div className="__nav-item --theme row align-center">
							<div className="__icon responsive-img">
								<img className="--sun" src="/images/sun.svg" alt="Sun Icon"/>
							</div>
							<div className="__divider">
								<p className="font-double color-lightgray">
									/
								</p>
							</div>
							<div className="__icon responsive-img">
								<img className="--moon" src="/images/moon.svg" alt="Moon Icon"/>
							</div>
						</div>
						<div className="__nav-item --theme row align-center">
							<div className="__icon responsive-img">
								<img src="/images/world-dark.svg" alt="World Icon"/>
							</div>
							<div className="__score">
								<p className="weight-semi color-black">
									EN
								</p>
							</div>
						</div>
						<div className="__nav-item --badge-primary row">
							<p className="color-white font-tiny weight-semi">
								0x5C...213A
							</p>
						</div>
						<div className="__nav-item --badge-mini row">
							<p className="color-black font-mini weight-bold">
								BEP20
							</p>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);

};

export default Header;