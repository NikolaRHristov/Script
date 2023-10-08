(() => {
	const init = () => {
		document
			.querySelectorAll<HTMLAnchorElement>(
				'[data-testid="ScrollSnap-List"] > [role="tab"]'
			)
			.forEach((Element, Index) => {
				Index ===
				new Number(
					new URL(document.location.href).searchParams.get("Index")
				)
					? Element
					: {};
			});
	};

	init();

	setInterval(() => window.scrollTo(0, window.scrollY + 500), 15000);
	setInterval(() => init(), 80000);
})();
