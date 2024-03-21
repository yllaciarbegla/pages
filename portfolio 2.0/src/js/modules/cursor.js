export const cursorInit = () => {
	const aura = document.querySelector('.aura');
	const cursor = document.querySelector('.cursor');

	document.addEventListener('mouseover', (e) => {
		cursor.classList.remove('hidden');
		aura.classList.remove('hidden');

		if (e.target.classList.contains('active-button')) {
			cursor.classList.add('active');
			aura.classList.add('active');
		}
	});

	document.addEventListener('mousemove', (e) => {
		let x = e.clientX;
		let y = e.clientY;

		let newCoord = `left:${x}px;top:${y}px;`;

		cursor.style.cssText = newCoord;
		aura.style.cssText = newCoord;
	});

	document.addEventListener('mouseout', (e) => {
		cursor.classList.add('hidden');
		aura.classList.add('hidden');

		if (e.target.classList.contains('active-button')) {
			cursor.classList.remove('active');
			aura.classList.remove('active');
		}
	});

	document.addEventListener('mousedown', () => {
		cursor.classList.add('cursorinnerhover');
	});

	document.addEventListener('mouseup', () => {
		cursor.classList.remove('cursorinnerhover');
	});
};
