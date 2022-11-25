(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
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



// slider Voloshyn
let offset = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.button__slide--1').addEventListener('click', function () {
    offset = 0;
    sliderLine.style.right = offset + 'px';
    

});

document.querySelector('.button__slide--2').addEventListener('click', function () {
    offset = 1280;
    sliderLine.style.right = offset + 'px';


});

document.querySelector('.button__slide--3').addEventListener('click', function () {
    offset = 2560;
    sliderLine.style.right = offset + 'px';


});
