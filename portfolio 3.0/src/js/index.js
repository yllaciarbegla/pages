function isWebp() {
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	}

	testWebP(function (support) {
		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
}

isWebp();

// To top button

const toTopButton = document.querySelector('.to-top');

toTopButton.addEventListener('click', () => {
	window.scrollTo(0, 0);
});

// Page offset for footer

const pageBottom = document.querySelector('.page__bottom');
const pageOffset = document.querySelector('.page__offset');

function offsetSize() {
	pageOffset.style.paddingBlockEnd = `${pageBottom.clientHeight}px`;
}

offsetSize();
window.addEventListener('resize', offsetSize);

// Theme switch

const themeToggler = document.querySelector('.theme-switch__button');
const themeMenu = document.querySelector('.theme-switch');
const themeList = document.querySelector('.theme-list');
const storageKey = 'theme-preference';

const openThemeMenu = () => {
	themeMenu.classList.add('theme-switch_open');
	setTimeout(() => {
		themeList.classList.add('theme-switch__list_visible');
	}, 400);
};

const closeThemeMenu = () => {
	themeList.classList.remove('theme-switch__list_visible');
	themeMenu.classList.remove('theme-switch_open');
};

themeToggler.addEventListener('click', openThemeMenu);

const getThemePreference = () => {
	if (localStorage.getItem(storageKey)) {
		return localStorage.getItem(storageKey);
	} else {
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
	}
};

const theme = {
	value: getThemePreference(),
};

const setThemeClass = () => {
	let currentThemeClass = `page_${document.documentElement.dataset.theme}`;
	let newThemeClass = `page_${theme.value}`;

	if (document.querySelector('.page').classList.contains('page_light')) {
		currentThemeClass = 'page_light';
	} else if (document.querySelector('.page').classList.contains('page_dark')) {
		currentThemeClass = 'page_dark';
	} else if (
		document.querySelector('.page').classList.contains('page_monochrome')
	) {
		currentThemeClass = 'page_monochrome';
	}

	if (
		document.querySelector('.page').classList.contains(`${currentThemeClass}`)
	)
		document.querySelector('.page').classList.remove(`${currentThemeClass}`);

	document.querySelector('.page').classList.add(`${newThemeClass}`);
};

const reflectPreference = () => {
	document.firstElementChild.setAttribute('data-theme', theme.value);

	setThemeClass();
};

const setPreference = () => {
	localStorage.setItem(storageKey, theme.value);
	reflectPreference();
};

const switchTheme = (newTheme) => {
	theme.value = newTheme;

	setPreference();
};

window.addEventListener('load', () => {
	reflectPreference();

	themeList.addEventListener('click', (e) => {
		if (e.target.classList.contains('theme-list__button')) {
			switchTheme(e.target.dataset.theme);
			closeThemeMenu();
		}
	});
});
