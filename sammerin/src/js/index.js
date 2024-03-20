const page = document.querySelector('.page');
const loader = document.querySelector('.loader');

// loader

window.addEventListener('load', () => {
	setTimeout(() => page.classList.add('loaded'), 500);
	setTimeout(() => loader.classList.add('hide'), 1000);
})

// Swipers

const pageSwiper = new Swiper('.page__swiper', {
	slidesPerView: 1,
	allowTouchMove: false,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.page__swiper-button-next',
		prevEl: '.page__swiper-button-prev',
	},
});

const shopSwiper = new Swiper('.shop__swiper', {
	grabCursor: true,
	spaceBetween: 60,
	centeredSlides: true,
	breakpoints: {
		480: {
			slidesPerView: 1.5,
			spaceBetween: 30
		},
		640: {
			slidesPerView: 1.25,
			spaceBetween: 30
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 60
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 60
		},
	},
});

const testimonialsSwiper = new Swiper('.testimonials__swiper', {
	grabCursor: true,
	autoplay: 5000,
	loop: true,
	autoplay: {
		delay: 3000,
		pauseOnMouseEnter: true,
	},
	spaceBetween: 60,
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30
		},
	},
});