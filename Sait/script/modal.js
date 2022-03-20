const btns = document.querySelectorAll('.equipment__cataloge__item');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal__visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal__visible');
		modalOverlay.classList.add('modal-overlay__visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay__visible');
		modals.forEach((el) => {
			el.classList.remove('modal__visible');
		});
	}
});

