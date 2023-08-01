(() => {
	const init = () => {
		const array = new Set<HTMLElement>();

		document
			.querySelectorAll<HTMLElement>('[data-testid="unlike"]')
			.forEach((el) => array.add(el));

		let k = 0;

		for (const el of array) {
			k += 50;

			setTimeout(() => {
				el.scrollIntoView();
				array.delete(el);
				el.click();
			}, 50 + k);
		}
	};

	init();

	setInterval(() => window.scrollTo(0, window.scrollY + 500), 1000);
	setInterval(() => init(), 1000);
})();
