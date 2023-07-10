(() => {
	const init = () => {
		const array = new Set<HTMLElement>();

		document
			.querySelectorAll<HTMLElement>(
				'.artdeco-button[aria-label^="Invite"]'
			)
			.forEach((el) => array.add(el));

		let k = 0;

		array.forEach((el: HTMLElement) => {
			k += 1000;
			setTimeout(
				() =>
					array.delete(el) &&
					setTimeout(
						() =>
							document
								.querySelector<HTMLElement>(
									'[aria-label="Send now"]'
								)
								?.click(),
						1500
					) &&
					el.click(),
				3000 + k
			);

			setTimeout(() => {
				if (
					document.querySelectorAll('[aria-label="Add a note"]')
						.length > 0
				) {
					console.log("Remove");
					document
						.querySelector<HTMLElement>('[aria-label="Dismiss"]')
						?.click();

					el.remove();
				}
			}, 4000);
		});

		array.size === 0
			? document
					.querySelector<HTMLElement>(
						'.artdeco-pagination__button[aria-label="Next"]'
					)
					?.click()
			: true;
	};

	init();

	setInterval(init, 10000);
})();
