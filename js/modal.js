(function () {
  let testBut = document.querySelector(".testBut");
  
  testBut.addEventListener('click', function() {
    let idModal = this.getAttribute('data-modal-id');
    openModal (idModal)
  })
  
  function openModal(id_Modal) {
    let modalWindow = document.querySelector(id_Modal);

    if(modalWindow.classList.contains("active")) {
      modalWindow.classList.remove('active');
    }
    else {
      modalWindow.classList.add('active');
    }

    let butExit = modalWindow.querySelector('.butExit');

    butExit.addEventListener('click', function() {
      modalWindow.classList.remove('active');
    })
    let backBlack = modalWindow.querySelector('.backBlack');

    backBlack.addEventListener('click', function() {
      modalWindow.classList.remove('active');
    })
  }
})();   
    
    
    


  