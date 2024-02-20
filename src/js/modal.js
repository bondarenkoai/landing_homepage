(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-login-open]'),
        closeModalBtn: document.querySelector('[data-modal-login-close]'),
        modal: document.querySelector('[data-modal-login]'),
        backdrop: document.querySelector('.backdrop__login'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.backdrop.addEventListener('click', onBackdropClick);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        refs.backdrop.classList.toggle('is-visible');
    }

    function onBackdropClick(event) {
        if (event.target === refs.backdrop) {
            toggleModal();
        }
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-signup-open]'),
        closeModalBtn: document.querySelector('[data-modal-signup-close]'),
        modal: document.querySelector('[data-modal-signup]'),
        backdrop: document.querySelector('.backdrop__signup'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.backdrop.addEventListener('click', onBackdropClick);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        refs.backdrop.classList.toggle('is-visible');
    }

    function onBackdropClick(event) {
        if (event.target === refs.backdrop) {
            toggleModal();
        }
    }
})();
