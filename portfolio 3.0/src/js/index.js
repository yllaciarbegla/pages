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

// Theme switch

const themeToggler = document.querySelector('.theme-toggler');

themeToggler.addEventListener('click', (e) => {
	e.target.classList.toggle('theme-toggler_dark');
});

// Page offset for footer

const pageBottom = document.querySelector('.page__bottom');
const pageOffset = document.querySelector('.page__offset');

function offsetSize() {
	pageOffset.style.paddingBlockEnd = `${pageBottom.clientHeight}px`;
}

offsetSize();
window.addEventListener('resize', offsetSize);
