let menuBtn = document.querySelector('.header-nav-button');
            let menu = document.querySelector('.header__nav');
            menuBtn.addEventListener('click', function(){
              menuBtn.classList.toggle('active');
              menu.classList.toggle('active');
            })