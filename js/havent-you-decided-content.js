(function () {
    const haventBlock = [
        {
            title: "Experienced team",
            description: "Our team of experts will work hard to create a dream home for you. Each of our employees has vast experience.",
            image: "img/havent-you-decided/icon-experienced-team.svg"
        },
        {
            title: "Quality materials",
            description: "We use only high-quality materials and tools in the construction process. The cottages are 100% safe.",
            image: "img/havent-you-decided/icon-quality-materials.svg" 
        },
        {
            title: "Money back guarantee",
            description: "Your comfort and safety are guaranteed! You'll get your money back if you aren't satisfied.",
            image: "img/havent-you-decided/icon-money-back.svg"
        },
        {
            title: "Variety of options",
            description: "Design your own cottage or pick one from the variety of ready-made models we have designed for our clients.",
            image: "img/havent-you-decided/icon-variety-of-options.svg"
        },
        {
            title: "Individual approach",
            description: "We listen to your requests and offer personalized options and suggestions just for you.",
            image: "img/havent-you-decided/icon-individual-approach.svg"
        },
        {
            title: "Dreams come true",
            description: "Comfort, stability, and great aesthetics — we work hard to create all of this just for you.",
            image: "img/havent-you-decided/icon-dreams-come.svg"
        }
    ];
    function showHaventYouContent(haventBlock) {
        const haventYouContainer = document.querySelector ('.class="havent-you-decided-section-content');
        for (const haventBlock of haventBlocks) {
            haventYouContainer.innerHTML +=
           `<div class="havent-you-decided-section-content">
            <img class="havent_you_decided__icon" src="${haventBlock.image}" alt="${haventBlock.title}">
            <h3 class="experienced_team">${haventBlock.title}</h3>
            <p class="experienced_team_description">${haventBlock.description}</p>
            </div>;`;
        }
    }
    rshowHaventYouContent(haventBlock);
})()
