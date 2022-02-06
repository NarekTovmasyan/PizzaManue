//4qayl
import { generalMenuEventListeners } from "../helpers/eventListeners";
import { renderHamburger } from "../helpers/rightButton";
import CONSTANTS from "../helpers/constants";
//3qayl
export const renderGeneralMenuPage = () => {
    //nkaruma 2 ej@
    const wrapper = `<div class="generalMenu">
      <nav class="hiddenMenuGeneralMenu" id="rightSideButton">
       
      </nav>
      <div class="yndhanurGeneralMenu">
        <div class="grid-containerGeneralMenu">
                 
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
      <li><a class="menu__item" href="#">Chees</a></li>
      <li><a class="menu__item" href="#">Tomato</a></li>
      <li><a class="menu__item" href="#">Ketchup</a></li>
      <li><a class="menu__item" href="#">Mushroom</a></li>
      <li><a class="menu__item" href="#">Maiones</a></li>
    </ul>
  </div>
    </div>`;

    document.querySelector(".mainContainer").innerHTML = wrapper; //naxord@ jnjuma taza html nkaruma
    renderHamburger(0);

    fetch(`${CONSTANTS.HOST}/productType?url=get-all`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            let elem = document.querySelector(".grid-containerGeneralMenu");
            elem.innerHTML = "";
            data.forEach((element) => {
                elem.innerHTML += `<a class="productsGeneralMenu" id="${element.name}"><p>${element.name}</p></a>`;
            });
            generalMenuEventListeners(); //nkareluc heto noric evenlisenera kaxum
        });

};

/* <a class="productsGeneralMenu" id="hot_dishes"><p>Տաք ուտեստներ</p></a>
  <a class="productsGeneralMenu" id="snacks"><p>Խորտիկներ</p></a>
  <a class="productsGeneralMenu" id="sweets"><p>Քաղցրավենիք</p></a>
  <a class="productsGeneralMenu" id="drink"><p>Ըմպելիք</p></a>
  <a class="productsGeneralMenu" id="pizza"><p>Պիցցաներ</p></a>
  <a class="productsGeneralMenu" id="salads"><p>Աղցաններ</p></a> */