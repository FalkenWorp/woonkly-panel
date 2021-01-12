import React from 'react';

const Footer = _ => {

	return (
		<footer className = "footer justify-center">
			<div className="container">
				<div className="row-responsive full">
					<div className="left row-responsive">
						<a href="#" className="font-tiny">
                            Whitepaper
                        </a>
                        <a href="#" className="font-tiny">
                            Github
                        </a>
                        <a href="#" className="font-tiny">
                            Docs
                        </a>
                        <a href="#" className="font-tiny">
                            Terms and conditions
                        </a>
                        <a href="#" className="font-tiny">
                            Privacy Policy
                        </a>
                        <a href="#" className="font-tiny">
                            Employment
                        </a>
					</div>
					<div className="right font-tiny weight-medium">
                        <p>
                            Licensed by Estonian Law (Europe) by License FVT004340
                        </p>
                    </div>
				</div>
			
            </div>
		</footer>
	);

};

export default Footer;