(function() {
    const slides = [
      `<div class="slider-box">
      <article class="slider__item">
      <img id="customer__photo" src="img/photo_amanda.webp" alt="photo_amanda">
      <h2 id="customer__name">Amanda Peterson</h2>
      <p id="customer-reviews__text">“ZEN Cottages created a perfect vacation house for us! It's a place comfortable and spacious enough to
        invite
        friends over. They deserve the highest grade!”
      </p>
      <h5 id="reviews__date">11 MARCH, 2021</h3>
    </article>
    </div>`,
      `<div class="slider-box">
      <article class="slider__item">
      <img id="customer__photo" src="img/photo_jeff.webp" alt="photo_jeff">
      <h2 id="customer__name">Jeff Gordons</h2>
      <p id="customer-reviews__text">“We bought the Shast model because we wanted something simple yet proven good. It was one of the best
        decisions for my family!Thanks for our new favorite place to stay.”
      </p>
      <h5 id="reviews__date">13 JUNE, 2021</h2>
    </article>
    </div>`,
    `<div class="slider-box">
    <article class="slider__item">
    <img id="customer__photo" src="img/photo_elizabeth.webp" alt="photo_elizabeth">
    <h2 id="customer__name">Elizabeth Smith</h2>
    <p id="customer-reviews__text">“My husband and I travel a lot, so we wanted something to make our travels more comfortable. As it turned
      out, ZEN Cottages had the right solution for us.”</p>
    <h5 id="reviews__date">21 OCTOBER, 2020</h3>
    </article>
    </div>`,
      ];
    let currentSlide = 0;
    function showCurrentSlide() {
      const slideContainer = document.querySelector('.products-carousel__slide');
      slideContainer.innerHTML = slides[currentSlide];
      if (window.innerWidth>900) {
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