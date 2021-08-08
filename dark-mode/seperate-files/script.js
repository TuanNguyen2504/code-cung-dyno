function loadTheme() {
	// Lấy giá trị của theme đã được lưu trong localStorage
	// Nếu không có thì mặc định là 'light'
	const theme = localStorage.getItem('theme') || 'light';

	if (theme !== 'light') {
		document
			.getElementById('themeCssLink')
			?.setAttribute('href', './dark-mode.css');
	}

	// Thay đổi vị trí của nút toggle nếu là dark mode
	if (theme !== 'light') {
		document.getElementById('toggleBtn').classList.add('active');
	}
}

function setTheme(isLight = true) {
	const theme = isLight ? 'light' : 'dark';
	localStorage.setItem('theme', theme);
}

window.onload = function () {
	loadTheme();

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

			setTheme(!isLightMode);
		}

		this.classList.toggle('active');
	});
};
