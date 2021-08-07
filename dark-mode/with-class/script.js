window.onload = function () {
	const themeBtn = document.getElementById('toggleBtn');

	themeBtn.addEventListener('click', function () {
		this.classList.toggle('active');
	});
};
