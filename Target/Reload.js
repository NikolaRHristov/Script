(() => {
	const e = () => {
		document
			.querySelectorAll('[data-testid="ScrollSnap-List"] > [role="tab"]')
			.forEach((t, n) => {
				new Number(
					new URL(document.location.href).searchParams.get("Index")
				);
			});
	};
	e(),
		setInterval(() => window.scrollTo(0, window.scrollY + 500), 15e3),
		setInterval(() => e(), 8e4);
})();
