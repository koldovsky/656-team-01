(function () {
    const products = [
      {
        "id": 1,
        link: "Read More",
        title: "Consulting",
        description:
          "Do your requirements truly match your needs and your budget? The pre-construction planning phase helps you figure this out and come up with adjustments if necessary, making your dreams and goals achievable.",
          background: "img/service1.png",
          image: "img/arrow1.svg",
      },
      {
        "id": 2,
        link: "Read More",
        title: "Restoration",
        description:
        "Any home could suffer from things affecting its integrity or aesthetics. Lucky for you, we can help deal with those things as well. Contact us for professional restoration services. Alice was beginning to get.",
        background: "img/serv7.png",
        image: "img/arrow1.svg",
      },

      {
        "id": 3,
        link: "Read More",
        title: "New home construction",
        description:
        "Whether you need a home or a place to spend your vacations in, we can help you. We offer diverse and flexible solutions along with professional suggestions to meet and then exceed all your expectations.",
        background: "img/serv6.png",
        image: "img/arrow1.svg",
      },

      {
        "id": 4,
        link:"Read More",
        title: "Interior design",
        description:
        "A new home is always a new lifestyle. Our designers will offer you beautiful and ergonomic solutions to fill your new home with comfort and coziness. We will show you a design project and supervise all the works.",
        background: "img/service5.png",
        image: "img/arrow1.svg",

      },
    ];

   
 
    function renderProducts(products) {
      const productsContainer = document.querySelector(".showcase-grid");
      for (const product of products) {
        productsContainer.innerHTML += 
        `<div class="consulting">
        <img class="new-image-interior" src="${product.background}">
       <a class="link-read-more-interior" href="#">${product.link}
        <img src="${product.image}" width="25" alt=" "/>
        </a>
        <h3 class="showcase-h3-card">${product.title}</h3>
        <p class="showcase-p-card">${product.description}</p>
      </div>`;
      }
    }
  
    renderProducts(products);


    }
  )();