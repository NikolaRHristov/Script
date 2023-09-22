(() => {
	const init = () => {
		const _Array = new Set<HTMLElement>();

		document
			.querySelectorAll<HTMLElement>('[data-testid="unlike"]')
			.forEach((el) => _Array.add(el));

		let k = 0;

		for (const el of _Array) {
			k += 50;

			setTimeout(() => {
				el.scrollIntoView();
				_Array.delete(el);
				el.click();
			}, 50 + k);
		}
	};

	init();

	setInterval(() => window.scrollTo(0, window.scrollY + 500), 1000);
	setInterval(() => init(), 1000);
})();
