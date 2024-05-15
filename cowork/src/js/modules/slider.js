const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider__prev-btn');
const nextButton = document.querySelector('.slider__next-btn');
const slides = Array.from(slider.querySelectorAll('.slider__slide'));
const slideCount = slides.length;
let slideIndex = 0;
let hasSlider = false;

const media = window.matchMedia('(min-width: 1024px)').matches;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
	slideIndex = (slideIndex - 1 + slideCount) % slideCount;
	updateSlider();
}

function showNextSlide() {
	slideIndex = (slideIndex + 1) % slideCount;
	updateSlider();
}

function updateSlider() {
	hasSlider = true;

	slides.forEach((slide, index) => {
		index === slideIndex
			? slide.classList.remove('slider__slide_hidden')
			: slide.classList.add('slider__slide_hidden');
	});
}

function removeSlider() {
	hasSlider = false;

	slides.forEach((slide) => {
		if (slide.classList.contains('slider__slide_hidden')) {
			slide.classList.remove('slider__slide_hidden');
		}
	});
}

if (!media) updateSlider();

window.addEventListener('resize', () => {
	if (window.innerWidth >= 1024 && hasSlider) {
		removeSlider();
	} else if (window.innerWidth < 1024 && !hasSlider) {
		updateSlider();
	}
});
