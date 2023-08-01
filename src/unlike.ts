(() => {
	const init = () => {
		const array = new Set<HTMLElement>();

		document
			.querySelectorAll<HTMLElement>('[data-testid="unlike"]')
			.forEach((el) => array.add(el));

		let k = 0;

		for (const el of array) {
			k += 1000;

			setTimeout(() => {
				el.scrollIntoView();
				array.delete(el);
				el.click();
			}, 1000 + k);
		}
	};

	init();

	setInterval(() => window.scrollTo(0, window.scrollY + 500), 15000);
	setInterval(() => init(), 10000);
})();
