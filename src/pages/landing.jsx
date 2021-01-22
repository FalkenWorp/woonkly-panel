import React from 'react';
import Head from 'next/head';
import Header from 'components/Header/Landing';

const PageLanding = _ => {
    return (
        <div className="page-stake full">
			<Head>
				<title>Woonkly - Stake Panel</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
			</Head>
			<main className="column full">
				<Header />
				<div className="main justify-center">
                </div>
            </main>
        </div>
    );
};
 
export default PageLanding;