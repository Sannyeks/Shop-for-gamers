(() => {
  const refSend = {
    openModalBtnSend: document.querySelector('[data-modal-open-send]'),
    closeModalBtnSend: document.querySelector('[data-modal-close-send]'),
    modalSend: document.querySelector('[data-modal-send]'),
  };

  refSend.openModalBtnSend.addEventListener('click', toggleModalSend);
  refSend.closeModalBtnSend.addEventListener('click', toggleModalSend);

  function toggleModalSend() {
    refSend.modalSend.classList.toggle('is-hidden');
  }
})();
