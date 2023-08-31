(() => {
	setInterval(() => {
		document
		.querySelector<HTMLElement>('[data-tooltip="Add to collection"]')
		?.click();

		setTimeout(() => {
			document.querySelector<HTMLElement>('.add-to-saved')?.click();
		
			setTimeout(() => {
				document.querySelector<HTMLElement>('.upnext-item.active + .upnext-item img')?.click();
			}, 1000);
		}, 500);
	}, 3000);
})();


