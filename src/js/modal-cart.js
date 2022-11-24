(() => {
  const refs = {
    openModalBtnCart: document.querySelector('[data-modal-open-cart]'),
    closeModalBtnCart: document.querySelector('[data-modal-close-cart]'),
    modalCart: document.querySelector('[data-modal-cart]'),
  };

  refs.openModalBtnCart.addEventListener('click', toggleModalCart);
  refs.closeModalBtnCart.addEventListener('click', toggleModalCart);

  function toggleModalCart() {
    refs.modalCart.classList.toggle('is-hidden');
  }
})();
