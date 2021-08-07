window.onload = function () {
	const themeBtn = document.getElementById('toggleBtn');

	themeBtn.addEventListener('click', function () {
		document.body.classList.toggle('darkmode-active');

		this.classList.toggle('active');
	});
};
