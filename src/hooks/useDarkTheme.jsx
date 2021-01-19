import { useEffect, useState } from 'react';

export const useDarkMode = _ => {

  	const [theme, setTheme] = useState('light');
	const [componentMounted, setComponentMounted] = useState(false);

  	const setMode = mode => {
		window.localStorage.setItem('theme', mode);
		setTheme(mode);
  	};

  	const toggleTheme = _ => {

		const DOM = document.documentElement;
		if (theme === 'light') {
		  setMode('dark');
		  DOM.setAttribute('data-theme', 'dark');
		} else {
			setMode('light');
			DOM.setAttribute('data-theme', 'light');
		}

  	};

	useEffect(_ => {

		const DOM = document.documentElement;
		const localTheme = window.localStorage.getItem('theme');

		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme) {

			setMode('dark')
			DOM.setAttribute('data-theme', 'dark');

		} else if (localTheme) {

			setTheme(localTheme);

		} else {

			setMode('light');
			DOM.setAttribute('data-theme', 'light');

		}

		setComponentMounted(true);

	}, []);

	return [theme, toggleTheme, componentMounted];

};