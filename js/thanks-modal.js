(function () {
  document.addEventListener('DOMContentLoaded',function() {
  const contactButton = document.querySelector('.contactButton');

  const modalForm = document.querySelector('.modal');
  
  const closeButtonOk = modalForm.querySelector('.modal__close-button_ok');

  const closeButton = modalForm.querySelector('.exitBut');

  contactButton.addEventListener('click', function (e) {
    modalForm.classList.add('modal_active');
  });

  closeButtonOk.addEventListener('click', function (e) {
    e.preventDefault();
    modalForm.classList.remove('modal_active');
  });

  closeButton.addEventListener('click', function (e) {
    e.preventDefault();
    modalForm.classList.remove('modal_active');
  });
});
})(); 

 
  
    
    
    


  