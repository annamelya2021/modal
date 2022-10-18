const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
};
refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
    window.addEventListener('keydown', onEscPress);
    document.body.classList.add('show-modal');
}
function onCloseModal() {
    window.removeEventListener('keydown', onEscPress);
    document.body.classList.remove('show-modal');
}
function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
        console.log('Кликнули именно в бекдроп');
        onCloseModal();
    }
}
function onEscPress(event) {
    const ESC_KEY_CODE = 'Escspe';
    const isEscKey = event.code === ESC_KEY_CODE;
    console.log(event);
    if (isEscKey) {
        onCloseModal();
    }
}
