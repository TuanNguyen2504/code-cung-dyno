window.onload = function () {
	const themeBtn = document.getElementById('toggleBtn');

	themeBtn.addEventListener('click', function () {
		// Lấy thuộc tính data-theme
		const root = document.querySelector(':root');
		const isLightMode =
			root.getAttribute('data-theme') === 'dark' ? false : true;

		// toggle theme mode
		if (isLightMode) {
			root.setAttribute('data-theme', 'dark');
		} else {
			root.setAttribute('data-theme', 'light');
		}

		// thay đổi vị trí của button
		this.classList.toggle('active');
	});
};
