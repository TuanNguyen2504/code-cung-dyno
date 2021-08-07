window.onload = function () {
	const themeBtn = document.getElementById('toggleBtn');

	themeBtn.addEventListener('click', function () {
		const linkTag = document.getElementById('themeCssLink');

		if (linkTag) {
			const href = linkTag.getAttribute('href');
			// kiểm tra đường dẫn có phải là file chứa light mode css không?
			const isLightMode = href?.indexOf('light-mode') !== -1;

			if (isLightMode) {
				linkTag.setAttribute('href', './dark-mode.css');
			} else {
				linkTag.setAttribute('href', './light-mode.css');
			}
		}

		this.classList.toggle('active');
	});
};
