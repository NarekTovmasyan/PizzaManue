//5qayl
import { detailedPageEventListeners } from "../helpers/eventListeners";
import { renderHamburger } from "../helpers/rightButton";
import CONSTANTS from "../helpers/constants";
import { createSlugFromName } from "../helpers/helpers";
import { filter } from "../helpers/eventListeners";
//4qayl
export const renderDetailedPage = (type) => {
    console.log(type);
    const wrapper = `<div class="detailed">
    <nav class="menuDetailed">
<i class="fas fa-arrow-left" id="detailedPage-arrow"></i>
<div class="hiddenMenuGeneralMenu">

</div>
</nav>5
<div class="parent-containerDetailed">
<div class="card-containerDetailed">

</div>

</div>
 <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span class="filterButton">Filter</span>
    </label>
    
    <ul class="menu__box">
      <h1 class="filterWindowName">FILTER</h1>
      <div class="parentInput">
      <input type="text" class="searchIngredient" placeholder="Search ingredients..." />
      <button class="searchButton"><i class="fas fa-search"></i></button>
      </div>
      
      <div>
    

      </div>
      

    </ul>
  </div>
</div>`;
    document.querySelector(".mainContainer").innerHTML = wrapper; //nkarec, hin@ jnjec
    renderHamburger();
    fetch(`${CONSTANTS.HOST}/productType?url=get-all`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // data = [{}{}{}]  ->>>>>>>>> [{id=2, name=juice}]
            let res = data.filter(function(params) {
                //{id=2,name=xort}
                return params.name == type; // xortic==jucie
            });
            // show(res);
            return res;
        }).then(function(type) {
            console.log("text", type);
            fetch(`${CONSTANTS.HOST}/product?url=get-all-by-product-type&product_type_id=${type[0].id}`)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    let d = data.map(function(params) {
                        return `<div class="cardDetailed" id="${params.name}">
         <div><img class="card2Detailed" src="./img/pizza1.png"/></div>
         <div class="line">
             <p class="detailedCardsWords"> ${params.name} <br> 1pcs: ${params.price}${params.currency} </p>
         </div>
         <div class="detailedCardIngredient1">
             <p class="detailedCardsWords">Ingredients <br>
                 <ul class="center">
                     <li>${params.ingredients[0].name}</li>
                     <li>${params.ingredients[1].name}</li>
                     <li>${params.ingredients[2].name}</li>
                 </ul>
             </p>
         </div>
         </div>`;
                    });
                    document
                        .querySelector(".card-containerDetailed")
                        .insertAdjacentHTML("afterbegin", d.join(""));
                    detailedPageEventListeners(type); //eventa kaxum productMenui mej
                });
        })
};


/*<li><a class="menu__item">Chees</a></li>
  <li><a class="menu__item">Tomato</a></li>
  <li><a class="menu__item">Ketchup</a></li>
  <li><a class="menu__item">Mushroom</a></li>
  <li><a class="menu__item">Maiones</a></li>
  <li><a class="menu__item">Ketchup</a></li>
  <li><a class="menu__item">Sausage</a></li>
  <li><a class="menu__item">Salt</a></li>
  <li><a class="menu__item">Pepper</a></li>
  <li><a class="menu__item">Sugar</a></li>*/

/* <div class="cardDetailed" id="chees_pizza">
        <div><img class="card2Detailed" src="./img/pizza1.png"/></div>
        <div class="line">
            <p class="detailedCardsWords"> Cheese Pizza <br> 1pcs: 300֏ </p>
        </div>
        <div class="detailedCardIngredient1">
            <p class="detailedCardsWords">Ingredients <br>
                <ul class="center">
                    <li>Cheese</li>
                    <li>Tomato</li>
                    <li>Pepper</li>
                </ul>
            </p>
        </div>
    </div>

    <div class="cardDetailed" id="pepperoni_pizza">
        <div><img class="card2Detailed" src="./img/pizza2.png"/></div>

        <div class="namePrice2 line">
            <p class="detailedCardsWords"> Pepperoni Pizza <br> 1pcs: 300֏</p>
        </div>

        <div class="detailedCardIngredient1">
            <p class="detailedCardsWords"> Ingredients <br>
                <ul class="center">
                    <li>Cheese</li>
                    <li>Tomato</li>
                    <li>Pepper</li>
                </ul>
            </p>
        </div>

    </div>
    <div class="cardDetailed" id="diablo_pizza">
       <div> <img class="card2Detailed" src="./img/pizza3.png"/> </div>

        <div class="namePrice3 line">
            <p class="detailedCardsWords">Cheese Pizza <br> 1pcs: 300֏</p>
        </div>

        <div class="detailedCardIngredient1">
            <p class="detailedCardsWords">Ingredients <br>
                <ul class="center">
                    <li>Cheese</li>
                    <li>Tomato</li>
                    <li>Pepper</li>
                </ul>
            </p>
        </div>

    </div> */