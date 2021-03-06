import { productMenuEventListeners } from "../helpers/eventListeners";
import { renderHamburger } from "../helpers/rightButton";
import CONSTANTS from "../helpers/constants";
import { State } from "../helpers/model";

//5qayl
export const renderProductMenuPage = (title) => {
  const wrapper = `<div class="productMenuBody">
    <div class="main-block">
    <header>
      <div><i class="fas fa-arrow-left" id="productMenu-arrow"></i></div>
       <nav class="hiddenMenuGeneralMenu">
        
      </nav>
    </header>
    <main class = "selected">
      
      
    </main>
    </div>
  </div>`;
  document.querySelector(".mainContainer").innerHTML = wrapper;
  renderHamburger();
  fetch(`${CONSTANTS.HOST}/product?url=get-by-id&product_id=${title}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      State.productTypes = data;
      let p = data.map(function (data) {
        return `<div class="main-header" card_${data.name}">${data.name}</div>
                  <div class="main-colums">
                    <div class="colums-1">
                      <div class="peperoni">
                        <img src="./img/pizza2.png" alt="" />
                      </div>
                      <div class="colums-1-price"><label>Գին՝</label> <label id="gin">${data.price}${data.currency}</label> </div>
                      </div>
                    <div class="colums-2">
                      <div class="row-1">Բաղադրություն</div>
                      <div class="row-2">Պանիր  </div>
                      <div class="row-2"> Երշիկ </div>
                      <div class="row-2"> Լոլիկ </div>
                      <div class="row-3"> <label for="quantity">Քանակ (կտոր)</label><input type="number" id="quantity" value ="1"  min="1" max="30">
                    </div>
                  </div>
                  <footer>
                   <div class="addButton"> 
                     <button class="addBasketButton">Ավելացնել զամբյուղում</button>
                    </div>
                   </footer> `;
      });
      document.querySelector(".selected").insertAdjacentHTML("afterbegin", p);
      let prodData = data[0];
      productMenuEventListeners(prodData);
    });
};

 