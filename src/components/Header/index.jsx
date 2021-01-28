/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description <Header /> Component 
*/

import React 	from 'react';
import NavLink	from 'helpers/NavLink';
import Link 	from 'next/link';
import Badge	from 'components/Badges';
import { useDarkMode } from 'hooks/useDarkTheme';

const Header = () => {

	const [theme, toggleTheme] = useDarkMode();

	return (
		<header className = "header justify-center">
			<div className="container">
				<div className="row full">
					<div className="left full row align-center">
						<div className="__menu-hamburger">
							<button className="btn --btn-transparent">
								<img src="/images/common/menu.svg" alt="Website Menu"/>
							</button>
						</div>
						<div className="__logo">
							{ theme === 'dark' ?
								<img className="--desktop" src="/images/common/logo-dark.svg" alt="Woonkly Logo"/> :
								<img className="--desktop" src="/images/common/logo.svg" alt="Woonkly Logo"/>
							}
							<img className="--mobile" src="/images/common/logo-responsive.svg" alt="Woonkly Logo"/>
						</div>
						<div className="__section-title">
							<NavLink href = "/swap" activeClassName = "--active">
								<a className="weight-semi font-text">
									Swap
								</a>
							</NavLink>
						</div>
						<div className="__section-title">
							<NavLink href = "/" activeClassName = "--active">
								<a className="weight-semi font-text">
									Stake Panel
								</a>
							</NavLink>
						</div>
						<div className="__section-title">
							<NavLink href = "/feed" activeClassName = "--active">
								<a className="weight-semi font-text">
									Feed
								</a>
							</NavLink>
						</div>
					</div>
					<nav className="right full row align-center">
						<div className="__nav-item row align-center">
							<div className="__icon --woop responsive-img">
								<img src="/images/woop.svg" alt="Wook Icon"/>
							</div>
							<div className="--margin-left-8">
								<p className="font-text weight-semi color-black">
									560.000
								</p>
							</div>
						</div>
						<div className="__nav-item __theme row align-center">
							<button className="__icon btn --btn-transparent --sun responsive-img" 
								onClick = { _ => toggleTheme('light') }>
								<img src="/images/sun.svg" alt="Sun Icon"/>
							</button>
							<div className="__divider">
								<p className="font-text">
									/
								</p>
							</div>
							<button className="__icon btn --btn-transparent --moon responsive-img"
								onClick = { _ => toggleTheme('dark') }>
								<img src="/images/moon.svg" alt="Moon Icon"/>
							</button>
						</div>
						<div className="__nav-item __lang row align-center">
							<div className="__icon --lang responsive-img">
								<img src="/images/world-dark.svg" alt="World Icon"/>
							</div>
							<div className="--margin-left-8">
								<Link href = "/es">
									<a className="weight-semi color-black">
										ES
									</a>
								</Link>
							</div>
						</div>
						<div className="__nav-item --badge-primary row">
							<button className="btn --btn-primary color-white font-mini weight-semi">
								0x5C...213A
							</button>
						</div>
						<div className="profile-picture responsive-img">
							<img src="/images/common/mr-santos-profile.png" alt="Mr Santos Profile"/>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);

};

export default Header;