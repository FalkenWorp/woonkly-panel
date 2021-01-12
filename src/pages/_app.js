/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Custom App
*/

import 'sass/style.scss';

const App = ({ Component, pageProps }) => { 

	return <Component { ...pageProps } />

};

export default App;