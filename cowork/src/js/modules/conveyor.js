const target = document.querySelector('.trusted__list');
let isAnimated = false;

if (
	!window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
	!window.matchMedia('(min-width: 768px)').matches
) {
	addAnimation();
}

function addAnimation() {
	isAnimated = true;
	createCopy(target);
}

function removeAnimation() {
	const copies = target.querySelectorAll('.trusted__item[aria-hidden="true"]');
	copies.forEach((elem) => elem.remove());

	isAnimated = false;
}

function createCopy(target) {
	const targetContent = Array.from(target.children);

	targetContent.forEach((elem) => {
		copyPast(elem, target);
	});
}

function copyPast(elem, target) {
	const duplicatedElem = elem.cloneNode(true);
	duplicatedElem.setAttribute('aria-hidden', true);
	target.append(duplicatedElem);
}

window.addEventListener('resize', () => {
	if (document.documentElement.clientWidth >= 768 && isAnimated) {
		removeAnimation();
	} else if (document.documentElement.clientWidth < 768 && !isAnimated) {
		addAnimation();
	}
});
