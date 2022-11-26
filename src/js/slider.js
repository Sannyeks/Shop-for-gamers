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


// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();





// let offset = 0;
// const sliderLine = document.querySelector('.slider__line');

// document.querySelector('.button__slide--1').addEventListener('click', function () {
//     offset = offset + 1280;
//     if (offset > 2480) {
//         offset = 0;
//     }
//     sliderLine.style.right = offset + 'px';


// });