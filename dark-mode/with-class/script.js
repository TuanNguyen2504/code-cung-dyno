function loadTheme() {
	// Lấy giá trị của theme đã được lưu trong localStorage
	// Nếu không có thì mặc định là 'light'
	const theme = localStorage.getItem('theme') || 'light';

	if (theme !== 'light') {
		document.body.classList.add('darkmode-active');
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
		document.body.classList.toggle('darkmode-active');

		const isDarkMode = document.body.classList.contains('darkmode-active');
		setTheme(!isDarkMode);

		this.classList.toggle('active');
	});
};
