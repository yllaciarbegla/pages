window.addEventListener('load', windowLoad);

function windowLoad() {

	setTimeout(function () {
		document.body.classList.add("loaded");
	}, 500);

	let body = document.querySelector('body');
	let menuIcon = document.querySelector('.menu-icon');

	// Open/close menu

	menuIcon.addEventListener('click', () => body.classList.toggle('active'));

	document.addEventListener('keydown', function (e) {
		if (e.code === 'Escape' && body.classList.contains('active')) {
			body.classList.remove('active');
		}
	});

	// Theme switch

	const html = document.documentElement;
	const saveUserTheme = localStorage.getItem('user-theme');
	const themeButton = document.querySelector('.theme-switch');

	let userTheme;
	if (window.matchMedia) {
		userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => !saveUserTheme ? changeTheme() : null);

	if (themeButton) {
		themeButton.addEventListener('click', () => {
			changeTheme(true);
		});
	}

	function setThemeClass() {
		if (saveUserTheme) {
			html.classList.add(saveUserTheme);
		} else {
			html.classList.add(userTheme);
		}
	}

	setThemeClass();

	function changeTheme(saveTheme = false) {
		let currentTheme = html.classList.contains('light') ? 'light' : 'dark';
		let newTheme;

		if (currentTheme === 'light') {
			newTheme = 'dark';
		} else if (currentTheme === 'dark') {
			newTheme = 'light';
		}
		html.classList.remove(currentTheme);
		html.classList.add(newTheme);


		saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
	}

	// Parallax background

	const parallax = document.querySelector('.parallax');

	if (parallax) {
		const targetBackground = document.querySelector('.parallax__image');

		const forTarget = 50;
		const speed = 0.05;

		let positionX = 0, positionY = 0;
		let coordXprocent = 0, coordYprocent = 0;

		function setMouseParallaxStyle() {
			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;

			positionX = positionX + (distX * speed);
			positionY = positionY + (distY * speed);

			targetBackground.style.cssText = `transform: translate(${positionX / forTarget}%,${positionY / forTarget}%);`;

			requestAnimationFrame(setMouseParallaxStyle);
		}

		setMouseParallaxStyle();

		parallax.addEventListener('mousemove', function (e) {
			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			coordXprocent = coordX / parallaxWidth * 100;
			coordYprocent = coordY / parallaxHeight * 100;
		})
	}

	//Cursor

	let aura = document.querySelector('.aura');
	let cursor = document.querySelector('.cursor');
	let activeButtons = document.querySelectorAll('.active-button');

	document.addEventListener('mousemove', function (e) {
		let x = e.clientX;
		let y = e.clientY;

		cursor.style.left = x + 'px';
		cursor.style.top = y + 'px';

		aura.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`
	});

	document.addEventListener('mousedown', () => {
		cursor.classList.add('cursorinnerhover');
	});

	document.addEventListener('mouseup', () => {
		cursor.classList.remove('cursorinnerhover');
	});

	document.addEventListener('mouseover', () => {
		cursor.classList.remove('hidden');
		aura.classList.remove('hidden');
	});

	document.addEventListener('mouseout', () => {
		cursor.classList.add('hidden');
		aura.classList.add('hidden');
	});

	activeButtons.forEach(item => {
		item.addEventListener('mouseover', () => {
			cursor.classList.add('active');
			aura.classList.add('active');
		});

		item.addEventListener('mouseout', () => {
			cursor.classList.remove('active');
			aura.classList.remove('active');
		});
	})
}

