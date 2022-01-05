(function() {
    const slides = [
      `<article class="slider__item">
      <img width="120" src="img/photo_amanda.webp" alt="photo_amanda">
      <h2>Amanda Peterson</h2>
      <p>“ZEN Cottages created a perfect vacation house for us! It's a place comfortable and spacious enough to
        invite
        friends over. They deserve the highest grade!”
      </p>
      <h3>11 MARCH, 2021</h3>
    </article>`,
      `<article class="slider__item">
      <img width="120" src="img/photo_jeff.webp" alt="photo_jeff">
      <h2>Jeff Gordons</h2>
      <p>“We bought the Shast model because we wanted something simple yet proven good. It was one of the best
        decisions for my family! Thanks for our new favorite place to stay.”
      </p>
      <h3>13 JUNE, 2021</h3>
    </article>`,
    `<article class="slider__item">
    <img width="120" src="img/photo_elizabeth.webp" alt="photo_elizabeth">
    <h2>Elizabeth Smith</h2>
    <p>“My husband and I travel a lot, so we wanted something to make our travels more comfortable. As it turned
      out, ZEN Cottages had the right solution for us.”</p>
    <h3>21 OCTOBER, 2020</h3>
    </article>`,
      ];
    let currentSlide = 0;
    function showCurrentSlide() {
      const slideContainer = document.querySelector('.products-carousel__slide');
      slideContainer.innerHTML = slides[currentSlide];
      if (window.innerWidth>600) {
        const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlide];
      }
    }
    function nextSlide() {
      currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      showCurrentSlide();
    }
    function prevSlide() {
      currentSlide = currentSlide - 1 <= 0 ?  slides.length -1 : currentSlide - 1;
      showCurrentSlide();
    }
    
    //setInterval(nextSlide, 1000);
    showCurrentSlide();
    document.querySelector('button.products-carousel__button.forward').addEventListener('click', nextSlide);
    document.querySelector('button.products-carousel__button.back').addEventListener('click', prevSlide);
    window.addEventListener('resize',showCurrentSlide);
    })();