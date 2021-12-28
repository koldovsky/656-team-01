const cottages = [
    {
        id: "1",
        title: "Alpine",
        price: "$30000",
        description: "Alpine is our most economical model, specially created for seasoned travelers. The cottage is built on a custom lightweight trailer to be handled on the roads with is. It is efficient, compact, and ready to go the distance.",
        image: "img/alpine.png"
    },
    {
        id: "2",
        title: "Alise",
        price: "$30000",
        description: "This cottage is made of steel and glass for those who like the modern style, futuristic design, and lots of air and space in their homes. The cottage is perfect for permanent living for 3-5 persons.",
        image: "img/alise.png"  
    },
    {
        id: "3",
        title: "Shast",
        price: "$50000",
        description: "Living in a tiny home is fun and practical when it's Shast. This cottage is designed both for a part-time and permanent living and can accommodate up to 3 people comfortably.",
        image: "img/shast.png" 
    },
    {
        id: "4",
        title: "Mammoth",
        price: "$30000",
        description: "The Mammoth cottage is designed to accommodate up to 4 people and is suitable for permanent living. Mammoth has full kitchen and bathroom, office workspace, bottom floor sleeping area, and dual lofts.",
        image: "img/shast.png" 
    }
];

function renderCottages(cottages) {
    const cottageContainer = document.querySelector('.cottages-slides');
    let html = '';
    for (const cottage of cottages) {
        html +=
       `<div class="slide">
          <div class="photo-container"><img class="product-photo" src="${cottage.image}" alt="${cottage.title}"></div>
          <div class="wrapper">
            <div class="heading-elements">
              <img class="small-icon" src="img/house-pic.svg">
              <h3 class="cottage-name-color">${cottage.title}</h3>
            </div>
            <div class="heading-elements">
              <img class="small-icon" src="img/days.svg">
              <h3>60-90 Days</h3>
            </div>
            <div class="heading-elements">
              <img class="small-icon" src="img/price.svg">
              <h3>${cottage.price}</h3>
            </div>
          </div>
          <div class="description">
            <p>${cottage.description}</p>
          </div>
          <div class="choose-cottage"><a class="contact-form" href="#contact-form">Choose cottage <img
                class="small-icon arrow-position" src="img/arrow1.svg" alt="arrow"></a></div>
        </div>`;
        
    }
    cottageContainer.innerHTML = html;
};
renderCottages(cottages);