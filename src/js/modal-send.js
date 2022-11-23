(() => {
  const refs = {
    openModalBtnSend: document.querySelector('[data-modal-open-send]'),
    closeModalBtnSend: document.querySelector('[data-modal-close-send]'),
    modalSend: document.querySelector('[data-modal-send]'),
  };

  refs.openModalBtnSend.addEventListener('click', toggleModalSend);
  refs.closeModalBtnSend.addEventListener('click', toggleModalSend);

  function toggleModalSend() {
    refs.modalSend.classList.toggle('is-hidden');
  }
})();
