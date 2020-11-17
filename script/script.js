let x = document.getElementsByClassName("filter-button");
let filter = "any";
const options = [
    "any",
    "website",
    "application",
    "design",
    "marketing"
];

const handler = (option) => (e) => { 
    let btns = document.getElementsByClassName("filter-button");
    for (let j = 0; j < btns.length; j++) { 
        btns[j].classList.remove("current");
    }
    e.target.classList.add("current");
    
    filter = option;

    let cards = document.getElementsByClassName("portfolio-card");
    for (let j = 0; j < cards.length; j++) { 
        cards[j].classList.remove("card-invisible");
        
        if (filter === "any") {
            continue;
        }

        if (!cards[j].classList.contains(filter)) {
            cards[j].classList.add("card-invisible");
        }
    }
}

for (let i = 0; i < x.length; i++) {   
    x[i].addEventListener('click', handler(options[i]));
}