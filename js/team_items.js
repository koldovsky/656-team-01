(function () {
    const items = [
        {
         title: "Andrew Sommer",
         alt: "CEO",
         description: "Andrew is the founder of our company and a famous architect with 10+ years of experience and 100+ implemented projects.",
         image: "img/ceo.webp",
        },
        {
         title: "Tim Maisner",
         alt: "Chief architect",
         description: "Tim is responsible for the development of new models of our ready-made cottages that you can order right now.",
         image: "img/chiefarchitect.webp",  
        },
        {
         title: "Jessica Audern",
         alt: "Chief interior designer",
         description: "Jessica is our chief designer and works on the future interior of your home to make it comfortable and stylish.",
         image: "img/chief_interior_designer.webp", 
        },
    ];
    function renderItems(items) {
        const itemsContainer = document.querySelector(".our_team_content");
        for (const item of items) {
            itemsContainer.innerHTML += `<div class="our_team_content_item">
                <img class="img_team" src="${item.image}" width="200" alt="${item.alt}">
                <h3>${item.title}</h3>
                <p><span class="our_color">${item.alt}</span></p>
                <p>${item.description}</p>
                </div>`  
        }
    }
renderItems(items);
})();

   
