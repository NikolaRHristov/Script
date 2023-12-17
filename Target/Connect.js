(() => {
	const l = () => {
		const t = new Set();
		document
			.querySelectorAll('.artdeco-button[aria-label^="Invite"]')
			.forEach((e) => t.add(e));
		let o = 0;
		t.forEach((e) => {
			(o += 2e3),
				setTimeout(
					() =>
						t.delete(e) &&
						setTimeout(
							() =>
								document
									.querySelector('[aria-label="Send now"]')
									?.click(),
							1500
						) &&
						e.click(),
					3e3 + o
				),
				setTimeout(() => {
					document.querySelectorAll('[aria-label="Add a note"]')
						.length > 0 &&
						(console.log("Remove"),
						document
							.querySelector('[aria-label="Dismiss"]')
							?.click(),
						e.remove());
				}, 4e3);
		}),
			t.size === 0 &&
				document
					.querySelector(
						'.artdeco-pagination__button[aria-label="Next"]'
					)
					?.click();
	};
	l(), setInterval(l, 1e4);
})();
