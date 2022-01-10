let popupBg = document.querySelector('.popup__bg'); 
let popup = document.querySelector('.popup'); 
let openPopupButtons = document.querySelectorAll('.header_banner_button'); 
let closePopupButton = document.querySelector('.close-popup'); 
openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active');
        popup.classList.add('active'); 
    })
});
closePopupButton.addEventListener('click',() => { 
    popupBg.classList.remove('active'); 
    popup.classList.remove('active'); 
});
document.addEventListener('click', (e) => { 
    if(e.target === popupBg) { 
        popupBg.classList.remove('active'); 
        popup.classList.remove('active'); 
    }
});