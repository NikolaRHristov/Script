(() => {
	const l = () => {
		const t = new Set();
		document
			.querySelectorAll('[data-testid="unlike"]')
			.forEach((e) => t.add(e));
		let o = 0;
		for (const e of t)
			(o += 50),
				setTimeout(() => {
					e.scrollIntoView(), t.delete(e), e.click();
				}, 50 + o);
	};
	l(),
		setInterval(() => window.scrollTo(0, window.scrollY + 500), 1e3),
		setInterval(() => l(), 1e3);
})();
