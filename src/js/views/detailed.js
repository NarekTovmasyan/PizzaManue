//5qayl
import { detailedPageEventListeners } from "../helpers/eventListeners";
import { renderHamburger } from "../helpers/rightButton";
import CONSTANTS from "../helpers/constants";
 
export const renderDetailedPage = (type) => {
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
                             <li><a class="menu__item">Chees</a></li>
                             <li><a class="menu__item">Tomato</a></li>
                             <li><a class="menu__item">Ketchup</a></li>
                             <li><a class="menu__item">Mushroom</a></li>
                             <li><a class="menu__item">Maiones</a></li>
                             <li><a class="menu__item">Ketchup</a></li>
                             <li><a class="menu__item">Sausage</a></li>
                             <li><a class="menu__item">Salt</a></li>
                             <li><a class="menu__item">Pepper</a></li>
                             <li><a class="menu__item">Sugar</a></li>
                      </div>
    </ul>
  </div>
</div>`;
  document.querySelector(".mainContainer").innerHTML = wrapper;
  renderHamburger();
  fetch(
    `${CONSTANTS.HOST}/product?url=get-all-by-product-type&product_type_id=${type}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let d = data.map(function (params) {
        let cardDetailed = `<div class="cardDetailed" id="${params.id}">
                                    <div><img class="card2Detailed" src="./img/pizza1.png"/></div>
                                    <div class="line">
                                    <p class="detailedCardsWords"> ${params.name} <br> 1pcs: ${params.price}${params.currency} </p>
                                    </div>
                                    <div class="detailedCardIngredient1">
                                    <p class="detailedCardsWords">Ingredients <br>
                                    <ul class="center">`;
        cardDetailed += getIngredientsToDom(params);
        cardDetailed += `</ul>
                    </p>
                    </div>
                    </div>`;

        return cardDetailed;
      });
      document
        .querySelector(".card-containerDetailed")
        .insertAdjacentHTML("afterbegin", d.join(""));
      detailedPageEventListeners(type);
    });

  function getIngredientsToDom(paramsData) {
    let ingredientsList = paramsData.ingredients.map(function (ingredient) {
      return `<li>${ingredient.name}</li>`;
    });
    return ingredientsList.join("");
  }
};

