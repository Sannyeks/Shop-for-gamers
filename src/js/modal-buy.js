(() => {
    const refs = {
      openModalBtnBuy: document.querySelector('[data-modal-open-buy]'),
      closeModalBtnBuy: document.querySelector('[data-modal-close-buy]'),
      modalBuy: document.querySelector('[data-modal-buy]'),
    };
  
    refs.openModalBtnBuy.addEventListener('click', toggleModalBuy);
    refs.closeModalBtnBuy.addEventListener('click', toggleModalBuy);
  
    function toggleModalBuy() {
      refs.modalBuy.classList.toggle('is-hidden');
    }
  })();
  