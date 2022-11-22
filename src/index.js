(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),

    openModalBtnCart: document.querySelector('[data-modal-open-cart]'),
    closeModalBtnCart: document.querySelector('[data-modal-close-cart]'),
    modalCart: document.querySelector('[data-modal-cart]'),

    openModalBtnBuy: document.querySelector('[data-modal-open-buy]'),
    closeModalBtnBuy: document.querySelector('[data-modal-close-buy]'),
    modalBuy: document.querySelector('[data-modal-buy]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openModalBtnCart.addEventListener('click', toggleModalCart);
  refs.closeModalBtnCart.addEventListener('click', toggleModalCart);

  refs.openModalBtnBuy.addEventListener('click', toggleModalBuy);
  refs.closeModalBtnBuy.addEventListener('click', toggleModalBuy);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function toggleModalCart() {
    refs.modalCart.classList.toggle('is-hidden');
  }

  function toggleModalBuy() {
    refs.modalBuy.classList.toggle('is-hidden');
  }
})();



let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
  
    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });


    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }



    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();