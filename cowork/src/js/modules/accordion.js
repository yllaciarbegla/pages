document.querySelector('.accordion').addEventListener('click', (e) => {
	if (e.target.classList.contains('accordion-item__trigger')) {
		const parentItem = e.target.closest('.accordion-item');

		if (parentItem.classList.contains('accordion-item__active')) {
			parentItem.classList.remove('accordion-item__active');
			e.target.setAttribute('aria-expanded', false);
			parentItem
				.querySelector('.accordion-item__content')
				.classList.toggle('collapsible_collapsed');
		} else {
			document.querySelectorAll('.accordion-item').forEach((item) => {
				if (item.classList.contains('accordion-item__active')) {
					item.classList.remove('accordion-item__active');
					item
						.querySelector('.accordion-item__trigger')
						.setAttribute('aria-expanded', false);
					item
						.querySelector('.accordion-item__content')
						.classList.toggle('collapsible_collapsed');
				}
			});

			parentItem.classList.add('accordion-item__active');
			e.target.setAttribute('aria-expanded', true);
			parentItem
				.querySelector('.accordion-item__content')
				.classList.toggle('collapsible_collapsed');
		}
	}
});
